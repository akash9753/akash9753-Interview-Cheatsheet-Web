<h1 style="color:#2563eb;">DSA Learning Roadmap for Interview Preparation</h1>

## Goal

<p style="color:#374151;">
<strong style="color:#16a34a;">Pattern-wise DSA roadmap</strong> — 16 essential interview patterns with sub-patterns, LeetCode practice links, complexity notes, and concise theory. Learn one pattern at a time: easy → hard.
</p>

![DSA Patterns Mindmap — 16 Essential Patterns](/assets/dsa/dsa-patterns-mindmap.png)

**Difficulty scale:** 2 = Easy · 3 = Medium · 4 = Hard · 5 = Very Hard · 6 = Extremely Hard

| Step | How to use this course |
| --- | --- |
| 1 | Pick **one pattern** per week |
| 2 | Read concept → solve LeetCode links **easy → hard** |
| 3 | **Revise** patterns regularly before interviews |

---

## Topic Index

<ul style="line-height:1.8;">
  <li><a href="#topic-1"><span style="color:#2563eb;font-weight:700;">1.</span> DSA Basics & Complexity</a></li>
  <li><a href="#topic-2"><span style="color:#2563eb;font-weight:700;">2.</span> Pattern 1 — Arrays</a></li>
  <li><a href="#topic-3"><span style="color:#2563eb;font-weight:700;">3.</span> Pattern 2 — String</a></li>
  <li><a href="#topic-4"><span style="color:#16a34a;font-weight:700;">4.</span> Pattern 3 — Hashing</a></li>
  <li><a href="#topic-5"><span style="color:#16a34a;font-weight:700;">5.</span> Pattern 4 — Stack</a></li>
  <li><a href="#topic-6"><span style="color:#16a34a;font-weight:700;">6.</span> Pattern 5 — Queue / Deque</a></li>
  <li><a href="#topic-7"><span style="color:#7c3aed;font-weight:700;">7.</span> Pattern 6 — Linked List</a></li>
  <li><a href="#topic-8"><span style="color:#7c3aed;font-weight:700;">8.</span> Pattern 7 — Trees</a></li>
  <li><a href="#topic-9"><span style="color:#7c3aed;font-weight:700;">9.</span> Pattern 8 — Recursion</a></li>
  <li><a href="#topic-10"><span style="color:#dc2626;font-weight:700;">10.</span> Pattern 9 — Heap</a></li>
  <li><a href="#topic-11"><span style="color:#dc2626;font-weight:700;">11.</span> Pattern 10 — Graphs</a></li>
  <li><a href="#topic-12"><span style="color:#dc2626;font-weight:700;">12.</span> Pattern 11 — Trie</a></li>
  <li><a href="#topic-13"><span style="color:#ea580c;font-weight:700;">13.</span> Pattern 12 — Dynamic Programming</a></li>
  <li><a href="#topic-14"><span style="color:#ea580c;font-weight:700;">14.</span> Pattern 13 — Greedy</a></li>
  <li><a href="#topic-15"><span style="color:#ea580c;font-weight:700;">15.</span> Pattern 14 — Bit Manipulation</a></li>
  <li><a href="#topic-16"><span style="color:#9333ea;font-weight:700;">16.</span> Pattern 15 — Advanced Patterns</a></li>
  <li><a href="#topic-17"><span style="color:#9333ea;font-weight:700;">17.</span> Pattern 16 — Range Structures</a></li>
  <li><a href="#interview-quick-answers"><span style="color:#9333ea;font-weight:700;">Guide:</span> Interview Quick Answers</a></li>
</ul>

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

## 2. Pattern 1 — Arrays

**Why it matters:** Foundation of most problems — master indexing, traversal, and in-place tricks.

| Sub-pattern | Idea | Typical complexity |
| --- | --- | --- |
| Prefix Sum | Precompute cumulative sums for range queries | Build O(n), query O(1) |
| Sliding Window | Contiguous subarray/substring optimization | O(n) |
| Kadane's / Subarray | Max sum / product subarray | O(n) |
| Binary Search | Halve search space on sorted data | O(log n) |

### LeetCode — Arrays

| # | Problem | Sub-pattern | Diff | Link |
| --- | --- | --- | --- | --- |
| 303 | Range Sum Query — Immutable | Prefix Sum | 2 | [Solve](https://leetcode.com/problems/range-sum-query-immutable/) |
| 560 | Subarray Sum Equals K | Prefix Sum | 5 | [Solve](https://leetcode.com/problems/subarray-sum-equals-k/) |
| 53 | Maximum Subarray | Kadane's | 3 | [Solve](https://leetcode.com/problems/maximum-subarray/) |
| 152 | Maximum Product Subarray | Kadane's | 3 | [Solve](https://leetcode.com/problems/maximum-product-subarray/) |
| 3 | Longest Substring Without Repeating Characters | Sliding Window | 6 | [Solve](https://leetcode.com/problems/longest-substring-without-repeating-characters/) |
| 76 | Minimum Window Substring | Sliding Window | 6 | [Solve](https://leetcode.com/problems/minimum-window-substring/) |
| 424 | Longest Repeating Character Replacement | Sliding Window | 6 | [Solve](https://leetcode.com/problems/longest-repeating-character-replacement/) |
| 904 | Fruit Into Baskets | Sliding Window | 6 | [Solve](https://leetcode.com/problems/fruit-into-baskets/) |
| 704 | Binary Search | Binary Search | 2 | [Solve](https://leetcode.com/problems/binary-search/) |
| 33 | Search in Rotated Sorted Array | Binary Search | 4 | [Solve](https://leetcode.com/problems/search-in-rotated-sorted-array/) |
| 34 | Find First and Last Position | Binary Search | 4 | [Solve](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/) |

**One-liner:** Arrays + prefix sum / window / binary search cover a huge share of medium interview questions.

---

<a id="topic-3"></a>

## 3. Pattern 2 — String

**Why it matters:** Text processing, parsing, pattern matching, and frequency-based string problems.

| Sub-pattern | Idea |
| --- | --- |
| Two Pointers | Scan from ends or same direction |
| Pattern Matching (KMP) | Linear-time substring search |
| Anagram / Frequency Count | Char count maps |
| Palindrome | Two pointers or expand around center |

### First Repeating vs Non-Repeating (`"swiss"`)

| Problem | Answer | Approach |
| --- | --- | --- |
| First **repeating** | `'s'` | One pass + `HashSet` |
| First **non-repeating** | `'w'` | Frequency map + second pass |

```csharp
// First repeating — "swiss" → 's'
public static char? FirstRepeatingChar(string s)
{
    var seen = new HashSet<char>();
    foreach (char c in s) if (!seen.Add(c)) return c;
    return null;
}

// First non-repeating — "swiss" → 'w'
public static char? FirstNonRepeatingChar(string s)
{
    var freq = new Dictionary<char, int>();
    foreach (char c in s) freq[c] = freq.GetValueOrDefault(c) + 1;
    foreach (char c in s) if (freq[c] == 1) return c;
    return null;
}
```

### LeetCode — String

| # | Problem | Sub-pattern | Diff | Link |
| --- | --- | --- | --- | --- |
| 125 | Valid Palindrome | Palindrome | 2 | [Solve](https://leetcode.com/problems/valid-palindrome/) |
| 5 | Longest Palindromic Substring | Palindrome | 4 | [Solve](https://leetcode.com/problems/longest-palindromic-substring/) |
| 242 | Valid Anagram | Anagram / Frequency | 3 | [Solve](https://leetcode.com/problems/valid-anagram/) |
| 49 | Group Anagrams | Anagram / Frequency | 3 | [Solve](https://leetcode.com/problems/group-anagrams/) |
| 387 | First Unique Character in a String | Frequency | 3 | [Solve](https://leetcode.com/problems/first-unique-character-in-a-string/) |
| 28 | Find the Index of the First Occurrence | KMP / Matching | 4 | [Solve](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/) |
| 344 | Reverse String | Two Pointers | 2 | [Solve](https://leetcode.com/problems/reverse-string/) |
| 167 | Two Sum II | Two Pointers | 5 | [Solve](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/) |

**One-liner:** String problems → frequency map, two pointers, or sliding window in most cases.

---

<a id="topic-4"></a>

## 4. Pattern 3 — Hashing

**Why it matters:** O(1) average lookups — turns O(n²) brute force into O(n).

| Sub-pattern | Use case |
| --- | --- |
| Hash Map | Key → value lookup |
| Frequency Map | Count occurrences |
| Count Distinct | Duplicates, unique elements |
| Group Anagrams | Bucket by normalized key |
| Two Sum | Complement lookup |

### LeetCode — Hashing

| # | Problem | Sub-pattern | Diff | Link |
| --- | --- | --- | --- | --- |
| 1 | Two Sum | Two Sum / Hash Map | 4 | [Solve](https://leetcode.com/problems/two-sum/) |
| 217 | Contains Duplicate | Count Distinct | 3 | [Solve](https://leetcode.com/problems/contains-duplicate/) |
| 219 | Contains Duplicate II | Count Distinct | 3 | [Solve](https://leetcode.com/problems/contains-duplicate-ii/) |
| 49 | Group Anagrams | Group Anagrams | 3 | [Solve](https://leetcode.com/problems/group-anagrams/) |
| 347 | Top K Frequent Elements | Frequency Map | 4 | [Solve](https://leetcode.com/problems/top-k-frequent-elements/) |
| 451 | Sort Characters By Frequency | Frequency Map | 4 | [Solve](https://leetcode.com/problems/sort-characters-by-frequency/) |
| 146 | LRU Cache | Hash Map + DLL | 5 | [Solve](https://leetcode.com/problems/lru-cache/) |
| 128 | Longest Consecutive Sequence | Hash Set | 4 | [Solve](https://leetcode.com/problems/longest-consecutive-sequence/) |

**One-liner:** "Have I seen this before?" → hash set; "How many times?" → frequency map.

---

<a id="topic-5"></a>

## 5. Pattern 4 — Stack

**Why it matters:** LIFO — parsing, monotonic tracking, next greater/smaller element.

| Sub-pattern | Use case |
| --- | --- |
| Monotonic Stack | Next greater/smaller, histogram |
| Balanced Parentheses | Matching brackets |
| Next Greater / Smaller | Scan with decreasing/increasing stack |
| Min Stack | O(1) min with extra stack |

### LeetCode — Stack

| # | Problem | Sub-pattern | Diff | Link |
| --- | --- | --- | --- | --- |
| 20 | Valid Parentheses | Balanced Parentheses | 4 | [Solve](https://leetcode.com/problems/valid-parentheses/) |
| 22 | Generate Parentheses | Balanced Parentheses | 4 | [Solve](https://leetcode.com/problems/generate-parentheses/) |
| 155 | Min Stack | Min Stack | 2 | [Solve](https://leetcode.com/problems/min-stack/) |
| 496 | Next Greater Element I | Next Greater | 4 | [Solve](https://leetcode.com/problems/next-greater-element-i/) |
| 503 | Next Greater Element II | Next Greater | 4 | [Solve](https://leetcode.com/problems/next-greater-element-ii/) |
| 739 | Daily Temperatures | Monotonic Stack | 4 | [Solve](https://leetcode.com/problems/daily-temperatures/) |
| 84 | Largest Rectangle in Histogram | Monotonic Stack | 4 | [Solve](https://leetcode.com/problems/largest-rectangle-in-histogram/) |

**One-liner:** Monotonic stack keeps elements in sorted order while scanning — O(n) for next-greater family.

---

<a id="topic-6"></a>

## 6. Pattern 5 — Queue / Deque

**Why it matters:** FIFO and double-ended queues for BFS, sliding window max, and scheduling.

| Sub-pattern | Use case |
| --- | --- |
| Sliding Window Maximum | Deque stores useful indices |
| First Negative in Window | Queue of negatives per window |
| Deque Optimization | Push/pop both ends O(1) |
| Design Queue | Circular buffer implementation |

### LeetCode — Queue / Deque

| # | Problem | Sub-pattern | Diff | Link |
| --- | --- | --- | --- | --- |
| 239 | Sliding Window Maximum | Sliding Window Max | 4 | [Solve](https://leetcode.com/problems/sliding-window-maximum/) |
| 1425 | Constrained Subsequence Sum | Deque Optimization | 4 | [Solve](https://leetcode.com/problems/constrained-subsequence-sum/) |
| 862 | Shortest Subarray with Sum at Least K | Deque | 4 | [Solve](https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/) |
| 622 | Design Circular Queue | Design Queue | 2 | [Solve](https://leetcode.com/problems/design-circular-queue/) |
| 641 | Design Circular Deque | Design Queue | 2 | [Solve](https://leetcode.com/problems/design-circular-deque/) |
| 102 | Binary Tree Level Order Traversal | BFS Queue | 4 | [Solve](https://leetcode.com/problems/binary-tree-level-order-traversal/) |

**One-liner:** Use deque when you need max/min in a sliding window in O(n).

---

<a id="topic-7"></a>

## 7. Pattern 6 — Linked List

**Why it matters:** Pointer manipulation — cycles, reversal, merge — very common in interviews.

| Sub-pattern | Technique |
| --- | --- |
| Fast–Slow Pointers | Middle node, cycle detection |
| Reversal | Iterative three-pointer |
| Cycle Detection | Floyd's algorithm |
| Merge Lists | Dummy head + compare |

### LeetCode — Linked List

| # | Problem | Sub-pattern | Diff | Link |
| --- | --- | --- | --- | --- |
| 206 | Reverse Linked List | Reversal | 2 | [Solve](https://leetcode.com/problems/reverse-linked-list/) |
| 92 | Reverse Linked List II | Reversal | 2 | [Solve](https://leetcode.com/problems/reverse-linked-list-ii/) |
| 141 | Linked List Cycle | Cycle Detection | 2 | [Solve](https://leetcode.com/problems/linked-list-cycle/) |
| 142 | Linked List Cycle II | Cycle Detection | 2 | [Solve](https://leetcode.com/problems/linked-list-cycle-ii/) |
| 876 | Middle of the Linked List | Fast–Slow | 2 | [Solve](https://leetcode.com/problems/middle-of-the-linked-list/) |
| 21 | Merge Two Sorted Lists | Merge Lists | 2 | [Solve](https://leetcode.com/problems/merge-two-sorted-lists/) |
| 23 | Merge k Sorted Lists | Merge Lists | 4 | [Solve](https://leetcode.com/problems/merge-k-sorted-lists/) |
| 143 | Reorder List | Fast–Slow + Reversal | 4 | [Solve](https://leetcode.com/problems/reorder-list/) |

**One-liner:** Dummy head + fast/slow pointers solve most linked-list interview problems.

---

<a id="topic-8"></a>

## 8. Pattern 7 — Trees

**Why it matters:** Hierarchical data — traversals, BST, LCA appear in almost every onsite loop.

| Sub-pattern | Key idea |
| --- | --- |
| Binary Tree Traversal | Inorder / preorder / postorder / level order |
| Binary Search Tree | Left < root < right |
| Lowest Common Ancestor | Recurse; split at root |
| Tree Construction | Divide array by root index |

### LeetCode — Trees

| # | Problem | Sub-pattern | Diff | Link |
| --- | --- | --- | --- | --- |
| 94 | Binary Tree Inorder Traversal | Traversal | 4 | [Solve](https://leetcode.com/problems/binary-tree-inorder-traversal/) |
| 102 | Binary Tree Level Order Traversal | Traversal | 4 | [Solve](https://leetcode.com/problems/binary-tree-level-order-traversal/) |
| 104 | Maximum Depth of Binary Tree | Traversal | 3 | [Solve](https://leetcode.com/problems/maximum-depth-of-binary-tree/) |
| 98 | Validate Binary Search Tree | BST | 3 | [Solve](https://leetcode.com/problems/validate-binary-search-tree/) |
| 700 | Search in a Binary Search Tree | BST | 3 | [Solve](https://leetcode.com/problems/search-in-a-binary-search-tree/) |
| 236 | Lowest Common Ancestor of a Binary Tree | LCA | 3 | [Solve](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/) |
| 105 | Construct Binary Tree from Preorder and Inorder | Construction | 3 | [Solve](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/) |
| 124 | Binary Tree Maximum Path Sum | Traversal | 4 | [Solve](https://leetcode.com/problems/binary-tree-maximum-path-sum/) |

**One-liner:** Tree recursion = process node → left → right → combine results.

---

<a id="topic-9"></a>

## 9. Pattern 8 — Recursion

**Why it matters:** Break problems into subproblems — backtracking, divide & conquer, memoization.

| Sub-pattern | When |
| --- | --- |
| Backtracking | Explore all choices, undo |
| Divide & Conquer | Split, solve, merge |
| Tree / Graph Recursion | DFS on structure |
| Memoization | Cache overlapping subproblems |

### LeetCode — Recursion

| # | Problem | Sub-pattern | Diff | Link |
| --- | --- | --- | --- | --- |
| 78 | Subsets | Backtracking | 5 | [Solve](https://leetcode.com/problems/subsets/) |
| 46 | Permutations | Backtracking | 5 | [Solve](https://leetcode.com/problems/permutations/) |
| 39 | Combination Sum | Backtracking | 5 | [Solve](https://leetcode.com/problems/combination-sum/) |
| 51 | N-Queens | Backtracking | 5 | [Solve](https://leetcode.com/problems/n-queens/) |
| 169 | Majority Element | Divide & Conquer | 4 | [Solve](https://leetcode.com/problems/majority-element/) |
| 509 | Fibonacci Number | Memoization | 3 | [Solve](https://leetcode.com/problems/fibonacci-number/) |
| 200 | Number of Islands | Graph Recursion | 3 | [Solve](https://leetcode.com/problems/number-of-islands/) |
| 79 | Word Search | Backtracking | 4 | [Solve](https://leetcode.com/problems/word-search/) |

**One-liner:** Backtracking = choose → explore → undo; always define base case and prune early.

---

<a id="topic-10"></a>

## 10. Pattern 9 — Heap

**Why it matters:** Priority queue — top-K, merge K lists, median stream.

| Sub-pattern | Use case |
| --- | --- |
| Priority Queue | Process smallest/largest first |
| Top K Elements | Min-heap of size K |
| Heapify / Heap Sort | O(n log n) sort in-place |

### LeetCode — Heap

| # | Problem | Sub-pattern | Diff | Link |
| --- | --- | --- | --- | --- |
| 215 | Kth Largest Element in an Array | Top K | 3 | [Solve](https://leetcode.com/problems/kth-largest-element-in-an-array/) |
| 347 | Top K Frequent Elements | Top K | 3 | [Solve](https://leetcode.com/problems/top-k-frequent-elements/) |
| 703 | Kth Largest Element in a Stream | Priority Queue | 3 | [Solve](https://leetcode.com/problems/kth-largest-element-in-a-stream/) |
| 295 | Find Median from Data Stream | Two Heaps | 4 | [Solve](https://leetcode.com/problems/find-median-from-data-stream/) |
| 23 | Merge k Sorted Lists | Heap | 4 | [Solve](https://leetcode.com/problems/merge-k-sorted-lists/) |
| 973 | K Closest Points to Origin | Top K | 3 | [Solve](https://leetcode.com/problems/k-closest-points-to-origin/) |

**One-liner:** Top K → min-heap of size K — O(n log k) beats full sort O(n log n).

---

<a id="topic-11"></a>

## 11. Pattern 10 — Graphs

**Why it matters:** Networks, dependencies, shortest paths — BFS, DFS, Dijkstra, topological sort.

| Sub-pattern | Use case |
| --- | --- |
| BFS | Shortest path unweighted, levels |
| DFS | Components, cycles, exhaustive search |
| Dijkstra | Shortest path weighted (non-negative) |
| Topological Sort | Ordering with dependencies |

### LeetCode — Graphs

| # | Problem | Sub-pattern | Diff | Link |
| --- | --- | --- | --- | --- |
| 200 | Number of Islands | DFS / BFS | 4 | [Solve](https://leetcode.com/problems/number-of-islands/) |
| 127 | Word Ladder | BFS | 4 | [Solve](https://leetcode.com/problems/word-ladder/) |
| 695 | Max Area of Island | DFS | 4 | [Solve](https://leetcode.com/problems/max-area-of-island/) |
| 207 | Course Schedule | Topological Sort | 3 | [Solve](https://leetcode.com/problems/course-schedule/) |
| 210 | Course Schedule II | Topological Sort | 3 | [Solve](https://leetcode.com/problems/course-schedule-ii/) |
| 743 | Network Delay Time | Dijkstra | 4 | [Solve](https://leetcode.com/problems/network-delay-time/) |
| 133 | Clone Graph | DFS / BFS | 4 | [Solve](https://leetcode.com/problems/clone-graph/) |
| 994 | Rotting Oranges | BFS | 4 | [Solve](https://leetcode.com/problems/rotting-oranges/) |

**One-liner:** Unweighted shortest path → BFS; dependencies → topological sort; weighted → Dijkstra + heap.

---

<a id="topic-12"></a>

## 12. Pattern 11 — Trie

**Why it matters:** Prefix search, autocomplete, dictionary word problems.

| Sub-pattern | Use case |
| --- | --- |
| Insert / Search | Standard trie operations |
| Prefix Problems | Starts-with queries |
| Word Break | DP + trie or set |

### LeetCode — Trie

| # | Problem | Sub-pattern | Diff | Link |
| --- | --- | --- | --- | --- |
| 208 | Implement Trie (Prefix Tree) | Insert / Search | 3 | [Solve](https://leetcode.com/problems/implement-trie-prefix-tree/) |
| 211 | Design Add and Search Words | Prefix | 3 | [Solve](https://leetcode.com/problems/design-add-and-search-word-data-structure-design/) |
| 677 | Map Sum Pairs | Prefix | 3 | [Solve](https://leetcode.com/problems/map-sum-pairs/) |
| 139 | Word Break | Word Break | 3 | [Solve](https://leetcode.com/problems/word-break/) |
| 140 | Word Break II | Word Break | 4 | [Solve](https://leetcode.com/problems/word-break-ii/) |
| 212 | Word Search II | Trie + Backtracking | 4 | [Solve](https://leetcode.com/problems/word-search-ii/) |

**One-liner:** Trie trades space for O(m) prefix lookup where m = word length.

---

<a id="topic-13"></a>

## 13. Pattern 12 — Dynamic Programming

**Why it matters:** Hard optimization — define state, recurrence, base case, then memoize or tabulate.

| Sub-pattern | Examples |
| --- | --- |
| 1D DP | Climbing stairs, house robber, coin change |
| 2D DP | Unique paths, LCS, edit distance |
| Knapsack DP | Subset sum, partition equal subset |
| DP on Trees | House robber III, tree diameter |

### LeetCode — Dynamic Programming

| # | Problem | Sub-pattern | Diff | Link |
| --- | --- | --- | --- | --- |
| 70 | Climbing Stairs | 1D DP | 4 | [Solve](https://leetcode.com/problems/climbing-stairs/) |
| 198 | House Robber | 1D DP | 4 | [Solve](https://leetcode.com/problems/house-robber/) |
| 322 | Coin Change | 1D DP | 4 | [Solve](https://leetcode.com/problems/coin-change/) |
| 62 | Unique Paths | 2D DP | 4 | [Solve](https://leetcode.com/problems/unique-paths/) |
| 1143 | Longest Common Subsequence | 2D DP | 4 | [Solve](https://leetcode.com/problems/longest-common-subsequence/) |
| 72 | Edit Distance | 2D DP | 4 | [Solve](https://leetcode.com/problems/edit-distance/) |
| 416 | Partition Equal Subset Sum | Knapsack DP | 3 | [Solve](https://leetcode.com/problems/partition-equal-subset-sum/) |
| 337 | House Robber III | DP on Trees | 3 | [Solve](https://leetcode.com/problems/house-robber-iii/) |

**One-liner:** DP = optimal substructure + overlapping subproblems — write recurrence before coding.

---

<a id="topic-14"></a>

## 14. Pattern 13 — Greedy

**Why it matters:** Local optimal choices — intervals, scheduling, jump game.

| Sub-pattern | Examples |
| --- | --- |
| Activity Selection | Non-overlapping intervals |
| Interval Scheduling | Merge / meeting rooms |
| Huffman Coding | Merge smallest frequencies |

### LeetCode — Greedy

| # | Problem | Sub-pattern | Diff | Link |
| --- | --- | --- | --- | --- |
| 435 | Non-overlapping Intervals | Activity Selection | 3 | [Solve](https://leetcode.com/problems/non-overlapping-intervals/) |
| 452 | Minimum Number of Arrows to Burst Balloons | Activity Selection | 3 | [Solve](https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/) |
| 56 | Merge Intervals | Interval Scheduling | 3 | [Solve](https://leetcode.com/problems/merge-intervals/) |
| 253 | Meeting Rooms II | Interval Scheduling | 3 | [Solve](https://leetcode.com/problems/meeting-rooms-ii/) |
| 55 | Jump Game | Greedy | 3 | [Solve](https://leetcode.com/problems/jump-game/) |
| 45 | Jump Game II | Greedy | 3 | [Solve](https://leetcode.com/problems/jump-game-ii/) |
| 134 | Gas Station | Greedy | 3 | [Solve](https://leetcode.com/problems/gas-station/) |

**One-liner:** Interval problems → sort by start or end first; greedy fails on 0/1 knapsack — use DP.

---

<a id="topic-15"></a>

## 15. Pattern 14 — Bit Manipulation

**Why it matters:** Compact tricks — XOR pairs, set bits, power of two.

| Sub-pattern | Trick |
| --- | --- |
| Basic Operations | AND, OR, XOR, shift |
| Counting Set Bits | `n & (n-1)` clears lowest bit |
| XOR Tricks | `a^a=0`, find single number |

### LeetCode — Bit Manipulation

| # | Problem | Sub-pattern | Diff | Link |
| --- | --- | --- | --- | --- |
| 136 | Single Number | XOR Tricks | 3 | [Solve](https://leetcode.com/problems/single-number/) |
| 191 | Number of 1 Bits | Counting Set Bits | 3 | [Solve](https://leetcode.com/problems/number-of-1-bits/) |
| 338 | Counting Bits | Counting Set Bits | 3 | [Solve](https://leetcode.com/problems/counting-bits/) |
| 260 | Single Number III | XOR Tricks | 3 | [Solve](https://leetcode.com/problems/single-number-iii/) |
| 371 | Sum of Two Integers | Basic Operations | 3 | [Solve](https://leetcode.com/problems/sum-of-two-integers/) |
| 231 | Power of Two | Basic Operations | 3 | [Solve](https://leetcode.com/problems/power-of-two/) |
| 190 | Reverse Bits | Basic Operations | 3 | [Solve](https://leetcode.com/problems/reverse-bits/) |

**One-liner:** XOR cancels duplicates — `x ^ x = 0` — great for "find the odd one out".

---

<a id="topic-16"></a>

## 16. Pattern 15 — Advanced Patterns

**Why it matters:** Combines multiple ideas — two pointers, meet in middle, sweep line, prefix sum.

| Sub-pattern | Use case |
| --- | --- |
| Two Pointers | Sorted pairs, container water, trapping rain |
| Meet in the Middle | Split search space |
| Sweep Line | Events on timeline / skyline |
| Prefix Sum | Subarray sum equals K |

### LeetCode — Advanced Patterns

| # | Problem | Sub-pattern | Diff | Link |
| --- | --- | --- | --- | --- |
| 11 | Container With Most Water | Two Pointers | 4 | [Solve](https://leetcode.com/problems/container-with-most-water/) |
| 15 | 3Sum | Two Pointers | 4 | [Solve](https://leetcode.com/problems/3sum/) |
| 42 | Trapping Rain Water | Two Pointers | 4 | [Solve](https://leetcode.com/problems/trapping-rain-water/) |
| 167 | Two Sum II | Two Pointers | 4 | [Solve](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/) |
| 4 | Median of Two Sorted Arrays | Meet in the Middle | 4 | [Solve](https://leetcode.com/problems/median-of-two-sorted-arrays/) |
| 218 | The Skyline Problem | Sweep Line | 4 | [Solve](https://leetcode.com/problems/the-skyline-problem/) |
| 560 | Subarray Sum Equals K | Prefix Sum | 2 | [Solve](https://leetcode.com/problems/subarray-sum-equals-k/) |
| 525 | Contiguous Array | Prefix Sum | 4 | [Solve](https://leetcode.com/problems/contiguous-array/) |

**One-liner:** "Minimize maximum / maximize minimum" often → binary search on answer (see also Pattern 1 binary search).

---

<a id="topic-17"></a>

## 17. Pattern 16 — Range Structures

**Why it matters:** Efficient range queries and point updates — segment tree, Fenwick tree (BIT).

| Sub-pattern | Operations |
| --- | --- |
| Segment Tree | Range query + point/range update O(log n) |
| Fenwick Tree (BIT) | Prefix sums with updates O(log n) |

### LeetCode — Range Structures

| # | Problem | Sub-pattern | Diff | Link |
| --- | --- | --- | --- | --- |
| 307 | Range Sum Query — Mutable | Segment Tree / BIT | 3 | [Solve](https://leetcode.com/problems/range-sum-query-mutable/) |
| 315 | Count of Smaller Numbers After Self | Fenwick Tree | 3 | [Solve](https://leetcode.com/problems/count-of-smaller-numbers-after-self/) |
| 327 | Count of Range Sum | Segment Tree | 3 | [Solve](https://leetcode.com/problems/count-of-range-sum/) |
| 699 | Falling Squares | Segment Tree | 3 | [Solve](https://leetcode.com/problems/falling-squares/) |

**One-liner:** When you see many range sum/min/max queries with updates — think BIT or segment tree.

---

<a id="interview-quick-answers"></a>

## Interview Quick Answers

### Pattern Map (Quick Reference)

| # | Pattern | Go-to signal |
| --- | --- | --- |
| 1 | Arrays | Subarray, sorted search, window on array |
| 2 | String | Palindrome, anagram, substring |
| 3 | Hashing | Lookup, frequency, duplicate |
| 4 | Stack | Brackets, next greater, monotonic |
| 5 | Queue / Deque | BFS, window max |
| 6 | Linked List | Reverse, cycle, merge |
| 7 | Trees | Traversal, BST, LCA |
| 8 | Recursion | Subsets, permutations, explore all |
| 9 | Heap | Top K, K-way merge, median |
| 10 | Graphs | Islands, shortest path, schedule |
| 11 | Trie | Prefix, dictionary words |
| 12 | DP | Count ways, min/max optimization |
| 13 | Greedy | Intervals, local best choice |
| 14 | Bit Manipulation | XOR, single number, bits |
| 15 | Advanced | Two pointers, prefix sum, sweep |
| 16 | Range Structures | Range query + update |

### Problem-Solving Steps

| Step | Action |
| --- | --- |
| 1 | Clarify input, edge cases, constraints |
| 2 | Map to **one of 16 patterns** |
| 3 | Brute force + complexity |
| 4 | Optimize → pick data structure |
| 5 | Code, test, state time + space |

| Topic | Key Points |
| --- | --- |
| Big-O | Worst-case growth; state time + space |
| First repeating char | `"swiss"` → `'s'` — one pass + `HashSet` |
| First non-repeating char | `"swiss"` → `'w'` — freq map + second pass |
| Two pointers | 11, 15, 42, 167 on LeetCode |
| Sliding window | 3, 76, 424, 904 on LeetCode |
| Hash map | Two sum, frequency — O(1) avg lookup |
| BFS vs DFS | BFS shortest unweighted; DFS explore/backtrack |
| DP | State + recurrence + base case |
| Top K | Min-heap size K — O(n log k) |

> **One-liner:** Practice → Understand → Optimize → Repeat — one pattern at a time with LeetCode links above.
