import { FC} from "react";
import { IAsset } from "../../types/types";
import style from "./Card.module.css"
import { useBasketContext } from "../../context";
import Sprites from "../../img/svg/Sprites.svg"
import { useTranslation } from "react-i18next";

interface ICardProps {
    asset: IAsset;

}  



const Card:FC<ICardProps>= ({asset}) => {
    const { t } = useTranslation();

    const { increaseAssetQuantity } = useBasketContext(); 
    let  undiscounted: string ="";

    if ( asset.hasOwnProperty("undiscounted")) {
         undiscounted = style.undiscounted;
    } else {
         undiscounted  = style.undiscounted__none;
    }

    return (
        <div className={style.card}>
  
            <div className={style.card__img}>
                <img src={asset.img}  width="220px"/>
            </div>
            <div className={style.card__wrapper}>
                <h3 className={style.card__title}>{asset.title}</h3>
                <div className={style.card__priceWrapper}>
                    <p className={style.card__price}>{asset.price} ₽</p>
                    <span className={undiscounted}>{asset.undiscounted} ₽</span>
                </div>
                
            </div>
            <div className={style.card__wrapper}>
                <div className={style.card__rate}>
                    <svg  width="25" height="23">
                        <use href={`${Sprites}#rate`}></use>
                    </svg>
                    <span className={style.rate__text}>{asset.rate}</span>
                </div>
                <button 
                    className={style.card__button} 
                    type="button"
                     onClick={() => { increaseAssetQuantity(asset);}}
                >{t("buy")}
                    </button>
            </div>


        </div>
    )
        
}

export default Card;