import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../../redux";
import "./Sidebar.scss";

export default function SideBar() {
  const [optionText, setOptionText] = useState("Choose an Option");
  const [showSideBar, setShowSideBar] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories);

  const updateMedia = () => {
    if (window.innerWidth < 600) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  const fetchProductsHandler = (e) => {
    dispatch(fetchProduct(e.target.id));
   
    setShowSideBar(false);
    setOptionText(e.target.innerText);
  };

  const setShowBarHandler = (e) => {
    setShowSideBar(!showSideBar);
  };

  return isMobile ? (
    <div className="sidenav-container">
      <div className="icon-dropdown" onClick={setShowBarHandler}>
        <h3>{optionText}</h3>
        <i className="fas fa-chevron-down"></i>
      </div>
      <div className="sidebar-list">
        {showSideBar &&
          categories.length > 0 &&
          categories.map((category) => (
            <div className="sidenav" key={category.id}>
              <div className="category-name">
                <h4 id={category.id} onClick={(e) => fetchProductsHandler(e)}>
                  {category.name}
                </h4>
              </div>
            </div>
          ))}
      </div>
    </div>
  ) : (
    <div className="sidenav-container">
      {categories.length > 0 &&
        categories.map((category) => (
          <div className="sidenav" key={category.id}>
            <div className="category-name">
              <h4 id={category.id} onClick={(e) => fetchProductsHandler(e)}>
                {category.name}
              </h4>
            </div>
          </div>
        ))}
    </div>
  );
}
