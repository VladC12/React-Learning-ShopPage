import { Fragment } from "react";

import HeaderCartButton from "./HeaderCartButton";
import coffeeImage from '../../assets/coffee.jpg';
import classes from './Header.module.css'

const Header = props /* "Props"(properties) is used for passing data. Components can't just use data stored in other components. */=> {
    return <Fragment /* Wrapper component to avoid "div soup". It's an empty wrapper component: It doesn't render any real HTML element to the DOM. But it fulfills react's/ JSX' requirement. Mostly when you want to return something but you can only have only one root component so you wrap them in Fragment.*/>
        <header className={classes.header}>
            <h1>Totally Real Coffee Shop</h1>
            <HeaderCartButton onClick={props.onShowCart} /* In the header component in App.js we receieve onShowCart and we use it via props. */ /> 
        </header>
        <div className={classes['main-image']}/* Since it has a "-" we have to write it like that */> 
            <img src={coffeeImage} alt="Banner with coffee."/>
        </div>
    </Fragment>
};

export default Header;