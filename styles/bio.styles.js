import styled from 'styled-components';

export const Wrapper = styled.div`
    padding-bottom: 20px;

    h1 {
        color: #1d1d1d;
        font-family: 'Inconsolata', sans-serif;
    }
`;

export const LinkWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 15px;

    a {
        padding: 15px;
        font-size: 14px;
        font-family: 'Inconsolata', sans-serif;
        text-decoration: underline;
        color: #014c8d;
    }
`;

export const ContentWrapper = styled.div`
    padding: 20px 50px;
    margin: 15px 155px 0px 155px; 
    border: 1px solid #1d1d1d;
    border-radius: 12px;

    h1 {
        margin: 0px;
    }

    p {
        font-family: 'Inconsolata', sans-serif;
    }
`;