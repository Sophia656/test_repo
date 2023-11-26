import React from 'react';
import { Wrapper } from './styled';
import img1 from '../../../../img/web/portraits/maya/1.jpg';
import img2 from '../../../../img/web/portraits/maya/2.jpg';
import img3 from '../../../../img/web/portraits/maya/3.jpg';
import img4 from '../../../../img/web/portraits/maya/4.jpg';
import img5 from '../../../../img/web/portraits/maya/5.jpg';
import img6 from '../../../../img/web/portraits/maya/6.jpg';
import MyImage from '../../../../components/UI/image/MyImage';

const Maya = () => {
    return (
        <Wrapper>
            <MyImage cr_year='2021' backimg={`url(${img1})`} />
            <MyImage cr_year='2021' backimg={`url(${img2})`} />
            <MyImage cr_year='2022' w='true' backimg={`url(${img3})`} />
            <MyImage cr_year='2021' backimg={`url(${img6})`} />
            <MyImage cr_year='2021' backimg={`url(${img4})`} />
            <MyImage cr_year='2021' backimg={`url(${img5})`} />
        </Wrapper>
    );
};

export default Maya;