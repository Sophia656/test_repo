import React from 'react';
import { Wrapper } from './styled';
import img1 from '../../../../img/web/personal/cities/1.jpg';
import img2 from '../../../../img/web/personal/cities/2.jpg';
import img3 from '../../../../img/web/personal/cities/3.jpg';
import img4 from '../../../../img/web/personal/cities/4.jpg';
import img5 from '../../../../img/web/personal/cities/5.jpg';
import img7 from '../../../../img/web/personal/cities/7.jpg';
import img8 from '../../../../img/web/personal/cities/8.jpg';
import img9 from '../../../../img/web/personal/cities/9.jpg';
import img14 from '../../../../img/web/personal/cities/14.jpg';
import img15 from '../../../../img/web/personal/cities/15.jpg';
import img16 from '../../../../img/web/personal/cities/16.jpg';
import img18 from '../../../../img/web/personal/cities/18.jpg';
import MyImage from '../../../../components/UI/image/MyImage';

const Cities = () => {
    
    return (
        <Wrapper>
            <MyImage cr_year='2021' w='true' backimg={`url(${img1})`} />
            <MyImage cr_year='2021' w='true' backimg={`url(${img2})`} />
            <MyImage cr_year='2019' backimg={`url(${img3})`} />
            <MyImage cr_year='2019' backimg={`url(${img4})`} />
            <MyImage cr_year='2021' w='true' backimg={`url(${img5})`} />
            <MyImage cr_year='2019' backimg={`url(${img8})`} />
            <MyImage cr_year='2021' w='true' backimg={`url(${img15})`} />
            <MyImage cr_year='2021' w='true' backimg={`url(${img18})`} />
            <MyImage cr_year='2019' w='true' backimg={`url(${img7})`} />
            <MyImage cr_year='2021' w='true' backimg={`url(${img14})`} />
            <MyImage cr_year='2021' w='true' backimg={`url(${img16})`} />
            <MyImage cr_year='2019' w='true' backimg={`url(${img9})`} />
        </Wrapper>
    );
};

export default Cities;