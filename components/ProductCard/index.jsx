import Image from "next/image";
import cls from "./ProductCard.module.scss";
import Button from "../Button";
import { BasketSvg } from "../../utils/svgs";

function ProductCard({ product }) {
  return (
    // <div className={cls.product}>
    <div className={cls.card}>
      <div className={cls.image}>
        <img src={`/images/${product.image}`} alt="product" />
      </div>
      <div className={cls.content}>
        <div className={cls.title}>
          <h4>{product.title}</h4>
          <span>{product.weight}</span>
        </div>
        <div className={cls.description}>{product.description}</div>
        <div className={cls.action}>
          <span className={cls.price}>{product.price}</span>
          <Button iconRight={<BasketSvg />} padding="10px 16px 10px 19px">
            В корзину
          </Button>
        </div>
      </div>
    </div>
    // </div>
  );
}

export default ProductCard;
