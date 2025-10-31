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

function Header() {
  return (
    <header className="sticky top-0 bg-green-950 flex justify-center">
      <div className="w-[50vw] flex justify-between items-center">
        <Link to="/">
          <img
            src="/kco_logo.png  "
            className="w-[8.6rem] cursor-pointer"
            alt=""
          />
        </Link>
        <div className="flex gap-5">
          <Link to="/checkout">
            {" "}
            <FontAwesomeIcon
              icon={faCartShopping}
              className="text-4xl cursor-pointer text-white"
            />
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger>
              <FontAwesomeIcon
                icon={faUser}
                className="text-4xl cursor-pointer text-white"
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <Link to="/login">
                <DropdownMenuItem>Login</DropdownMenuItem>
              </Link>
              <Link to="/signup">
                {" "}
                <DropdownMenuItem>Signup</DropdownMenuItem>
              </Link>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}

export default Header;
