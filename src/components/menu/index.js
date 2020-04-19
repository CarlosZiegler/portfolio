import React from 'react'

import logo from '../../assets/logoZiegler.svg'
import iconMenu from '../../assets/menu.png'

import { Div, Img } from './style'

export default function Menu() {
    return (
        <Div>
            <Img src={logo} alt={"Ziegler"} />
            <a href={"/"}>
                <img src={iconMenu} alt={"Menu"} />
            </a>
        </Div>
    )
}
