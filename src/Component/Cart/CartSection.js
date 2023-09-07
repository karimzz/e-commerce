import React from 'react'
import { useSelector  , useDispatch} from 'react-redux';
import { removeProduct , increaseProduct , decreaseProduct } from '../../RTK/Slice/cartSlice';

const CartSection = () => {


    // For Make Action
    const dispatch = useDispatch(); 

    // For Access Global State
    const { products} = useSelector(state=>state.cartSlice) ; 

    // For Remove Product From Cart
    const removeProductHandler = (id)=>{
        dispatch(removeProduct(id)) ; 
    }

    // For Decrease Product Form Cart
    const decreaseProductHandler = (ID)=>{
        dispatch(decreaseProduct(ID)) ; 
    }


    // For Increase Product 
    const increaseProductHandler = (ID)=>{
        dispatch(increaseProduct(ID)) ; 
    }


  return (
    <div className='cart-section'>
        <div className='container'>
            <div className='titles'>
                <h4>Images</h4>
                <h4>Product</h4>
                <h4>Price</h4>
                <h4>Quantity</h4>
                <h4>Total</h4>
                <h4>Remove</h4>
            </div>


            {
                products.lenght === 0 ? (<h2>No Product Yet</h2>) :(
                    products.map((item , idx)=>{
                        return (
                            <div className='slice' key={idx}>
                            <div className='image'>
                                <img src={item.img} alt='phot' loading='lazy' />
                            </div>
                            <h3 className ="product-name" >{item.title}</h3>
                            <p>$ {item.price}</p>
                            <div className='qun-container'>
                                <span className='plus' onClick = {()=>increaseProductHandler(item.id)}> + </span>
                                <span className='num-pro'>{item.qun}</span>
                                <span className='minus' onClick = {()=>decreaseProductHandler(item.id)}> - </span>
                            </div>
                            <div className='pro-total'> $ {item.qun * item.price}</div>
                            <div className='remove-pro' onClick={()=>removeProductHandler(item.id)}>
                                <span >X</span>
                            </div>
                        </div>
                        )
                    })
                )
            }
            




        </div>
    </div>
  )
}

export default CartSection
