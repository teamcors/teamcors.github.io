---
title: 2주차 코테 풀이 회고 - Queue-ri
image: '../../static/media/asdf.jpg'
date: 2024-03-10
tags:
  - problem solving
  - algorithm
description: 코테 스터디 2주차 회고록 - Queue-ri
---

# 2주차 코테 풀이 회고
- 풀이 주제: dfs/bfs
- 회고 작성자: [@Queue-ri](https://github.com/Queue-ri)

## 체감 난이도 분류
- 💬: 미분류
- 🍰: EZ
- 🔮: 유익해요
- 🐞: SHIT

## 풀이 회고
### 🍰 타겟넘버
- 플랫폼: 프로그래머스 [[문제보기]](https://school.programmers.co.kr/learn/courses/30/lessons/43165)
- 풀이 시간: 18분


### 🍰 바이러스
- 플랫폼: 백준 [[문제보기]](https://noj.am/2606)
- 문제 번호: 2606
- 풀이 시간: 51분

#### 실수
1. visited 체크 안함
2. 2차원 배열을 * 로 생성해서 shallow copy됨
3. `k`를 `[i+1, n+1)` 범위로 돌려서 반대로 `(8,1)` 같이 연결된 것을 반영 못함 : 어차피 `[1, n+1)`도 n^2인데 괜히 이런 최적화 시도하지 말것

### 🍰 DFS와 BFS
- 플랫폼: 백준 [[문제보기]](https://noj.am/1260)
- 풀이 시간: 26분

#### 실수
1. 리스트의 원소끼리만 뒤에 붙일땐 `append`말고 `extend`. 안그럼 리스트가 중첩되듯이 합쳐짐

### 🔮 트리의 부모 찾기
- 플랫폼: 백준 [[문제보기]](https://noj.am/11725)
- 풀이 시간: 💥**1시간 초과**

#### 실수
1. **메모리초과** - 인접행렬말고 인접리스트로 해야 함
2. `sys.setrecursionlimit(10**6)` 필요

### 🍰 네트워크
- 플랫폼: 프로그래머스 [[문제보기]](https://school.programmers.co.kr/learn/courses/30/lessons/43162)
- 풀이 시간: 11분

이딴게...레벨 3?

### 🍰 게임 맵 최단거리
- 플랫폼: 프로그래머스 [[문제보기]](https://school.programmers.co.kr/learn/courses/30/lessons/1844)
- 풀이 시간: 30분

#### 실수
1. 방문처리는 반드시 pop할때 말고 append할때!!!!!!!!!

### 🔮 단어 변환
- 플랫폼: 프로그래머스 [[문제보기]](https://school.programmers.co.kr/learn/courses/30/lessons/43163)
- 풀이 시간: 42분

#### 실수
1. `ok` 함수의 diff 계산에서 같은 인덱스의 문자끼리 비교해야 하는데 괜히 in을 쓰는 실수를 함

### 🔮 아이템 줍기
- 플랫폼: 프로그래머스 [[문제보기]](https://school.programmers.co.kr/learn/courses/30/lessons/87694)
- 풀이 시간: 💥**1시간 초과**(조금)

좌표계를 2배 해서 풀었음

#### 실수
1. RTE나서 보니 `is_outer`에서 +1 해보며 라인인지 아닌지 검사할때 `board`가 `50*scale+1` 사이즈이면 인덱스가 `50*scale` 까지여서 터짐. 그래서 `board`는 최대 `50*scale+2` 사이즈여야 함

### 🔮 여행경로
- 플랫폼: 프로그래머스 [[문제보기]](https://school.programmers.co.kr/learn/courses/30/lessons/43164)
- 풀이 시간: 💥**1시간 초과**

visited 쓰지 않고 인접리스트에서 remove하는 방식으로 중복 사용될 수 있는(=재방문) ticket 제거

#### 실수
1. `len(tickets)+1`을 `len(tickets+1)`로 실수 -> `TypeError: can only concatenate list (not "int") to list`
2. `for nxt in adj[cur]:` 안에서 `remove`, `append` 하면 iteration 깨짐.......이것때문에 디버깅 삽질함
3. 파이썬에서 **리스트 복사** 위해 =으로 새로 만들면 얕은복사라 의미없음. **반드시 `[e for e in ...]`** 이렇게 해야 함

### 🐞 퍼즐 조각 채우기
- 플랫폼: 프로그래머스 [[문제보기]](https://school.programmers.co.kr/learn/courses/30/lessons/84021)
- 풀이 시간: 💥**1시간 초과**

빡구현 문제에 잡실수 들어가서 매우 오래 걸림

`table`에 bfs 돌려서 타일 종류별(`tidx`)로 90도 회전한 모습을 `defaultdict(list)`에 저장</br>
`board`에 bfs 돌려서 `target`영역 잡고 `tidx` 순회해서 아직 맞추지 않은 `tidx`는 list 순회하며 매칭 확인

#### 실수
1. 매칭은 단순 xor 가능하지만 채워지는 칸 수는 단순 xor이 아닌 `tile`이 1, `board`가 0인 경우에만 카운트 가능함을 유의
2. `inf`와 `deepcopy`의 모듈명 기억하기
3. 2차원 배열은 단순 슬라이싱 안되고 한번 순회하면서 잘라넣어줘야 함...(numpy는 기본모듈 아니라서 사용 불가)

### 🍰 A → B
- 플랫폼: 백준 [[문제보기]](https://noj.am/16953)
- 풀이 시간: 9분

### 🍰 특정 거리의 도시 찾기
- 플랫폼: 백준 [[문제보기]](https://noj.am/18352)
- 풀이 시간: 24분

#### 실수
1. `visited[x] = True` 빼먹는 실수 함

### 🍰 효율적인 해킹
- 플랫폼: 백준 [[문제보기]](https://noj.am/1325)
- 풀이 시간: 29분

pypy3로 채점해야되고 채점 오래걸리는 억까 당함

#### 실수
1. 문제 이해한 줄 알았는데 신뢰관계를 양방향으로 잘못 이해해서 예제 출력이 왜 그렇게 되는지 몰랐었음
2. 노드별 최대 그래프 정점 수 구하는거라 `visited` 초기화를 for문 안에 놓아야되는데 밖에 놓는 실수 함

### 🍰 미로 탐색
- 플랫폼: 백준 [[문제보기]](https://noj.am/2178)
- 풀이 시간: 16분

### 🍰 단지번호붙이기
- 플랫폼: 백준 [[문제보기]](https://noj.am/2667)
- 풀이 시간: 20분

dfs 함수에 `global table` 안썼는데 왜... 수정이 되는거지?? 하고 찾아봤더니 </br>
[여기](https://medium.com/@dltkddud4403/python-%EC%A7%80%EC%97%AD%EB%B3%80%EC%88%98-%EC%A0%84%EC%97%AD%EB%B3%80%EC%88%98-%EA%B4%80%EB%A0%A8-%EA%B0%9C%EB%85%90-4ea2a1865071)에 따르면... 그렇다고 한다.
근데 PS에선 그냥 다 `global` 쓰는게 좋을 것 같다.

### 🍰 쉬운 최단거리
- 플랫폼: 백준 [[문제보기]](https://noj.am/14940)
- 풀이 시간: 21분

### 🔮 트리
- 플랫폼: 백준 [[문제보기]](https://noj.am/1068)
- 풀이 시간: 49분

#### 실수
1. 자식노드가 2개인데 하나가 `target`인 경우와, 자식노드가 1개인데 그게 `target`인 경우일때 서로 dfs 반환값이 달라야 함 -> 중요
2. 부모노드가 항상 0이라는 말이 없었잖아요...

### 🔮 연구소
- 플랫폼: 백준 [[문제보기]](https://noj.am/14502)
- 풀이 시간: 💥**1시간 초과**(조금)

벽 세우는거 재귀로 하는지 몰랐음 </br>
근데 재귀로 하면 pypy 채점만 시간내에 들어가고 AC 받으려면 `itertools`의 `combinations`를 사용해야 함

#### 실수
1. `dy` 쓰다가 `-1, 1, 0, 0` 을 `-1, -1, 0, 0` 으로 해놓고 고치는거 오래걸림. 빨리 치는건 좋은데 정확히 입력됐는지 신경쓰자.. 오타없었으면 30분 내에 끝났음

### 🔮 숫자고르기
- 플랫폼: 백준 [[문제보기]](https://noj.am/2668)
- 풀이 시간: 💥**1시간 초과**

조합 완탐 안됨. [[이유]](https://ko.numberempire.com/combinatorialcalculator.php?n=100&m=50&ordered=false&repeated=false)

이 문제 발상이 좀 어려움. 그리고 조건 따라 `visited`를 복구해야 할수도, 그대로 둬야 할 수도 있음

<details>
  <summary>안되는 코드 (조합 완탐)</summary>
  
  ```python
  import sys
  from collections import defaultdict
  input = sys.stdin.readline
  
  hsh = {}
  n = 0
  ans = []
  
  def dfs(idx, keylst, vallst):
      global ans
      length = 0
      
      if idx > n:
          return
      
      dfs(idx+1, keylst, vallst)
      keylst.append(idx)
      vallst.append(hsh[idx])
      dfs(idx+1, keylst, vallst)
      
      if set(keylst) == set(vallst):
          if len(ans) < len(keylst):
              ans = [x for x in keylst]
              
      keylst.remove(idx)
      vallst.remove(hsh[idx])
  
  
  def solution():
      global hsh, n, ans
      n = int(input())
      hsh = defaultdict(int)
      for i in range(1, n+1):
          hsh[i] = int(input())
      
      dfs(1, [], [])
      print(len(ans))
      print('\n'.join(str(x) for x in ans))
  
  
  if __name__ == '__main__':
      solution()
  ```

</details>

### 🔮 토마토
- 플랫폼: 백준 [[문제보기]](https://noj.am/7569)
- 풀이 시간: 💥**1시간 초과**(+15분정도)

3차원 리스트 초기화 연습이 필요

#### 실수
1. start position 담아놓고 bfs 큐에 다 넣어놓고 시작하는데 dfs마냥 for문 안에서 bfs 돌리는 실수 함 -> 이게 30분정도 먹음
2. **(반례)** 맨 처음부터 다 익어있는 case에 대한 처리 필요

### 🍰 토마토
- 플랫폼: 백준 [[문제보기]](https://noj.am/7576)
- 풀이 시간: 15분

7569번 토마토 먼저 풀어서 너무 쉽게 풀어버림

### 🍰 ABCDE
- 플랫폼: 백준 [[문제보기]](https://noj.am/13023)
- 풀이 시간: 28분

#### 실수
1. dfs 내에서도 값이 `True`가 나오는 순간 return 했어야 하는데 반복문 성실하게 다 돌아서 디버깅하느라 12분 걸림
2. `visited` 체크하는거 누락 주의

### 🍰 공주님을 구해라!
- 플랫폼: 백준 [[문제보기]](https://noj.am/17836)
- 풀이 시간: 50분

특별히 어려운건 없고 마지막 결과 출력할때 경우를 잘 따져야 함

### 🔮 트리와 쿼리
- 플랫폼: 백준 [[문제보기]](https://noj.am/15681)
- 풀이 시간: 49분

#### 실수
1. 메모이제이션이 필요하다 생각하지 않아서 dfs+bfs 조합으로 했더니 시간초과 남. 앞으로 적용될만한 문제는 메모이제이션을 기본적으로 할 것.
2. 또 재귀 깊이 RTE 터짐. 그냥 기본으로 넣자.