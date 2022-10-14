import styled from 'styled-components';
import { Link } from 'react-router-dom';


const Logo = require('../../assets/img/logo_w.png');
const Brunch = require('../../assets/img/sns_brunch.png');
const Facebook = require('../../assets/img/facebook.png');
const Youtube = require('../../assets/img/youtube.png');

const Container = styled.div`
  display: table;
  width: 100%;
  height: 100%;
  text-align: center;
  background: rgb(25 25 25);
  padding: 50px 0;
  margin: 0;

  .centerdiv {
    width: 1210px;
    margin: 0px auto;
    padding: 0px 30px;
  }

  .footer-top {
    color: #fff;
    display: flex;
    justify-content: space-between;

    ul {
      display: flex;
    }
    li {
      list-style: none;
      position: relative;
      font-size: 16px;
      font-weight: 400;
      line-height: 25px;
      color: #ccc;
      margin: 0 15px;
      cursor: pointer;
    }

    .footer-btn li {
      :last-child {
        :after {
          position: absolute;
          top: 7px;
          left: -15px;
          width: 1px;
          height: 10px;
          background: #ccc;
          content: '';
          opacity: 0.5;
          cursor: none;
        }
      }
    }
  }
  .logo {
    float: left;
    margin: 0 0 30px;
    img {
      width: 100px;
    }
  }

  .snslink {
    clear: both;
    float: left;
    width: 100%;
    margin: 30px 0 0 0;
    li {
      float: left;
      width: 40px;
      height: 40px;
      text-align: center;
      background: rgb(0 0 0 / 40%);
      border-radius: 100%;
      overflow: hidden;
      padding: 6px 0 0 0;
      margin: 0 10px 0 0;
      box-sizing: border-box;
      cursor: pointer;
      transition: all 0.2s ease;
      -webkit-transition: all 0.2s ease;
      :nth-child(1):hover {
        background: #18539a;
      }
      :nth-child(3):hover {
        background: #ff0000;
      }
      i {
        color: rgb(255 255 255);
        font-size: 27px;
      }
      img {
        background-size: cover;
        height: 27px;
        margin: 1px 0 0 0;
      }
    }
  }
`;

const CompanyInfo = styled.div`
  clear: both;
  float: left;
  width: 100%;
  text-align: left;
  font-size: 0;

  ul {
    margin: 0;
    padding: 0;
    > div {
      :last-child {
        width: 100%;
        margin: 10px 0;
      }
    }
  }

  li {
    display: inline-block;
    margin: 0 30px 0 0;
    font-family: "Pretendard";
    font-size: 16px;
    font-weight: 400;
    line-height: 25px;
    color: rgb(204 204 204);
  }
`;

const Footer = () => {
  return (
    <>
      <Container>
        <div className='centerdiv'>
          <div className='footer-top'>
            <div className='logo'>
              <img src={Logo} alt='팀프레시' />
            </div>
            <div className='footer-btn'>
              <ul>
                <li>
                  <Link to='/privacy'>개인정보 처리방침</Link>
                </li>
                <li>
                  <Link to='/terms'>위치기반 서비스 이용약관</Link>
                </li>
              </ul>
            </div>
          </div>
          <CompanyInfo className='companyinfo'>
            <ul>
              <div>
                <li>(주)팀프레시</li>
                <li>사업자번호 561-88-01138</li>
                <li>대표 이성일</li>
                <li>서울 강남구 봉은사로 37길 7-9 글래드큐브빌딩</li>
                <li>전화 02-423-0525</li>
                <li>팩스 02-3432-0525</li>
              </div>
              <div>
                <li>메일 info@timf.co.kr</li>
                <li>영업 및 제휴 문의 sales@timf.co.kr</li>
              </div>
              <div>
                <li>
                  Copyrightⓒ
                  <Link to={'/admin'}>TeamFresh Co.,Ltd.</Link>
                  All Rights Reserved.
                </li>
              </div>
            </ul>
          </CompanyInfo>
          <div className='snslink'>
            <div className='snslink'>
              <ul>
                <li>
                  <img src={Facebook} alt='페이스북' />
                </li>
                <li>
                  <img src={Brunch} alt='브런치' />
                </li>
                <li>
                  <img src={Youtube} alt='유튜브' />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Footer;
