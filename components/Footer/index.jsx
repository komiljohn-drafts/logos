import cls from "./Footer.module.scss";
import { ArrowUpSvg, LogoSvg } from "../../utils/svgs";

function Footer() {
  return (
    <footer className={cls.footer}>
      <div className={cls.wrapper}>
        <div className={cls.up}>
          <ArrowUpSvg />
        </div>
        <div className={cls.info}>
          <LogoSvg />
          <div className={cls.privacy}>
            <p>© ООО СК «АПШЕРОН»</p>
            <p>Все права защищены. 2010-2022</p>
          </div>
          <ul className={cls.links}>
            <li>
              <a href="#">Пользовательское соглашение</a>
            </li>
            <li>
              <a href="#">Политика конфиденциальности</a>
            </li>
            <li>
              <a href="#">Карта сайта</a>
            </li>
          </ul>
        </div>
        <nav className={cls.nav}>
          <ul>
            <li>
              <a href="#">О ресторане</a>
            </li>
            <li>
              <a href="#">Условия доставки</a>
            </li>
            <li>
              <a href="#">Возврат товара</a>
            </li>
            <li>
              <a href="#">Акции</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
