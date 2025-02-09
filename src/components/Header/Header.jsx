import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import HeaderMenu from './componenets/HeaderMenu';
import axios from 'axios';
import styled from 'styled-components';
import { flexSort } from '../../styles/mixin';

const Navbar = () => {
  const navigate = useNavigate();
  const TOKEN = localStorage.getItem('token');
  const [ok, setOk] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [userInfo, setUserInfo] = useState({});

  const showMore = () => {
    setIsMenuOpen(prev => !prev);
  };

  const { id, name, profile_image, theme_id } = userInfo;

  useEffect(() => {
    TOKEN && setOk(prev => !prev);
  }, []);

  useEffect(() => {
    TOKEN &&
      axios
        .get('http://10.58.52.227:3000/users/loginedUser', {
          headers: {
            authorization: TOKEN,
          },
        })
        .then(res => {
          if (res.data.result.length > 0) {
            setUserInfo(res.data.result[0]);
            setIsLoggedIn(true);
          } else {
            setIsLoggedIn(false);
          }
        });
  }, [TOKEN]);

  return (
    <Container>
      <Nav>
        <Link to="/">
          <LogoImg src="/images/components/Header/cvgLogo.svg" />
        </Link>
        <UserBox>
          {isLoggedIn ? (
            <LoginedBox>
              <UserName>{name} 님 반갑습니다!</UserName>
              <UserImage
                src="../images/components/Header/userIcon.svg"
                alt="userImage"
                onClick={showMore}
              />
              {isMenuOpen && (
                <HeaderMenu
                  isMenuOpen={isMenuOpen}
                  setIsMenuOpen={setIsMenuOpen}
                />
              )}
            </LoginedBox>
          ) : (
            <Link to="/login">
              <LinkText>로그인 / 회원가입</LinkText>
            </Link>
          )}
        </UserBox>
      </Nav>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;

const Nav = styled.nav`
  ${flexSort('space-between', 'center')}
  background-color: #252525;
  height: 70px;
  width: 100%;
  padding: 0 80px;
  position: relative;
`;

const LogoImg = styled.img`
  width: 40px;
  height: 40px;
`;

const UserBox = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 400;
`;

const UserName = styled.span`
  color: ${props => props.theme.white};
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const LinkText = styled.p`
  color: #f5ecd7;
  text-decoration: none;
  margin-left: 30px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: transparent;
    transition: background-color 0.3s ease-in-out;
  }

  &:hover::before {
    background-color: #fff;
  }

  &:hover {
    color: #fff;
  }
`;

const LoginedBox = styled.div`
  ${flexSort('space-between', 'center')}
  gap: 16px;
  position: relative;
`;

const UserImage = styled.img`
  width: 36px;
  height: 36px;
  margin-right: 10px;
  :hover {
    cursor: pointer;
    scale: 1.03;
  }
`;

const ModalBox = styled.div`
  width: 100%;
  position: relative;
`;

export default Navbar;
