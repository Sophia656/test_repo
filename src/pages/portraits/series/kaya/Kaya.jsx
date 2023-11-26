import React from 'react';
import { Wrapper } from './styled';
import img1 from '../../../../img/web/portraits/kaya/1.jpg';
import img2 from '../../../../img/web/portraits/kaya/2.jpg';
import img3 from '../../../../img/web/portraits/kaya/3.jpg';
import img4 from '../../../../img/web/portraits/kaya/4.jpg';
import img5 from '../../../../img/web/portraits/kaya/5.jpg';
import img6 from '../../../../img/web/portraits/kaya/6.jpg';
import img7 from '../../../../img/web/portraits/kaya/7.jpg';
import img8 from '../../../../img/web/portraits/kaya/8.jpg';
import img9 from '../../../../img/web/portraits/kaya/9.jpg';
import img10 from '../../../../img/web/portraits/kaya/10.jpg';
import MyImage from '../../../../components/UI/image/MyImage';

const Kaya = () => {
    return (
        <Wrapper>
            <MyImage cr_year='2022' w='true' backimg={`url(${img9})`} />
            <MyImage cr_year='2022' backimg={`url(${img10})`} />
            <MyImage cr_year='2022' w='true' backimg={`url(${img2})`} />
            <MyImage cr_year='2022' w='true' backimg={`url(${img4})`} />
            <MyImage cr_year='2022' w='true' backimg={`url(${img3})`} />
            <MyImage cr_year='2022' w='true' backimg={`url(${img6})`} />
            <MyImage cr_year='2022' w='true' backimg={`url(${img5})`} />
            <MyImage cr_year='2022' w='true' backimg={`url(${img7})`} />
            <MyImage cr_year='2022' backimg={`url(${img8})`} />
            <MyImage cr_year='2022' w='true' backimg={`url(${img1})`} />
        </Wrapper>
    );
};

export default Kaya;