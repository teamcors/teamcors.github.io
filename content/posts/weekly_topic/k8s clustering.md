---
title: k8s 클러스터링
date: 2023-08-09
tags:
  - weekly topic
image: "../../../static/media/k8s-clustering/k8s-architecture.png"
---

## 쿠버네티스 클러스터?

- 쿠버네티스는 클러스터를 관리하는 도구이다.
- 클러스터는 단일 컴퓨터가 아니라 여러 대의 컴퓨터를 하나의 묶음으로 취급하는 용어이다.
- 쿠버네티스 클러스터는 컨테이너화된 애플리케이션을 실행하는 노드 (워커 머신)의 집합이다.
- 쿠버네티스를 배포하면 클러스터를 얻는다. 즉, 쿠버네티스를 실행 중이라는 것은 클러스터를 실행하고 있다는 의미이다.
- 모든 클러스터는 최소 한 개 이상의 마스터 노드 및 워커 노드를 가진다.

## 클러스터의 영역

쿠버네티스 클러스터는 크게 컨트롤 플레인과 노드로 구성된다.

- 컨트롤 플레인: 제어 영역, Master Node라고도 한다.
- 노드: 애플리케이션 컨테이너를 실행하는 역할, Worker Node라고도 한다.

![k8s-architecture](../../../static/media/k8s-clustering/k8s-architecture.png)

### 1. 컨트롤 플레인 (마스터 노드)

- 클러스터의 상태를 관리하고 명령어를 처리한다.
- etcd, controller-manager, scheduler, kube api server의 컴포넌트를 가진다.
  1. etcd: 클러스터 상태를 저장하는 분산 key-value 저장소
  2. controller-manager: 여러 컨트롤러 프로세스를 관리하는 매니저
  3. scheduler: 각 워커 노드의 자원 사용 상태를 관리하고 자원 상태에 따라 노드에 워크로드를 배포하는 컴포넌트
     - 워크로드: 클러스터에서 실행하려는 작업 혹은 서비스, 프로세스
  4. kube api server: 쿠버네티스 리소스와 클러스터의 상태 관리와 동기화를 위한 API를 제공하는 컴포넌트
- `kubectl` 커맨드는 마스터 노드의 kube apiserver와 커뮤니케이션 하기 위한 용도이다.

### 2. 노드 (워커 노드)

- 컨테이너가 실질적으로 띄워지는 공간
- Container Runtime 위에서 Pod가 실행되며, kubelet, kube-proxy, network-addOn과 같은 여러 컴포넌트들도 포함된다.
  1. kubelet: API 서버와 통신하며 노드의 리소스 상태를 보고하고 관리하는 컴포넌트, 노드 내 컨테이너의 라이프사이클을 관리한다.
  2. CRI (Container Runtime Interface): kubelet이 다양한 컨테이너 런타임과 통신할 수 있도록 쿠버네티스가 자체적으로 준비한 인터페이스
  3. kube-proxy: 클러스터 상 오버레이 네트워크 구성, 네트워크 프록시 및 내부 로드밸런서 역할
