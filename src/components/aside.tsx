import React from "react";
import { navigateProjectHandler } from "../navigator";

export const AsideComponent: React.FC = () => {
  return (
    <div className="h-screen bg-slate-500">
      <div className="grid grid-cols-1 text-center pt-20 font-bold text-gray-200 cursor-pointer">
        <div onClick={navigateProjectHandler}>프로젝트 목록</div>
      </div>
    </div>
  );
};
