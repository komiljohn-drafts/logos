import Button from "../Button";
import cls from "./Menu.module.scss";

function Menu() {
  return (
    <nav className={cls.menu}>
      <ul className={cls.menu__list}>
        <li className={cls.menu__list_item}>
          <a href="#">Паста</a>
        </li>
        <li className={cls.menu__list_item}>
          <a href="#">Супы</a>
        </li>
        <li className={cls.menu__list_item}>
          <a href="#">Салаты</a>
        </li>
        <li className={cls.menu__list_item}>
          <a href="#">Антипасти</a>
        </li>
        <li className={cls.menu__list_item}>
          <a href="#">Напитки</a>
        </li>
        <li className={cls.menu__list_item}>
          <a href="#">Десерты</a>
        </li>
        <li className={cls.menu__list_item}>
          <a href="#">Бакалея</a>
        </li>
        <li className={cls.menu__list_item}>
          <a href="#">Акции</a>
        </li>
        <li className={cls.menu__list_item}>
          <a href="#">Комбо</a>
        </li>
        <li className={cls.menu__list_item}>
          <a href="#">Контакты</a>
        </li>
      </ul>
      <div className={cls.action}>
        <Button className={cls.login} shape="text">
          Войти
        </Button>
        <Button className={cls.basket} count={1}>
          Корзинка
        </Button>
      </div>
    </nav>
  );
}

export default Menu;
