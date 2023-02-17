import { TextProps as _TextProps } from "antd/es/typography/Text";

export interface TextProps extends _TextProps {
  weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700;
  size?: number;
}
