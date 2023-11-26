import React, { useContext, useEffect, useState } from 'react';
import { SeriesCover, SeriesTitle, SeriesWrap, Wrapper } from './styled';
import threeMirrors from '../../img/web/personal/hasard_cover.jpg';
import threeMirrorsSmall from '../../img/web/personal/hasard_cover_small.jpg';
import cities from '../../img/web/personal/cities_cover.jpg';
import citiesSmall from '../../img/web/personal/cities_cover_small.jpg';
import { PagesContext } from '../../components/context/context';

const PersonalPage = () => {
    const { handleClick } = useContext(PagesContext)

    const [threeMirrorsSrc, setThreeMirrorsSrc] = useState(threeMirrorsSmall)
    const [citiesSrc, setCitiesSrc] = useState(citiesSmall)

    useEffect(() => {
        const threeMirrorsImg = new Image()
        const citiesImg = new Image()
        threeMirrorsImg.src = threeMirrors
        citiesImg.src = cities
        threeMirrorsImg.onload = () => {
            setThreeMirrorsSrc(threeMirrors)
        }
        citiesImg.onload = () => {
            setCitiesSrc(cities)
        }
    }, [threeMirrors, cities])

    return (
        <Wrapper>
            <SeriesWrap>
                <SeriesCover src={threeMirrorsSrc} 
                loading={threeMirrorsSrc === threeMirrorsSmall ? true : false}
                loaded={threeMirrorsSrc === threeMirrors ? true : false}
                onContextMenu={(e) => e.preventDefault()}
                 />
                <SeriesTitle onClick={handleClick} to='/personal/three_mirrors_without_amalgam'>THREE MIRRORS WITHOUT AMALGAM</SeriesTitle>
            </SeriesWrap>
            <SeriesWrap>
                <SeriesCover src={citiesSrc} 
                loading={citiesSrc === citiesSmall ? true : false}
                loaded={citiesSrc === cities ? true : false}
                onContextMenu={(e) => e.preventDefault()}
                 />
                <SeriesTitle onClick={handleClick} to='/personal/between_the_city_yes_and_the_city_no'>Between the city Yes and the city No</SeriesTitle>
            </SeriesWrap>
        </Wrapper>
    );
};

export default PersonalPage;