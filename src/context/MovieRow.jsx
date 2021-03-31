import React,{useContext} from 'react';
import UserContext from './userContext';
import CartContext from './cartContext';
function MovieRow(props){
    const userContext =useContext(UserContext)
    const CartContext =useContext(CartContext)
    console.log("Cart context",CartContext)
    return(
        <div>
           MovieRow {userContext.currentUser?userContext.currentUser.name:""}
        </div>
    )
}
export default MovieRow;