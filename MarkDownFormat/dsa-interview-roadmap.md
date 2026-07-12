<h1 style="color:#2563eb;">DSA Learning Roadmap for Interview Preparation</h1>

## Goal

<p style="color:#374151;">
<strong style="color:#16a34a;">Master the Patterns. Solve Any Problem.</strong> — Sidebar is organized by pattern → sub-pattern. Click a sub-pattern (e.g. <em>Sliding Window</em>) to see every related question with a LeetCode link.
</p>

![DSA Patterns Mindmap — 16 Essential Patterns](/assets/dsa/dsa-patterns-mindmap.png)

![Master the Patterns — Arrays, String, Hashing, Stack, Queue](/assets/dsa/master-the-patterns.png)

**Difficulty scale:** 2 = Easy · 3 = Medium · 4 = Hard · 5 = Very Hard · 6 = Extremely Hard

| Step | How to use |
| --- | --- |
| 1 | Open a **pattern** in the sidebar (Arrays, String, …) |
| 2 | Expand a **sub-pattern** (Sliding Window, Two Pointers, …) |
| 3 | Solve the linked problems **easy → hard** |

---

<a id="topic-1"></a>

## 1. DSA Basics & Complexity

| Term | Meaning |
| --- | --- |
| **Data Structure** | Way to organize data (array, list, tree, graph) |
| **Algorithm** | Step-by-step procedure to solve a problem |
| **Pattern** | Reusable technique for a family of problems |

### Big-O (Worst Case)

| Complexity | Example |
| --- | --- |
| O(1) | Hash lookup, array index |
| O(log n) | Binary search |
| O(n) | Single loop |
| O(n log n) | Merge sort, heap sort |
| O(n²) | Nested loops |
| O(2ⁿ) | Naive subsets / backtracking |

### Complexity by Input Size

| n | Feasible |
| --- | --- |
| n ≤ 20 | O(2ⁿ) backtracking |
| n ≤ 5,000 | O(n²) |
| n ≤ 10⁵ | O(n log n) |
| n ≤ 10⁶ | O(n) or tight O(n log n) |

**One-liner:** Map every problem to a **pattern** first, then state time + space complexity.

---

<a id="topic-2"></a>

## Arrays

**Foundation of many problems. Master indexing & traversal.**

### Prefix Sum

| # | Problem | Diff | Link |
| --- | --- | --- | --- |
| 238 | Product of Array Except Self | 3 | [Solve](https://leetcode.com/problems/product-of-array-except-self/) |
| 303 | Range Sum Query — Immutable | 2 | [Solve](https://leetcode.com/problems/range-sum-query-immutable/) |
| 560 | Subarray Sum Equals K | 5 | [Solve](https://leetcode.com/problems/subarray-sum-equals-k/) |
| 525 | Contiguous Array | 4 | [Solve](https://leetcode.com/problems/contiguous-array/) |

### Sliding Window

| # | Problem | Diff | Link |
| --- | --- | --- | --- |
| — | Maximum Sum Subarray of Size K | 2 | [GFG](https://www.geeksforgeeks.org/problems/max-sum-subarray-of-size-k5313/1) · [LC 643](https://leetcode.com/problems/maximum-average-subarray-i/) |
| 3 | Longest Substring Without Repeating Characters | 3 | [Solve](https://leetcode.com/problems/longest-substring-without-repeating-characters/) |
| 209 | Minimum Size Subarray Sum | 3 | [Solve](https://leetcode.com/problems/minimum-size-subarray-sum/) |
| 424 | Longest Repeating Character Replacement | 3 | [Solve](https://leetcode.com/problems/longest-repeating-character-replacement/) |
| 567 | Permutation in String | 3 | [Solve](https://leetcode.com/problems/permutation-in-string/) |
| 438 | Find All Anagrams in a String | 3 | [Solve](https://leetcode.com/problems/find-all-anagrams-in-a-string/) |
| 76 | Minimum Window Substring | 4 | [Solve](https://leetcode.com/problems/minimum-window-substring/) |
| 904 | Fruit Into Baskets | 3 | [Solve](https://leetcode.com/problems/fruit-into-baskets/) |
| 239 | Sliding Window Maximum | 4 | [Solve](https://leetcode.com/problems/sliding-window-maximum/) |

### Kadane's / Subarray

| # | Problem | Diff | Link |
| --- | --- | --- | --- |
| 53 | Maximum Subarray | 3 | [Solve](https://leetcode.com/problems/maximum-subarray/) |
| 152 | Maximum Product Subarray | 3 | [Solve](https://leetcode.com/problems/maximum-product-subarray/) |

### Two Pointers

| # | Problem | Diff | Link |
| --- | --- | --- | --- |
| 283 | Move Zeroes | 2 | [Solve](https://leetcode.com/problems/move-zeroes/) |
| 26 | Remove Duplicates from Sorted Array | 2 | [Solve](https://leetcode.com/problems/remove-duplicates-from-sorted-array/) |
| 80 | Remove Duplicates from Sorted Array II | 3 | [Solve](https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/) |
| 977 | Squares of a Sorted Array | 2 | [Solve](https://leetcode.com/problems/squares-of-a-sorted-array/) |
| 11 | Container With Most Water | 3 | [Solve](https://leetcode.com/problems/container-with-most-water/) |
| 15 | 3Sum | 3 | [Solve](https://leetcode.com/problems/3sum/) |
| 18 | 4Sum | 3 | [Solve](https://leetcode.com/problems/4sum/) |
| 167 | Two Sum II (Sorted) | 3 | [Solve](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/) |
| 42 | Trapping Rain Water | 4 | [Solve](https://leetcode.com/problems/trapping-rain-water/) |

### Binary Search

| # | Problem | Diff | Link |
| --- | --- | --- | --- |
| 704 | Binary Search | 2 | [Solve](https://leetcode.com/problems/binary-search/) |
| 35 | Search Insert Position | 2 | [Solve](https://leetcode.com/problems/search-insert-position/) |
| 34 | Find First and Last Position of Element in Sorted Array | 4 | [Solve](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/) |
| 33 | Search in Rotated Sorted Array | 4 | [Solve](https://leetcode.com/problems/search-in-rotated-sorted-array/) |
| 153 | Find Minimum in Rotated Sorted Array | 3 | [Solve](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/) |
| 162 | Find Peak Element | 3 | [Solve](https://leetcode.com/problems/find-peak-element/) |

### Array Scan / In-place

| # | Problem | Diff | Link |
| --- | --- | --- | --- |
| 121 | Best Time to Buy and Sell Stock | 2 | [Solve](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/) |
| 189 | Rotate Array | 3 | [Solve](https://leetcode.com/problems/rotate-array/) |
| 169 | Majority Element | 2 | [Solve](https://leetcode.com/problems/majority-element/) |
| 268 | Missing Number | 2 | [Solve](https://leetcode.com/problems/missing-number/) |
| 448 | Find All Numbers Disappeared in an Array | 2 | [Solve](https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/) |

**One-liner:** Arrays + prefix sum / window / two pointers / binary search cover most medium interviews.

---

<a id="topic-3"></a>

## String

**Crucial for pattern matching and parsing problems.**

### Two Pointers

| # | Problem | Diff | Link |
| --- | --- | --- | --- |
| 125 | Valid Palindrome | 2 | [Solve](https://leetcode.com/problems/valid-palindrome/) |
| 344 | Reverse String | 2 | [Solve](https://leetcode.com/problems/reverse-string/) |
| 844 | Backspace String Compare | 2 | [Solve](https://leetcode.com/problems/backspace-string-compare/) |
| 167 | Two Sum II | 3 | [Solve](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/) |

### Pattern Matching (KMP)

| # | Problem | Diff | Link |
| --- | --- | --- | --- |
| 28 | Find the Index of the First Occurrence | 4 | [Solve](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/) |

### Anagram / Frequency Count

| # | Problem | Diff | Link |
| --- | --- | --- | --- |
| 242 | Valid Anagram | 3 | [Solve](https://leetcode.com/problems/valid-anagram/) |
| 49 | Group Anagrams | 3 | [Solve](https://leetcode.com/problems/group-anagrams/) |
| 387 | First Unique Character in a String | 3 | [Solve](https://leetcode.com/problems/first-unique-character-in-a-string/) |

#### First Repeating vs Non-Repeating (`"swiss"`)

| Problem | Answer | Approach |
| --- | --- | --- |
| First **repeating** | `'s'` | One pass + `HashSet` |
| First **non-repeating** | `'w'` | Frequency map + second pass |

```csharp
public static char? FirstRepeatingChar(string s)
{
    var seen = new HashSet<char>();
    foreach (char c in s) if (!seen.Add(c)) return c;
    return null;
}

public static char? FirstNonRepeatingChar(string s)
{
    var counts = new Dictionary<char, int>();

    foreach (char c in s)
    {
        if (counts.ContainsKey(c))
            counts[c]++;
        else
            counts[c] = 1;
    }

    foreach (char c in s)
        if (counts[c] == 1)
            return c;

    return null;
}
```

### Palindrome

| # | Problem | Diff | Link |
| --- | --- | --- | --- |
| 125 | Valid Palindrome | 2 | [Solve](https://leetcode.com/problems/valid-palindrome/) |
| 5 | Longest Palindromic Substring | 4 | [Solve](https://leetcode.com/problems/longest-palindromic-substring/) |

### Sliding Window

| # | Problem | Diff | Link |
| --- | --- | --- | --- |
| 3 | Longest Substring Without Repeating Characters | 3 | [Solve](https://leetcode.com/problems/longest-substring-without-repeating-characters/) |
| 424 | Longest Repeating Character Replacement | 3 | [Solve](https://leetcode.com/problems/longest-repeating-character-replacement/) |
| 567 | Permutation in String | 3 | [Solve](https://leetcode.com/problems/permutation-in-string/) |
| 438 | Find All Anagrams in a String | 3 | [Solve](https://leetcode.com/problems/find-all-anagrams-in-a-string/) |
| 76 | Minimum Window Substring | 4 | [Solve](https://leetcode.com/problems/minimum-window-substring/) |

**One-liner:** String problems → frequency map, two pointers, or sliding window.

---

<a id="topic-4"></a>

## Hashing

**Fast lookups and frequency-based problems.**

### Hash Map

| # | Problem | Diff | Link |
| --- | --- | --- | --- |
| 1 | Two Sum | 2 | [Solve](https://leetcode.com/problems/two-sum/) |
| 146 | LRU Cache | 5 | [Solve](https://leetcode.com/problems/lru-cache/) |
| 128 | Longest Consecutive Sequence | 4 | [Solve](https://leetcode.com/problems/longest-consecutive-sequence/) |

### Frequency Map

| # | Problem | Diff | Link |
| --- | --- | --- | --- |
| 347 | Top K Frequent Elements | 4 | [Solve](https://leetcode.com/problems/top-k-frequent-elements/) |
| 451 | Sort Characters By Frequency | 4 | [Solve](https://leetcode.com/problems/sort-characters-by-frequency/) |
| 387 | First Unique Character in a String | 3 | [Solve](https://leetcode.com/problems/first-unique-character-in-a-string/) |

### Count Distinct Elements

| # | Problem | Diff | Link |
| --- | --- | --- | --- |
| 217 | Contains Duplicate | 2 | [Solve](https://leetcode.com/problems/contains-duplicate/) |
| 219 | Contains Duplicate II | 3 | [Solve](https://leetcode.com/problems/contains-duplicate-ii/) |

### Group Anagrams

| # | Problem | Diff | Link |
| --- | --- | --- | --- |
| 49 | Group Anagrams | 3 | [Solve](https://leetcode.com/problems/group-anagrams/) |
| 242 | Valid Anagram | 3 | [Solve](https://leetcode.com/problems/valid-anagram/) |

### Two Sum

| # | Problem | Diff | Link |
| --- | --- | --- | --- |
| 1 | Two Sum (HashMap) | 2 | [Solve](https://leetcode.com/problems/two-sum/) |
| 167 | Two Sum II (Sorted — two pointers) | 3 | [Solve](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/) |

**One-liner:** "Have I seen this?" → hash set; "How many times?" → frequency map.

---

<a id="topic-5"></a>

## Stack

**LIFO structure for tracking states and reversals.**

### Monotonic Stack

| # | Problem | Diff | Link |
| --- | --- | --- | --- |
| 739 | Daily Temperatures | 4 | [Solve](https://leetcode.com/problems/daily-temperatures/) |
| 84 | Largest Rectangle in Histogram | 4 | [Solve](https://leetcode.com/problems/largest-rectangle-in-histogram/) |

### Balanced Parentheses

| # | Problem | Diff | Link |
| --- | --- | --- | --- |
| 20 | Valid Parentheses | 4 | [Solve](https://leetcode.com/problems/valid-parentheses/) |
| 22 | Generate Parentheses | 4 | [Solve](https://leetcode.com/problems/generate-parentheses/) |

### Next Greater / Smaller

| # | Problem | Diff | Link |
| --- | --- | --- | --- |
| 496 | Next Greater Element I | 4 | [Solve](https://leetcode.com/problems/next-greater-element-i/) |
| 503 | Next Greater Element II | 4 | [Solve](https://leetcode.com/problems/next-greater-element-ii/) |

### Min Stack

| # | Problem | Diff | Link |
| --- | --- | --- | --- |
| 155 | Min Stack | 2 | [Solve](https://leetcode.com/problems/min-stack/) |

**One-liner:** Monotonic stack keeps order while scanning — O(n) for next-greater family.

---

<a id="topic-6"></a>

## Queue / Deque

**FIFO or double-ended queues for optimized range operations.**

### Sliding Window Maximum

| # | Problem | Diff | Link |
| --- | --- | --- | --- |
| 239 | Sliding Window Maximum | 4 | [Solve](https://leetcode.com/problems/sliding-window-maximum/) |

### First Negative in Window

| # | Problem | Diff | Link |
| --- | --- | --- | --- |
| — | First Negative in Every Window of Size K | 3 | [GFG](https://www.geeksforgeeks.org/problems/first-negative-integer-in-every-window-of-size-k3345/1) |

### Deque Optimization

| # | Problem | Diff | Link |
| --- | --- | --- | --- |
| 1425 | Constrained Subsequence Sum | 4 | [Solve](https://leetcode.com/problems/constrained-subsequence-sum/) |
| 862 | Shortest Subarray with Sum at Least K | 4 | [Solve](https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/) |

### Design Queue

| # | Problem | Diff | Link |
| --- | --- | --- | --- |
| 622 | Design Circular Queue | 2 | [Solve](https://leetcode.com/problems/design-circular-queue/) |
| 641 | Design Circular Deque | 2 | [Solve](https://leetcode.com/problems/design-circular-deque/) |
| 102 | Binary Tree Level Order Traversal (BFS queue) | 4 | [Solve](https://leetcode.com/problems/binary-tree-level-order-traversal/) |

**One-liner:** Use deque when you need max/min in a sliding window in O(n).

---

<a id="topic-7"></a>

## Linked List

**Pointer manipulation — cycles, reversal, merge.**

### Fast–Slow Pointers

| # | Problem | Diff | Link |
| --- | --- | --- | --- |
| 876 | Middle of the Linked List | 2 | [Solve](https://leetcode.com/problems/middle-of-the-linked-list/) |
| 141 | Linked List Cycle | 2 | [Solve](https://leetcode.com/problems/linked-list-cycle/) |
| 142 | Linked List Cycle II | 2 | [Solve](https://leetcode.com/problems/linked-list-cycle-ii/) |
| 143 | Reorder List | 4 | [Solve](https://leetcode.com/problems/reorder-list/) |

### Reversal

| # | Problem | Diff | Link |
| --- | --- | --- | --- |
| 206 | Reverse Linked List | 2 | [Solve](https://leetcode.com/problems/reverse-linked-list/) |
| 92 | Reverse Linked List II | 2 | [Solve](https://leetcode.com/problems/reverse-linked-list-ii/) |

### Cycle Detection

| # | Problem | Diff | Link |
| --- | --- | --- | --- |
| 141 | Linked List Cycle | 2 | [Solve](https://leetcode.com/problems/linked-list-cycle/) |
| 142 | Linked List Cycle II | 2 | [Solve](https://leetcode.com/problems/linked-list-cycle-ii/) |

### Merge Lists

| # | Problem | Diff | Link |
| --- | --- | --- | --- |
| 21 | Merge Two Sorted Lists | 2 | [Solve](https://leetcode.com/problems/merge-two-sorted-lists/) |
| 23 | Merge k Sorted Lists | 4 | [Solve](https://leetcode.com/problems/merge-k-sorted-lists/) |

**One-liner:** Dummy head + fast/slow pointers solve most linked-list interviews.

---

<a id="topic-8"></a>

## Trees

**Hierarchical data — traversals, BST, LCA.**

### Binary Tree Traversal

| # | Problem | Diff | Link |
| --- | --- | --- | --- |
| 94 | Binary Tree Inorder Traversal | 4 | [Solve](https://leetcode.com/problems/binary-tree-inorder-traversal/) |
| 102 | Binary Tree Level Order Traversal | 4 | [Solve](https://leetcode.com/problems/binary-tree-level-order-traversal/) |
| 104 | Maximum Depth of Binary Tree | 3 | [Solve](https://leetcode.com/problems/maximum-depth-of-binary-tree/) |
| 124 | Binary Tree Maximum Path Sum | 4 | [Solve](https://leetcode.com/problems/binary-tree-maximum-path-sum/) |

### Binary Search Tree

| # | Problem | Diff | Link |
| --- | --- | --- | --- |
| 98 | Validate Binary Search Tree | 3 | [Solve](https://leetcode.com/problems/validate-binary-search-tree/) |
| 700 | Search in a Binary Search Tree | 3 | [Solve](https://leetcode.com/problems/search-in-a-binary-search-tree/) |

### Lowest Common Ancestor

| # | Problem | Diff | Link |
| --- | --- | --- | --- |
| 236 | Lowest Common Ancestor of a Binary Tree | 3 | [Solve](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/) |

### Tree Construction

| # | Problem | Diff | Link |
| --- | --- | --- | --- |
| 105 | Construct Binary Tree from Preorder and Inorder | 3 | [Solve](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/) |

**One-liner:** Tree recursion = process node → left → right → combine.

---

<a id="topic-9"></a>

## Recursion

**Break problems into subproblems — backtracking, divide & conquer, memoization.**

### Backtracking

| # | Problem | Diff | Link |
| --- | --- | --- | --- |
| 78 | Subsets | 5 | [Solve](https://leetcode.com/problems/subsets/) |
| 46 | Permutations | 5 | [Solve](https://leetcode.com/problems/permutations/) |
| 39 | Combination Sum | 5 | [Solve](https://leetcode.com/problems/combination-sum/) |
| 51 | N-Queens | 5 | [Solve](https://leetcode.com/problems/n-queens/) |
| 79 | Word Search | 4 | [Solve](https://leetcode.com/problems/word-search/) |

### Divide & Conquer

| # | Problem | Diff | Link |
| --- | --- | --- | --- |
| 169 | Majority Element | 4 | [Solve](https://leetcode.com/problems/majority-element/) |

### Tree / Graph Recursion

| # | Problem | Diff | Link |
| --- | --- | --- | --- |
| 200 | Number of Islands | 3 | [Solve](https://leetcode.com/problems/number-of-islands/) |

### Memoization

| # | Problem | Diff | Link |
| --- | --- | --- | --- |
| 509 | Fibonacci Number | 3 | [Solve](https://leetcode.com/problems/fibonacci-number/) |

**One-liner:** Backtracking = choose → explore → undo; always define base case.

---

<a id="topic-10"></a>

## Heap

**Priority queue — top-K, merge K lists, median stream.**

### Top K Elements

| # | Problem | Diff | Link |
| --- | --- | --- | --- |
| 215 | Kth Largest Element in an Array | 3 | [Solve](https://leetcode.com/problems/kth-largest-element-in-an-array/) |
| 347 | Top K Frequent Elements | 3 | [Solve](https://leetcode.com/problems/top-k-frequent-elements/) |
| 973 | K Closest Points to Origin | 3 | [Solve](https://leetcode.com/problems/k-closest-points-to-origin/) |

### Priority Queue

| # | Problem | Diff | Link |
| --- | --- | --- | --- |
| 703 | Kth Largest Element in a Stream | 3 | [Solve](https://leetcode.com/problems/kth-largest-element-in-a-stream/) |
| 23 | Merge k Sorted Lists | 4 | [Solve](https://leetcode.com/problems/merge-k-sorted-lists/) |

### Two Heaps

| # | Problem | Diff | Link |
| --- | --- | --- | --- |
| 295 | Find Median from Data Stream | 4 | [Solve](https://leetcode.com/problems/find-median-from-data-stream/) |

**One-liner:** Top K → min-heap of size K — O(n log k).

---

<a id="topic-11"></a>

## Graphs

**Networks, dependencies, shortest paths.**

### BFS

| # | Problem | Diff | Link |
| --- | --- | --- | --- |
| 127 | Word Ladder | 4 | [Solve](https://leetcode.com/problems/word-ladder/) |
| 994 | Rotting Oranges | 4 | [Solve](https://leetcode.com/problems/rotting-oranges/) |
| 102 | Binary Tree Level Order Traversal | 4 | [Solve](https://leetcode.com/problems/binary-tree-level-order-traversal/) |

### DFS

| # | Problem | Diff | Link |
| --- | --- | --- | --- |
| 200 | Number of Islands | 4 | [Solve](https://leetcode.com/problems/number-of-islands/) |
| 695 | Max Area of Island | 4 | [Solve](https://leetcode.com/problems/max-area-of-island/) |
| 133 | Clone Graph | 4 | [Solve](https://leetcode.com/problems/clone-graph/) |

### Dijkstra

| # | Problem | Diff | Link |
| --- | --- | --- | --- |
| 743 | Network Delay Time | 4 | [Solve](https://leetcode.com/problems/network-delay-time/) |

### Topological Sort

| # | Problem | Diff | Link |
| --- | --- | --- | --- |
| 207 | Course Schedule | 3 | [Solve](https://leetcode.com/problems/course-schedule/) |
| 210 | Course Schedule II | 3 | [Solve](https://leetcode.com/problems/course-schedule-ii/) |

**One-liner:** Unweighted shortest → BFS; dependencies → topo sort; weighted → Dijkstra.

---

<a id="topic-12"></a>

## Trie

**Prefix search, autocomplete, dictionary words.**

### Insert / Search

| # | Problem | Diff | Link |
| --- | --- | --- | --- |
| 208 | Implement Trie (Prefix Tree) | 3 | [Solve](https://leetcode.com/problems/implement-trie-prefix-tree/) |

### Prefix Problems

| # | Problem | Diff | Link |
| --- | --- | --- | --- |
| 211 | Design Add and Search Words | 3 | [Solve](https://leetcode.com/problems/design-add-and-search-word-data-structure-design/) |
| 677 | Map Sum Pairs | 3 | [Solve](https://leetcode.com/problems/map-sum-pairs/) |

### Word Break

| # | Problem | Diff | Link |
| --- | --- | --- | --- |
| 139 | Word Break | 3 | [Solve](https://leetcode.com/problems/word-break/) |
| 140 | Word Break II | 4 | [Solve](https://leetcode.com/problems/word-break-ii/) |
| 212 | Word Search II | 4 | [Solve](https://leetcode.com/problems/word-search-ii/) |

**One-liner:** Trie = O(m) prefix lookup where m = word length.

---

<a id="topic-13"></a>

## Dynamic Programming

**Hard optimization — state, recurrence, base case.**

### 1D DP

| # | Problem | Diff | Link |
| --- | --- | --- | --- |
| 70 | Climbing Stairs | 4 | [Solve](https://leetcode.com/problems/climbing-stairs/) |
| 198 | House Robber | 4 | [Solve](https://leetcode.com/problems/house-robber/) |
| 322 | Coin Change | 4 | [Solve](https://leetcode.com/problems/coin-change/) |

### 2D DP

| # | Problem | Diff | Link |
| --- | --- | --- | --- |
| 62 | Unique Paths | 4 | [Solve](https://leetcode.com/problems/unique-paths/) |
| 1143 | Longest Common Subsequence | 4 | [Solve](https://leetcode.com/problems/longest-common-subsequence/) |
| 72 | Edit Distance | 4 | [Solve](https://leetcode.com/problems/edit-distance/) |

### Knapsack DP

| # | Problem | Diff | Link |
| --- | --- | --- | --- |
| 416 | Partition Equal Subset Sum | 3 | [Solve](https://leetcode.com/problems/partition-equal-subset-sum/) |

### DP on Trees

| # | Problem | Diff | Link |
| --- | --- | --- | --- |
| 337 | House Robber III | 3 | [Solve](https://leetcode.com/problems/house-robber-iii/) |

**One-liner:** DP = optimal substructure + overlapping subproblems — write recurrence first.

---

<a id="topic-14"></a>

## Greedy

**Local optimal choices — intervals, scheduling, jump game.**

### Activity Selection

| # | Problem | Diff | Link |
| --- | --- | --- | --- |
| 435 | Non-overlapping Intervals | 3 | [Solve](https://leetcode.com/problems/non-overlapping-intervals/) |
| 452 | Minimum Number of Arrows to Burst Balloons | 3 | [Solve](https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/) |

### Interval Scheduling

| # | Problem | Diff | Link |
| --- | --- | --- | --- |
| 56 | Merge Intervals | 3 | [Solve](https://leetcode.com/problems/merge-intervals/) |
| 253 | Meeting Rooms II | 3 | [Solve](https://leetcode.com/problems/meeting-rooms-ii/) |

### Jump / Greedy Scan

| # | Problem | Diff | Link |
| --- | --- | --- | --- |
| 55 | Jump Game | 3 | [Solve](https://leetcode.com/problems/jump-game/) |
| 45 | Jump Game II | 3 | [Solve](https://leetcode.com/problems/jump-game-ii/) |
| 134 | Gas Station | 3 | [Solve](https://leetcode.com/problems/gas-station/) |

**One-liner:** Interval problems → sort by start or end first.

---

<a id="topic-15"></a>

## Bit Manipulation

**XOR pairs, set bits, power of two.**

### Basic Operations

| # | Problem | Diff | Link |
| --- | --- | --- | --- |
| 371 | Sum of Two Integers | 3 | [Solve](https://leetcode.com/problems/sum-of-two-integers/) |
| 231 | Power of Two | 3 | [Solve](https://leetcode.com/problems/power-of-two/) |
| 190 | Reverse Bits | 3 | [Solve](https://leetcode.com/problems/reverse-bits/) |

### Counting Set Bits

| # | Problem | Diff | Link |
| --- | --- | --- | --- |
| 191 | Number of 1 Bits | 3 | [Solve](https://leetcode.com/problems/number-of-1-bits/) |
| 338 | Counting Bits | 3 | [Solve](https://leetcode.com/problems/counting-bits/) |

### XOR Tricks

| # | Problem | Diff | Link |
| --- | --- | --- | --- |
| 136 | Single Number | 3 | [Solve](https://leetcode.com/problems/single-number/) |
| 260 | Single Number III | 3 | [Solve](https://leetcode.com/problems/single-number-iii/) |

**One-liner:** `x ^ x = 0` — XOR finds the odd one out.

---

<a id="topic-16"></a>

## Advanced Patterns

**Combines multiple ideas — two pointers, meet in middle, sweep line.**

### Two Pointers

| # | Problem | Diff | Link |
| --- | --- | --- | --- |
| 11 | Container With Most Water | 4 | [Solve](https://leetcode.com/problems/container-with-most-water/) |
| 15 | 3Sum | 4 | [Solve](https://leetcode.com/problems/3sum/) |
| 42 | Trapping Rain Water | 4 | [Solve](https://leetcode.com/problems/trapping-rain-water/) |
| 167 | Two Sum II | 4 | [Solve](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/) |

### Meet in the Middle

| # | Problem | Diff | Link |
| --- | --- | --- | --- |
| 4 | Median of Two Sorted Arrays | 4 | [Solve](https://leetcode.com/problems/median-of-two-sorted-arrays/) |

### Sweep Line

| # | Problem | Diff | Link |
| --- | --- | --- | --- |
| 218 | The Skyline Problem | 4 | [Solve](https://leetcode.com/problems/the-skyline-problem/) |

### Prefix Sum

| # | Problem | Diff | Link |
| --- | --- | --- | --- |
| 560 | Subarray Sum Equals K | 2 | [Solve](https://leetcode.com/problems/subarray-sum-equals-k/) |
| 525 | Contiguous Array | 4 | [Solve](https://leetcode.com/problems/contiguous-array/) |

**One-liner:** "Minimize maximum" often → binary search on answer.

---

<a id="topic-17"></a>

## Range Structures

**Efficient range queries and point updates.**

### Segment Tree

| # | Problem | Diff | Link |
| --- | --- | --- | --- |
| 307 | Range Sum Query — Mutable | 3 | [Solve](https://leetcode.com/problems/range-sum-query-mutable/) |
| 327 | Count of Range Sum | 3 | [Solve](https://leetcode.com/problems/count-of-range-sum/) |
| 699 | Falling Squares | 3 | [Solve](https://leetcode.com/problems/falling-squares/) |

### Fenwick Tree (BIT)

| # | Problem | Diff | Link |
| --- | --- | --- | --- |
| 307 | Range Sum Query — Mutable | 3 | [Solve](https://leetcode.com/problems/range-sum-query-mutable/) |
| 315 | Count of Smaller Numbers After Self | 3 | [Solve](https://leetcode.com/problems/count-of-smaller-numbers-after-self/) |

**One-liner:** Many range sum/min/max with updates → BIT or segment tree.

---

<a id="interview-quick-answers"></a>

## Interview Quick Answers

### Pattern Map (Quick Reference)

| Pattern | Go-to signal |
| --- | --- |
| Arrays | Subarray, sorted search, window |
| String | Palindrome, anagram, substring |
| Hashing | Lookup, frequency, duplicate |
| Stack | Brackets, next greater, monotonic |
| Queue / Deque | BFS, window max |
| Linked List | Reverse, cycle, merge |
| Trees | Traversal, BST, LCA |
| Recursion | Subsets, permutations |
| Heap | Top K, K-way merge |
| Graphs | Islands, shortest path, schedule |
| Trie | Prefix, dictionary |
| DP | Count ways, min/max |
| Greedy | Intervals, local best |
| Bit Manipulation | XOR, bits |
| Advanced | Two pointers, prefix, sweep |
| Range Structures | Range query + update |

### Problem-Solving Steps

| Step | Action |
| --- | --- |
| 1 | Clarify input, edge cases, constraints |
| 2 | Map to a **pattern → sub-pattern** in the sidebar |
| 3 | Brute force + complexity |
| 4 | Optimize → pick data structure |
| 5 | Code, test, state time + space |

> **One-liner:** Sidebar = pattern → sub-pattern → LeetCode links. Click **Sliding Window** to see only sliding-window questions.
