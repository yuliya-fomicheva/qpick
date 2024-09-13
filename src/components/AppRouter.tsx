import { Route, Routes } from "react-router-dom";
import Basket from "../pages/basket/Basket";
import Shop from "../pages/shop/Shop";
import Favorite from "../pages/favorite/Favorite";

const AppRouter = () => {


    return (
        <Routes>
            <Route path="/basket" element={<Basket/>}/>
            <Route path="/favorite" element={<Favorite/>}/>
            <Route path="/" element={<Shop/>}/>
            <Route path="*" element={<main>NotFound</main>}/>
        </Routes>   

       
    )
}

export default AppRouter;