import {MessageName, StreamReport} from "@yarnpkg/core"
import {PortablePath, ppath, toFilename, xfs} from "@yarnpkg/fslib"

import {Config} from "@rgischk/yarn-scripts-cache-api"

export const CONFIG_FILE_NAME = ".yarn-scripts-cache-rc.json"

/**
 * Reads the yarn-scripts-cache config file from the workspace at the given location.
 *
 * @param cwd The location of the workspace to read the config file for
 * @param streamReport The report object to write error messages
 */
export async function readConfig(cwd: PortablePath, streamReport: StreamReport): Promise<Config | undefined> {
    const configFile = ppath.join(cwd, toFilename(CONFIG_FILE_NAME))
    if (await xfs.existsPromise(configFile)) {
        const configContent = await xfs.readFilePromise(configFile, "utf-8")
        try {
            const config = JSON.parse(configContent)
            if (isValidConfig(config, streamReport)) {
                return config
            }
        } catch (error) {
            streamReport.reportErrorOnce(MessageName.EXCEPTION, `${CONFIG_FILE_NAME} is not valid:`)
            streamReport.reportExceptionOnce(error as Error)
        }
    }
}

function isValidConfig(config: any, streamReport: StreamReport): config is Config {
    if (typeof config !== "object") {
        streamReport.reportError(MessageName.UNNAMED, `${CONFIG_FILE_NAME} is not valid: config is not an object!`)
        return false
    }

    if (!Array.isArray(config.scriptsToCache)) {
        streamReport.reportError(MessageName.UNNAMED, `${CONFIG_FILE_NAME} is not valid: config.scriptsToCache is not an array!`)
        return false
    }
    if (config.scriptsToCache.find((item: any) => typeof item !== "object") !== undefined) {
        streamReport.reportError(MessageName.UNNAMED, `${CONFIG_FILE_NAME} is not valid: config.scriptsToCache should only contain objects!`)
        return false
    }
    if (config.scriptsToCache.find((item: any) => !isValidScriptToCache(item, streamReport)) !== undefined) {
        return false
    }

    if (config.remoteCache) {
        if (typeof config.remoteCache !== "string") {
            streamReport.reportError(MessageName.UNNAMED, `${CONFIG_FILE_NAME} is not valid: config.remoteCache should be a string!`)
            return false
        }
        if (!isValidUrl(config.remoteCache)) {
            streamReport.reportError(MessageName.UNNAMED, `${CONFIG_FILE_NAME} is not valid: config.remoteCache should be a valid URLs!`)
            return false
        }
    }

    if (config.cacheUsage) {
        if (!isValidCacheUsage(config.cacheUsage)) {
            streamReport.reportError(MessageName.UNNAMED, `${CONFIG_FILE_NAME} is not valid: config.cacheUsage is not a valid value!`)
            return false
        }
    }
    if (config.localCacheUsage) {
        if (!isValidCacheUsage(config.localCacheUsage)) {
            streamReport.reportError(MessageName.UNNAMED, `${CONFIG_FILE_NAME} is not valid: config.localCacheUsage is not a valid value!`)
            return false
        }
    }
    if (config.remoteCacheUsage) {
        if (!isValidCacheUsage(config.remoteCacheUsage)) {
            streamReport.reportError(MessageName.UNNAMED, `${CONFIG_FILE_NAME} is not valid: config.remoteCacheUsage is not a valid value!`)
            return false
        }
    }

    if (config.localCacheMaxAge !== undefined && typeof config.localCacheMaxAge !== "number") {
        streamReport.reportError(MessageName.UNNAMED, `${CONFIG_FILE_NAME} is not valid: config.localCacheMaxAge should be a number!`)
        return false
    }
    if (config.localCacheMaxAmount !== undefined && typeof config.localCacheMaxAmount !== "number") {
        streamReport.reportError(MessageName.UNNAMED, `${CONFIG_FILE_NAME} is not valid: config.localCacheMaxAmount should be a number!`)
        return false
    }

    return true
}

function isValidCacheUsage(cacheUsage: string) {
    return cacheUsage === "enabled" || cacheUsage === "disabled" || cacheUsage === "update-cache-only" || cacheUsage === "update-script-execution-result-only"
}

function isValidUrl(url: string): boolean {
    try {
        new URL(url)
        return true
    } catch (error) {
        return false
    }
}

function isValidScriptToCache(scriptToCache: any, streamReport: StreamReport): boolean {
    if (typeof scriptToCache.scriptName !== "string") {
        streamReport.reportError(MessageName.UNNAMED, `${CONFIG_FILE_NAME} is not valid: config.scriptsToCache.scriptName is no string!`)
        return false
    }

    if (scriptToCache.inputIncludes !== undefined && typeof scriptToCache.inputIncludes !== "string") {
        if (!Array.isArray(scriptToCache.inputIncludes)) {
            streamReport.reportError(MessageName.UNNAMED, `${CONFIG_FILE_NAME} is not valid: config.scriptsToCache.inputIncludes for ${scriptToCache.scriptName} is not an array!`)
            return false
        }
        if (scriptToCache.inputIncludes.find((item: any) => typeof item !== "string") !== undefined) {
            streamReport.reportError(MessageName.UNNAMED, `${CONFIG_FILE_NAME} is not valid: config.scriptsToCache.inputIncludes for ${scriptToCache.scriptName} should only contain strings!`)
            return false
        }
    }

    if (scriptToCache.inputExcludes !== undefined && typeof scriptToCache.inputExcludes !== "string") {
        if (!Array.isArray(scriptToCache.inputExcludes)) {
            streamReport.reportError(MessageName.UNNAMED, `${CONFIG_FILE_NAME} is not valid: config.scriptsToCache.inputExcludes for ${scriptToCache.scriptName} is not an array!`)
            return false
        }
        if (scriptToCache.inputExcludes.find((item: any) => typeof item !== "string") !== undefined) {
            streamReport.reportError(MessageName.UNNAMED, `${CONFIG_FILE_NAME} is not valid: config.scriptsToCache.inputExcludes for ${scriptToCache.scriptName} should only contain strings!`)
            return false
        }
    }

    if (scriptToCache.outputIncludes !== undefined && typeof scriptToCache.outputIncludes !== "string") {
        if (!Array.isArray(scriptToCache.outputIncludes)) {
            streamReport.reportError(MessageName.UNNAMED, `${CONFIG_FILE_NAME} is not valid: config.scriptsToCache.outputIncludes for ${scriptToCache.scriptName} is not an array!`)
            return false
        }
        if (scriptToCache.outputIncludes.find((item: any) => typeof item !== "string") !== undefined) {
            streamReport.reportError(MessageName.UNNAMED, `${CONFIG_FILE_NAME} is not valid: config.scriptsToCache.outputIncludes for ${scriptToCache.scriptName} should only contain strings!`)
            return false
        }
    }

    if (scriptToCache.outputExcludes !== undefined && typeof scriptToCache.outputExcludes !== "string") {
        if (!Array.isArray(scriptToCache.outputExcludes)) {
            streamReport.reportError(MessageName.UNNAMED, `${CONFIG_FILE_NAME} is not valid: config.scriptsToCache.outputExcludes for ${scriptToCache.scriptName} is not an array!`)
            return false
        }
        if (scriptToCache.outputExcludes.find((item: any) => typeof item !== "string") !== undefined) {
            streamReport.reportError(MessageName.UNNAMED, `${CONFIG_FILE_NAME} is not valid: config.scriptsToCache.outputExcludes for ${scriptToCache.scriptName} should only contain strings!`)
            return false
        }
    }

    if (scriptToCache.environmentVariableIncludes !== undefined && typeof scriptToCache.environmentVariableIncludes !== "string") {
        if (!Array.isArray(scriptToCache.environmentVariableIncludes)) {
            streamReport.reportError(MessageName.UNNAMED, `${CONFIG_FILE_NAME} is not valid: config.scriptsToCache.environmentVariableIncludes for ${scriptToCache.scriptName} is not an array!`)
            return false
        }
        if (scriptToCache.environmentVariableIncludes.find((item: any) => typeof item !== "string") !== undefined) {
            streamReport.reportError(MessageName.UNNAMED, `${CONFIG_FILE_NAME} is not valid: config.scriptsToCache.environmentVariableIncludes for ${scriptToCache.scriptName} should only contain strings!`)
            return false
        }
    }

    return true
}