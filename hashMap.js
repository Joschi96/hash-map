//JS dynamic nature of arrays allows to insert and retrieve indexes that are outside our array size range
// This defeats the purpose of limiting storage site in hash maps, so following restriction will be applied:
// The following snippet will be used whenever a bucket is accessed through index. Throw an error if the index is out of bounds
// if (index < 0 || index >= buckets.length) {
//   throw new Error("Trying to access index out of bounds");
// }

// HashMap class with two variable for load factor and capacity
class HashMap {
  constructor(capacity = 16, loadFactor = 0.75) {
    this.capacity = capacity;
    this.loadFactor = loadFactor;
    this.size = 0;
    this.map = new Array(capacity).fill(null).map(() => []);
    
  }
  // Hash function to calculate the index for a given key
  hash(key) {
    let hashCode = 0;
        
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
    }
  
    return hashCode;
  }

  set(key, value) {
    const index = this.hash(key);
    const bucket = this.map[index];

    // Check if the key already exists in the bucket
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket[i][1] = value; // Update the value
        return;
      }
    }

    // If the key does not exist, add it to the bucket
    bucket.push([key, value]);
    this.size++;

    // Check if resizing is needed
    if (this.size / this.capacity > this.loadFactor) {
      this.resize();
    }
  }

  get(key) {
    const index = this.hash(key);
    const bucket = this.map[index];

    // Search for the key in the bucket
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        return bucket[i][1]; // Return the value
      }
    }

    // If the key is not found, return null
    return null;
  }

  has(key) {
    const index = this.hash(key);
    const bucket = this.map[index];

    // Check if the key exists in the bucket
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
      return true;
      }
    }

    return false;
  }

  remove(key) {
    const index = this.hash(key);
    const bucket = this.map[index];

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket.splice(i, 1); // Remove the key-value pair
        this.size--;
        return true;
      }
    }

    return false; // Key not found
  }

  length() {
    return this.size;
  }

  clear() {
    this.map = new Array(this.capacity).fill(null).map(() => []);
    this.size = 0;
  }

  keys() {
    const keysArray = [];
    for (const bucket of this.map) {
      for (const [key] of bucket) {
        keysArray.push(key);
      }
    }
    return keysArray;
  }

  values() {
    const valuesArray = [];
    for (const bucket of this.map) {
      for (const [, value] of bucket) {
      valuesArray.push(value);
      }
    }
    return valuesArray;
  }

  entries() {
    const entriesArray = [];
    for (const bucket of this.map) {
      for (const [key, value] of bucket) {
        entriesArray.push([key, value]);
      }
    }
    return entriesArray;
  }

  resize() {
    const oldMap = this.map;
    this.capacity *= 2;
    this.size = 0;
    this.map = new Array(this.capacity).fill(null).map(() => []);

    // Rehash all existing keys
    for (const bucket of oldMap) {
      for (const [key, value] of bucket) {
        this.set(key, value);
      }
    }
  }
}

export{HashMap};