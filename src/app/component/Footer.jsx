import React from "react";

const Footer = () => {
  return (
    <div className="text-gray-light relative flex select-none">
      <div>
        Copyright &copy; <span>{new Date().getFullYear().toString()}</span> |
        All Right Reserved
      </div>
    </div>
  );
};

export default Footer;
