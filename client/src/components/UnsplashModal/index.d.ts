import type { ModalProps } from "antd";

export interface UnsplashModalProps extends ModalProps {
  onChangeUrl: (url: string) => void;
}
