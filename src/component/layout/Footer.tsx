import { Link } from "react-router-dom";
import logo from '@/assets/logo (2).png'
export function Footer() {
  return (
    <footer className="object-cover sticky z-30 bottom-0 top-185  w-full ">
      {/* <img src={footer} width="100%"/> */}
      <div className="mx-auto flex w-full flex-col gap-6 px-6 py-2 lg:flex-row lg:items-center lg:justify-between lg:px-10" style={{
        background: "linear-gradient(to right, #FFFFFF, #B0BFC7, #0BBEC3)"
      }}>

       <div className="items-center justify-center">
         <Link to="/" className="flex items-center gap-3">
           <div className="flex">
            <img src={logo} alt="Logo" className="h-20 w-auto" />
          </div>

        </Link>
         <div className="text-[12.5px] text-slate-900" >
            ©2026 AfriDent-AI. All rights reserved.
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-5 text-base font-semibold text-slate-900" >
          <Link to="/who-guidelines" className="hover:text-[#0077C8] transition-colors">
            WHO Guidelines
          </Link>

          <span className="hidden h-10 w-0.5 bg-slate-500 sm:block" />

          <Link to="/fdi-resources" className="hover:text-[#0077C8] transition-colors">
            FDI Resources
          </Link>

          <span className="hidden h-10 w-0.5 bg-slate-500 sm:block" />

          <Link to="/africa-cdc" className="hover:text-[#0077C8] transition-colors">
            Africa CDC
          </Link>

          <span className="hidden h-10 w-0.5 bg-slate-500 sm:block" />

          <Link to="/privacy" className="hover:text-[#0077C8] transition-colors">
            Privacy
          </Link>

          <span className="hidden h-10 w-0.5 bg-slate-500 sm:block" />

          <Link to="/about" className="hover:text-[#0077C8] transition-colors">
            About AfriDent-AI
          </Link>
        </div>

        <div className="max-w-xs text-right text-sm font-bold text-white" style={{ fontFamily: "Inter", fontWeight: 400, fontSize: "20px" }}>
          Pan-African Multilingual AI Ecosystem for Oral Health
        </div>
      </div>
    </footer>
  );
}