---
path: "/learn/quicksort_frontend"
date: 2021-06-01T24:00:11.158Z
title: "Data Structures and Algorithms in Frontend Development"
tags: ["Programming"]
---

Ever wondered why you would ever need to learn data structures and algorithms when you're a front-end developer? Me too. Luckily, it isn't hard if you understand that algorithms and data structures are just more tools in your toolbox.\
\
For example, quicksort is a great tool to use when you need to sort arrays of objects (e.g., products in an ecommerce site, or [your creatures](https://brandonzpb.github.io/creatures)).\
\
(**Note**: Sorting is something that typically happens in the backend, so that you don't compromise the UI experience. Quicksort should also be used when you know you don't have many duplicates.)\
\
Now back to the good stuff. You can easily make a quicksort module to use whenever you need to provide the user with a sorted version of the provided array (say, they want to view the cheapest products first, or perhaps the ones with the highest ratings.)\
\
## Great. How do you even code quicksort?


Simple. You just choose an item in the array to use as a pivot. It's common practice to start with the last item.\
\
Now you have two empty arrays, left and right, which will hold items that are less than and greater than the pivot, respectively. So all you do is compare every number of the array to the pivot. If it's less than or equal to the pivot, it goes to the left; otherwise, it goes to the right.\
\
Finally, once you've divided the array into two partitions, you sort each half. Rinse and repeat. As you may have noticed, this is a [recursive function](https://www.geeksforgeeks.org/recursion/), which means a few things, good and bad:\
\
1. It is memory-intensive (it quickly builds up the function call stack)
2. These functions can be slow (quicksort can be. Best case: O(n*log(n)); worst case: O(n^2)), but they can also reduce the time-complexity of a program
3. The code is easy to follow and maintain
4. Incredibly powerful when paired with data structures like Binary Search Trees and Prefix Trees
```

```
