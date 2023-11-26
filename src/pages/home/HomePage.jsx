import React, { useContext, useState } from 'react';
import { PagesContext } from '../../components/context/context';
import Title from '../../components/title/Title';
import { AgeModal, AgeModalWrapper, DescTitle, ModalBtn, ModalDesc, Wrapper } from './styled';

const HomePage = () => {
    const {testAgeModal, setTestAgeModal, rus, setShowBurger} = useContext(PagesContext)
    const [minorsModal, setMinorsModal] = useState(false)

    const startSettimeout = () => {
        setShowBurger(true)
    }

    const forMinors = () => {
        setMinorsModal(true)
    }

    return (
        <>
        {testAgeModal
        ?
        <AgeModalWrapper>
            {minorsModal
            ?
            <AgeModal>
                <ModalDesc rus={rus}>
                    {rus
                    ?
                    'К сожалению Вам недоступен контент. Будем рады видеть Вас на сайте после Вашего совершеннолетия!'
                    :
                    'Unfortunately, the content is not available to you. We will be glad to see you on the site after your coming of age!'
                    }
                </ModalDesc>
            </AgeModal>
            :
            <AgeModal>
                <ModalDesc rus={rus}>
                    <DescTitle rus={rus}>
                        {rus ? 'ПРЕДУПРЕЖДЕНИЕ О СОДЕРЖАНИИ' : 'CONTENT WARNING'}
                    </DescTitle>
                        <br/>
                        <br/>
                        <br/>
                        {rus
                        ?
                        'Материалы этого сайта не предназначены для лиц моложе 18 лет. Пожалуйста, подтвердите своё совершеннолетие.'
                        :
                        'The materials on this site are not intended for persons under the age of 18. Please confirm your legal age.'
                        }
                            
                </ModalDesc>
                <ModalBtn rus={rus} onClick={() => forMinors()}>
                    {rus ? 'Нет, мне нет 18 лет' : "No, I'm not 18 years old"}
                </ModalBtn>
                <ModalBtn rus={rus} onClick={() => {setTestAgeModal(false); startSettimeout()}}>
                    {rus ? 'Да, мне есть 18 лет' : 'Yes, I am 18 years old'}
                </ModalBtn>
            </AgeModal>
            }
            
        </AgeModalWrapper>
        :
        <Wrapper>
            <Title />
        </Wrapper>
         }
        
        </>
    );
};

export default HomePage;