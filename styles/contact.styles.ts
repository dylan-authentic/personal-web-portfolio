import styled from 'styled-components';
import { device } from './media-breakpoints';

export const ContactWrapper = styled.div`
    a {
        font-family: 'Inconsolata', sans-serif;
        display: block;
        text-align: center;
        font-size: 20px;
        color: #438bab;
        border-radius: 20px;
        border: 1px solid #438bab;
        padding: 9px 15px;
        text-decoration: none;
        transition: .2s;
    }

    a:hover {
        transform: translateY(-5px);
    }
`;

export const LinkWrapper = styled.div`
    text-align: center;
    margin-bottom: 18px;
    @media ${device.tablet} {
        margin: 0px 185px 18px 185px;
    }
`;

export const SectionPressed = styled.div`
    margin: 0px 55px 40px 55px;
    h1 {
    color: #1d1d1d;
    font-family: 'Inconsolata', sans-serif;
    }
    @media ${device.mobileS} {
    margin: 0px 10px 40px 10px;
    }
    @media ${device.laptop} {
        margin: 0px 55px 40px 55px;
    }
`;