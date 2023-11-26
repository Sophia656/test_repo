import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {ROBOTO, RED} from '../../components/css-settings/colors';
import {device} from '../../components/css-settings/styles/sizes';

export const Wrapper = styled.div`
    overflow: hidden;
    width: 100vw;
    height: fit-content;
    display: flex;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin-top: ${props => props.mt || '0'};
`

export const SeriesWrap = styled.div`
    height: 84vh;
    width: 35vw;
    margin: 8vh 0;
    color: red;
    background-image: ${props => props.backimg || 'none'};
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    @media ${device.laptop} {
        height: 35vh;
        margin: 2vh 0;
        &:first-child {
            margin-top: 10vh;
        }
        &:nth-child(2) {
            margin-top: 10vh;
        }
        &:nth-child(5) {
            margin-bottom: 10vh;
        }
        &:nth-child(6) {
            margin-bottom: 10vh;
        }
    }
    @media ${device.tablet} {
        flex-direction: column;
        width: 80vw;
    }
    @media ${device.mobileL} {
        margin-top: 2vh;
        height: 55vh;
        width: 90vw;
        &:first-child {
            margin-top: 10vh;
        }
        &:nth-child(2) {
            margin-top: 2vh;
        }
        &:nth-child(5) {
            margin-bottom: 2vh;
        }
        &:nth-child(6) {
            margin-bottom: 2vh;
        }
    }
`

export const SeriesCover = styled.img`
    object-fit: cover;
    object-position: center;
    width: inherit;
    height: inherit;
    ${props => props.loading &&`
        filter: blur(10px);
    `}
    ${props => props.loaded &&`
        filter: blur(0px);
        transition: filter 1s linear;
    `}
    @media ${device.laptop} {
        height: 35vh;
        width: 40vw;
    }
    @media ${device.mobileL} {
        height: 55vh;
        width: 90vw;
    }
`

export const SeriesTitle = styled(Link)`
    padding: 0.4vw 0.9vh;
    text-decoration: none;
    position: absolute;
    // z-index: 500;
    color: ${RED};
    width: 27vw;
    cursor: pointer;
    font-weight: bold;
    font-size: 2.3rem;
    border-radius: 4px;
    text-align: center;
    line-height: 4.5vh;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    text-transform: uppercase;
    &:hover {
        width: 30vw;
        font-size: 2.6rem;
        line-height: 5.5vh;
        backdrop-filter: blur(4px);
    }
    ${props => props.rus && `
        font-weight: 800;
        font-size: 1.3rem;
        font-family: ${ROBOTO};
    `};
`