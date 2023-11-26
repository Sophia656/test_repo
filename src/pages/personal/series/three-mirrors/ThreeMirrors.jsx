import React from 'react';
import { Wrapper } from './styled';
import img1 from '../../../../img/web/personal/hasard/1.jpg';
import img2 from '../../../../img/web/personal/hasard/2.jpg';
import img3 from '../../../../img/web/personal/hasard/3.jpg';
import img4 from '../../../../img/web/personal/hasard/4.jpg';
import img5 from '../../../../img/web/personal/hasard/5.jpg';
import img6 from '../../../../img/web/personal/hasard/6.jpg';
import img8 from '../../../../img/web/personal/hasard/8.jpg';
import img9 from '../../../../img/web/personal/hasard/9.jpg';
import img10 from '../../../../img/web/personal/hasard/10.jpg';
import img11 from '../../../../img/web/personal/hasard/11.jpg';
import img12 from '../../../../img/web/personal/hasard/12.jpg';
import img13 from '../../../../img/web/personal/hasard/13.jpg';
import img14 from '../../../../img/web/personal/hasard/14.jpg';
import img16 from '../../../../img/web/personal/hasard/16.jpg';
import img17 from '../../../../img/web/personal/hasard/17.jpg';
import img18 from '../../../../img/web/personal/hasard/18.jpg';
import img19 from '../../../../img/web/personal/hasard/19.jpg';
import img20 from '../../../../img/web/personal/hasard/20.jpg';
import img21 from '../../../../img/web/personal/hasard/21.jpg';
import img22 from '../../../../img/web/personal/hasard/22.jpg';
import img23 from '../../../../img/web/personal/hasard/23.jpg';
import img24 from '../../../../img/web/personal/hasard/24.jpg';
import MyImage from '../../../../components/UI/image/MyImage';

const ThreeMirrors = () => {

    return (
        <Wrapper>
            <MyImage cr_year='2021' w='true' backimg={`url(${img1})`} />
            <MyImage cr_year='2021' backimg={`url(${img4})`} />
            <MyImage cr_year='2022' backimg={`url(${img3})`} />
            <MyImage cr_year='2021' backimg={`url(${img2})`} />
            <MyImage cr_year='2021' backimg={`url(${img5})`} />
            <MyImage cr_year='2021' backimg={`url(${img6})`} />
            <MyImage cr_year='2021' backimg={`url(${img8})`} />
            <MyImage cr_year='2023' backimg={`url(${img10})`} />
            <MyImage cr_year='2021' backimg={`url(${img9})`} />
            <MyImage cr_year='2021' backimg={`url(${img11})`} />
            <MyImage cr_year='2023' w='true' backimg={`url(${img23})`} />
            <MyImage cr_year='2022' backimg={`url(${img21})`} />
            <MyImage cr_year='2023' backimg={`url(${img12})`} />
            <MyImage cr_year='2023' backimg={`url(${img24})`} />
            <MyImage cr_year='2023' backimg={`url(${img18})`} />
            <MyImage cr_year='2021' backimg={`url(${img14})`} />
            <MyImage cr_year='2021' w='true' backimg={`url(${img17})`} />
            <MyImage cr_year='2022' w='true' backimg={`url(${img13})`} />
            <MyImage cr_year='2021' backimg={`url(${img19})`} />
            <MyImage cr_year='2023' backimg={`url(${img16})`} />
            <MyImage cr_year='2021' w='true'  backimg={`url(${img22})`} />
            <MyImage cr_year='2021' backimg={`url(${img20})`} />
        </Wrapper>
    );
};

export default ThreeMirrors;