import React from "react";

import "./App.css";
import { Route, Routes } from "react-router-dom";

import { AuthContextProvider } from "./contexts/Authcontext";

import OverviewPage from "./pages/OverviewPage";
import InputPage from "./pages/InputPage";
import Sidebar from "./components/Sidebar";
import ViewPage from "./pages/ViewPage";
import MemoPage from "./pages/MemoPage";
import SettingPage from "./pages/SettingPage";

function App() {
  return (
    <>
      <AuthContextProvider>
        <div className="flex h-screen bg-gray-900 text-gray-100 overflow-hidden">
          {/*BG*/}
          <div className="fixed inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80" />
            <div className="absolute inset-0 backdrop-blur-sm" />
          </div>
          <Sidebar />
          <Routes>
            <Route path="/" element={<OverviewPage />} />
            <Route path="/inputpage" element={<InputPage />} />
            <Route path="/viewpage" element={<ViewPage />} />
            <Route path="/memopage" element={<MemoPage />} />
            <Route path="/settingpage" element={<SettingPage />} />
          </Routes>
        </div>
      </AuthContextProvider>
    </>
  );
}

export default App;
