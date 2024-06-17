import classes from './CartButton.module.css';
import { useDispatch,useSelector } from 'react-redux';
import { uiActions } from '../../store/ui_slice.js'; 

const CartButton = (props) => {

  const dispatch = useDispatch();
////Кнопка в CartButton.js диспатчит действие toggle из uiActions (ui_slice.js).///
  const togglerHugger = () => {
    dispatch(uiActions.toggle());
  };
///Обновление счетчика на значке корзины
  const totalQuantity = useSelector(state => state.cart.totalQuantity);

  return (
    <button className={classes.button} onClick={togglerHugger}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>  
    </button>
  );
};

export default CartButton;
