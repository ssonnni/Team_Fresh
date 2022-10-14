import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavBox = styled.ul`
  float: right;
  transition: all 0.2s ease 0s;
  margin: 16px 0px 0px;

  .nav-list {
    position: relative;
    display: inline-block;
    margin-left: 40px;
    transition: all 0.2s ease 0s;
    cursor: pointer;
  }

  .nav-list::before {
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 0px;
    height: 1px;
    background: rgb(255, 255, 255);
    content: ' ';
    transition: all 0.1s ease 0s;
  }
  .nav-list:hover::before {
    width: 100%;
  }

  .nav-list:hover .nsubmenu {
    display: block;
  }
  .ntext {
    font-weight: 400;
    font-size: 17px;
    line-height: 30px;
    color: rgb(255, 255, 255);
    text-decoration: none;
    padding: 5px 0px;
  }
  .nsubmenu {
    position: absolute;
    width: 140px;
    top: 17px;
    left: 50%;
    margin-left: -70px;
    display: none;

    ul {
      width: 140px;
      margin: 32.5px 0 0;
      padding: 0;
      background: rgb(0 0 0 / 50%);
      box-shadow: 0 2px 2px rgb(0 0 0 / 30%);
      transition: all 0.2s ease;
      -webkit-transition: all 0.2s ease;
    }

    li {
      width: 100%;
      text-align: center;
      padding: 5px 0;
      margin: 0;
      cursor: pointer;
      font-size: 14px;
      font-weight: 400;
      line-height: 45px;
      color: rgb(255 255 255);
      text-decoration: none;
      &:hover {
        background: rgba(0, 0, 0, 0.5);
      }
    }
  }
`;

const Nav = () => {
  return (
    <>
      <NavBox>
        {/* ----------01.회사소개------------ */}
        <li className='nav-list'>
          <Link to='/business'>
            <span className='ntext'>회사소개</span>
            <div className='nsubmenu' id='nsubmenu01'></div>
          </Link>
        </li>

        {/* ----------02.서비스소개------------ */}
        <li className='nav-list'>
          <Link to='/service'>
            <span className='ntext'>서비스소개</span>
            <div className='nsubmenu' id='nsubmenu02'>
              <ul>
                <li className='nsub-list'>
                  <Link to='/service'>
                    <span>물류</span>
                  </Link>
                </li>
                <li className='nsub-list'>
                  <Link to='/service/distribution'>
                    <span>유통</span>
                  </Link>
                </li>
                <li className='nsub-list'>
                  <Link to='/service/franchise'>
                    <span>프랜차이즈</span>
                  </Link>
                </li>
                <li className='nsub-list'>
                  <Link to='/service/insurance'>
                    <span>보험</span>
                  </Link>
                </li>
              </ul>
            </div>
          </Link>
        </li>

        {/* ----------03.인재채용------------ */}
        <li className='nav-list'>
          <Link to='/recruit'>
            <span className='ntext'>인재채용</span>
            <div className='nsubmenu' id='nsubmenu03'></div>
          </Link>
        </li>

        {/* ----------04.고객지원------------ */}
        <li className='nav-list'>
          <Link to='/customer'>
            <span className='ntext'>고객지원</span>
            <div className='nsubmenu' id='nsubmenu04'>
              <ul>
                <li className='nsub-list'>
                  <Link to='/customer'>
                    <span>공지사항</span>
                  </Link>
                </li>
                <li className='nsub-list'>
                  <Link to='/customer/timfnews'>
                    <span>팀프뉴스</span>
                  </Link>
                </li>
                <li className='nsub-list'>
                  <Link to='/customer/inquiry'>
                    <span>문의하기</span>
                  </Link>
                </li>
                <li className='nsub-list'>
                  <Link to='/customer/fag'>
                    <span>자주 묻는 질문</span>
                  </Link>
                </li>
              </ul>
            </div>
          </Link>
        </li>

        {/* ----------05.배송지역검색------------ */}
        <li className='nav-list'>
          <Link to='/delivery'>
            <span className='ntext'>배송 지역 검색</span>
            <div className='nsubmenu' id='nsubmenu05'></div>
          </Link>
        </li>
      </NavBox>
    </>
  );
};

export default Nav;
