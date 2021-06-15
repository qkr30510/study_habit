// 71. 깊이 우선 탐색
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
    let stack = [start]; // 배열에 기본으로 첫 노드가 들어가있다.
    
    while (stack.length != 0){
      let n = stack.pop();
      if (!visited.includes(n)){
        visited.push(n); // 방문경로에 stack에 있는 n을 꺼내서 넣는다.
        let sub = graph[n].filter(x => !visited.includes(x));
        for (let i of sub){
          stack.push(i);
        }
      }
    }
    return visited;
  }
  
  console.log(dfs(graph, 'E'));