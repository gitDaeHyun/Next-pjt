# SoRhy

## 팀원 소개

| 이름 | 직책 | 역할 |
| --- | --- | --- |
| 이진형 | 팀장 | Unity 게임 개발 |
| 서정희 | 팀원 | Unity 게임 개발 |
| 방정우 | 팀원 | Unity 게임 개발 |
| 노창현 | 팀원 | Unity 게임 개발, Infra |
| 정영록 | 팀원 | Backend, Frontend |
| 전대현 | 팀원 | Frontend |

## 업무 분담

| 기능 | 담당 |
| --- | --- |
| 전적 검색 사이트  | 정영록 , 전대현 |
| 수박 부수기 게임 | 방정우 |
| 수영 레이싱 게임 | 서정희 |
| CI/CD 구축, 발표 | 노창현 |
| Unity 플랫폼 조성 및 게임 개발 | 이진형 |


## 프로젝트 개요

- 프로젝트 기간 : 2023.10.09~2023.11.17 (총7주)
- 프로젝트 명 : SoRhy Project
      가상 오피스 ‘Soma’에서 동료들과 할 수 있는 “캐주얼 리듬 게임” 개발
      플레이 데이터(랭킹, 전적 등)를 확인할 수 있는 웹 사이트 개발
- 기획배경
    - 직방의 메타버스 가상오피스 소마(Soma)는 업무 뿐 아니라 네트워킹과 다양한 이벤트를 지원하는 복합 가상 공간이다. 마치 실제 공간에서 친목을 형성하고 모임을 즐기듯, 다른 유저와 소통할 수 있는 일종의 방안으로 협동 게임 서비스를 제공하고자 한다.
   
- 목표
    - **가상 오피스 ‘Soma’에서 동료들과 할 수 있는 “캐주얼 리듬 게임” 개발**
    - 리듬 게임 옴니버스: 다양한 리듬게임이 결합된 옴니버스 형태의 게임 
    - 캐릭터 조작, 감정표현: 게임 대기실에서 캐릭터 이동 및 감정표현으로 상호작용
    - 플레이 정보 기록 및 검색

- 게임 소개
- 
    **수박 부수기**
    - 노트에 맞춰 리듬 게임을 진행하고, 캐릭터들은 정확도에 따라 수박을 부수게 됨
    - 먼저 수박을 부수는 팀이 승리하는 방식으로 진행

    **수영 레이싱**
    - 박자와 방향에 맞춰 방향키를 누르면, 정확도에 따라 캐릭터가 앞으로 전진하는 레이싱 게임
    - 먼저 결승점에 도달하는 팀이 승리하는 방식으로 진행

- 전적 사이트 소개
    - 사용자가 속한 회사의 게임 이용 내역과 전적 목록 등 출력 가능
    - 자유게시판 기능 ( 커뮤니티 )
    - 사용자의 닉네임 검색을 통한 정보 조회 가능
    - 게임 및 회사별 랭킹 제공

## 프로젝트 제작 시 사용된 기술
- 게임 제작 : Unity
- Back-end : Spring, S3 
- Front-end : Next.js,React,TypeScript,Zustand,Styled-components
- Infra : Docker, Jenkins
<div>
  <img src="https://img.shields.io/badge/Unity-000000?style=for-the-badge&logo=Unity&logoColor=white">
</div>
<div>
  <img src="https://img.shields.io/badge/Spring-6DB33F?style=for-the-badge&logo=Spring&logoColor=white">
  <img src="https://img.shields.io/badge/AmazonS3-569A31?style=for-the-badge&logo=AmazonS3&logoColor=white">
</div>
<div>
  <img src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white">
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=Next.js&logoColor=white">
  <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">
  <img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=black">
</div>
<div>
  <img src="https://img.shields.io/badge/docker-2496ED?style=for-the-badge&logo=docker&logoColor=white">
  <img src="https://img.shields.io/badge/jenkins-D24939?style=for-the-badge&logo=jenkins&logoColor=white">

</div>


## 개발문서

[https://docs.google.com/spreadsheets/d/1hah26dYyuk8Y9sUoSdCa1p2HzKZPZQIABc24F8gIm18/edit?usp=sharing](https://docs.google.com/spreadsheets/d/1hah26dYyuk8Y9sUoSdCa1p2HzKZPZQIABc24F8gIm18/edit?usp=sharing)

## ERD

![ERD](./assets/ERD.png)

[ERD.pdf](./assets/ERD.pdf)

## Git Rule

**branch**

<aside>
💡 main → BE/feature/{기능이름} or FE/feature/{기능이름}

</aside>


**merge**

```jsx
Merge Pull requests 보내서 확인 후 Merge.
Merge 후 git pull 잊지 않기.
```


## 주요기능

![주요기능1](./assets/primary1.JPG)

![주요기능2](./assets/primary2.JPG)

![주요기능3](./assets/primary3.JPG)

![주요기능4](./assets/primary4.JPG)

## 페이지 설명

### 1. SiteMap SSaver 웹 페이지의 전체 사이트맵

![사이트맵](./assets/sitemap.JPG)

### 2. Main 페이지 : 주요 기능 요약과 각 기능 페이지로 이동 가능한 페이지

![메인페이지](./assets/main.JPG)

| 구분 | 항목 | 내용 |
| --- | --- | --- |
| 1 | 캐러셀 | 각 슬라이드 클릭시 페이지 이동 |
| 2 | MAIN 버튼 | 메인 페이지로 이동 |
| 3 | COMPARE 버튼 | 예적금 금리 비교 페이지로 이동 |
| 4 | SEARCH BANK 버튼 | 가까운 은행 찾기 페이지로 이동 |
| 5 | EXCHANGE 버튼 | 환율계산기 페이지로 이동 |
| 6 | BOARD 버튼 | 게시판 페이지로 이동 |
| 7 | CREATE 버튼 | 게시글 작성 페이지로 이동 |
| 8 | ACCOUNT 버튼 | 로그인 또는 회원가입 페이지로 이동 |

### 3. 로그인 페이지 : 로그인 서비스를 제공하는 페이지

![로그인](./assets/login.JPG)

| 구분 | 항목 | 내용 |
| --- | --- | --- |
| 1 | 로그인 버튼 | 입력한 정보로 로그인 요청 |

### 4. 회원가입 페이지

![회원가입](./assets/signup.JPG)

| 구분 | 항목 | 내용 |
| --- | --- | --- |
| 1 | 이름 입력칸 | 이름 입력 |
| 2 | 이메일 입력칸 | 이메일 입력 |
| 3 | 비밀번호 입력칸 | 비밀번호 입력 |
| 4 | 비밀번호 확인칸 | 비밀번호 일치하는지 확인 |
| 5 | 나이 선택 버튼 | 본인의 나이 선택 |
| 6 | 자산 선택 버튼 | 본인의 자산 선택 |
| 7 | 월급 선택 버튼 | 본인의 월급 선택 |
| 8 | SIGN UP 버튼 | 입력한 정보로 SSaver 회원으로의 가입을 요청 |

### 5. Compare 페이지 : 예적금 금리를 한 눈에 볼 수 있는 페이지

**예적금 상품 목록**

![Copmpare1](./assets/compare1.JPG)


![Copmpare2](./assets/compare2.JPG)

| 구분 | 항목 | 내용 |
| --- | --- | --- |
| 1 | 정기 예금 버튼 | 모든 은행의 정기 예금 정보를 제공 |
| 2 | 정기 적금 버튼 | 모든 은행의 정기 적금 정보를 제공 |
| 3 | 은행별 선택 버튼 | 원하는 은행으로 조건 변경 |
| 4 | 금리 선택 버튼 | 금리 높은 순, 낮은 순 선택 가능 |
| 5 | 기간 선택 버튼 | 원하는 기간으로 조건 변경 |
| 6 | 이자 지급 방식 선택 버튼 | 단리, 복리 선택 가능 |

**예적금 상품 상세 페이지**

![Copmpare3](./assets/compare3.JPG)

| 구분 | 항목 | 내용 |
| --- | --- | --- |
| 1 | 정기 예금 버튼 | 모든 은행의 정기 예금 정보를 제공 |
| 2 | 정기 적금 버튼 | 모든 은행의 정기 적금 정보를 제공 |
| 3 | 은행별 선택 버튼 | 원하는 은행으로 조건 변경 |
| 4 | 금리 선택 버튼 | 금리 높은 순, 낮은 순 선택 가능 |
| 5 | 기간 선택 버튼 | 원하는 기간으로 조건 변경 |
| 6 | 이자 지급 방식 선택 버튼 | 단리, 복리 선택 가능 |

### 6. Search Bank 페이지

![은행찾기](./assets/map.JPG)

| 구분 | 항목 | 내용 |
| --- | --- | --- |
| 1 | 지도 | 주변 은행 표시 |
| 2 | 키워드 검색 창 | 은행 키워드 검색시 해당 은행 표시 |

### 7. Exchange 페이지

![환율계산기](./assets/calc.JPG)

| 구분 | 항목 | 내용 |
| --- | --- | --- |
| 1 | 외화 선택 버튼 | API사이트에서 제공하는 모든 외화 선택 가능 |
| 2 | 환전 금액 입력 | 원하는 만큼의 환전 금액 입력 |
| 3 | 원화 계산 | 입력한 환전 금액 원화로 변환 |
| 4 | swap 버튼 | 외화와 원화 변경 |
| 5 | 업데이트 | 최근 외화 환전율 업데이트 |

### 8. Board 페이지

**게시글 목록**

![게시글목록](./assets/board1.JPG)
| 구분 | 항목 | 내용 |
| --- | --- | --- |
| 1 | CREATE 버튼 | 게시글을 작성할 수 있는 CREATE페이지로 이동 |
| 2 | Article List | 게시글 전체 조회 |
| 3 | DETAIL 버튼 | 각 게시글 상세 조회 |

**게시글 상세**

![게시글상세](./assets/board2.JPG)

| 구분 | 항목 | 내용 |
| --- | --- | --- |
| 1 | 제목 | 제목 표시 |
| 2 | 내용 | 내용 표시 |
| 3 | 작성시간 | 작성시간 표시 |
| 4 | 수정 버튼 | 해당 게시글을 수정할 수 있는 페이지로 이동 |
| 5 | 삭제 버튼 | 해당 게시글을 삭제 |
| 6 | 좋아요 버튼 | 해당 게시글을 좋아요 할 수 있음 |
| 7 | 댓글 입력 창 | 댓글 입력 후 엔터 또는 작성 클릭시 댓글 생성 |
| 8 | 댓글 수정 버튼 | 해당 댓글을 수정 |
| 9 | 댓글 삭제 버튼 | 해당 댓글을 삭제 |

게시글, 댓글 수정

![게시글댓글수정](./assets/board3.JPG)

| 구분 | 항목 | 내용 |
| --- | --- | --- |
| 1 | 게시글 수정 버튼 | 수정한 게시글을 게시 |
| 2 | 댓글 수정 취소 버튼 | 댓글 수정을 취소 |
| 3 | 댓글 수정 확인 버튼 | 댓글을 수정 |

### 9. Create 페이지

![게시글작성](./assets/create.JPG)

| 구분 | 항목 | 내용 |
| --- | --- | --- |
| 1 | 게시글 제목 입력칸 | 제목 입력 |
| 2 | 게시글 내용 입력칸 | 내용 입력 |
| 3 | 게시글 작성 | 게시글을 작성 |

### 10. Profile 페이지

**프로필페이지**

![본인정보](./assets/profile1.JPG)

| 구분 | 항목 | 내용 |
| --- | --- | --- |
| 1 | 수정 버튼 | 프로필 수정 페이지로 이동 |

**프로필 수정**

![프로필수정](./assets/profile2.JPG)

| 구분 | 항목 | 내용 |
| --- | --- | --- |
| 1 | 나이 선택 버튼 | 나이 수정 가능 |
| 2 | 자산 선택 버튼  | 자산 수정 가능 |
| 3 | 월급 선택 버튼  | 월급 수정 가능 |
| 4 | 저장 버튼 | 수정된 프로필 저장 |

**관심 상품 목록**

![관심상품목록](./assets/profile3.JPG)

| 구분 | 항목 | 내용 |
| --- | --- | --- |
| 1 | 예금 | 관심 상품 등록한 예금 상품 목록  |
| 2 | 적금 | 관심 상품 등록한 적금 상품 목록 |

**한 눈에 보는 내 상품**

![내상품비교](./assets/profile4.JPG)

| 구분 | 항목 | 내용 |
| --- | --- | --- |
| 1 | 통계보기 버튼 | 예적금 금리별 그래프로 표시 |
| 2 | 예금 | 관심 등록한 예금 상품 금리 그래프로 표시 |
| 3 | 적금 | 관심등록한 적금 상품 금리 그래프로 표시 |

## Build Process

### 5/16

<aside>
💡 기본 환경 세팅 완료(협업 툴(노션,깃허브),가상 환경 등), Django-Vue.js 연동 완료, 기능 분담 완료
    기본 ERD 생성 완료(다만 추후에 업데이트 필수), 기본적인 WorkFlow 작성 완료
   
</aside>

---

### 5/17

<aside>
💡 Django → KaKaoMap 구현, 환율 계산기 구현,예/적금 데이터 DRF
Vue.js → 예/적금 데이터 수신받아 Vue+Vuetify로 구현

</aside>

---

### 5/18

<aside>
💡 Django → API를 활용하여 KaKaoMap 구현, 환율 계산기 구현,예/적금 데이터 DRF
    
   Vue.js → 예/적금 데이터 수신받아서 기본적인 Vue 파일 생성 완료, Vuetify를 사용할지 BootStrap을 사용할지 고민하던 중 두가지를 결합하여 사용하기로 결정
   그 중에서도 Vuetify2를 중점적으로 사용하여 Front-Page를 구성하고자 함

 

</aside>

---

### 5/19

<aside>
💡 예/적금 데이터를 활용하여 DepositList, SavingList를 구현함. 다만 아직 CSS 미비된 상태이며, Null값인 데이터들을 개별 처리할 필요성이 있음
    
  현재는 은행Logo, 은행명, 상품명, 평균금리를 활용하여 예적금/리스트 구현
    
  은행Logo는 Figma를 통해 이미지 파일을 확보하였음
    
  프로필 페이지 틀 완성 -> Username과 Email, Salary, Assets, Age를 활용함


</aside>

---

### 5/20

<aside>
💡 DepositList와 SavingList에서 이어지는 DetailDeposit, DetailSaving 일부 구현
    
   추가적으로 DepositList 및 SavingList 기본 CSS 작업 완료
    
   DB에서 특정 데이터만 추출한 후 DetailPage에 삽입함(기간, 저축 금리, 저축 금리 유형명, 공시 시작일, 공시 종료일, 적립 유형명, 최고 우대금리, 최고 한도, 가입 조건, 가입 방법, 우대 조건
   기타 특이사항) 
   추후 ProfilePage와 연동하여 관심 상품 등록 기능 구현 예정

</aside>

---

### 5/21

<aside>
💡 DetailPage에서 이자 계산 기능 추가 -> 상단에 표기된 저축 금리와 최고 우대 금리, 저축 금리 유형명, 기간을 활용하여 이자 계산 기능 구현함
    
   추가적으로 Vuetify2를 활용하여 DetailPage의 디자인을 구축함
    
   회원가입을 구성하였음. 회원 가입시 사용자에게 이름,이메일,자산,나이,월급 정보를 받고 DB에 Account를 저장하였음.
   회원가입시 받은 정보를 바탕으로, 자산,나이,월급에 맞는 예/적금 상품을 추천하는 추천시스템을 구현할 예정
    
   DB에 저장된 정보를 바탕으로 Login,Logout 기능을 구현함. Back-Front 간 통신에 있어서는 Django_auth_TOKEN을 사용함.
   axios를 활용한 비동기 통신으로 Token 및 정보를 주고 받고 Vue에서는 서버로부터 받은 유저 정보를 State에 저장함.
   

</aside>

---

### 5/22

<aside>
💡 State에 저장한 정보들을 바탕으로 Profile 세부 구성 -> 월급,자산,나이를 Selector로 구성함으로써 사용자의 편의성을 높임.
    
   관심 상품 등록 기능 구현 -> 유저가 관심 상품 등록 버튼을 누르게 되면 유저의 프로필에 예/적금을 구분하여 표시되는 동시에 서버에 해당 유저가 특정 상품을 등록하였음을 표현하는
   InterestProduct 모델에 상품 정보와 userid를 전달하여 DB에 저장함.
    
   KaKaoMap API를 통한 은행 검색 페이지를 Vue에서 구현하였으며 이와 동시에 환율 계산기 또한 Vue에 구현함 -> 추가적으로 BootStrap을 활용하여 환율 계산기 디자인을 완료함.
   상단 네비게이션 바의 메뉴들과 속성들을 재정의함

</aside>

---

### 5/23

<aside>
💡 게시판 기능 구현 -> 게시판은 로그인 된 사용자만 이용할 수 있으며, 비로그인된 유저가 접속 시도시 Alert와 함께 로그인 페이지로 이동하게 됨.
   로그인을 완료하면 게시판에 접속되며, CREATE버튼을 통해 글을 작성할 수 있음. 글 작성 뿐만 아니라 본인 및 다른 사람의 게시글을 확인할 수 있음(Detail 버튼 구현)
   Detail 페이지로 들어가게 되면, 작성시간과 제목 내용이 표시되며 오직 글을 작성한 사용자만이 이를 수정하거나 삭제할 수 있는 권한을 부여함.
   게시글에 좋아요 버튼을 구현하여 하트 모양의 아이콘을 누르면 게시글의 좋아요 개수가 증가하는 부가적인 기능 또한 구현함.
   
   라우터 기능을 사용하여 Profile 페이지에서도 관심 상품을 해제하거나 재등록 할 수 있게 구현함.
    
   DepositList와 SavingList에 Vuetify를 활용한 디자인을 적용함 -> 사용자가 확인하기 쉽게 한 줄에 4개씩 구현 -> ActiveTab을 활용하여 예/적금 페이지를 구분함으로써 사용자가
   페이지를 새로고침하지 않고도 예/적금 상품을 확인할 수 있음
    

</aside>

---

### 5/24

<aside>
💡 Profile페이지에 '한 눈에 보는 내 상품' 기능을 구현함 -> Chart.js를 사용하였으며 금리별, 기간별, 저축 금리 유형별, 은행별 리스트에 대한 그래프를 생성함.
    
   통계보기 버튼을 통해 확인하고 싶은 사용자만 확인할 수 있게 구현하였으며, 차트가 그려지는 시간을 확보하는 효과를 얻음. 그래프의 X축 인자들은 모두 내 관심 상품 목록에 있는 예/적금
   상품들이며, y축은 반응형으로 구현함으로써 y축의 레이블을 고정시키지 않고 유동적으로 활용하고자 노력함.
    
   게시글에 대한 댓글 기능을 구현함. 사용자가 댓글을 작성하게 되면 게시글 밑에 댓글이 달리게 되며, 오직 댓글을 작성한 사용자만이 수정,삭제 권한을 가지게 됨.
   추가적으로 BootStrap을 활용하여 게시판에 대한 디자인을 구현하였음.

</aside>

---

### 5/25

<aside>
💡 Compare 페이지에 검색 조건을 배치함. 검색 조건에는 은행별, 금리, 기간, 이자 지급 방식이 있으며 각각의 Selector는 개별적으로 동작하여 중첩이 가능하게 구현함.
    
   금융회사 API를 추가적으로 받아와서 DetailDeposit,DetailSaving 페이지에 문의번호, 홈페이지 주소 등을 추가하였음 -> 이를 통해 세부 사항 외에도 추가적으로 궁금한 사항이 있는 유저는
   URL을 통해 정보를 파악할 수 있게 됨.
    
   BootStrap의 캐러셀을 활용하여 Main 페이지를 디자인하였음.
    
   개발 과정에서 추가된 모델들을 정리하고 ERD에 추가하였음.
    
   발표 및 제출 PPT를 작성하였음.
    
   이로써 초기 회의에서 구현하고자 했던 기능들을 모두 구현하였음. 다만 CSS적인 부분이나 추천 시스템에 대해서는 미비하다는 생각이 들었고, 추후에 꼭 구현할 예정임.
   

</aside>

---
