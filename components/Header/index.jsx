import cls from "./Header.module.scss";
import { LogoSvg, PhoneSvg } from "../../utils/svgs";
import Link from "next/link";
import Button from "../Button";
import Container from "../Container";
import SearchInput from "../SearchInput";

function Header() {
  console.log(LogoSvg);
  return (
    <header className={cls.header}>
      <div className={cls.wrapper}>
        <div className={cls.left}>
          <div className={cls.logo}>
            <LogoSvg />
          </div>
          <SearchInput />
        </div>
        <div className={cls.right}>
          <div className={cls.contacts}>
            <div className={cls.icon}>
              <PhoneSvg />
            </div>
            <div className={cls.content}>
              <p>Контакты:</p>
              <a href="tel:+7-917-510-57-59">+7 (917) 510-57-59</a>
            </div>
          </div>
          <Button count={4}>Корзина</Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
