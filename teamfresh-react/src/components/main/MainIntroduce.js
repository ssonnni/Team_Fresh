import styled from 'styled-components';

const Introduce = styled.div`
position:relative;
  width: 100%;
  padding: 200px 0px;
  background: rgb(247, 247, 247);

  h3 {
    text-align: center;
    font-weight: 700;
    font-size: 30px;
    line-height: 40px;
    color: rgb(0, 0, 0);
  }
`;

const MainIntroduce = () => {
  return (
    <>
      <Introduce>
        <h3>
          안전하고 신속하게 고객에 먹거리를 제공하고 있습니다.
          <br />
          국내 유일 Door to Door Cold Chain Service, 팀프레시를 만나보세요.
        </h3>
      </Introduce>
    </>
  );
};

export default MainIntroduce;
