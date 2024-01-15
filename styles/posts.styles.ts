import styled from 'styled-components';
import { device } from './media-breakpoints';

export const PostWrapper = styled.div`
    padding: 0px 20px;
    h2 {
        color: #2C5364;
        margin-bottom: 0px;
        font-family: 'Fraunces', sans-serif;
        text-decoration: underline;
    }
    h6 {
        margin: 9px 10px 0px 10px;
        background-color: #670067;
        display: inline-block;
        color: white;
        border-radius: 14px;
        padding: 4px;
        font-family: 'Fraunces', sans-serif;
    }
    pre {
        background-color: #d9d9d9;
        border-radius: 6px;
        padding: 15px;
        overflow-wrap: break-word;
    }
    code {
        color: green;
        background-color: #d9d9d9;
        padding: 8px;
        border-radius: 3px;
        white-space: pre-wrap   
    }
    @media ${device.tablet} {
        pre {
            margin: 0px 60px;
        }
    }
`;

export const PostContainer = styled.div`
    margin-left: auto;
    margin-right: auto;
    max-width: 1200px;
    font-size: 12px;
    border-radius: 15px; // Round edges
    // background: rgba(255, 255, 255, 0.6); // Semi-transparent black
    // backdrop-filter: blur(4px); // This creates the frosted glass effect
    // -webkit-backdrop-filter: blur(10px); // For Safari browser support
    // border: 1px solid rgba(255, 255, 255, 0.3); // Optional: adds a light border
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); // Soft shadow for depth
    box-sizing: border-box; // Ensures padding doesn't affect overall width
    padding: 20px 60px;
    h1 {
        color: white;
        font-family: 'PressStart2P', sans-serif;
    }
    p {
        color: white;
        font-family: 'PressStart2P', sans-serif;
    }
`;

export const PostHeaderSection = styled.div`
    border-radius: 15px; // Round edges
    background: rgba(255, 255, 255, 0.3); // Semi-transparent black
    backdrop-filter: blur(4px); // This creates the frosted glass effect
    -webkit-backdrop-filter: blur(10px); // For Safari browser support
    border: 1px solid rgba(255, 255, 255, 0.3); // Optional: adds a light border
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); // Soft shadow for depth
    box-sizing: border-box; // Ensures padding doesn't affect overall width
    padding: 10px 35px;
`;