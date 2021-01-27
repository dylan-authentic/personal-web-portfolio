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

