import React from 'react'

const CustomInput = (props) => {
    const {type, name, placeholder,classname}=props;
    return (
        <div className='mt-2'>
            <
            input type={type} 
            name={name} 
            placeholder={placeholder} 
            className={`form-control ${classname}`} 
            />
        </div>
    )
}

export default CustomInput