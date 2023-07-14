import React, { Fragment } from "react";
import classes from "./Header.module.css";
import mealPhoto from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Anyi's Kitchen</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealPhoto} alt="mealPhoto" />
      </div>
    </Fragment>
  );
};

export default Header;
