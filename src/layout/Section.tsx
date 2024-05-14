import { Outlet } from "react-router-dom";

export default function Section() {
  return (
    <div className=" ">
      <div className="w-full pt-28  ">
        <header>
          <Outlet />
        </header>
      </div>
    </div>
  );
}
