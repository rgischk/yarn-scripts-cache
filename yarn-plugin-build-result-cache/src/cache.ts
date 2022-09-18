
export interface Cache {
    /**
     * Saves the given cache entry in this cache instance
     *
     * @param cacheEntry The cache entry to save
     */
    saveCacheEntry(cacheEntry: CacheEntry): Promise<void>

    /**
     * Loads a cache entry from this cache instance. If no cache entry exists for the given key, undefined is returned.
     *
     * @param cacheEntryKey The key to search by
     */
    loadCacheEntry(cacheEntryKey: CacheEntryKey): Promise<CacheEntry | undefined>
}

export type CacheEntry = {
    key: CacheEntryKey
    value: CacheEntryValue
}
export type CacheEntryKey = {
    // packageHashes: string[]
    fileHashes: FileHashes
}
export type FileHashes = {
    /* file -> hash */
    [file: string]: string
}
export type CacheEntryValue = {
    fileContents: FileContent
}
export type FileContent = {
    /* file -> content */
    [file: string]: string
}