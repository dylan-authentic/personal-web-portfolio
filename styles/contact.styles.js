import styled from 'styled-components';

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
`;