// View the full problem and run the test cases at:
//  https://leetcode.com/problems/course-schedule/

// There are a total of numCourses courses you have to take, labeled from 0 to
// numCourses-1.

// Some courses may have prerequisites, for example to take course 0 you have
// to first take course 1, which is expressed as a pair: [0,1]

// Given the total number of courses and a list of prerequisite pairs, is it
// possible for you to finish all courses?

// Example 1:

// Input: numCourses = 2, prerequisites = [[1,0]]
// Output: true
// Explanation:
//  There are a total of 2 courses to take.
//  To take course 1 you should have finished course 0. So it is possible.
// Example 2:

// Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
// Output: false
// Explanation:
//  There are a total of 2 courses to take.
//  To take course 1 you should have finished course 0, and to take course 0
// you should also have finished course 1. So it is impossible.

// Constraints:

// The input prerequisites is a graph represented by a list of edges, not
// adjacency matrices. Read more about how a graph is represented.

// You may assume that there are no duplicate edges in the input prerequisites.
// 1 <= numCourses <= 10^5

// HINT:
// This problem is equivalent to finding if a cycle exists in a directed graph.
// If a cycle exists, no topological ordering exists and therefore it will be
// impossible to take all courses.

// Build graph -> adjacency list directed graph

function canFinish(numCourses, prerequisites) {
  let graph = {};

  for (let course in prerequisites) {
    graph[course[0]] = course[1];
    // console.log("visited: ", visited);
    // if (visited[course[1]]) ;
  }

  // function checker(numCourses, course, prerequisite, visited) {
  //   if(!numCourses) return false;

  // }
  return true;
}

console.log(
  canFinish(3, [
    [1, 0],
    [2, 1],
  ])
);
//true
