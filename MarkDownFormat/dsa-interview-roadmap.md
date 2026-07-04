<h1 style="color:#2563eb;">DSA Learning Roadmap for Interview Preparation</h1>

## Goal

<p style="color:#374151;">
Standard <strong style="color:#16a34a;">Data Structures & Algorithms interview roadmap</strong> — complexity analysis, core data structures, classic patterns, sorting/searching, recursion, DP, and problem-solving strategy explained concisely.
</p>

---

## Topic Index

<ul style="line-height:1.8;">
  <li><a href="#topic-1"><span style="color:#2563eb;font-weight:700;">1.</span> DSA Basics & Time/Space Complexity</a></li>
  <li><a href="#topic-2"><span style="color:#2563eb;font-weight:700;">2.</span> Arrays & Two Pointers</a></li>
  <li><a href="#topic-3"><span style="color:#2563eb;font-weight:700;">3.</span> Strings & Sliding Window</a></li>
  <li><a href="#topic-4"><span style="color:#16a34a;font-weight:700;">4.</span> Linked Lists</a></li>
  <li><a href="#topic-5"><span style="color:#16a34a;font-weight:700;">5.</span> Stacks & Queues</a></li>
  <li><a href="#topic-6"><span style="color:#16a34a;font-weight:700;">6.</span> Hash Tables & Hash Sets</a></li>
  <li><a href="#topic-7"><span style="color:#7c3aed;font-weight:700;">7.</span> Trees — Binary Tree & BST</a></li>
  <li><a href="#topic-8"><span style="color:#7c3aed;font-weight:700;">8.</span> Heaps & Priority Queue</a></li>
  <li><a href="#topic-9"><span style="color:#7c3aed;font-weight:700;">9.</span> Graphs — BFS & DFS</a></li>
  <li><a href="#topic-10"><span style="color:#dc2626;font-weight:700;">10.</span> Sorting Algorithms</a></li>
  <li><a href="#topic-11"><span style="color:#dc2626;font-weight:700;">11.</span> Searching Algorithms</a></li>
  <li><a href="#topic-12"><span style="color:#dc2626;font-weight:700;">12.</span> Recursion & Backtracking</a></li>
  <li><a href="#topic-13"><span style="color:#ea580c;font-weight:700;">13.</span> Dynamic Programming</a></li>
  <li><a href="#topic-14"><span style="color:#ea580c;font-weight:700;">14.</span> Greedy Algorithms</a></li>
  <li><a href="#topic-15"><span style="color:#ea580c;font-weight:700;">15.</span> Binary Search & Divide & Conquer</a></li>
  <li><a href="#topic-16"><span style="color:#9333ea;font-weight:700;">16.</span> Interview Patterns & Problem-Solving Framework</a></li>
  <li><a href="#interview-quick-answers"><span style="color:#9333ea;font-weight:700;">Guide:</span> Interview Quick Answers</a></li>
</ul>

---

<a id="topic-1"></a>

## 1. DSA Basics & Time/Space Complexity

### What is DSA?

| Term | Meaning |
| --- | --- |
| **Data Structure** | Way to organize and store data (array, list, tree, graph) |
| **Algorithm** | Step-by-step procedure to solve a problem |
| **DSA** | Choosing the right structure + efficient algorithm for the problem |

### Big-O Notation

Describes how runtime or memory **grows** as input size `n` increases — worst-case unless stated otherwise.

| Complexity | Name | Example |
| --- | --- | --- |
| O(1) | Constant | Hash lookup, array index access |
| O(log n) | Logarithmic | Binary search |
| O(n) | Linear | Single loop over array |
| O(n log n) | Linearithmic | Merge sort, heap sort |
| O(n²) | Quadratic | Nested loops, bubble sort |
| O(2ⁿ) | Exponential | Naive recursive Fibonacci |
| O(n!) | Factorial | Generating all permutations |

### Common Rules

| Rule | Example |
| --- | --- |
| Drop constants | O(2n) → O(n) |
| Drop lower terms | O(n² + n) → O(n²) |
| Different inputs → add | Two arrays size m, n → O(m + n) |
| Nested work → multiply | Loop inside loop → O(n²) |

### Space Complexity

| Type | Meaning |
| --- | --- |
| **Auxiliary space** | Extra memory used by algorithm (excluding input) |
| **Total space** | Input + auxiliary |

| Question | Answer |
| --- | --- |
| Best case vs worst case? | Big-O usually means **worst case**; mention best/average when relevant |
| O(log n) when? | Halving search space each step — binary search, balanced tree ops |
| Amortized O(1)? | Dynamic array push — occasional resize, average still constant |

**Interview one-liner:** Big-O describes growth rate, not exact time — always state time and space complexity after coding.

---

<a id="topic-2"></a>

## 2. Arrays & Two Pointers

### Array Basics

| Operation | Time (array) | Notes |
| --- | --- | --- |
| Access by index | O(1) | Random access |
| Search (unsorted) | O(n) | Linear scan |
| Insert at end | O(1) amortized | Dynamic array |
| Insert at middle | O(n) | Shift elements |
| Delete | O(n) | Shift elements |

### Two Pointers Pattern

Use two indices moving toward each other or in same direction.

| Pattern | When to use | Example |
| --- | --- | --- |
| **Opposite ends** | Sorted array, pair sum | Two Sum II |
| **Same direction** | Remove duplicates, partition | Remove element |
| **Fast & slow** | Cycle detection, middle element | Linked list cycle |

```csharp
// Opposite ends — pair sum in sorted array
int left = 0, right = nums.Length - 1;
while (left < right)
{
    int sum = nums[left] + nums[right];
    if (sum == target) return new[] { left, right };
    if (sum < target) left++;
    else right--;
}
```

| Question | Answer |
| --- | --- |
| Two Sum unsorted? | Hash map — O(n) time, O(n) space |
| Kadane's algorithm? | Max subarray sum — O(n), track current and global max |
| Rotate array? | Reverse whole array, then reverse segments — O(n) time O(1) space |

### LeetCode Practice — Two Pointers

| # | Problem | Link |
| --- | --- | --- |
| 11 | Container With Most Water | [leetcode.com/problems/container-with-most-water](https://leetcode.com/problems/container-with-most-water/) |
| 15 | 3Sum | [leetcode.com/problems/3sum](https://leetcode.com/problems/3sum/) |
| 167 | Two Sum II — Input Array Is Sorted | [leetcode.com/problems/two-sum-ii-input-array-is-sorted](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/) |
| 42 | Trapping Rain Water | [leetcode.com/problems/trapping-rain-water](https://leetcode.com/problems/trapping-rain-water/) |

**Must-know:** Arrays excel at index access; two pointers avoid extra space when input is sorted or in-place.

---

<a id="topic-3"></a>

## 3. Strings & Sliding Window

### String Basics (.NET / general)

| Operation | Typical complexity |
| --- | --- |
| Access char at index | O(1) |
| Concatenation | O(n + m) — new string allocated |
| Substring search (naive) | O(n × m) |
| Compare | O(min(n, m)) |

### First Repeating Character

Find the **first character** that appears twice when scanning the string left to right.

**Example:** `"swiss"` → **`'s'`** (second `s` at index 3 is the first repeat)

| Index | Char | Seen set | Action |
| --- | --- | --- | --- |
| 0 | s | {s} | Add |
| 1 | w | {s, w} | Add |
| 2 | i | {s, w, i} | Add |
| 3 | s | s exists | **Return `'s'`** |

**Approach:** `HashSet` — O(n) time, O(k) space (`k` = unique chars).

```csharp
public static char? FirstRepeatingChar(string s)
{
    var seen = new HashSet<char>();
    foreach (char c in s)
    {
        if (!seen.Add(c))
            return c;
    }
    return null;
}

// FirstRepeatingChar("swiss") → 's'
// FirstRepeatingChar("program") → null (no repeat)
```

| Question | Answer |
| --- | --- |
| Return index instead of char? | Store `Dictionary<char, int>` or return index when duplicate found |
| Brute force? | Two nested loops — O(n²) |
| Case sensitive? | Yes unless problem says otherwise — `'S'` ≠ `'s'` |

**Interview one-liner:** One pass + hash set — if `Add` returns false, that char is the first repeat.

### Sliding Window

Fixed or variable window over contiguous subarray/substring.

| Type | When | Example |
| --- | --- | --- |
| **Fixed size k** | Max/min in window of size k | Max in window |
| **Variable size** | Longest/shortest satisfying condition | Longest substring without repeat |

```csharp
// Variable window — longest substring without repeating chars
var map = new Dictionary<char, int>();
int left = 0, maxLen = 0;
for (int right = 0; right < s.Length; right++)
{
    if (map.ContainsKey(s[right])) left = Math.Max(left, map[s[right]] + 1);
    map[s[right]] = right;
    maxLen = Math.Max(maxLen, right - left + 1);
}
```

| Question | Answer |
| --- | --- |
| Anagram check? | Sort both O(n log n) or char frequency count O(n) |
| Palindrome? | Two pointers from ends; or reverse half |
| Sliding window vs two pointers? | Window maintains contiguous range; two pointers often on sorted data |

### LeetCode Practice — Sliding Window

| # | Problem | Link |
| --- | --- | --- |
| 3 | Longest Substring Without Repeating Characters | [leetcode.com/problems/longest-substring-without-repeating-characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/) |
| 76 | Minimum Window Substring | [leetcode.com/problems/minimum-window-substring](https://leetcode.com/problems/minimum-window-substring/) |
| 424 | Longest Repeating Character Replacement | [leetcode.com/problems/longest-repeating-character-replacement](https://leetcode.com/problems/longest-repeating-character-replacement/) |
| 904 | Fruit Into Baskets | [leetcode.com/problems/fruit-into-baskets](https://leetcode.com/problems/fruit-into-baskets/) |

**Must-know:** Strings are often immutable — use `StringBuilder` for repeated concatenation in .NET.

---

<a id="topic-4"></a>

## 4. Linked Lists

### Types

| Type | Structure |
| --- | --- |
| Singly linked | Node → next only |
| Doubly linked | Node → prev + next |
| Circular | Last node points to head |

### Complexity

| Operation | Singly | Doubly |
| --- | --- | --- |
| Access by index | O(n) | O(n) |
| Insert at head | O(1) | O(1) |
| Insert at tail (with tail ptr) | O(1) | O(1) |
| Delete node (given pointer) | O(1)* | O(1) |

*Singly needs previous node or copy-next trick for delete.

### Classic Problems

| Problem | Technique |
| --- | --- |
| Reverse linked list | Iterative three-pointer or recursive |
| Detect cycle | Floyd's fast & slow pointers |
| Merge two sorted lists | Dummy head + compare |
| Find middle | Fast moves 2x, slow moves 1x |
| Palindrome list | Find middle, reverse second half, compare |

```csharp
public class ListNode
{
    public int val;
    public ListNode next;
    public ListNode(int val = 0, ListNode next = null) { this.val = val; this.next = next; }
}
```

**Interview one-liner:** Linked lists trade O(1) insert/delete at known position for O(n) random access — master dummy node and fast/slow pointers.

---

<a id="topic-5"></a>

## 5. Stacks & Queues

### Stack — LIFO

| Operation | Time |
| --- | --- |
| Push | O(1) |
| Pop | O(1) |
| Peek | O(1) |

**Use cases:** Parentheses matching, undo, DFS, monotonic stack, expression evaluation.

### Queue — FIFO

| Operation | Time (array impl.) | Time (linked list) |
| --- | --- | --- |
| Enqueue | O(1) amortized | O(1) |
| Dequeue | O(n) naive / O(1) circular | O(1) |

**Use cases:** BFS, task scheduling, buffer, level-order traversal.

### Deque (Double-ended queue)

Insert/delete at both ends — O(1) with proper implementation.

### Monotonic Stack

Maintains increasing or decreasing order — **next greater element**, largest rectangle in histogram.

| Pattern | Stack type | Problem type |
| --- | --- | --- |
| Next greater/smaller | Monotonic decreasing/increasing | Array scanning |
| Valid parentheses | Stack of open chars | Matching pairs |

**Must-know:** `Stack<T>` in .NET; for BFS use `Queue<T>`; monotonic stack solves many O(n) array problems.

---

<a id="topic-6"></a>

## 6. Hash Tables & Hash Sets

### Core Idea

Map **key → value** with average O(1) insert, lookup, delete using hash function + collision handling.

| Collision handling | How |
| --- | --- |
| Chaining | Linked list at each bucket |
| Open addressing | Probe for next empty slot (linear, quadratic, double hashing) |

### .NET Collections

| Type | Use |
| --- | --- |
| `Dictionary<K,V>` | Key-value map |
| `HashSet<T>` | Unique elements, O(1) contains |
| `SortedDictionary` | Ordered keys — O(log n) ops |

### Classic Uses

| Problem | Hash approach |
| --- | --- |
| Two Sum | Store `target - num` → index |
| Frequency count | `dict[char]++` |
| Group anagrams | Key = sorted string or char count |
| LRU Cache | Hash map + doubly linked list |

| Question | Answer |
| --- | --- |
| Hash vs Tree map? | Hash O(1) avg vs Tree O(log n) — tree gives sorted order |
| Worst case hash? | O(n) if all keys collide — mention in interview |
| `GetHashCode` + `Equals`? | Must be consistent for custom keys in .NET |

**Interview one-liner:** Hash map trades space for time — first choice when you need O(1) lookup by key.

---

<a id="topic-7"></a>

## 7. Trees — Binary Tree & BST

### Binary Tree

Each node has at most **two** children.

### Traversals

| Order | Sequence | Use |
| --- | --- | --- |
| Inorder (LNR) | Left → Node → Right | BST gives sorted order |
| Preorder (NLR) | Node → Left → Right | Serialize tree |
| Postorder (LRN) | Left → Right → Node | Delete tree, evaluate expression |
| Level order (BFS) | Level by level | Shortest path in unweighted tree |

### Binary Search Tree (BST)

| Property | Rule |
| --- | --- |
| Left subtree | All values < node |
| Right subtree | All values > node |

| Operation | Average | Worst (skewed) |
| --- | --- | --- |
| Search | O(log n) | O(n) |
| Insert | O(log n) | O(n) |
| Delete | O(log n) | O(n) |

### Classic Problems

| Problem | Technique |
| --- | --- |
| Height / depth | Recursion or BFS |
| Validate BST | Range min/max per node |
| LCA (lowest common ancestor) | Recursion — split at root |
| Diameter | Max left depth + right depth at each node |
| Serialize / deserialize | BFS or preorder with null markers |

**Must-know:** Tree recursion template: process node, recurse left, recurse right; combine results.

---

<a id="topic-8"></a>

## 8. Heaps & Priority Queue

### Heap

Complete binary tree stored in array — **min-heap** (parent ≤ children) or **max-heap**.

| Operation | Time |
| --- | --- |
| Peek min/max | O(1) |
| Insert | O(log n) |
| Extract min/max | O(log n) |
| Build heap | O(n) |

### .NET

`PriorityQueue<TElement, TPriority>` — min-heap by priority (lower = higher priority).

### Use Cases

| Problem | Why heap |
| --- | --- |
| K largest elements | Min-heap of size k |
| Merge k sorted lists | Heap of list heads |
| Median stream | Two heaps (max left, min right) |
| Dijkstra shortest path | Min-priority queue |

| Question | Answer |
| --- | --- |
| Heap vs BST? | Heap only guarantees root min/max; BST fully ordered |
| Top K pattern? | O(n log k) with heap vs O(n log n) full sort |
| `List<T>` as heap? | No — use `PriorityQueue` or implement sift up/down |

**Interview one-liner:** Heap = partial order for fast min/max — ideal for top-K and scheduling.

---

<a id="topic-9"></a>

## 9. Graphs — BFS & DFS

### Representations

| Type | Space | Best for |
| --- | --- | --- |
| Adjacency list | O(V + E) | Sparse graphs — most interviews |
| Adjacency matrix | O(V²) | Dense graphs, O(1) edge lookup |

### BFS — Breadth-First Search

Queue-based; finds **shortest path** in unweighted graph.

```text
Queue ← start
while queue not empty:
  node = dequeue
  for each neighbor:
    if unvisited: mark, enqueue
```

### DFS — Depth-First Search

Stack or recursion; used for cycles, connected components, topological sort.

```text
dfs(node):
  mark visited
  for each neighbor:
    if unvisited: dfs(neighbor)
```

### Classic Problems

| Problem | Algorithm |
| --- | --- |
| Shortest path (unweighted) | BFS |
| Cycle detection (undirected) | DFS with parent |
| Cycle detection (directed) | DFS three-color or topological sort |
| Number of islands | DFS/BFS on grid |
| Topological sort | DFS postorder or Kahn's BFS (in-degree) |
| Dijkstra | BFS + min-heap (non-negative weights) |

| Question | Answer |
| --- | --- |
| BFS vs DFS? | BFS = shortest unweighted path, level order; DFS = deep exploration, backtracking |
| Disconnected graph? | Run BFS/DFS from every unvisited node |
| Grid as graph? | Each cell = node; 4 or 8 neighbors |

**Must-know:** Almost every graph problem starts with: directed? weighted? cyclic? — then pick BFS, DFS, or Dijkstra.

---

<a id="topic-10"></a>

## 10. Sorting Algorithms

### Comparison Table

| Algorithm | Best | Average | Worst | Space | Stable? |
| --- | --- | --- | --- | --- | --- |
| Bubble Sort | O(n) | O(n²) | O(n²) | O(1) | Yes |
| Selection Sort | O(n²) | O(n²) | O(n²) | O(1) | No |
| Insertion Sort | O(n) | O(n²) | O(n²) | O(1) | Yes |
| Merge Sort | O(n log n) | O(n log n) | O(n log n) | O(n) | Yes |
| Quick Sort | O(n log n) | O(n log n) | O(n²) | O(log n) stack | No |
| Heap Sort | O(n log n) | O(n log n) | O(n log n) | O(1) | No |
| Counting Sort | O(n + k) | O(n + k) | O(n + k) | O(k) | Yes |

### When to Use

| Situation | Choice |
| --- | --- |
| General purpose (.NET) | `Array.Sort` — introsort (quick + heap + insert) |
| Need stable sort | Merge sort |
| Limited memory | Heap sort |
| Small integer range | Counting / radix sort |
| Nearly sorted | Insertion sort |

### Quick Sort Pivot

| Strategy | Note |
| --- | --- |
| Random pivot | Avoids worst case on sorted input |
| Median-of-three | Common practical choice |

**Interview one-liner:** Know merge vs quick — merge guarantees O(n log n) and stable; quick usually faster in practice, O(n²) worst case.

---

<a id="topic-11"></a>

## 11. Searching Algorithms

| Algorithm | Requirement | Time |
| --- | --- | --- |
| Linear search | None | O(n) |
| Binary search | Sorted array | O(log n) |
| Ternary search | Unimodal function | O(log n) |
| Interpolation search | Sorted + uniform distribution | O(log log n) avg |

### Binary Search Template

```csharp
int left = 0, right = nums.Length - 1;
while (left <= right)
{
    int mid = left + (right - left) / 2;
    if (nums[mid] == target) return mid;
    if (nums[mid] < target) left = mid + 1;
    else right = mid - 1;
}
return -1;
```

### Binary Search Variants

| Variant | Condition |
| --- | --- |
| First occurrence | `nums[mid] == target` → right = mid - 1, keep answer |
| Last occurrence | `nums[mid] == target` → left = mid + 1, keep answer |
| Search on answer | Monotonic predicate — min capacity, max speed |

| Question | Answer |
| --- | --- |
| `mid = (left + right) / 2` overflow? | Use `left + (right - left) / 2` |
| Binary search on unsorted? | Only if answer space is monotonic (binary search on answer) |
| `List.BinarySearch` in .NET? | Requires sorted list — returns index or bitwise complement |

---

<a id="topic-12"></a>

## 12. Recursion & Backtracking

### Recursion Anatomy

| Part | Purpose |
| --- | --- |
| **Base case** | Stop condition |
| **Recursive case** | Smaller subproblem |
| **Trust** | Assume recursive call works |

### Recursion vs Iteration

| Aspect | Recursion | Iteration |
| --- | --- | --- |
| Stack | Call stack — O(depth) space | Explicit stack or O(1) |
| Readability | Natural for trees, divide & conquer | Loops for linear work |

### Backtracking Template

```text
function backtrack(state):
  if goal reached: record solution; return
  for each choice:
    if valid(choice):
      apply choice
      backtrack(updated state)
      undo choice  // backtrack
```

### Classic Problems

| Problem | Approach |
| --- | --- |
| Subsets / combinations | Include/exclude each element |
| Permutations | Swap or used[] array |
| N-Queens | Place row by row, check columns/diagonals |
| Sudoku | Fill cell by cell, prune invalid |
| Word search | DFS on grid + backtrack |

| Question | Answer |
| --- | --- |
| Tail recursion? | Recursive call is last operation — can optimize to loop |
| Memoization vs tabulation? | Top-down cache vs bottom-up table — both DP |
| Pruning? | Skip branches early when invalid — critical for backtracking speed |

**Interview one-liner:** Backtracking = DFS + undo; always define base case, choices, and prune invalid paths early.

---

<a id="topic-13"></a>

## 13. Dynamic Programming

### When to Use DP

1. **Optimal substructure** — optimal solution built from optimal sub-solutions  
2. **Overlapping subproblems** — same subproblem solved repeatedly

### Approaches

| Approach | Style | Space tip |
| --- | --- | --- |
| Top-down (memoization) | Recursion + cache | `Dictionary` or array |
| Bottom-up (tabulation) | Fill table iteratively | Often reduce to 1–2 rows |

### Classic Problems

| Problem | State | Transition |
| --- | --- | --- |
| Fibonacci | `dp[i]` | `dp[i] = dp[i-1] + dp[i-2]` |
| Climbing stairs | `dp[i]` ways to step i | `dp[i] = dp[i-1] + dp[i-2]` |
| 0/1 Knapsack | `dp[i][w]` | Take or skip item i |
| LCS | `dp[i][j]` | Match or skip chars |
| Coin change | `dp[amount]` | Min coins for amount |
| Longest increasing subsequence | `dp[i]` or patience sorting | O(n log n) with binary search |

### DP Patterns

| Pattern | Signal |
| --- | --- |
| 1D DP | Linear decision at each index |
| 2D DP | Two sequences or grid path |
| Interval DP | Range [i, j] — matrix chain, burst balloons |
| State machine DP | Finite states — buy/sell stock with cooldown |

| Question | Answer |
| --- | --- |
| DP vs greedy? | Greedy needs greedy choice property; DP when need to compare multiple choices |
| Space optimize 1D? | If only need previous row → O(n) instead of O(n²) |
| How to recognize DP? | Ask: can I define state? recurrence? overlapping subproblems? |

**Interview one-liner:** Define state, write recurrence, set base cases, then memoize or tabulate.

---

<a id="topic-14"></a>

## 14. Greedy Algorithms

### Greedy Strategy

At each step, pick the **locally optimal** choice hoping for global optimum.

**Requires:** Greedy choice property + optimal substructure (not all problems fit).

### Classic Problems

| Problem | Greedy choice |
| --- | --- |
| Activity selection | Pick earliest finishing compatible activity |
| Huffman coding | Merge two smallest frequencies |
| Fractional knapsack | Take max value/weight ratio first |
| Minimum platforms | Sort arrivals/departures, sweep line |
| Jump game | Track farthest reachable index |
| Merge intervals | Sort by start, merge overlapping |

| Greedy works? | Problem |
| --- | --- |
| Yes | Activity selection, Huffman, fractional knapsack |
| No (need DP) | 0/1 knapsack, coin change with arbitrary denominations |

| Question | Answer |
| --- | --- |
| Prove greedy? | Exchange argument or stay-ahead — mention if asked |
| Greedy vs DP? | Greedy = one choice per step; DP = explore and compare subproblems |
| Interval problems? | Sort by start or end first — pattern for many greedy solutions |

---

<a id="topic-15"></a>

## 15. Binary Search & Divide & Conquer

### Divide & Conquer

1. **Divide** — split problem into subproblems  
2. **Conquer** — solve subproblems recursively  
3. **Combine** — merge results

| Algorithm | Divide step | Combine | Complexity |
| --- | --- | --- | --- |
| Merge sort | Split array in half | Merge sorted halves | O(n log n) |
| Quick sort | Partition around pivot | Already in place | O(n log n) avg |
| Binary search | Half the range | None | O(log n) |
| Closest pair | Split by x, check strip | Min of three regions | O(n log n) |

### Master Theorem (sketch)

For `T(n) = aT(n/b) + O(n^d)`:

| Condition | Result |
| --- | --- |
| a > b^d | O(n^log_b(a)) |
| a = b^d | O(n^d log n) |
| a < b^d | O(n^d) |

### Binary Search on Answer

When answer lies in a range and `feasible(mid)` is monotonic:

```text
low = min, high = max
while low < high:
  mid = (low + high) / 2
  if feasible(mid): high = mid   // or low = mid + 1
  else: low = mid + 1
```

**Examples:** Koko eating bananas, minimum ship capacity, max minimum distance.

**Interview one-liner:** If you see "minimize the maximum" or "maximize the minimum" — think binary search on answer space.

---

<a id="topic-16"></a>

## 16. Interview Patterns & Problem-Solving Framework

### 14 Common Patterns

| # | Pattern | Example problems |
| --- | --- | --- |
| 1 | Two pointers | Two sum II, container with most water |
| 2 | Sliding window | Longest substring, min window substring |
| 3 | Fast & slow pointers | Linked list cycle, middle node |
| 4 | Merge intervals | Overlapping intervals, meeting rooms |
| 5 | Cyclic sort | Missing number, find duplicate |
| 6 | In-place reversal | Reverse linked list, reverse subarray |
| 7 | BFS | Level order, shortest path |
| 8 | DFS | Islands, path sum, permutations |
| 9 | Two heaps | Find median from stream |
| 10 | Subsets / backtracking | Combinations, N-queens |
| 11 | Modified binary search | First/last position, search rotated array |
| 12 | Top K elements | K largest, K frequent |
| 13 | K-way merge | Merge k sorted lists |
| 14 | Topological sort | Course schedule, alien dictionary |

### Problem-Solving Steps (Interview)

| Step | Action |
| --- | --- |
| 1 | **Clarify** — input size, edge cases, duplicates, sorted? |
| 2 | **Examples** — walk through 2–3 cases including edge |
| 3 | **Brute force** — state complexity first |
| 4 | **Optimize** — identify pattern, data structure |
| 5 | **Code** — clean names, handle edge cases |
| 6 | **Test** — dry run with your examples |
| 7 | **Analyze** — time and space complexity |

### Complexity Targets by Input Size

| n | Roughly feasible |
| --- | --- |
| n ≤ 20 | O(2ⁿ) — backtracking |
| n ≤ 500 | O(n³) |
| n ≤ 5,000 | O(n²) |
| n ≤ 10⁵ | O(n log n) |
| n ≤ 10⁶ | O(n) or O(n log n) tight |

### Practice Platforms

| Platform | Best for |
| --- | --- |
| LeetCode | Interview-style tagged problems |
| HackerRank | Basics and timed practice |
| NeetCode / Blind 75 | Curated pattern-based lists |

**Suggested learning order:** Complexity → arrays/two pointers → strings/window → linked list → stack/queue → hash → trees → heap → graphs → sorting/search → recursion → DP → greedy → patterns.

**One-liner:** Recognize the pattern first, then pick the data structure — speed in interviews comes from pattern matching, not memorizing every solution.

---

<a id="interview-quick-answers"></a>

## Interview Quick Answers

| Topic | Key Points |
| --- | --- |
| Big-O | Worst-case growth rate; state time + space after solution |
| Array vs linked list | Array O(1) access; linked list O(1) insert at head |
| Stack vs queue | LIFO vs FIFO — DFS vs BFS |
| Hash map | O(1) avg lookup — two sum, frequency |
| BST | Left < root < right; inorder = sorted |
| BFS vs DFS | BFS shortest unweighted path; DFS cycles, components |
| Merge vs quick sort | Merge stable O(n log n) always; quick in-place, O(n²) worst |
| Binary search | Sorted input or monotonic answer space |
| DP | Optimal substructure + overlapping subproblems |
| Greedy | Local optimal each step — prove or know counterexamples |
| Two pointers | Sorted array pairs, in-place partition |
| Sliding window | Contiguous subarray/substring optimization |
| First repeating char | One pass + `HashSet` — e.g. `"swiss"` → `'s'` |
| Top K | Min-heap of size k — O(n log k) |
| Backtracking | Choose → explore → undo |

### What is Time Complexity?

> **One-liner:** How runtime grows with input size `n` — expressed in Big-O for worst case.

### Array vs Linked List?

| Point | Array | Linked List |
| --- | --- | --- |
| Access | O(1) by index | O(n) |
| Insert at head | O(n) shift | O(1) |
| Memory | Contiguous cache-friendly | Extra pointer per node |

> **One-liner:** Arrays for random access; linked lists for frequent insert/delete at ends or unknown size.

### When to Use Hash Map?

| Signal | Example |
| --- | --- |
| Need O(1) lookup by value/key | Two sum, anagram groups |
| Count frequency | Char count, word count |
| Track seen elements | Duplicate detection |

> **One-liner:** When brute force is O(n²) and you need "have I seen this before?" — use a hash map.

### BFS vs DFS?

| | BFS | DFS |
| --- | --- | --- |
| Structure | Queue | Stack / recursion |
| Path | Shortest in unweighted graph | Deep exploration |
| Memory | O(width) can be large | O(height) |

> **One-liner:** BFS for shortest path and levels; DFS for exhaustive search and backtracking.

### How to Approach a Coding Interview?

1. Clarify constraints and edge cases  
2. Start with brute force + complexity  
3. Optimize using a known pattern  
4. Code clearly, test with examples  
5. State final time and space complexity  

> **One-liner:** Think out loud, collaborate, and prioritize correct brute force over silent wrong optimal code.
