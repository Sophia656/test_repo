import React, { useState } from 'react';
import { Wrapper } from './styled';
import img1 from '../../../../img/web/private/wedd-day/1.jpg';
import img2 from '../../../../img/web/private/wedd-day/2.jpg';
import img3 from '../../../../img/web/private/wedd-day/3.jpg';
import img4 from '../../../../img/web/private/wedd-day/4.jpg';
import img5 from '../../../../img/web/private/wedd-day/5.jpg';
import img6 from '../../../../img/web/private/wedd-day/6.jpg';
import img7 from '../../../../img/web/private/wedd-day/7.jpg';
import MyImage from '../../../../components/UI/image/MyImage';

const WeddDay = () => {
    return (
        <Wrapper>
            <MyImage cr_year='2022' w='true' backimg={`url(${img1})`} />
            <MyImage cr_year='2022' w='true' backimg={`url(${img2})`} />
            <MyImage cr_year='2022' backimg={`url(${img3})`} />
            <MyImage cr_year='2022' w='true' backimg={`url(${img4})`} />
            <MyImage cr_year='2022' w='true' backimg={`url(${img5})`} />
            <MyImage cr_year='2022' w='true' backimg={`url(${img6})`} />
            <MyImage cr_year='2022' w='true' backimg={`url(${img7})`} />
        </Wrapper>
    );
};

export default WeddDay;