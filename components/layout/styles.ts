import styled from 'styled-components';
import { device } from '../../styles/media-breakpoints';

const Wrapper = styled.div`
  height: 90vh;
  margin: 25px 35px;
  border: 1px solid black;
  border-radius: 12px;

  @media ${device.mobileS} {
    margin: 20px 5px;
    height: auto;
  }
  @media ${device.mobileL} {
    margin: 20px 18px;
    height: auto;
  }
  @media ${device.tablet} {
    margin: 30px 5px;
    height: 90vh;
  }
`;

const NavBar = styled.div`
  margin-top: 20px;
  position: relative;
  background-color: rgba(221, 221, 221, 0);
`;

const NavBarWrapper = styled.div`
  margin: 0px 55px;
  background-color: #1d1d1d;
  border-radius: 20px;
  padding: 12px 0px;
  text-align: center;
  @media ${device.mobileS} {
    margin: 0px 8px;
  }
  @media ${device.tablet} {
    text-align: left;
    padding: 20px;
  }
  @media ${device.laptopL} {
    margin: 0px 55px;
  }
`;

const Container = styled.div`
  margin: 0px 55px;
  @media ${device.mobileS} {
    margin: 0px 10px;
  }
`;

const Brand = styled.div`
  display: inline-block;
  a {
    text-decoration: none;
  }
  h1 {
    margin: 0px;
    font-family: 'Fraunces', sans-serif;
    color: white;
  }
`;

const NavMenu = styled.div`
  float: right;
  padding-top: 15px;
  a {
    color:white;
    padding: 0px 12px;
    font-family: 'Inconsolata', sans-serif;
  }
  @media ${device.mobileS} {
    float: none;
    text-align: center;
    padding-top: 8px;
    a {
      display: inline-block;
    }
  }
  @media ${device.tablet} {
    float: right;
    padding-top: 15px;
  }
`;

const FooterWrapper = styled.div`
    text-align: center;
`;

const Footer = styled.div`
  display: inline-block;
  text-align: center;
  color: white;
  background-color: #2C5364;
  margin-bottom: 15px;
  border-radius: 20px;
  ${'' /* margin: 0px 200px 35px 200px; */}
  padding: 5px 18px;

  h5 {
    margin: 0px;
  }

  a {
  margin: 0px;
  color: white;
  font-family: 'Fraunces', sans-serif;
  font-weight: 700;
  }
`;

export const Styles = {
  Wrapper,
  NavBar,
  NavBarWrapper,
  Container,
  Brand,
  NavMenu,
  FooterWrapper,
  Footer
}