import styled from"styled-components";

const Title = styled.div`
  width: 100%;
  font-family: "Pretendard";
  text-align: center;
  font-weight: 800;
  font-size: 55px;
  line-height: 50px;
  position: absolute;
  top: 120px;
  left: 0;
  z-index: 2;

  span {
    font-weight: 400;
    font-size: 20px;
  }
`;

const MainTitle = ({MainTitle, SubTitle,style}) => {
    return (
        <>
        <Title style={style}>
        <span>{SubTitle}</span>
        <br />
        {MainTitle}
        </Title>
        </>
    )
}

export default MainTitle;