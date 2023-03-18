---
layout: post
title:  "Developer Notes - JavaScript Basics"
date:   2020-05-02 00:13:05 -0500
categories: programming notes JavaScript
---

## Programming Basics
**Darren Jones, *JavaScript: Novice to Ninja, 2nd Edition* chapter 2**

### Comments

```javascript
// Single-line comment
```

```javascript
/*
Multi-line comment
Also called a "comment block"
*/
```

### Grammar

- C-style syntax; contains similarities with the C programming language
- Each statement ends with a new line or semicolon (`;`)
  - Semicolons are optional, but recommended
- Blocks are collected inside curly braces
```javascript
{
  // This is a code block
  console.log('Hello, world!')
}
```

### Reserved Words
```javascript
// Actually reserved
abstract, await, boolean, break, byte, case, catch, char, class, const, continue, debugger, default, delete, do, double, else, enum, export, extends, false, final, finally, float, for, function, goto, if, implements, import, in instanceof, int, interface, let, long, native, new, null, package, private, protected, public, return, short, static, super, switch, synchronized, this, throw, throws, transient, true, try, typeof, var, volatile, void, while, with, yield

// Not reserved, but should've been
undefined, NaN, Infinity
```

### Variables
In ES6, `const` and `let` are becoming the new norm. They have a similar function to `var`, but have block scope, meaning they're only valid inside whatever block contains them.

### Study Questions
Why is JavaScript loosely typed? Is that ultimately more advantageous with the dangers that have to be guarded against?


## Arrays, Logic, and Loops
**Darren Jones, *JavaScript: Novice to Ninja, 2nd Edition* chapter 3**

### Descructuring Arrays
- Allows assignment of multiple values at once
```javascript
const [x, y] = [1, 2]
```
- Provides a way to swap values of two variables
```javascript
[x, y] = [y, x]
```

### Loops
- To reduce the number of calculations performed in a `for` loop, get the length of the array in loop initialization and then use that for the condition
```javascript
for (let i = 0, max = avengers.length; i < max; ++i) {
  console.log(avengers[i])
}
```

- ES6 introduced the `for-of` loop, which is a much simpler way to iterate through an array
```javascript
for (const value of avengers) {
  console.log(value);
}
```

### Study Questions
Why do `for-of` loops exist when there's a `foreach()` method?