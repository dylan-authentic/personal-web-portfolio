import styled from 'styled-components';
import { device } from './media-breakpoints';

export const SectionPressed = styled.div`
    margin: 0px 55px 40px 55px;
    h1 {
        color: #1d1d1d;
        font-family: 'Inconsolata', sans-serif;
        margin: 15px 0px;
    }
    @media ${device.mobileS} {
        margin: 0px 10px 40px 10px;
    }
    @media ${device.laptop} {
        margin: 0px 55px 40px 55px;
    }
`;

export const ProjectWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    align-self: start;
    @media ${device.mobileS} {
        flex-direction: column;
    }
    @media ${device.tablet} {
        flex-direction: row;
    }
`;