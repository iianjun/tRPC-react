import { Typography } from "antd";
import classNames from "classnames";
import { TextProps } from "./index.d";
import styles from "../../../styles/ui/text.module.scss";
export const Text: React.FC<TextProps> = ({
  weight: fontWeight = 400,
  size: fontSize = 14,
  style,
  children,
  className,
  ...rest
}) => {
  return (
    <Typography.Text
      className={classNames(className, styles.text)}
      style={{
        fontWeight,
        fontSize,
        ...style,
      }}
      {...rest}
    >
      {children}
    </Typography.Text>
  );
};
