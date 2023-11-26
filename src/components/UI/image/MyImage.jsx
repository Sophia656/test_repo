import React, { useEffect, useRef, useState } from 'react';
import Copyright from '../copyright/Copyright';
import { ImageItem, ImageWrapper } from './styled';

const MyImage = ({cr_year, w, backimg}) => {
    const [showCr, setShowCr] = useState(false)

    const onHandleRightClick = (e) => {
        e.preventDefault()
        setShowCr(true)
        setTimeout(() => {
            setShowCr(false)
        }, 1500);
    }

    // const [size, setSize] = useState({});
    // const ref = useRef();

    // const resizeHandler = () => {
    //     const { clientHeight, clientWidth } = ref.current || {}
    //     setSize({ clientHeight, clientWidth });
    // }

    // useEffect(() => {
    //     window.addEventListener("resize", resizeHandler);
    //     resizeHandler();
    //     return () => {
    //     window.removeEventListener("resize", resizeHandler);
    //     };
    // }, [])

    // useEffect(() => {

    // }, [size])

    // const [windowWidth, setWindowWidth] = useState(window.screen.width);

    // useEffect(() => {
    //     window.onresize = () => {setWindowWidth(window.screen.width)};
    //     // // Ваш код
    //     // console.log('window', windowWidth)
    //     return () => {window.onresize = false};
    // }, [windowWidth]);

    // const WidthMobileS = '20vw'
    // const WidthMobileM = '20vw'
    // const WidthMobileL = '20vw'
    // const WidthTablet = '30vw'
    // const WidthLaptop = '40vw'
    // const WidthLaptopL = '50vw'

    return (
        <ImageWrapper>
            {showCr && <Copyright year={cr_year}  />}
            <ImageItem
            // ref={ref}
            // onClick={() => console.log(size.clientHeight, size.clientWidth)}
            backimg={backimg}
            onContextMenu={onHandleRightClick} 
            w={w}
            />
        </ImageWrapper>
    );
};

export default MyImage;