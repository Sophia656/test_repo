import React from 'react';
import { Wrapper } from './styled';
import img1 from '../../../../img/web/portraits/nadya/1.jpg';
import img2 from '../../../../img/web/portraits/nadya/2.jpg';
import img3 from '../../../../img/web/portraits/nadya/3.jpg';
import img4 from '../../../../img/web/portraits/nadya/4.jpg';
import img5 from '../../../../img/web/portraits/nadya/5.jpg';
import MyImage from '../../../../components/UI/image/MyImage';

const Nadya = () => {
    return (
        <Wrapper>
            <MyImage cr_year='2022' backimg={`url(${img1})`} />
            <MyImage cr_year='2022' backimg={`url(${img2})`} />
            <MyImage cr_year='2022' backimg={`url(${img3})`} />
            <MyImage cr_year='2022' backimg={`url(${img5})`} />
            <MyImage cr_year='2022' backimg={`url(${img4})`} />
        </Wrapper>
    );
};

export default Nadya;