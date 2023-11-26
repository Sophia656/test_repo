import React, { useEffect, useState } from 'react';
import { Line, TitleItem, TitleWrapper } from './styled';

const Title = ({cursor}) => {
    const [title, setTitle] = useState([])
    const [surname, setSurname] = useState(true)
    const [showname, setShowname] = useState(false)

    useEffect(() => {
        const arr = [...'sophiantropova']
        const result = []
        setTimeout(() => {
            setSurname(false)
            setShowname(true)
            for (let i = 0; i < arr.length; i++) {
                setTimeout(() => {
                    if (i === 5) {
                        result.push({let: arr[i], color: '#ba3100', back: false})
                    } else {
                        result.push({let: arr[i], color: '#020202', back: false})
                    }
                    setTitle([...result])
                }, 300 * (i + 1));
            }
        }, 2000);
        setTimeout(() => {
            setSurname(true)
            setTimeout(() => {
                setSurname(false)
            }, 3000);
        }, 7000);
    }, [])

    return (
        <TitleWrapper cursor={cursor}>
            {showname &&
                title.map((i, index) => 
                    <TitleItem key={index} back={i.back} color={i.color}>{i.let}</TitleItem>
                )
            }
                <Line secframe={surname} />
        </TitleWrapper>
    );
};

export default Title;