# LRU Cache — Problem Solving

An implementation of a Least Recently Used (LRU) Cache using TypeScript.

This project was created as part of a Frontend Developer Practical Assessment.

## Requirements

The cache supports:

- `Cache(capacity)`
- `get(key)`
- `put(key, value)`
- Positive capacity validation
- LRU eviction
- O(1) average `get()`
- O(1) average `put()`

---

## Example

```text
cache = Cache(2)

cache.put("A", 10)
cache.put("B", 20)

cache.get("A") → 10

cache.put("C", 30)

cache.get("B") → -1
cache.get("C") → 30
cache.get("A") → 10