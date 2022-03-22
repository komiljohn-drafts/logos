import { FacebookSvg, GeoLocationSvg, InstagramSvg, MessageSvg, VKSvg, YoutubeSvg } from "../../utils/svgs";
import Button from "../Button";
import cls from "./Contacts.module.scss";

function Contacts() {
  return (
    <div className={cls.contacts}>
      <div className={cls.wrapper}>
        <div className={cls.box}>
          <div className={cls.head}>КОНТАКТЫ</div>
          <div className={cls.main}>
            <div className={cls.address}>
              <div className={cls.image}>
                <GeoLocationSvg />
              </div>
              <div className={cls.text}>
                <span>Наш адрес:</span>
                <p>МО, городской округ Красногорск, село Ильинкое, Экспериментальная улица, 10</p>
              </div>
            </div>
            <div className={cls.email}>
              <div className={cls.image}>
                <MessageSvg />
              </div>
              <div className={cls.text}>
                <span>Наша почта:</span>
                <p>auto.wash@gmail.com</p>
              </div>
            </div>
          </div>
          <div className={cls.foot}>
            <div className={cls.action}>
              <Button padding="22px 30px 21px">ЗАБРОНИРОВАТЬ СТОЛ</Button>
              <div className={cls.phone}>
                <a href="tel:+7-917-510-57-59">+7 (917) 510-57-59</a>
                <p>Звоните или оставляйте заявку</p>
              </div>
            </div>
            <div className={cls.social}>
              <span>Мы в соц сетях:</span>
              <div className={cls.images}>
                <div>
                  <FacebookSvg />
                </div>
                <div>
                  <VKSvg />
                </div>
                <div>
                  <YoutubeSvg />
                </div>
                <div>
                  <InstagramSvg />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
