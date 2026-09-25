export class LRUCache<K, V> {
  private readonly capacity: number;
  private readonly cache: Map<K, V>;

  constructor(capacity: number) {
    if (!Number.isInteger(capacity) || capacity <= 0) {
      throw new Error("Cache capacity must be a positive integer.");
    }

    this.capacity = capacity;
    this.cache = new Map<K, V>();
  }

  get(key: K): V | -1 {
    if (!this.cache.has(key)) {
      return -1;
    }

    const value = this.cache.get(key)!;

    // Move the accessed key to the most recently used position.
    this.cache.delete(key);
    this.cache.set(key, value);

    return value;
  }

  put(key: K, value: V): void {
    // Remove existing key first so it can be moved to MRU position.
    if (this.cache.has(key)) {
      this.cache.delete(key);
    }

    this.cache.set(key, value);

    // Map keeps insertion order, so the first key is the LRU key.
    if (this.cache.size > this.capacity) {
      const leastRecentlyUsedKey = this.cache.keys().next().value;

      if (leastRecentlyUsedKey !== undefined) {
        this.cache.delete(leastRecentlyUsedKey);
      }
    }
  }

  getSize(): number {
    return this.cache.size;
  }

  getEntries(): Array<[K, V]> {
    return Array.from(this.cache.entries());
  }
}