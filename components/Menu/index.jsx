import Button from "../Button";
import cls from "./Menu.module.scss";

function Menu() {
  return (
    <div className={cls.menu}>
      <nav className={cls.wrapper}>
        <div className={cls.nav}>
          <ul className={cls.nav__list}>
            <li className={`${cls.nav__list_item} ${cls.active}`}>
              <a href="#">Холодные закуски</a>
            </li>
            <li className={cls.nav__list_item}>
              <a href="#">Горячие закуски</a>
            </li>
            <li className={cls.nav__list_item}>
              <a href="#">Мясные блюда</a>
            </li>
            <li className={cls.nav__list_item}>
              <a href="#">Супы</a>
            </li>
            <li className={cls.nav__list_item}>
              <a href="#">Рыбные блюда</a>
            </li>
            <li className={cls.nav__list_item}>
              <a href="#">Гриль меню</a>
            </li>
            <li className={cls.nav__list_item}>
              <a href="#">Фирменные блюда</a>
            </li>
            <li className={cls.nav__list_item}>
              <a href="#">Напитки</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Menu;
