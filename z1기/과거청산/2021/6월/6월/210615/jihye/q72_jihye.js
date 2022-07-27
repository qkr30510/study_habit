// 72. 너비 우선 탐색
const graph = {
    'A': ['E', 'C', 'B'],
    'B': ['A'],
    'C': ['A'],
    'D': ['E', 'F'],
    'E': ['D', 'A'],
    'F': ['D'],
  };
  function dfs(graph, start){
    let visited = [];
    let queue = [start]; // 배열에 기본으로 첫 노드가 들어가있다.
    
    while (queue.length != 0){
      let n = queue.shift();//배열의 첫번째 요소를 제거하고 제거된 요소를 반환.
      if (!visited.includes(n)){
        visited.push(n); // 방문경로에 stack에 있는 n을 꺼내서 넣는다.
        let sub = graph[n].filter(x => !visited.includes(x));
        for (let i of sub){
          queue.push(i);
        }
      }
    }
    return visited;
  }
  
  console.log(dfs(graph, 'E'));