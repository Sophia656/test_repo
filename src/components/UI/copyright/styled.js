import styled from 'styled-components';
import {TEXT_DARK} from '../../css-settings/colors';

export const CopyrightWrap = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    font-size: 11px;
    margin-top: 25vh;
    margin-left: 15vw;
    line-height: 10px;
    padding: 8px 8px;
    border-radius: 4px;
    box-shadow: 0 0 5px ${TEXT_DARK};
    background: #cabdb0a9;
    color: black;
    display: flex;
    flex-wrap: nowrap;
    width: 15vw;
`