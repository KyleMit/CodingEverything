# Computer Science

* [CS50 2020](https://www.youtube.com/watch?v=YoXxevp1WRQ&list=PLhQjrBD2T382_R182iC2gNZI9HzWFMC_8)

## Algorithms

## Big O Notation

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
* Linked Lists

## Wikipedia

* [Run-length encoding](https://en.wikipedia.org/wiki/Run-length_encoding)
* [Big O notation](https://en.wikipedia.org/wiki/Big_O_notation)
* [Sorting algorithm](https://en.wikipedia.org/wiki/Sorting_algorithm)
* [Computational complexity theory](https://en.wikipedia.org/wiki/Computational_complexity_theory)
* [Best, worst and average case](https://en.wikipedia.org/wiki/Best,_worst_and_average_case)
* [Comparison sort](https://en.wikipedia.org/wiki/Comparison_sort)
* [Breadth-first search](https://en.wikipedia.org/wiki/Breadth-first_search)
* [Boyer–Moore string-search algorithm](https://en.wikipedia.org/wiki/Boyer%E2%80%93Moore_string-search_algorithm)

## Maths

* [Aliquot sum](https://en.wikipedia.org/wiki/Aliquot_sum)
* [Caesar cipher](https://en.wikipedia.org/wiki/Caesar_cipher)


## Programming Language Concepts

* [Object-oriented programming](https://en.wikipedia.org/wiki/Object-oriented_programming)
* [Duck typing](https://en.wikipedia.org/wiki/Duck_typing)
* [Gradual typing](https://en.wikipedia.org/wiki/Gradual_typing)


## Numbers

* [Arbitrary-precision arithmetic](https://en.wikipedia.org/wiki/Arbitrary-precision_arithmetic)
* [Floating Point Math](https://0.30000000000000004.com/)


## Sort

* Methods
  * Exchanging
  * Insertion
  * Merging
  * Partitioning
  * Selection
  * Non-Comparison

* Types
  * Simple Sorts
    * Insertion Sort
    * Selection Sort
  * Efficient Sorts
    * Merge Sort
    * Heapsort
    * Quicksort
    * Shellsort
  * Bubble Sort
    * Bubble sort
    * Comb sort
    * Exchange sort
  * Distribution sort
    * Counting sort
    * Bucket sort
    * Radix sort

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

* [Equation for testing if a point is inside a circle](https://stackoverflow.com/q/481144/1366033)

  ```none
  (x - center_x)² + (y - center_y)² < radius²
  ```
