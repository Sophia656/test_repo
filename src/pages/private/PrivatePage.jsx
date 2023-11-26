import React, { useContext, useEffect, useState } from 'react';
import { SeriesCover, SeriesTitle, SeriesWrap, Wrapper } from './styled';
import ballet from '../../img/web/private/ballet_cover.jpg';
import wedd_day from '../../img/web/private/wedd-day_cover.jpg';
import centrifugal_force from '../../img/web/private/centrifugal_force_cover.jpg';
import ballet_small from '../../img/web/private/ballet_cover_small.jpg';
import wedd_day_small from '../../img/web/private/wedd-day_cover_small.jpg';
import centrifugal_force_small from '../../img/web/private/centrifugal_force_cover_small.jpg';
import { PagesContext } from '../../components/context/context';

const PrivatePage = () => {
    const { handleClick } = useContext(PagesContext)

    const [balletSrc, setBalletSrc] = useState(ballet_small)
    const [weddSrc, setWeddSrc] = useState(wedd_day_small)
    const [forceSrc, setForceSrc] = useState(centrifugal_force_small)

    useEffect(() => {
        const balletImg = new Image()
        const weddImg = new Image()
        const forceImg = new Image()

        balletImg.src = ballet
        weddImg.src = wedd_day
        forceImg.src = centrifugal_force

        balletImg.onload = () => {
            setBalletSrc(ballet)
        }
        weddImg.onload = () => {
            setWeddSrc(wedd_day)
        }
        forceImg.onload = () => {
            setForceSrc(centrifugal_force)
        }

    }, [ballet, wedd_day, centrifugal_force])
    return (
        <Wrapper>
            <SeriesWrap>
                <SeriesCover src={weddSrc} 
                loading={weddSrc === wedd_day_small ? true : false}
                loaded={weddSrc === wedd_day ? true : false}
                onContextMenu={(e) => e.preventDefault()}
                 />
                <SeriesTitle onClick={handleClick} to='/private_stories/wedd_day'>WEDD-DAY</SeriesTitle>
            </SeriesWrap>
            <SeriesWrap>
                <SeriesCover src={balletSrc} 
                loading={balletSrc === ballet_small ? true : false}
                loaded={balletSrc === ballet ? true : false}
                onContextMenu={(e) => e.preventDefault()}
                 />
                <SeriesTitle onClick={handleClick} to='/private_stories/ballet_class'>Ballet class</SeriesTitle>
            </SeriesWrap>
            <SeriesWrap>
                <SeriesCover src={forceSrc} 
                loading={forceSrc === centrifugal_force_small ? true : false}
                loaded={forceSrc === centrifugal_force ? true : false}
                onContextMenu={(e) => e.preventDefault()}
                 />
                <SeriesTitle onClick={handleClick} to='/private_stories/centrifugal_force'>centrifugal force</SeriesTitle>
            </SeriesWrap>
        </Wrapper>
    );
};

export default PrivatePage;