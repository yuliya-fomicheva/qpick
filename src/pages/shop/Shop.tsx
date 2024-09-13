import {useState }from "react"
import style from "./Shop.module.css"
import { IAsset } from "../../types/types"
import AirPods3 from "../../img/png/Apple AirPods 3.png"
import AirPods2 from "../../img/png/Apple EarPods 2.png"
import AirPods from "../../img/png/Apple EarPods.png"
import AppleBYZS852I from "../../img/png/Apple BYZ S852I.png"
import BoroFhone from "../../img/png/BOROFONE BO4.png"
import GERLAXGh04 from "../../img/png/GERLAX GH-04.png"
import { useTranslation } from "react-i18next"
import Card from "../../components/card/Card"
import List from "../../components/List/List"

const Shop = () => {

const [headphones, setHeadphones] = useState<IAsset[]>([
        {
            id:1,
            img: AppleBYZS852I,
            title: "Apple BYZ S852I",
            price: 2927,
            rate: 4.7,
            undiscounted: 3927,
        },
        {
            id:2,
            img: AirPods,
            title: "Apple AirPods",
            price: 2327,
            rate: 4.5,
        },
        {
            id:3,
            img: AirPods2,
            title: "Apple AirPods",
            price: 2327,
            rate: 4.5,
        },  
        {
            id:4,
            img: AppleBYZS852I,
            title: "Apple BYZ S852I",
            price: 2927,
            rate: 4.7,
        },
        {
            id:5,
            img: AirPods,
            title: "Apple AirPods",
            price: 2327,
            rate: 4.5,
        },
        {
            id:6,
            img: AirPods2,
            title: "Apple AirPods",
            price: 2327,
            rate: 4.5,
        },  
        
]);

const [wirelessHeadphones, setWirelessHeadphones] = useState<IAsset[]>([
    {
        id:7,
        img: AirPods3,
        title: "Apple AirPods",
        price: 9527,
        rate: 4.7,
    },
    {
        id:8,
        img: GERLAXGh04,
        title: "GERLAX GH-04",
        price: 6527,
        rate: 4.5,
    },
    {
        id:9,
        img: BoroFhone,
        title: "BOROFONE BO4",
        price: 7527,
        rate: 4.5,
    },    
    
]);

const { t } = useTranslation();



    return (
        <main className={style.main}>
            <div className={style.main__wrapper}>
                <h1 className="visually-hidden"> Главная Qpick</h1>
                
                <section>
                    <h2 className={style.shop__title}>{t("headphones")}</h2>
                    <div className={style.shop__wrapper}>
                        <List items={headphones} renderItem={(asset:  IAsset) => 
                            <Card key={asset.id} asset={asset}/>} />
                    </div>
                    

                </section>
                
                <section>
                    <h2 className={style.shop__title}>{t("wireless-headphones")}</h2>
                    <div className={style.shop__wrapper}>
                        <List items={wirelessHeadphones} renderItem={(asset:  IAsset) => 
                            <Card key={asset.id} asset={asset}/>} />
                    </div>
                    
                </section>
                </div>

        </main>
    )
}

export default Shop ;