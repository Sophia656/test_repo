import React from 'react';
import { Wrapper } from './styled';
import img1 from '../../../../img/web/portraits/rina/1.jpg';
import img2 from '../../../../img/web/portraits/rina/2.jpg';
import img3 from '../../../../img/web/portraits/rina/3.jpg';
import img4 from '../../../../img/web/portraits/rina/4.jpg';
import img5 from '../../../../img/web/portraits/rina/5.jpg';
import img6 from '../../../../img/web/portraits/rina/6.jpg';
import img7 from '../../../../img/web/portraits/rina/7.jpg';
import MyImage from '../../../../components/UI/image/MyImage';

const Rina = () => {
    return (
        <Wrapper>
            <MyImage cr_year='2023' backimg={`url(${img3})`} />
            <MyImage cr_year='2023' w='true' backimg={`url(${img4})`} />
            <MyImage cr_year='2023' backimg={`url(${img1})`} />
            <MyImage cr_year='2023' w='true' backimg={`url(${img2})`} />
            <MyImage cr_year='2023' backimg={`url(${img6})`} />
            <MyImage cr_year='2023' backimg={`url(${img7})`} />
            <MyImage cr_year='2023' backimg={`url(${img5})`} />
        </Wrapper>
    );
};

export default Rina;