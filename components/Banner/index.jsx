import cls from "./Banner.module.scss";

function Banner() {
  return (
    <div className={cls.banner}>
      <div className={cls.shadow}></div>
      <div className={cls.wrapper}>
        <div className={cls.content}>
          <p>Доставка ВКУСНЕЙШИХ БЛЮд за 60 минут</p>
          <button>Ещё не пробовал?</button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
