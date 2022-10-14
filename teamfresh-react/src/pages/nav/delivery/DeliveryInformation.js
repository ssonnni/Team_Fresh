import React from 'react';
import styled from 'styled-components';
const str = `일부 장소가 배송 가능으로 검색될 수 있으나
배송불가지역이므로 참고 바랍니다.

[공공시설]
관공서: 국회, 우체국, 수자원공사 등
군사지역: 군부대, 군인아파트, 위병소 등
교정시설: 교도소, 구치소 등

[차량출입제한]
학교: 초등학교, 중학교, 고등학교
지하철, 공원, 유원지
그 외 차량 통제 지역

[기타]
대학교, 백화점, 병원(임시 지정), 시장, 마트, 공터,
가건물(가로판매대, 비닐하우스 등), 공사장, 산업단지, 
물류단지, 고속도로 휴게소, 공공시설 무인택배함, 
도서산간지역 등
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 360px;
  height: 300px;
  padding: 20px;
  backgrround-color:#fff;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 0.6rem;
  backgrround-color:#11;
`;

const TopBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 0.8rem;
  height: max-content;
`;

const TitleText = styled.span`
  color: red;
  font-size: 1.2rem;
  font-weight: 800;
  & + span {
    margin-top: 1rem;
  }
`;
const DefaultText = styled.span`
  color: #606060;
  font-size: 11px;
  line-height: 1rem;
`;

const DefaultTextArea = styled.div`
  color: #606060;
  line-height: 1rem;
  text-align: left;
  font-size: 12px;
`;

const Liner = styled.hr`
  border-top: 2px solid #02204a;
  margin: 1.6rem 0;
`;

const BottomBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  text-align: left;
  align-items: flex-start;
  width: 100%;
  height: max-content;
  backgrround-color:#777;
`;

const DeliveryInformation = () => {
  return (
    <Container>
      <Wrapper>
        <TopBox>
          <TitleText>배송 불가 장소 안내</TitleText>

          <DefaultText >[하단 리스트 참고]</DefaultText>
          <DefaultText >
            관공서/군사지역/학교/병원/시장/백화점/산업단지/도서산간지역
          </DefaultText>
        </TopBox>
        <Liner />
        <BottomBox>
          <DefaultTextArea>{str}</DefaultTextArea>
        </BottomBox>
      </Wrapper>
    </Container>
  );
};

export default DeliveryInformation;

