---
title: List (Of LINQ Enumerable Methods)
tags: [post, .NET, LINQ, IEnumerable]
date: 2013-12-19
postID: 5292854343869941321
---

<div><Style type="text/css">
strong em {
    background: yellow
}
</style></div>

Here's a grouped listing of all the methods available on the IEnumerable Class.  
Methods which can be composed using VB Query Syntax are generally listed first and are also ***highlighted yellow***.  

####[Projection Operations](http://msdn.microsoft.com/en-us/library/bb546168.aspx) {.tinyHeader}  
* [***Select***](http://msdn.microsoft.com/en-us/library/bb548891(v=vs.110).aspx#) - Projects each element of a sequence into a new form.
* [***SelectMany***](http://msdn.microsoft.com/en-us/library/bb534336(v=vs.110).aspx#) - Projects each element of a sequence to an IEnumerable(Of T) and flattens the resulting sequences into one sequence.

####[Partitioning Data](http://msdn.microsoft.com/en-us/library/bb546164.aspx) {.tinyHeader}   
* [***Skip***](http://msdn.microsoft.com/en-us/library/bb358985(v=vs.110).aspx#) - Bypasses a specified number of elements in a sequence and then returns the remaining elements.
* [***SkipWhile***](http://msdn.microsoft.com/en-us/library/bb549075(v=vs.110).aspx#) - Bypasses elements in a sequence as long as a specified condition is true and then returns the remaining elements.
* [***Take***](http://msdn.microsoft.com/en-us/library/bb503062(v=vs.110).aspx#) - Returns a specified number of contiguous elements from the start of a sequence.
* [***TakeWhile***](http://msdn.microsoft.com/en-us/library/bb534804(v=vs.110).aspx#) - Returns elements from a sequence as long as a specified condition is true.

####[Join Operations](http://msdn.microsoft.com/en-us/library/bb397908.aspx) {.tinyHeader}   
* [***Join***](http://msdn.microsoft.com/en-us/library/bb534675(v=vs.110).aspx#) - Correlates the elements of two sequences based on matching keys. The default equality comparer is used to compare keys.
* [***GroupJoin***](http://msdn.microsoft.com/en-us/library/bb534297(v=vs.110).aspx#) - Correlates the elements of two sequences based on equality of keys and groups the results.

####[Grouping Data](http://msdn.microsoft.com/en-us/library/bb546139.aspx) {.tinyHeader}   
* [***GroupBy***](http://msdn.microsoft.com/en-us/library/bb534501(v=vs.110).aspx#) - Groups the elements of a sequence according to a specified key selector function.

####[Filtering Data](http://msdn.microsoft.com/en-us/library/bb546161.aspx) {.tinyHeader}   
* [***Where***](http://msdn.microsoft.com/en-us/library/bb534803(v=vs.110).aspx#) - Filters a sequence of values based on a predicate.
* [**OfType**](http://msdn.microsoft.com/en-us/library/bb360913(v=vs.110).aspx#) - Filters the elements of an IEnumerable depending on their ability to be cast to a specified type.

####[Sorting Data](http://msdn.microsoft.com/en-us/library/bb546145.aspx) {.tinyHeader}   
* [***OrderBy***](http://msdn.microsoft.com/en-us/library/bb534966(v=vs.110).aspx#) - Sorts the elements of a sequence in ascending order according to a key.
* [***OrderByDescending***](http://msdn.microsoft.com/en-us/library/bb534855(v=vs.110).aspx#) - Sorts the elements of a sequence in descending order according to a key.
* [***ThenBy***](http://msdn.microsoft.com/en-us/library/bb534743(v=vs.110).aspx#) - Performs a subsequent ordering of the elements in a sequence in ascending order according to a key.
* [***ThenByDescending***](http://msdn.microsoft.com/en-us/library/bb534736(v=vs.110).aspx#) - Performs a subsequent ordering of the elements in a sequence in descending order, according to a key.
* [**Reverse**](http://msdn.microsoft.com/en-us/library/bb358497(v=vs.110).aspx#) - Inverts the order of the elements in a sequence.

####[Aggregation Operations](http://msdn.microsoft.com/en-us/library/bb546138.aspx) {.tinyHeader}   
* [***Average***](http://msdn.microsoft.com/en-us/library/bb354760(v=vs.110).aspx#) - Computes the average of a sequence of values.
* [***Count***](http://msdn.microsoft.com/en-us/library/bb338038(v=vs.110).aspx#) - Returns the number of elements in a sequence.
* [***LongCount***](http://msdn.microsoft.com/en-us/library/bb353539(v=vs.110).aspx#) - Returns an Int64 that represents the total number of elements in a sequence.
* [***Max***](http://msdn.microsoft.com/en-us/library/bb335614(v=vs.110).aspx#) - Returns the maximum value in a sequence of values.
* [***Min***](http://msdn.microsoft.com/en-us/library/bb298087(v=vs.110).aspx#) - Returns the minimum value in a sequence of values.
* [***Sum***](http://msdn.microsoft.com/en-us/library/bb298138(v=vs.110).aspx#) - Computes the sum of a sequence of values.
* [**Aggregate**](http://msdn.microsoft.com/en-us/library/bb548651(v=vs.110).aspx#) - Applies an accumulator function over a sequence.

####[Set Operations](http://msdn.microsoft.com/en-us/library/bb546153.aspx) {.tinyHeader}   
* [***Distinct***](http://msdn.microsoft.com/en-us/library/bb348436(v=vs.110).aspx#) - Returns distinct elements from a sequence by using the default equality comparer to compare values.
* [**Except**](http://msdn.microsoft.com/en-us/library/bb300779(v=vs.110).aspx#) - Produces the set difference of two sequences by using the default equality comparer to compare values.
* [**Intersect**](http://msdn.microsoft.com/en-us/library/bb460136(v=vs.110).aspx#) - Produces the set intersection of two sequences by using the default equality comparer to compare values.
* [**Union**](http://msdn.microsoft.com/en-us/library/bb341731(v=vs.110).aspx#) - Produces the set union of two sequences by using the default equality comparer.
* [**Concat**](http://msdn.microsoft.com/en-us/library/bb302894(v=vs.110).aspx#) - Concatenates two sequences.
* [**Zip**](http://msdn.microsoft.com/en-us/library/dd267698(v=vs.110).aspx#) - Applies a specified function to the corresponding elements of two sequences, producing a sequence of the results.

####[Quantifier Operations](http://msdn.microsoft.com/en-us/library/bb546128.aspx) {.tinyHeader}   
* [**All**](http://msdn.microsoft.com/en-us/library/bb548541(v=vs.110).aspx#) - Determines whether all elements of a sequence satisfy a condition.
* [**Any**](http://msdn.microsoft.com/en-us/library/bb337697(v=vs.110).aspx#) - Determines whether a sequence contains any elements.
* [**Contains**](http://msdn.microsoft.com/en-us/library/bb352880(v=vs.110).aspx#) - Determines whether a sequence contains a specified element by using the default equality comparer.

####[Generation Operations](http://msdn.microsoft.com/en-us/library/bb546129.aspx) {.tinyHeader}   
* [**DefaultIfEmpty**](http://msdn.microsoft.com/en-us/library/bb360179(v=vs.110).aspx#) - Returns the elements of the specified sequence or the type parameter's default value in a singleton collection if the sequence is empty.
* [**Empty**](http://msdn.microsoft.com/en-us/library/bb341042(v=vs.110).aspx#) - Returns an empty IEnumerable(Of T) that has the specified type argument.
* [**Range**](http://msdn.microsoft.com/en-us/library/system.linq.enumerable.range(v=vs.110).aspx#) - Generates a sequence of integral numbers within a specified range.
* [**Repeat**](http://msdn.microsoft.com/en-us/library/bb348899(v=vs.110).aspx#) - Generates a sequence that contains one repeated value.

####[Element Operations](http://msdn.microsoft.com/en-us/library/bb546140.aspx) {.tinyHeader}   
* [**First**](http://msdn.microsoft.com/en-us/library/bb291976(v=vs.110).aspx#) - Returns the first element of a sequence.
* [**FirstOrDefault**](http://msdn.microsoft.com/en-us/library/bb340482(v=vs.110).aspx#) - Returns the first element of a sequence, or a default value if the sequence contains no elements.
* [**Last**](http://msdn.microsoft.com/en-us/library/bb358775(v=vs.110).aspx#) - Returns the last element of a sequence.
* [**LastOrDefault**](http://msdn.microsoft.com/en-us/library/bb301849(v=vs.110).aspx#) - Returns the last element of a sequence, or a default value if the sequence contains no elements.
* [**ElementAt**](http://msdn.microsoft.com/en-us/library/bb299233(v=vs.110).aspx#) - Returns the element at a specified index in a sequence.
* [**ElementAtOrDefault**](http://msdn.microsoft.com/en-us/library/bb494386(v=vs.110).aspx#) - Returns the element at a specified index in a sequence or a default value if the index is out of range.
* [**Single**](http://msdn.microsoft.com/en-us/library/bb155325(v=vs.110).aspx#) - Returns the only element of a sequence, and throws an exception if there is not exactly one element in the sequence.
* [**SingleOrDefault**](http://msdn.microsoft.com/en-us/library/bb342451(v=vs.110).aspx#) - Returns the only element of a sequence, or a default value if the sequence is empty; this method throws an exception if there is more than one element in the sequence.

####[Equality Operations](http://msdn.microsoft.com/en-us/library/bb546160.aspx) {.tinyHeader}   
* [**SequenceEqual**](http://msdn.microsoft.com/en-us/library/bb348567(v=vs.110).aspx#) - Determines whether two sequences are equal by comparing the elements by using the default equality comparer for their type.

####[Converting Data Types](http://msdn.microsoft.com/en-us/library/bb546162.aspx) {.tinyHeader}   
* [**Cast**](http://msdn.microsoft.com/en-us/library/bb341406(v=vs.110).aspx#) - Casts the elements of an IEnumerable to the specified type.
* [**AsEnumerable**](http://msdn.microsoft.com/en-us/library/bb335435(v=vs.110).aspx#) - Returns the input typed as IEnumerable(Of T).
* [**AsQueryable**](http://msdn.microsoft.com/en-us/library/system.linq.iqueryable.aspx) - Converts a (generic) IEnumerable to a (generic) IQueryable.
* [**ToArray**](http://msdn.microsoft.com/en-us/library/bb298736(v=vs.110).aspx#) - Creates an array from a IEnumerable(Of T).
* [**ToDictionary**](http://msdn.microsoft.com/en-us/library/bb549277(v=vs.110).aspx#) - Creates a Dictionary(Of TKey, TValue) from an IEnumerable(Of T)according to a specified key selector function.
* [**ToList**](http://msdn.microsoft.com/en-us/library/bb342261(v=vs.110).aspx#) - Creates a List(Of T) from an IEnumerable(Of T).
* [**ToLookup**](http://msdn.microsoft.com/en-us/library/bb549073(v=vs.110).aspx#) - Creates a Lookup(Of TKey, TElement) from an IEnumerable(Of T)according to a specified key selector function.


