import { FC, useContext } from "react";
import { IAsset } from "../../types/types";
import style from "./BasketCard.module.css"
import { useBasketContext } from "../../context";
import Sprites from "../../img/svg/Sprites.svg"

interface ICardProps {
    asset: IAsset;
    count: number;
}

const BasketCard:FC<ICardProps>= ({asset, count}) => {

    const { 
        increaseAssetQuantity,
        decreaseAssetQuantity,
        removeFromBasket, 
        getAssetPrise,} = useBasketContext(); 

    


    return (
        <div className={style.card}>
            <div className={style.card__wrapper}>
                <div className={style.card__img}>
                    <img src={asset.img}  width="146px"/>
                </div>

                <div className={style.card__buttonGroup}>
                    <button type="button" className={style.card__buttonCount}
                    onClick={() => decreaseAssetQuantity(asset)}>
                        <svg className={style.button__icon} width="30" height="30">
                            <use href={`${Sprites}#minus`}></use>
                        </svg>
                    </button>
                    <span className={style.card__count}>{count}</span>
                    <button type="button" className={style.card__buttonCount}
                     onClick={() => increaseAssetQuantity(asset)}>
                        <svg className={style.button__icon} width="30" height="30">
                            <use href={`${Sprites}#plus`}></use>
                        </svg>
                    </button>
                </div>
            </div>

            <div className={[style.card__wrapper, style.card__wrapper_center].join(' ')}>
                <h3 className={style.card__title}>{asset.title}</h3>
                <p className={style.card__price}>{asset.price} ₽</p>
            </div>

            <div className={[style.card__wrapper, style.card__wrapper_end].join(' ')}>
                <button type="button" className={style.card__buttonDelete}
                onClick={() => removeFromBasket(asset.id)}>
                    <span className="visually-hidden">Удалить</span>
                    <svg className={style.buttonDelete__icon} width="21" height="17">
                        <use href={`${Sprites}#delete`}></use>
                    </svg>
                </button>
                <p className={[style.card__price, style.card__price_generalPrice].join(' ')}>{getAssetPrise(asset)} ₽</p>

            </div>


        </div>
    )
        
}

export default BasketCard;

