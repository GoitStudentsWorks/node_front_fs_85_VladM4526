import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderSection = styled.header`
  margin: 0 auto;
  padding: 8px 20px 0;
  width: 320px;
  display: flex;
  justify-content: space-between;
  border: 1px solid black;

  @media (min-width: 768px) {
    width: 768px;
    padding: 16px 32px 0;
  }

  @media (min-width: 1440px) {
    width: 1440px;
    padding: 12px 112px 0;
  }
`;

export const LogoText = styled.p`
  width: 58x;
  color: #407bff;
  font-size: 16px;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
`;
export const HeaderWrapper = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
`;
export const HeaderBtn = styled.button`
  width: 50px;
  background-color: transparent;
  color: #407bff;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  border: none;
  padding: 0;
  cursor: pointer;

  @media (min-width: 768px) {
    width: 58px;
    font-size: 18px;
    line-height: 1.33;
  }
`;
export const HeaderUserIcon = styled.div`
  width: 28px;
  height: 28px;
`;

export const HeaderLink = styled(Link)`
  display: flex;
  align-items: center;
  display: flex;
  align-items: center;
  gap: 4px;
`;
export const LogoIcon = styled.svg`
  width: 40px;
  @media only screen and (max-width: 767px) {
    height: 48px;
  }
`;
export const UserIcon = styled.svg`
  width: 40px;
  @media only screen and (max-width: 767px) {
    height: 48px;
  }
`;
