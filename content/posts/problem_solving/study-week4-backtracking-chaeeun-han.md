---
title: 4주차 코테 풀이 회고 - Chaeeun-Han
image: ''
date: 2024-03-30
tags:
  - problem solving
  - algorithm
description: 코테 스터디 4주차 회고록 - Chaeeun-Han
---
# 4주차 코테 풀이 회고
- 4주차 주제: 백트래킹
- 회고 작성자: [@Chaeeun-Han](https://github.com/chaeeun-Han)

## 체감 난이도 분류
- 🥳: 감잡았어요
- 🤓: 새로운 유형이에요
- 😵: 어려워요

## 풀이 회고
- 문제 대다수를 순열/조합으로 정말 쉽게 접근하고 풀었지만, 백트래킹 풀이에 맞지는 않는 것 같다.
- O(n!) 시간복잡도를 갖는다.

### 🥳 부분수열의 합(480ms)
- 플랫폼: 백준 [[문제보기]](https://www.acmicpc.net/problem/1182)
- 풀이 시간: 10min 27sec

### 🥳 도영이가 만든 맛있는 음식(44ms)
- 플랫폼: 백준 [[문제보기]](https://www.acmicpc.net/problem/2961)
- 풀이 시간: 17min 14sec
- 실수: 변수 초기화 구간을 잘 생각해 볼 것

### 🥳 N과 M(9)(116ms)
- 플랫폼: 프로그래머스 [[문제보기]](https://www.acmicpc.net/problem/15663)
- 풀이 시간: 24min 21sec
- 학습: set에는 tuple형태만 add할 수 있다. `print(*answer)`을 할 경우 split되어 출력할 수 있다. `Permutation`은 순서를 고려하여 뽑는 것으로 (1, 7)과 (7, 1)을 다른 것으로 취급한다.

### 🥳 N과 M(10)(40ms)
- 플랫폼: 백준 [[문제보기]](https://www.acmicpc.net/problem/15664)
- 풀이 시간: 4min 19sec
- 학습: `combinations` 는 순서 상관없이 뽑는 것으로 (1, 7)과 (7, 1)을 같은 것으로 취급한다.

### 🥳 N과 M(11)(1284ms)
- 플랫폼: 백준 [[문제보기]](https://www.acmicpc.net/problem/15665)
- 풀이 시간: 5min 56sec
- 학습: `product`는 원소의 중복을 허용하여 repeat 파라미터로 중복 횟수를 지정할 수 있다.

### 🥳 N과 M(12)(52ms)
- 플랫폼: 백준 [[문제보기]](https://www.acmicpc.net/problem/15666)
- 풀이 시간: 1min 47sec
- 학습: `combinations_with_replacement`는 중복!조합!으로 순서 상관없이 중복을 허용하여 뽑는 것이다. 

### 😵 연산자 끼워넣기(76ms)
- 플랫폼: 프로그래머스 [[문제보기]](https://www.acmicpc.net/problem/14888)
- 풀이 시간: 44min 11sec
- 학습: a//b 과 int(a/b)의 차이는 a//b는 나눈 값을 내림처리를 진행하지만, int()는 소수점을 버리는 처리의 차이가 존재
- 포인트: 순열과 조합으로 시도했었으나, 시간초과가 나서 백트래킹을 처음 적용해본 문제였다. 연산자를 dfs의 파라미터로 각각 받아서 재귀로 호출하며 -1을 시킨다.

### 😵 줄어드는 수(56ms)
- 플랫폼: 백준 [[문제보기]](https://www.acmicpc.net/problem/1174)
- 풀이 시간: 50min 54sec
- 포인트: 먼저 combinations로 줄어드는 모든 숫자를 만들어 nums list에 append하기.

### 😵 N-Queen(30160ms)
- 플랫폼: 백준 [[문제보기]](https://www.acmicpc.net/problem/9663)
- 풀이 시간: 57min 09sec
- PyPy3로 통과. n-queen문제는 대표적인 백트래킹 문제. 조합으로 시간초과가 나는 것은 모든 조합을 만들어놓고 가능한지 또 이중for문으로 탐색하기 때문에 O(n! * n^2)의 시간복잡도를 갖는다. 따라서 n!은 매우 빠르게 증가하기 때문에 n이 커질 수록 매우 느려진다.
- 포인트: 퀸은 같은 행과 열에 있으면 안된다. 행 번호의 차이와 열 번호의 차이가 같으면 서로 다른 두개의 퀸은 대각선에 위치하는 것이다. 퀸의 위치는 index가 행이고 value가 열인 board를 만들어 탐색한다.

``` python
n = int(input())
cnt = 0
board = [0] * 15


def is_valid(depth):
    for i in range(depth):
        if board[depth] == board[i] or abs(depth - i) == abs(board[depth] - board[i]):
            return False
    return True


def dfs(depth):
    global cnt
    if depth == n:
        cnt += 1
        return

    for i in range(n):
        board[depth] = i
        if (is_valid(depth)):
            dfs(depth + 1)

dfs(0)
print(cnt)
```