import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/sidebar/Sidebar";
import type { PropsWithChildren } from "react";

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="grid grid-cols-1 grid-rows-layout h-screen">
      <Header />
      <div className="grid grid-cols-layout grid-rows-1">
        <Sidebar />
        <main className="bg-body">{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
