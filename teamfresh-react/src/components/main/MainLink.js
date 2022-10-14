import styled from 'styled-components';

const ArrowIcon2 = require('../../assets/img/arrowicon2.png');
const LinkImg1 = require('../../assets/img/main_linkimg01.jpg');
const LinkImg2 = require('../../assets/img/main_linkimg02.jpg');
const LinkImg3 = require('../../assets/img/main_linkimg03.jpg');

const Container = styled.div`
  position: relative;
  display: table;
  width: 100%;
  padding: 150px 0px;
`;

const CenterDiv = styled.div`
  width: 1210px;
  margin: 0 auto;
  padding: 0 30px;
  box-sizing: border-box;

  .link-contents {
 
    &:hover {
      .link-text .link-title:before,
      .link-text .more-btn,
      .link-img {
        opacity: 1;
      }

      .link-text .link-title:before {
        top: 65px;
      }

      .link-text .more-btn {
        margin: 240px auto 0;
      }
    }
    position: relative;
    float: left;
    width: 30.33%;
    height: 500px;
    margin: 0 1.5%;
    border-radius: 15px;
    background: rgb(51 51 51);
    overflow: hidden;
    cursor: pointer;

    .link-text {
      position: absolute;
      top: 15%;
      left: 20%;
      width: 60%;
      text-align: center;
      border: 1px solid rgb(0 0 0 / 0%);
      z-index: 1;
      .link-title {
        position: relative;
        width: 100%;
        font-family: "Pretendard";
        font-size: 40px;
        font-weight: 600;
        line-height: 40px;
        color:#fff;
        :before {
          position: absolute;
          top: 90px;
          left: 50%;
          width: 1px;
          height: 70px;
          background: #fff;
          content: "";
          opacity: 0;
          transition: all 0.3s ease;
          -webkit-transition: all 0.3s ease;
        }
      }
      .more-btn {
        transition: all 0.3s ease 0s;
        box-sizing: border-box;
        width: 40px;
        height: 40px;
        border: 1px solid #fff;
        border-radius: 100%;
        padding: 2px 0 0 0;
        margin: 280px auto 0;
        opacity: 0;
        img {
          width: 20px;
          filter: invert(100%) sepia(0%) saturate(1%) hue-rotate(137deg)
            brightness(104%) contrast(101%);
        }
      }
    }

    .link-img {
      width: 100%;
      height: 100%;
      opacity: 0.4;
    }
  }
    .link-img {
      background: no-repeat center;
      background-size: cover;
    }

`;


const MoreBtn = styled.div`
  font-family: 'Pretendard';
  font-size: 17px;
  font-weight: 300;
  line-height: 25px;
  color: #000;
  cursor: pointer;
`;

const MainLink = () => {
  return (
    <>
      <Container>
        <CenterDiv className='centerdiv relattive'>
          {/* --링크01-- */}
          <div className='link-contents link01'>
            <div className='link-text'>
              <div className='link-title'>News</div>
              <MoreBtn className='more-btn'>
                <img src={ArrowIcon2} alt='' />
              </MoreBtn>
            </div>
            <div className='link-img'>
              <img src={LinkImg1} alt='' />
            </div>
          </div>

          {/* --링크02-- */}
          <div className='link-contents link02'>
            <div className='link-text'>
              <div className='link-title'>Recruit</div>
              <MoreBtn className='more-btn'>
                <img src={ArrowIcon2} alt='' />
              </MoreBtn>
            </div>
            <div className='link-img'>
              <img src={LinkImg2} alt='' />
            </div>
          </div>

          {/* --링크03-- */}
          <div className='link-contents link03'>
            <div className='link-text'>
              <div className='link-title'>Timf Story</div>
              <MoreBtn className='more-btn'>
                <img src={ArrowIcon2} alt='' />
              </MoreBtn>
            </div>
            <div className='link-img'>
              <img src={LinkImg3} alt='' />
            </div>
          </div>
        </CenterDiv>
      </Container>
    </>
  );
};

export default MainLink;
