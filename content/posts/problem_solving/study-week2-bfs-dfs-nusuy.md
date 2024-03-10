---
title: 2주차 코테 풀이 회고 - nusuy
image: "../../static/media/asdf.jpg"
date: 2024-03-10
tags:
  - problem solving
  - algorithm
description: 코테 스터디 2주차 회고록 - nusuy
---

> 2주차 코테 풀이 회고
>
> - 풀이 주제: DFS/BFS
> - 회고 작성자: [@nusuy](https://github.com/nusuy)

> 체감 난이도 분류
>
> - 🌧️: 상
> - 🌤️: 중
> - ☀️: 하

## 풀이 회고

### 🌧️ 타겟 넘버

- 플랫폼: 프로그래머스 [[문제보기]](https://school.programmers.co.kr/learn/courses/30/lessons/43165)
- 풀이 시간: 1시간 초과

1. 문제를 보고 이진 트리와 BFS / DFS가 떠올랐지만 정확한 코드 구현을 못함
2. depth가 아닌 각 node 기준으로 풀이하려하니 코드 구현이 더 복잡해짐
3. BFS로도 작성해보면 좋을 듯

### 🌤️ 네트워크

- 플랫폼: 프로그래머스 [[문제보기]](https://school.programmers.co.kr/learn/courses/30/lessons/43162)
- 풀이 시간: 33m 26s

1. DFS로 해결하고자 함.
2. `visited[i]` 조건 오타 때문에 몇 번 틀림 ➡️ 오타 주의

### 🌤️ 게임 맵 최단거리

- 플랫폼: 프로그래머스 [[문제보기]](https://school.programmers.co.kr/learn/courses/30/lessons/1844)
- 풀이 시간: 1시간 초과

1. 28m 22s에서 중단하고 DFS, BFS 이론 다시 학습
2. python에서 queue를 사용하는 방법을 몰라서 찾아봄
3. `maps[ny][nx] = maps[y][x] + 1` 부분이 잘 이해되지 않았지만 로그 찍어보니 이해됨
   - 노드 1개씩 전진할 때마다 가중치가 +1 되므로, 해당 코드가 필요

### 🌤️ 바이러스

- 플랫폼: 백준 [[문제보기]](https://noj.am/2606)
- 풀이 시간: 38m 07s

1. 8m 25s 런타임 에러 (Index error)
   - n,m 오타로 인한 index out of range
2. 14m 50s 런타임 에러 (Name error)

### 🌤️ 단어 변환

- 플랫폼: 프로그래머스 [[문제보기]](https://school.programmers.co.kr/learn/courses/30/lessons/43163)
- 풀이 시간: 30m 01s

1. 최단거리 ➡️ BFS로 해결해야겠다고 생각
2. python 문법 `dict.fromkeys()` 기억하기

### 🌧️ 아이템 줍기

- 플랫폼: 프로그래머스 [[문제보기]](https://school.programmers.co.kr/learn/courses/30/lessons/87694)
- 풀이 시간: 1시간 초과

1. 캐릭터가 이동할 수 있는 경로를 구하는 부분에서 막힘
2. 맵 좌표를 2배로 늘려야한다.

### ☀️ DFS와 BFS

- 플랫폼: 백준 [[문제보기]](https://noj.am/1260)
- 풀이 시간: 16m 39s

1. 13m 47s WA
   - 출발 노드를 지정해준다는 점을 반영하지 않음
2. python 배열 출력 시 대괄호와 쉼표를 제거하는 문법 `print(*arr)`
3. 좀 더 효율적인 로직도 알아보면 좋을 듯

### 🌧️ 트리의 부모 찾기

- 플랫폼: 백준 [[문제보기]](https://noj.am/11725)
- 풀이 시간: 1시간 초과

1. 10m 08s 메모리 초과
   - matrix에서 리스트로 수정
2. 시간 초과
3. BFS 방식으로 구현
4. 실행 시간을 더 단축해보면 좋을 듯

### 🌧️ 여행경로

- 플랫폼: 프로그래머스 [[문제보기]](https://school.programmers.co.kr/learn/courses/30/lessons/43164)
- 풀이 시간: 1시간 초과

1. 문자열 기준으로 다음 노드를 정한다.
2. 주어진 항공권을 도착지 기준 정렬
3. 항공권 정보 그래프로 변환
4. "ICN"에서 시작하여 DFS 수행하여 경로 탐색

### 🌤️ A -> B

- 플랫폼: 백준 [[문제보기]](https://noj.am/16953)
- 풀이 시간: 57m 20s

1. BFS로 풀이 방향을 잡았으나, 각 레벨 구하는 부분에서 시간이 오래 걸림

### 🌤️ 특정 거리의 도시 찾기

- 플랫폼: 백준 [[문제보기]](https://noj.am/18352)
- 풀이 시간: 41m 24s

1. 17m 49s TLE
2. 실행시간 더 단축하면 좋을 것 같다.

### 🌧️ 효율적인 해킹

- 플랫폼: 백준 [[문제보기]](https://noj.am/1325)
- 풀이 시간: 1시간 초과

1. RecursionError
2. TLE
   - dict 대신 리스트, 리스트 대신 deque 변경
3. 메모리 초과
   - DFS에서 BFS로 변경
4. 출력 초과
   - `visited[i] = true` 코드 빼먹음 (루트 노드 방문 처리 누락)

### ☀️ 미로 탐색

- 플랫폼: 백준 [[문제보기]](https://noj.am/2178)
- 풀이 시간: 21m 27s

### ☀️ 단지번호붙이기

- 플랫폼: 백준 [[문제보기]](https://noj.am/2667)
- 풀이 시간: 25m 47s
