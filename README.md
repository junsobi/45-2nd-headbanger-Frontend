# Wecode 2nd 프로젝트
팀명 : headbanger <br>
Product Manager: 장인석(B)<br>
Project Manager: 탁호진(B)<br> 
Teammates: 이지은(B), 김준섭(F), 김태원(F), 이수빈(F), 이소진(F)<br>



-------------

## 팀이름 : HeadBanger

- 개발자로서 능동적인 소통을 중요시하는 팀 !
- 마치 록 가수 처럼 다른 사람이 말하면 잘 듣고 이해하여 고개를 끄덕인다 라는 의미를 담고 있습니다.


- 페이지 이름 : CVG

## CVG : Camping Very Good!

- 매일 매일 반복되는 피곤한 일상에서부터의 getaway

- 잠시 동안만이라도, 평소 boundary에서 벗어나, 휴식을 취할 수 있는 기회를 제공

- <h4>Product</h4> : 캠핑 존, 각 지역 캠핑 존

- <h4>End User</h4> :꼭 휴가철만이 아니더라도, 가족들과 함께 떠나고 싶은 직장인들, 
            친구들과 함께 추억을 쌓으러 오는 대학생들,
            느긋하게 자연을 즐기려는 장년층,
            남녀노소할 것 없이 모두가 즐기는 서비스
            주 고객층(결제를 진행하는 사람): 20중후반부터
            

--------------

### Nav바

### [FE] - 김준섭 담당

![검색Nav바_AdobeExpress](https://github.com/wecode-bootcamp-korea/45-2nd-headbanger-Frontend/assets/125236449/b96151e6-619c-4c5f-b2f7-3c4b16df061c)


전체적인 데이터들을 리덕스를 활용해 props를 덜 사용하고 추후 리스트페이지에서 쉽게 데이터 접근이 가능토록 했음
선택된 데이터들로 쿼리문을 활용해 상품리스트로 연결되며 리덕스에 저장된 데이터를 활용해 메인페이지에서 선택된 내용이 리스트에서도 똑같이 보이도록함



---------------


### 상품 상세 페이지


![캠핑장정보_더보기_AdobeExpress](https://github.com/wecode-bootcamp-korea/45-2nd-headbanger-Frontend/assets/125236449/6a698f3b-b24c-40e5-b962-172de3399cf3)
![존별_사용가능인원_AdobeExpress](https://github.com/wecode-bootcamp-korea/45-2nd-headbanger-Frontend/assets/125236449/1d9aa551-e3dd-47b8-b0e7-ce246c983e6a)
![로그인안되있으면_로그인으로_AdobeExpress](https://github.com/wecode-bootcamp-korea/45-2nd-headbanger-Frontend/assets/125236449/f0916f51-2844-437c-8aa1-2e5a1607d0a0)

### [FE] - 김준섭 담당

전체적인 데이터들을 리덕스를 활용해 props를 덜 사용하고 추후 결제페이지에서 쉽게 데이터 접근이 가능토록 했음
  (상품상세 데이터, 시작날짜 끝날짜, 결제해야할 가격, 인원수, 선택한 존 데이터)

- 5장의 사진을 고객에게 노출시키기 위해 Grid 와 flex로 배치, 호버시 어두워지는 효과 구현
  차후 반응형 구현시 thumnail 사진 한장과 더보기 모달창 기능구현예정


#### TxtDescription 

- useRef를 활용해 컴포넌트 자체의 높낮이에 따라 나타나는 토글바 구현하여 길이가 짧을때는 더보기 토글바가 나타나지않음(current.scrollHeight 223px)
- 토글바로 더보기 하는 박스에 애니매이션 효과부여
- 길이가 짧을때는 linear-gradient 를 제거하는 로직 구현 예정

#### FacilitiesData 

- 백엔드에서 들어오는 배열에 있는것들은 앞쪽으로 나열하고 배열에 없는것들은 뒤쪽에 나열한뒤 취소선을 긋기위한 로직 구현
- 1의 로직을 구현하기 위해 includes를 활용하였으나 아무것도 없는 빈배열일때 문제가 생기는 현상 발견함 추후 로직을 바꿔야함

#### Calendar


![날짜별_가능한_존표시_AdobeExpress](https://github.com/wecode-bootcamp-korea/45-2nd-headbanger-Frontend/assets/125236449/1b78cb9a-16ce-4982-9a46-658f2fc1da38)


- Nav바와 상품상세에서 활용하는 날짜의 값을 일치하기 위해 redux를 활용 
- 시작날짜를 선택한후 끝날짜를 선택하면 그 사이의 값은 모두 선택되기위해 datepicker라이브러리의 selectranges메서드 활용
- 날짜 선택시 useeffect를 통해 자리에 관한 데이터를 다시 받는 로직구현

#### viewMap

- 백엔드로부터 받은 각존마다 4점의 위치값을 받은 후 그에맞게 직사각형을 만드는 방식으로 조감도 구현
- 들어온 데이터에따라 예약가능한 존과 불가능한 존을 구별이 쉽도록 불가능한 존의경우 사선을 그어 표시
- 호버시 각 존의 가격과 수용인원을 노출시킬수 있는 박스 구현
- 선택시 선택된 존의 정보를 redux에 저장하고 재선택시 redux에서 제거하는 로직 구현

#### remoteCon

- 예약과 관련된 모든 정보를 한곳에 모아 쉽게 정보를 얻을 수 있도록 함
- redux에 저장된 startday와 endday를 보여주며 값이 없을시 노출하고 있는 상자를 클릭하면 달력으로 이동할 수 있도록함
- redux에 저장된 selectedzone에 대한 정보를 보여주며 값이 없을시 노출하고 있는 상자를 클릭하면 조감도로 이동할 수 있도록함
- 가격 노출시 선택된 존이 없으면 해당캠핑장의 최소가격을보여주어 (최소가격)~부터 라고 뜨도록 하며 선택된 존이 있으면 1박당 가격을 알수 있도록함
- 들어온 데이터에 키즈존이 없으면 유아와 아이를 막도록 했으며 펫존이 없으면 반려동물을 선택할 수 
- 최종 가격은 1박당 가격 x 묶는 밤의 길이로 구했으며 redux에 저장해 결제단에서 용이토록함
- 선택된 존의 총 수용가능인원과 선택된 총 인원수를 비교해 선택된 총인원수가 많을시 결제가 되지않으며 존을 더 선택할 수 있도록 유도함
- localstorage에 토큰이 있다면 결제로 넘어갈 수 있도록 했지만 올바른 방법이 아니라 생각되어 추후 수정할 필요가 있음
 


![오토스크롤_AdobeExpress](https://github.com/wecode-bootcamp-korea/45-2nd-headbanger-Frontend/assets/125236449/6273ff83-d785-4558-b429-08ecc7689545)


#### EmojiDescription 

- 5개의 점수중 가장 높은 점수의 항목을 매칭할 수 있는 로직 구현 - 나타나는 문구는 상수데이터로 구현하여 유지보수에 용이하게함
- 지역 카테고리와 테마 카테고리에 맞는 항목을 매칭할 수 있는 로직구현 - 나타나는 문구는 상수데이터로 구현하여 유지보수에 용이하게함


#### 레이더 차트 

- 5,4,3,2,1 각 점수를 잇는 정오각형을 svg 형식으로 구현 후 부모로부터 받은 각 5점의 위치에 점을찍고 생성된 오각형 안에 색상을 칠하는 방식
- 레이더 차트의 재사용성을 위해 5개의 점수와 그래프 사이즈를 props로 받아 재사용에 용이하도록함
- 추후 안쪽 점수로 만들어진 오각형에 애니메이션 효과 구현 예정


![리뷰페이지](https://github.com/junsobi/45-2nd-headbanger-Frontend/assets/127650045/5eeb8b07-e4ae-4e6b-b88e-170c66e0138a)

#### review

- 레이더 차트가 밑에서도 활용시 부자연스러울거같아 5점일 경우 너비가 98%인 div바 배경을 만들고 각 점수에 맞게 그 바를 채우는 방식으로 점수 노출 그래프 생성
- 레이더 차트를 활용해 각 리뷰의 사람들이 부여한 점수를 한눈에 볼 수 있도록 함
- 리뷰어가 4명이상인 경우 페이지네이션을 생성하도록함
- 리뷰내용이 길어지는 경우에 대해 생각하지않아 추후 개선해야할 필요가 있음
- 리뷰의 길이를 측정해 페이지네이션을 하는 방식을 채택했는데 리뷰의 갯수가 늘어날경우 올바른 방법이 아니라 백엔드로부터 리뷰카운트를 받는 방식으로 리펙토링 해야함


### [BE]

- 레이더 차트 구현을 위한 Query를 사용한 평균값 계산
- 프론트의 하드 코딩이 아닌, DB에서 보내주는 조감도와, 조감도의 각 좌표를 이용한, 예약 가능/불가능 Zone 표기
- 각 리뷰점수 데이터 받아와서 각 스코어 별로 저장
- 각 리뷰점수 데이터 반환
- 리뷰점수 합계 반환
- 각 리뷰점수 평균치 반환



