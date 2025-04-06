import { HashMap } from "./hashMap.js";

const test = new HashMap();

// Populating hash map, so load level is 0.75 (full capacity)
// 16 * 0.75 = 12
test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')

// With the full hash map, overwriting a few nodes using set(key, value)
// This should only overwrite the existing values of the nodes and 
// not add any new nodes, so length should return the same value (12)
// And capacity should remain the same (16)
test.set('apple', 'green')
test.set('banana', 'blue')
test.set('carrot', 'purple')
test.set('dog', 'white')

// Checking the size of the hash map
console.log(test.size); // 12
// Checking the capacity of the hash map
console.log(test.capacity); // 16
// Checking the load factor of the hash map
console.log(test.loadFactor); // 0.75

// Now one more entry is added to the hash map, which should trigger a resize
test.set('moon', 'silver')
// Checking the size of the hash map
console.log(test.size); // 13
// Checking the capacity of the hash map
console.log(test.capacity); // 32
// Checking the load factor of the hash map
console.log(test.loadFactor); // 0.75
// Checking the values of the keys
console.log(test.get('apple')); // green
console.log(test.get('banana')); // blue
console.log(test.get('carrot')); // purple
console.log(test.get('dog')); // white
console.log(test.get('elephant')); // gray
console.log(test.get('frog')); // green
console.log(test.get('grape')); // purple
console.log(test.get('hat')); // black
console.log(test.get('ice cream')); // white
console.log(test.get('jacket')); // blue
console.log(test.get('kite')); // pink
console.log(test.get('lion')); // golden
console.log(test.get('moon')); // silver
console.log(test.get('notfound')); // null

// Overwriting a few nodes in the expanded hash map
test.set('moon', 'gold')
test.set('lion', 'silver')
test.set('kite', 'orange')

// Checking the updated values
console.log(test.get('moon')); // gold
console.log(test.get('lion')); // silver
console.log(test.get('kite')); // orange

// Testing other methods
console.log(test.has('apple')); // true
console.log(test.has('notfound')); // false

test.remove('frog');
console.log(test.size); // 12
console.log(test.get('frog')); // null

console.log(test.keys()); // Array of all keys
console.log(test.values()); // Array of all values
console.log(test.entries()); // Array of [key, value] pairs

test.clear();
console.log(test.size); // 0
console.log(test.keys()); // []
console.log(test.values()); // []
console.log(test.entries()); // []