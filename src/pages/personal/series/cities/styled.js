import styled from 'styled-components';
import { device } from '../../../../components/css-settings/styles/sizes';

export const Wrapper = styled.div`
    overflow: hidden;
    width: 100vw;
    height: fit-content;
    display: flex;
    flex-direction: column;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
    @media ${device.laptop} {
        margin-top: 10vh;
    }
`