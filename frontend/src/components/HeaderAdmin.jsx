import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faCartShopping,
  faBagShopping,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function HeaderAdmin() {
  return (
    <header className="sticky top-0 bg-green-950 flex justify-center w-full">
      <div className="w-[50vw] flex justify-between items-center text-white">
        <Link to="/">
          <img src="/kco_logo.png  " className="w-32 cursor-pointer" alt="" />
        </Link>
        <div className="flex gap-5">
          <Link to="/products"> Products</Link>
          <Link to="/orders"> Orders</Link>
        </div>
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <FontAwesomeIcon
                icon={faUser}
                className="text-4xl cursor-pointer "
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <Link to="/login">
                <DropdownMenuItem>Login</DropdownMenuItem>
              </Link>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
