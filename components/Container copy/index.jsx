import cls from "./Container.module.scss";

function Container({ children }) {
  return <div className={cls.container}>{children}</div>;
}

export default Container;
