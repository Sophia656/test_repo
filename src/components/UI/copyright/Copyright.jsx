import React from 'react';
import { CopyrightWrap } from './styled';

const Copyright = ({year}) => {

    return (
        <CopyrightWrap>
            This photo is Copyright © {year}<br/> Sophia Antropova. All rights reserved.
        </CopyrightWrap>
    );
};

export default Copyright;