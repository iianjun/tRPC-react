import logo from "./svg/logo.svg";
import logoWithName from "./svg/logo-with-name.svg";

export const LogoIcon = (props: any) => {
  const { className, onClick, ...rest } = props;
  return (
    <span className={className} onClick={onClick}>
      <img src={logo} {...rest} />
    </span>
  );
};

export const LogoWithName = (props: any) => {
  const { className, onClick, ...rest } = props;
  return (
    <span className={className} onClick={onClick}>
      <img src={logoWithName} {...rest} />
    </span>
  );
};
