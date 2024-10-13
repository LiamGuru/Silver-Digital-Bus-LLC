import { Suspense, useState } from "react";
import { Outlet } from "react-router-dom";
import PageLoading from "@/components/Loading/PageLoading";
import Header from "./Header";
import Sidebar from "../components/Sidebar";
import Banner from "./Banner";
import Footer from "./Footer";
export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="" id="layout">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div id="content">
        <Suspense fallback={<PageLoading />}>
          <Outlet />
        </Suspense>
      </div>
      <Banner />
      <Footer />
    </div>
  );
}
