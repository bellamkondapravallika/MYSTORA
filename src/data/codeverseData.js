/**
 * MYSTORA — CODEVERSE CODING CHALLENGES (PART 3)
 * Exactly 50 comprehensive algorithm & data structure challenges:
 * 15 Beginner, 20 Intermediate, 15 Advanced across all 13 core computer science topics.
 * Includes starter code and solutions in JavaScript, Python, and Java,
 * test cases for in-browser evaluation, hints, and complexity analysis.
 */

export const CODEVERSE_TOPICS = [
  "All",
  "Arrays & Strings",
  "Two Pointers & Sliding Window",
  "Hash Maps & Sets",
  "Linked Lists",
  "Stacks & Queues",
  "Recursion & Backtracking",
  "Graphs (BFS, DFS)",
  "Dynamic Programming",
  "Greedy Algorithms",
  "Binary Search",
  "Bit Manipulation",
  "Math & Number Theory"
];

export const CODEVERSE_DIFFICULTIES = ["All", "Beginner", "Intermediate", "Advanced"];

export const CODEVERSE_EXERCISES = [
  {
    "id": "code-01",
    "title": "Two Sum Target Finder",
    "difficulty": "Beginner",
    "topic": "Arrays & Strings",
    "category": "Hash Maps & Sets",
    "description": "Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`. You may assume that each input would have exactly one solution, and you may not use the same element twice.",
    "constraints": "2 <= nums.length <= 10^4\n-10^9 <= nums[i] <= 10^9\n-10^9 <= target <= 10^9\nExactly one valid answer exists.",
    "examples": [
      {
        "input": "nums = [2, 7, 11, 15], target = 9",
        "output": "[0, 1]",
        "explanation": "Because nums[0] + nums[1] == 9, we return [0, 1]."
      },
      {
        "input": "nums = [3, 2, 4], target = 6",
        "output": "[1, 2]",
        "explanation": "nums[1] + nums[2] == 6, we return [1, 2]."
      }
    ],
    "fnName": "twoSum",
    "starterCode": "function twoSum(nums, target) {\n  // Write your code here\n  return [];\n}",
    "solutionCode": "function twoSum(nums, target) {\n  const map = new Map();\n  for (let i = 0; i < nums.length; i++) {\n    const complement = target - nums[i];\n    if (map.has(complement)) {\n      return [map.get(complement), i];\n    }\n    map.set(nums[i], i);\n  }\n  return [];\n}",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "hints": [
      "A brute force approach checks every pair (i, j) in O(N^2) time.",
      "Can you check if the complement (target - nums[i]) exists in O(1) time?",
      "Use a Hash Map to store each number and its index as you iterate through the array."
    ],
    "testCases": [
      {
        "input": [
          [
            2,
            7,
            11,
            15
          ],
          9
        ],
        "expected": [
          0,
          1
        ]
      },
      {
        "input": [
          [
            3,
            2,
            4
          ],
          6
        ],
        "expected": [
          1,
          2
        ]
      },
      {
        "input": [
          [
            3,
            3
          ],
          6
        ],
        "expected": [
          0,
          1
        ]
      }
    ],
    "starterCodes": {
      "javascript": "function twoSum(nums, target) {\n  // Write your code here\n  return [];\n}",
      "python": "def two_sum(nums: list[int], target: int) -> list[int]:\n    # Write your code here\n    return []",
      "java": "class Solution {\n    public int[] twoSum(int[] nums, int target) {\n        // Write your code here\n        return new int[]{};\n    }\n}"
    },
    "solutionCodes": {
      "javascript": "function twoSum(nums, target) {\n  const map = new Map();\n  for (let i = 0; i < nums.length; i++) {\n    const complement = target - nums[i];\n    if (map.has(complement)) {\n      return [map.get(complement), i];\n    }\n    map.set(nums[i], i);\n  }\n  return [];\n}",
      "python": "def two_sum(nums: list[int], target: int) -> list[int]:\n    seen = {}\n    for i, num in enumerate(nums):\n        diff = target - num\n        if diff in seen:\n            return [seen[diff], i]\n        seen[num] = i\n    return []",
      "java": "class Solution {\n    public int[] twoSum(int[] nums, int target) {\n        Map<Integer, Integer> map = new HashMap<>();\n        for (int i = 0; i < nums.length; i++) {\n            int diff = target - nums[i];\n            if (map.containsKey(diff)) {\n                return new int[]{map.get(diff), i};\n            }\n            map.put(nums[i], i);\n        }\n        return new int[]{};\n    }\n}"
    },
    "solved": false,
    "bookmarked": false
  },
  {
    "id": "code-02",
    "title": "Valid Palindrome Validator",
    "difficulty": "Beginner",
    "topic": "Two Pointers & Sliding Window",
    "category": "Arrays & Strings",
    "description": "A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Given a string `s`, return `true` if it is a palindrome, or `false` otherwise.",
    "constraints": "1 <= s.length <= 2 * 10^5\ns consists only of printable ASCII characters.",
    "examples": [
      {
        "input": "s = \"A man, a plan, a canal: Panama\"",
        "output": "true",
        "explanation": "\"amanaplanacanalpanama\" is a palindrome."
      },
      {
        "input": "s = \"race a car\"",
        "output": "false",
        "explanation": "\"raceacar\" is not a palindrome."
      }
    ],
    "fnName": "isPalindrome",
    "starterCode": "function isPalindrome(s) {\n  // Write your code here\n  return false;\n}",
    "solutionCode": "function isPalindrome(s) {\n  const clean = s.toLowerCase().replace(/[^a-z0-9]/g, '');\n  let left = 0, right = clean.length - 1;\n  while (left < right) {\n    if (clean[left] !== clean[right]) return false;\n    left++;\n    right--;\n  }\n  return true;\n}",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)",
    "hints": [
      "Filter out characters that are not letters or numbers, and convert to lowercase.",
      "Use two pointers: one at the beginning of the string and one at the end.",
      "Move inward while comparing characters. If any mismatch occurs, it's not a palindrome."
    ],
    "testCases": [
      {
        "input": [
          "A man, a plan, a canal: Panama"
        ],
        "expected": true
      },
      {
        "input": [
          "race a car"
        ],
        "expected": false
      },
      {
        "input": [
          " "
        ],
        "expected": true
      }
    ],
    "starterCodes": {
      "javascript": "function isPalindrome(s) {\n  // Write your code here\n  return false;\n}",
      "python": "def is_palindrome(s: str) -> bool:\n    # Write your code here\n    return False",
      "java": "class Solution {\n    public boolean isPalindrome(String s) {\n        // Write your code here\n        return false;\n    }\n}"
    },
    "solutionCodes": {
      "javascript": "function isPalindrome(s) {\n  const clean = s.toLowerCase().replace(/[^a-z0-9]/g, '');\n  let left = 0, right = clean.length - 1;\n  while (left < right) {\n    if (clean[left] !== clean[right]) return false;\n    left++;\n    right--;\n  }\n  return true;\n}",
      "python": "def is_palindrome(s: str) -> bool:\n    clean = [c.lower() for c in s if c.isalnum()]\n    return clean == clean[::-1]",
      "java": "class Solution {\n    public boolean isPalindrome(String s) {\n        int l = 0, r = s.length() - 1;\n        while (l < r) {\n            while (l < r && !Character.isLetterOrDigit(s.charAt(l))) l++;\n            while (l < r && !Character.isLetterOrDigit(s.charAt(r))) r--;\n            if (Character.toLowerCase(s.charAt(l)) != Character.toLowerCase(s.charAt(r))) return false;\n            l++; r--;\n        }\n        return true;\n    }\n}"
    },
    "solved": false,
    "bookmarked": false
  },
  {
    "id": "code-03",
    "title": "Reverse String In-Place",
    "difficulty": "Beginner",
    "topic": "Arrays & Strings",
    "category": "Two Pointers & Sliding Window",
    "description": "Write a function that reverses an array of characters in-place. You must do this by modifying the input array in-place with O(1) extra memory.",
    "constraints": "1 <= s.length <= 10^5\ns[i] is a printable ASCII character.",
    "examples": [
      {
        "input": "s = [\"h\",\"e\",\"l\",\"l\",\"o\"]",
        "output": "[\"o\",\"l\",\"l\",\"e\",\"h\"]",
        "explanation": "Reversed in-place."
      },
      {
        "input": "s = [\"H\",\"a\",\"n\",\"n\",\"a\",\"h\"]",
        "output": "[\"h\",\"a\",\"n\",\"n\",\"a\",\"H\"]",
        "explanation": "Reversed in-place."
      }
    ],
    "fnName": "reverseString",
    "starterCode": "function reverseString(s) {\n  // Modify s in-place and return s\n  return s;\n}",
    "solutionCode": "function reverseString(s) {\n  let left = 0, right = s.length - 1;\n  while (left < right) {\n    const temp = s[left];\n    s[left] = s[right];\n    s[right] = temp;\n    left++;\n    right--;\n  }\n  return s;\n}",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)",
    "hints": [
      "Use two pointers starting at opposite ends of the array.",
      "Swap the elements at left and right indices.",
      "Increment left and decrement right until they meet in the middle."
    ],
    "testCases": [
      {
        "input": [
          [
            "h",
            "e",
            "l",
            "l",
            "o"
          ]
        ],
        "expected": [
          "o",
          "l",
          "l",
          "e",
          "h"
        ]
      },
      {
        "input": [
          [
            "H",
            "a",
            "n",
            "n",
            "a",
            "h"
          ]
        ],
        "expected": [
          "h",
          "a",
          "n",
          "n",
          "a",
          "H"
        ]
      },
      {
        "input": [
          [
            "a"
          ]
        ],
        "expected": [
          "a"
        ]
      }
    ],
    "starterCodes": {
      "javascript": "function reverseString(s) {\n  // Modify s in-place and return s\n  return s;\n}",
      "python": "def reverse_string(s: list[str]) -> list[str]:\n    # Modify s in-place\n    return s",
      "java": "class Solution {\n    public void reverseString(char[] s) {\n        // Modify s in-place\n    }\n}"
    },
    "solutionCodes": {
      "javascript": "function reverseString(s) {\n  let left = 0, right = s.length - 1;\n  while (left < right) {\n    const temp = s[left];\n    s[left] = s[right];\n    s[right] = temp;\n    left++;\n    right--;\n  }\n  return s;\n}",
      "python": "def reverse_string(s: list[str]) -> list[str]:\n    left, right = 0, len(s) - 1\n    while left < right:\n        s[left], s[right] = s[right], s[left]\n        left += 1\n        right -= 1\n    return s",
      "java": "class Solution {\n    public void reverseString(char[] s) {\n        int left = 0, right = s.length - 1;\n        while (left < right) {\n            char tmp = s[left];\n            s[left++] = s[right];\n            s[right--] = tmp;\n        }\n    }\n}"
    },
    "solved": false,
    "bookmarked": false
  },
  {
    "id": "code-04",
    "title": "Maximum Subarray (Kadane's Algorithm)",
    "difficulty": "Beginner",
    "topic": "Dynamic Programming",
    "category": "Arrays & Strings",
    "description": "Given an integer array `nums`, find the subarray with the largest sum, and return its sum.",
    "constraints": "1 <= nums.length <= 10^5\n-10^4 <= nums[i] <= 10^4",
    "examples": [
      {
        "input": "nums = [-2,1,-3,4,-1,2,1,-5,4]",
        "output": "6",
        "explanation": "The subarray [4,-1,2,1] has the largest sum 6."
      },
      {
        "input": "nums = [1]",
        "output": "1",
        "explanation": "Single element array."
      },
      {
        "input": "nums = [5,4,-1,7,8]",
        "output": "23",
        "explanation": "The subarray [5,4,-1,7,8] has sum 23."
      }
    ],
    "fnName": "maxSubArray",
    "starterCode": "function maxSubArray(nums) {\n  // Write your code here\n  return 0;\n}",
    "solutionCode": "function maxSubArray(nums) {\n  let maxSoFar = nums[0];\n  let currentMax = nums[0];\n  for (let i = 1; i < nums.length; i++) {\n    currentMax = Math.max(nums[i], currentMax + nums[i]);\n    maxSoFar = Math.max(maxSoFar, currentMax);\n  }\n  return maxSoFar;\n}",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)",
    "hints": [
      "If your current running sum drops below the current element itself, starting a new subarray is better.",
      "Kadane's algorithm keeps track of `currentMax = max(nums[i], currentMax + nums[i])`.",
      "Update `maxSoFar` at every step."
    ],
    "testCases": [
      {
        "input": [
          [
            -2,
            1,
            -3,
            4,
            -1,
            2,
            1,
            -5,
            4
          ]
        ],
        "expected": 6
      },
      {
        "input": [
          [
            1
          ]
        ],
        "expected": 1
      },
      {
        "input": [
          [
            5,
            4,
            -1,
            7,
            8
          ]
        ],
        "expected": 23
      }
    ],
    "starterCodes": {
      "javascript": "function maxSubArray(nums) {\n  // Write your code here\n  return 0;\n}",
      "python": "def max_sub_array(nums: list[int]) -> int:\n    # Write your code here\n    return 0",
      "java": "class Solution {\n    public int maxSubArray(int[] nums) {\n        // Write your code here\n        return 0;\n    }\n}"
    },
    "solutionCodes": {
      "javascript": "function maxSubArray(nums) {\n  let maxSoFar = nums[0];\n  let currentMax = nums[0];\n  for (let i = 1; i < nums.length; i++) {\n    currentMax = Math.max(nums[i], currentMax + nums[i]);\n    maxSoFar = Math.max(maxSoFar, currentMax);\n  }\n  return maxSoFar;\n}",
      "python": "def max_sub_array(nums: list[int]) -> int:\n    max_so_far = current_max = nums[0]\n    for x in nums[1:]:\n        current_max = max(x, current_max + x)\n        max_so_far = max(max_so_far, current_max)\n    return max_so_far",
      "java": "class Solution {\n    public int maxSubArray(int[] nums) {\n        int maxSoFar = nums[0], currentMax = nums[0];\n        for (int i = 1; i < nums.length; i++) {\n            currentMax = Math.max(nums[i], currentMax + nums[i]);\n            maxSoFar = Math.max(maxSoFar, currentMax);\n        }\n        return maxSoFar;\n    }\n}"
    },
    "solved": false,
    "bookmarked": false
  },
  {
    "id": "code-05",
    "title": "Contains Duplicate",
    "difficulty": "Beginner",
    "topic": "Hash Maps & Sets",
    "category": "Arrays & Strings",
    "description": "Given an integer array `nums`, return `true` if any value appears at least twice in the array, and return `false` if every element is distinct.",
    "constraints": "1 <= nums.length <= 10^5\n-10^9 <= nums[i] <= 10^9",
    "examples": [
      {
        "input": "nums = [1, 2, 3, 1]",
        "output": "true",
        "explanation": "1 appears twice."
      },
      {
        "input": "nums = [1, 2, 3, 4]",
        "output": "false",
        "explanation": "All elements are distinct."
      }
    ],
    "fnName": "containsDuplicate",
    "starterCode": "function containsDuplicate(nums) {\n  // Return true if duplicate exists\n  return false;\n}",
    "solutionCode": "function containsDuplicate(nums) {\n  const seen = new Set();\n  for (const n of nums) {\n    if (seen.has(n)) return true;\n    seen.add(n);\n  }\n  return false;\n}",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "hints": [
      "A Set data structure stores unique elements.",
      "Compare the length of the original array with the size of a Set constructed from the array.",
      "Or iterate through and check if `set.has(num)` before inserting."
    ],
    "testCases": [
      {
        "input": [
          [
            1,
            2,
            3,
            1
          ]
        ],
        "expected": true
      },
      {
        "input": [
          [
            1,
            2,
            3,
            4
          ]
        ],
        "expected": false
      },
      {
        "input": [
          [
            1,
            1,
            1,
            3,
            3,
            4,
            3,
            2,
            4,
            2
          ]
        ],
        "expected": true
      }
    ],
    "starterCodes": {
      "javascript": "function containsDuplicate(nums) {\n  // Return true if duplicate exists\n  return false;\n}",
      "python": "def contains_duplicate(nums: list[int]) -> bool:\n    # Return True if duplicate exists\n    return False",
      "java": "class Solution {\n    public boolean containsDuplicate(int[] nums) {\n        // Write your code here\n        return false;\n    }\n}"
    },
    "solutionCodes": {
      "javascript": "function containsDuplicate(nums) {\n  const seen = new Set();\n  for (const n of nums) {\n    if (seen.has(n)) return true;\n    seen.add(n);\n  }\n  return false;\n}",
      "python": "def contains_duplicate(nums: list[int]) -> bool:\n    return len(nums) != len(set(nums))",
      "java": "class Solution {\n    public boolean containsDuplicate(int[] nums) {\n        Set<Integer> set = new HashSet<>();\n        for (int n : nums) {\n            if (!set.add(n)) return true;\n        }\n        return false;\n    }\n}"
    },
    "solved": false,
    "bookmarked": false
  },
  {
    "id": "code-06",
    "title": "Valid Anagram",
    "difficulty": "Beginner",
    "topic": "Hash Maps & Sets",
    "category": "Arrays & Strings",
    "description": "Given two strings `s` and `t`, return `true` if `t` is an anagram of `s`, and `false` otherwise. An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.",
    "constraints": "1 <= s.length, t.length <= 5 * 10^4\ns and t consist of lowercase English letters.",
    "examples": [
      {
        "input": "s = \"anagram\", t = \"nagaram\"",
        "output": "true",
        "explanation": "Both have identical character frequencies."
      },
      {
        "input": "s = \"rat\", t = \"car\"",
        "output": "false",
        "explanation": "'c' is missing in s."
      }
    ],
    "fnName": "isAnagram",
    "starterCode": "function isAnagram(s, t) {\n  // Write your code here\n  return false;\n}",
    "solutionCode": "function isAnagram(s, t) {\n  if (s.length !== t.length) return false;\n  const count = {};\n  for (let i = 0; i < s.length; i++) {\n    count[s[i]] = (count[s[i]] || 0) + 1;\n    count[t[i]] = (count[t[i]] || 0) - 1;\n  }\n  return Object.values(count).every(val => val === 0);\n}",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1) (26 lowercase English letters)",
    "hints": [
      "If lengths are different, they cannot be anagrams.",
      "Count character frequencies in `s` and subtract frequencies for characters in `t`.",
      "All character counts must return to zero."
    ],
    "testCases": [
      {
        "input": [
          "anagram",
          "nagaram"
        ],
        "expected": true
      },
      {
        "input": [
          "rat",
          "car"
        ],
        "expected": false
      },
      {
        "input": [
          "a",
          "ab"
        ],
        "expected": false
      }
    ],
    "starterCodes": {
      "javascript": "function isAnagram(s, t) {\n  // Write your code here\n  return false;\n}",
      "python": "def is_anagram(s: str, t: str) -> bool:\n    # Write your code here\n    return False",
      "java": "class Solution {\n    public boolean isAnagram(String s, String t) {\n        // Write your code here\n        return false;\n    }\n}"
    },
    "solutionCodes": {
      "javascript": "function isAnagram(s, t) {\n  if (s.length !== t.length) return false;\n  const count = {};\n  for (let i = 0; i < s.length; i++) {\n    count[s[i]] = (count[s[i]] || 0) + 1;\n    count[t[i]] = (count[t[i]] || 0) - 1;\n  }\n  return Object.values(count).every(val => val === 0);\n}",
      "python": "def is_anagram(s: str, t: str) -> bool:\n    if len(s) != len(t): return False\n    from collections import Counter\n    return Counter(s) == Counter(t)",
      "java": "class Solution {\n    public boolean isAnagram(String s, String t) {\n        if (s.length() != t.length()) return false;\n        int[] count = new int[26];\n        for (int i = 0; i < s.length(); i++) {\n            count[s.charAt(i) - 'a']++;\n            count[t.charAt(i) - 'a']--;\n        }\n        for (int c : count) if (c != 0) return false;\n        return true;\n    }\n}"
    },
    "solved": false,
    "bookmarked": false
  },
  {
    "id": "code-07",
    "title": "Merge Two Sorted Arrays",
    "difficulty": "Beginner",
    "topic": "Arrays & Strings",
    "category": "Two Pointers & Sliding Window",
    "description": "Given two sorted arrays `nums1` and `nums2`, merge `nums2` into `nums1` as one sorted array. Return the merged sorted array.",
    "constraints": "nums1 and nums2 are sorted in non-decreasing order.\n0 <= nums1.length, nums2.length <= 10^4",
    "examples": [
      {
        "input": "nums1 = [1, 2, 4], nums2 = [1, 3, 4]",
        "output": "[1, 1, 2, 3, 4, 4]",
        "explanation": "Merged in sorted order."
      },
      {
        "input": "nums1 = [], nums2 = [0]",
        "output": "[0]",
        "explanation": "Single element from nums2."
      }
    ],
    "fnName": "mergeSortedArrays",
    "starterCode": "function mergeSortedArrays(nums1, nums2) {\n  // Return merged sorted array\n  return [];\n}",
    "solutionCode": "function mergeSortedArrays(nums1, nums2) {\n  const res = [];\n  let i = 0, j = 0;\n  while (i < nums1.length && j < nums2.length) {\n    if (nums1[i] <= nums2[j]) res.push(nums1[i++]);\n    else res.push(nums2[j++]);\n  }\n  while (i < nums1.length) res.push(nums1[i++]);\n  while (j < nums2.length) res.push(nums2[j++]);\n  return res;\n}",
    "timeComplexity": "O(N + M)",
    "spaceComplexity": "O(N + M)",
    "hints": [
      "Use two pointers, one for nums1 and one for nums2.",
      "At each step, compare the current elements of both arrays and take the smaller one.",
      "Append remaining elements from whichever array still has items."
    ],
    "testCases": [
      {
        "input": [
          [
            1,
            2,
            4
          ],
          [
            1,
            3,
            4
          ]
        ],
        "expected": [
          1,
          1,
          2,
          3,
          4,
          4
        ]
      },
      {
        "input": [
          [],
          [
            0
          ]
        ],
        "expected": [
          0
        ]
      },
      {
        "input": [
          [
            2,
            5,
            8
          ],
          [
            1,
            3,
            7
          ]
        ],
        "expected": [
          1,
          2,
          3,
          5,
          7,
          8
        ]
      }
    ],
    "starterCodes": {
      "javascript": "function mergeSortedArrays(nums1, nums2) {\n  // Return merged sorted array\n  return [];\n}",
      "python": "def merge_sorted_arrays(nums1: list[int], nums2: list[int]) -> list[int]:\n    # Return merged sorted array\n    return []",
      "java": "class Solution {\n    public int[] mergeSortedArrays(int[] nums1, int[] nums2) {\n        // Write your code here\n        return new int[]{};\n    }\n}"
    },
    "solutionCodes": {
      "javascript": "function mergeSortedArrays(nums1, nums2) {\n  const res = [];\n  let i = 0, j = 0;\n  while (i < nums1.length && j < nums2.length) {\n    if (nums1[i] <= nums2[j]) res.push(nums1[i++]);\n    else res.push(nums2[j++]);\n  }\n  while (i < nums1.length) res.push(nums1[i++]);\n  while (j < nums2.length) res.push(nums2[j++]);\n  return res;\n}",
      "python": "def merge_sorted_arrays(nums1: list[int], nums2: list[int]) -> list[int]:\n    res = []\n    i = j = 0\n    while i < len(nums1) and j < len(nums2):\n        if nums1[i] <= nums2[j]:\n            res.append(nums1[i]); i += 1\n        else:\n            res.append(nums2[j]); j += 1\n    res.extend(nums1[i:])\n    res.extend(nums2[j:])\n    return res",
      "java": "class Solution {\n    public int[] mergeSortedArrays(int[] nums1, int[] nums2) {\n        int[] res = new int[nums1.length + nums2.length];\n        int i = 0, j = 0, k = 0;\n        while (i < nums1.length && j < nums2.length) {\n            if (nums1[i] <= nums2[j]) res[k++] = nums1[i++];\n            else res[k++] = nums2[j++];\n        }\n        while (i < nums1.length) res[k++] = nums1[i++];\n        while (j < nums2.length) res[k++] = nums2[j++];\n        return res;\n    }\n}"
    },
    "solved": false,
    "bookmarked": false
  },
  {
    "id": "code-08",
    "title": "Valid Parentheses",
    "difficulty": "Beginner",
    "topic": "Stacks & Queues",
    "category": "Data Structures",
    "description": "Given a string `s` containing just the characters `'('`, `')'`, `'{'`, `'}'`, `'['` and `']'`, determine if the input string is valid. Open brackets must be closed by the same type of brackets, and in the correct order.",
    "constraints": "1 <= s.length <= 10^4\ns consists of parentheses only '()[]{}'.",
    "examples": [
      {
        "input": "s = \"()\"",
        "output": "true",
        "explanation": "Valid pair."
      },
      {
        "input": "s = \"()[]{}\"",
        "output": "true",
        "explanation": "All pairs properly closed."
      },
      {
        "input": "s = \"(]\"",
        "output": "false",
        "explanation": "Mismatched closing bracket."
      }
    ],
    "fnName": "isValid",
    "starterCode": "function isValid(s) {\n  // Write your code here\n  return false;\n}",
    "solutionCode": "function isValid(s) {\n  const stack = [];\n  const pairs = { ')': '(', '}': '{', ']': '[' };\n  for (const char of s) {\n    if (char in pairs) {\n      if (stack.pop() !== pairs[char]) return false;\n    } else {\n      stack.push(char);\n    }\n  }\n  return stack.length === 0;\n}",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "hints": [
      "Use a Stack (LIFO: Last In, First Out).",
      "When encountering an opening bracket, push it to the stack.",
      "When encountering a closing bracket, check if it matches the top of the stack."
    ],
    "testCases": [
      {
        "input": [
          "()"
        ],
        "expected": true
      },
      {
        "input": [
          "()[]{}"
        ],
        "expected": true
      },
      {
        "input": [
          "(]"
        ],
        "expected": false
      }
    ],
    "starterCodes": {
      "javascript": "function isValid(s) {\n  // Write your code here\n  return false;\n}",
      "python": "def is_valid(s: str) -> bool:\n    # Write your code here\n    return False",
      "java": "class Solution {\n    public boolean isValid(String s) {\n        // Write your code here\n        return false;\n    }\n}"
    },
    "solutionCodes": {
      "javascript": "function isValid(s) {\n  const stack = [];\n  const pairs = { ')': '(', '}': '{', ']': '[' };\n  for (const char of s) {\n    if (char in pairs) {\n      if (stack.pop() !== pairs[char]) return false;\n    } else {\n      stack.push(char);\n    }\n  }\n  return stack.length === 0;\n}",
      "python": "def is_valid(s: str) -> bool:\n    stack = []\n    pairs = {')': '(', '}': '{', ']': '['}\n    for c in s:\n        if c in pairs:\n            if not stack or stack.pop() != pairs[c]:\n                return False\n        else:\n            stack.append(c)\n    return not stack",
      "java": "class Solution {\n    public boolean isValid(String s) {\n        Stack<Character> stack = new Stack<>();\n        for (char c : s.toCharArray()) {\n            if (c == '(') stack.push(')');\n            else if (c == '{') stack.push('}');\n            else if (c == '[') stack.push(']');\n            else if (stack.isEmpty() || stack.pop() != c) return false;\n        }\n        return stack.isEmpty();\n    }\n}"
    },
    "solved": false,
    "bookmarked": false
  },
  {
    "id": "code-09",
    "title": "Binary Search",
    "difficulty": "Beginner",
    "topic": "Binary Search",
    "category": "Algorithms",
    "description": "Given an array of integers `nums` which is sorted in ascending order, and an integer `target`, write a function to search `target` in `nums`. If `target` exists, then return its index. Otherwise, return -1. You must write an algorithm with O(log n) runtime complexity.",
    "constraints": "1 <= nums.length <= 10^4\n-10^4 < nums[i], target < 10^4\nAll integers in nums are unique.\nnums is sorted in ascending order.",
    "examples": [
      {
        "input": "nums = [-1,0,3,5,9,12], target = 9",
        "output": "4",
        "explanation": "9 exists in nums and its index is 4."
      },
      {
        "input": "nums = [-1,0,3,5,9,12], target = 2",
        "output": "-1",
        "explanation": "2 does not exist in nums."
      }
    ],
    "fnName": "search",
    "starterCode": "function search(nums, target) {\n  // Return index of target, or -1\n  return -1;\n}",
    "solutionCode": "function search(nums, target) {\n  let low = 0, high = nums.length - 1;\n  while (low <= high) {\n    const mid = Math.floor((low + high) / 2);\n    if (nums[mid] === target) return mid;\n    if (nums[mid] < target) low = mid + 1;\n    else high = mid - 1;\n  }\n  return -1;\n}",
    "timeComplexity": "O(log N)",
    "spaceComplexity": "O(1)",
    "hints": [
      "Maintain two pointers: `low = 0` and `high = nums.length - 1`.",
      "Compute the midpoint: `mid = Math.floor((low + high) / 2)`.",
      "Halve the search space based on whether target is greater or smaller than nums[mid]."
    ],
    "testCases": [
      {
        "input": [
          [
            -1,
            0,
            3,
            5,
            9,
            12
          ],
          9
        ],
        "expected": 4
      },
      {
        "input": [
          [
            -1,
            0,
            3,
            5,
            9,
            12
          ],
          2
        ],
        "expected": -1
      },
      {
        "input": [
          [
            5
          ],
          5
        ],
        "expected": 0
      }
    ],
    "starterCodes": {
      "javascript": "function search(nums, target) {\n  // Return index of target, or -1\n  return -1;\n}",
      "python": "def search(nums: list[int], target: int) -> int:\n    # Return index of target, or -1\n    return -1",
      "java": "class Solution {\n    public int search(int[] nums, int target) {\n        // Write your code here\n        return -1;\n    }\n}"
    },
    "solutionCodes": {
      "javascript": "function search(nums, target) {\n  let low = 0, high = nums.length - 1;\n  while (low <= high) {\n    const mid = Math.floor((low + high) / 2);\n    if (nums[mid] === target) return mid;\n    if (nums[mid] < target) low = mid + 1;\n    else high = mid - 1;\n  }\n  return -1;\n}",
      "python": "def search(nums: list[int], target: int) -> int:\n    low, high = 0, len(nums) - 1\n    while low <= high:\n        mid = (low + high) // 2\n        if nums[mid] == target: return mid\n        elif nums[mid] < target: low = mid + 1\n        else: high = mid - 1\n    return -1",
      "java": "class Solution {\n    public int search(int[] nums, int target) {\n        int low = 0, high = nums.length - 1;\n        while (low <= high) {\n            int mid = low + (high - low) / 2;\n            if (nums[mid] == target) return mid;\n            else if (nums[mid] < target) low = mid + 1;\n            else high = mid - 1;\n        }\n        return -1;\n    }\n}"
    },
    "solved": false,
    "bookmarked": false
  },
  {
    "id": "code-10",
    "title": "Single Number (Bit XOR)",
    "difficulty": "Beginner",
    "topic": "Bit Manipulation",
    "category": "Math & Number Theory",
    "description": "Given a non-empty array of integers `nums`, every element appears twice except for one. Find that single one. You must implement a solution with a linear runtime complexity and use only constant extra space.",
    "constraints": "1 <= nums.length <= 3 * 10^4\n-3 * 10^4 <= nums[i] <= 3 * 10^4\nEach element appears twice except for one element which appears once.",
    "examples": [
      {
        "input": "nums = [2, 2, 1]",
        "output": "1",
        "explanation": "1 appears once."
      },
      {
        "input": "nums = [4, 1, 2, 1, 2]",
        "output": "4",
        "explanation": "4 appears once."
      }
    ],
    "fnName": "singleNumber",
    "starterCode": "function singleNumber(nums) {\n  // Find the single number in O(N) time and O(1) space\n  return 0;\n}",
    "solutionCode": "function singleNumber(nums) {\n  let res = 0;\n  for (const n of nums) {\n    res ^= n;\n  }\n  return res;\n}",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)",
    "hints": [
      "Remember the XOR bitwise operator properties: `a ^ a = 0` and `a ^ 0 = a`.",
      "XOR is commutative and associative.",
      "XORing all numbers together will cancel out all duplicates, leaving only the single unique number."
    ],
    "testCases": [
      {
        "input": [
          [
            2,
            2,
            1
          ]
        ],
        "expected": 1
      },
      {
        "input": [
          [
            4,
            1,
            2,
            1,
            2
          ]
        ],
        "expected": 4
      },
      {
        "input": [
          [
            1
          ]
        ],
        "expected": 1
      }
    ],
    "starterCodes": {
      "javascript": "function singleNumber(nums) {\n  // Find the single number in O(N) time and O(1) space\n  return 0;\n}",
      "python": "def single_number(nums: list[int]) -> int:\n    # Write your code here\n    return 0",
      "java": "class Solution {\n    public int singleNumber(int[] nums) {\n        // Write your code here\n        return 0;\n    }\n}"
    },
    "solutionCodes": {
      "javascript": "function singleNumber(nums) {\n  let res = 0;\n  for (const n of nums) {\n    res ^= n;\n  }\n  return res;\n}",
      "python": "def single_number(nums: list[int]) -> int:\n    res = 0\n    for n in nums:\n        res ^= n\n    return res",
      "java": "class Solution {\n    public int singleNumber(int[] nums) {\n        int res = 0;\n        for (int n : nums) res ^= n;\n        return res;\n    }\n}"
    },
    "solved": false,
    "bookmarked": false
  },
  {
    "id": "code-11",
    "title": "Fizz Buzz Array Generator",
    "difficulty": "Beginner",
    "topic": "Math & Number Theory",
    "category": "Fundamentals",
    "description": "Given an integer `n`, return a string array `answer` (1-indexed) where:\n- answer[i] == 'FizzBuzz' if i is divisible by 3 and 5.\n- answer[i] == 'Fizz' if i is divisible by 3.\n- answer[i] == 'Buzz' if i is divisible by 5.\n- answer[i] == i (as a string) if none of the above conditions are true.",
    "constraints": "1 <= n <= 10^4",
    "examples": [
      {
        "input": "n = 3",
        "output": "[\"1\",\"2\",\"Fizz\"]",
        "explanation": "3 is divisible by 3."
      },
      {
        "input": "n = 5",
        "output": "[\"1\",\"2\",\"Fizz\",\"4\",\"Buzz\"]",
        "explanation": "5 is divisible by 5."
      },
      {
        "input": "n = 15",
        "output": "[\"1\",\"2\",\"Fizz\",\"4\",\"Buzz\",\"Fizz\",\"7\",\"8\",\"Fizz\",\"Buzz\",\"11\",\"Fizz\",\"13\",\"14\",\"FizzBuzz\"]",
        "explanation": "15 is divisible by both 3 and 5."
      }
    ],
    "fnName": "fizzBuzz",
    "starterCode": "function fizzBuzz(n) {\n  // Write your code here\n  return [];\n}",
    "solutionCode": "function fizzBuzz(n) {\n  const res = [];\n  for (let i = 1; i <= n; i++) {\n    if (i % 15 === 0) res.push('FizzBuzz');\n    else if (i % 3 === 0) res.push('Fizz');\n    else if (i % 5 === 0) res.push('Buzz');\n    else res.push(String(i));\n  }\n  return res;\n}",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1) (excluding output array)",
    "hints": [
      "Check for divisibility by 15 (both 3 and 5) first.",
      "Use modulo operator `%` to test remainder.",
      "Convert numbers to strings when neither condition is met."
    ],
    "testCases": [
      {
        "input": [
          3
        ],
        "expected": [
          "1",
          "2",
          "Fizz"
        ]
      },
      {
        "input": [
          5
        ],
        "expected": [
          "1",
          "2",
          "Fizz",
          "4",
          "Buzz"
        ]
      },
      {
        "input": [
          15
        ],
        "expected": [
          "1",
          "2",
          "Fizz",
          "4",
          "Buzz",
          "Fizz",
          "7",
          "8",
          "Fizz",
          "Buzz",
          "11",
          "Fizz",
          "13",
          "14",
          "FizzBuzz"
        ]
      }
    ],
    "starterCodes": {
      "javascript": "function fizzBuzz(n) {\n  // Write your code here\n  return [];\n}",
      "python": "def fizz_buzz(n: int) -> list[str]:\n    # Write your code here\n    return []",
      "java": "class Solution {\n    public List<String> fizzBuzz(int n) {\n        // Write your code here\n        return new ArrayList<>();\n    }\n}"
    },
    "solutionCodes": {
      "javascript": "function fizzBuzz(n) {\n  const res = [];\n  for (let i = 1; i <= n; i++) {\n    if (i % 15 === 0) res.push('FizzBuzz');\n    else if (i % 3 === 0) res.push('Fizz');\n    else if (i % 5 === 0) res.push('Buzz');\n    else res.push(String(i));\n  }\n  return res;\n}",
      "python": "def fizz_buzz(n: int) -> list[str]:\n    res = []\n    for i in range(1, n + 1):\n        if i % 15 == 0: res.append('FizzBuzz')\n        elif i % 3 == 0: res.append('Fizz')\n        elif i % 5 == 0: res.append('Buzz')\n        else: res.append(str(i))\n    return res",
      "java": "class Solution {\n    public List<String> fizzBuzz(int n) {\n        List<String> res = new ArrayList<>();\n        for (int i = 1; i <= n; i++) {\n            if (i % 15 == 0) res.add(\"FizzBuzz\");\n            else if (i % 3 == 0) res.add(\"Fizz\");\n            else if (i % 5 == 0) res.add(\"Buzz\");\n            else res.add(String.valueOf(i));\n        }\n        return res;\n    }\n}"
    },
    "solved": false,
    "bookmarked": false
  },
  {
    "id": "code-12",
    "title": "Climbing Stairs (Fibonacci DP)",
    "difficulty": "Beginner",
    "topic": "Dynamic Programming",
    "category": "Recursion & Backtracking",
    "description": "You are climbing a staircase. It takes `n` steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?",
    "constraints": "1 <= n <= 45",
    "examples": [
      {
        "input": "n = 2",
        "output": "2",
        "explanation": "1 step + 1 step, or 2 steps."
      },
      {
        "input": "n = 3",
        "output": "3",
        "explanation": "1+1+1, 1+2, or 2+1."
      }
    ],
    "fnName": "climbStairs",
    "starterCode": "function climbStairs(n) {\n  // Return distinct ways to reach top\n  return 0;\n}",
    "solutionCode": "function climbStairs(n) {\n  if (n <= 2) return n;\n  let prev = 1, curr = 2;\n  for (let i = 3; i <= n; i++) {\n    const next = prev + curr;\n    prev = curr;\n    curr = next;\n  }\n  return curr;\n}",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)",
    "hints": [
      "To reach step n, you could have come from step n-1 (1 step) or step n-2 (2 steps).",
      "Therefore, `ways(n) = ways(n-1) + ways(n-2)`.",
      "This is identical to the Fibonacci sequence!"
    ],
    "testCases": [
      {
        "input": [
          2
        ],
        "expected": 2
      },
      {
        "input": [
          3
        ],
        "expected": 3
      },
      {
        "input": [
          5
        ],
        "expected": 8
      }
    ],
    "starterCodes": {
      "javascript": "function climbStairs(n) {\n  // Return distinct ways to reach top\n  return 0;\n}",
      "python": "def climb_stairs(n: int) -> int:\n    # Write your code here\n    return 0",
      "java": "class Solution {\n    public int climbStairs(int n) {\n        // Write your code here\n        return 0;\n    }\n}"
    },
    "solutionCodes": {
      "javascript": "function climbStairs(n) {\n  if (n <= 2) return n;\n  let prev = 1, curr = 2;\n  for (let i = 3; i <= n; i++) {\n    const next = prev + curr;\n    prev = curr;\n    curr = next;\n  }\n  return curr;\n}",
      "python": "def climb_stairs(n: int) -> int:\n    if n <= 2: return n\n    a, b = 1, 2\n    for _ in range(3, n + 1):\n        a, b = b, a + b\n    return b",
      "java": "class Solution {\n    public int climbStairs(int n) {\n        if (n <= 2) return n;\n        int a = 1, b = 2;\n        for (int i = 3; i <= n; i++) {\n            int next = a + b;\n            a = b;\n            b = next;\n        }\n        return b;\n    }\n}"
    },
    "solved": false,
    "bookmarked": false
  },
  {
    "id": "code-13",
    "title": "Best Time to Buy and Sell Stock",
    "difficulty": "Beginner",
    "topic": "Greedy Algorithms",
    "category": "Arrays & Strings",
    "description": "You are given an array `prices` where `prices[i]` is the price of a given stock on the `i`-th day. You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock. Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.",
    "constraints": "1 <= prices.length <= 10^5\n0 <= prices[i] <= 10^4",
    "examples": [
      {
        "input": "prices = [7, 1, 5, 3, 6, 4]",
        "output": "5",
        "explanation": "Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6 - 1 = 5."
      },
      {
        "input": "prices = [7, 6, 4, 3, 1]",
        "output": "0",
        "explanation": "In this case, no transactions are done and max profit = 0."
      }
    ],
    "fnName": "maxProfit",
    "starterCode": "function maxProfit(prices) {\n  // Return max profit possible\n  return 0;\n}",
    "solutionCode": "function maxProfit(prices) {\n  let minPrice = Infinity;\n  let maxProfit = 0;\n  for (const price of prices) {\n    if (price < minPrice) minPrice = price;\n    else if (price - minPrice > maxProfit) maxProfit = price - minPrice;\n  }\n  return maxProfit;\n}",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)",
    "hints": [
      "Keep track of the minimum buying price seen so far.",
      "On each day, calculate the profit if you sold at the current price.",
      "Update maxProfit if current price - minPrice is greater."
    ],
    "testCases": [
      {
        "input": [
          [
            7,
            1,
            5,
            3,
            6,
            4
          ]
        ],
        "expected": 5
      },
      {
        "input": [
          [
            7,
            6,
            4,
            3,
            1
          ]
        ],
        "expected": 0
      },
      {
        "input": [
          [
            2,
            4,
            1
          ]
        ],
        "expected": 2
      }
    ],
    "starterCodes": {
      "javascript": "function maxProfit(prices) {\n  // Return max profit possible\n  return 0;\n}",
      "python": "def max_profit(prices: list[int]) -> int:\n    # Write your code here\n    return 0",
      "java": "class Solution {\n    public int maxProfit(int[] prices) {\n        // Write your code here\n        return 0;\n    }\n}"
    },
    "solutionCodes": {
      "javascript": "function maxProfit(prices) {\n  let minPrice = Infinity;\n  let maxProfit = 0;\n  for (const price of prices) {\n    if (price < minPrice) minPrice = price;\n    else if (price - minPrice > maxProfit) maxProfit = price - minPrice;\n  }\n  return maxProfit;\n}",
      "python": "def max_profit(prices: list[int]) -> int:\n    min_price = float('inf')\n    max_profit = 0\n    for p in prices:\n        min_price = min(min_price, p)\n        max_profit = max(max_profit, p - min_price)\n    return max_profit",
      "java": "class Solution {\n    public int maxProfit(int[] prices) {\n        int minPrice = Integer.MAX_VALUE;\n        int maxProfit = 0;\n        for (int p : prices) {\n            if (p < minPrice) minPrice = p;\n            else if (p - minPrice > maxProfit) maxProfit = p - minPrice;\n        }\n        return maxProfit;\n    }\n}"
    },
    "solved": false,
    "bookmarked": false
  },
  {
    "id": "code-14",
    "title": "Missing Number Finder",
    "difficulty": "Beginner",
    "topic": "Math & Number Theory",
    "category": "Bit Manipulation",
    "description": "Given an array `nums` containing `n` distinct numbers in the range `[0, n]`, return the only number in the range that is missing from the array.",
    "constraints": "n == nums.length\n1 <= n <= 10^4\n0 <= nums[i] <= n\nAll the numbers of nums are unique.",
    "examples": [
      {
        "input": "nums = [3, 0, 1]",
        "output": "2",
        "explanation": "n = 3 since there are 3 numbers, so all numbers are in the range [0, 3]. 2 is missing."
      },
      {
        "input": "nums = [0, 1]",
        "output": "2",
        "explanation": "n = 2, so numbers are in range [0, 2]. 2 is missing."
      }
    ],
    "fnName": "missingNumber",
    "starterCode": "function missingNumber(nums) {\n  // Return the missing number in [0, n]\n  return 0;\n}",
    "solutionCode": "function missingNumber(nums) {\n  const n = nums.length;\n  const expectedSum = (n * (n + 1)) / 2;\n  const actualSum = nums.reduce((acc, curr) => acc + curr, 0);\n  return expectedSum - actualSum;\n}",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)",
    "hints": [
      "Gauss's summation formula gives the sum of 0 to n: `n * (n + 1) / 2`.",
      "Sum all elements currently in the array.",
      "The difference between expected sum and actual sum is the missing number."
    ],
    "testCases": [
      {
        "input": [
          [
            3,
            0,
            1
          ]
        ],
        "expected": 2
      },
      {
        "input": [
          [
            0,
            1
          ]
        ],
        "expected": 2
      },
      {
        "input": [
          [
            9,
            6,
            4,
            2,
            3,
            5,
            7,
            0,
            1
          ]
        ],
        "expected": 8
      }
    ],
    "starterCodes": {
      "javascript": "function missingNumber(nums) {\n  // Return the missing number in [0, n]\n  return 0;\n}",
      "python": "def missing_number(nums: list[int]) -> int:\n    # Write your code here\n    return 0",
      "java": "class Solution {\n    public int missingNumber(int[] nums) {\n        // Write your code here\n        return 0;\n    }\n}"
    },
    "solutionCodes": {
      "javascript": "function missingNumber(nums) {\n  const n = nums.length;\n  const expectedSum = (n * (n + 1)) / 2;\n  const actualSum = nums.reduce((acc, curr) => acc + curr, 0);\n  return expectedSum - actualSum;\n}",
      "python": "def missing_number(nums: list[int]) -> int:\n    n = len(nums)\n    return (n * (n + 1)) // 2 - sum(nums)",
      "java": "class Solution {\n    public int missingNumber(int[] nums) {\n        int n = nums.length;\n        int expected = n * (n + 1) / 2;\n        int sum = 0;\n        for (int x : nums) sum += x;\n        return expected - sum;\n    }\n}"
    },
    "solved": false,
    "bookmarked": false
  },
  {
    "id": "code-15",
    "title": "Power of Two Checker",
    "difficulty": "Beginner",
    "topic": "Bit Manipulation",
    "category": "Math & Number Theory",
    "description": "Given an integer `n`, return `true` if it is a power of two. Otherwise, return `false`. An integer `n` is a power of two if there exists an integer `x` such that `n == 2^x`.",
    "constraints": "-2^31 <= n <= 2^31 - 1",
    "examples": [
      {
        "input": "n = 1",
        "output": "true",
        "explanation": "2^0 = 1"
      },
      {
        "input": "n = 16",
        "output": "true",
        "explanation": "2^4 = 16"
      },
      {
        "input": "n = 3",
        "output": "false",
        "explanation": "Not a power of two."
      }
    ],
    "fnName": "isPowerOfTwo",
    "starterCode": "function isPowerOfTwo(n) {\n  // Write your code here\n  return false;\n}",
    "solutionCode": "function isPowerOfTwo(n) {\n  return n > 0 && (n & (n - 1)) === 0;\n}",
    "timeComplexity": "O(1)",
    "spaceComplexity": "O(1)",
    "hints": [
      "Powers of two in binary have exactly one bit set to 1 (e.g. 1 = 0001, 2 = 0010, 4 = 0100).",
      "What happens when you perform `n & (n - 1)` on a power of two?",
      "`n & (n - 1)` clears the lowest set bit. If the result is 0 and n > 0, n is a power of two."
    ],
    "testCases": [
      {
        "input": [
          1
        ],
        "expected": true
      },
      {
        "input": [
          16
        ],
        "expected": true
      },
      {
        "input": [
          3
        ],
        "expected": false
      }
    ],
    "starterCodes": {
      "javascript": "function isPowerOfTwo(n) {\n  // Write your code here\n  return false;\n}",
      "python": "def is_power_of_two(n: int) -> bool:\n    # Write your code here\n    return False",
      "java": "class Solution {\n    public boolean isPowerOfTwo(int n) {\n        // Write your code here\n        return false;\n    }\n}"
    },
    "solutionCodes": {
      "javascript": "function isPowerOfTwo(n) {\n  return n > 0 && (n & (n - 1)) === 0;\n}",
      "python": "def is_power_of_two(n: int) -> bool:\n    return n > 0 and (n & (n - 1)) == 0",
      "java": "class Solution {\n    public boolean isPowerOfTwo(int n) {\n        return n > 0 && (n & (n - 1)) == 0;\n    }\n}"
    },
    "solved": false,
    "bookmarked": false
  },
  {
    "id": "code-16",
    "title": "3Sum Zero Triplet Finder",
    "difficulty": "Intermediate",
    "topic": "Two Pointers & Sliding Window",
    "category": "Arrays & Strings",
    "description": "Given an integer array nums, return all the triplets `[nums[i], nums[j], nums[k]]` such that `i != j`, `i != k`, and `j != k`, and `nums[i] + nums[j] + nums[k] == 0`. Notice that the solution set must not contain duplicate triplets.",
    "constraints": "3 <= nums.length <= 3000\n-10^5 <= nums[i] <= 10^5",
    "examples": [
      {
        "input": "nums = [-1,0,1,2,-1,-4]",
        "output": "[[-1,-1,2],[-1,0,1]]",
        "explanation": "Unique triplets summing to 0."
      },
      {
        "input": "nums = [0,1,1]",
        "output": "[]",
        "explanation": "No triplets sum to 0."
      }
    ],
    "fnName": "threeSum",
    "starterCode": "function threeSum(nums) {\n  // Return array of unique triplets summing to 0\n  return [];\n}",
    "solutionCode": "function threeSum(nums) {\n  nums.sort((a, b) => a - b);\n  const res = [];\n  for (let i = 0; i < nums.length - 2; i++) {\n    if (i > 0 && nums[i] === nums[i - 1]) continue;\n    let left = i + 1, right = nums.length - 1;\n    while (left < right) {\n      const sum = nums[i] + nums[left] + nums[right];\n      if (sum === 0) {\n        res.push([nums[i], nums[left], nums[right]]);\n        while (left < right && nums[left] === nums[left + 1]) left++;\n        while (left < right && nums[right] === nums[right - 1]) right--;\n        left++; right--;\n      } else if (sum < 0) left++;\n      else right--;\n    }\n  }\n  return res;\n}",
    "timeComplexity": "O(N^2)",
    "spaceComplexity": "O(1) (ignoring output sorting)",
    "hints": [
      "Sort the array first to enable two pointers and easily skip duplicate values.",
      "Fix the first number with an outer loop, then use two pointers (left and right) for the remaining two numbers.",
      "Advance pointers past duplicate elements to avoid duplicate triplets in the output."
    ],
    "testCases": [
      {
        "input": [
          [
            -1,
            0,
            1,
            2,
            -1,
            -4
          ]
        ],
        "expected": [
          [
            -1,
            -1,
            2
          ],
          [
            -1,
            0,
            1
          ]
        ]
      },
      {
        "input": [
          [
            0,
            1,
            1
          ]
        ],
        "expected": []
      },
      {
        "input": [
          [
            0,
            0,
            0
          ]
        ],
        "expected": [
          [
            0,
            0,
            0
          ]
        ]
      }
    ],
    "starterCodes": {
      "javascript": "function threeSum(nums) {\n  // Return array of unique triplets summing to 0\n  return [];\n}",
      "python": "def three_sum(nums: list[int]) -> list[list[int]]:\n    # Write your code here\n    return []",
      "java": "class Solution {\n    public List<List<Integer>> threeSum(int[] nums) {\n        // Write your code here\n        return new ArrayList<>();\n    }\n}"
    },
    "solutionCodes": {
      "javascript": "function threeSum(nums) {\n  nums.sort((a, b) => a - b);\n  const res = [];\n  for (let i = 0; i < nums.length - 2; i++) {\n    if (i > 0 && nums[i] === nums[i - 1]) continue;\n    let left = i + 1, right = nums.length - 1;\n    while (left < right) {\n      const sum = nums[i] + nums[left] + nums[right];\n      if (sum === 0) {\n        res.push([nums[i], nums[left], nums[right]]);\n        while (left < right && nums[left] === nums[left + 1]) left++;\n        while (left < right && nums[right] === nums[right - 1]) right--;\n        left++; right--;\n      } else if (sum < 0) left++;\n      else right--;\n    }\n  }\n  return res;\n}",
      "python": "def three_sum(nums: list[int]) -> list[list[int]]:\n    nums.sort()\n    res = []\n    for i in range(len(nums) - 2):\n        if i > 0 and nums[i] == nums[i - 1]: continue\n        l, r = i + 1, len(nums) - 1\n        while l < r:\n            s = nums[i] + nums[l] + nums[r]\n            if s == 0:\n                res.append([nums[i], nums[l], nums[r]])\n                while l < r and nums[l] == nums[l + 1]: l += 1\n                while l < r and nums[r] == nums[r - 1]: r -= 1\n                l += 1; r -= 1\n            elif s < 0: l += 1\n            else: r -= 1\n    return res",
      "java": "class Solution {\n    public List<List<Integer>> threeSum(int[] nums) {\n        Arrays.sort(nums);\n        List<List<Integer>> res = new ArrayList<>();\n        for (int i = 0; i < nums.length - 2; i++) {\n            if (i > 0 && nums[i] == nums[i - 1]) continue;\n            int l = i + 1, r = nums.length - 1;\n            while (l < r) {\n                int s = nums[i] + nums[l] + nums[r];\n                if (s == 0) {\n                    res.add(Arrays.asList(nums[i], nums[l], nums[r]));\n                    while (l < r && nums[l] == nums[l + 1]) l++;\n                    while (l < r && nums[r] == nums[r - 1]) r--;\n                    l++; r--;\n                } else if (s < 0) l++; else r--;\n            }\n        }\n        return res;\n    }\n}"
    },
    "solved": false,
    "bookmarked": false
  },
  {
    "id": "code-17",
    "title": "Longest Substring Without Repeating Characters",
    "difficulty": "Intermediate",
    "topic": "Two Pointers & Sliding Window",
    "category": "Hash Maps & Sets",
    "description": "Given a string `s`, find the length of the longest substring without repeating characters.",
    "constraints": "0 <= s.length <= 5 * 10^4\ns consists of English letters, digits, symbols and spaces.",
    "examples": [
      {
        "input": "s = \"abcabcbb\"",
        "output": "3",
        "explanation": "\"abc\" with length 3."
      },
      {
        "input": "s = \"bbbbb\"",
        "output": "1",
        "explanation": "\"b\" with length 1."
      },
      {
        "input": "s = \"pwwkew\"",
        "output": "3",
        "explanation": "\"wke\" with length 3."
      }
    ],
    "fnName": "lengthOfLongestSubstring",
    "starterCode": "function lengthOfLongestSubstring(s) {\n  // Write your code here\n  return 0;\n}",
    "solutionCode": "function lengthOfLongestSubstring(s) {\n  let maxLen = 0;\n  let left = 0;\n  const charMap = new Map();\n  for (let right = 0; right < s.length; right++) {\n    const char = s[right];\n    if (charMap.has(char) && charMap.get(char) >= left) {\n      left = charMap.get(char) + 1;\n    }\n    charMap.set(char, right);\n    maxLen = Math.max(maxLen, right - left + 1);\n  }\n  return maxLen;\n}",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(min(M, N))",
    "hints": [
      "Use a sliding window `[left, right]`.",
      "Use a hash map to remember the last seen index of each character.",
      "When a duplicate is encountered, move the left boundary just past the duplicate's previous position."
    ],
    "testCases": [
      {
        "input": [
          "abcabcbb"
        ],
        "expected": 3
      },
      {
        "input": [
          "bbbbb"
        ],
        "expected": 1
      },
      {
        "input": [
          "pwwkew"
        ],
        "expected": 3
      }
    ],
    "starterCodes": {
      "javascript": "function lengthOfLongestSubstring(s) {\n  // Write your code here\n  return 0;\n}",
      "python": "def length_of_longest_substring(s: str) -> int:\n    # Write your code here\n    return 0",
      "java": "class Solution {\n    public int lengthOfLongestSubstring(String s) {\n        // Write your code here\n        return 0;\n    }\n}"
    },
    "solutionCodes": {
      "javascript": "function lengthOfLongestSubstring(s) {\n  let maxLen = 0;\n  let left = 0;\n  const charMap = new Map();\n  for (let right = 0; right < s.length; right++) {\n    const char = s[right];\n    if (charMap.has(char) && charMap.get(char) >= left) {\n      left = charMap.get(char) + 1;\n    }\n    charMap.set(char, right);\n    maxLen = Math.max(maxLen, right - left + 1);\n  }\n  return maxLen;\n}",
      "python": "def length_of_longest_substring(s: str) -> int:\n    max_len = left = 0\n    seen = {}\n    for right, c in enumerate(s):\n        if c in seen and seen[c] >= left:\n            left = seen[c] + 1\n        seen[c] = right\n        max_len = max(max_len, right - left + 1)\n    return max_len",
      "java": "class Solution {\n    public int lengthOfLongestSubstring(String s) {\n        int maxLen = 0, left = 0;\n        Map<Character, Integer> map = new HashMap<>();\n        for (int right = 0; right < s.length(); right++) {\n            char c = s.charAt(right);\n            if (map.containsKey(c) && map.get(c) >= left) {\n                left = map.get(c) + 1;\n            }\n            map.put(c, right);\n            maxLen = Math.max(maxLen, right - left + 1);\n        }\n        return maxLen;\n    }\n}"
    },
    "solved": false,
    "bookmarked": false
  },
  {
    "id": "code-18",
    "title": "Longest Palindromic Substring",
    "difficulty": "Intermediate",
    "topic": "Dynamic Programming",
    "category": "Two Pointers & Sliding Window",
    "description": "Given a string `s`, return the longest palindromic substring in `s`.",
    "constraints": "1 <= s.length <= 1000\ns consist of only digits and English letters.",
    "examples": [
      {
        "input": "s = \"babad\"",
        "output": "\"bab\"",
        "explanation": "\"aba\" is also a valid answer."
      },
      {
        "input": "s = \"cbbd\"",
        "output": "\"bb\"",
        "explanation": "\"bb\" is the longest palindrome."
      }
    ],
    "fnName": "longestPalindrome",
    "starterCode": "function longestPalindrome(s) {\n  // Write your code here\n  return '';\n}",
    "solutionCode": "function longestPalindrome(s) {\n  if (!s || s.length <= 1) return s;\n  let start = 0, maxLen = 0;\n  function expand(left, right) {\n    while (left >= 0 && right < s.length && s[left] === s[right]) {\n      left--; right++;\n    }\n    const len = right - left - 1;\n    if (len > maxLen) {\n      maxLen = len;\n      start = left + 1;\n    }\n  }\n  for (let i = 0; i < s.length; i++) {\n    expand(i, i);\n    expand(i, i + 1);\n  }\n  return s.substring(start, start + maxLen);\n}",
    "timeComplexity": "O(N^2)",
    "spaceComplexity": "O(1)",
    "hints": [
      "A palindrome can expand outward from its center.",
      "There are 2N - 1 possible centers (single character centers for odd length, adjacent pairs for even length).",
      "Expand outward as long as left and right characters match."
    ],
    "testCases": [
      {
        "input": [
          "babad"
        ],
        "expected": "bab"
      },
      {
        "input": [
          "cbbd"
        ],
        "expected": "bb"
      },
      {
        "input": [
          "a"
        ],
        "expected": "a"
      }
    ],
    "starterCodes": {
      "javascript": "function longestPalindrome(s) {\n  // Write your code here\n  return '';\n}",
      "python": "def longest_palindrome(s: str) -> str:\n    # Write your code here\n    return ''",
      "java": "class Solution {\n    public String longestPalindrome(String s) {\n        // Write your code here\n        return \"\";\n    }\n}"
    },
    "solutionCodes": {
      "javascript": "function longestPalindrome(s) {\n  if (!s || s.length <= 1) return s;\n  let start = 0, maxLen = 0;\n  function expand(left, right) {\n    while (left >= 0 && right < s.length && s[left] === s[right]) {\n      left--; right++;\n    }\n    const len = right - left - 1;\n    if (len > maxLen) {\n      maxLen = len;\n      start = left + 1;\n    }\n  }\n  for (let i = 0; i < s.length; i++) {\n    expand(i, i);\n    expand(i, i + 1);\n  }\n  return s.substring(start, start + maxLen);\n}",
      "python": "def longest_palindrome(s: str) -> str:\n    if len(s) <= 1: return s\n    res = ''\n    for i in range(len(s)):\n        for l, r in ((i, i), (i, i + 1)):\n            while l >= 0 and r < len(s) and s[l] == s[r]:\n                l -= 1; r += 1\n            if r - l - 1 > len(res):\n                res = s[l + 1:r]\n    return res",
      "java": "class Solution {\n    public String longestPalindrome(String s) {\n        if (s == null || s.length() < 1) return \"\";\n        int start = 0, end = 0;\n        for (int i = 0; i < s.length(); i++) {\n            int len1 = expand(s, i, i);\n            int len2 = expand(s, i, i + 1);\n            int len = Math.max(len1, len2);\n            if (len > end - start) {\n                start = i - (len - 1) / 2;\n                end = i + len / 2;\n            }\n        }\n        return s.substring(start, end + 1);\n    }\n    private int expand(String s, int l, int r) {\n        while (l >= 0 && r < s.length() && s.charAt(l) == s.charAt(r)) { l--; r++; }\n        return r - l - 1;\n    }\n}"
    },
    "solved": false,
    "bookmarked": false
  },
  {
    "id": "code-19",
    "title": "Container With Most Water",
    "difficulty": "Intermediate",
    "topic": "Two Pointers & Sliding Window",
    "category": "Greedy Algorithms",
    "description": "You are given an integer array `height` of length `n`. There are `n` vertical lines drawn such that the two endpoints of the `i`-th line are `(i, 0)` and `(i, height[i])`. Find two lines that together with the x-axis form a container, such that the container contains the most water. Return the maximum amount of water a container can store.",
    "constraints": "n == height.length\n2 <= n <= 10^5\n0 <= height[i] <= 10^4",
    "examples": [
      {
        "input": "height = [1,8,6,2,5,4,8,3,7]",
        "output": "49",
        "explanation": "Lines at index 1 and 8 give (8-1) * min(8, 7) = 7 * 7 = 49."
      },
      {
        "input": "height = [1,1]",
        "output": "1",
        "explanation": "1 * 1 = 1."
      }
    ],
    "fnName": "maxArea",
    "starterCode": "function maxArea(height) {\n  // Write your code here\n  return 0;\n}",
    "solutionCode": "function maxArea(height) {\n  let maxWater = 0;\n  let left = 0, right = height.length - 1;\n  while (left < right) {\n    const width = right - left;\n    const h = Math.min(height[left], height[right]);\n    maxWater = Math.max(maxWater, width * h);\n    if (height[left] < height[right]) left++;\n    else right--;\n  }\n  return maxWater;\n}",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)",
    "hints": [
      "Start with the widest container: left = 0 and right = n - 1.",
      "Area is constrained by the shorter line: `min(height[left], height[right]) * (right - left)`.",
      "To have any chance of a larger area with smaller width, always move the shorter line inward."
    ],
    "testCases": [
      {
        "input": [
          [
            1,
            8,
            6,
            2,
            5,
            4,
            8,
            3,
            7
          ]
        ],
        "expected": 49
      },
      {
        "input": [
          [
            1,
            1
          ]
        ],
        "expected": 1
      },
      {
        "input": [
          [
            4,
            3,
            2,
            1,
            4
          ]
        ],
        "expected": 16
      }
    ],
    "starterCodes": {
      "javascript": "function maxArea(height) {\n  // Write your code here\n  return 0;\n}",
      "python": "def max_area(height: list[int]) -> int:\n    # Write your code here\n    return 0",
      "java": "class Solution {\n    public int maxArea(int[] height) {\n        // Write your code here\n        return 0;\n    }\n}"
    },
    "solutionCodes": {
      "javascript": "function maxArea(height) {\n  let maxWater = 0;\n  let left = 0, right = height.length - 1;\n  while (left < right) {\n    const width = right - left;\n    const h = Math.min(height[left], height[right]);\n    maxWater = Math.max(maxWater, width * h);\n    if (height[left] < height[right]) left++;\n    else right--;\n  }\n  return maxWater;\n}",
      "python": "def max_area(height: list[int]) -> int:\n    l, r = 0, len(height) - 1\n    max_w = 0\n    while l < r:\n        w = (r - l) * min(height[l], height[r])\n        max_w = max(max_w, w)\n        if height[l] < height[r]: l += 1\n        else: r -= 1\n    return max_w",
      "java": "class Solution {\n    public int maxArea(int[] height) {\n        int l = 0, r = height.length - 1, max = 0;\n        while (l < r) {\n            max = Math.max(max, (r - l) * Math.min(height[l], height[r]));\n            if (height[l] < height[r]) l++;\n            else r--;\n        }\n        return max;\n    }\n}"
    },
    "solved": false,
    "bookmarked": false
  },
  {
    "id": "code-20",
    "title": "Product of Array Except Self",
    "difficulty": "Intermediate",
    "topic": "Arrays & Strings",
    "category": "Math & Number Theory",
    "description": "Given an integer array `nums`, return an array `answer` such that `answer[i]` is equal to the product of all the elements of `nums` except `nums[i]`. The product of any prefix or suffix of `nums` is guaranteed to fit in a 32-bit integer. You must write an algorithm that runs in O(n) time and without using the division operation.",
    "constraints": "2 <= nums.length <= 10^5\n-30 <= nums[i] <= 30\nThe product fits in a 32-bit integer.",
    "examples": [
      {
        "input": "nums = [1, 2, 3, 4]",
        "output": "[24, 12, 8, 6]",
        "explanation": "24 = 2*3*4, 12 = 1*3*4, 8 = 1*2*4, 6 = 1*2*3."
      },
      {
        "input": "nums = [-1, 1, 0, -3, 3]",
        "output": "[0, 0, 9, 0, 0]",
        "explanation": "Products except self."
      }
    ],
    "fnName": "productExceptSelf",
    "starterCode": "function productExceptSelf(nums) {\n  // Write your code without using division\n  return [];\n}",
    "solutionCode": "function productExceptSelf(nums) {\n  const n = nums.length;\n  const res = new Array(n).fill(1);\n  let prefix = 1;\n  for (let i = 0; i < n; i++) {\n    res[i] = prefix;\n    prefix *= nums[i];\n  }\n  let suffix = 1;\n  for (let i = n - 1; i >= 0; i--) {\n    res[i] *= suffix;\n    suffix *= nums[i];\n  }\n  return res;\n}",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1) (excluding output array)",
    "hints": [
      "Think of the result at index i as: `(product of numbers to left of i) * (product of numbers to right of i)`.",
      "Make a forward pass calculating running prefix products.",
      "Make a backward pass multiplying running suffix products."
    ],
    "testCases": [
      {
        "input": [
          [
            1,
            2,
            3,
            4
          ]
        ],
        "expected": [
          24,
          12,
          8,
          6
        ]
      },
      {
        "input": [
          [
            -1,
            1,
            0,
            -3,
            3
          ]
        ],
        "expected": [
          0,
          0,
          9,
          0,
          0
        ]
      },
      {
        "input": [
          [
            2,
            3
          ]
        ],
        "expected": [
          3,
          2
        ]
      }
    ],
    "starterCodes": {
      "javascript": "function productExceptSelf(nums) {\n  // Write your code without using division\n  return [];\n}",
      "python": "def product_except_self(nums: list[int]) -> list[int]:\n    # Write your code here\n    return []",
      "java": "class Solution {\n    public int[] productExceptSelf(int[] nums) {\n        // Write your code here\n        return new int[]{};\n    }\n}"
    },
    "solutionCodes": {
      "javascript": "function productExceptSelf(nums) {\n  const n = nums.length;\n  const res = new Array(n).fill(1);\n  let prefix = 1;\n  for (let i = 0; i < n; i++) {\n    res[i] = prefix;\n    prefix *= nums[i];\n  }\n  let suffix = 1;\n  for (let i = n - 1; i >= 0; i--) {\n    res[i] *= suffix;\n    suffix *= nums[i];\n  }\n  return res;\n}",
      "python": "def product_except_self(nums: list[int]) -> list[int]:\n    n = len(nums)\n    res = [1] * n\n    pref = 1\n    for i in range(n):\n        res[i] = pref\n        pref *= nums[i]\n    suff = 1\n    for i in range(n - 1, -1, -1):\n        res[i] *= suff\n        suff *= nums[i]\n    return res",
      "java": "class Solution {\n    public int[] productExceptSelf(int[] nums) {\n        int n = nums.length;\n        int[] res = new int[n];\n        res[0] = 1;\n        for (int i = 1; i < n; i++) res[i] = res[i - 1] * nums[i - 1];\n        int suff = 1;\n        for (int i = n - 1; i >= 0; i--) {\n            res[i] *= suff;\n            suff *= nums[i];\n        }\n        return res;\n    }\n}"
    },
    "solved": false,
    "bookmarked": false
  },
  {
    "id": "code-21",
    "title": "Group Anagrams",
    "difficulty": "Intermediate",
    "topic": "Hash Maps & Sets",
    "category": "Arrays & Strings",
    "description": "Given an array of strings `strs`, group the anagrams together. You can return the answer in any order.",
    "constraints": "1 <= strs.length <= 10^4\n0 <= strs[i].length <= 100\nstrs[i] consists of lowercase English letters.",
    "examples": [
      {
        "input": "strs = [\"eat\",\"tea\",\"tan\",\"ate\",\"nat\",\"bat\"]",
        "output": "[[\"bat\"],[\"nat\",\"tan\"],[\"ate\",\"eat\",\"tea\"]]",
        "explanation": "Anagram groups."
      },
      {
        "input": "strs = [\"\"]",
        "output": "[[\"\"]]",
        "explanation": "Empty string group."
      }
    ],
    "fnName": "groupAnagrams",
    "starterCode": "function groupAnagrams(strs) {\n  // Write your code here\n  return [];\n}",
    "solutionCode": "function groupAnagrams(strs) {\n  const map = {};\n  for (const s of strs) {\n    const key = s.split('').sort().join('');\n    if (!map[key]) map[key] = [];\n    map[key].push(s);\n  }\n  return Object.values(map);\n}",
    "timeComplexity": "O(N * K log K)",
    "spaceComplexity": "O(N * K)",
    "hints": [
      "Two strings are anagrams if their characters, when sorted, are identical.",
      "Use the sorted string as a Hash Map key (e.g., 'aet').",
      "Group all strings sharing that sorted key into a list."
    ],
    "testCases": [
      {
        "input": [
          [
            "eat",
            "tea",
            "tan",
            "ate",
            "nat",
            "bat"
          ]
        ],
        "expected": [
          [
            "eat",
            "tea",
            "ate"
          ],
          [
            "tan",
            "nat"
          ],
          [
            "bat"
          ]
        ]
      },
      {
        "input": [
          [
            ""
          ]
        ],
        "expected": [
          [
            ""
          ]
        ]
      },
      {
        "input": [
          [
            "a"
          ]
        ],
        "expected": [
          [
            "a"
          ]
        ]
      }
    ],
    "starterCodes": {
      "javascript": "function groupAnagrams(strs) {\n  // Write your code here\n  return [];\n}",
      "python": "def group_anagrams(strs: list[str]) -> list[list[str]]:\n    # Write your code here\n    return []",
      "java": "class Solution {\n    public List<List<String>> groupAnagrams(String[] strs) {\n        // Write your code here\n        return new ArrayList<>();\n    }\n}"
    },
    "solutionCodes": {
      "javascript": "function groupAnagrams(strs) {\n  const map = {};\n  for (const s of strs) {\n    const key = s.split('').sort().join('');\n    if (!map[key]) map[key] = [];\n    map[key].push(s);\n  }\n  return Object.values(map);\n}",
      "python": "def group_anagrams(strs: list[str]) -> list[list[str]]:\n    from collections import defaultdict\n    groups = defaultdict(list)\n    for s in strs:\n        key = ''.join(sorted(s))\n        groups[key].append(s)\n    return list(groups.values())",
      "java": "class Solution {\n    public List<List<String>> groupAnagrams(String[] strs) {\n        Map<String, List<String>> map = new HashMap<>();\n        for (String s : strs) {\n            char[] ca = s.toCharArray();\n            Arrays.sort(ca);\n            String key = String.valueOf(ca);\n            map.computeIfAbsent(key, k -> new ArrayList<>()).add(s);\n        }\n        return new ArrayList<>(map.values());\n    }\n}"
    },
    "solved": false,
    "bookmarked": false
  },
  {
    "id": "code-22",
    "title": "Reverse Linked List (Iterative & Recursive)",
    "difficulty": "Intermediate",
    "topic": "Linked Lists",
    "category": "Recursion & Backtracking",
    "description": "Given the head of a singly linked list represented as an array of values, return the reversed list as an array.",
    "constraints": "The number of nodes in the list is the range [0, 5000].\n-5000 <= Node.val <= 5000",
    "examples": [
      {
        "input": "head = [1, 2, 3, 4, 5]",
        "output": "[5, 4, 3, 2, 1]",
        "explanation": "Reversed linked list."
      },
      {
        "input": "head = [1, 2]",
        "output": "[2, 1]",
        "explanation": "Reversed two elements."
      }
    ],
    "fnName": "reverseList",
    "starterCode": "function reverseList(head) {\n  // Write your code here (array representation)\n  return head.reverse();\n}",
    "solutionCode": "function reverseList(head) {\n  let prev = null;\n  let curr = head;\n  // Array implementation of iterative linked list reversal\n  const res = [];\n  for (let i = head.length - 1; i >= 0; i--) {\n    res.push(head[i]);\n  }\n  return res;\n}",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1) in pointer list",
    "hints": [
      "In a real linked list, maintain three pointers: `prev = null`, `curr = head`, and `next = curr.next`.",
      "Re-point `curr.next = prev` at each step.",
      "Move `prev` and `curr` forward until `curr` is null."
    ],
    "testCases": [
      {
        "input": [
          [
            1,
            2,
            3,
            4,
            5
          ]
        ],
        "expected": [
          5,
          4,
          3,
          2,
          1
        ]
      },
      {
        "input": [
          [
            1,
            2
          ]
        ],
        "expected": [
          2,
          1
        ]
      },
      {
        "input": [
          []
        ],
        "expected": []
      }
    ],
    "starterCodes": {
      "javascript": "function reverseList(head) {\n  // Write your code here (array representation)\n  return head.reverse();\n}",
      "python": "def reverse_list(head: list[int]) -> list[int]:\n    # Write your code here\n    return head[::-1]",
      "java": "class Solution {\n    public int[] reverseList(int[] head) {\n        // Write your code here\n        return head;\n    }\n}"
    },
    "solutionCodes": {
      "javascript": "function reverseList(head) {\n  let prev = null;\n  let curr = head;\n  // Array implementation of iterative linked list reversal\n  const res = [];\n  for (let i = head.length - 1; i >= 0; i--) {\n    res.push(head[i]);\n  }\n  return res;\n}",
      "python": "def reverse_list(head: list[int]) -> list[int]:\n    return head[::-1]",
      "java": "class Solution {\n    public int[] reverseList(int[] head) {\n        int[] res = new int[head.length];\n        for (int i = 0; i < head.length; i++) res[i] = head[head.length - 1 - i];\n        return res;\n    }\n}"
    },
    "solved": false,
    "bookmarked": false
  },
  {
    "id": "code-23",
    "title": "Daily Temperatures (Monotonic Stack)",
    "difficulty": "Intermediate",
    "topic": "Stacks & Queues",
    "category": "Arrays & Strings",
    "description": "Given an array of integers `temperatures` represents the daily temperatures, return an array `answer` such that `answer[i]` is the number of days you have to wait after the `i`-th day to get a warmer temperature. If there is no future day for which this is possible, keep `answer[i] == 0` instead.",
    "constraints": "1 <= temperatures.length <= 10^5\n30 <= temperatures[i] <= 100",
    "examples": [
      {
        "input": "temperatures = [73,74,75,71,69,72,76,73]",
        "output": "[1,1,4,2,1,1,0,0]",
        "explanation": "Wait days for warmer temp."
      },
      {
        "input": "temperatures = [30,40,50,60]",
        "output": "[1,1,1,0]",
        "explanation": "Warmer on the next day."
      }
    ],
    "fnName": "dailyTemperatures",
    "starterCode": "function dailyTemperatures(temperatures) {\n  // Write your code here\n  return [];\n}",
    "solutionCode": "function dailyTemperatures(temperatures) {\n  const res = new Array(temperatures.length).fill(0);\n  const stack = []; // store indices\n  for (let i = 0; i < temperatures.length; i++) {\n    while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {\n      const prevIdx = stack.pop();\n      res[prevIdx] = i - prevIdx;\n    }\n    stack.push(i);\n  }\n  return res;\n}",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "hints": [
      "A brute-force solution checking future days takes O(N^2) time.",
      "Use a Monotonic Decreasing Stack storing day indices.",
      "When current day is warmer than the temperature at the top of the stack, pop the index and record the day difference."
    ],
    "testCases": [
      {
        "input": [
          [
            73,
            74,
            75,
            71,
            69,
            72,
            76,
            73
          ]
        ],
        "expected": [
          1,
          1,
          4,
          2,
          1,
          1,
          0,
          0
        ]
      },
      {
        "input": [
          [
            30,
            40,
            50,
            60
          ]
        ],
        "expected": [
          1,
          1,
          1,
          0
        ]
      },
      {
        "input": [
          [
            30,
            60,
            90
          ]
        ],
        "expected": [
          1,
          1,
          0
        ]
      }
    ],
    "starterCodes": {
      "javascript": "function dailyTemperatures(temperatures) {\n  // Write your code here\n  return [];\n}",
      "python": "def daily_temperatures(temperatures: list[int]) -> list[int]:\n    # Write your code here\n    return []",
      "java": "class Solution {\n    public int[] dailyTemperatures(int[] temperatures) {\n        // Write your code here\n        return new int[]{};\n    }\n}"
    },
    "solutionCodes": {
      "javascript": "function dailyTemperatures(temperatures) {\n  const res = new Array(temperatures.length).fill(0);\n  const stack = []; // store indices\n  for (let i = 0; i < temperatures.length; i++) {\n    while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {\n      const prevIdx = stack.pop();\n      res[prevIdx] = i - prevIdx;\n    }\n    stack.push(i);\n  }\n  return res;\n}",
      "python": "def daily_temperatures(temperatures: list[int]) -> list[int]:\n    res = [0] * len(temperatures)\n    stack = [] # indices\n    for i, t in enumerate(temperatures):\n        while stack and t > temperatures[stack[-1]]:\n            prev = stack.pop()\n            res[prev] = i - prev\n        stack.append(i)\n    return res",
      "java": "class Solution {\n    public int[] dailyTemperatures(int[] temperatures) {\n        int[] res = new int[temperatures.length];\n        Stack<Integer> stack = new Stack<>();\n        for (int i = 0; i < temperatures.length; i++) {\n            while (!stack.isEmpty() && temperatures[i] > temperatures[stack.peek()]) {\n                int prev = stack.pop();\n                res[prev] = i - prev;\n            }\n            stack.push(i);\n        }\n        return res;\n    }\n}"
    },
    "solved": false,
    "bookmarked": false
  },
  {
    "id": "code-24",
    "title": "Evaluate Reverse Polish Notation",
    "difficulty": "Intermediate",
    "topic": "Stacks & Queues",
    "category": "Math & Number Theory",
    "description": "You are given an array of strings `tokens` that represents an arithmetic expression in a Reverse Polish Notation (postfix). Evaluate the expression. Return an integer that represents the value of the expression. Valid operators are `+`, `-`, `*`, and `/`. Division truncates toward zero.",
    "constraints": "1 <= tokens.length <= 10^4\ntokens[i] is either an operator or an integer in range [-200, 200].",
    "examples": [
      {
        "input": "tokens = [\"2\",\"1\",\"+\",\"3\",\"*\"]",
        "output": "9",
        "explanation": "((2 + 1) * 3) = 9"
      },
      {
        "input": "tokens = [\"4\",\"13\",\"5\",\"/\",\"+\"]",
        "output": "6",
        "explanation": "(4 + (13 / 5)) = 6"
      }
    ],
    "fnName": "evalRPN",
    "starterCode": "function evalRPN(tokens) {\n  // Write your code here\n  return 0;\n}",
    "solutionCode": "function evalRPN(tokens) {\n  const stack = [];\n  for (const token of tokens) {\n    if (token === '+') stack.push(stack.pop() + stack.pop());\n    else if (token === '-') {\n      const b = stack.pop(), a = stack.pop();\n      stack.push(a - b);\n    } else if (token === '*') stack.push(stack.pop() * stack.pop());\n    else if (token === '/') {\n      const b = stack.pop(), a = stack.pop();\n      stack.push(Math.trunc(a / b));\n    } else {\n      stack.push(Number(token));\n    }\n  }\n  return stack[0];\n}",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "hints": [
      "Use a Stack.",
      "Push numbers onto the stack as you encounter them.",
      "When encountering an operator, pop the top two numbers, apply the operation, and push the result back (remember operand order for subtraction and division!)."
    ],
    "testCases": [
      {
        "input": [
          [
            "2",
            "1",
            "+",
            "3",
            "*"
          ]
        ],
        "expected": 9
      },
      {
        "input": [
          [
            "4",
            "13",
            "5",
            "/",
            "+"
          ]
        ],
        "expected": 6
      },
      {
        "input": [
          [
            "10",
            "6",
            "9",
            "3",
            "+",
            "-11",
            "*",
            "/",
            "*",
            "17",
            "+",
            "5",
            "+"
          ]
        ],
        "expected": 22
      }
    ],
    "starterCodes": {
      "javascript": "function evalRPN(tokens) {\n  // Write your code here\n  return 0;\n}",
      "python": "def eval_rpn(tokens: list[str]) -> int:\n    # Write your code here\n    return 0",
      "java": "class Solution {\n    public int evalRPN(String[] tokens) {\n        // Write your code here\n        return 0;\n    }\n}"
    },
    "solutionCodes": {
      "javascript": "function evalRPN(tokens) {\n  const stack = [];\n  for (const token of tokens) {\n    if (token === '+') stack.push(stack.pop() + stack.pop());\n    else if (token === '-') {\n      const b = stack.pop(), a = stack.pop();\n      stack.push(a - b);\n    } else if (token === '*') stack.push(stack.pop() * stack.pop());\n    else if (token === '/') {\n      const b = stack.pop(), a = stack.pop();\n      stack.push(Math.trunc(a / b));\n    } else {\n      stack.push(Number(token));\n    }\n  }\n  return stack[0];\n}",
      "python": "def eval_rpn(tokens: list[str]) -> int:\n    stack = []\n    for t in tokens:\n        if t == '+': stack.append(stack.pop() + stack.pop())\n        elif t == '-':\n            b, a = stack.pop(), stack.pop(); stack.append(a - b)\n        elif t == '*': stack.append(stack.pop() * stack.pop())\n        elif t == '/':\n            b, a = stack.pop(), stack.pop(); stack.append(int(a / b))\n        else: stack.append(int(t))\n    return stack[0]",
      "java": "class Solution {\n    public int evalRPN(String[] tokens) {\n        Stack<Integer> stack = new Stack<>();\n        for (String t : tokens) {\n            if (t.equals(\"+\")) stack.push(stack.pop() + stack.pop());\n            else if (t.equals(\"-\")) { int b = stack.pop(), a = stack.pop(); stack.push(a - b); }\n            else if (t.equals(\"*\")) stack.push(stack.pop() * stack.pop());\n            else if (t.equals(\"/\")) { int b = stack.pop(), a = stack.pop(); stack.push(a / b); }\n            else stack.push(Integer.parseInt(t));\n        }\n        return stack.pop();\n    }\n}"
    },
    "solved": false,
    "bookmarked": false
  },
  {
    "id": "code-25",
    "title": "Subsets Generator (Power Set)",
    "difficulty": "Intermediate",
    "topic": "Recursion & Backtracking",
    "category": "Arrays & Strings",
    "description": "Given an integer array `nums` of unique elements, return all possible subsets (the power set). The solution set must not contain duplicate subsets. Return the solution in any order.",
    "constraints": "1 <= nums.length <= 10\n-10 <= nums[i] <= 10\nAll numbers of nums are unique.",
    "examples": [
      {
        "input": "nums = [1,2,3]",
        "output": "[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]",
        "explanation": "All 2^3 = 8 subsets."
      },
      {
        "input": "nums = [0]",
        "output": "[[],[0]]",
        "explanation": "2^1 = 2 subsets."
      }
    ],
    "fnName": "subsets",
    "starterCode": "function subsets(nums) {\n  // Write your code here\n  return [];\n}",
    "solutionCode": "function subsets(nums) {\n  const res = [];\n  function backtrack(start, path) {\n    res.push([...path]);\n    for (let i = start; i < nums.length; i++) {\n      path.push(nums[i]);\n      backtrack(i + 1, path);\n      path.pop();\n    }\n  }\n  backtrack(0, []);\n  return res;\n}",
    "timeComplexity": "O(2^N)",
    "spaceComplexity": "O(N) (recursion stack)",
    "hints": [
      "For each element, you have two choices: include it or exclude it.",
      "Use recursive backtracking with a current path array.",
      "Add a copy of `path` to the result at every recursive step."
    ],
    "testCases": [
      {
        "input": [
          [
            1,
            2,
            3
          ]
        ],
        "expected": [
          [],
          [
            1
          ],
          [
            1,
            2
          ],
          [
            1,
            2,
            3
          ],
          [
            1,
            3
          ],
          [
            2
          ],
          [
            2,
            3
          ],
          [
            3
          ]
        ]
      },
      {
        "input": [
          [
            0
          ]
        ],
        "expected": [
          [],
          [
            0
          ]
        ]
      },
      {
        "input": [
          [
            1,
            2
          ]
        ],
        "expected": [
          [],
          [
            1
          ],
          [
            1,
            2
          ],
          [
            2
          ]
        ]
      }
    ],
    "starterCodes": {
      "javascript": "function subsets(nums) {\n  // Write your code here\n  return [];\n}",
      "python": "def subsets(nums: list[int]) -> list[list[int]]:\n    # Write your code here\n    return []",
      "java": "class Solution {\n    public List<List<Integer>> subsets(int[] nums) {\n        // Write your code here\n        return new ArrayList<>();\n    }\n}"
    },
    "solutionCodes": {
      "javascript": "function subsets(nums) {\n  const res = [];\n  function backtrack(start, path) {\n    res.push([...path]);\n    for (let i = start; i < nums.length; i++) {\n      path.push(nums[i]);\n      backtrack(i + 1, path);\n      path.pop();\n    }\n  }\n  backtrack(0, []);\n  return res;\n}",
      "python": "def subsets(nums: list[int]) -> list[list[int]]:\n    res = []\n    def backtrack(start, path):\n        res.append(path[:])\n        for i in range(start, len(nums)):\n            path.append(nums[i])\n            backtrack(i + 1, path)\n            path.pop()\n    backtrack(0, [])\n    return res",
      "java": "class Solution {\n    public List<List<Integer>> subsets(int[] nums) {\n        List<List<Integer>> res = new ArrayList<>();\n        backtrack(0, nums, new ArrayList<>(), res);\n        return res;\n    }\n    private void backtrack(int start, int[] nums, List<Integer> path, List<List<Integer>> res) {\n        res.add(new ArrayList<>(path));\n        for (int i = start; i < nums.length; i++) {\n            path.add(nums[i]);\n            backtrack(i + 1, nums, path, res);\n            path.remove(path.size() - 1);\n        }\n    }\n}"
    },
    "solved": false,
    "bookmarked": false
  },
  {
    "id": "code-26",
    "title": "Permutations Generator",
    "difficulty": "Intermediate",
    "topic": "Recursion & Backtracking",
    "category": "Arrays & Strings",
    "description": "Given an array `nums` of distinct integers, return all the possible permutations. You can return the answer in any order.",
    "constraints": "1 <= nums.length <= 6\n-10 <= nums[i] <= 10\nAll integers of nums are unique.",
    "examples": [
      {
        "input": "nums = [1,2,3]",
        "output": "[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]",
        "explanation": "All 3! = 6 permutations."
      },
      {
        "input": "nums = [0,1]",
        "output": "[[0,1],[1,0]]",
        "explanation": "2 permutations."
      }
    ],
    "fnName": "permute",
    "starterCode": "function permute(nums) {\n  // Return all permutations\n  return [];\n}",
    "solutionCode": "function permute(nums) {\n  const res = [];\n  function backtrack(path, used) {\n    if (path.length === nums.length) {\n      res.push([...path]);\n      return;\n    }\n    for (let i = 0; i < nums.length; i++) {\n      if (used[i]) continue;\n      used[i] = true;\n      path.push(nums[i]);\n      backtrack(path, used);\n      path.pop();\n      used[i] = false;\n    }\n  }\n  backtrack([], new Array(nums.length).fill(false));\n  return res;\n}",
    "timeComplexity": "O(N * N!)",
    "spaceComplexity": "O(N)",
    "hints": [
      "Use backtracking to build permutations candidate by candidate.",
      "Keep a boolean `used` array to track which elements are already in the current permutation.",
      "When the path length matches the input length, add it to the final result."
    ],
    "testCases": [
      {
        "input": [
          [
            1,
            2,
            3
          ]
        ],
        "expected": [
          [
            1,
            2,
            3
          ],
          [
            1,
            3,
            2
          ],
          [
            2,
            1,
            3
          ],
          [
            2,
            3,
            1
          ],
          [
            3,
            1,
            2
          ],
          [
            3,
            2,
            1
          ]
        ]
      },
      {
        "input": [
          [
            0,
            1
          ]
        ],
        "expected": [
          [
            0,
            1
          ],
          [
            1,
            0
          ]
        ]
      },
      {
        "input": [
          [
            1
          ]
        ],
        "expected": [
          [
            1
          ]
        ]
      }
    ],
    "starterCodes": {
      "javascript": "function permute(nums) {\n  // Return all permutations\n  return [];\n}",
      "python": "def permute(nums: list[int]) -> list[list[int]]:\n    # Write your code here\n    return []",
      "java": "class Solution {\n    public List<List<Integer>> permute(int[] nums) {\n        // Write your code here\n        return new ArrayList<>();\n    }\n}"
    },
    "solutionCodes": {
      "javascript": "function permute(nums) {\n  const res = [];\n  function backtrack(path, used) {\n    if (path.length === nums.length) {\n      res.push([...path]);\n      return;\n    }\n    for (let i = 0; i < nums.length; i++) {\n      if (used[i]) continue;\n      used[i] = true;\n      path.push(nums[i]);\n      backtrack(path, used);\n      path.pop();\n      used[i] = false;\n    }\n  }\n  backtrack([], new Array(nums.length).fill(false));\n  return res;\n}",
      "python": "def permute(nums: list[int]) -> list[list[int]]:\n    res = []\n    def backtrack(path, used):\n        if len(path) == len(nums):\n            res.append(path[:]); return\n        for i, n in enumerate(nums):\n            if used[i]: continue\n            used[i] = True\n            path.append(n)\n            backtrack(path, used)\n            path.pop()\n            used[i] = False\n    backtrack([], [False] * len(nums))\n    return res",
      "java": "class Solution {\n    public List<List<Integer>> permute(int[] nums) {\n        List<List<Integer>> res = new ArrayList<>();\n        backtrack(new ArrayList<>(), new boolean[nums.length], nums, res);\n        return res;\n    }\n    private void backtrack(List<Integer> path, boolean[] used, int[] nums, List<List<Integer>> res) {\n        if (path.size() == nums.length) { res.add(new ArrayList<>(path)); return; }\n        for (int i = 0; i < nums.length; i++) {\n            if (used[i]) continue;\n            used[i] = true; path.add(nums[i]);\n            backtrack(path, used, nums, res);\n            path.remove(path.size() - 1); used[i] = false;\n        }\n    }\n}"
    },
    "solved": false,
    "bookmarked": false
  },
  {
    "id": "code-27",
    "title": "Coin Change (Fewest Coins DP)",
    "difficulty": "Intermediate",
    "topic": "Dynamic Programming",
    "category": "Algorithms",
    "description": "You are given an integer array `coins` representing coins of different denominations and an integer `amount` representing a total amount of money. Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.",
    "constraints": "1 <= coins.length <= 12\n1 <= coins[i] <= 2^31 - 1\n0 <= amount <= 10^4",
    "examples": [
      {
        "input": "coins = [1,2,5], amount = 11",
        "output": "3",
        "explanation": "11 = 5 + 5 + 1 (3 coins)"
      },
      {
        "input": "coins = [2], amount = 3",
        "output": "-1",
        "explanation": "Cannot make amount 3 with coin 2."
      }
    ],
    "fnName": "coinChange",
    "starterCode": "function coinChange(coins, amount) {\n  // Return min coins or -1\n  return -1;\n}",
    "solutionCode": "function coinChange(coins, amount) {\n  const dp = new Array(amount + 1).fill(Infinity);\n  dp[0] = 0;\n  for (let i = 1; i <= amount; i++) {\n    for (const coin of coins) {\n      if (i - coin >= 0) {\n        dp[i] = Math.min(dp[i], dp[i - coin] + 1);\n      }\n    }\n  }\n  return dp[amount] === Infinity ? -1 : dp[amount];\n}",
    "timeComplexity": "O(amount * coins.length)",
    "spaceComplexity": "O(amount)",
    "hints": [
      "Define `dp[i]` as the minimum number of coins needed to make amount `i`.",
      "Base case: `dp[0] = 0`.",
      "Transition: `dp[i] = min(dp[i], dp[i - coin] + 1)` for each coin where `i >= coin`."
    ],
    "testCases": [
      {
        "input": [
          [
            1,
            2,
            5
          ],
          11
        ],
        "expected": 3
      },
      {
        "input": [
          [
            2
          ],
          3
        ],
        "expected": -1
      },
      {
        "input": [
          [
            1
          ],
          0
        ],
        "expected": 0
      }
    ],
    "starterCodes": {
      "javascript": "function coinChange(coins, amount) {\n  // Return min coins or -1\n  return -1;\n}",
      "python": "def coin_change(coins: list[int], amount: int) -> int:\n    # Write your code here\n    return -1",
      "java": "class Solution {\n    public int coinChange(int[] coins, int amount) {\n        // Write your code here\n        return -1;\n    }\n}"
    },
    "solutionCodes": {
      "javascript": "function coinChange(coins, amount) {\n  const dp = new Array(amount + 1).fill(Infinity);\n  dp[0] = 0;\n  for (let i = 1; i <= amount; i++) {\n    for (const coin of coins) {\n      if (i - coin >= 0) {\n        dp[i] = Math.min(dp[i], dp[i - coin] + 1);\n      }\n    }\n  }\n  return dp[amount] === Infinity ? -1 : dp[amount];\n}",
      "python": "def coin_change(coins: list[int], amount: int) -> int:\n    dp = [float('inf')] * (amount + 1)\n    dp[0] = 0\n    for i in range(1, amount + 1):\n        for c in coins:\n            if i - c >= 0:\n                dp[i] = min(dp[i], dp[i - c] + 1)\n    return dp[amount] if dp[amount] != float('inf') else -1",
      "java": "class Solution {\n    public int coinChange(int[] coins, int amount) {\n        int[] dp = new int[amount + 1];\n        Arrays.fill(dp, amount + 1);\n        dp[0] = 0;\n        for (int i = 1; i <= amount; i++) {\n            for (int c : coins) {\n                if (i - c >= 0) dp[i] = Math.min(dp[i], dp[i - c] + 1);\n            }\n        }\n        return dp[amount] > amount ? -1 : dp[amount];\n    }\n}"
    },
    "solved": false,
    "bookmarked": false
  },
  {
    "id": "code-28",
    "title": "Search in Rotated Sorted Array",
    "difficulty": "Intermediate",
    "topic": "Binary Search",
    "category": "Arrays & Strings",
    "description": "There is an integer array `nums` sorted in ascending order (with distinct values). Prior to being passed to your function, `nums` is possibly rotated at an unknown pivot index. Given `nums` and integer `target`, return the index of `target` if it is in `nums`, or -1 if it is not in `nums`. You must write an algorithm with O(log n) runtime complexity.",
    "constraints": "1 <= nums.length <= 5000\n-10^4 <= nums[i], target <= 10^4\nAll values of nums are unique.",
    "examples": [
      {
        "input": "nums = [4,5,6,7,0,1,2], target = 0",
        "output": "4",
        "explanation": "Target 0 is at index 4."
      },
      {
        "input": "nums = [4,5,6,7,0,1,2], target = 3",
        "output": "-1",
        "explanation": "3 is not present."
      }
    ],
    "fnName": "searchRotated",
    "starterCode": "function searchRotated(nums, target) {\n  // Write your code with O(log N) runtime\n  return -1;\n}",
    "solutionCode": "function searchRotated(nums, target) {\n  let low = 0, high = nums.length - 1;\n  while (low <= high) {\n    const mid = Math.floor((low + high) / 2);\n    if (nums[mid] === target) return mid;\n    if (nums[low] <= nums[mid]) {\n      if (nums[low] <= target && target < nums[mid]) high = mid - 1;\n      else low = mid + 1;\n    } else {\n      if (nums[mid] < target && target <= nums[high]) low = mid + 1;\n      else high = mid - 1;\n    }\n  }\n  return -1;\n}",
    "timeComplexity": "O(log N)",
    "spaceComplexity": "O(1)",
    "hints": [
      "In any rotated sorted array, dividing it in half at `mid` guarantees that at least ONE half is normally sorted.",
      "Check if `nums[low] <= nums[mid]`: if true, the left half is sorted; otherwise, the right half is sorted.",
      "Determine if `target` falls within the normally sorted half to decide which direction to branch."
    ],
    "testCases": [
      {
        "input": [
          [
            4,
            5,
            6,
            7,
            0,
            1,
            2
          ],
          0
        ],
        "expected": 4
      },
      {
        "input": [
          [
            4,
            5,
            6,
            7,
            0,
            1,
            2
          ],
          3
        ],
        "expected": -1
      },
      {
        "input": [
          [
            1
          ],
          0
        ],
        "expected": -1
      }
    ],
    "starterCodes": {
      "javascript": "function searchRotated(nums, target) {\n  // Write your code with O(log N) runtime\n  return -1;\n}",
      "python": "def search_rotated(nums: list[int], target: int) -> int:\n    # Write your code here\n    return -1",
      "java": "class Solution {\n    public int search(int[] nums, int target) {\n        // Write your code here\n        return -1;\n    }\n}"
    },
    "solutionCodes": {
      "javascript": "function searchRotated(nums, target) {\n  let low = 0, high = nums.length - 1;\n  while (low <= high) {\n    const mid = Math.floor((low + high) / 2);\n    if (nums[mid] === target) return mid;\n    if (nums[low] <= nums[mid]) {\n      if (nums[low] <= target && target < nums[mid]) high = mid - 1;\n      else low = mid + 1;\n    } else {\n      if (nums[mid] < target && target <= nums[high]) low = mid + 1;\n      else high = mid - 1;\n    }\n  }\n  return -1;\n}",
      "python": "def search_rotated(nums: list[int], target: int) -> int:\n    low, high = 0, len(nums) - 1\n    while low <= high:\n        mid = (low + high) // 2\n        if nums[mid] == target: return mid\n        if nums[low] <= nums[mid]:\n            if nums[low] <= target < nums[mid]: high = mid - 1\n            else: low = mid + 1\n        else:\n            if nums[mid] < target <= nums[high]: low = mid + 1\n            else: high = mid - 1\n    return -1",
      "java": "class Solution {\n    public int search(int[] nums, int target) {\n        int l = 0, r = nums.length - 1;\n        while (l <= r) {\n            int mid = l + (r - l) / 2;\n            if (nums[mid] == target) return mid;\n            if (nums[l] <= nums[mid]) {\n                if (nums[l] <= target && target < nums[mid]) r = mid - 1;\n                else l = mid + 1;\n            } else {\n                if (nums[mid] < target && target <= nums[r]) l = mid + 1;\n                else r = mid - 1;\n            }\n        }\n        return -1;\n    }\n}"
    },
    "solved": false,
    "bookmarked": false
  },
  {
    "id": "code-29",
    "title": "Number of 1 Bits (Hamming Weight)",
    "difficulty": "Intermediate",
    "topic": "Bit Manipulation",
    "category": "Math & Number Theory",
    "description": "Given a positive integer `n`, write a function that returns the number of set bits (1s) in its binary representation (also known as the Hamming weight).",
    "constraints": "1 <= n <= 2^31 - 1",
    "examples": [
      {
        "input": "n = 11",
        "output": "3",
        "explanation": "11 in binary is 1011 (three set bits)."
      },
      {
        "input": "n = 128",
        "output": "1",
        "explanation": "128 in binary is 10000000 (one set bit)."
      }
    ],
    "fnName": "hammingWeight",
    "starterCode": "function hammingWeight(n) {\n  // Return number of 1-bits\n  return 0;\n}",
    "solutionCode": "function hammingWeight(n) {\n  let count = 0;\n  while (n > 0) {\n    n = n & (n - 1);\n    count++;\n  }\n  return count;\n}",
    "timeComplexity": "O(number of set bits)",
    "spaceComplexity": "O(1)",
    "hints": [
      "Brian Kernighan's algorithm: `n & (n - 1)` flips the least significant set bit to 0.",
      "Repeat this operation until n becomes 0.",
      "The number of iterations equals the number of set bits."
    ],
    "testCases": [
      {
        "input": [
          11
        ],
        "expected": 3
      },
      {
        "input": [
          128
        ],
        "expected": 1
      },
      {
        "input": [
          2147483645
        ],
        "expected": 30
      }
    ],
    "starterCodes": {
      "javascript": "function hammingWeight(n) {\n  // Return number of 1-bits\n  return 0;\n}",
      "python": "def hamming_weight(n: int) -> int:\n    # Write your code here\n    return 0",
      "java": "class Solution {\n    public int hammingWeight(int n) {\n        // Write your code here\n        return 0;\n    }\n}"
    },
    "solutionCodes": {
      "javascript": "function hammingWeight(n) {\n  let count = 0;\n  while (n > 0) {\n    n = n & (n - 1);\n    count++;\n  }\n  return count;\n}",
      "python": "def hamming_weight(n: int) -> int:\n    count = 0\n    while n:\n        n &= (n - 1)\n        count += 1\n    return count",
      "java": "class Solution {\n    public int hammingWeight(int n) {\n        int count = 0;\n        while (n != 0) {\n            n &= (n - 1);\n            count++;\n        }\n        return count;\n    }\n}"
    },
    "solved": false,
    "bookmarked": false
  },
  {
    "id": "code-30",
    "title": "Number of Connected Islands (Grid BFS/DFS)",
    "difficulty": "Intermediate",
    "topic": "Graphs (BFS, DFS)",
    "category": "Algorithms",
    "description": "Given an `m x n` 2D binary grid `grid` which represents a map of `'1'`s (land) and `'0'`s (water), return the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.",
    "constraints": "m == grid.length\nn == grid[i].length\n1 <= m, n <= 300\ngrid[i][j] is '0' or '1'.",
    "examples": [
      {
        "input": "grid = [[\"1\",\"1\",\"1\",\"1\",\"0\"],[\"1\",\"1\",\"0\",\"1\",\"0\"],[\"1\",\"1\",\"0\",\"0\",\"0\"],[\"0\",\"0\",\"0\",\"0\",\"0\"]]",
        "output": "1",
        "explanation": "1 connected island."
      },
      {
        "input": "grid = [[\"1\",\"1\",\"0\",\"0\",\"0\"],[\"1\",\"1\",\"0\",\"0\",\"0\"],[\"0\",\"0\",\"1\",\"0\",\"0\"],[\"0\",\"0\",\"0\",\"1\",\"1\"]]",
        "output": "3",
        "explanation": "3 separate islands."
      }
    ],
    "fnName": "numIslands",
    "starterCode": "function numIslands(grid) {\n  // Return total count of islands\n  return 0;\n}",
    "solutionCode": "function numIslands(grid) {\n  if (!grid || grid.length === 0) return 0;\n  let islands = 0;\n  const rows = grid.length, cols = grid[0].length;\n  function dfs(r, c) {\n    if (r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] !== '1') return;\n    grid[r][c] = '0'; // mark visited\n    dfs(r + 1, c);\n    dfs(r - 1, c);\n    dfs(r, c + 1);\n    dfs(r, c - 1);\n  }\n  for (let r = 0; r < rows; r++) {\n    for (let c = 0; c < cols; c++) {\n      if (grid[r][c] === '1') {\n        islands++;\n        dfs(r, c);\n      }\n    }\n  }\n  return islands;\n}",
    "timeComplexity": "O(M * N)",
    "spaceComplexity": "O(M * N) (recursion stack)",
    "hints": [
      "Iterate through each cell in the 2D grid.",
      "When encountering a land cell ('1'), increment your island count and launch a DFS or BFS to visit all connected land cells.",
      "Mark visited cells as '0' to avoid visiting them again."
    ],
    "testCases": [
      {
        "input": [
          [
            [
              "1",
              "1",
              "1",
              "1",
              "0"
            ],
            [
              "1",
              "1",
              "0",
              "1",
              "0"
            ],
            [
              "1",
              "1",
              "0",
              "0",
              "0"
            ],
            [
              "0",
              "0",
              "0",
              "0",
              "0"
            ]
          ]
        ],
        "expected": 1
      },
      {
        "input": [
          [
            [
              "1",
              "1",
              "0",
              "0",
              "0"
            ],
            [
              "1",
              "1",
              "0",
              "0",
              "0"
            ],
            [
              "0",
              "0",
              "1",
              "0",
              "0"
            ],
            [
              "0",
              "0",
              "0",
              "1",
              "1"
            ]
          ]
        ],
        "expected": 3
      },
      {
        "input": [
          [
            [
              "0",
              "0"
            ],
            [
              "0",
              "0"
            ]
          ]
        ],
        "expected": 0
      }
    ],
    "starterCodes": {
      "javascript": "function numIslands(grid) {\n  // Return total count of islands\n  return 0;\n}",
      "python": "def num_islands(grid: list[list[str]]) -> int:\n    # Write your code here\n    return 0",
      "java": "class Solution {\n    public int numIslands(char[][] grid) {\n        // Write your code here\n        return 0;\n    }\n}"
    },
    "solutionCodes": {
      "javascript": "function numIslands(grid) {\n  if (!grid || grid.length === 0) return 0;\n  let islands = 0;\n  const rows = grid.length, cols = grid[0].length;\n  function dfs(r, c) {\n    if (r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] !== '1') return;\n    grid[r][c] = '0'; // mark visited\n    dfs(r + 1, c);\n    dfs(r - 1, c);\n    dfs(r, c + 1);\n    dfs(r, c - 1);\n  }\n  for (let r = 0; r < rows; r++) {\n    for (let c = 0; c < cols; c++) {\n      if (grid[r][c] === '1') {\n        islands++;\n        dfs(r, c);\n      }\n    }\n  }\n  return islands;\n}",
      "python": "def num_islands(grid: list[list[str]]) -> int:\n    if not grid: return 0\n    rows, cols = len(grid), len(grid[0])\n    islands = 0\n    def dfs(r, c):\n        if r < 0 or c < 0 or r >= rows or c >= cols or grid[r][c] != '1': return\n        grid[r][c] = '0'\n        dfs(r + 1, c); dfs(r - 1, c); dfs(r, c + 1); dfs(r, c - 1)\n    for r in range(rows):\n        for c in range(cols):\n            if grid[r][c] == '1':\n                islands += 1\n                dfs(r, c)\n    return islands",
      "java": "class Solution {\n    public int numIslands(char[][] grid) {\n        int count = 0;\n        for (int r = 0; r < grid.length; r++) {\n            for (int c = 0; c < grid[0].length; c++) {\n                if (grid[r][c] == '1') {\n                    count++;\n                    dfs(grid, r, c);\n                }\n            }\n        }\n        return count;\n    }\n    private void dfs(char[][] g, int r, int c) {\n        if (r < 0 || c < 0 || r >= g.length || c >= g[0].length || g[r][c] != '1') return;\n        g[r][c] = '0';\n        dfs(g, r+1, c); dfs(g, r-1, c); dfs(g, r, c+1); dfs(g, r, c-1);\n    }\n}"
    },
    "solved": false,
    "bookmarked": false
  },
  {
    "id": "code-31",
    "title": "House Robber DP",
    "difficulty": "Intermediate",
    "topic": "Dynamic Programming",
    "category": "Algorithms",
    "description": "You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. Adjacent houses have security systems connected and will automatically contact the police if two adjacent houses were broken into on the same night. Given an integer array `nums` representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.",
    "constraints": "1 <= nums.length <= 100\n0 <= nums[i] <= 400",
    "examples": [
      {
        "input": "nums = [1,2,3,1]",
        "output": "4",
        "explanation": "Rob house 1 (money = 1) and then rob house 3 (money = 3). Total = 1 + 3 = 4."
      },
      {
        "input": "nums = [2,7,9,3,1]",
        "output": "12",
        "explanation": "Rob house 1 (2), house 3 (9), house 5 (1). Total = 2 + 9 + 1 = 12."
      }
    ],
    "fnName": "rob",
    "starterCode": "function rob(nums) {\n  // Write your code here\n  return 0;\n}",
    "solutionCode": "function rob(nums) {\n  let robPrev = 0, robCurr = 0;\n  for (const n of nums) {\n    const temp = Math.max(robCurr, robPrev + n);\n    robPrev = robCurr;\n    robCurr = temp;\n  }\n  return robCurr;\n}",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)",
    "hints": [
      "For each house i, you can either: (1) Rob house i + max money up to house i-2, OR (2) Skip house i and take max money up to house i-1.",
      "Recurrence: `dp[i] = max(dp[i-1], dp[i-2] + nums[i])`.",
      "Notice you only need the previous two values, so you can optimize space to O(1)."
    ],
    "testCases": [
      {
        "input": [
          [
            1,
            2,
            3,
            1
          ]
        ],
        "expected": 4
      },
      {
        "input": [
          [
            2,
            7,
            9,
            3,
            1
          ]
        ],
        "expected": 12
      },
      {
        "input": [
          [
            2,
            1
          ]
        ],
        "expected": 2
      }
    ],
    "starterCodes": {
      "javascript": "function rob(nums) {\n  // Write your code here\n  return 0;\n}",
      "python": "def rob(nums: list[int]) -> int:\n    # Write your code here\n    return 0",
      "java": "class Solution {\n    public int rob(int[] nums) {\n        // Write your code here\n        return 0;\n    }\n}"
    },
    "solutionCodes": {
      "javascript": "function rob(nums) {\n  let robPrev = 0, robCurr = 0;\n  for (const n of nums) {\n    const temp = Math.max(robCurr, robPrev + n);\n    robPrev = robCurr;\n    robCurr = temp;\n  }\n  return robCurr;\n}",
      "python": "def rob(nums: list[int]) -> int:\n    prev = curr = 0\n    for n in nums:\n        prev, curr = curr, max(curr, prev + n)\n    return curr",
      "java": "class Solution {\n    public int rob(int[] nums) {\n        int prev = 0, curr = 0;\n        for (int n : nums) {\n            int tmp = Math.max(curr, prev + n);\n            prev = curr;\n            curr = tmp;\n        }\n        return curr;\n    }\n}"
    },
    "solved": false,
    "bookmarked": false
  },
  {
    "id": "code-32",
    "title": "Jump Game Greedy Reachability",
    "difficulty": "Intermediate",
    "topic": "Greedy Algorithms",
    "category": "Arrays & Strings",
    "description": "You are given an integer array `nums`. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position. Return `true` if you can reach the last index, or `false` otherwise.",
    "constraints": "1 <= nums.length <= 10^4\n0 <= nums[i] <= 10^5",
    "examples": [
      {
        "input": "nums = [2,3,1,1,4]",
        "output": "true",
        "explanation": "Jump 1 step from index 0 to 1, then 3 steps to the last index."
      },
      {
        "input": "nums = [3,2,1,0,4]",
        "output": "false",
        "explanation": "You will always arrive at index 3. Its maximum jump length is 0."
      }
    ],
    "fnName": "canJump",
    "starterCode": "function canJump(nums) {\n  // Write your code here\n  return false;\n}",
    "solutionCode": "function canJump(nums) {\n  let maxReach = 0;\n  for (let i = 0; i < nums.length; i++) {\n    if (i > maxReach) return false;\n    maxReach = Math.max(maxReach, i + nums[i]);\n    if (maxReach >= nums.length - 1) return true;\n  }\n  return true;\n}",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)",
    "hints": [
      "Maintain the maximum index `maxReach` you can currently reach.",
      "If your current index `i > maxReach`, you are stuck and can never progress further.",
      "Update `maxReach = max(maxReach, i + nums[i])`."
    ],
    "testCases": [
      {
        "input": [
          [
            2,
            3,
            1,
            1,
            4
          ]
        ],
        "expected": true
      },
      {
        "input": [
          [
            3,
            2,
            1,
            0,
            4
          ]
        ],
        "expected": false
      },
      {
        "input": [
          [
            0
          ]
        ],
        "expected": true
      }
    ],
    "starterCodes": {
      "javascript": "function canJump(nums) {\n  // Write your code here\n  return false;\n}",
      "python": "def can_jump(nums: list[int]) -> bool:\n    # Write your code here\n    return False",
      "java": "class Solution {\n    public boolean canJump(int[] nums) {\n        // Write your code here\n        return false;\n    }\n}"
    },
    "solutionCodes": {
      "javascript": "function canJump(nums) {\n  let maxReach = 0;\n  for (let i = 0; i < nums.length; i++) {\n    if (i > maxReach) return false;\n    maxReach = Math.max(maxReach, i + nums[i]);\n    if (maxReach >= nums.length - 1) return true;\n  }\n  return true;\n}",
      "python": "def can_jump(nums: list[int]) -> bool:\n    max_reach = 0\n    for i, jump in enumerate(nums):\n        if i > max_reach: return False\n        max_reach = max(max_reach, i + jump)\n    return True",
      "java": "class Solution {\n    public boolean canJump(int[] nums) {\n        int maxReach = 0;\n        for (int i = 0; i < nums.length; i++) {\n            if (i > maxReach) return false;\n            maxReach = Math.max(maxReach, i + nums[i]);\n        }\n        return true;\n    }\n}"
    },
    "solved": false,
    "bookmarked": false
  },
  {
    "id": "code-33",
    "title": "Longest Consecutive Sequence",
    "difficulty": "Intermediate",
    "topic": "Hash Maps & Sets",
    "category": "Arrays & Strings",
    "description": "Given an unsorted array of integers `nums`, return the length of the longest consecutive elements sequence. You must write an algorithm that runs in O(n) time.",
    "constraints": "0 <= nums.length <= 10^5\n-10^9 <= nums[i] <= 10^9",
    "examples": [
      {
        "input": "nums = [100,4,200,1,3,2]",
        "output": "4",
        "explanation": "The longest consecutive elements sequence is [1, 2, 3, 4]. Its length is 4."
      },
      {
        "input": "nums = [0,3,7,2,5,8,4,6,0,1]",
        "output": "9",
        "explanation": "Sequence 0 through 8 has length 9."
      }
    ],
    "fnName": "longestConsecutive",
    "starterCode": "function longestConsecutive(nums) {\n  // Write O(N) solution\n  return 0;\n}",
    "solutionCode": "function longestConsecutive(nums) {\n  const numSet = new Set(nums);\n  let maxStreak = 0;\n  for (const num of numSet) {\n    if (!numSet.has(num - 1)) {\n      let curr = num;\n      let streak = 1;\n      while (numSet.has(curr + 1)) {\n        curr++;\n        streak++;\n      }\n      maxStreak = Math.max(maxStreak, streak);\n    }\n  }\n  return maxStreak;\n}",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "hints": [
      "Store all numbers in a HashSet for O(1) membership lookups.",
      "Only attempt to count a sequence starting at number `x` if `x - 1` does NOT exist in the set (i.e. `x` is the start of a streak).",
      "Count upwards while `x + 1` is in the set."
    ],
    "testCases": [
      {
        "input": [
          [
            100,
            4,
            200,
            1,
            3,
            2
          ]
        ],
        "expected": 4
      },
      {
        "input": [
          [
            0,
            3,
            7,
            2,
            5,
            8,
            4,
            6,
            0,
            1
          ]
        ],
        "expected": 9
      },
      {
        "input": [
          []
        ],
        "expected": 0
      }
    ],
    "starterCodes": {
      "javascript": "function longestConsecutive(nums) {\n  // Write O(N) solution\n  return 0;\n}",
      "python": "def longest_consecutive(nums: list[int]) -> int:\n    # Write your code here\n    return 0",
      "java": "class Solution {\n    public int longestConsecutive(int[] nums) {\n        // Write your code here\n        return 0;\n    }\n}"
    },
    "solutionCodes": {
      "javascript": "function longestConsecutive(nums) {\n  const numSet = new Set(nums);\n  let maxStreak = 0;\n  for (const num of numSet) {\n    if (!numSet.has(num - 1)) {\n      let curr = num;\n      let streak = 1;\n      while (numSet.has(curr + 1)) {\n        curr++;\n        streak++;\n      }\n      maxStreak = Math.max(maxStreak, streak);\n    }\n  }\n  return maxStreak;\n}",
      "python": "def longest_consecutive(nums: list[int]) -> int:\n    num_set = set(nums)\n    max_streak = 0\n    for n in num_set:\n        if n - 1 not in num_set:\n            curr = n\n            streak = 1\n            while curr + 1 in num_set:\n                curr += 1; streak += 1\n            max_streak = max(max_streak, streak)\n    return max_streak",
      "java": "class Solution {\n    public int longestConsecutive(int[] nums) {\n        Set<Integer> set = new HashSet<>();\n        for (int n : nums) set.add(n);\n        int max = 0;\n        for (int n : set) {\n            if (!set.contains(n - 1)) {\n                int curr = n, streak = 1;\n                while (set.contains(curr + 1)) { curr++; streak++; }\n                max = Math.max(max, streak);\n            }\n        }\n        return max;\n    }\n}"
    },
    "solved": false,
    "bookmarked": false
  },
  {
    "id": "code-34",
    "title": "Kth Largest Element in an Array",
    "difficulty": "Intermediate",
    "topic": "Arrays & Strings",
    "category": "Algorithms",
    "description": "Given an integer array `nums` and an integer `k`, return the `k`-th largest element in the array. Can you solve it without full O(N log N) sorting?",
    "constraints": "1 <= k <= nums.length <= 10^5\n-10^4 <= nums[i] <= 10^4",
    "examples": [
      {
        "input": "nums = [3,2,1,5,6,4], k = 2",
        "output": "5",
        "explanation": "2nd largest is 5."
      },
      {
        "input": "nums = [3,2,3,1,2,4,5,5,6], k = 4",
        "output": "4",
        "explanation": "4th largest is 4."
      }
    ],
    "fnName": "findKthLargest",
    "starterCode": "function findKthLargest(nums, k) {\n  // Write your code here\n  return 0;\n}",
    "solutionCode": "function findKthLargest(nums, k) {\n  nums.sort((a, b) => b - a);\n  return nums[k - 1];\n}",
    "timeComplexity": "O(N log K) with min-heap or QuickSelect O(N) average",
    "spaceComplexity": "O(K)",
    "hints": [
      "A Min-Heap of size K maintains the K largest elements seen so far.",
      "QuickSelect algorithm partitions around a pivot to find the element in O(N) average time.",
      "The top of a min-heap of size K is the K-th largest element."
    ],
    "testCases": [
      {
        "input": [
          [
            3,
            2,
            1,
            5,
            6,
            4
          ],
          2
        ],
        "expected": 5
      },
      {
        "input": [
          [
            3,
            2,
            3,
            1,
            2,
            4,
            5,
            5,
            6
          ],
          4
        ],
        "expected": 4
      },
      {
        "input": [
          [
            1
          ],
          1
        ],
        "expected": 1
      }
    ],
    "starterCodes": {
      "javascript": "function findKthLargest(nums, k) {\n  // Write your code here\n  return 0;\n}",
      "python": "def find_kth_largest(nums: list[int], k: int) -> int:\n    # Write your code here\n    return 0",
      "java": "class Solution {\n    public int findKthLargest(int[] nums, int k) {\n        // Write your code here\n        return 0;\n    }\n}"
    },
    "solutionCodes": {
      "javascript": "function findKthLargest(nums, k) {\n  nums.sort((a, b) => b - a);\n  return nums[k - 1];\n}",
      "python": "def find_kth_largest(nums: list[int], k: int) -> int:\n    import heapq\n    return heapq.nlargest(k, nums)[-1]",
      "java": "class Solution {\n    public int findKthLargest(int[] nums, int k) {\n        PriorityQueue<Integer> pq = new PriorityQueue<>();\n        for (int n : nums) {\n            pq.offer(n);\n            if (pq.size() > k) pq.poll();\n        }\n        return pq.peek();\n    }\n}"
    },
    "solved": false,
    "bookmarked": false
  },
  {
    "id": "code-35",
    "title": "Rotting Oranges Matrix BFS",
    "difficulty": "Intermediate",
    "topic": "Graphs (BFS, DFS)",
    "category": "Algorithms",
    "description": "You are given an `m x n` `grid` where each cell can have one of three values: 0 representing empty cell, 1 representing fresh orange, 2 representing rotten orange. Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten. Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.",
    "constraints": "m == grid.length\nn == grid[i].length\n1 <= m, n <= 10\ngrid[i][j] is 0, 1, or 2.",
    "examples": [
      {
        "input": "grid = [[2,1,1],[1,1,0],[0,1,1]]",
        "output": "4",
        "explanation": "All oranges rot in 4 minutes."
      },
      {
        "input": "grid = [[2,1,1],[0,1,1],[1,0,1]]",
        "output": "-1",
        "explanation": "Orange at (2,0) cannot be reached."
      }
    ],
    "fnName": "orangesRotting",
    "starterCode": "function orangesRotting(grid) {\n  // Return minutes or -1\n  return -1;\n}",
    "solutionCode": "function orangesRotting(grid) {\n  const rows = grid.length, cols = grid[0].length;\n  const queue = [];\n  let fresh = 0;\n  for (let r = 0; r < rows; r++) {\n    for (let c = 0; c < cols; c++) {\n      if (grid[r][c] === 2) queue.push([r, c, 0]);\n      else if (grid[r][c] === 1) fresh++;\n    }\n  }\n  if (fresh === 0) return 0;\n  let maxMinutes = 0;\n  const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];\n  while (queue.length > 0) {\n    const [r, c, mins] = queue.shift();\n    maxMinutes = Math.max(maxMinutes, mins);\n    for (const [dr, dc] of dirs) {\n      const nr = r + dr, nc = c + dc;\n      if (nr >= 0 && nc >= 0 && nr < rows && nc < cols && grid[nr][nc] === 1) {\n        grid[nr][nc] = 2;\n        fresh--;\n        queue.push([nr, nc, mins + 1]);\n      }\n    }\n  }\n  return fresh === 0 ? maxMinutes : -1;\n}",
    "timeComplexity": "O(M * N)",
    "spaceComplexity": "O(M * N)",
    "hints": [
      "This is a multi-source Breadth-First Search (BFS) problem.",
      "Add all initially rotten oranges to the queue at minute 0, and count the total fresh oranges.",
      "Expand minute by minute, infecting adjacent fresh oranges and decreasing the fresh count."
    ],
    "testCases": [
      {
        "input": [
          [
            [
              2,
              1,
              1
            ],
            [
              1,
              1,
              0
            ],
            [
              0,
              1,
              1
            ]
          ]
        ],
        "expected": 4
      },
      {
        "input": [
          [
            [
              2,
              1,
              1
            ],
            [
              0,
              1,
              1
            ],
            [
              1,
              0,
              1
            ]
          ]
        ],
        "expected": -1
      },
      {
        "input": [
          [
            [
              0,
              2
            ]
          ]
        ],
        "expected": 0
      }
    ],
    "starterCodes": {
      "javascript": "function orangesRotting(grid) {\n  // Return minutes or -1\n  return -1;\n}",
      "python": "def oranges_rotting(grid: list[list[int]]) -> int:\n    # Write your code here\n    return -1",
      "java": "class Solution {\n    public int orangesRotting(int[][] grid) {\n        // Write your code here\n        return -1;\n    }\n}"
    },
    "solutionCodes": {
      "javascript": "function orangesRotting(grid) {\n  const rows = grid.length, cols = grid[0].length;\n  const queue = [];\n  let fresh = 0;\n  for (let r = 0; r < rows; r++) {\n    for (let c = 0; c < cols; c++) {\n      if (grid[r][c] === 2) queue.push([r, c, 0]);\n      else if (grid[r][c] === 1) fresh++;\n    }\n  }\n  if (fresh === 0) return 0;\n  let maxMinutes = 0;\n  const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];\n  while (queue.length > 0) {\n    const [r, c, mins] = queue.shift();\n    maxMinutes = Math.max(maxMinutes, mins);\n    for (const [dr, dc] of dirs) {\n      const nr = r + dr, nc = c + dc;\n      if (nr >= 0 && nc >= 0 && nr < rows && nc < cols && grid[nr][nc] === 1) {\n        grid[nr][nc] = 2;\n        fresh--;\n        queue.push([nr, nc, mins + 1]);\n      }\n    }\n  }\n  return fresh === 0 ? maxMinutes : -1;\n}",
      "python": "def oranges_rotting(grid: list[list[int]]) -> int:\n    from collections import deque\n    rows, cols = len(grid), len(grid[0])\n    q = deque()\n    fresh = 0\n    for r in range(rows):\n        for c in range(cols):\n            if grid[r][c] == 2: q.append((r, c, 0))\n            elif grid[r][c] == 1: fresh += 1\n    if fresh == 0: return 0\n    max_mins = 0\n    while q:\n        r, c, mins = q.popleft()\n        max_mins = max(max_mins, mins)\n        for dr, dc in ((1, 0), (-1, 0), (0, 1), (0, -1)):\n            nr, nc = r + dr, c + dc\n            if 0 <= nr < rows and 0 <= nc < cols and grid[nr][nc] == 1:\n                grid[nr][nc] = 2\n                fresh -= 1\n                q.append((nr, nc, mins + 1))\n    return max_mins if fresh == 0 else -1",
      "java": "class Solution {\n    public int orangesRotting(int[][] grid) {\n        int rows = grid.length, cols = grid[0].length, fresh = 0;\n        Queue<int[]> q = new LinkedList<>();\n        for (int r = 0; r < rows; r++) {\n            for (int c = 0; c < cols; c++) {\n                if (grid[r][c] == 2) q.offer(new int[]{r, c, 0});\n                else if (grid[r][c] == 1) fresh++;\n            }\n        }\n        if (fresh == 0) return 0;\n        int mins = 0;\n        int[][] dirs = {{1,0},{-1,0},{0,1},{0,-1}};\n        while (!q.isEmpty()) {\n            int[] cur = q.poll();\n            mins = Math.max(mins, cur[2]);\n            for (int[] d : dirs) {\n                int nr = cur[0] + d[0], nc = cur[1] + d[1];\n                if (nr >= 0 && nc >= 0 && nr < rows && nc < cols && grid[nr][nc] == 1) {\n                    grid[nr][nc] = 2; fresh--;\n                    q.offer(new int[]{nr, nc, cur[2] + 1});\n                }\n            }\n        }\n        return fresh == 0 ? mins : -1;\n    }\n}"
    },
    "solved": false,
    "bookmarked": false
  },
  {
    "id": "code-36",
    "title": "Trapping Rain Water",
    "difficulty": "Advanced",
    "topic": "Two Pointers & Sliding Window",
    "category": "Arrays & Strings",
    "description": "Given `n` non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.",
    "constraints": "n == height.length\n1 <= n <= 2 * 10^4\n0 <= height[i] <= 10^5",
    "examples": [
      {
        "input": "height = [0,1,0,2,1,0,1,3,2,1,2,1]",
        "output": "6",
        "explanation": "6 units of rainwater trapped."
      },
      {
        "input": "height = [4,2,0,3,2,5]",
        "output": "9",
        "explanation": "9 units of rainwater trapped."
      }
    ],
    "fnName": "trap",
    "starterCode": "function trap(height) {\n  // Write your code here\n  return 0;\n}",
    "solutionCode": "function trap(height) {\n  let left = 0, right = height.length - 1;\n  let leftMax = 0, rightMax = 0;\n  let water = 0;\n  while (left < right) {\n    if (height[left] < height[right]) {\n      if (height[left] >= leftMax) leftMax = height[left];\n      else water += leftMax - height[left];\n      left++;\n    } else {\n      if (height[right] >= rightMax) rightMax = height[right];\n      else water += rightMax - height[right];\n      right--;\n    }\n  }\n  return water;\n}",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)",
    "hints": [
      "At any position i, trapped water is `max(0, min(max_left, max_right) - height[i])`.",
      "Use two pointers moving inward from both edges.",
      "Always advance the pointer with the smaller current boundary height."
    ],
    "testCases": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            1,
            0,
            1,
            3,
            2,
            1,
            2,
            1
          ]
        ],
        "expected": 6
      },
      {
        "input": [
          [
            4,
            2,
            0,
            3,
            2,
            5
          ]
        ],
        "expected": 9
      },
      {
        "input": [
          [
            1,
            2
          ]
        ],
        "expected": 0
      }
    ],
    "starterCodes": {
      "javascript": "function trap(height) {\n  // Write your code here\n  return 0;\n}",
      "python": "def trap(height: list[int]) -> int:\n    # Write your code here\n    return 0",
      "java": "class Solution {\n    public int trap(int[] height) {\n        // Write your code here\n        return 0;\n    }\n}"
    },
    "solutionCodes": {
      "javascript": "function trap(height) {\n  let left = 0, right = height.length - 1;\n  let leftMax = 0, rightMax = 0;\n  let water = 0;\n  while (left < right) {\n    if (height[left] < height[right]) {\n      if (height[left] >= leftMax) leftMax = height[left];\n      else water += leftMax - height[left];\n      left++;\n    } else {\n      if (height[right] >= rightMax) rightMax = height[right];\n      else water += rightMax - height[right];\n      right--;\n    }\n  }\n  return water;\n}",
      "python": "def trap(height: list[int]) -> int:\n    l, r = 0, len(height) - 1\n    l_max = r_max = water = 0\n    while l < r:\n        if height[l] < height[r]:\n            if height[l] >= l_max: l_max = height[l]\n            else: water += l_max - height[l]\n            l += 1\n        else:\n            if height[r] >= r_max: r_max = height[r]\n            else: water += r_max - height[r]\n            r -= 1\n    return water",
      "java": "class Solution {\n    public int trap(int[] height) {\n        int l = 0, r = height.length - 1, lMax = 0, rMax = 0, water = 0;\n        while (l < r) {\n            if (height[l] < height[r]) {\n                if (height[l] >= lMax) lMax = height[l];\n                else water += lMax - height[l];\n                l++;\n            } else {\n                if (height[r] >= rMax) rMax = height[r];\n                else water += rMax - height[r];\n                r--;\n            }\n        }\n        return water;\n    }\n}"
    },
    "solved": false,
    "bookmarked": false
  },
  {
    "id": "code-37",
    "title": "Minimum Window Substring",
    "difficulty": "Advanced",
    "topic": "Two Pointers & Sliding Window",
    "category": "Hash Maps & Sets",
    "description": "Given two strings `s` and `t` of lengths `m` and `n` respectively, return the minimum window substring of `s` such that every character in `t` (including duplicates) is included in the window. If there is no such substring, return the empty string `\"\"`.",
    "constraints": "m == s.length\nn == t.length\n1 <= m, n <= 10^5\ns and t consist of uppercase and lowercase English letters.",
    "examples": [
      {
        "input": "s = \"ADOBECODEBANC\", t = \"ABC\"",
        "output": "\"BANC\"",
        "explanation": "\"BANC\" is minimum window."
      },
      {
        "input": "s = \"a\", t = \"a\"",
        "output": "\"a\"",
        "explanation": "Entire string is window."
      },
      {
        "input": "s = \"a\", t = \"aa\"",
        "output": "\"\"",
        "explanation": "Not enough \"a\"s."
      }
    ],
    "fnName": "minWindow",
    "starterCode": "function minWindow(s, t) {\n  // Write your code here\n  return '';\n}",
    "solutionCode": "function minWindow(s, t) {\n  if (s.length < t.length) return '';\n  const target = {};\n  for (const c of t) target[c] = (target[c] || 0) + 1;\n  let matched = 0, required = Object.keys(target).length;\n  const window = {};\n  let minLen = Infinity, startIdx = 0;\n  let left = 0;\n  for (let right = 0; right < s.length; right++) {\n    const c = s[right];\n    window[c] = (window[c] || 0) + 1;\n    if (target[c] && window[c] === target[c]) matched++;\n    while (matched === required) {\n      if (right - left + 1 < minLen) {\n        minLen = right - left + 1;\n        startIdx = left;\n      }\n      const removeChar = s[left];\n      window[removeChar]--;\n      if (target[removeChar] && window[removeChar] < target[removeChar]) matched--;\n      left++;\n    }\n  }\n  return minLen === Infinity ? '' : s.substring(startIdx, startIdx + minLen);\n}",
    "timeComplexity": "O(M + N)",
    "spaceComplexity": "O(distinct chars)",
    "hints": [
      "Use a sliding window `[left, right]` and expand `right` until all characters from `t` are present.",
      "Once valid, contract `left` to find the minimal window while maintaining validity.",
      "Use character frequency maps and track the count of matched unique characters."
    ],
    "testCases": [
      {
        "input": [
          "ADOBECODEBANC",
          "ABC"
        ],
        "expected": "BANC"
      },
      {
        "input": [
          "a",
          "a"
        ],
        "expected": "a"
      },
      {
        "input": [
          "a",
          "aa"
        ],
        "expected": ""
      }
    ],
    "starterCodes": {
      "javascript": "function minWindow(s, t) {\n  // Write your code here\n  return '';\n}",
      "python": "def min_window(s: str, t: str) -> str:\n    # Write your code here\n    return ''",
      "java": "class Solution {\n    public String minWindow(String s, String t) {\n        // Write your code here\n        return \"\";\n    }\n}"
    },
    "solutionCodes": {
      "javascript": "function minWindow(s, t) {\n  if (s.length < t.length) return '';\n  const target = {};\n  for (const c of t) target[c] = (target[c] || 0) + 1;\n  let matched = 0, required = Object.keys(target).length;\n  const window = {};\n  let minLen = Infinity, startIdx = 0;\n  let left = 0;\n  for (let right = 0; right < s.length; right++) {\n    const c = s[right];\n    window[c] = (window[c] || 0) + 1;\n    if (target[c] && window[c] === target[c]) matched++;\n    while (matched === required) {\n      if (right - left + 1 < minLen) {\n        minLen = right - left + 1;\n        startIdx = left;\n      }\n      const removeChar = s[left];\n      window[removeChar]--;\n      if (target[removeChar] && window[removeChar] < target[removeChar]) matched--;\n      left++;\n    }\n  }\n  return minLen === Infinity ? '' : s.substring(startIdx, startIdx + minLen);\n}",
      "python": "def min_window(s: str, t: str) -> str:\n    from collections import Counter\n    if len(s) < len(t): return ''\n    target = Counter(t)\n    window = Counter()\n    matched = 0; required = len(target)\n    min_len = float('inf'); start = 0; l = 0\n    for r, c in enumerate(s):\n        window[c] += 1\n        if c in target and window[c] == target[c]: matched += 1\n        while matched == required:\n            if r - l + 1 < min_len:\n                min_len = r - l + 1; start = l\n            window[s[l]] -= 1\n            if s[l] in target and window[s[l]] < target[s[l]]: matched -= 1\n            l += 1\n    return '' if min_len == float('inf') else s[start:start + min_len]",
      "java": "class Solution {\n    public String minWindow(String s, String t) {\n        if (s.length() < t.length()) return \"\";\n        Map<Character, Integer> target = new HashMap<>();\n        for (char c : t.toCharArray()) target.put(c, target.getOrDefault(c, 0) + 1);\n        Map<Character, Integer> window = new HashMap<>();\n        int matched = 0, required = target.size(), l = 0, minLen = Integer.MAX_VALUE, start = 0;\n        for (int r = 0; r < s.length(); r++) {\n            char c = s.charAt(r);\n            window.put(c, window.getOrDefault(c, 0) + 1);\n            if (target.containsKey(c) && window.get(c).intValue() == target.get(c).intValue()) matched++;\n            while (matched == required) {\n                if (r - l + 1 < minLen) { minLen = r - l + 1; start = l; }\n                char rem = s.charAt(l);\n                window.put(rem, window.get(rem) - 1);\n                if (target.containsKey(rem) && window.get(rem) < target.get(rem)) matched--;\n                l++;\n            }\n        }\n        return minLen == Integer.MAX_VALUE ? \"\" : s.substring(start, start + minLen);\n    }\n}"
    },
    "solved": false,
    "bookmarked": false
  },
  {
    "id": "code-38",
    "title": "Merge k Sorted Lists (Priority Queue)",
    "difficulty": "Advanced",
    "topic": "Linked Lists",
    "category": "Data Structures",
    "description": "You are given an array of `k` linked-lists `lists`, each linked-list is sorted in ascending order (represented as arrays). Merge all the linked-lists into one sorted list and return it.",
    "constraints": "k == lists.length\n0 <= k <= 10^4\n0 <= lists[i].length <= 500\n-10^4 <= lists[i][j] <= 10^4\nlists[i] is sorted in ascending order.",
    "examples": [
      {
        "input": "lists = [[1,4,5],[1,3,4],[2,6]]",
        "output": "[1,1,2,3,4,4,5,6]",
        "explanation": "Merged in sorted order."
      },
      {
        "input": "lists = []",
        "output": "[]",
        "explanation": "Empty list."
      }
    ],
    "fnName": "mergeKLists",
    "starterCode": "function mergeKLists(lists) {\n  // Return merged sorted array\n  return [];\n}",
    "solutionCode": "function mergeKLists(lists) {\n  const res = [];\n  for (const list of lists) {\n    for (const val of list) res.push(val);\n  }\n  return res.sort((a, b) => a - b);\n}",
    "timeComplexity": "O(N log K) with min-heap or Divide & Conquer",
    "spaceComplexity": "O(N)",
    "hints": [
      "You can use a Min-Heap of size K storing the head of each list.",
      "Alternatively, use Divide and Conquer: merge pairs of lists iteratively like Merge Sort.",
      "Merging pairs reduces time to O(N log K) where N is total nodes and K is number of lists."
    ],
    "testCases": [
      {
        "input": [
          [
            [
              1,
              4,
              5
            ],
            [
              1,
              3,
              4
            ],
            [
              2,
              6
            ]
          ]
        ],
        "expected": [
          1,
          1,
          2,
          3,
          4,
          4,
          5,
          6
        ]
      },
      {
        "input": [
          []
        ],
        "expected": []
      },
      {
        "input": [
          [
            []
          ]
        ],
        "expected": []
      }
    ],
    "starterCodes": {
      "javascript": "function mergeKLists(lists) {\n  // Return merged sorted array\n  return [];\n}",
      "python": "def merge_k_lists(lists: list[list[int]]) -> list[int]:\n    # Write your code here\n    return []",
      "java": "class Solution {\n    public int[] mergeKLists(int[][] lists) {\n        // Write your code here\n        return new int[]{};\n    }\n}"
    },
    "solutionCodes": {
      "javascript": "function mergeKLists(lists) {\n  const res = [];\n  for (const list of lists) {\n    for (const val of list) res.push(val);\n  }\n  return res.sort((a, b) => a - b);\n}",
      "python": "def merge_k_lists(lists: list[list[int]]) -> list[int]:\n    import heapq\n    res = []\n    for l in lists: res.extend(l)\n    return sorted(res)",
      "java": "class Solution {\n    public int[] mergeKLists(int[][] lists) {\n        List<Integer> list = new ArrayList<>();\n        for (int[] arr : lists) for (int n : arr) list.add(n);\n        Collections.sort(list);\n        return list.stream().mapToInt(i->i).toArray();\n    }\n}"
    },
    "solved": false,
    "bookmarked": false
  },
  {
    "id": "code-39",
    "title": "Largest Rectangle in Histogram (Monotonic Stack)",
    "difficulty": "Advanced",
    "topic": "Stacks & Queues",
    "category": "Arrays & Strings",
    "description": "Given an array of integers `heights` representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.",
    "constraints": "1 <= heights.length <= 10^5\n0 <= heights[i] <= 10^4",
    "examples": [
      {
        "input": "heights = [2,1,5,6,2,3]",
        "output": "10",
        "explanation": "The largest rectangle has area = 10 (bars 5 and 6 with height 5 and width 2)."
      },
      {
        "input": "heights = [2,4]",
        "output": "4",
        "explanation": "Largest rectangle area is 4."
      }
    ],
    "fnName": "largestRectangleArea",
    "starterCode": "function largestRectangleArea(heights) {\n  // Write your code here\n  return 0;\n}",
    "solutionCode": "function largestRectangleArea(heights) {\n  const stack = []; // indices\n  let maxArea = 0;\n  const h = [...heights, 0];\n  for (let i = 0; i < h.length; i++) {\n    while (stack.length > 0 && h[i] < h[stack[stack.length - 1]]) {\n      const height = h[stack.pop()];\n      const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;\n      maxArea = Math.max(maxArea, height * width);\n    }\n    stack.push(i);\n  }\n  return maxArea;\n}",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "hints": [
      "Use a Monotonic Increasing Stack of bar indices.",
      "When encountering a bar shorter than the bar at the top of the stack, pop from the stack.",
      "The popped bar's height is bounded on the left by the new top of the stack, and on the right by the current index `i`."
    ],
    "testCases": [
      {
        "input": [
          [
            2,
            1,
            5,
            6,
            2,
            3
          ]
        ],
        "expected": 10
      },
      {
        "input": [
          [
            2,
            4
          ]
        ],
        "expected": 4
      },
      {
        "input": [
          [
            1
          ]
        ],
        "expected": 1
      }
    ],
    "starterCodes": {
      "javascript": "function largestRectangleArea(heights) {\n  // Write your code here\n  return 0;\n}",
      "python": "def largest_rectangle_area(heights: list[int]) -> int:\n    # Write your code here\n    return 0",
      "java": "class Solution {\n    public int largestRectangleArea(int[] heights) {\n        // Write your code here\n        return 0;\n    }\n}"
    },
    "solutionCodes": {
      "javascript": "function largestRectangleArea(heights) {\n  const stack = []; // indices\n  let maxArea = 0;\n  const h = [...heights, 0];\n  for (let i = 0; i < h.length; i++) {\n    while (stack.length > 0 && h[i] < h[stack[stack.length - 1]]) {\n      const height = h[stack.pop()];\n      const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;\n      maxArea = Math.max(maxArea, height * width);\n    }\n    stack.push(i);\n  }\n  return maxArea;\n}",
      "python": "def largest_rectangle_area(heights: list[int]) -> int:\n    stack = []\n    max_area = 0\n    h = heights + [0]\n    for i, x in enumerate(h):\n        while stack and x < h[stack[-1]]:\n            height = h[stack.pop()]\n            width = i if not stack else i - stack[-1] - 1\n            max_area = max(max_area, height * width)\n        stack.append(i)\n    return max_area",
      "java": "class Solution {\n    public int largestRectangleArea(int[] heights) {\n        Stack<Integer> stack = new Stack<>();\n        int maxArea = 0, n = heights.length;\n        for (int i = 0; i <= n; i++) {\n            int h = (i == n) ? 0 : heights[i];\n            while (!stack.isEmpty() && h < heights[stack.peek()]) {\n                int height = heights[stack.pop()];\n                int width = stack.isEmpty() ? i : i - stack.peek() - 1;\n                maxArea = Math.max(maxArea, height * width);\n            }\n            stack.push(i);\n        }\n        return maxArea;\n    }\n}"
    },
    "solved": false,
    "bookmarked": false
  },
  {
    "id": "code-40",
    "title": "N-Queens Solver",
    "difficulty": "Advanced",
    "topic": "Recursion & Backtracking",
    "category": "Algorithms",
    "description": "The n-queens puzzle is the problem of placing `n` queens on an `n x n` chessboard such that no two queens attack each other. Given an integer `n`, return the total number of distinct solutions to the n-queens puzzle.",
    "constraints": "1 <= n <= 9",
    "examples": [
      {
        "input": "n = 4",
        "output": "2",
        "explanation": "There are two distinct solutions to the 4-queens puzzle."
      },
      {
        "input": "n = 1",
        "output": "1",
        "explanation": "Single solution."
      }
    ],
    "fnName": "totalNQueens",
    "starterCode": "function totalNQueens(n) {\n  // Return number of distinct solutions\n  return 0;\n}",
    "solutionCode": "function totalNQueens(n) {\n  let count = 0;\n  const cols = new Set();\n  const diag1 = new Set(); // r - c\n  const diag2 = new Set(); // r + c\n  function backtrack(r) {\n    if (r === n) { count++; return; }\n    for (let c = 0; c < n; c++) {\n      if (cols.has(c) || diag1.has(r - c) || diag2.has(r + c)) continue;\n      cols.add(c); diag1.add(r - c); diag2.add(r + c);\n      backtrack(r + 1);\n      cols.delete(c); diag1.delete(r - c); diag2.delete(r + c);\n    }\n  }\n  backtrack(0);\n  return count;\n}",
    "timeComplexity": "O(N!)",
    "spaceComplexity": "O(N)",
    "hints": [
      "Place one queen per row: row by row recursion guarantees no two queens share the same row.",
      "Track occupied columns, positive diagonals (`r + c`), and negative diagonals (`r - c`).",
      "Backtrack by removing the queen and trying the next available column."
    ],
    "testCases": [
      {
        "input": [
          4
        ],
        "expected": 2
      },
      {
        "input": [
          1
        ],
        "expected": 1
      },
      {
        "input": [
          5
        ],
        "expected": 10
      }
    ],
    "starterCodes": {
      "javascript": "function totalNQueens(n) {\n  // Return number of distinct solutions\n  return 0;\n}",
      "python": "def total_n_queens(n: int) -> int:\n    # Write your code here\n    return 0",
      "java": "class Solution {\n    public int totalNQueens(int n) {\n        // Write your code here\n        return 0;\n    }\n}"
    },
    "solutionCodes": {
      "javascript": "function totalNQueens(n) {\n  let count = 0;\n  const cols = new Set();\n  const diag1 = new Set(); // r - c\n  const diag2 = new Set(); // r + c\n  function backtrack(r) {\n    if (r === n) { count++; return; }\n    for (let c = 0; c < n; c++) {\n      if (cols.has(c) || diag1.has(r - c) || diag2.has(r + c)) continue;\n      cols.add(c); diag1.add(r - c); diag2.add(r + c);\n      backtrack(r + 1);\n      cols.delete(c); diag1.delete(r - c); diag2.delete(r + c);\n    }\n  }\n  backtrack(0);\n  return count;\n}",
      "python": "def total_n_queens(n: int) -> int:\n    cols = set(); d1 = set(); d2 = set()\n    def backtrack(r):\n        if r == n: return 1\n        ans = 0\n        for c in range(n):\n            if c in cols or (r - c) in d1 or (r + c) in d2: continue\n            cols.add(c); d1.add(r - c); d2.add(r + c)\n            ans += backtrack(r + 1)\n            cols.remove(c); d1.remove(r - c); d2.remove(r + c)\n        return ans\n    return backtrack(0)",
      "java": "class Solution {\n    private int count = 0;\n    public int totalNQueens(int n) {\n        boolean[] cols = new boolean[n];\n        boolean[] d1 = new boolean[2 * n];\n        boolean[] d2 = new boolean[2 * n];\n        backtrack(0, n, cols, d1, d2);\n        return count;\n    }\n    private void backtrack(int r, int n, boolean[] cols, boolean[] d1, boolean[] d2) {\n        if (r == n) { count++; return; }\n        for (int c = 0; c < n; c++) {\n            int id1 = r - c + n, id2 = r + c;\n            if (cols[c] || d1[id1] || d2[id2]) continue;\n            cols[c] = d1[id1] = d2[id2] = true;\n            backtrack(r + 1, n, cols, d1, d2);\n            cols[c] = d1[id1] = d2[id2] = false;\n        }\n    }\n}"
    },
    "solved": false,
    "bookmarked": false
  },
  {
    "id": "code-41",
    "title": "Edit Distance (Levenshtein DP)",
    "difficulty": "Advanced",
    "topic": "Dynamic Programming",
    "category": "Arrays & Strings",
    "description": "Given two strings `word1` and `word2`, return the minimum number of operations required to convert `word1` to `word2`. You have the following three operations permitted on a word: Insert a character, Delete a character, Replace a character.",
    "constraints": "0 <= word1.length, word2.length <= 500\nword1 and word2 consist of lowercase English letters.",
    "examples": [
      {
        "input": "word1 = \"horse\", word2 = \"ros\"",
        "output": "3",
        "explanation": "horse -> rorse (replace 'h' with 'r') -> rose (remove 'r') -> ros (remove 'e')"
      },
      {
        "input": "word1 = \"intention\", word2 = \"execution\"",
        "output": "5",
        "explanation": "5 operations."
      }
    ],
    "fnName": "minDistance",
    "starterCode": "function minDistance(word1, word2) {\n  // Write your code here\n  return 0;\n}",
    "solutionCode": "function minDistance(word1, word2) {\n  const m = word1.length, n = word2.length;\n  const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));\n  for (let i = 0; i <= m; i++) dp[i][0] = i;\n  for (let j = 0; j <= n; j++) dp[0][j] = j;\n  for (let i = 1; i <= m; i++) {\n    for (let j = 1; j <= n; j++) {\n      if (word1[i - 1] === word2[j - 1]) dp[i][j] = dp[i - 1][j - 1];\n      else dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);\n    }\n  }\n  return dp[m][n];\n}",
    "timeComplexity": "O(M * N)",
    "spaceComplexity": "O(M * N)",
    "hints": [
      "Define `dp[i][j]` as the min distance between `word1[0..i-1]` and `word2[0..j-1]`.",
      "If `word1[i-1] == word2[j-1]`, no operation needed: `dp[i][j] = dp[i-1][j-1]`.",
      "Otherwise, take `1 + min(insert, delete, replace)`."
    ],
    "testCases": [
      {
        "input": [
          "horse",
          "ros"
        ],
        "expected": 3
      },
      {
        "input": [
          "intention",
          "execution"
        ],
        "expected": 5
      },
      {
        "input": [
          "",
          "a"
        ],
        "expected": 1
      }
    ],
    "starterCodes": {
      "javascript": "function minDistance(word1, word2) {\n  // Write your code here\n  return 0;\n}",
      "python": "def min_distance(word1: str, word2: str) -> int:\n    # Write your code here\n    return 0",
      "java": "class Solution {\n    public int minDistance(String word1, String word2) {\n        // Write your code here\n        return 0;\n    }\n}"
    },
    "solutionCodes": {
      "javascript": "function minDistance(word1, word2) {\n  const m = word1.length, n = word2.length;\n  const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));\n  for (let i = 0; i <= m; i++) dp[i][0] = i;\n  for (let j = 0; j <= n; j++) dp[0][j] = j;\n  for (let i = 1; i <= m; i++) {\n    for (let j = 1; j <= n; j++) {\n      if (word1[i - 1] === word2[j - 1]) dp[i][j] = dp[i - 1][j - 1];\n      else dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);\n    }\n  }\n  return dp[m][n];\n}",
      "python": "def min_distance(word1: str, word2: str) -> int:\n    m, n = len(word1), len(word2)\n    dp = [[0] * (n + 1) for _ in range(m + 1)]\n    for i in range(m + 1): dp[i][0] = i\n    for j in range(n + 1): dp[0][j] = j\n    for i in range(1, m + 1):\n        for j in range(1, n + 1):\n            if word1[i - 1] == word2[j - 1]: dp[i][j] = dp[i - 1][j - 1]\n            else: dp[i][j] = 1 + min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1])\n    return dp[m][n]",
      "java": "class Solution {\n    public int minDistance(String word1, String word2) {\n        int m = word1.length(), n = word2.length;\n        int[][] dp = new int[m + 1][n + 1];\n        for (int i = 0; i <= m; i++) dp[i][0] = i;\n        for (int j = 0; j <= n; j++) dp[0][j] = j;\n        for (int i = 1; i <= m; i++) {\n            for (int j = 1; j <= n; j++) {\n                if (word1.charAt(i - 1) == word2.charAt(j - 1)) dp[i][j] = dp[i - 1][j - 1];\n                else dp[i][j] = 1 + Math.min(dp[i - 1][j], Math.min(dp[i][j - 1], dp[i - 1][j - 1]));\n            }\n        }\n        return dp[m][n];\n    }\n}"
    },
    "solved": false,
    "bookmarked": false
  },
  {
    "id": "code-42",
    "title": "Longest Increasing Subsequence (Patience Sorting)",
    "difficulty": "Advanced",
    "topic": "Dynamic Programming",
    "category": "Binary Search",
    "description": "Given an integer array `nums`, return the length of the longest strictly increasing subsequence. You can achieve O(n log n) time complexity using binary search patience sorting.",
    "constraints": "1 <= nums.length <= 2500\n-10^4 <= nums[i] <= 10^4",
    "examples": [
      {
        "input": "nums = [10,9,2,5,3,7,101,18]",
        "output": "4",
        "explanation": "The longest increasing subsequence is [2, 3, 7, 101], therefore the length is 4."
      },
      {
        "input": "nums = [0,1,0,3,2,3]",
        "output": "4",
        "explanation": "[0, 1, 2, 3] length 4."
      }
    ],
    "fnName": "lengthOfLIS",
    "starterCode": "function lengthOfLIS(nums) {\n  // Write O(N log N) solution\n  return 0;\n}",
    "solutionCode": "function lengthOfLIS(nums) {\n  const tails = [];\n  for (const x of nums) {\n    let l = 0, r = tails.length;\n    while (l < r) {\n      const m = Math.floor((l + r) / 2);\n      if (tails[m] < x) l = m + 1;\n      else r = m;\n    }\n    tails[l] = x;\n  }\n  return tails.length;\n}",
    "timeComplexity": "O(N log N)",
    "spaceComplexity": "O(N)",
    "hints": [
      "Maintain an array `tails` where `tails[i]` stores the smallest tail of all increasing subsequences of length `i + 1`.",
      "For each number, binary search for its position in `tails`.",
      "Update or append to `tails` in O(log N) time per number."
    ],
    "testCases": [
      {
        "input": [
          [
            10,
            9,
            2,
            5,
            3,
            7,
            101,
            18
          ]
        ],
        "expected": 4
      },
      {
        "input": [
          [
            0,
            1,
            0,
            3,
            2,
            3
          ]
        ],
        "expected": 4
      },
      {
        "input": [
          [
            7,
            7,
            7,
            7,
            7,
            7,
            7
          ]
        ],
        "expected": 1
      }
    ],
    "starterCodes": {
      "javascript": "function lengthOfLIS(nums) {\n  // Write O(N log N) solution\n  return 0;\n}",
      "python": "def length_of_lis(nums: list[int]) -> int:\n    # Write your code here\n    return 0",
      "java": "class Solution {\n    public int lengthOfLIS(int[] nums) {\n        // Write your code here\n        return 0;\n    }\n}"
    },
    "solutionCodes": {
      "javascript": "function lengthOfLIS(nums) {\n  const tails = [];\n  for (const x of nums) {\n    let l = 0, r = tails.length;\n    while (l < r) {\n      const m = Math.floor((l + r) / 2);\n      if (tails[m] < x) l = m + 1;\n      else r = m;\n    }\n    tails[l] = x;\n  }\n  return tails.length;\n}",
      "python": "def length_of_lis(nums: list[int]) -> int:\n    import bisect\n    tails = []\n    for x in nums:\n        idx = bisect.bisect_left(tails, x)\n        if idx == len(tails): tails.append(x)\n        else: tails[idx] = x\n    return len(tails)",
      "java": "class Solution {\n    public int lengthOfLIS(int[] nums) {\n        int[] tails = new int[nums.length];\n        int size = 0;\n        for (int x : nums) {\n            int i = 0, j = size;\n            while (i != j) {\n                int m = (i + j) / 2;\n                if (tails[m] < x) i = m + 1; else j = m;\n            }\n            tails[i] = x;\n            if (i == size) ++size;\n        }\n        return size;\n    }\n}"
    },
    "solved": false,
    "bookmarked": false
  },
  {
    "id": "code-43",
    "title": "Median of Two Sorted Arrays",
    "difficulty": "Advanced",
    "topic": "Binary Search",
    "category": "Arrays & Strings",
    "description": "Given two sorted arrays `nums1` and `nums2` of size `m` and `n` respectively, return the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).",
    "constraints": "nums1.length == m\nnums2.length == n\n0 <= m, n <= 1000\n1 <= m + n <= 2000\n-10^6 <= nums1[i], nums2[i] <= 10^6",
    "examples": [
      {
        "input": "nums1 = [1,3], nums2 = [2]",
        "output": "2.0",
        "explanation": "Merged array = [1,2,3] and median is 2."
      },
      {
        "input": "nums1 = [1,2], nums2 = [3,4]",
        "output": "2.5",
        "explanation": "Merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5."
      }
    ],
    "fnName": "findMedianSortedArrays",
    "starterCode": "function findMedianSortedArrays(nums1, nums2) {\n  // Write O(log(M+N)) solution\n  return 0;\n}",
    "solutionCode": "function findMedianSortedArrays(nums1, nums2) {\n  if (nums1.length > nums2.length) return findMedianSortedArrays(nums2, nums1);\n  const m = nums1.length, n = nums2.length;\n  let low = 0, high = m;\n  while (low <= high) {\n    const pX = Math.floor((low + high) / 2);\n    const pY = Math.floor((m + n + 1) / 2) - pX;\n    const maxLeftX = pX === 0 ? -Infinity : nums1[pX - 1];\n    const minRightX = pX === m ? Infinity : nums1[pX];\n    const maxLeftY = pY === 0 ? -Infinity : nums2[pY - 1];\n    const minRightY = pY === n ? Infinity : nums2[pY];\n    if (maxLeftX <= minRightY && maxLeftY <= minRightX) {\n      if ((m + n) % 2 === 0) {\n        return (Math.max(maxLeftX, maxLeftY) + Math.min(minRightX, minRightY)) / 2;\n      } else {\n        return Math.max(maxLeftX, maxLeftY);\n      }\n    } else if (maxLeftX > minRightY) high = pX - 1;\n    else low = pX + 1;\n  }\n  return 0;\n}",
    "timeComplexity": "O(log(min(M, N)))",
    "spaceComplexity": "O(1)",
    "hints": [
      "Binary search on the smaller array to partition both arrays into equal halves.",
      "Partition condition: `maxLeftX <= minRightY` and `maxLeftY <= minRightX`.",
      "Once partitioned correctly, the median is either `max(maxLeftX, maxLeftY)` (if odd) or the average of left max and right min (if even)."
    ],
    "testCases": [
      {
        "input": [
          [
            1,
            3
          ],
          [
            2
          ]
        ],
        "expected": 2
      },
      {
        "input": [
          [
            1,
            2
          ],
          [
            3,
            4
          ]
        ],
        "expected": 2.5
      },
      {
        "input": [
          [
            0,
            0
          ],
          [
            0,
            0
          ]
        ],
        "expected": 0
      }
    ],
    "starterCodes": {
      "javascript": "function findMedianSortedArrays(nums1, nums2) {\n  // Write O(log(M+N)) solution\n  return 0;\n}",
      "python": "def find_median_sorted_arrays(nums1: list[int], nums2: list[int]) -> float:\n    # Write your code here\n    return 0.0",
      "java": "class Solution {\n    public double findMedianSortedArrays(int[] nums1, int[] nums2) {\n        // Write your code here\n        return 0.0;\n    }\n}"
    },
    "solutionCodes": {
      "javascript": "function findMedianSortedArrays(nums1, nums2) {\n  if (nums1.length > nums2.length) return findMedianSortedArrays(nums2, nums1);\n  const m = nums1.length, n = nums2.length;\n  let low = 0, high = m;\n  while (low <= high) {\n    const pX = Math.floor((low + high) / 2);\n    const pY = Math.floor((m + n + 1) / 2) - pX;\n    const maxLeftX = pX === 0 ? -Infinity : nums1[pX - 1];\n    const minRightX = pX === m ? Infinity : nums1[pX];\n    const maxLeftY = pY === 0 ? -Infinity : nums2[pY - 1];\n    const minRightY = pY === n ? Infinity : nums2[pY];\n    if (maxLeftX <= minRightY && maxLeftY <= minRightX) {\n      if ((m + n) % 2 === 0) {\n        return (Math.max(maxLeftX, maxLeftY) + Math.min(minRightX, minRightY)) / 2;\n      } else {\n        return Math.max(maxLeftX, maxLeftY);\n      }\n    } else if (maxLeftX > minRightY) high = pX - 1;\n    else low = pX + 1;\n  }\n  return 0;\n}",
      "python": "def find_median_sorted_arrays(nums1: list[int], nums2: list[int]) -> float:\n    if len(nums1) > len(nums2): nums1, nums2 = nums2, nums1\n    m, n = len(nums1), len(nums2)\n    low, high = 0, m\n    while low <= high:\n        pX = (low + high) // 2\n        pY = (m + n + 1) // 2 - pX\n        maxLeftX = float('-inf') if pX == 0 else nums1[pX - 1]\n        minRightX = float('inf') if pX == m else nums1[pX]\n        maxLeftY = float('-inf') if pY == 0 else nums2[pY - 1]\n        minRightY = float('inf') if pY == n else nums2[pY]\n        if maxLeftX <= minRightY and maxLeftY <= minRightX:\n            if (m + n) % 2 == 0:\n                return (max(maxLeftX, maxLeftY) + min(minRightX, minRightY)) / 2.0\n            else:\n                return float(max(maxLeftX, maxLeftY))\n        elif maxLeftX > minRightY: high = pX - 1\n        else: low = pX + 1\n    return 0.0",
      "java": "class Solution {\n    public double findMedianSortedArrays(int[] nums1, int[] nums2) {\n        if (nums1.length > nums2.length) return findMedianSortedArrays(nums2, nums1);\n        int m = nums1.length, n = nums2.length, low = 0, high = m;\n        while (low <= high) {\n            int pX = (low + high) / 2, pY = (m + n + 1) / 2 - pX;\n            int maxLeftX = (pX == 0) ? Integer.MIN_VALUE : nums1[pX - 1];\n            int minRightX = (pX == m) ? Integer.MAX_VALUE : nums1[pX];\n            int maxLeftY = (pY == 0) ? Integer.MIN_VALUE : nums2[pY - 1];\n            int minRightY = (pY == n) ? Integer.MAX_VALUE : nums2[pY];\n            if (maxLeftX <= minRightY && maxLeftY <= minRightX) {\n                if ((m + n) % 2 == 0) return ((double)Math.max(maxLeftX, maxLeftY) + Math.min(minRightX, minRightY)) / 2;\n                else return (double)Math.max(maxLeftX, maxLeftY);\n            } else if (maxLeftX > minRightY) high = pX - 1;\n            else low = pX + 1;\n        }\n        return 0.0;\n    }\n}"
    },
    "solved": false,
    "bookmarked": false
  },
  {
    "id": "code-44",
    "title": "Course Schedule II (Topological Sort)",
    "difficulty": "Advanced",
    "topic": "Graphs (BFS, DFS)",
    "category": "Algorithms",
    "description": "There are a total of `numCourses` courses you have to take, labeled from 0 to `numCourses - 1`. You are given an array `prerequisites` where `prerequisites[i] = [a, b]` indicates that you must take course `b` first if you want to take course `a`. Return the ordering of courses you should take to finish all courses. If it is impossible, return an empty array.",
    "constraints": "1 <= numCourses <= 2000\n0 <= prerequisites.length <= numCourses * (numCourses - 1)\nprerequisites[i].length == 2\nAll prerequisite pairs are distinct.",
    "examples": [
      {
        "input": "numCourses = 2, prerequisites = [[1,0]]",
        "output": "[0,1]",
        "explanation": "Take 0 then 1."
      },
      {
        "input": "numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]",
        "output": "[0,2,1,3]",
        "explanation": "[0,1,2,3] is also valid."
      }
    ],
    "fnName": "findOrder",
    "starterCode": "function findOrder(numCourses, prerequisites) {\n  // Return valid topological ordering or []\n  return [];\n}",
    "solutionCode": "function findOrder(numCourses, prerequisites) {\n  const inDegree = new Array(numCourses).fill(0);\n  const adj = Array.from({ length: numCourses }, () => []);\n  for (const [course, pre] of prerequisites) {\n    adj[pre].push(course);\n    inDegree[course]++;\n  }\n  const queue = [];\n  for (let i = 0; i < numCourses; i++) {\n    if (inDegree[i] === 0) queue.push(i);\n  }\n  const order = [];\n  while (queue.length > 0) {\n    const node = queue.shift();\n    order.push(node);\n    for (const neighbor of adj[node]) {\n      inDegree[neighbor]--;\n      if (inDegree[neighbor] === 0) queue.push(neighbor);\n    }\n  }\n  return order.length === numCourses ? order : [];\n}",
    "timeComplexity": "O(V + E)",
    "spaceComplexity": "O(V + E)",
    "hints": [
      "This is Kahn's Algorithm for Topological Sort on a Directed Graph.",
      "Compute the in-degree of every course (how many prerequisites it has).",
      "Enqueue all courses with in-degree 0, process them, and decrement neighbors' in-degrees."
    ],
    "testCases": [
      {
        "input": [
          2,
          [
            [
              1,
              0
            ]
          ]
        ],
        "expected": [
          0,
          1
        ]
      },
      {
        "input": [
          4,
          [
            [
              1,
              0
            ],
            [
              2,
              0
            ],
            [
              3,
              1
            ],
            [
              3,
              2
            ]
          ]
        ],
        "expected": [
          0,
          1,
          2,
          3
        ]
      },
      {
        "input": [
          2,
          [
            [
              1,
              0
            ],
            [
              0,
              1
            ]
          ]
        ],
        "expected": []
      }
    ],
    "starterCodes": {
      "javascript": "function findOrder(numCourses, prerequisites) {\n  // Return valid topological ordering or []\n  return [];\n}",
      "python": "def find_order(numCourses: int, prerequisites: list[list[int]]) -> list[int]:\n    # Write your code here\n    return []",
      "java": "class Solution {\n    public int[] findOrder(int numCourses, int[][] prerequisites) {\n        // Write your code here\n        return new int[]{};\n    }\n}"
    },
    "solutionCodes": {
      "javascript": "function findOrder(numCourses, prerequisites) {\n  const inDegree = new Array(numCourses).fill(0);\n  const adj = Array.from({ length: numCourses }, () => []);\n  for (const [course, pre] of prerequisites) {\n    adj[pre].push(course);\n    inDegree[course]++;\n  }\n  const queue = [];\n  for (let i = 0; i < numCourses; i++) {\n    if (inDegree[i] === 0) queue.push(i);\n  }\n  const order = [];\n  while (queue.length > 0) {\n    const node = queue.shift();\n    order.push(node);\n    for (const neighbor of adj[node]) {\n      inDegree[neighbor]--;\n      if (inDegree[neighbor] === 0) queue.push(neighbor);\n    }\n  }\n  return order.length === numCourses ? order : [];\n}",
      "python": "def find_order(numCourses: int, prerequisites: list[list[int]]) -> list[int]:\n    from collections import deque\n    adj = [[] for _ in range(numCourses)]\n    in_degree = [0] * numCourses\n    for dest, src in prerequisites:\n        adj[src].append(dest)\n        in_degree[dest] += 1\n    q = deque([i for i in range(numCourses) if in_degree[i] == 0])\n    order = []\n    while q:\n        node = q.popleft()\n        order.append(node)\n        for nbr in adj[node]:\n            in_degree[nbr] -= 1\n            if in_degree[nbr] == 0: q.append(nbr)\n    return order if len(order) == numCourses else []",
      "java": "class Solution {\n    public int[] findOrder(int numCourses, int[][] prerequisites) {\n        List<List<Integer>> adj = new ArrayList<>();\n        for (int i = 0; i < numCourses; i++) adj.add(new ArrayList<>());\n        int[] inDegree = new int[numCourses];\n        for (int[] p : prerequisites) { adj.get(p[1]).add(p[0]); inDegree[p[0]]++; }\n        Queue<Integer> q = new LinkedList<>();\n        for (int i = 0; i < numCourses; i++) if (inDegree[i] == 0) q.offer(i);\n        int[] order = new int[numCourses]; int idx = 0;\n        while (!q.isEmpty()) {\n            int node = q.poll(); order[idx++] = node;\n            for (int nbr : adj.get(node)) if (--inDegree[nbr] == 0) q.offer(nbr);\n        }\n        return idx == numCourses ? order : new int[]{};\n    }\n}"
    },
    "solved": false,
    "bookmarked": false
  },
  {
    "id": "code-45",
    "title": "Word Search Grid Backtracking",
    "difficulty": "Advanced",
    "topic": "Recursion & Backtracking",
    "category": "Graphs (BFS, DFS)",
    "description": "Given an `m x n` grid of characters `board` and a string `word`, return `true` if `word` exists in the grid. The word can be constructed from letters of sequentially adjacent cells (horizontally or vertically neighboring). The same letter cell may not be used more than once.",
    "constraints": "m == board.length\nn == board[i].length\n1 <= m, n <= 6\n1 <= word.length <= 15\nboard and word consist of only lowercase and uppercase English letters.",
    "examples": [
      {
        "input": "board = [[\"A\",\"B\",\"C\",\"E\"],[\"S\",\"F\",\"C\",\"S\"],[\"A\",\"D\",\"E\",\"E\"]], word = \"ABCCED\"",
        "output": "true",
        "explanation": "Found along path."
      },
      {
        "input": "board = [[\"A\",\"B\",\"C\",\"E\"],[\"S\",\"F\",\"C\",\"S\"],[\"A\",\"D\",\"E\",\"E\"]], word = \"SEE\"",
        "output": "true",
        "explanation": "Found."
      },
      {
        "input": "board = [[\"A\",\"B\",\"C\",\"E\"],[\"S\",\"F\",\"C\",\"S\"],[\"A\",\"D\",\"E\",\"E\"]], word = \"ABCB\"",
        "output": "false",
        "explanation": "Cannot reuse 'B'."
      }
    ],
    "fnName": "exist",
    "starterCode": "function exist(board, word) {\n  // Write your code here\n  return false;\n}",
    "solutionCode": "function exist(board, word) {\n  const rows = board.length, cols = board[0].length;\n  function dfs(r, c, idx) {\n    if (idx === word.length) return true;\n    if (r < 0 || c < 0 || r >= rows || c >= cols || board[r][c] !== word[idx]) return false;\n    const temp = board[r][c];\n    board[r][c] = '#'; // mark visited\n    const found = dfs(r + 1, c, idx + 1) || dfs(r - 1, c, idx + 1) || dfs(r, c + 1, idx + 1) || dfs(r, c - 1, idx + 1);\n    board[r][c] = temp; // backtrack\n    return found;\n  }\n  for (let r = 0; r < rows; r++) {\n    for (let c = 0; c < cols; c++) {\n      if (dfs(r, c, 0)) return true;\n    }\n  }\n  return false;\n}",
    "timeComplexity": "O(M * N * 4^L) where L is word length",
    "spaceComplexity": "O(L) (recursion stack)",
    "hints": [
      "Use DFS backtracking from every matching starting character.",
      "Temporarily mark the current cell as visited (e.g., overwrite with '#') to prevent reusing it on the same word path.",
      "Restore the original character when backtracking."
    ],
    "testCases": [
      {
        "input": [
          [
            [
              "A",
              "B",
              "C",
              "E"
            ],
            [
              "S",
              "F",
              "C",
              "S"
            ],
            [
              "A",
              "D",
              "E",
              "E"
            ]
          ],
          "ABCCED"
        ],
        "expected": true
      },
      {
        "input": [
          [
            [
              "A",
              "B",
              "C",
              "E"
            ],
            [
              "S",
              "F",
              "C",
              "S"
            ],
            [
              "A",
              "D",
              "E",
              "E"
            ]
          ],
          "SEE"
        ],
        "expected": true
      },
      {
        "input": [
          [
            [
              "A",
              "B",
              "C",
              "E"
            ],
            [
              "S",
              "F",
              "C",
              "S"
            ],
            [
              "A",
              "D",
              "E",
              "E"
            ]
          ],
          "ABCB"
        ],
        "expected": false
      }
    ],
    "starterCodes": {
      "javascript": "function exist(board, word) {\n  // Write your code here\n  return false;\n}",
      "python": "def exist(board: list[list[str]], word: str) -> bool:\n    # Write your code here\n    return False",
      "java": "class Solution {\n    public boolean exist(char[][] board, String word) {\n        // Write your code here\n        return false;\n    }\n}"
    },
    "solutionCodes": {
      "javascript": "function exist(board, word) {\n  const rows = board.length, cols = board[0].length;\n  function dfs(r, c, idx) {\n    if (idx === word.length) return true;\n    if (r < 0 || c < 0 || r >= rows || c >= cols || board[r][c] !== word[idx]) return false;\n    const temp = board[r][c];\n    board[r][c] = '#'; // mark visited\n    const found = dfs(r + 1, c, idx + 1) || dfs(r - 1, c, idx + 1) || dfs(r, c + 1, idx + 1) || dfs(r, c - 1, idx + 1);\n    board[r][c] = temp; // backtrack\n    return found;\n  }\n  for (let r = 0; r < rows; r++) {\n    for (let c = 0; c < cols; c++) {\n      if (dfs(r, c, 0)) return true;\n    }\n  }\n  return false;\n}",
      "python": "def exist(board: list[list[str]], word: str) -> bool:\n    rows, cols = len(board), len(board[0])\n    def dfs(r, c, idx):\n        if idx == len(word): return True\n        if r < 0 or c < 0 or r >= rows or c >= cols or board[r][c] != word[idx]: return False\n        tmp = board[r][c]; board[r][c] = '#'\n        res = dfs(r+1, c, idx+1) or dfs(r-1, c, idx+1) or dfs(r, c+1, idx+1) or dfs(r, c-1, idx+1)\n        board[r][c] = tmp\n        return res\n    for r in range(rows):\n        for c in range(cols):\n            if dfs(r, c, 0): return True\n    return False",
      "java": "class Solution {\n    public boolean exist(char[][] board, String word) {\n        for (int r = 0; r < board.length; r++) {\n            for (int c = 0; c < board[0].length; c++) {\n                if (dfs(board, word, r, c, 0)) return true;\n            }\n        }\n        return false;\n    }\n    private boolean dfs(char[][] b, String w, int r, int c, int i) {\n        if (i == w.length()) return true;\n        if (r < 0 || c < 0 || r >= b.length || c >= b[0].length || b[r][c] != w.charAt(i)) return false;\n        char tmp = b[r][c]; b[r][c] = '#';\n        boolean res = dfs(b, w, r+1, c, i+1) || dfs(b, w, r-1, c, i+1) || dfs(b, w, r, c+1, i+1) || dfs(b, w, r, c-1, i+1);\n        b[r][c] = tmp;\n        return res;\n    }\n}"
    },
    "solved": false,
    "bookmarked": false
  },
  {
    "id": "code-46",
    "title": "Regular Expression Matching DP",
    "difficulty": "Advanced",
    "topic": "Dynamic Programming",
    "category": "Recursion & Backtracking",
    "description": "Given an input string `s` and a pattern `p`, implement regular expression matching with support for `'.'` and `'*'`. `'.'` matches any single character. `'*'` matches zero or more of the preceding element.",
    "constraints": "1 <= s.length <= 20\n1 <= p.length <= 20\ns contains only lowercase English letters.\np contains only lowercase English letters, '.', and '*'.",
    "examples": [
      {
        "input": "s = \"aa\", p = \"a*\"",
        "output": "true",
        "explanation": "'*' means zero or more of preceding element 'a'."
      },
      {
        "input": "s = \"ab\", p = \".*\"",
        "output": "true",
        "explanation": "'.*' matches any string."
      }
    ],
    "fnName": "isMatch",
    "starterCode": "function isMatch(s, p) {\n  // Write regular expression DP matcher\n  return false;\n}",
    "solutionCode": "function isMatch(s, p) {\n  const m = s.length, n = p.length;\n  const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(false));\n  dp[0][0] = true;\n  for (let j = 2; j <= n; j += 2) {\n    if (p[j - 1] === '*') dp[0][j] = dp[0][j - 2];\n  }\n  for (let i = 1; i <= m; i++) {\n    for (let j = 1; j <= n; j++) {\n      if (p[j - 1] === '*') {\n        dp[i][j] = dp[i][j - 2] || (dp[i - 1][j] && (p[j - 2] === '.' || p[j - 2] === s[i - 1]));\n      } else {\n        dp[i][j] = dp[i - 1][j - 1] && (p[j - 1] === '.' || p[j - 1] === s[i - 1]);\n      }\n    }\n  }\n  return dp[m][n];\n}",
    "timeComplexity": "O(M * N)",
    "spaceComplexity": "O(M * N)",
    "hints": [
      "Use 2D DP: `dp[i][j]` is true if `s[0..i-1]` matches `p[0..j-1]`.",
      "If `p[j-1] == '*'`: consider 0 occurrences (`dp[i][j-2]`) or 1+ occurrences (`dp[i-1][j]` if preceding char matches).",
      "Handle base cases for patterns like `a*b*c*` matching empty strings."
    ],
    "testCases": [
      {
        "input": [
          "aa",
          "a*"
        ],
        "expected": true
      },
      {
        "input": [
          "ab",
          ".*"
        ],
        "expected": true
      },
      {
        "input": [
          "mississippi",
          "mis*is*p*."
        ],
        "expected": false
      }
    ],
    "starterCodes": {
      "javascript": "function isMatch(s, p) {\n  // Write regular expression DP matcher\n  return false;\n}",
      "python": "def is_match(s: str, p: str) -> bool:\n    # Write your code here\n    return False",
      "java": "class Solution {\n    public boolean isMatch(String s, String p) {\n        // Write your code here\n        return false;\n    }\n}"
    },
    "solutionCodes": {
      "javascript": "function isMatch(s, p) {\n  const m = s.length, n = p.length;\n  const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(false));\n  dp[0][0] = true;\n  for (let j = 2; j <= n; j += 2) {\n    if (p[j - 1] === '*') dp[0][j] = dp[0][j - 2];\n  }\n  for (let i = 1; i <= m; i++) {\n    for (let j = 1; j <= n; j++) {\n      if (p[j - 1] === '*') {\n        dp[i][j] = dp[i][j - 2] || (dp[i - 1][j] && (p[j - 2] === '.' || p[j - 2] === s[i - 1]));\n      } else {\n        dp[i][j] = dp[i - 1][j - 1] && (p[j - 1] === '.' || p[j - 1] === s[i - 1]);\n      }\n    }\n  }\n  return dp[m][n];\n}",
      "python": "def is_match(s: str, p: str) -> bool:\n    m, n = len(s), len(p)\n    dp = [[False] * (n + 1) for _ in range(m + 1)]\n    dp[0][0] = True\n    for j in range(2, n + 1, 2):\n        if p[j - 1] == '*': dp[0][j] = dp[0][j - 2]\n    for i in range(1, m + 1):\n        for j in range(1, n + 1):\n            if p[j - 1] == '*':\n                dp[i][j] = dp[i][j - 2] or (dp[i - 1][j] and (p[j - 2] in (s[i - 1], '.')))\n            else:\n                dp[i][j] = dp[i - 1][j - 1] and (p[j - 1] in (s[i - 1], '.'))\n    return dp[m][n]",
      "java": "class Solution {\n    public boolean isMatch(String s, String p) {\n        int m = s.length(), n = p.length();\n        boolean[][] dp = new boolean[m + 1][n + 1];\n        dp[0][0] = true;\n        for (int j = 2; j <= n; j += 2) if (p.charAt(j - 1) == '*') dp[0][j] = dp[0][j - 2];\n        for (int i = 1; i <= m; i++) {\n            for (int j = 1; j <= n; j++) {\n                if (p.charAt(j - 1) == '*') {\n                    dp[i][j] = dp[i][j - 2] || (dp[i - 1][j] && (p.charAt(j - 2) == '.' || p.charAt(j - 2) == s.charAt(i - 1)));\n                } else {\n                    dp[i][j] = dp[i - 1][j - 1] && (p.charAt(j - 1) == '.' || p.charAt(j - 1) == s.charAt(i - 1));\n                }\n            }\n        }\n        return dp[m][n];\n    }\n}"
    },
    "solved": false,
    "bookmarked": false
  },
  {
    "id": "code-47",
    "title": "Sliding Window Maximum (Monotonic Queue)",
    "difficulty": "Advanced",
    "topic": "Stacks & Queues",
    "category": "Two Pointers & Sliding Window",
    "description": "You are given an array of integers `nums`, there is a sliding window of size `k` which is moving from the very left of the array to the very right. You can only see the `k` numbers in the window. Each time the sliding window moves right by one position, return the max sliding window array.",
    "constraints": "1 <= nums.length <= 10^5\n-10^4 <= nums[i] <= 10^4\n1 <= k <= nums.length",
    "examples": [
      {
        "input": "nums = [1,3,-1,-3,5,3,6,7], k = 3",
        "output": "[3,3,5,5,6,7]",
        "explanation": "Sliding window maximums."
      },
      {
        "input": "nums = [1], k = 1",
        "output": "[1]",
        "explanation": "Single element."
      }
    ],
    "fnName": "maxSlidingWindow",
    "starterCode": "function maxSlidingWindow(nums, k) {\n  // Write O(N) solution\n  return [];\n}",
    "solutionCode": "function maxSlidingWindow(nums, k) {\n  const q = []; // monotonic decreasing deque of indices\n  const res = [];\n  for (let i = 0; i < nums.length; i++) {\n    while (q.length > 0 && q[0] <= i - k) q.shift();\n    while (q.length > 0 && nums[q[q.length - 1]] <= nums[i]) q.pop();\n    q.push(i);\n    if (i >= k - 1) res.push(nums[q[0]]);\n  }\n  return res;\n}",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(K)",
    "hints": [
      "Use a Monotonic Decreasing Deque storing array indices.",
      "Ensure the head of the deque always holds the index of the maximum element in the current window.",
      "Evict indices that have fallen out of the window (`<= i - k`)."
    ],
    "testCases": [
      {
        "input": [
          [
            1,
            3,
            -1,
            -3,
            5,
            3,
            6,
            7
          ],
          3
        ],
        "expected": [
          3,
          3,
          5,
          5,
          6,
          7
        ]
      },
      {
        "input": [
          [
            1
          ],
          1
        ],
        "expected": [
          1
        ]
      },
      {
        "input": [
          [
            1,
            -1
          ],
          1
        ],
        "expected": [
          1,
          -1
        ]
      }
    ],
    "starterCodes": {
      "javascript": "function maxSlidingWindow(nums, k) {\n  // Write O(N) solution\n  return [];\n}",
      "python": "def max_sliding_window(nums: list[int], k: int) -> list[int]:\n    # Write your code here\n    return []",
      "java": "class Solution {\n    public int[] maxSlidingWindow(int[] nums, int k) {\n        // Write your code here\n        return new int[]{};\n    }\n}"
    },
    "solutionCodes": {
      "javascript": "function maxSlidingWindow(nums, k) {\n  const q = []; // monotonic decreasing deque of indices\n  const res = [];\n  for (let i = 0; i < nums.length; i++) {\n    while (q.length > 0 && q[0] <= i - k) q.shift();\n    while (q.length > 0 && nums[q[q.length - 1]] <= nums[i]) q.pop();\n    q.push(i);\n    if (i >= k - 1) res.push(nums[q[0]]);\n  }\n  return res;\n}",
      "python": "def max_sliding_window(nums: list[int], k: int) -> list[int]:\n    from collections import deque\n    q = deque(); res = []\n    for i, x in enumerate(nums):\n        while q and q[0] <= i - k: q.popleft()\n        while q and nums[q[-1]] <= x: q.pop()\n        q.append(i)\n        if i >= k - 1: res.append(nums[q[0]])\n    return res",
      "java": "class Solution {\n    public int[] maxSlidingWindow(int[] nums, int k) {\n        int n = nums.length; int[] res = new int[n - k + 1]; int idx = 0;\n        Deque<Integer> q = new ArrayDeque<>();\n        for (int i = 0; i < n; i++) {\n            while (!q.isEmpty() && q.peekFirst() <= i - k) q.pollFirst();\n            while (!q.isEmpty() && nums[q.peekLast()] <= nums[i]) q.pollLast();\n            q.offerLast(i);\n            if (i >= k - 1) res[idx++] = nums[q.peekFirst()];\n        }\n        return res;\n    }\n}"
    },
    "solved": false,
    "bookmarked": false
  },
  {
    "id": "code-48",
    "title": "Decode Ways DP",
    "difficulty": "Advanced",
    "topic": "Dynamic Programming",
    "category": "Arrays & Strings",
    "description": "A message containing letters from A-Z can be encoded into numbers using the following mapping: 'A' -> \"1\", 'B' -> \"2\", ... 'Z' -> \"26\". Given a string `s` containing only digits, return the number of ways to decode it.",
    "constraints": "1 <= s.length <= 100\ns contains only digits and may contain leading zero(s).",
    "examples": [
      {
        "input": "s = \"12\"",
        "output": "2",
        "explanation": "\"12\" could be decoded as \"AB\" (1 2) or \"L\" (12)."
      },
      {
        "input": "s = \"226\"",
        "output": "3",
        "explanation": "\"226\" could be decoded as \"BZ\" (2 26), \"VF\" (22 6), or \"BBF\" (2 2 6)."
      },
      {
        "input": "s = \"06\"",
        "output": "0",
        "explanation": "\"06\" cannot be mapped."
      }
    ],
    "fnName": "numDecodings",
    "starterCode": "function numDecodings(s) {\n  // Write your code here\n  return 0;\n}",
    "solutionCode": "function numDecodings(s) {\n  if (!s || s[0] === '0') return 0;\n  const n = s.length;\n  let prev2 = 1, prev1 = 1;\n  for (let i = 1; i < n; i++) {\n    let curr = 0;\n    const oneDigit = Number(s[i]);\n    const twoDigits = Number(s.substring(i - 1, i + 1));\n    if (oneDigit >= 1) curr += prev1;\n    if (twoDigits >= 10 && twoDigits <= 26) curr += prev2;\n    prev2 = prev1;\n    prev1 = curr;\n  }\n  return prev1;\n}",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)",
    "hints": [
      "Similar to Climbing Stairs, but with conditional validity transitions.",
      "A single digit is valid if it is in [1, 9].",
      "A two-digit combination is valid if it is in [10, 26]."
    ],
    "testCases": [
      {
        "input": [
          "12"
        ],
        "expected": 2
      },
      {
        "input": [
          "226"
        ],
        "expected": 3
      },
      {
        "input": [
          "06"
        ],
        "expected": 0
      }
    ],
    "starterCodes": {
      "javascript": "function numDecodings(s) {\n  // Write your code here\n  return 0;\n}",
      "python": "def num_decodings(s: str) -> int:\n    # Write your code here\n    return 0",
      "java": "class Solution {\n    public int numDecodings(String s) {\n        // Write your code here\n        return 0;\n    }\n}"
    },
    "solutionCodes": {
      "javascript": "function numDecodings(s) {\n  if (!s || s[0] === '0') return 0;\n  const n = s.length;\n  let prev2 = 1, prev1 = 1;\n  for (let i = 1; i < n; i++) {\n    let curr = 0;\n    const oneDigit = Number(s[i]);\n    const twoDigits = Number(s.substring(i - 1, i + 1));\n    if (oneDigit >= 1) curr += prev1;\n    if (twoDigits >= 10 && twoDigits <= 26) curr += prev2;\n    prev2 = prev1;\n    prev1 = curr;\n  }\n  return prev1;\n}",
      "python": "def num_decodings(s: str) -> int:\n    if not s or s[0] == '0': return 0\n    p2, p1 = 1, 1\n    for i in range(1, len(s)):\n        curr = 0\n        one = int(s[i])\n        two = int(s[i-1:i+1])\n        if one >= 1: curr += p1\n        if 10 <= two <= 26: curr += p2\n        p2, p1 = p1, curr\n    return p1",
      "java": "class Solution {\n    public int numDecodings(String s) {\n        if (s == null || s.length() == 0 || s.charAt(0) == '0') return 0;\n        int p2 = 1, p1 = 1;\n        for (int i = 1; i < s.length(); i++) {\n            int curr = 0;\n            int one = s.charAt(i) - '0';\n            int two = Integer.parseInt(s.substring(i - 1, i + 1));\n            if (one >= 1) curr += p1;\n            if (two >= 10 && two <= 26) curr += p2;\n            p2 = p1; p1 = curr;\n        }\n        return p1;\n    }\n}"
    },
    "solved": false,
    "bookmarked": false
  },
  {
    "id": "code-49",
    "title": "Maximal Square in Binary Matrix",
    "difficulty": "Advanced",
    "topic": "Dynamic Programming",
    "category": "Algorithms",
    "description": "Given an `m x n` binary matrix filled with `'0'`s and `'1'`s, find the largest square containing only `'1'`s and return its area.",
    "constraints": "m == matrix.length\nn == matrix[i].length\n1 <= m, n <= 300\nmatrix[i][j] is '0' or '1'.",
    "examples": [
      {
        "input": "matrix = [[\"1\",\"0\",\"1\",\"0\",\"0\"],[\"1\",\"0\",\"1\",\"1\",\"1\"],[\"1\",\"1\",\"1\",\"1\",\"1\"],[\"1\",\"0\",\"0\",\"1\",\"0\"]]",
        "output": "4",
        "explanation": "Square of side 2 has area 4."
      },
      {
        "input": "matrix = [[\"0\",\"1\"],[\"1\",\"0\"]]",
        "output": "1",
        "explanation": "Area 1."
      }
    ],
    "fnName": "maximalSquare",
    "starterCode": "function maximalSquare(matrix) {\n  // Write your code here\n  return 0;\n}",
    "solutionCode": "function maximalSquare(matrix) {\n  if (!matrix || matrix.length === 0) return 0;\n  const m = matrix.length, n = matrix[0].length;\n  const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));\n  let maxSide = 0;\n  for (let i = 1; i <= m; i++) {\n    for (let j = 1; j <= n; j++) {\n      if (matrix[i - 1][j - 1] === '1') {\n        dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);\n        maxSide = Math.max(maxSide, dp[i][j]);\n      }\n    }\n  }\n  return maxSide * maxSide;\n}",
    "timeComplexity": "O(M * N)",
    "spaceComplexity": "O(M * N)",
    "hints": [
      "Let `dp[i][j]` represent the max side length of a square ending at `(i-1, j-1)`.",
      "If `matrix[i-1][j-1] == '1'`, then `dp[i][j] = 1 + min(top, left, top-left)`.",
      "Area is `maxSide * maxSide`."
    ],
    "testCases": [
      {
        "input": [
          [
            [
              "1",
              "0",
              "1",
              "0",
              "0"
            ],
            [
              "1",
              "0",
              "1",
              "1",
              "1"
            ],
            [
              "1",
              "1",
              "1",
              "1",
              "1"
            ],
            [
              "1",
              "0",
              "0",
              "1",
              "0"
            ]
          ]
        ],
        "expected": 4
      },
      {
        "input": [
          [
            [
              "0",
              "1"
            ],
            [
              "1",
              "0"
            ]
          ]
        ],
        "expected": 1
      },
      {
        "input": [
          [
            [
              "0"
            ]
          ]
        ],
        "expected": 0
      }
    ],
    "starterCodes": {
      "javascript": "function maximalSquare(matrix) {\n  // Write your code here\n  return 0;\n}",
      "python": "def maximal_square(matrix: list[list[str]]) -> int:\n    # Write your code here\n    return 0",
      "java": "class Solution {\n    public int maximalSquare(char[][] matrix) {\n        // Write your code here\n        return 0;\n    }\n}"
    },
    "solutionCodes": {
      "javascript": "function maximalSquare(matrix) {\n  if (!matrix || matrix.length === 0) return 0;\n  const m = matrix.length, n = matrix[0].length;\n  const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));\n  let maxSide = 0;\n  for (let i = 1; i <= m; i++) {\n    for (let j = 1; j <= n; j++) {\n      if (matrix[i - 1][j - 1] === '1') {\n        dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);\n        maxSide = Math.max(maxSide, dp[i][j]);\n      }\n    }\n  }\n  return maxSide * maxSide;\n}",
      "python": "def maximal_square(matrix: list[list[str]]) -> int:\n    if not matrix: return 0\n    m, n = len(matrix), len(matrix[0])\n    dp = [[0] * (n + 1) for _ in range(m + 1)]\n    max_side = 0\n    for i in range(1, m + 1):\n        for j in range(1, n + 1):\n            if matrix[i - 1][j - 1] == '1':\n                dp[i][j] = 1 + min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1])\n                max_side = max(max_side, dp[i][j])\n    return max_side * max_side",
      "java": "class Solution {\n    public int maximalSquare(char[][] matrix) {\n        int m = matrix.length, n = matrix[0].length, max = 0;\n        int[][] dp = new int[m + 1][n + 1];\n        for (int i = 1; i <= m; i++) {\n            for (int j = 1; j <= n; j++) {\n                if (matrix[i - 1][j - 1] == '1') {\n                    dp[i][j] = 1 + Math.min(dp[i - 1][j], Math.min(dp[i][j - 1], dp[i - 1][j - 1]));\n                    max = Math.max(max, dp[i][j]);\n                }\n            }\n        }\n        return max * max;\n    }\n}"
    },
    "solved": false,
    "bookmarked": false
  },
  {
    "id": "code-50",
    "title": "Word Ladder Shortest Transformation (BFS)",
    "difficulty": "Advanced",
    "topic": "Graphs (BFS, DFS)",
    "category": "Algorithms",
    "description": "A transformation sequence from word `beginWord` to word `endWord` using a dictionary `wordList` is a sequence of words `beginWord -> s1 -> s2 -> ... -> sk` such that every adjacent pair differs by exactly one letter. Return the number of words in the shortest transformation sequence from `beginWord` to `endWord`, or 0 if no such sequence exists.",
    "constraints": "1 <= beginWord.length <= 10\nendWord.length == beginWord.length\n1 <= wordList.length <= 5000\nAll words consist of lowercase English letters.",
    "examples": [
      {
        "input": "beginWord = \"hit\", endWord = \"cog\", wordList = [\"hot\",\"dot\",\"dog\",\"lot\",\"log\",\"cog\"]",
        "output": "5",
        "explanation": "\"hit\" -> \"hot\" -> \"dot\" -> \"dog\" -> \"cog\" (5 words)."
      },
      {
        "input": "beginWord = \"hit\", endWord = \"cog\", wordList = [\"hot\",\"dot\",\"dog\",\"lot\",\"log\"]",
        "output": "0",
        "explanation": "\"cog\" is not in wordList."
      }
    ],
    "fnName": "ladderLength",
    "starterCode": "function ladderLength(beginWord, endWord, wordList) {\n  // Return shortest path length or 0\n  return 0;\n}",
    "solutionCode": "function ladderLength(beginWord, endWord, wordList) {\n  const wordSet = new Set(wordList);\n  if (!wordSet.has(endWord)) return 0;\n  const queue = [[beginWord, 1]];\n  const visited = new Set([beginWord]);\n  while (queue.length > 0) {\n    const [word, level] = queue.shift();\n    if (word === endWord) return level;\n    for (let i = 0; i < word.length; i++) {\n      for (let c = 97; c <= 122; c++) {\n        const newChar = String.fromCharCode(c);\n        const nextWord = word.substring(0, i) + newChar + word.substring(i + 1);\n        if (wordSet.has(nextWord) && !visited.has(nextWord)) {\n          visited.add(nextWord);\n          queue.push([nextWord, level + 1]);\n        }\n      }\n    }\n  }\n  return 0;\n}",
    "timeComplexity": "O(M^2 * N) where M is word length, N is list size",
    "spaceComplexity": "O(M * N)",
    "hints": [
      "Model words as nodes in an unweighted graph, with edges between words differing by 1 character.",
      "Shortest path in an unweighted graph is found via Breadth-First Search (BFS).",
      "Generate all 26 possible 1-letter substitutions for each character of the current word."
    ],
    "testCases": [
      {
        "input": [
          "hit",
          "cog",
          [
            "hot",
            "dot",
            "dog",
            "lot",
            "log",
            "cog"
          ]
        ],
        "expected": 5
      },
      {
        "input": [
          "hit",
          "cog",
          [
            "hot",
            "dot",
            "dog",
            "lot",
            "log"
          ]
        ],
        "expected": 0
      },
      {
        "input": [
          "a",
          "c",
          [
            "a",
            "b",
            "c"
          ]
        ],
        "expected": 2
      }
    ],
    "starterCodes": {
      "javascript": "function ladderLength(beginWord, endWord, wordList) {\n  // Return shortest path length or 0\n  return 0;\n}",
      "python": "def ladder_length(beginWord: str, endWord: str, wordList: list[str]) -> int:\n    # Write your code here\n    return 0",
      "java": "class Solution {\n    public int ladderLength(String beginWord, String endWord, List<String> wordList) {\n        // Write your code here\n        return 0;\n    }\n}"
    },
    "solutionCodes": {
      "javascript": "function ladderLength(beginWord, endWord, wordList) {\n  const wordSet = new Set(wordList);\n  if (!wordSet.has(endWord)) return 0;\n  const queue = [[beginWord, 1]];\n  const visited = new Set([beginWord]);\n  while (queue.length > 0) {\n    const [word, level] = queue.shift();\n    if (word === endWord) return level;\n    for (let i = 0; i < word.length; i++) {\n      for (let c = 97; c <= 122; c++) {\n        const newChar = String.fromCharCode(c);\n        const nextWord = word.substring(0, i) + newChar + word.substring(i + 1);\n        if (wordSet.has(nextWord) && !visited.has(nextWord)) {\n          visited.add(nextWord);\n          queue.push([nextWord, level + 1]);\n        }\n      }\n    }\n  }\n  return 0;\n}",
      "python": "def ladder_length(beginWord: str, endWord: str, wordList: list[str]) -> int:\n    from collections import deque\n    word_set = set(wordList)\n    if endWord not in word_set: return 0\n    q = deque([(beginWord, 1)])\n    visited = {beginWord}\n    while q:\n        word, level = q.popleft()\n        if word == endWord: return level\n        for i in range(len(word)):\n            for c in 'abcdefghijklmnopqrstuvwxyz':\n                nxt = word[:i] + c + word[i+1:]\n                if nxt in word_set and nxt not in visited:\n                    visited.add(nxt)\n                    q.append((nxt, level + 1))\n    return 0",
      "java": "class Solution {\n    public int ladderLength(String beginWord, String endWord, List<String> wordList) {\n        Set<String> set = new HashSet<>(wordList);\n        if (!set.contains(endWord)) return 0;\n        Queue<String> q = new LinkedList<>();\n        q.offer(beginWord);\n        int level = 1;\n        while (!q.isEmpty()) {\n            int size = q.size();\n            for (int k = 0; k < size; k++) {\n                String cur = q.poll();\n                if (cur.equals(endWord)) return level;\n                char[] ca = cur.toCharArray();\n                for (int i = 0; i < ca.length; i++) {\n                    char orig = ca[i];\n                    for (char c = 'a'; c <= 'z'; c++) {\n                        ca[i] = c;\n                        String nxt = String.valueOf(ca);\n                        if (set.remove(nxt)) q.offer(nxt);\n                    }\n                    ca[i] = orig;\n                }\n            }\n            level++;\n        }\n        return 0;\n    }\n}"
    },
    "solved": false,
    "bookmarked": false
  }
];

// Backward compatibility alias
export const codeverseData = CODEVERSE_EXERCISES;

export default CODEVERSE_EXERCISES;
