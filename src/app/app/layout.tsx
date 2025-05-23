import { PropsWithChildren } from "react";
import { MainSidebar } from "./_components/main-sidebar";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="grid grid-cols-[16rem_1fr] gap-4 h-screen">
      <MainSidebar />
      <main>{children}</main>
    </div>
  );
}
