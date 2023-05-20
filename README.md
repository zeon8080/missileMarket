
# 미사일마켓 

### 주소
https://zeon8080.store/

### 소개
글 작성과 댓글 작성이 가능한 자유게시판 & 상품을 판매하고 구매할 수 있는 중고 마켓

### 개발 기간
2023년 05월 1일 ~ 2023년 5월 15일

### 기술

- HTML, CSS, JavaScript, TypeScript, React, Next.js, GraphQL

- AWS

### 기술 선택 이유

- React
  리액트의 Virtual DOM 기능으로 실제 DOM으로 적용하기 전에 가상 DOM을 만들어 최종 완성된 결과만을 전달하기 때문에 브라우저의 연산양을 줄여 성능을 개선시켜서 좋고, 코드의 재사용성이 높기 때문에 사용하였습니다.

- TypeScript
  명시적인 정적타입으로 컴파일 단계에서 오류를 포착하여 코드의 가독성을 높여 디버깅이 쉽기 때문에 선택하였습니다.

- GraphQL
  구체적이고 정확하게 받아오고 싶은 데이터만 가져올 수 있으므로 불필요한 Over-fetching을 해결하였습니다.

### 구현 기능

### 게시글 작성 / 수정 / 삭제 / 조회 / 댓글

![게시글작성](https://github.com/zeon8080/missileMarket/assets/119851517/3c632103-1d46-4367-aab7-714cee77ac8e)
![댓글작성](https://github.com/zeon8080/missileMarket/assets/119851517/4674d920-5bc3-464b-98b2-4e6eef1934bf)

- 게시글 작성시 첨부 파일 기능과 링크 첨부 기능이 있습니다.
- 게시글에 댓글 작성, 수정, 삭제가 가능합니다.

### 상품 작성 / 수정 / 삭제 / 조회 / 댓글

![상품작성-min](https://github.com/zeon8080/missileMarket/assets/119851517/3406efa7-5d2a-49b1-aa4e-7428f61c761e)
![상품댓글](https://github.com/zeon8080/missileMarket/assets/119851517/09d68e96-5aa0-444f-a4c8-4bbde7a20dcf)

- 상품 작성시 첨부 파일 기능과 React-quill을 적용하였습니다.
- 상품 게시글에 댓글 작성, 수정, 삭제가 가능합니다.
 
### 충전 / 구매

![충전](https://github.com/zeon8080/missileMarket/assets/119851517/433e188b-8aeb-4ee7-8617-de9d4b10f111)
![상품구매](https://github.com/zeon8080/missileMarket/assets/119851517/cf77bf08-c895-48a7-b6a1-3e30a17eb1b5)

- 외부 솔루션(카카오)를 이용한 충전, 구매가 가능합니다.

### 마이페이지

![마이페이지](https://github.com/zeon8080/missileMarket/assets/119851517/b67c8487-ac67-4853-9217-60de753b0a10)

- 찜한 상품, 판매 중인 상품, 구매한 상품을 확인할 수 있습니다.

### 로그인 / 회원가입 / 권한분기

![로그인](https://github.com/zeon8080/missileMarket/assets/119851517/6f0c198f-71c1-441e-9574-0ac54e24ea61)

- 회원가입 로그인 기능이 정상적으로 구현되었고, 특정 페이지에서 로그인 권한분기 처리가 되어있습니다.

