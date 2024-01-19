import styled from 'styled-components';
import { device } from './media-breakpoints';

export const PostWrapper = styled.div`
    margin-top: 15px;
    margin-bottom: 10px;
    padding: 20px 70px;
    background: rgba(255, 255, 255, 0.3); // Semi-transparent white
    border-radius: 15px; // Round edges
    backdrop-filter: blur(4px); // This creates the frosted glass effect
    -webkit-backdrop-filter: blur(10px); // For Safari browser support
    border: 1px solid rgba(255, 255, 255, 0.3); // Optional: adds a light border
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); // Soft shadow for depth
    box-sizing: border-box; // Ensures padding doesn't affect overall width
    color: white;
    font-family: 'Arial', sans-serif;
    font-size: 17px;
    h2 {
        color: white;
        margin-bottom: 0px;
        font-family: 'PressStart2P', sans-serif;
        // text-decoration: underline;
        font-size: 22px;
        margin-top: 4px;
        margin-bottom: 12px;
    }
    h6 {
        margin: 9px 10px 15px 0px;
        background-color: green;
        display: inline-block;
        color: white;
        border-radius: 14px;
        padding: 4px 14px;
        font-family: 'PressStart2P', sans-serif;
    }
    h5 {
        margin: 20px 10px 0px 0px;
        background-color: green;
        display: inline-block;
        color: white;
        border-radius: 14px;
        padding: 4px 14px;
        font-family: 'PressStart2P', sans-serif;
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
        padding: 5px;
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

export const Filters = styled.div`
    margin-top: 15px;
    button {
        background: rgba(255, 255, 255, 0.3); // Semi-transparent black
        backdrop-filter: blur(4px); // This creates the frosted glass effect
        -webkit-backdrop-filter: blur(10px); // For Safari browser support
        border: 1px solid rgba(255, 255, 255, 0.3); // Optional: adds a light border
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); // Soft shadow for depth
        box-sizing: border-box; // Ensures padding doesn't affect overall width
        color: white;
        font-family: 'PressStart2P', 'sans-serif';
        font-size: 9px;
        border-radius: 15px;
        padding: 5px 10px;
        margin: 0 5px;
        cursor: pointer;
        transition: background-color 0.3s;

        &:hover {
            background-color: lightgray; // Change as needed
        }

        // Active state styling
        &.active {
            background: rgba(255, 255, 255, 0.6); // Change as needed
            color: white;
        }
    }
`;