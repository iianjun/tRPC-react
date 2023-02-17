import { FolderOpenOutlined } from "@ant-design/icons";
import React from "react";
import Draggable from "react-draggable";
import styles from "../../styles/folder/main.module.scss";
import { FolderProps } from "./index.d";
import { BsFillFolderFill } from "react-icons/bs";
import { Text } from "../ui/Text";
const Folder: React.FC<FolderProps> = ({ onOpenFolder, title }) => {
  return (
    <Draggable>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <span
            className={styles.folder}
            onDoubleClick={() => onOpenFolder && onOpenFolder("123")}
          >
            <BsFillFolderFill />
          </span>
          <Text ellipsis style={{ maxWidth: 100, color: "white" }}>
            {title}
          </Text>
        </div>
      </div>
    </Draggable>
  );
};

export default Folder;
