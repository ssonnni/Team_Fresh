import styled from "styled-components";
import {useState} from'react';
import AddressData from 'react-daum-postcode';
import DeliveryInformation from './delivery/DeliveryInformation';
import DeliveryAreaYnModal from './delivery/DeliveryAreaYnModal';

const Wrapper = styled.div`
width: 420px;
height: 800px;
border: 1px solid #ccc;
margin: 0 auto;
overflow: hidden;

.header {
    width: 400px;
    height: 50px;
    margin: 0 auto;
    position: relative;
    line-height: 50px;
  }
  .header > h4 {
    float: right;
    margin-right: 50%;
    // margin-top: -0.5%;
    color: #02204a;
  }
`;

const Container =styled.div`
width: 420px;
    margin: 20px auto;
    position: relative;

    .container {
        width: 420px;
        margin: 20px auto;
        position: relative;
    }

    .container > .zipcodebox {
        width: 120px;
        height: 40px;
        border: 1px #02204a solid;
        margin: 20px 0 0px 20px;
        line-height: 35px;
        padding: 0 0 0 10px;
      }
      .container > .addressbox {
        width: 360px;
        height: 40px;
        border: 1px #02204a solid;
        margin: 10px 0 10px 20px;
        line-height: 40px;
        padding: 0 0 0 10px;
      }
      .container > input {
        width: 360px;
        height: 40px;
        border: 1px #02204a solid;
        margin: 0 0 20px 20px;
        line-height: 40px;
        padding: 0 0 0 10px;
      }
.center {
    width: 380px;
    height: 40px;
    background-color: #02204a;
    color: #fff;
    margin: 0 auto;
    display: block;
    text-align: center;
    line-height: 40px;
    border-radius: 10px;
}
`;

const Delivery = () => {
    const [isDeliveryAreaYnModal, setIsDeliveryAreaYnModal] = useState();
  const [deliveryAreaYn, setDeliveryAreaYn] = useState();

  const handleComplete = (data) => {
    // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분입니다.
    // 예제를 참고하여 다양한 활용법을 확인해 보세요.
    if (data.roadAddress === null || data.roadAddress === undefined) {
      alert('도로명 주소가 없습니다. 다시 검색해 주세요');
      return null;
    }
    if (data.zonecode === null || data.roadAddress === undefined) {
      alert('우편번호가 없습니다. 다시 검색해 주세요');
      return null;
    }

    let zonecodeEl = document.querySelector('#zonecode');
    let roadAddressEl = document.querySelector('#roadAddress');
    if (data.roadAddress === '') {
      zonecodeEl.value = data.zonecode;
      roadAddressEl.value = data.address;
    } else {
      zonecodeEl.value = data.zonecode;
      roadAddressEl.value = data.address;
    }

    document.querySelector('.post-code').style.display = 'none';
    document.querySelector('#jusoDiv').style.display = 'block';
    //fullAddress -> 전체 주소반환
  };

  const backEvt = () => {
    document.querySelector('.post-code').style.display = 'block';
    document.querySelector('#jusoDiv').style.display = 'none';
  };

  const DeliveryBack = require('../../assets/img/arrowback.png')

    const searchDeliveryArea =  async () => {
      try {
        let addrBasic = document.querySelector('#roadAddress').value;
        const res =  await fetch('https://tmsapidev.teamfresh.co.kr/api/delivery/searchDeliveryAreaForTest',{
            method: 'POST',
            headers: {
                'Host': 'https://tmsapidev.teamfresh.co.kr',
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                addrBasic: addrBasic
            })
        });
        const result = res.data;
        if (result.result) {
          const data = result.data;

          if (data.delyverYn === '1') {
            setDeliveryAreaYn(true);
            setIsDeliveryAreaYnModal(true);
          } else {
            setDeliveryAreaYn(false);
            setIsDeliveryAreaYnModal(true);
          }
        } else {
          alert('에러가 발생하였습니다. 다시 시도해 주세요');
        }
      } catch (e) {
        console.error(e);
        alert('조회중에 에러가 발생했습니다. 새로고침 후 다시 시도해주세요.');
      }
    };

  return (
    <>
    <Wrapper>
      <AddressData
        onComplete={(data) => {
          handleComplete(data);
        }}
        className='post-code'
        style={{ height: '100vh' }}
      />

      <div className='wrapper' id='jusoDiv' style={{ display: 'none' }}>

        <div className='header'>
          <a
            href={(e) => {
              e.preventDefault();
              return false;
            }}
            onClick={(e) => {
              e.preventDefault();
              backEvt();
            }}
            className='btn left'
          >
             <img
              src={DeliveryBack}
              style={{ paddingTop: '13px' }}
              alt="뒤로가기"
            />
          </a>
          <h4 style={{ display: 'inline-block', verticalAlign: 'bottom' }}>
            다시 주소 검색하기
          </h4>
          <hr
            style={{
              width: '400px',
              height: '5px',
              border: '0px',
              background: '#02204a',
            }}
          />

          <Container>
          <div className='container'>
            <input
              type='text'
              className='zipcodebox'
              id='zonecode'
              name='zonecode'
              readOnly={true}
            />
            <input
              type='text'
              className='addressbox'
              id='roadAddress'
              name='roadAddress'
              readOnly={true}
            />
            <input type='text' placeholder='나머지 주소를 입력해주세요.' />
            <br />
            <a
              href={(e) => {
                e.preventDefault();
                return false;
              }}
              onClick={(e) => {
                e.preventDefault();
                  searchDeliveryArea();
              }}
              className='center'
              style={{ color: '#fff', cursor: 'pointer' }}
            >
              주소입력
            </a>
          </div>
          </Container>
          <DeliveryInformation />
        </div>
        <DeliveryAreaYnModal
        isOpen={isDeliveryAreaYnModal}
        deliveryAreaYn={deliveryAreaYn}
        onClose={() => setIsDeliveryAreaYnModal(false)}
      />
      </div>
      </Wrapper>
    </>
  );
};
export default Delivery;
