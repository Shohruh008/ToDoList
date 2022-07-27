import React from 'react'

export default function (props) {
    console.log(props.addProduct)
    return (
        <>
            <button {...props} >Mahsulot qo'shish</button></>
    )
}
