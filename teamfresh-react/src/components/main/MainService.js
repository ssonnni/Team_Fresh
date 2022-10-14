import styled from 'styled-components';
import Title from '../../assets/styles/Title';

import { useState } from 'react';

const Icon03 = require('../../assets/img/icon03.png');
const Icon04 = require('../../assets/img/icon04.png');
const Icon06 = require('../../assets/img/icon06.png');
const Icon07 = require('../../assets/img/icon07.png');

const ArrowIcon = require('../../assets/img/arrowicon.png');
const BusinessImg01 = require('../../assets/img/main_business_img01.jpg');
const BusinessImg02 = require('../../assets/img/main_business_img02.jpg');
const BusinessImg03 = require('../../assets/img/main_business_img03.jpg');
const BusinessImg04 = require('../../assets/img/main_business_img04.jpg');

const Container = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  width: 100%;
  padding: 150px 0px 30px;
  background-color: #fff;
`;

const TabBox = styled.div`
  position: relative;
  width: 1210px;
  margin: 120px auto 0;
  padding: 0 30px;
  box-sizing: border-box;

  .service-tabbtn {
    position: absolute;
    top: 50px;
    left: 30px;
    display: table;
    float: left;
    width: 45%;
    background: rgb(245 245 245);
    padding: 0;
    box-sizing: border-box;
    z-index: 1;

    .on {
      color: rgb(255 255 255);
      background: rgb(2 32 75);
      display: block;
      visibility: visible;
      img {
        filter: invert(100%) sepia(5%) saturate(0%) hue-rotate(244deg)
          brightness(104%) contrast(104%);
      }
    }

    ul {
      width: 100%;
      padding: 0;
      margin: 0 auto;
    }

    li {
      position: relative;
      float: left;
      width: 25%;
      text-align: center;
      font-family: 'Pretendard';
      font-weight: 400;
      font-size: 20px;
      line-height: 40px;
      color: rgb(0 0 0);
      cursor: pointer;
      padding: 75px 0 15px;
      box-sizing: border-box;
    }

    img {
      position: absolute;
      top: 15px;
      left: 50%;
      width: 60px;
      margin-left: -30px;
    }
  }

  .service-contents {
    clear: left;
    float: left;
    position: relative;
    width: 100%;
    margin: 0 auto 0;

    .service-text {
      float: left;
      width: 40%;
      margin-top: 230px;

      .service-text-title {
        font-family: 'Pretendard';
        text-align: left;
        font-weight: 800;
        font-size: 35px;
        line-height: 45px;
        color: rgb(2 32 75);
      }

      .service-text-comment {
        font-family: 'Pretendard';
        text-align: left;
        font-weight: 400;
        font-size: 18px;
        line-height: 25px;
        color: rgb(102 102 102);
        margin: 30px 0 0 0;
      }

      .service-link {
        clear: both;
        float: left;
        cursor: pointer;
        margin: 30px 0 0 0;
        opacity: 0.3;
      }
    }
    .service-img {
        float: right;
        width: 55%;
        img {
          width: 100%;
        }
  }
`;

const MainService = () => {
  const [isActive, setIsActive] = useState(true);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);
  const [isActive4, setIsActive4] = useState(false);

  const ToggleClass = () => {
    setIsActive(true);
    setIsActive2(false);
    setIsActive3(false);
    setIsActive4(false);
  };

  const ToggleClass2 = () => {
    setIsActive(false);
    setIsActive2(true);
    setIsActive3(false);
    setIsActive4(false);
  };

  const ToggleClass3 = () => {
    setIsActive(false);
    setIsActive2(false);
    setIsActive3(true);
    setIsActive4(false);
  };

  const ToggleClass4 = () => {
    setIsActive(false);
    setIsActive2(false);
    setIsActive3(false);
    setIsActive4(true);
  };

  return (
    <>
      <Container>
        <Title
          style={{ color: 'black' }}
          SubTitle='Serivce Introduction'
          MainTitle='서비스소개'
        ></Title>

        {/*--- 물류 탭--- */}
        <TabBox
          id='service1'
          style={{ display: isActive && isActive ? 'block' : 'none' }}
        >
          <div className='service-tabbtn'>
            <ul>
              <li
                className={isActive && isActive ? 'on' : null}
                onClick={ToggleClass}
              >
                <span>
                  <img src={Icon03} alt='물류 아이콘' />
                  물류
                </span>
              </li>
              <li onClick={ToggleClass2}>
                <span>
                  <img src={Icon04} alt='유통 아이콘' />
                  유통
                </span>
              </li>
              <li onClick={ToggleClass3}>
                <span>
                  <img src={Icon06} alt='프랜차이즈 아이콘' />
                  프랜차이즈
                </span>
              </li>
              <li onClick={ToggleClass4}>
                <span>
                  <img src={Icon07} alt='보험 아이콘' />
                  보험
                </span>
              </li>
            </ul>
          </div>
          <div className='service-contents'>
            <div className='service-text'>
              <div className='service-text-title'>
                상품의 관리,
                <br />
                보관부터 배송까지
                <br />
                완벽하게
              </div>
              <div className='service-text-comment'>
                이커머스 운영에 최적화된 풀필먼트 센터와
                <br />
                새벽배송망을 보유한 팀프레시의
                <br />
                이커머스 전문 물류 서비스를 제공받으세요.
              </div>
              <div className='service-link'>
                <img src={ArrowIcon} alt='물류 서비스링크' />
              </div>
            </div>
            <div className='service-img'>
              <img src={BusinessImg01} alt='물류 이미지' />
            </div>
          </div>
        </TabBox>

        {/*--- 유통 탭--- */}
        <TabBox id='service2' style={{ display: isActive2 ? 'block' : 'none' }}>
          <div className='service-tabbtn'>
            <ul>
              <li onClick={ToggleClass}>
                <span>
                  <img src={Icon03} alt='물류 아이콘' />
                  물류
                </span>
              </li>
              <li className={isActive2 ? 'on' : null} onClick={ToggleClass2}>
                <span>
                  <img src={Icon04} alt='유통 아이콘' />
                  유통
                </span>
              </li>
              <li onClick={ToggleClass3}>
                <span>
                  <img src={Icon06} alt='프랜차이즈 아이콘' />
                  프랜차이즈
                </span>
              </li>
              <li onClick={ToggleClass4}>
                <span>
                  <img src={Icon07} alt='보험 아이콘' />
                  보험
                </span>
              </li>
            </ul>
          </div>
          <div className='service-contents'>
            <div className='service-text'>
              <div className='service-text-title'>
                식자재 제안,
                <br />
                업장 운영 형태에 맞는
                <br />
                최적의 형태로
              </div>
              <div className='service-text-comment'>
                주기적인 단가 관리 시스템을 통해
                <br />
                합리적인 가격의 상품을 제공하고,
                <br />
                자체 물류 역량으로 상품을 안정적으로 공급하고 있습니다.
              </div>
              <div className='service-link'>
                <img src={ArrowIcon} alt='유통 서비스 링크' />
              </div>
            </div>
            <div className='service-img'>
              <img src={BusinessImg02} alt='유통 이미지' />
            </div>
          </div>
        </TabBox>

        {/*--- 프랜차이즈 탭--- */}
        <TabBox id='service3' style={{ display: isActive3 ? 'block' : 'none' }}>
          <div className='service-tabbtn'>
            <ul>
              <li onClick={ToggleClass}>
                <span>
                  <img src={Icon03} alt='물류 아이콘' />
                  물류
                </span>
              </li>
              <li onClick={ToggleClass2}>
                <span>
                  <img src={Icon04} alt='유통 아이콘' />
                  유통
                </span>
              </li>
              <li className={isActive3 ? 'on' : null} onClick={ToggleClass3}>
                <span>
                  <img src={Icon06} alt='프랜차이즈 아이콘' />
                  프랜차이즈
                </span>
              </li>
              <li onClick={ToggleClass4}>
                <span>
                  <img src={Icon07} alt='보험 아이콘' />
                  보험
                </span>
              </li>
            </ul>
          </div>
          <div className='service-contents'>
            <div className='service-text'>
              <div className='service-text-title'>
                외식 창업,
                <br />
                적은 자본으로
                <br />
                빠르고 간편하게
              </div>
              <div className='service-text-comment'>
                외식 전문 브랜드 팀프에프앤비가
                <br />
                소형, 소자본으로도 쉽고 편리하게
                <br />
                점포를 운영할 수 있도록
                <br />
                가맹 패키지를 제안해드립니다.
              </div>
              <div className='service-link'>
                <img src={ArrowIcon} alt='프랜차이즈 서비스 링크' />
              </div>
            </div>
            <div className='service-img'>
              <img src={BusinessImg03} alt='프랜차이즈 이미지' />
            </div>
          </div>
        </TabBox>

        {/*--- 보험 탭--- */}
        <TabBox id='service4' style={{ display: isActive4 ? 'block' : 'none' }}>
          <div className='service-tabbtn'>
            <ul>
              <li onClick={ToggleClass}>
                <span>
                  <img src={Icon03} alt='물류 아이콘' />
                  물류
                </span>
              </li>
              <li onClick={ToggleClass2}>
                <span>
                  <img src={Icon04} alt='유통 아이콘' />
                  유통
                </span>
              </li>
              <li onClick={ToggleClass3}>
                <span>
                  <img src={Icon06} alt='프랜차이즈 아이콘' />
                  프랜차이즈
                </span>
              </li>
              <li className={isActive4 ? 'on' : null} onClick={ToggleClass4}>
                <span>
                  <img src={Icon07} alt='보험 아이콘' />
                  보험
                </span>
              </li>
            </ul>
          </div>
          <div className='service-contents'>
            <div className='service-text'>
              <div className='service-text-title'>
                기업 대상 전문 보험,
                <br />
                상해보험부터 재산종합보험까지
                <br />
                똑똑하게
              </div>
              <div className='service-text-comment'>
                기업 전문 보험 GA와 만나
                <br />
                팀프인슈어런스가 탄생했습니다.
                <br />
                기업 맞춤형, 최적의 보험 상품을 추천받아보세요.
              </div>
              <div className='service-link'>
                <img src={ArrowIcon} alt='보험 서비스 링크' />
              </div>
            </div>
            <div className='service-img'>
              <img src={BusinessImg04} alt='보험 이미지' />
            </div>
          </div>
        </TabBox>
      </Container>
    </>
  );
};

export default MainService;
