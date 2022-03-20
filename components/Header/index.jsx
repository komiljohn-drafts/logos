import cls from "./Header.module.scss";
import { LogoSvg } from "../../utils/svgs";
import Link from "next/link";
import Button from "../Button";
import Container from "../Container";
import Menu from "../Menu";

function Header() {
  console.log(LogoSvg);
  return (
    <header className={cls.header}>
      <Container>
        <div className={cls.head}>
          <Link href="/">
            <LogoSvg />
          </Link>
          <div className={cls.delivery}>
            <div className={cls.delivery__head}>
              <span>Доставка пасты</span>
              <span className={cls.place}>Москва</span>
            </div>
            <div className={cls.delivery__foot}>
              <span className={cls.time}>Время доставки</span>
              <span>от 31 мин</span>
            </div>
          </div>
          <div className={cls.action}>
            <div className={cls.order__btn}>
              <Button shape="secondary">Заказать звонок</Button>
            </div>
            <a href="tel:8-800-333-36-62">8 800 333-36-62</a>
          </div>
        </div>
        <div className={cls.foot}>
          <Menu />
        </div>
      </Container>
    </header>
  );
}

export default Header;
