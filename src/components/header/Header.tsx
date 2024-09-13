import React, { FC, useContext } from 'react';
import style from "./Header-style.module.css"
import { Link } from 'react-router-dom';
import { useBasketContext } from '../../context';
import Sprites from "../../img/svg/Sprites.svg"


const Header:FC = () => {
    
    let rootClasses = [style.indicatorCount,"visually-hidden"]

    const { assetQuantity } = useBasketContext(); 
    if (assetQuantity > 0) {
        rootClasses = rootClasses.filter((className) => className !== "visually-hidden");
    } else {
        rootClasses.push('visually-hidden')
    }

    
    return (
        <header className={style.header}>
            <div className={style.header__wrapper}>

                <Link to="/" className={style.header__logo}>
                     <svg className={style.logo} viewBox="0 0 85 30" width="85" height="30">
                        <use href={`${Sprites}#logo`}></use>
                    </svg>
                    
                </Link>

                <nav>
                    <ul className={style.nav__list}> 
                        <li className={style.nav__item}>
                            <Link to='/favorite'>
                                <p className="visually-hidden">Избранное</p>
                                <svg className={style.nav__icon} width="22" height="20">
                                    <use href={`${Sprites}#favorite`}></use>
                                </svg>
                                <div className={style.indicatorCount}>2</div>
                            </Link>
                        </li>

                        <li className={style.nav__item}>
                            <p className="visually-hidden">Корзина</p>
                            <Link to='/basket'>
                                <p className="visually-hidden">Корзина</p>
                                <svg className={style.nav__icon} width="24" height="24">
                                        <use href={`${Sprites}#basket`}></use>
                                </svg>
                                <div className={rootClasses.join(' ')}>{assetQuantity}</div>
                            </Link>
                        </li>
                    </ul>
                </nav>

            </div>
        </header>
    )
}

export default Header; 