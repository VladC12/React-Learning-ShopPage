import CartContext from './cart-context';

const CartProvider = props => {
    const addItemToCartHandler = item => {};
    
    const removeItemFromCartHandler = id => {};

    const cartContext = {
        items: [],
        totalAmount: 0,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    };

    //? Where is the .Provider from? is it by default from context?
    return <CartContext.Provider value = {cartContext}>
        {props.children}
    </CartContext.Provider>
};

export default CartProvider;