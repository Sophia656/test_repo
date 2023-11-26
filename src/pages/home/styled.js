import styled from 'styled-components';
import cover from '../../img/web/two_reclining.jpg';
import coverSmall from '../../img/web/two_reclining_small.jpg';
import {TEXT_DARK, TEXT_LIGHT, RED, ROBOTO} from '../../components/css-settings/colors';
import {device} from '../../components/css-settings/styles/sizes';

export const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url(${cover});
    background-size: 100vw 115vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    @media ${device.laptop} {
        background-size: 180vw 100vh;
    }
    @media ${device.tablet} {

    }
    @media ${device.mobileL} {
        background-size: 257vw 100vh;
    }
`

export const AgeModalWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url(${coverSmall});
    background-size: 100vw 115vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    @media ${device.laptop} {
        background-size: 180vw 100vh;
    }
    @media ${device.tablet} {

    }
    @media ${device.mobileL} {
        background-size: 270vw 100vh;
    }
`

export const AgeModal = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 25vw;
    height: 50vh;
    padding: 1vw;
    position: relative;
    backdrop-filter: blur(20px);
    border-radius: 15px;
    @media ${device.laptop} {
        width: 80vw;
    }
    @media ${device.tablet} {

    }
    @media ${device.mobileL} {

    }
`

export const ModalDesc = styled.div`
    color: ${TEXT_DARK};
    margin-bottom: 4vh;
    text-align: center;
    margin-top: 0vh;
    text-transform: uppercase;
    font-size: 1.1rem;
    ${props => props.rus && `
        margin-bottom: 4vh;
        font-family: ${ROBOTO};
        word-spacing: 1px;
        font-size: 1rem;
    `};
    @media ${device.laptop} {
        font-size: 1.5rem;
        line-height: 3vh;
    }
    @media ${device.tablet} {

    }
    @media ${device.mobileL} {
        font-size: 1rem;
        line-height: 3vh;
    }
`

export const DescTitle = styled.div`
    color: ${RED};
    font-size: 1.5rem;
    margin-bottom: -4vh;
    ${props => props.rus && `
        font-size: 1.4rem;
        margin-bottom: -5vh;
        font-family: ${ROBOTO};
    `};
    @media ${device.laptop} {
        font-size: 1.6rem;
    }
    @media ${device.tablet} {

    }
    @media ${device.mobileL} {

    }
`

export const ModalBtn = styled.div`
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.3);
    color: ${TEXT_DARK};
    cursor: pointer;
    width: 15vw;
    height: 6vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    text-transform: uppercase;
    font-size: 1rem;
    &:last-child {
        margin-top: 1vh;
    }
    &:hover {
        background: ${RED};
        color: ${TEXT_LIGHT};
    }
    ${props => props.rus && `
        font-family: ${ROBOTO};
    `};
    @media ${device.laptop} {
        width: 60vw;
        font-size: 1rem;
    }
    @media ${device.tablet} {

    }
    @media ${device.mobileL} {

    }
`