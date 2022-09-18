import {Configuration, Locator, MessageName, Plugin, Project, StreamReport} from '@yarnpkg/core';
import {PortablePath} from "@yarnpkg/fslib";
import {readConfig} from "./config";
import {Readable, Writable} from "stream"
import {buildCaches} from "./cache-factory";
import {updateBuildResultFromCache, updateCacheFromBuildResult} from "./build-result";

type WrapScriptExecution = (
    executor: () => Promise<number>,
    project: Project,
    locator: Locator,
    scriptName: string,
    extra: WrapScriptExecutionExtra,
) => Promise<() => Promise<number>>

type WrapScriptExecutionExtra = {
  script: string,
  args: Array<string>,
  cwd: PortablePath,
  env: any,
  stdin: Readable | null,
  stdout: Writable,
  stderr: Writable
}

async function buildReport(extra: WrapScriptExecutionExtra): Promise<StreamReport> {
  const configuration = Configuration.create(extra.cwd);
  return StreamReport.start({
    configuration,
    includeFooter: false,
    stdout: extra.stdout,
  }, async () => {
    /* no-op */
  })
}

const wrapScriptExecution: WrapScriptExecution = async (
    executor,
    project,
    locator,
    scriptName,
    extra
) => {
  const report = await buildReport(extra)
  const config = await readConfig(extra.cwd, report)
  if (config && config.scriptsToCache.includes(scriptName)) {
    const caches = buildCaches(extra.cwd, config)
    return async () => {
      if (await updateBuildResultFromCache(extra.cwd, project, caches)) {
        report.reportInfo(MessageName.UNNAMED, "Build result was restored from cache!")
        return Promise.resolve(0)
      } else {
        const result = await executor()
        if (result === 0) {
          await updateCacheFromBuildResult(extra.cwd, project, caches)
          report.reportInfo(MessageName.UNNAMED, "Build result cache was updated!")
        }
        return result
      }
    }
  } else {
    return executor
  }
};

const plugin: Plugin = {
  hooks: {
    wrapScriptExecution
  }
};

export default plugin;