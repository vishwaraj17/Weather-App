import React, { useState } from "react";

const ErrorBox = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <>
      {isVisible && (
        <div
          role="alert"
          className="fixed top-0 z-10 flex w-full px-4 py-4 text-base text-red-800 bg-red-50 rounded-lg mt-5 font-medium"
        >
          <div className="mr-12">
            <i className="fa-solid fa-circle-info"></i> Sorry, there is some
            error...
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="absolute top-3 right-3 h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase transition-all"
            type="button"
          >
            <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </span>
          </button>
        </div>
      )}
    </>
  );
};

export default ErrorBox;
