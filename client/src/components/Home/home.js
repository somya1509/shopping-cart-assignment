import React, { useEffect } from "react";
import { fetchBanner, fetchCategories } from "../../redux";
import { useDispatch, useSelector } from "react-redux";
import CategoryCard from "../Cards/CategoryCard";
import "./Home.scss";
// import Cart from "../components/Cart";
// import Carousel from "../Carousel/Carousel";
// import Category from "../Category/Category";

export default function Home() {
  const cart = useSelector((state) => state.cart);
  const categories = useSelector((state) => state.categories.categories);

  // const load = useSelector(loaded);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchBanner());
  }, [dispatch]);

  return (
    <>
      <div className="movie-card-container">
        {/* <Carousel /> */}
        <div>
          {categories.length > 0 &&
            categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
        </div>
      </div>
    </>
  );
}
