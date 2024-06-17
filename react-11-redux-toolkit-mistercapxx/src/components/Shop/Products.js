import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
////Отображает список товаров, используя компонент ProductItem и передавая параметры каждого товара как свойства.
const Products = () => {
  ////передаем параметры в ProductItem
  ////Эти параметры становятся доступными в ProductItem через props
  return (
    <section className={classes.products}>
      
      <h2>Buy your favorite products</h2>
      <ul>
      
        <ProductItem
          id={1}
          title="Book"
          price={7}
          description="Choose this book!"
        />
        <ProductItem
          id={2}
          title="Toy"
          price={100}
          description="Nice toy for a dog!"
        />
      </ul>
    </section>
  );
};

export default Products;
