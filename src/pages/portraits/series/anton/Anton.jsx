import React, { useState } from 'react';
import { Wrapper } from './styled';
import img1 from '../../../../img/web/portraits/anton/1.jpg';
import img2 from '../../../../img/web/portraits/anton/2.jpg';
import img3 from '../../../../img/web/portraits/anton/3.jpg';
import img4 from '../../../../img/web/portraits/anton/4.jpg';
import MyImage from '../../../../components/UI/image/MyImage';

const Anton = () => {
    return (
        <Wrapper>
            <MyImage cr_year='2023' backimg={`url(${img3})`} />
            <MyImage cr_year='2023' backimg={`url(${img2})`} />
            <MyImage cr_year='2023' backimg={`url(${img4})`} />
            <MyImage cr_year='2023' backimg={`url(${img1})`} />
        </Wrapper>
    );
};

export default Anton;