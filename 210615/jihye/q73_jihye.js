// 73. 최단 경로 찾기

const graph = {
  'A': ['B', 'C'], //node: 'A', next_node: ['B', 'C']
  'B': ['A', 'D', 'E'],
  'C': ['A', 'F'],
  'D': ['B'],
  'E': ['B', 'F'],
  'F': ['C', 'E'],
};

const user_input = 'A F'.split(' ');
const start = user_input[0];
const end = user_input[1];

// 처음 시작점 A는 시작과 동시에 순회가 끝나므로 기본값으로 넣어줌
const queue = [start]; 
const visited = [start];

function solution() {
  let count = -1;

  while(queue.length !== 0){
    count += 1;
    //console.log(queue.length);
    let size = queue.length; // 현재 큐에 담겨있는 노드 개수를 size에 저장
    for (let i = 0; i < size; i++){ // 현재 큐를 순회
      console.log(size);
      let node = queue.splice(0, 1); // 큐 방식이므로 항상 0번째 노드를 먼저 꺼낸다.
      if (node == end){ // 순회한 노드가 마지막 노드이면 count 반환
        return count;
      }
      for (let next_node in graph[node]){ //graph 배열을 순회
        if(!visited.includes(graph[node][next_node])){
          queue.push(graph[node][next_node]);
          visited.push(graph[node][next_node]);
        }
      }
    }
  }
}

//console.log(end);
console.log(solution());

/* 
for in 문은 각각 요소의 index를 출력
for of 문은 각각 요소의 값을 출력
*/