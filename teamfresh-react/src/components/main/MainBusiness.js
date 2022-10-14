import styled from 'styled-components';
import Title from '../../assets/styles/Title';


 const Icon01 = require('../../assets/img/icon01.png');
 const Icon02 = require('../../assets/img/icon02.png');
 const Icon03 = require('../../assets/img/icon03.png');
 const Icon04 = require('../../assets/img/icon04.png');
 const Icon05 = require('../../assets/img/icon05.png');
 const Icon06 = require('../../assets/img/icon06.png');
 const Icon07 = require('../../assets/img/icon07.png');
 const Icon08 = require('../../assets/img/icon08.png');



const Container = styled.div`
position:relative;
width: 100%;
height: 1050px;
padding: 0;
background-color: rgb(0,0,0);
overflow:hidden;
list-style: none;

.business-contents {
  position: absolute;
  top: 300px;
  left: 50%;
  width: 1210px;
  margin-left: -605px;
  z-index: 2;
}
.business-process {
  clear: both;
  display: table;
  width: 100%;

  :first-child li {
    float: left;
    list-style: none;
  }

  :nth-child(3) li {
    float: right;
    list-style: none;
  }
  li {
    position: relative;
    width: 25%;
    font-family: "Pretendard";
    text-align: center;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    color: rgb(255 255 255);
  }
  :first-child li:after {
    position: absolute;
    top: 50%;
    right: -20%;
    width: 40%;
    height: 1px;
    background: rgb(255 255 255 / 30%);
    content: "▶";
    font-size: 10px;
    text-align: right;
    line-height: 1px;
  }

  :first-child li:last-child:after {
    :first-child li:last-child:after {
      top: 145%;
      right: 50%;
      margin-right: -5px;
      width: 10px;
      height: auto;
      background: linear-gradient(
        to right,
        rgb(255 255 255 / 0%) 0% 50%,
        rgb(255 255 255 / 30%) 50% 60%,
        rgb(255 255 255 / 0%) 60% 100%
      );
      content: "▼";
      text-align: center;
      padding-top: 150px;
    }
    top: 145%;
    right: 50%;
    margin-right: -5px;
    width: 10px;
    height: auto;
    background: linear-gradient(
      to right,
      rgb(255 255 255 / 0%) 0% 50%,
      rgb(255 255 255 / 30%) 50% 60%,
      rgb(255 255 255 / 0%) 60% 100%
    );
    content: "▼";
    text-align: center;
    padding-top: 150px;
  }

  :nth-child(3) li::after {
    position: absolute;
    top: 50%;
    left: -20%;
    width: 40%;
    height: 1px;
    content: "◀";
    font-size: 10px;
    text-align: left;
    line-height: 1px;
    background: rgba(255, 255, 255, 0.3);
  }

  :nth-child(3) li:last-child:after {
    position: absolute;
    font-size: 10px;
    top: -180%;
    left: 50%;
    margin-left: -5px;
    width: 10px;
    height: auto;
    background: linear-gradient(
      to right,
      rgb(255 255 255 / 0%) 0% 50%,
      rgb(255 255 255 / 30%) 50% 60%,
      rgb(255 255 255 / 0%) 60% 100%
    );
    content: "▲";
    text-align: center;
    padding-bottom: 150px;
  }

  img {
    width: 80px;
    filter: invert(100%) sepia(5%) saturate(0%) hue-rotate(244deg)
      brightness(104%) contrast(104%);
  }
}

.business-title {
  width: 100%;
  font-family: "Pretendard";
  text-align: center;
  font-weight: 600;
  font-size: 40px;
  line-height: 80px;
  color: rgb(255 255 255);
  padding: 80px 0;
}

.business-comment {
  clear: both;
  position: relative;
  width: 100%;
  text-align: center;
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;
  color: #fff;
  padding: 80px 0 0;

  ::after {
    position: absolute;
    top: -10%;
    left: 50%;
    margin-left: -5px;
    width: 10px;
    height: 60px;
    content: "▲";
    font-size: 10px;
    text-align: center;
    line-height: 0;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0) 40%,
      rgba(255, 255, 255, 0.3) 40%,
      rgba(255, 255, 255, 0.3) 50%,
      rgba(255, 255, 255, 0) 50%,
      rgba(255, 255, 255, 0) 100%
    );
  }
}

.movie-contents {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 2000px;
  height: 1400px;
  margin-top: -700px;
  margin-left: -1000px;
  z-index: 1;
  opacity: 0.3;

  iframe {
    width: 100%;
    height: 100%;
  }
}

`;

const MainBusiness = () => {
  return (
    <>
    <Container>
      <Title 
      style={{color: "white"}}
      SubTitle="콜드체인 원스톱 솔루션으로 한눈에"
      MainTitle="신선상품의 유통과정">
      </Title>
      <div className='business-contents'>
        <div className='business-process'>
          <ul>
            <li>
              <img src={Icon01} alt='새벽배송' />
              <br />
              새벽배송
            </li>
            <li>
              <img src={Icon02} alt='보관' />
              <br />
              보관
            </li>
            <li>
              <img src={Icon03} alt='출고' />
              <br />
              출고
            </li>
            <li>
              <img src={Icon04} alt='화물주선' />
              <br />
              화물주선
            </li>
          </ul>
        </div>
        <div className='business-title'>콜드체인 원스톱 솔루션</div>
        <div className='business-process'>
          <ul>
            <li>
              <img src={Icon05} alt='식자재 유통' />
              <br />
              식자재 유통
            </li>
            <li>
              <img src={Icon06} alt='프랜차이즈' />
              <br />
              프랜차이즈
            </li>
            <li>
              <img src={Icon07} alt='보험' />
              <br />
              보험
            </li>
            <li>
              <img src={Icon08} alt='고객' />
              <br />
              고객
            </li>
          </ul>
        </div>
        <div className='business-comment'>최적화 시스템 기반 서비스 운영</div>
      </div>
      <div className='movie-contents'>
        <iframe
          title='coldchain'
          src='//player.vimeo.com/video/700346662?quality=1080p&amp;autopause=0&amp;playsinline=1&amp;autoplay=1&amp;loop=1&amp;background=1'
          allow='autoplay'
          width='100%'
          height='100%'
          frameBorder='0'
          playsInline=''
          allowFullScreen=''
        ></iframe>
      </div>
      </Container>
    </>
  );
};

export default MainBusiness;
