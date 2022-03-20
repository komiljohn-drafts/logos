import cls from "./Button.module.scss";
import { LogoSvg } from "../../utils/svgs";

function Button({ shape = "primary", className, count = 0, children, ...rest }) {
  console.log(className);

  return (
    <button className={`${className} ${cls[shape]}`} {...rest}>
      <span>{children}</span>
      {!!count && <span className={cls.count}>{count}</span>}
    </button>
  );
}

export default Button;
