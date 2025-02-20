"use client";
import { useState } from "react";
import CustomerPage from "./customer/page";
import InvestorPage from "./investor/page";
import SalesPage from "./sales/page";

const Page = () => {
  // State to track which sibling is selected
  const [selected, setSelected] = useState("sales");

  const btnClasses = (state, selected) => {
    return `w-full cursor-pointer hover:underline flex justify-center items-center font-bold  ${
      state === selected && "underline"
    }`;
  };

  const cardClasses = `text-xl p-5 text-justify flex justify-center items-center font-semibold`;

  return (
    <div className="grid grid-cols-12 space-x-5 max-lg:space-y-2">
      <div className="col-span-6 max-lg:col-span-12 w-full p-2">
        <div className="flex justify-center gap-2 items-center text-xl text-blue-600 p-2">
          <div
            onClick={() => setSelected("sales")}
            className={btnClasses(selected, "sales")}
          >
            Sales
          </div>
          <div
            onClick={() => setSelected("customer")}
            className={btnClasses(selected, "customer")}
          >
            Customer
          </div>
          <div
            onClick={() => setSelected("investor")}
            className={btnClasses(selected, "investor")}
          >
            Investor
          </div>
        </div>
        <div className="my-5 rounded-lg max-lg:hidden">
          {selected === "sales" && (
            <div>
              <img
                src="https://talentreachnw.com/wp-content/uploads/2021/08/sales-1536x1024.jpeg"
                alt="Sales"
                className="rounded-lg"
              />
              <div className={cardClasses}>
                Our Sales personnel is ready to assist you with all your need
              </div>
            </div>
          )}
          {selected === "customer" && (
            <div>
              <img
                src="https://www.providesupport.com/blog/wp-content/uploads/2017/04/Keeping-customers-happy.jpg"
                alt="Customer"
                className="rounded-lg"
              />
              <div className={cardClasses}>
                Our Customer personnel is ready to assist you with all your need
              </div>
            </div>
          )}
          {selected === "investor" && (
            <div>
              <img
                src="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2019/03/18/803171-investments-thinkstock-060818.jpg"
                alt="investor"
                className="rounded-lg"
              />
              <div className={cardClasses}>
                Our Investor personnel is ready to assist you with all your need
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="col-span-6 max-lg:col-span-12 border ring-2 ring-slate-300 px-5 py-3 rounded-lg">
        {/* Render children based on the selected state */}
        {selected === "sales" && (
          <div>
            <SalesPage />
          </div>
        )}
        {selected === "customer" && (
          <div>
            <CustomerPage />
          </div>
        )}
        {selected === "investor" && (
          <div>
            <InvestorPage />
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
