import styled from 'styled-components';
import {BACK_LIGHT, TEXT_DARK, ROBOTO, BAI, RED} from '../../components/css-settings/colors';
import { device } from '../../components/css-settings/styles/sizes';

export const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background: ${BACK_LIGHT};
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    position: relative;
    overflow: hidden;
`

export const DescWrap = styled.div`
    width: 60vw;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    position: relative;
    @media ${device.laptop} {
        width: 90vw;
        flex-direction: column;
        align-items: center;
        height: 80vh;
        justify-content: space-evenly;
    }
`

export const Avatar = styled.img`
    width: 22vw;
    @media ${device.laptop} {
        width: 30vw;
    }
    @media ${device.mobileL} {
        width: 50vw;
    }
`

export const Description = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 30vw;
    font-size: 1rem;
    color: ${TEXT_DARK};
    @media ${device.laptop} {
        width: 90vw;
    }
`
export const DescTitle = styled.div`
    font-size: 2.7rem;
    margin-top: 2vh;
    ${props => props.rus && `
        font-size: 2.6rem;
        font-family: ${ROBOTO};
    `};
    @media ${device.laptop} {
        margin: 2vh 0;
        font-size: 1.7rem;
    }
    @media ${device.mobileL} {
        margin: 2vh 0;
        font-size: 1.2rem;
    }
`

export const DescContent = styled.div`
    color: ${TEXT_DARK};
    margin-top: 5vh;
    width: 30vw;
    height: 20vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    &:first-child {
        text-align: center;
        margin-top: -2vh;
    }
    ${props => props.rus && `
        font-family: ${ROBOTO};
        font-weight: 200;
    `};
    @media ${device.laptop} {
        width: 70vw;
        margin-top: 0;
        justify-content: center;
        height: fit-content;
    }
    @media ${device.mobileL} {
        width: 90vw;
        // margin-top: 0;
        // justify-content: center;
        // height: fit-content;
    }
`

export const DescContentText = styled.p`
    font-size: 1.2rem;
    @media ${device.laptop} {
        font-size: 1.3rem;
        text-align: center;
    }
    @media ${device.mobileL} {
        font-size: 1rem;
        text-align: center;
    }
`

export const MailLink = styled.a`
    color: ${TEXT_DARK};
    border-bottom: none;
    text-decoration: none;
    cursor: pointer;
    font-size: 1.2rem;
    ${props => props.rus && `
        font-family: ${BAI};
    `};
    ${props => props.active &&`
        color: ${RED};
    `}
    @media ${device.laptop} {
        font-size: 1.3rem;
    }
    @media ${device.mobileL} {
        font-size: 1rem;
    }
`

export const TelegramLink = styled.a`
    color: ${TEXT_DARK};
    border-bottom: none;
    text-decoration: none;
    cursor: pointer;
    font-size: 1.2rem;
    ${props => props.rus && `
        font-family: ${BAI};
    `};
    ${props => props.active &&`
        color: ${RED};
    `}
    @media ${device.laptop} {
        font-size: 1.3rem;
    }
    @media ${device.mobileL} {
        font-size: 1rem;
    }
`