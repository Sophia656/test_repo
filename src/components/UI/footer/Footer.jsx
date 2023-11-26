import React, { useState } from 'react';
import { Copyright, DoubleLetter, SocialIcons, SocialIconsImg, SocialIconsItem, SocialIconsLink, Wrapper } from './styled';
import instagram from '../../assets/instagram.png';
import email from '../../assets/email.png';
import telegram from '../../assets/telegram.png';
import instagram_b from '../../assets/instagram_b.png';
import email_b from '../../assets/email_b.png';
import telegram_b from '../../assets/telegram_b.png';


const Footer = () => {
    const [touchInstagram, setTouchInstagram] = useState(false)
    const [touchTelegram, setTouchTelegram] = useState(false)
    const [touchEmail, setTouchEmail] = useState(false)

    return (
        <Wrapper>
            <SocialIcons>
                <SocialIconsItem>
                    <SocialIconsLink href="https://instagram.com/antropova_sophia?igshid=NDk5N2NlZjQ=">
                        <SocialIconsImg 
                        onMouseEnter={() => setTouchInstagram(true)} 
                        onMouseOut={() => setTouchInstagram(false)}
                        src={touchInstagram ? instagram : instagram_b} alt="" />
                    </SocialIconsLink>
                </SocialIconsItem>
                <SocialIconsItem>
                    <SocialIconsLink href="https://t.me/sophia_antropova">
                        <SocialIconsImg 
                        onMouseEnter={() => setTouchTelegram(true)} 
                        onMouseOut={() => setTouchTelegram(false)}
                        src={touchTelegram ? telegram : telegram_b} alt="" />
                    </SocialIconsLink>
                </SocialIconsItem>
                <SocialIconsItem>
                    <SocialIconsLink href="mailto:antropovasophia@gmail.com">
                        <SocialIconsImg 
                        onMouseEnter={() => setTouchEmail(true)} 
                        onMouseOut={() => setTouchEmail(false)}
                        src={touchEmail ? email : email_b} alt="" />
                    </SocialIconsLink>
                </SocialIconsItem>
            </SocialIcons>
            <Copyright>
            sophi<DoubleLetter>a</DoubleLetter>ntropova | photography & experience | 2019-2023
            </Copyright>
        </Wrapper>
    );
};

export default Footer;

