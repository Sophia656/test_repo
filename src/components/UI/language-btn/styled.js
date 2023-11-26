import styled from 'styled-components';
import {device} from '../../css-settings/styles/sizes';

export const Btn = styled.div`
    width: 2vw;
    height: 2vw;
    background: rgba(0,0,0,0.7);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    margin: 1vw;
    color: #cabdb0;
    font-size: 1.2rem;
    z-index: 500;
    cursor: pointer;
    @media ${device.laptop} {
        margin: 2vh 6vw;
        width: 3.2vw;
        height: 3.2vw;
        font-size: 1.3rem;
    }
    @media ${device.tablet} {
        font-size: 1.1rem;
    }
    @media ${device.mobileL} {
        margin: 3vh 10vw;
        width: 7.4vw;
        height: 7.4vw;
    }
`