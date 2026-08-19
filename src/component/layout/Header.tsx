import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Search, UserCircle, LogIn, LogOut, ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { navigation } from "@/data/Naigation";
import logo from "../../assets/logo (2).png";

export function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Replace with your actual auth state

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const handleLogout = () => {
    // Add your logout logic here
    setIsLoggedIn(false);
    setIsDropdownOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-none bg-transparent backdrop-blur">
      <div className="mx-auto  flex h-25  items-center justify-between px-6 lg:px-10">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="flex w-auto">
            <img src={logo} alt="Logo" className="h-25 w-auto" />
          </div>

          <div className="hidden sm:block line-height-1 flex flex-col items-start justify-center">
            <div className="text-2xl font-bold tracking-tight text-[#0077C8]">
              AfriDent<span className="text-[#00A8B5]">-AI</span>
            </div>

            <div className="text-base font-bold italic text-[#00A8B5]">
              Intelligent dentistry for Africa
            </div>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `relative py-2 text-lg font-extrabold transition-colors ${isActive
                  ? "text-slate-950"
                  : "text-slate-700 hover:text-[#00A8B5]"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {item.label}

                  {isActive && (
                    <span className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-[#00A8B5]" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="h-10   rounded-lg border border-slate-300 pl-10 
              pr-5 text-sm outline-none focus:border-[#00A8B5] lg:w-52 sm:w-64"
            />
            <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
          </div>

          <select
            className="hidden h-16 rounded-lg border px-3 border-none  text-base font-medium outline-none
             focus:border-[#00A8B5] sm:block"
            defaultValue="EN"
            aria-label="Language"
          >
            <option value="EN">EN</option>
            <option value="AM">አማ</option>
            <option value="SW">SW</option>
            <option value="FR">FR</option>
            <option value="AR">AR</option>
          </select>

          {/* Login/Signup Dropdown Button */}
          <div className="relative">
            <Button

              size={""}
              onClick={toggleDropdown}
              className="hidden px-3 py-6 text-white text-base  bg-[#218792]
               hover:bg-[#067785] sm:flex items-center gap-1"
            >
              {isLoggedIn ? "Account" : "Loge out"}
              <ChevronDown
                className={`size-4 transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""
                  }`}
              />
            </Button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <>
                {/* Backdrop */}
                <div
                  className="fixed inset-0 z-10"
                  onClick={() => setIsDropdownOpen(false)}
                />

                <div className="absolute right-0 z-20 mt-2 min-w-[200px] origin-top-right rounded-lg border border-slate-200 bg-white py-1 shadow-lg">
                  {isLoggedIn ? (
                    <>
                      {/* User info (optional) */}
                      <div className="border-b border-slate-100 px-4 py-2">
                        <p className="text-sm font-medium text-slate-700">
                          John Doe
                        </p>
                        <p className="text-xs text-slate-400">
                          john@example.com
                        </p>
                      </div>

                      {/* Profile link (optional) */}
                      <Link
                        to="/profile"
                        onClick={() => setIsDropdownOpen(false)}
                        className="flex w-full items-center gap-2 px-4 py-2.5 text-sm text-slate-700 transition-colors hover:bg-slate-50"
                      >
                        <UserCircle className="size-4" />
                        Profile
                      </Link>

                      {/* Logout */}
                      <button
                        onClick={handleLogout}
                        className="flex w-full items-center gap-2 border-t border-slate-100 px-4 py-2.5 text-sm text-red-600 transition-colors hover:bg-red-50"
                      >
                        <LogOut className="size-4" />
                        Logout
                      </button>
                    </>
                  ) : (
                    <>
                      {/* Login */}
                      <Link
                        to="/auth/login"
                        onClick={() => setIsDropdownOpen(false)}
                        className="flex w-full items-center gap-2 px-4 py-2.5 text-sm text-slate-700 transition-colors hover:bg-slate-50"
                      >
                        <LogIn className="size-4" />
                        Logout
                      </Link>

                      {/* Sign Up */}
                      {/* <Link
                        to="/auth/signup"
                        onClick={() => setIsDropdownOpen(false)}
                        className="flex w-full items-center gap-2 border-t border-slate-100 px-4 py-2.5 text-sm text-slate-700 transition-colors hover:bg-slate-50"
                      >
                        <UserCircle className="size-4" />
                        Sign Up
                      </Link> */}
                    </>
                  )}
                </div>
              </>
            )}
          </div>

          {/* User Icon - Just a simple icon, no dropdown */}
          {/* <Link to={isLoggedIn ? "/profile" : "/auth"}>
            <Button
              variant="ghost"
              size="icon"
              aria-label="Account"
              className="text-[#0077C8]"
            >
              <UserCircle className="text-14"/>
            </Button>
          </Link> */}
        </div>
      </div>
    </header>
  );
}