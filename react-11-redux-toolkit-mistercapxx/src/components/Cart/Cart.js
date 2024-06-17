import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
///
import { useSelector } from 'react-redux';

const Cart = (props) => {
  ///useSelector из react-redux для получения состояния cartIsVisible из Redux.
  const cartIsVisible = useSelector(state => state.ui.cartIsVisible);

  ///достали массив items из slice cart и разбираем на параметры
  ////получаем список товаров из состояния 
  const cartItems = useSelector(state => state.cart.items);

  ////Когда пользователь нажимает кнопку My Cart, вызывается toggleHugger, который диспатчит действие toggle.
  ///Действие toggle переключает состояние cartIsVisible в Redux.
  ////Компонент Cart отслеживает это состояние и обновляет видимость корзины.
  if (!cartIsVisible) {
    return null;
  }

  if (cartItems.length === 0) {
    return (
      <Card className={classes.cart}>
        <h2>Your Shopping Cart</h2>
        <p>Your cart is empty.</p>
      </Card>
    );
  }

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map(item => (
          <CartItem key={item.id}
          item={{ id: item.id, title: item.title, quantity: item.quantity, total: item.total, price: item.price,
           }}
        />
        ))}
      
      </ul>
    </Card>
  );
};

export default Cart;
