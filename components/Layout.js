import Sidebar from "./Sidebar";
import TopBar from "./TopBar";

function Layout({ children }) {
  return (
    <div className="min-h-screen min-w-full bg-gray-100">
      <TopBar />
      <Sidebar />

      <main className="min-h-screen pl-72 pt-40">{children}</main>
    </div>
  );
}

export default Layout;