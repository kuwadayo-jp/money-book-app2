import React, { useEffect, useState } from "react";
import { Header } from "../components/common/Header";
import { AuthContextConsumer } from "../contexts/Authcontext";
import FlipCard from "../components/animata/card/flip-card";
import goalImage from "../components/imagesForComponents/goal-illust.jpg";
import yenSignImage from "../components/imagesForComponents/yen-illust.jpg";
import { onValue, ref } from "firebase/database";

const OverviewPage = () => {
  const context = AuthContextConsumer();
  const [goaltext, setGoaltext] = useState("loginしてください"); //目標の初期値
  const goaltextRef = ref(context.db, `${context.auth.loginUser?.uid}/goal`);
  useEffect(() => {
    const fetchgoal = () => {
      onValue(goaltextRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          setGoaltext(data.text);
        } else {
          setGoaltext("dataがありません");
        }
      });
    };

    fetchgoal();
  }, [context.auth]);

  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="ホーム" />
      <div className="flex justify-left p-4 space-x-8">
        <div>
          <FlipCard
            description={goaltext}
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
    </div>
  );
};

export default OverviewPage;
