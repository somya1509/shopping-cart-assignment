import React from "react";
import "./Footer.scss";

export default function Footer() {
  return (
    <>
      <footer>
        Copyright &copy; {new Date().getFullYear()} Sabka Bazaar Grocery
        Supplies Pvt. Ltd.
      </footer>
    </>
  );
}