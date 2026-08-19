import { Link } from "react-router-dom";

export function AuthHeader() {
  return (
    <header className="flex h-20 items-center justify-between border-b border-slate-100 bg-white px-6 lg:px-10">

      <Link
        to="/"
        className="flex items-center gap-2"
      >
        <div className="flex size-11 items-center justify-center rounded-full border-2 border-[#0875E1]">
          <span className="font-extrabold text-[#0875E1]">
            AI
          </span>
        </div>

        <div>
          <div className="text-xl font-extrabold leading-none">
            <span className="text-[#0875E1]">AfriDent</span>
            <span className="text-[#078F9E]">-AI</span>
          </div>

          <p className="text-[9px] font-semibold italic text-[#078F9E]">
            Intelligent dentistry For Africa
          </p>
        </div>
      </Link>

      <Link
        to="/"
        className="text-sm font-semibold text-slate-600 transition hover:text-[#078F9E]"
      >
        ← Home
      </Link>
    </header>
  );
}