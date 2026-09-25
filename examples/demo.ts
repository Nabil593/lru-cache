import { LRUCache } from "../src/lru-cache";

const cache = new LRUCache<string, number>(2);

console.log("=== LRU Cache Demo ===");
console.log("");

console.log("Cache capacity: 2");
console.log("");

console.log("put('A', 10)");
cache.put("A", 10);
console.log("Cache:", cache.getEntries());

console.log("");

console.log("put('B', 20)");
cache.put("B", 20);
console.log("Cache:", cache.getEntries());

console.log("");

console.log("get('A')");
console.log("Result:", cache.get("A"));
console.log("Cache:", cache.getEntries());

console.log("");

console.log("put('C', 30)");
cache.put("C", 30);
console.log("Cache:", cache.getEntries());

console.log("");

console.log("get('B')");
console.log("Result:", cache.get("B"));

console.log("");

console.log("get('C')");
console.log("Result:", cache.get("C"));

console.log("");

console.log("get('A')");
console.log("Result:", cache.get("A"));

console.log("");

console.log("=== Final Cache State ===");
console.log(cache.getEntries());