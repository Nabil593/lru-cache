<img width="1917" height="1020" alt="lru-cache-output" src="https://github.com/user-attachments/assets/185d5dc8-ab23-4288-b47d-6a17b64ff1c7" />

# LRU Cache — Problem Solving

A TypeScript implementation of a **Least Recently Used (LRU) Cache** supporting `get()` and `put()` operations with **O(1) average time complexity**.

This project was developed as part of a Frontend Developer Practical Assessment.

---

## Overview

An LRU Cache stores a limited number of key-value pairs.

When the cache reaches its maximum capacity and a new item needs to be inserted, the **least recently used** item is removed to make space.

The cache supports:

* `Cache(capacity)`
* `get(key)`
* `put(key, value)`
* Positive capacity validation
* LRU eviction
* Updating existing keys
* O(1) average `get()`
* O(1) average `put()`

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
```

### What happens?

Initially:

```text
A → 10
B → 20
```

After:

```text
get("A")
```

`A` becomes the most recently used entry:

```text
B → 20
A → 10
```

Then:

```text
put("C", 30)
```

The cache capacity is `2`, so the least recently used entry `B` is removed:

```text
A → 10
C → 30
```

Therefore:

```text
get("B") → -1
get("C") → 30
get("A") → 10
```

---

## Data Structure Used

This implementation uses JavaScript's built-in **Map** data structure.

A `Map` was chosen because it provides:

* Fast key lookup
* Fast insertion
* Fast deletion
* Guaranteed insertion-order iteration

The insertion order is used to maintain the LRU ordering.

The first entry represents the **least recently used** item, while the last entry represents the **most recently used** item.

---

## How LRU Ordering Is Maintained

### `get(key)`

When a key exists:

1. Retrieve its value.
2. Remove the key from the Map.
3. Insert it again with the same value.
4. Re-inserting the key moves it to the most recently used position.

For example:

```text
Before:

A → 10
B → 20
```

After:

```text
get("A")
```

The order becomes:

```text
B → 20
A → 10
```

`A` is now the most recently used entry.

---

### `put(key, value)`

When inserting a key:

1. If the key already exists, remove it first.
2. Insert the new key-value pair.
3. The new or updated key becomes the most recently used entry.
4. If the cache exceeds its capacity, remove the first Map entry.

Example:

```text
Capacity = 2

A → 10
B → 20
```

After:

```text
put("C", 30)
```

The first entry `A` would be removed if it were the least recently used.

The implementation always removes the first Map entry when the capacity is exceeded.

---

## Time Complexity

### `get(key)`

**O(1) average**

The key is accessed directly through the Map.

### `put(key, value)`

**O(1) average**

The key can be inserted, updated, or deleted directly through the Map.

### LRU Eviction

**O(1) average**

The least recently used entry is the first entry in the Map and can be removed directly.

---

## Space Complexity

**O(capacity)**

The cache stores at most the configured number of key-value pairs.

---

## Project Structure

```text
lru-cache/
├── src/
│   └── lru-cache.ts
│
├── test/
│   └── lru-cache.test.ts
│
├── examples/
│   └── demo.ts
│
├── README.md
├── package.json
├── tsconfig.json
└── AI_PROMPT_HISTORY.txt
```

---

## Technologies

* TypeScript
* JavaScript `Map`
* Node.js
* tsx

---

## Getting Started

### Prerequisites

Make sure the following are installed:

* Node.js 18+
* npm

---

## Installation

Clone the repository:

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

Move into the project directory:

```bash
cd lru-cache
```

Install dependencies:

```bash
npm install
```

---

## Run TypeScript Check

Run the TypeScript compiler without generating files:

```bash
npm run typecheck
```

---

## Run Tests

Run the test/example suite:

```bash
npm test
```

Expected output:

```text
=== LRU Cache Tests ===

✓ get() returns stored value
✓ multiple keys can be stored
✓ least recently used key is evicted
✓ recently accessed key remains in cache
✓ newly inserted key remains in cache
✓ put() updates an existing key
✓ cache rejects non-positive capacity

All tests passed!
```

---

## Run Demo

Run the interactive demonstration:

```bash
npm run demo
```

The demo shows:

* `put()` operations
* `get()` operations
* Returned values
* LRU ordering
* LRU eviction
* Final cache state

Example output:

```text
=== LRU Cache Demo ===

Cache capacity: 2

put('A', 10)
Cache: [ [ 'A', 10 ] ]

put('B', 20)
Cache: [ [ 'A', 10 ], [ 'B', 20 ] ]

get('A')
Result: 10
Cache: [ [ 'B', 20 ], [ 'A', 10 ] ]

put('C', 30)
Cache: [ [ 'A', 10 ], [ 'C', 30 ] ]

get('B')
Result: -1

get('C')
Result: 30

get('A')
Result: 10

=== Final Cache State ===
[ [ 'C', 30 ], [ 'A', 10 ] ]
```

---

## Validation

The implementation validates that cache capacity is a positive integer.

For example:

```text
new LRUCache(0)
```

will throw an error because the cache capacity must be greater than zero.

---

## Test Coverage

The test implementation verifies:

* Stored values can be retrieved.
* Multiple entries can be stored.
* `get()` updates LRU ordering.
* The least recently used entry is evicted.
* Recently accessed entries remain in the cache.
* New entries remain in the cache.
* Existing values can be updated.
* Invalid capacity values are rejected.

---

## Output Screenshot

The assessment requires an actual screenshot showing program output.

The demo output should show:

* `put()` operations
* `get()` operations
* LRU ordering
* LRU eviction
* Returned values

The screenshot should be captured directly from the terminal after running:

```bash
npm run demo
```

The output is generated by the actual implementation and is not manually written or edited.

---

## AI Usage

AI tools were used during development to assist with implementation, debugging, testing, and documentation.

All AI prompts used during the assessment are documented in:

```text
AI_PROMPT_HISTORY.txt
```

The prompt history is maintained separately from the source code as required by the assessment.

---

## Assessment Requirements

| Requirement                          | Status                          |
| ------------------------------------ | ------------------------------- |
| Positive capacity                    | Completed                       |
| `get(key)`                           | Completed                       |
| `put(key, value)`                    | Completed                       |
| Missing key returns `-1`             | Completed                       |
| Successful `get()` updates LRU order | Completed                       |
| Existing key can be updated          | Completed                       |
| LRU eviction                         | Completed                       |
| O(1) average `get()`                 | Completed                       |
| O(1) average `put()`                 | Completed                       |
| Source code                          | Included                        |
| Test/example code                    | Included                        |
| README                               | Included                        |
| Run instructions                     | Included                        |
| Output screenshot                    | To be submitted with assessment |

---

## Author

**Shariea Reza Nabil**

GitHub: [Nabil593](https://github.com/Nabil593)
