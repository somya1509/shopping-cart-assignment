import { combineReducers } from "redux";
import bannerReducer from "./banner/bannerReducer";
import cartReducer from "./cart/cartReducer";
import categoriesReducer from "./categories/categoriesReducer";
import productReducer from "./products/productsReducer";
import userReducer from "./user/userReducer";

const rootReducer = combineReducers({
    banner: bannerReducer,
    categories: categoriesReducer,
    product: productReducer,
    cart: cartReducer,
    user:userReducer
})

export default rootReducer