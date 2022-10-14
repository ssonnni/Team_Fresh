import styled from 'styled-components';
import { useState, useEffect } from 'react';

const MainImg01 = require('../../assets/img/main_images01.jpg');
const MainImg02 = require('../../assets/img/main_images02.jpg');
const MainImg03 = require('../../assets/img/main_images03.jpg');

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  min-width: 1210px;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const Slide = styled.div`
  height: 100%;
  display: flex;
  transition: ${({ last }) => (last ? '' : 'transform 0.5s ease-in')};
  transform: ${({ count }) => 'translateX(-' + count * 120 + '%)'};
  .slider-list {
    height: 100%;
    flex-shrink: 0;
    display: flex;
    justify-content: center;

    img {
      background-size: cover;
      height: 100vh;
    }
  }
`;
const Dots = styled.div`
  position: absolute;
  z-index: 90;
  display: flex;
  top: 50%;
  left: 50%;
  margin-left: -575px;
  margin-top: 120px;
`;
const Dot = styled.div`
  margin: 10px auto;
  width: 45px;
  height: 7px;
  margin: 0 3px;
  border-radius: 10px;
  background-color: white;
  background-color: ${({ focus }) => (focus ? 'rgb(0 92 223)' : '')};
  cursor: pointer;
`;
const MainText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  text-align: left;
  z-index: 20;
  margin-left: -575px;
  margin-top: -150px;

  .main-title {
    clear: both;
    font-family: 'Pretendard';
    font-weight: 700;
    font-size: 55px;
    line-height: 65px;
    color: rgb(255 255 255);
    margin: 20px 0 30px;
  }

  .main-comment {
    clear: both;
    font-family: 'Pretendard';
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    color: rgb(255 255 255);
  }
`;

const MainCarousel = () => {

  const length = 4;
  const [count, setCount] = useState(0);
  const [last, setLast] = useState(false);
  useEffect(() => {
    const timer = setInterval(
      () => {
        if (count < length - 1) {
          setLast(false);
          setCount((pre) => pre + 1);
        } else {
          setLast(true);
          setCount(0);
        }
      },
      last ? 0 : 2000
    );
    return () => clearInterval(timer);
  }, [count]);

  return (
    <>
      <Container>
        <MainText>
          <div className='main-title'>
            대한민국 No.1
            <br />
            Cold-chain platform
          </div>
          <div className='main-comment'>
            팀프레시는 신선함을 이어 풍요로운 세상을 만듭니다.
          </div>
        </MainText>

        <Wrapper>
          <Slide count={count} last={last}>
            <li className='slide-list'>
              <img src={MainImg01} alt='slide-list' />
            </li>
            <li className='slide-list'>
              <img src={MainImg02} alt='slide-list' />
            </li>
            <li className='slide-list'>
              <img src={MainImg03} alt='slide-list' />
            </li>
            <li className='slide-list'>
              <img src={MainImg01} alt='slide-list' />
            </li>
          </Slide>
          <Dots>
            <Dot
              focus={count === 0 || count === 3}
              onClick={() => setCount(0)}
            />
            <Dot focus={count === 1} onClick={() => setCount(1)} />
            <Dot focus={count === 2} onClick={() => setCount(2)} />
          </Dots>
        </Wrapper>
      </Container>
    </>
  );
};

export default MainCarousel;
