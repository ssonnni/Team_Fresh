import { Modal } from 'react-bootstrap';
import styled from 'styled-components';

const IconPossible = require('../../../assets/img/iconpossible.png');
const IconImpossible = require('../../../assets/img/iconimpossible.png');

const Btn = styled.button`
width: 45%;
height: 48px;
padding: 6px 8px;
margin-right: 10px;
border: 1px solid rgb(212, 217, 214);
border-radius: 8px;
background-color: rgb(67, 192, 131);
color: white;
font-weight: 400;
font-size: 11pt;
cursor: pointer;
`;

type DeliveryAreaYnModalModalProps = {
  isOpen: boolean;
  deliveryAreaYn: boolean;
  onClose: () => void;
};

const DeliveryAreaYnModal = ({
  isOpen,
  deliveryAreaYn,
  onClose,
}: DeliveryAreaYnModalModalProps) => {
  return (
    <Modal
      style={{ heigth: '300px' }}
      size={'sm'}
      show={isOpen}
      className={'modal-dialog-scrollable'}
      onHide={onClose}
      centered>
      <Modal.Header>
        {deliveryAreaYn ? <h4>배송가능</h4> : <h4>배송불가능</h4>}
      </Modal.Header>
      <Modal.Body>
        {deliveryAreaYn ? (
          <div className="pop_content text-center">
            <img src={IconPossible} alt="배송가능" />
            <h1>배송 가능 지역입니다.</h1>
            <p>다음날 아침 7시 이전에 도착합니다.</p>
            <p className="p-notice">
              <small>
                (관공서/군사지역/학교/병원/시장/백화점/산업단지/도서산간지역
                배송 불가)
              </small>
            </p>
          </div>
        ) : (
          <div className="pop_content text-center">
            <img src={IconImpossible} alt="배송불가능" />
            <h1>배송 불가 지역입니다.</h1>
            <p>
              지번주소(구 주소)로 검색하셨다면
              <br />
              도로명 주소로 다시 시도해 주세요.
            </p>
          </div>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Btn variant="success" onClick={() => onClose()}>
          확인
        </Btn>
      </Modal.Footer>
    </Modal>
  );
};

export default DeliveryAreaYnModal;
