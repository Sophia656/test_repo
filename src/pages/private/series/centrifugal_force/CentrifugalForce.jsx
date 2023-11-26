import React from 'react';
import { Wrapper } from './styled';
import img1 from '../../../../img/web/private/centrifugal_force/1.jpg';
import img2 from '../../../../img/web/private/centrifugal_force/2.jpg';
import img3 from '../../../../img/web/private/centrifugal_force/3.jpg';
import img4 from '../../../../img/web/private/centrifugal_force/4.jpg';
import img5 from '../../../../img/web/private/centrifugal_force/5.jpg';
import MyImage from '../../../../components/UI/image/MyImage';

const CentrifugalForce = () => {
    return (
        <Wrapper>
            <MyImage cr_year='2021' w='true' backimg={`url(${img1})`} />
            <MyImage cr_year='2021' backimg={`url(${img2})`} />
            <MyImage cr_year='2021' backimg={`url(${img3})`} />
            <MyImage cr_year='2021' backimg={`url(${img4})`} />
            <MyImage cr_year='2021' backimg={`url(${img5})`} />
        </Wrapper>
    );
};

export default CentrifugalForce;