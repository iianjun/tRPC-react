import React from "react";
export interface ModalTitleProps {
  title?: React.ReactNode;
  onCancel?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  toggleExpand?: () => void;
  isExpand?: boolean;
}
