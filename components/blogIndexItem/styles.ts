import styled from 'styled-components';
import { device } from '../../styles/media-breakpoints';

const Wrapper = styled.div`
    margin: 10px 200px 30px 200px;
    padding: 12px 0px;
    width: auto;
    border: 1px dashed #00ff00;
    border-radius: 12px;
    cursor: pointer;
    transition: .3s;
    font-family: 'PressStart2P', sans-serif;
    font-size: 9px;
    padding: 45px;
    backdrop-filter: blur(4px); // This creates the frosted glass effect
        -webkit-backdrop-filter: blur(10px); // For Safari browser support
        border: 1px solid rgba(255, 255, 255, 0.3); // Optional: adds a light border
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); // Soft shadow for depth
        box-sizing: border-box; // Ensures padding doesn't affect overall width
        background: rgba(255, 255, 255, 0.3); // Semi-transparent white
        border-radius: 15px; // Round edges  
    :hover {
        transform: translateY(-5px);
    }
    h2 {
        margin: 0px;
        padding: 0px 10px;
        color: #00ff00;
        text-align: center;
        text-decoration: underline;
    }
    h6 {
        margin: 9px 10px 0px 10px;
        backdrop-filter: blur(4px); // This creates the frosted glass effect
        -webkit-backdrop-filter: blur(10px); // For Safari browser support
        border: 1px solid rgba(255, 255, 255, 0.3); // Optional: adds a light border
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); // Soft shadow for depth
        box-sizing: border-box; // Ensures padding doesn't affect overall width
        background: rgba(255, 255, 255, 0.2); // Semi-transparent white
        border-radius: 15px; // Round edges    
        display: inline-block;
        color: white;
        border-radius: 14px;
        padding: 4px 8px;
        font-size: 8px;
    }
    @media ${device.mobileS} {
        margin: 20px 10px 20px 10px;
    }
    @media ${device.mobileL} {
        h2 {
            padding: 12px 12px;
        }
    }
`;

const Subwrapper = styled.div`
    text-align: center;
`;

const BlogItemContainer = styled.div`
    margin-left: auto;
    margin-right: auto;
    max-width: 1200px;
`;

export const Styles = {
    Wrapper,
    Subwrapper,
    BlogItemContainer
}

