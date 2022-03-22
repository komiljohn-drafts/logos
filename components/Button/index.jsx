import cls from "./Button.module.scss";
import { LogoSvg } from "../../utils/svgs";

function Button({ shape = "primary", className, count = 0, iconRight = null, padding = "", children, ...rest }) {
  console.log(className);

  return (
    <button style={{ padding }} className={`${className} ${cls[shape]}`} {...rest}>
      <span>{children}</span>
      {!!count && <span className={cls.count}>{count}</span>}
      {!!iconRight && <div className={cls.iconRight}>{iconRight ?? ""}</div>}
    </button>
  );
}

export default Button;
