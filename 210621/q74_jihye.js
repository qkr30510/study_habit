// 74. 최장 경로 찾기

const graph = {
    1: [2, 3, 4],
    2: [1, 3, 4, 5, 6],
    3: [1, 2, 7],
    4: [1, 2, 5, 6],
    5: [2, 4, 6, 7],
    6: [2, 4, 5, 7],
    7: [3, 5, 6]
};

const user_input = [1, 7];
const start = user_input[0];
const end = user_input[1];

let queue = [start];
let visited = [];

function solution(n, visited){ 
  //n == [1], visited == []
  //n == [1, 2], visited == [1]
  //n == [1, 2, 1], visited == [1, 2]
  let node = n[n.length-1];
  //node == 1, n == [1], visited == []
  //node == 2, n == [1, 2], visited == [1]
  //node == 1, n == [1, 2, 1], visited == [1, 2]
  let length = 0;
   // length == 0, node == 1, n == [1], visited == []
   // length == 0, node == 2, n == [1, 2], visited == [1]
   // length == 0, node == 1, n == [1, 2, 1], visited == [1, 2]
  
  if (node == end){
    return visited.length;
  }
  
  if (visited.includes(node)){
    return visited.length;
    //
    //
    // length == 0, node == 1, n == [1, 2, 1], visited == [1, 2]
  } else {
    visited.push(node); 
    // length == 0, node == 1, n == [1], visited == [1]
    // length == 0, node == 2, n == [1, 2], visited == [1, 2]
  }
  
  let max = [];
   // max == 0, length == 0, node == 1, n == [1], visited == [1]
   // max == 0, length == 0, node == 2, n == [1, 2], visited == [1, 2]
  for (let next_node in graph[node]){
    n.push(graph[node][next_node]);
    // max == 0, length == 0, node == 1, n == [1, 2], visited == [1], graph[node] = [2, 3, 4]
    // max == 0, length == 0, node == 2, n == [1, 2, 1], visited == [1, 2], graph[node] = [1, 3, 4, 5, 6]
    // max == [0, 2], length == 2, node == 2, n == [2, 1, 3], visited == [1, 2], graph[node] = [1, 3, 4, 5, 6], next_node = 1
    
    max.push(length, solution(n, visited)); 
    // length == 0, solution(n, visited) == 2
    length = Math.max.apply(null, max);
    // length == 2, solution(n, visited) == 2
    
    queue.pop();
    // max == 0, length == 0, node == 2, n == [2, 1], visited == [1, 2], graph[node] = [1, 3, 4, 5, 6]
  }
  
  return length;
}

console.log(solution(queue, visited));