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
    
    while (stack.length != 0){//stack이 비어있으면 while문 종료
      let n = stack.pop();//배열의 마지막 요소를 제거하고 제거된 요소를 반환.
      if (!visited.includes(n)){
        visited.push(n); // 방문경로에 stack에 있는 n을 꺼내서 visited에 넣는다.
        let sub = graph[n].filter(x => !visited.includes(x)); // n과 연결된 것 중 현재 visited에 없는 것만 sub에 넣는다.
        for (let i of sub){
          stack.push(i);
        }
      }
    }
    return visited;
  }
  
  console.log(dfs(graph, 'E'));