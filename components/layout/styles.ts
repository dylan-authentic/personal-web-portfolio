import styled, { keyframes } from 'styled-components';
import { device } from '../../styles/media-breakpoints';

const Wrapper = styled.div`
    height: ${props => props.home ? '100%' : '100%'};
    width: 100vw;

    // @media ${device.mobileS} {
    //   margin: 0px;
    //   padding: 0px;
    // }
    @media ${device.mobileL} {
      // Your mobileL styles here
    }
    @media ${device.tablet} {
      // Your tablet styles here
    }
`;

const NavBar = styled.div`
    margin-top: 8px;
    position: relative;
    // background-color: rgba(221, 221, 221, 0);
`;

const NavBarWrapper = styled.div`
    margin: 0px 55px;
    // background-color: #1d1d1d;
    // border-radius: 15px;
    // background: rgba(255, 255, 255, 0.2); // Semi-transparent white
    // border-radius: 15px; // Round edges
    // backdrop-filter: blur(4px); // This creates the frosted glass effect
    // -webkit-backdrop-filter: blur(10px); // For Safari browser support
    // border: 1px solid rgba(255, 255, 255, 0.3); // Optional: adds a light border
    // box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); // Soft shadow for depth
    // box-sizing: border-box; // Ensures padding doesn't affect overall width
    padding: 12px 0px;
    text-align: center;
    @media ${device.mobileS} {
      margin: 0px 8px;
    }
    @media ${device.laptop} {
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
    font-size: 15px;
    margin: 0px;
    font-family: 'PressStart2P', sans-serif;
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
    // padding-top: 15px;

    a {
      color:white;
      padding: 0px 12px;
      font-family: 'PressStart2P', sans-serif;
      font-size: 12px;
    }
    
    @media ${device.mobileS} {
      float: none;
      text-align: center;
      // padding-top: 8px;
      a {
        display: inline-block;
      }
    }
    @media ${device.laptop} {
      float: right;
      // padding-top: 15px;
    }
`;

const FooterWrapper = styled.div`
    text-align: center;
`;

const Footer = styled.div`
    display: inline-block;
    text-align: center;
    color: white;
    // background-color: #2C5364;
    // margin-bottom: 15px;
    border-radius: 20px;
    padding: 5px 18px;

    h5 {
      margin: 0px;
    }

    a {
      // margin: 0px;
      color: green;
      // font-family: 'Fraunces', sans-serif;
      // font-weight: 700;
      font-family: 'PressStart2P', sans-serif;
    font-size: 18px;
    margin-top: 10px;
    cursor: pointer;
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