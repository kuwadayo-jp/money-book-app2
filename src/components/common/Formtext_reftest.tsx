import { useRef } from "react";
import { AuthContextConsumer } from "../../contexts/Authcontext";
import { ref, update } from "firebase/database";

export default function Formtext_reftest() {
  const name = useRef<HTMLInputElement>(null);
  const show = () => {
    if (name.current) {
      updateGoal(name.current.value);
    }
  };
  const context = AuthContextConsumer();
  const goaltextRef = ref(context.db, `${context.auth.loginUser?.uid}/goal`);
  const updateGoal = (text: string) => {
    update(goaltextRef, { text });
  };
  return (
    <>
      <div>目標</div>
      <input name="nametest" ref={name} defaultValue="名前" />
      <div>
        <button type="submit" onClick={show}>
          送信
        </button>
      </div>
    </>
  );
}
