import { Modal, ModalProps } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { ModalTitleProps } from "./index.d";
import styles from "../../../styles/ui/modal.module.scss";
import classNames from "classnames";
import { Text } from "../Text";
import { AiOutlineClose, AiOutlineMinus } from "react-icons/ai";
import { CgArrowsExpandLeft } from "react-icons/cg";
import Draggable, { DraggableData, DraggableEvent } from "react-draggable";

const Title: React.FC<ModalTitleProps> = ({
  title,
  onCancel,
  isExpand,
  toggleExpand,
}) => {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles["btn-wrapper"]}>
          <span onClick={onCancel}>
            <AiOutlineClose />
          </span>
          <span onClick={onCancel}>
            <AiOutlineMinus />
          </span>
          <span onClick={toggleExpand}>
            {isExpand ? <></> : <CgArrowsExpandLeft />}
          </span>
        </div>
        <Text weight={600} size={17}>
          {title}
        </Text>
      </div>
    </div>
  );
};

const initialBound = {
  left: 0,
  top: 0,
  bottom: 0,
  right: 0,
};

const CustomModal: React.FC<ModalProps> = ({
  className,
  children,
  title,
  onCancel,
  ...rest
}) => {
  const [isExpand, setIsExpand] = useState<boolean>(false);
  const [bounds, setBounds] = useState(initialBound);
  const draggleRef = useRef<HTMLDivElement>(null);

  const onStart = (_event: DraggableEvent, uiData: DraggableData) => {
    const { clientWidth, clientHeight } = window.document.documentElement;
    const targetRect = draggleRef.current?.getBoundingClientRect();
    console.log("HRE");
    if (!targetRect) return;

    console.log({
      test: {
        left: -targetRect.left + uiData.x,
        right: clientWidth - (targetRect.right - uiData.x),
        top: -targetRect.top + uiData.y,
        bottom: clientHeight - (targetRect.bottom - uiData.y),
      },
    });
    setBounds({
      left: -targetRect.left + uiData.x,
      right: clientWidth - (targetRect.right - uiData.x),
      top: -targetRect.top + uiData.y,
      bottom: clientHeight - (targetRect.bottom - uiData.y),
    });
  };

  useEffect(() => {
    console.log(bounds);
  }, [bounds]);

  const handleCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("HERE");
    setIsExpand(false);
    setBounds(initialBound);
    onCancel && onCancel(e);
  };
  return (
    <Modal
      closeIcon={<></>}
      {...rest}
      className={classNames(className, styles.modal, {
        [styles.expand]: isExpand,
      })}
      width={600}
      title={
        <Title
          title={title}
          onCancel={handleCancel}
          isExpand={isExpand}
          toggleExpand={() => {
            setBounds(initialBound);
            setIsExpand((prev) => !prev);
          }}
        />
      }
      onCancel={handleCancel}
      maskStyle={{ background: "none" }}
      modalRender={(modal) => (
        <Draggable
          // position={{ x: 1, y: 1 }}
          bounds={bounds}
          onStart={(event, uiData) => onStart(event, uiData)}
          disabled={isExpand}
        >
          <div ref={draggleRef}>{modal}</div>
        </Draggable>
      )}
    >
      {children}
    </Modal>
  );
};

export default CustomModal;
