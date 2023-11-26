import styled from 'styled-components';
import {TEXT_LIGHT, RED, TEXT_DARK, RED_25, RED_45, RED_65, RED_85} from '../css-settings/colors';
import {device} from '../css-settings/styles/sizes';

export const TitleWrapper = styled.div`
    display: flex;
    width: 30vw;
    height: 5vh;
    align-items: center;
    justify-content: flex-end;
    cursor: none;
    ${props => props.cursor &&`
        cursor: default;
    `};
    @media ${device.laptop} {
        width: 90vw;
    }
    @media ${device.tablet} {

    }
    @media ${device.mobileL} {

    }
`

export const TitleItem = styled.h1`
    top: 0;
    text-shadow: 2px 2px 15px rgba(255,255,255,0.03);
    @keyframes slidein {
        0% { color: ${RED_25}; }
        25% { color: ${RED_45}; }
        50% { color: ${RED_65}; }
        75% { color: ${RED_85}; }
        100% {color: ${RED}; }
    }
    animation: slidein 300ms;
    color: ${props => props.color || TEXT_LIGHT};
    transition-duration: 0s;
    transition-timing-function: easy;
    ${props => props.back&&`
        background: -webkit-linear-gradient(left, ${TEXT_DARK}, ${RED_85} 90%, ${RED} 20%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        top: 50;
    `};
    @media ${device.laptop} {
        font-size: 3rem;
    }
`

export const Line = styled.div`
    display: inline;
    height: 6vh;
    width: 1px;
    background: ${TEXT_DARK};
    margin-top: 1.7vh;
    ${props => props.secframe&&`
        @keyframes glowing {
            from { background: #00000020; }
            to {background: ${TEXT_DARK}; }
        }
        animation: glowing 900ms infinite;
    `};
`