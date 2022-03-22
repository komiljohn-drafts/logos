import ProductCard from "../ProductCard";
import cls from "./Category.module.scss";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

function Category({ products }) {
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    centerPadding: "80px",
    slidesToScroll: 1,
    centerMode: true,
    className: cls.slider,
  };

  return (
    <div className={cls.category}>
      <div className={cls.wrapper}>
        <h2 className={cls.title}>{products.title}</h2>
      </div>
      <Slider {...settings}>
        {products.data.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Slider>
    </div>
  );
}

export default Category;
