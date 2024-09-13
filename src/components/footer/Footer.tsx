import React, { useState } from 'react';
import style from "./Footer.module.css"
import { Link } from 'react-router-dom';
import Sprites from "../../img/svg/Sprites.svg"
import { useTranslation } from 'react-i18next';


const Footer = () => {
    const { t, i18n } = useTranslation();

    const [language, setLanguage] = useState('ru');
    

    const onClickLanguageChange = (e:any) => {
        const language = e.target.value;
        i18n.changeLanguage(language); 
        setLanguage(language);}

                        

    return (
        <footer className={style.footer}>
          <div className={style.footer__wrapper}>
            <Link to="/" className={style.footer__logoWrapper}>
                <svg className={style.logo} width="85" height="30">
                    <use href={`${Sprites}#logo`}></use>
                </svg>
            </Link>

            <nav className={style.footer__nav}>
                <ul className={style.nav__list}>
                <li className={style.nav__item}>
                    <Link to="/favorite">{t("favourite")}</Link>
                </li>
                <li className={style.nav__item}>
                    <Link to="/basket">{t("basket")}</Link>
                </li>
                <li className={style.nav__item}>
                    <a  href='https://www.neoflex.ru/contacts'
                        target="_blank">
                    {t("contacts")}</a>
                </li>
                </ul>
            </nav>

            <section className={style.options}>
                <ul  className={style.options__list}>
                    <li className={style.options__item}>
                        <a>{t("terms-of-service")}</a>
                    </li>
                </ul>
                <form className={style.language}>
                    <div>
                        <svg className={style.logo} width="20" height="20">
                            <use href={`${Sprites}#language`}></use>
                        </svg>
                    </div>
                    <legend className='visually-hidden '>Сменить язык</legend>

                    <div className={style.radio}>
                        <input  className='visually-hidden ' type="radio" id="kz" name="language" value="kz"
                        checked={language == 'kz' ? true : false}
                        onChange={onClickLanguageChange}/>
                        
                        <label className={style.language__label} htmlFor="kz">Каз</label>
                    </div>

                    <div className={style.radio}>
                        <input className='visually-hidden' type="radio" id="ru" name="language" value="ru"  
                        checked={language == 'ru' ? true : false}
                        onChange={onClickLanguageChange}/>
                        <label className={style.language__label} htmlFor="ru">Рус</label>
                    </div>

                    <div>
                        <input className='visually-hidden' type="radio" id="en" name="language" value="en" checked={language == 'en' ? true : false} onChange={onClickLanguageChange}/>
                        <label className={style.language__label} htmlFor="en">Eng</label>
                    </div>

                </form>
                  {/* <button className={style.language__label} onClick={() => onClickLanguageChange('en') }>English</button>
                  <button className={style.language__label}  onClick={() => onClickLanguageChange('ru') }>Русский</button> */}

            </section>

            <section className={style.contacts}>
                <ul className={style.contacts__list}>
                    <li className={style.contacts__item}>
                        <svg className={style.contacts__socialButton} width="31" height="21">
                            <use href={`${Sprites}#vk`}></use>
                        </svg>
                    </li>
                    <li className={style.contacts__item}>
                        <svg className={style.contacts__socialButton} width="31" height="31">
                            <use href={`${Sprites}#telegram`}></use>
                        </svg>
                    </li>
                    <li className={style.contacts__item}>
                        <svg className={style.contacts__socialButton} width="31" height="31">
                            <use href={`${Sprites}#whatsapp`}></use>
                        </svg>
                    </li>
                </ul>
            </section>

          </div>
        </footer>
    )
}

export default Footer;