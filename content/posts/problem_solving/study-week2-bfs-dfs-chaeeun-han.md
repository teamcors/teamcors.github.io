---
title: 2주차 코테 풀이 회고 - Chaeeun-Han
date: 2024-03-10
tags:
  - problem solving
  - algorithm
description: 코테 스터디 2주차 회고록 - Chaeeun-Han
---
# 2주차 코테 풀이 회고
- 2주차 주제: dfs/bfs
- 회고 작성자: [@Chaeeun-Han](https://github.com/chaeeun-Han)

## 체감 난이도 분류
- 🥳: 감잡았어요
- 🤓: 새로운 유형이에요
- 😵: 어려워요

## 풀이 회고


### 🤓 트리의 부모 찾기 (348ms)
- 플랫폼: 백준 [[문제보기]](https://www.acmicpc.net/problem/11725)
- 풀이 시간: 22min 35sec
- 포인트: start 외의 다른 노드가 visited가 아니라면 start is root

`sys.stdin.readline`으로 4400ms → 348ms 속도 향상

### 🥳 A → B (88ms)
- 플랫폼: 백준 [[문제보기]](https://www.acmicpc.net/problem/16953)
- 풀이 시간: 36min 49sec
- 포인트: [프로그래머스 타겟 넘버](https://school.programmers.co.kr/learn/courses/30/lessons/43165)랑 비슷한 풀이로 해야겠다고 느낌. 

bfs: 메모리 초과
-> 조건문으로 추가되는 숫자 제어해서 해결

### 🤓 특정 거리의 도시 찾기 (1724ms)
- 플랫폼: 백준 [[문제보기]](https://www.acmicpc.net/problem/18352)
- 풀이 시간: 35min 55sec
- 포인트: 거리를 담을 `distance List` 생성해서 1씩 더하자

### 😵 효율적인 해킹 (10884ms)
- 플랫폼: 백준 [[문제보기]](https://www.acmicpc.net/problem/1325)
- 풀이 시간: 47min 48sec

1. dfs 시간초과 → PyPy3로 제출
2. RecursionError → `sys.setrecursionlimit(10**6)` 추가
3. 메모리 초과 → bfs

### 🥳 미로 탐색 (72ms)
- 플랫폼: 백준 [[문제보기]](https://www.acmicpc.net/problem/2178)
- 풀이 시간: 33min 45sec
- 포인트: `dx`, `dy`로 동, 서, 남, 북을 지정하고 for문으로 이동한다. 주로 미로탐색이나 길찾기는 bfs로 접근.

### 🤓 단어 변환
- 플랫폼: 프로그래머스 [[문제보기]](https://www.acmicpc.net/problem/18352)
- 풀이 시간: 28min 09sec
- 포인트: `cnt`라는 변수를 호출해서 타겟과 하나 차이 날 경우 dfs돌리지 말고 `result.append`하도록 함

타겟과 단어가 하나 차이나는데 `words`에도 하나 차이나는 것이 있을 때, `words`를 가져와서 틀렸었음.

### 😵 트리 (44ms)
- 플랫폼: 백준 [[문제보기]](https://www.acmicpc.net/problem/1068)
- 풀이 시간: 50min 27sec
1. 구현으로 풀려고 했으나 실패
```python
#이전 풀이 방식
n = int(input())
parents = list(map(int, input().split()))
delnode = int(input())
graph = [[] for _ in range(n)]

# 노드 지우기
parents[delnode] = -2
for i in range(0, len(parents)):
     # root 가 -2이면 본인을 -2로 바꾸자
     if parents[i] == -2 or -2 in graph[parents[i]]:
         graph[i].append(-2)
     elif parents[i] == -1:
         continue
     else:
         graph[parents[i]].append(i)

 print(graph.count([]))
```
2. dfs로 접근

### 😵 연구소 (2848ms)
- 플랫폼: 백준 [[문제보기]](https://www.acmicpc.net/problem/14502)
- 풀이 시간: 48min(해설 참고함)
- 포인트: 벽을 만드는 `make_wall`함수를 만듦. 이중for문과 재귀로 벽 3개를 옮겨가며 생성
- 주의: == 이랑 = 오타. PyPy3로 제출


### 🥳 숫자 고르기 (40ms)
- 플랫폼: 백준 [[문제보기]](https://www.acmicpc.net/problem/2668)
- 풀이 시간: 15min 42sec
- 실수: 문제 이해를 잘못해서 index랑 value가 cycle로 같을 때를 `result`에 add함.
문제 꼼꼼히 읽자!

```python
# 이전 풀이
import sys
input = sys.stdin.readline

n = int(input())
arr = [0]
for _ in range(n):
    arr.append(int(input()))

result = set()

for idx in range(1, n+1):
    value = arr[idx]
    if idx == arr[value]:
        result.add(value)
        result.add(idx)

print(len(result))
newresult = sorted(result)
for value in newresult:
    print(value)
```

### 🥳 단지번호붙이기 (64ms)
- 플랫폼: 백준 [[문제보기]](https://www.acmicpc.net/problem/2667)
- 풀이 시간: 32min 42sec

### 🤓 쉬운 최단거리
- 플랫폼: 백준 [[문제보기]](https://www.acmicpc.net/problem/14940)
- 풀이 시간: 35min 53sec
1. 틀렸습니다 
-> 출력할 때 flooding만 이중 for문으로 출력했는데, graph가 0일 때는 graph에서 출력해야함 