import cls from "./About.module.scss";
import Button from "../Button";
import { OnionSvg, FlashSvg, ChefSvg } from "../../utils/svgs";

const features = [
  {
    id: 1,
    image: <OnionSvg />,
    text: "Свежайшие продукты",
  },
  {
    id: 2,
    image: <FlashSvg />,
    text: "Быстрая доставка",
  },
  {
    id: 3,
    image: <ChefSvg />,
    text: "Лучшие повора",
  },
  {
    id: 4,
    image: <OnionSvg />,
    text: "Свежайшие продукты",
  },
];

function About({ children }) {
  return (
    <section className={cls.about}>
      <div className={cls.wrapper}>
        <div className={cls.shadow}></div>
        <div className={cls.left}>
          <h2 className={cls.title}>НАШЕ КАФЕ</h2>
          <p className={cls.description}>
            Мы расположены в одном из самых живописных мест города — на берегу реки, это ваш оазис в черте города, куда
            можно сбежать от шумного и пыльного мегаполиса. Мы, действительно уникальные, ведь все продумано до мелочей:
            проект построен из дикого закарпатского сруба, камин в основном зале ресторана и панорамные окна с видом на
            реку, уютные беседки на берегу реки и лучшая видовая террасса, шатер с посадкой на 200 человек, сказочный
            детский домик и бассейн.
          </p>
          <Button shape="secondary">ПОСМОТРЕТЬ МЕНЮ</Button>
        </div>
        <div className={cls.right}>
          {features.map((feature) => (
            <div key={feature.id} className={cls.feature}>
              <div className={cls.image}>{feature.image}</div>
              <div className={cls.text}>{feature.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
