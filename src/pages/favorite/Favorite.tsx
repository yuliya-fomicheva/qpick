import { useTranslation } from "react-i18next";
import style from "./Favorite.module.css"

const Favorite = () => {
    const { t } = useTranslation();
    return (
        <main>
            <h1 className={style.favorite__title}>{t("favourite")}</h1>

        </main>
    )
}

export default Favorite; 