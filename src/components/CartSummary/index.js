// Write your code here
import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let amount = 0
      cartList.forEach(eachItem => {
        amount += eachItem.price * eachItem.quantity
      })
      return (
        <div className="cart-summary-container">
          <h1 className="amount-para">
            Order Total:<span className="amount-span"> Rs {amount}/-</span>
          </h1>
          <p className="items-cart">{cartList.length} items in cart</p>
          <button className="checkout-button">Checkout</button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
