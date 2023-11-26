import React from 'react';
import { Avatar, DescContent, DescContentText, Description, DescTitle, DescWrap, MailLink, TelegramLink, Wrapper } from './styled';
import avatar from '../../img/web/000.jpg';
import { useState } from 'react';
import Copyright from '../../components/UI/copyright/Copyright';
import { useContext } from 'react';
import { PagesContext } from '../../components/context/context';
import Footer from '../../components/UI/footer/Footer';

const ContactsPage = () => {
    const {rus} = useContext(PagesContext)
    const [showCr, setShowCr] = useState(false)
    const onHandleRightClick = (event) => {
        event.preventDefault()
        setShowCr(true)
        setTimeout(() => {
            setShowCr(false)
        }, 1500);
    }

    const [mailLinkActive, setMailLinkActive] = useState(false)
    const [telegramLinkActive, setTelegramLinkActive] = useState(false)

    return (
        <Wrapper>
            <DescWrap>
                {showCr && <Copyright />}
                <Avatar onContextMenu={onHandleRightClick} src={avatar} alt="" />
                <Description>
                    <DescContent rus={rus}>
                        <DescContentText>{rus
                        ?
                        'София Антропова – фотограф, визуальный исследователь, работающая в жанре психологического портрета, нередко для которого формой выражения выступает ню фотография. Она живет и работает в России, Москве.'
                        :
                        'Sophia Antropova is a photographer and visual researcher working in the genre of psychological portrait. For her nude photography often acts as a form of self-expression. She lives and works in Moscow, Russia.'
                        }</DescContentText>
                    </DescContent>
                    <DescTitle rus={rus}>{rus ? 'КОНТАКТЫ' : 'CONTACTS'}</DescTitle>
                    <DescContent rus={rus}>
                        <DescContentText>{rus
                        ?
                        'По всем вопросам и заказам съемок:'
                        :
                        'For all the inquiries and booking please contact:'
                        }</DescContentText>
                        <DescContentText>
                            <MailLink 
                            active={mailLinkActive}
                            onMouseEnter={() => setMailLinkActive(true)} 
                            onMouseLeave={() => setMailLinkActive(false)} 
                            rus={rus} 
                            href="mailto:antropovasophia@gmail.com"
                            >antropovasophia@gmail.com</MailLink>
                        </DescContentText>
                        <DescContentText>{rus ? 'или' : 'or'}</DescContentText>
                        <DescContentText>
                        {rus ? 'телеграм:' : 'telegram:' }
                            <TelegramLink 
                            active={telegramLinkActive}
                            onMouseEnter={() => setTelegramLinkActive(true)} 
                            onMouseLeave={() => setTelegramLinkActive(false)} 
                            rus={rus} 
                            href="https://t.me/sophia_antropova"
                            > @antropovasophia</TelegramLink>
                        </DescContentText>
                    </DescContent>
                </Description>
            </DescWrap>
            <Footer />
        </Wrapper>
    );
};

export default ContactsPage;