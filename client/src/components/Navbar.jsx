import React, { useEffect, useState } from "react";
import { Ghost, Menu, X } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User, Home, LogOut, LayoutDashboard, LogIn, UserPlus } from "lucide-react";

import { Link, useNavigate } from "react-router-dom";
import { useLogoutUserMutation } from "@/features/api/authApi";
import { toast } from "sonner";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuGroup
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { user } = useSelector((store) => store.auth);
  const [logoutUser, { isSuccess }] = useLogoutUserMutation();
  const navigate = useNavigate();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const logoutHandler = async () => {
    await logoutUser();
  };

  const homeHandler = () => {
    navigate("/");
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Logout successful");
      navigate("/");
    }
  }, [isSuccess, navigate]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-20 bg-white/80 dark:bg-gray-900/80 backdrop-blur border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={homeHandler}>
          <Ghost className="h-8 w-8 text-gray-700 dark:text-white" />
          <span className="text-2xl font-extrabold dark:text-white">QuizzHere</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-5">
          <Link to="/html-docs" className="text-gray-700 dark:text-gray-200 hover:text-blue-500 transition font-bold ">
            HTML
          </Link>
          <Link to="/css-docs" className="text-gray-700 dark:text-gray-200 hover:text-blue-500 transition font-bold ">
            CSS
          </Link>
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar>
                  <AvatarImage src={user?.photoUrl || "https://github.com/evilrabbit.png"} />
                  <AvatarFallback>{user?.name?.charAt(0) || "U"}</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuGroup>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuItem>
                    <Link to="profile">Profile</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={homeHandler}>Home</DropdownMenuItem>
                  <DropdownMenuItem onClick={logoutHandler}>Logout</DropdownMenuItem>
                </DropdownMenuGroup>
                {user.role === "instructor" && (
                  <>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <Link to="admin">Dashboard</Link>
                    </DropdownMenuItem>
                  </>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex items-center gap-2">
              <Button variant="outline" onClick={() => navigate("/login")}>Login</Button>
              <Button variant="outline" onClick={() => navigate("/login")}>Signup</Button>
            </div>
          )}
          
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center gap-3">
          
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
  <div className="md:hidden bg-gray-900 text-white border-t border-gray-800 px-6 py-6 flex flex-col gap-4 shadow-lg">
    {user ? (
      <>
        <Link
          to="profile"
          onClick={() => setMobileMenuOpen(false)}
          className="flex items-center gap-3 py-2 text-lg hover:text-blue-400 transition"
        >
          <User className="h-5 w-5" /> Profile
        </Link>

        <button
          onClick={homeHandler}
          className="flex items-center gap-3 py-2 text-lg hover:text-blue-400 transition"
        >
          <Home className="h-5 w-5" /> Home
        </button>

        <button
          onClick={logoutHandler}
          className="flex items-center gap-3 py-2 text-lg hover:text-red-400 transition"
        >
          <LogOut className="h-5 w-5" /> Logout
        </button>

        {user.role === "instructor" && (
          <Link
            to="admin"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-3 py-2 text-lg hover:text-blue-400 transition"
          >
            <LayoutDashboard className="h-5 w-5" /> Dashboard
          </Link>
        )}
      </>
    ) : (
      <>
        <Button onClick={() => { navigate("/"); setMobileMenuOpen(false); }} className="flex items-center justify-center gap-2 w-full py-2 text-lg font-medium rounded-lg  bg-black transition">
          <h2>Home</h2>
        </Button>
        <Button
          onClick={() => {
            navigate("/login");
            setMobileMenuOpen(false);
          }}
          className="flex items-center justify-center gap-2 w-full py-2 text-lg font-medium rounded-lg  bg-black transition"
        >
          <LogIn className="h-5 w-5" /> Login
        </Button>

        <Button
          onClick={() => {
            navigate("/login");
            setMobileMenuOpen(false);
          }}
          className="flex items-center justify-center gap-2 w-full py-2 text-lg font-medium rounded-lg bg-black transition"
        >
          <UserPlus className="h-5 w-5" /> Signup
        </Button  >
      </>
    )}
  </div>
)}


    </nav>
  );
};

export default Navbar;
