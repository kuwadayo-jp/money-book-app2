import React from "react";
import { Header } from "../components/common/Header";
import Formtext_reftest from "../components/common/Formtext_reftest";

const SettingPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="設定" />
      <Formtext_reftest />
    </div>
  );
};

export default SettingPage;
