import { useTranslation } from "react-i18next";
import BasketCard from "../../components/basketCard/BasketCard";
import {useBasketContext } from "../../context";
import style from "./Basket.module.css"
import List from "../../components/List/List";
import { IAssetByBasket } from "../../types/types";


const Basket = () => {
    const { t } = useTranslation();

    const { totalPrise, assetBasket } = useBasketContext(); 
    return (
        <main>
            <h1 className={style.basket__title}>{t("basket")}</h1>
            <div className={style.basket__wrapper}>
                <div className={style.basket__listWrapper}>
                    <List items={assetBasket} renderItem={(asset:  IAssetByBasket) => 
                        <BasketCard key={asset.asset.id} asset={asset.asset} count={asset.count}/>} />
                </div>

                <div className={style.basket__total}>
                    <div className={style.basket__totalWrapper}>
                        <h2 className={style.basket__totalTitel}>{t("total")}</h2>
                        <p className={style.basket__totalPrise}>₽ {totalPrise}</p>
                    </div>
                    <button className={style.basket__button}>{t("go-to-the-registration")}</button>

                </div>
                
            </div>
          

        </main>
    )
}

export default Basket; 