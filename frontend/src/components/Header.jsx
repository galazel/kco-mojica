import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faCartShopping,
  faBagShopping,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const checkout = () => {
    navigate("/checkout");
  };
  const home = () => {
    navigate("/");
  };
  const account = () => {
    navigate("/account");
  };
  return (
    <header className="sticky top-0 bg-green-800 flex justify-center">
      <div className="w-[50vw] flex justify-between items-center">
        <img
          src="/kco_logo.png  "
          className="w-[8.6rem] cursor-pointer"
          alt=""
          onClick={home}
        />
        <div className="flex gap-5">
          <FontAwesomeIcon
            icon={faCartShopping}
            className="text-4xl cursor-pointer text-white"
            onClick={checkout}
          />
          <FontAwesomeIcon
            icon={faUser}
            className="text-4xl cursor-pointer text-white"
            onClick={account}
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
