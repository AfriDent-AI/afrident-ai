import { Outlet } from "react-router-dom";
import { Header } from "./component/layout/Header";
import { Footer } from "./component/layout/Footer";


export default function MainLayout() {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}