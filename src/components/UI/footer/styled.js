import styled from 'styled-components';
import {RED, TEXT_DARK} from '../../css-settings/colors';
import { device } from '../../css-settings/styles/sizes';

export const Wrapper = styled.footer`
    position: absolute;
    bottom: 0;
    width: 100vw;
    height: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${TEXT_DARK};
`

export const SocialIcons = styled.ul`
    text-align: center;
    margin-left: 4vw;
`

export const SocialIconsItem = styled.li`
    display: inline-block;
    list-style-type: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    cursor: pointer;
`

export const SocialIconsLink = styled.a`
    border-bottom: none;
`

export const SocialIconsImg = styled.img`
    width: 28px;
    height: 28px;
    margin-right: 10px;
`

export const Copyright = styled.div`
    margin-top: 1vh;
    font-size: 1.2rem;
    @media ${device.laptop} {
        font-size: 0.8rem;
    }
`

export const DoubleLetter = styled.span`
    color: ${RED};
    font-size: 1.2rem;
    @media ${device.laptop} {
        font-size: 0.8rem;
    }
`