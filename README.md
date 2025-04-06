# HashMap Implementation

This project is an implementation of a custom `HashMap` class in JavaScript. It is designed to mimic the behavior of a hash map data structure, including features such as dynamic resizing, collision handling, and efficient key-value storage and retrieval.

## Features

- **Custom Hash Function**: A simple hash function is used to calculate the index for a given key.
- **Collision Handling**: Uses separate chaining with arrays to handle hash collisions.
- **Dynamic Resizing**: Automatically resizes the hash map when the load factor exceeds a specified threshold.
- **Key-Value Operations**: Supports operations like `set`, `get`, `has`, `remove`, and `clear`.
- **Utility Methods**: Provides methods to retrieve all keys, values, and entries in the hash map.

## Class Overview

### `HashMap`

The `HashMap` class is implemented in [`hashMap.js`](./hashMap.js). It includes the following methods:

- **`set(key, value)`**: Adds or updates a key-value pair in the hash map.
- **`get(key)`**: Retrieves the value associated with a given key.
- **`has(key)`**: Checks if a key exists in the hash map.
- **`remove(key)`**: Removes a key-value pair from the hash map.
- **`clear()`**: Clears all entries in the hash map.
- **`keys()`**: Returns an array of all keys in the hash map.
- **`values()`**: Returns an array of all values in the hash map.
- **`entries()`**: Returns an array of `[key, value]` pairs in the hash map.
- **`resize()`**: Doubles the capacity of the hash map and rehashes all existing keys.

### Properties

- **`capacity`**: The current capacity of the hash map.
- **`loadFactor`**: The maximum load factor before resizing occurs.
- **`size`**: The number of key-value pairs currently stored in the hash map.

## Usage

The usage of the `HashMap` class is demonstrated in [`main.js`](./main.js). Below is an example of how to use the class:

```javascript
import { HashMap } from "./hashMap.js";

const hashMap = new HashMap();

// Adding key-value pairs
hashMap.set("apple", "red");
hashMap.set("banana", "yellow");

// Retrieving values
console.log(hashMap.get("apple")); // Output: red

// Checking existence
console.log(hashMap.has("banana")); // Output: true

// Removing a key
hashMap.remove("apple");
console.log(hashMap.get("apple")); // Output: null

// Clearing the hash map
hashMap.clear();
console.log(hashMap.size); // Output: 0
```
