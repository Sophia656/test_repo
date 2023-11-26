import React, { useContext, useEffect, useState } from 'react';
import { SeriesCover, SeriesTitle, SeriesWrap, Wrapper } from './styled';
import { PagesContext } from '../../components/context/context';
import anton from '../../img/web/portraits/anton_cover.jpg';
import antonSmall from '../../img/web/portraits/anton_cover_small.jpg';
import rina_anna from '../../img/web/portraits/rina_anna_cover.jpg';
import rina_anna_small from '../../img/web/portraits/rina_anna_cover_small.jpg';
import nadya from '../../img/web/portraits/nadya_cover.jpg';
import nadya_small from '../../img/web/portraits/nadya_cover_small.jpg';
import kaya from '../../img/web/portraits/kaya_cover.jpg';
import kaya_small from '../../img/web/portraits/kaya_cover_small.jpg';
import maya from '../../img/web/portraits/maya_cover.jpg';
import maya_small from '../../img/web/portraits/maya_cover_small.jpg';
import rina from '../../img/web/portraits/rina_cover.jpg';
import rina_small from '../../img/web/portraits/rina_cover_small.jpg';

const PortraitsPage = () => {
    const { handleClick } = useContext(PagesContext)

    const [antonSrc, setAntonSrc] = useState(antonSmall)
    const [rinaSrc, setRinaSrc] = useState(rina_small)
    const [kayaSrc, setKayaSrc] = useState(kaya_small)
    const [rinaAnnaSrc, setRinaAnnaSrc] = useState(rina_anna_small)
    const [nadyaSrc, setNadyaSrc] = useState(nadya_small)
    const [mayaSrc, setMayaSrc] = useState(maya_small)
    // const [citiesSrc, setCitiesSrc] = useState(citiesSmall)

    useEffect(() => {
        const antonImg = new Image()
        const rinaImg = new Image()
        const kayaImg = new Image()
        const rinaAnnaImg = new Image()
        const nadyaImg = new Image()
        const mayaImg = new Image()
        antonImg.src = anton
        rinaImg.src = rina
        kayaImg.src = kaya
        rinaAnnaImg.src = rina_anna
        nadyaImg.src = nadya
        mayaImg.src = maya
        antonImg.onload = () => {
            setAntonSrc(anton)
        }
        rinaImg.onload = () => {
            setRinaSrc(rina)
        }
        kayaImg.onload = () => {
            setKayaSrc(kaya)
        }
        rinaAnnaImg.onload = () => {
            setRinaAnnaSrc(rina_anna)
        }
        nadyaImg.onload = () => {
            setNadyaSrc(nadya)
        }
        mayaImg.onload = () => {
            setMayaSrc(maya)
        }  
    }, [anton, rina, kaya, rina_anna, nadya, maya])


    return (
        <Wrapper>
            <SeriesWrap>
                <SeriesCover src={antonSrc} 
                loading={antonSrc === antonSmall ? true : false}
                loaded={antonSrc === anton ? true : false}
                onContextMenu={(e) => e.preventDefault()}
                 />
                <SeriesTitle onClick={handleClick} to='/portraits/anton'>ANTON<br/>2023</SeriesTitle>
            </SeriesWrap>
            <SeriesWrap>
                <SeriesCover src={rinaSrc} 
                loading={rinaSrc === rina_small ? true : false}
                loaded={rinaSrc === rina ? true : false}
                onContextMenu={(e) => e.preventDefault()}
                 />
                <SeriesTitle onClick={handleClick} to='/portraits/rina'>RINA<br/>2023</SeriesTitle>
            </SeriesWrap>
            <SeriesWrap>
                <SeriesCover src={kayaSrc} 
                loading={kayaSrc === kaya_small ? true : false}
                loaded={kayaSrc === kaya ? true : false}
                onContextMenu={(e) => e.preventDefault()}
                 />
                <SeriesTitle onClick={handleClick} to='/portraits/kaya_kan'>KAYA KAN<br/>2022</SeriesTitle>
            </SeriesWrap>
            <SeriesWrap>
                <SeriesCover src={rinaAnnaSrc} 
                loading={rinaAnnaSrc === rina_anna_small ? true : false}
                loaded={rinaAnnaSrc === rina_anna ? true : false}
                onContextMenu={(e) => e.preventDefault()}
                 />
                <SeriesTitle onClick={handleClick} to='/portraits/rina_anna'>RINA & ANNA<br/>2022</SeriesTitle>
            </SeriesWrap>
            <SeriesWrap>
                <SeriesCover src={nadyaSrc} 
                loading={nadyaSrc === nadya_small ? true : false}
                loaded={nadyaSrc === nadya ? true : false}
                onContextMenu={(e) => e.preventDefault()}
                 />
                <SeriesTitle onClick={handleClick} to='/portraits/nadya'>NADYA<br/>2022</SeriesTitle>
            </SeriesWrap>
            <SeriesWrap>
                <SeriesCover src={mayaSrc} 
                loading={mayaSrc === maya_small ? true : false}
                loaded={mayaSrc === maya ? true : false}
                onContextMenu={(e) => e.preventDefault()}
                 />
                <SeriesTitle onClick={handleClick} to='/portraits/maya'>MAYA<br/>2021</SeriesTitle>
            </SeriesWrap>
        </Wrapper>
    );
};

export default PortraitsPage;