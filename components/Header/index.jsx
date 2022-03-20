import cls from "./Header.module.scss";

function Header() {
  return (
    <header>
      <h1>This is gonna be header</h1>
      <p>coming soon...</p>
      <a href="lets see">lets see</a>
      <p className={cls.coolTitle}>This website is gonna be WILD!</p>
    </header>
  );
}

export default Header;
