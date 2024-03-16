---
title: 3주차 코테 풀이 회고 - Chaeeun-Han
image: '../../../static/media/asdf.jpg'
date: 2024-03-14
tags:
  - problem solving
  - algorithm
description: 코테 스터디 3주차 회고록 - Chaeeun-Han
---
# 3주차 코테 풀이 회고
- 3주차 주제: 이진탐색
- 회고 작성자: [@Chaeeun-Han](https://github.com/chaeeun-Han)

## 체감 난이도 분류
- 🥳: 감잡았어요
- 🤓: 새로운 유형이에요
- 😵: 어려워요

## 풀이 회고

### 🥳 선분 위의 점(748ms)
- 플랫폼: 백준 [[문제보기]](https://www.acmicpc.net/problem/11663)
- 풀이 시간: 37min 14sec
- 포인트: 처음 푼 이진 탐색 문제라 어떤 것을 target으로 잡을지 헷갈렸는데.
정렬하지 않을 것을 target으로 잡고, start와 end 포인트로 mid값을 기준삼아 target의 인덱스를 구한다.

### 🥳 IF문 좀 대신 써줘(400ms)
- 플랫폼: 백준 [[문제보기]](https://www.acmicpc.net/problem/19637)
- 풀이 시간: 38min 34sec
- 포인트: 딕셔너리로 첫 접근을 해서, 인덱스를 해결할 방법을 찾다가 name/value list를 분류해서 append함
- 실수: 문제에서 정렬되어 주어진다는 것을 읽지 못해서 sort하기 위해 딕셔너리로 접근함.

### 🤓 입국심사(0.03ms)
- 플랫폼: 프로그래머스 [[문제보기]](https://school.programmers.co.kr/learn/courses/30/lessons/43238)
- 풀이 시간: 35min 41sec
- 포인트: 모든 사람이 심사를 받을 수 있는 최소 시간을 찾기 위해, 이분 탐색의 조건을 이용하여 가능한 최소 시간을 찾아야함. left를 최소시간, right를 최대시간으로 잡고 해결

mid 시간 동안 처리할 수 있는 사람 수 계산할 때, `total_people = sum(mid // time for time in times)` 으로 sum 내부에 for문을 삽입할 수 있음.

### 🤓 랜선 자르기(84ms)
- 플랫폼: 백준 [[문제보기]](https://www.acmicpc.net/problem/1654)
- 풀이 시간: 47min 57sec
- 포인트: 타겟 길이를 변수로 두고 각 랜선의 길이를 타겟 길이로 나누고 합산하여 총 랜선의 갯수를 계산하는 `count_lansens(lansens, target_length)`를 만드는 것.

### 🥳 예산(68ms)
- 플랫폼: 백준 [[문제보기]](https://www.acmicpc.net/problem/2512)
- 풀이 시간: 32min 29sec
- 포인트: 프로그래머스 입국심사랑 유사한 풀이 방식

### 🥳 나무 자르기(2148ms)
- 플랫폼: 백준 [[문제보기]](https://www.acmicpc.net/problem/2805)
- 풀이 시간: 36min 31sec

### 😵 징검다리(84.34ms)
- 플랫폼: 프로그래머스 [[문제보기]](https://school.programmers.co.kr/learn/courses/30/lessons/43236)
- 풀이 시간: 52min 14sec
- 포인트: 조합으로 접근해서 탐색하려다가 시간초과. remove_cnt변수를 생성해서 최소 길이와 최대 길이의 중간값보다 작을 경우 돌을 빼버리는 방식.

### 🥳 입국심사(616ms)
- 플랫폼: 백준 [[문제보기]](https://www.acmicpc.net/problem/3079)
- 풀이 시간: 12min 46sec
- 프로그래머스 입국심사랑 같음 

### 😵 색종이와 가위(40ms)
- 플랫폼: 백준 [[문제보기]](https://www.acmicpc.net/problem/20444)
- 풀이 시간: 57min 09sec
- 포인트: 총 조각의 갯수는 (가로 자른 횟수 + 1)*(세로 자른 횟수 + 1).
mid를 (가로자른 횟수)라 하면 y는 N-(가로 자른 횟수)로 탐색

### 🥳 사냥꾼(500ms)
- 플랫폼: 백준 [[문제보기]](https://www.acmicpc.net/problem/8983)
- 풀이 시간: 40min 08sec
- 포인트: [[선분 위의 점]](https://www.acmicpc.net/problem/11663) 풀이 방식과 유사하다고 생각함.
정렬을 사대로 두고 동물과 사대 거리 공식을 사정거리 l(target)과 비교하며 start, end를 이동하는 방식.
동물 좌표 x가 사대보다 오른쪽에 있으면 start = mid + 1. 왼쪽에 있으면 end = mid - 1. 