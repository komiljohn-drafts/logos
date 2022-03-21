import { GeoLocationSvg, SearchSvg } from "../../utils/svgs";
import cls from "./SearchInput.module.scss";

function SearchInput({ children }) {
  return (
    <div className={cls.search}>
      <div className={cls.geoIcon}>
        <GeoLocationSvg />
      </div>
      <input type="text" placeholder="Введите адрес доставки" />
      <div className={cls.searchIcon}>
        <SearchSvg />
      </div>
    </div>
  );
}

export default SearchInput;
