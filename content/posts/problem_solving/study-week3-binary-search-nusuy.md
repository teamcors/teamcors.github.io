---
title: 3주차 코테 풀이 회고 - nusuy
image: "../../static/media/asdf.jpg"
date: 2024-03-14
tags:
  - problem solving
  - algorithm
description: 코테 스터디 3주차 회고록 - nusuy
---

> 3주차 코테 풀이 회고
>
> - 풀이 주제: 이분탐색
> - 회고 작성자: [@nusuy](https://github.com/nusuy)

> 체감 난이도 분류
>
> - 🌧️: 상
> - 🌤️: 중
> - ☀️: 하

## 풀이 회고

### 🌧️ 입국심사

- 플랫폼: [프로그래머스](https://school.programmers.co.kr/learn/courses/30/lessons/43238)
- 풀이 시간: 1시간 초과

1. 모든 사람들이 심사를 받는 데 부족하지도, 넘치지도 않는 최적의 값 찾기
2. 설정 시간 동안 n명 초과했다면 시간이 너무 많은 것, n명 미만이라면 시간이 너무 부족한 것. (단, n명 심사했더라도 시간이 남을 수 있다.)
3. input 최대 길이가 지나치게 길고, 특정 값 찾는 문제라면 이분탐색 의심해보기

### 🌧️ 징검다리

- 플랫폼: [프로그래머스](https://school.programmers.co.kr/learn/courses/30/lessons/43236)
- 풀이 시간: 1시간 초과

1. TLE

   ```python
   from itertools import combinations
   def solution(distance, rocks, n):
         answer = []

         comb = combinations(rocks,n)
         for c in comb:
            rocks_cp = rocks[:]
            for i in range(n):
               rocks_cp.remove(c[i])
            rocks_cp.append(0)
            rocks_cp.append(distance)
            rocks_cp.sort()

            d = []
            for i in range(1,len(rocks_cp)):
               d.append(rocks_cp[i]-rocks_cp[i-1])

            answer.append(min(d))

         return max(answer)
   ```

   - 탐색 기준: 최소값
   - 바위를 n개 제거했을 때 최소값이 탐색 기준과 같아야 한다.
   - 처음 위치를 0으로 설정하고, 다음 바위까지의 거리가 mid보다 작으면 제거하고, 아니면 그 바위로 이동한다.

### 🌧️ 선분 위의 점

- 플랫폼: [백준](https://www.acmicpc.net/problem/11663)
- 풀이 시간: 1시간 초과

1. 선분 위 점 중 최소값의 인덱스, 최대값의 인덱스 구하기
2. 최소, 최대 중 하나라도 없다면 0
   - 선분의 시작점보다 최대값이 작은 경우
   - 선분의 끝점보다 최소값이 큰 경우
   - 최대-최소
3. 이분탐색 대상을 잘 고려하자

### 🌤️ IF문 좀 대신 써줘

- 플랫폼: [백준](https://www.acmicpc.net/problem/19637)
- 풀이 시간: 45m 22s

1. WA
   - 출력 가능한 칭호가 여러 개인 경우에 대한 처리 누락
2. TLE

   ```python
   import sys
   input = sys.stdin.readline

   n, m = map(int, input().split())
   titles = []
   cp_list = []
   for i in range(n):
      title, cp = input().split()
      if cp not in cp_list:
         titles.append(title); cp_list.append(int(cp))

   def find_title(cp):
      left, right = 0, len(cp_list) - 1
      while left <= right:
         mid = (left + right) // 2
         if cp_list[mid] >= cp:
               right = mid - 1
         else:
               left = mid + 1
      print(title[right+1])


   for i in range(m):
      find_title(int(input()))

   ```

### ☀️ 랜선 자르기

- 플랫폼: [백준](https://www.acmicpc.net/problem/1654)
- 풀이 시간: 15m 47s

1. WA
   - 만들어진 랜선 개수가 n보다 클 경우도 정답이 될 수 있다.
   - 따라서 `mid>=n` 조건을 만족한 경우 `answer`을 저장해두고 이분탐색을 재개해야한다.

### 🌤️ 예산

- 플랫폼: [백준](https://www.acmicpc.net/problem/2512)
- 풀이 시간: 37m 06s

1. TLE
   - 정답인 경우 `break` 누락으로 인해 무한 루프
2. WA (테스트 케이스 2 실패)
   - 정답인 경우를 모두 찾아내지 못함
     1. 예산 안에 딱 맞춘 경우
     2. 예산이 남지만, 더 이상 분배 불가한 경우
     3. 예산이 남지만, 요청 예상을 모두 충족한 경우
     - 위 3가지에서 3번 조건 누락

### ☀️ 나무 자르기

- 플랫폼: [백준](https://www.acmicpc.net/problem/2805)
- 풀이 시간: 22m 07s

1. TLE
   - 잘린 나무 길이 검사 중 mid 값을 초과했다면 반복문 중단

### 🌧️ 두 용액

- 플랫폼: [백준](https://www.acmicpc.net/problem/2470)
- 풀이 시간: 1시간 초과

1. WA
   - 투포인터 사용하여 풀이

### 🌤️ 입국심사

- 플랫폼: [백준](https://www.acmicpc.net/problem/3079)
- 풀이 시간: 13m 09s

1. `mid//time` ➡️ 하나의 입국심사대에서는 한 명만 심사 가능
2. 의문점: `times`를 정렬할 필요가 없는가?

### 🌤️ 색종이와 가위

- 플랫폼: [백준](https://www.acmicpc.net/problem/20444)
- 풀이 시간: 43m 19s

1. TLE
   - `(가로 절단 횟수 +1)*(세로 절단 횟수 +1)=조각 개수` 이므로 조각 개수에 대한 약수를 미리 구해두고자 로직을 추가해서 시간 초과
     - 약수 미리 구하는 로직 없애고 이진탐색 범위를 `[1,k//2]`으로 설정
2. WA
   - 이진 탐색 대상인 가로 절단 횟수를 이용해서 `count`를 계산하고 k(조각 개수)와 비교해야하는데 n(절단 횟수)과 비교
