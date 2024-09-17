import React from "react";
import { Header } from "../components/common/Header";
import { AuthContextConsumer } from "../contexts/Authcontext";
import FlipCard from "../components/animata/card/flip-card";
import goalImage from "../components/imagesForComponents/goal-illust.jpg";
import yenSignImage from "../components/imagesForComponents/yen-illust.jpg";

const OverviewPage = () => {
  const context = AuthContextConsumer();
  let text = "loginしてください";
  const dn = context.loginUser?.displayName;
  if (typeof dn === "string") {
    text = dn;
  }
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="ホーム" />
      <div className="flex justify-left p-4 space-x-8">
        <div>
          <FlipCard
            description="2024年中に￥200,000貯める"
            image={goalImage}
            rotate="y"
            subtitle="目標"
            title="目標"
          />
        </div>
        <div>
          <FlipCard
            description="￥210,000"
            image={yenSignImage}
            rotate="y"
            subtitle="残高"
            title="残高"
          />
        </div>
      </div>
      <p>{text}</p>
    </div>
  );
};

export default OverviewPage;
