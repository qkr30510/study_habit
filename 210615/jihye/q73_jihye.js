const graph = {
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F'],
    'D': ['B'],
    'E': ['B', 'F'],//
    'F': ['C', 'E'],
  };
  
  console.log(graph);
  
  //const user_input = prompt("입력해주세요.").split(' ');
  const user_input = 'A F'.split(' ');
  console.log(user_input);
  const start = user_input[0];
  const end = user_input[1];
  
  let queue = [];
  let visited = [];
  
  function solution(){
    let count = -1;
    
    while(queue.lenth !== 0){
      count += 1;
      let size = queue.length;
      for (let i = 0; i < size; i++){
        let node = queque.splice(0, 1);
        if (node == end){
          return count;
        }
        for (let next_node in graph[node]){
          if(visited.includes(graph[node][next_node])){
            visited.push(graph[node][next_node]);
            queue.push(graph[node][next_node]);
          }
        }
      }
    }
  }
  
  /* 
  for in 문은 각각 요소의 index를 출력
  for of 문은 각각 요소의 값을 출력
  */