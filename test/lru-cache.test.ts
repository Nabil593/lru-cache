import { LRUCache } from "../src/lru-cache";

function assert(condition: boolean, message: string): void {
  if (!condition) {
    throw new Error(`Test failed: ${message}`);
  }

  console.log(`✓ ${message}`);
}

console.log("=== LRU Cache Tests ===");
console.log("");

const cache = new LRUCache<string, number>(2);

cache.put("A", 10);
assert(cache.get("A") === 10, "get() returns stored value");

cache.put("B", 20);
assert(cache.get("B") === 20, "multiple keys can be stored");

cache.get("A");
cache.put("C", 30);

assert(
  cache.get("B") === -1,
  "least recently used key is evicted"
);

assert(
  cache.get("A") === 10,
  "recently accessed key remains in cache"
);

assert(
  cache.get("C") === 30,
  "newly inserted key remains in cache"
);

cache.put("A", 100);

assert(
  cache.get("A") === 100,
  "put() updates an existing key"
);

const invalidCapacityTest = () => {
  try {
    new LRUCache<string, number>(0);
    return false;
  } catch {
    return true;
  }
};

assert(
  invalidCapacityTest(),
  "cache rejects non-positive capacity"
);

console.log("");
console.log("All tests passed!");