import React, { useState } from "react";
import { LogoWithName } from "../../icons";
import styles from "../../styles/header/main.module.scss";
import { Link } from "react-router-dom";
import { SettingOutlined } from "@ant-design/icons";
import { Button, Dropdown, Modal } from "antd";
import type { MenuProps } from "antd";
import UnsplashModal from "../UnsplashModal";
import { HeaderProps } from "./index.d";

const items: MenuProps["items"] = [
  {
    key: "change-background",
    label: "Change background",
  },
];
const Header: React.FC<HeaderProps> = ({ onChangeUrl }) => {
  const [open, setOpen] = useState<boolean>(false);
  const onClick = ({ key }: { key: string }) => {
    switch (key) {
      case "change-background":
        setOpen(true);
        break;
      default:
        break;
    }
  };
  return (
    <header className="header">
      <Link to="/">
        <LogoWithName className={styles.logo} />
      </Link>
      <Dropdown
        trigger={["click"]}
        menu={{
          items,
          onClick,
        }}
        placement="bottomRight"
      >
        <Button shape="circle" icon={<SettingOutlined />}></Button>
      </Dropdown>
      <UnsplashModal
        title="Change background"
        open={open}
        onCancel={() => setOpen(false)}
        onChangeUrl={onChangeUrl}
      />
    </header>
  );
};

export default Header;
