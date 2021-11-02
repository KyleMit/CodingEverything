# Algorithms & Data Structures

## Algorithms

### Big O Notation

## Data Structures

* Lists - allow duplicate items, can be accessed by index, support linear traversal
  * ArrayList - array based list
  * List - non-contiguous so can grow in size without re-allocating memory for the entire list
* Hashes
  * HashTable - basic key-value-pair map
  * Dictionary - hashtables that supports generic types and type-safety
* Queues - control how items in a list are accessed.  Typically need to push/.pop records from a queue in a particular direction
  * Stack - LIFO (Last In, First Out), push/pop records on top of each other
  * Queue - FIFO (First In, First Out) - push records on top, and pop them off the bottom

### Linked Lists

## Wikipedia

* [Run-length encoding](https://en.wikipedia.org/wiki/Run-length_encoding)
* [Big O notation](https://en.wikipedia.org/wiki/Big_O_notation)

## Resources

* [mycodeschool](https://www.youtube.com/user/mycodeschool)
  * [Introduction to linked list](https://www.youtube.com/watch?v=NobHlGUjV3g)
  * [Linked List - Implementation in C/C++](https://www.youtube.com/watch?v=vcQIFT79_50)

## Questions




* [Trying to find factors of a number in JS](https://stackoverflow.com/q/22130043/1366033)

  ```ts
  const getFactors = (num) => {
      const maxVal = Math.floor(Math.sqrt(num))
      const nums = Array.from({length: maxVal}, (_, i) => i + 1)
      const factors = nums.reduce((acc, n) => {
          if (num % n !== 0) return acc
          acc.push(n)
          const compliment = num / n
          if (compliment != n) {
              acc.push(compliment)
          }
          return acc
      }, [])
      return factors.sort((a,b) => a - b)
  }
  getFactors(12)
  ```

* [Calculate the LCM of two or three numbers in JavaScript](https://stackoverflow.com/q/34953778/1366033)


  ```js
  const _gcd = (a, b) => b ? _gcd(b, a % b) : b === 0 ? a : NaN
  const _lcm = (a, b) => (a * b) / _gcd(a, b)

  const gcd = (...arr) => arr.reduce((acc, cur) => _gcd(cur, acc), 0)
  const lcm = (...arr) => arr.reduce((acc, cur) => _lcm(cur, acc), 1)
  ```
