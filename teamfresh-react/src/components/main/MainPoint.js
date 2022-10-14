import styled from 'styled-components';
import Title from '../../assets/styles/Title';
import { useState } from 'react';

const PointImg01 = require('../../assets/img/main_pointimg01.jpg');
const PointImg02 = require('../../assets/img/main_pointimg02.jpg');
const PointImg03 = require('../../assets/img/main_pointimg03.jpg');
const PointImg04 = require('../../assets/img/main_pointimg04.jpg');

const Container = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  width: 100%;
  padding:130px 0px 100px;
  box-sizing: border-box;
  background-image: linear-gradient(to bottom, white 60%, #f0f0f1 40%);

`;

const Center = styled.div`
  box-sizing: border-box;
  width: 1210px;
  margin: 0px auto;
  padding: 40px 30px;

  .main-point-box {
    width: 100%;
    margin:100px 0 0 0;

    .point-contents {
        transition: all 0.5s ease;
        -webkit-transition: all 0.4s ease;
        box-sizing: border-box;
      position: relative;
      float: left;
      width: 14.7%;
      height: 500px;
      margin: 0 0.15%;
      background: #000;
      overflow: hidden;

      .point-text {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        padding: 20px;
        z-index: 1;

        .point-title {
          width: 100%;
          font-size: 25px;
          font-weight: 500;
          line-height: 25px;
          color: #fff;
        }

        .point-comment {
          width: 0;
          height: 0;
          font-size: 17px;
          font-weight: 300;
          line-height: 20px;
          color: #fff;
          opacity: 0;
          border-top: 1px solid #fff;
          padding: 10px 0 0 0;
          margin: 10px 0 0 0;
          overflow: hidden;
        }
      }
      .point-img {
        width: 100%;
        height: 100%;
        opacity: 0.3;
      }
    }

    .active {
      width: 54.7%;
      .point-text {
        background: linear-gradient(to bottom, rgb(0 0 0 / 0%), rgb(0 0 0));
        padding: 40px 40px 30px 40px;

        .point-comment {
          width: 100%;
          height: 60px;
          opacity: 1;
        }
      }

      .point-img {
        opacity: 1;
      }
    }

    .point-img {
      background: no-repeat center;
    }
  }
`;

const MainPoint = () => {
  const [point1, setPoint1] = useState(true);
  const [point2, setPoint2] = useState(false);
  const [point3, setPoint3] = useState(false);
  const [point4, setPoint4] = useState(false);

  const ToggleClass = (num) => {
    switch (num) {
      case 2:
        setPoint1(false);
        setPoint2(true);
        setPoint3(false);
        setPoint4(false);
        break;

      case 3:
        setPoint1(false);
        setPoint2(false);
        setPoint3(true);
        setPoint4(false);
        break;

      case 4:
        setPoint1(false);
        setPoint2(false);
        setPoint3(false);
        setPoint4(true);
        break;

      default:
        setPoint1(true);
        setPoint2(false);
        setPoint3(false);
        setPoint4(false);
    }
  };
  return (
    <>
      <Container>
        <Center>
          <Title
            style={{ color: 'black' }}
            SubTitle='팀프레시를 이끄는 힘'
            MainTitle='핵심역량'
          ></Title>
          <div className='main-point-box'>
            {/* --point1-- */}
            <div
              className={
                point1
                  ? 'point-contents point1 active'
                  : 'point-contents point1'
              }
              onMouseEnter={() => ToggleClass(0)}
            >
              <div className='point-text'>
                <div className='point-title'>
                  특허 보유 TMS
                  <div className='point-comment'>
                    새벽배송 현황 추적에 최적화된 배차 및 고객 주문관리 시스템
                    <br />* TMS : Transportation Management System
                  </div>
                </div>
              </div>
              <div className='point-img'>
                <img src={PointImg01} alt='TMS' />
              </div>
            </div>

            {/* --point2-- */}
            <div
              className={
                point2
                  ? 'point-contents point2 active'
                  : 'point-contents point2'
              }
              onMouseEnter={() => ToggleClass(2)}
            >
              <div className='point-text'>
                <div className='point-title'>
                  국내 1위 새벽배송
                  <div className='point-comment'>
                    대한민국 1위 안정된 새벽배송망 구축
                  </div>
                </div>
              </div>
              <div className='point-img'>
                <img src={PointImg02} alt='새벽배송' />
              </div>
            </div>

            {/* --point3-- */}
            <div
              className={
                point3
                  ? 'point-contents point3 active'
                  : 'point-contents point3'
              }
              onMouseEnter={() => ToggleClass(3)}
            >
              <div className='point-text'>
                <div className='point-title'>
                  24시간 관제
                  <div className='point-comment'>
                    24시간 현장 관제를 통해 상품을 안전하게 배송 완료
                  </div>
                </div>
              </div>
              <div className='point-img'>
                <img src={PointImg03} alt='24시 관제' />
              </div>
            </div>

            {/* --point4-- */}
            <div
              className={
                point4
                  ? 'point-contents point4 active'
                  : 'point-contents point4'
              }
              onMouseEnter={() => ToggleClass(4)}
            >
              <div className='point-text'>
                <div className='point-title'>
                  라이선스 보유 차량망
                  <div className='point-comment'>
                    합법적으로 허가 받은 차량만을 섭외해 운영
                  </div>
                </div>
              </div>
              <div className='point-img'>
                <img src={PointImg04} alt='라이선스 보유 차량망' />
              </div>
            </div>
          </div>
        </Center>
      </Container>
    </>
  );
};

export default MainPoint;
