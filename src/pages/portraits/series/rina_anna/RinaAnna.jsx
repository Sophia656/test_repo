import React from 'react';
import { Wrapper } from './styled';
import img1 from '../../../../img/web/portraits/rina_anna/1.jpg';
import img2 from '../../../../img/web/portraits/rina_anna/2.jpg';
import img3 from '../../../../img/web/portraits/rina_anna/3.jpg';
import img4 from '../../../../img/web/portraits/rina_anna/4.jpg';
import img5 from '../../../../img/web/portraits/rina_anna/5.jpg';
import img6 from '../../../../img/web/portraits/rina_anna/6.jpg';
import img7 from '../../../../img/web/portraits/rina_anna/7.jpg';
import img8 from '../../../../img/web/portraits/rina_anna/8.jpg';
import img9 from '../../../../img/web/portraits/rina_anna/9.jpg';
import MyImage from '../../../../components/UI/image/MyImage';

const RinaAnna = () => {
    return (
        <Wrapper>
            <MyImage cr_year='2022' w='true' backimg={`url(${img9})`} />
            <MyImage cr_year='2022' backimg={`url(${img1})`} />
            <MyImage cr_year='2022' backimg={`url(${img2})`} />
            <MyImage cr_year='2022' w='true' backimg={`url(${img3})`} />
            <MyImage cr_year='2022' w='true' backimg={`url(${img4})`} />
            <MyImage cr_year='2022' backimg={`url(${img5})`} />
            <MyImage cr_year='2022' backimg={`url(${img6})`} />
            <MyImage cr_year='2022' backimg={`url(${img7})`} />
            <MyImage cr_year='2022' backimg={`url(${img8})`} />
        </Wrapper>
    );
};

export default RinaAnna;