import styled from 'styled-components';
import { device } from '../../styles/media-breakpoints';

const Wrapper = styled.div`
    margin: 10px 200px 30px 200px;
    padding: 12px 0px;
    width: auto;
    border: 1px dashed #2C5364;
    border-radius: 12px;
    cursor: pointer;
    transition: .3s;
    font-family: 'Fraunces', sans-serif;
    :hover {
        transform: translateY(-5px);
    }
    h2 {
        margin: 0px;
        padding: 0px 10px;
        color: #2C5364;
        text-align: center;
        text-decoration: underline;
    }
    h6 {
        margin: 9px 10px 0px 10px;
        background-color: #670067;
        display: inline-block;
        color: white;
        border-radius: 14px;
        padding: 4px;
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

export const Styles = {
    Wrapper,
    Subwrapper
}