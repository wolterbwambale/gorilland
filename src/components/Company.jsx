import React from "react";

function Company() {
  return (
    <div>
      <div className="w-full mx-auto bg-gray-400  px-3">
        <div className="sm:flex justify-center items-center gap-8">
          {" "}
          <p>
            Copyright © Gorilland Travel Care 2025{" "}
            <span className="text-[#004e35] font-bold">
              Travel Way by Acme Themes
            </span>
          </p>
          <div className="flex gap-4 py-4 px-6">
            <p className="border-r h-full px-2">Terms & conditions</p>
            <p className="border-r h-full px-2">Privacy Policy</p>
            <p className="border-r h-full px-2">Site Map</p>
            <p>Career</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Company;
