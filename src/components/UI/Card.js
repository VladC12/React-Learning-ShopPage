import classes from './Card.module.css';

const Card = props =>{
    return <div className={classes.card}>{props.children}</div>
    // props.children props is how we pass data from component A to component B and it can further pass it on. We pass data from a component to a direct child component
    // .children is needed instead of something like props.name because on custom components it won't work only for built-in html elements.
    // children is a reserved name that is not set by us. It will always be the content of the opening and closing tags of the custom component
};

export default Card;