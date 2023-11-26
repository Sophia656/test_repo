import React from 'react';
import { Btn } from './styled';
import { useContext } from 'react';
import { PagesContext } from '../../context/context';

const LangBtn = () => {
    const {rus, setRus} = useContext(PagesContext)

    const changeLang = () => {
        setRus(!rus)
    }
    return (
        <Btn onClick={() => changeLang()}>
            <div>{rus ? 'en' : 'ru'}</div>
        </Btn>
    );
};

export default LangBtn;