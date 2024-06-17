import classes from './CartItem.module.css';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart_slice';

const CartItem = (props) => {
  ///item был создан в Cart
  ///Деструктуризация item: Внутри CartItem параметры item извлекаются через деструктуризацию:

///мы получали обьект из состояния. Поэтому сначала соберем обьект, а потом достанем из него параметры
  const { title, quantity, price,id } = props.item;
  const dispatch = useDispatch();


  ///вычисляем общую сумму если будем кликать Add To Cart цена будет увеличиваться за один и тот же товар если его много
  const totalPrice = quantity * price; 

  const AdderHugler = () => {
    ////При добавлении товара в корзину вы передаете id, title, и price:
    dispatch(cartActions.addItemToCart({
        id,
        title,
        totalPrice,
        price

    }))
  }
  const RemoverHugler = () => {
    dispatch(cartActions.decreaseItem(id))
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${totalPrice.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={RemoverHugler}>-</button>
          <button onClick={AdderHugler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
