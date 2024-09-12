import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  User,
} from "firebase/auth";
import { ReactNode, useEffect, useState } from "react";
import { createContext, useContext } from "react";

type contextType = {
  loginUser: User | null;
  login: () => Promise<void>;
  logout: () => Promise<void>;
};

// Context生成(ログインに関する情報を管理)
const AuthContext = createContext<contextType | null>(null); //こっからーーーーーーーーーーーーーーーーーーーーー
// firebase の定義情報（各値はFirebaseのアプリ利用で取得した値を使用する）
const firebaseConfig = {
  apiKey: "AIzaSyDcTNA7HXmRXtjKS8vuI_TpHRYl76HEVkI",
  authDomain: "money-book-app2.firebaseapp.com",
  projectId: "money-book-app2",
  storageBucket: "xxxxxxxxxx.appspot.com",
  messagingSenderId: "67727351746",
  appId: "1:67727351746:web:f3c581dbbc16d86cac005b",
};

// firebase, GoogleAuth 初期設定
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// AuthContextProvider (Provider)
export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  // ログインユーザ
  const [loginUser, setLoginUser] = useState<User | null>(null);

  // 起動時ログイン処理(既にログインしてる場合, ユーザ設定)
  useEffect(() => {
    // auth 初期化時にログインユーザ設定
    auth.onAuthStateChanged((user) => setLoginUser(user));
  }, []);

  // ログイン処理
  const login = async () => {
    // Google ログインのポップアップ表示して認証結果取得
    const result = await signInWithPopup(auth, provider);
    // 認証結果より user 設定
    setLoginUser(result.user);
  };

  // ログアウト処理
  const logout = async () => {
    await signOut(auth);
    setLoginUser(null);
  };

  // ログイン情報設定したProvider
  return (
    <AuthContext.Provider
      value={{
        loginUser,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// AuthContextConsumer (useContext) # Provider で囲った範囲で使う必要あり
export const AuthContextConsumer: () => contextType = () => {
  const context = useContext(AuthContext);
  if (context === null) {
    throw new Error("Context null");
  }
  return context;
};
