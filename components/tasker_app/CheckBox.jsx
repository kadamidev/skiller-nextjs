import React, { useState } from 'react';
import Image from 'next/image'

const CheckBox = (props) => {
    const [checked, setChecked] = useState(props.checked)



    const handleClick = () => {
        setChecked(!checked)
    }
    
    return (
        <>
        { checked ?
        <Image src='/img/app/checked.svg' width={16} height={16} onClick={handleClick} />
        :
        <Image src='/img/app/unchecked.svg' width={16} height={16} onClick={handleClick} />
        }
        </>
    );
}

export default CheckBox;
