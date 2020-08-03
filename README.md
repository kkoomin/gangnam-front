# gangnam-front

> 강남엄마 프론트엔드 개발자 전형 사전과제

## 프로젝트 빌드 및 실행 방법

1. 프로젝트 설치

```
npm install
```

2. 프로젝트 Development 모드로 실행

```
npm run serve
```

3. 프로젝트 배포

```
npm run build
```

## 크로스브라우징 대응

- caniuse.com을 통하여 브라우저 별 CSS support 범위를 확인
- `autoprefixer` 패키지로 "-ms-" "-moz-" 등의 prefix를 자동으로 세팅

1. 범위

- Chrome : Latest(58+)
- IE : IE10+
- Edge: Latest(16+)
- Firefox : Latest(54+)
- Safari : Latest(10.1)

2. 해당 범위 설정 이유

- 대부분의 CSS 사용에 있어 IE6-8 범위는 지원되지 않는다는 점, 그리고 브라우저 점유율을 보고 판단했을 때, IE9 이상으로 크로스 브라우징 대응하는 것이 효율적이라 판단했습니다.
- 포스트 목록 보기를 구현할 때 사용한 `display: grid` 관련 CSS가 타 브라우저에서는 3년 이내의 비교적 최신 버전에서는 지원되는 반면, IE에서는 지원 범위가 다소 좁다는 걸 확인하고 해당 부분을 수정 적용했습니다.
