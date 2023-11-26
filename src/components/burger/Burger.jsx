import React, { useState } from 'react';
import { BACK_DARK } from '../css-settings/colors';
import { BurgerItem, BurgerItemBottom, BurgerItemTitle, BurgerItemTop, BurgerMenu, BurgerWrapper, Wrapper } from './styled';
import { useEffect } from 'react';
import { useContext } from 'react';
import { PagesContext } from '../context/context';

const Burger = () => {
    const [active, setActive] = useState(false)
    const [showSeries, setShowSeries] = useState(false)
    const [changeDots, setChangeDots] = useState(false)
    const { rus, location, handleClick, testAgeModal } = useContext(PagesContext)

    

    useEffect(() => {
        if (location.pathname === '/contacts') {
            setChangeDots(true)
        } else {
            setChangeDots(false)
        }
    }, [location])

    return (
        <Wrapper show={!testAgeModal}>
            <BurgerWrapper onClick={() => setActive(!active)} onMouseEnter={() => setShowSeries(false)}>
                <BurgerItemTop dotback={changeDots ? BACK_DARK : ''} active={active} />
                <BurgerItemBottom dotback={changeDots ? BACK_DARK : ''} active={active} />
            </BurgerWrapper>
            <BurgerMenu  active={active}>
                <BurgerItem>
                    <BurgerItemTitle
                    active={showSeries} 
                    onMouseEnter={() => setShowSeries(true)} 
                    onClick={() => {setActive(false); handleClick()}} 
                    to='/personal'
                    rus={rus}
                    >
                        {rus ? 'ПЕРСОНАЛЬНЫЕ РАБОТЫ' : 'PERSONAL'}
                    </BurgerItemTitle>
                </BurgerItem>
                <BurgerItem>
                    <BurgerItemTitle
                    active={showSeries} 
                    onMouseEnter={() => setShowSeries(true)} 
                    onClick={() => {setActive(false); handleClick()}} 
                    to='/portraits'
                    rus={rus}
                    >
                        {rus ? 'ПОРТРЕТЫ' : 'PORTRAITS'}
                    </BurgerItemTitle>
                </BurgerItem>
                <BurgerItem>
                    <BurgerItemTitle
                    active={showSeries} 
                    onMouseEnter={() => setShowSeries(true)} 
                    onClick={() => {setActive(false); handleClick()}} 
                    to='/private_stories'
                    rus={rus}
                    >
                        {rus ? 'ЧАСТНЫЕ ИСТОРИИ' : 'PRIVATE STORIES'}
                    </BurgerItemTitle>
                </BurgerItem>
                <BurgerItem>
                    <BurgerItemTitle
                    active={showSeries} 
                    onMouseEnter={() => setShowSeries(true)} 
                    onClick={() => {setActive(false); handleClick()}}  
                    to='/contacts'
                    rus={rus}
                    >
                        {rus ? 'КОНТАКТЫ' : 'CONTACTS'}
                    </BurgerItemTitle>
                </BurgerItem>
            </BurgerMenu>
        </Wrapper>
    );
};

export default Burger;