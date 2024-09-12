import React from "react";
import { Header } from "../components/common/Header";
import { AuthContextConsumer } from "../contexts/Authcontext";

const OverviewPage = () => {
  const context = AuthContextConsumer();
  let text = "loginしてください";
  let dn = context.loginUser?.displayName;
  if (typeof dn === "string") {
    text = dn;
  }
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="ホーム" />
      <p>{text}</p>
    </div>
  );
};

export default OverviewPage;
