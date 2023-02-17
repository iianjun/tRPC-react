import { FolderOpenOutlined } from "@ant-design/icons";
import React, { useRef, useState } from "react";
import Draggable from "react-draggable";
import Folder from "../Folder";
import CustomModal from "../ui/Modal";

const Main = () => {
  const [open, setOpen] = useState<boolean>(false);
  const id = useRef<string>("");
  return (
    <>
      <div>
        <Folder
          onOpenFolder={(_id) => {
            id.current = _id;
            setOpen(true);
          }}
          title="Hellodawdawdwadawa"
        />
      </div>
      <CustomModal open={open} onCancel={() => setOpen(false)} title="Test">
        Test
      </CustomModal>
    </>
  );
};

export default Main;
