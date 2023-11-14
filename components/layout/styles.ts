import styled, { keyframes } from 'styled-components';
import { device } from '../../styles/media-breakpoints';

// Define our horizontal and vertical scroll animations
const scrollHorizontal = keyframes`
  from { background-position: 0 0; }
  to { background-position: 0% 100%; }
`;

const scrollVertical = keyframes`
  from { background-position: 0 0; }
  to { background-position: 100% 100%; }
`;

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background: 
    repeating-linear-gradient(0deg, green, green 1px, transparent 1px, transparent 53px),
    repeating-linear-gradient(90deg, green, green 1px, transparent 1px, transparent 69px),
    black;
  background-size: 70px 70px; // Define the size of the squares in the pattern
  animation: ${scrollHorizontal} 5s linear infinite, ${scrollVertical} 70s linear infinite; // Apply both animations
  border: solid 10px transparent;

  @media ${device.mobileS} {
    // Your mobileS styles here
  }
  @media ${device.mobileL} {
    // Your mobileL styles here
  }
  @media ${device.tablet} {
    // Your tablet styles here
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
    margin: 0px;
  }
`;

const Brand = styled.div`
  display: inline-block;
  a {
    text-decoration: none;
  }
  h1 {
    font-size: 24px;
    margin: 0px;
    font-family: 'Zillion', sans-serif;
    text-transform: uppercase;
    color: green;
    text-shadow:
  2px 0 0 #00ff00, // Right
  3px 0 0 #00ff00,
  -2px 0 0 #00ff00, // Left
  -3px 0 0 #00ff00,
  0 2px 0 #00ff00, // Down
  0 3px 0 #00ff00,
  0 -2px 0 #00ff00, // Up
  0 -3px 0 #00ff00,
  2px 2px 0 #00ff00, // Diagonal down right
  2px -2px 0 #00ff00, // Diagonal up right
  -2px 2px 0 #00ff00, // Diagonal down left
  -2px -2px 0 #00ff00;
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