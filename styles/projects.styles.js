import styled from 'styled-components';
import { device } from './media-breakpoints';

export const ProjectWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    align-self: start;
`;

export const ProjectItem = styled.div`
    display: flex;
    flex-direction: column;
    box-shadow: black;
    width: 30%;
    margin-bottom: 35px;
`;

export const ProjectItemTop = styled.div`
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    background-color: #1d1d1d;
    padding: 12px 30px;
    color: white;
    font-family: 'Inconsolata', sans-serif;

    h3 {
        margin: 12px 0px 0px 0px;
        color: #438bab;
        border-bottom: 1px solid #438bab;
        display: inline-block;
    }
`;

export const ProjectItemBottom = styled.div`
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
    background-color: white;
    color: #203A43;
    padding: 15px 30px 50px 30px;

    a {
        color: #203A43;
        font-family: 'Inconsolata', sans-serif;
        display: block;
        margin-bottom: 10px;
    }
`;