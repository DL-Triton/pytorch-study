---
title: "PyTorch 공부 시작"
date: "2026-03-12"
description: "딥러닝 스터디 시작 기록"
---

## PyTorch란?

PyTorch는 Meta(Facebook)에서 만든 딥러닝 프레임워크로, 파이썬 친화적이고 직관적인 API를 제공합니다.

## 왜 PyTorch인가?

- 동적 계산 그래프(Dynamic Computational Graph) 지원
- 연구/실험에 최적화
- 커뮤니티가 크고 자료가 많음

## 오늘 한 것

- 공식 문서 훑어보기
- 기본 Tensor 개념 확인

```python
import torch

x = torch.tensor([1.0, 2.0, 3.0])
print(x)  # tensor([1., 2., 3.])
```
