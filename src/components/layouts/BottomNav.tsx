import React, { useState } from "react";

interface Props {
  setCameraIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const BottomNav: React.FC<Props> = ({ setCameraIsOpen }) => {
  const [filterMenuIsOpen, setFilterMenuIsOpen] = useState(false);
  const [photoMenuIsOpen, setPhotoMenuIsOpen] = useState(false);
  const [downloadMenuIsOpen, setDownloadMenuIsOpen] = useState(false);

  const handleOnClick = (btnClicked: "filter" | "photo" | "download") => {
    setFilterMenuIsOpen((prev) => (btnClicked === "filter" ? !prev : false));
    setPhotoMenuIsOpen((prev) => (btnClicked === "photo" ? !prev : false));
    setDownloadMenuIsOpen((prev) =>
      btnClicked === "download" ? !prev : false
    );
  };

  return (
    <>
      <div
        className={`absolute bottom-12 -z-10 flex h-20 w-[300%] items-center overflow-hidden shadow-md transition duration-300 ${
          filterMenuIsOpen ? "translate-x-0" : ""
        }
      ${photoMenuIsOpen ? "-translate-x-1/3" : ""}
      ${downloadMenuIsOpen ? "-translate-x-2/3" : ""}
      ${
        !filterMenuIsOpen && !photoMenuIsOpen && !downloadMenuIsOpen
          ? "translate-y-[0%] translate-x-[100%] opacity-0"
          : ""
      }
      `}
      >
        <div className="mx-auto flex h-full w-full items-center justify-center border-t bg-blue-100 bg-opacity-30 text-center backdrop-blur-sm">
          Filter
        </div>
        <div className="mx-auto flex h-full w-full items-center justify-around border-t bg-pink-100 bg-opacity-30 text-center backdrop-blur-sm">
          <button
            className={`btn-primary `}
            onClick={() => setCameraIsOpen((prev) => !prev)}
          >
            Take photo
          </button>
          <button
            className={`btn-primary`}
            onClick={() => setCameraIsOpen((prev) => !prev)}
          >
            Upload photo
          </button>
        </div>
        <div className="mx-auto flex h-full w-full items-center justify-center border-t bg-emerald-100 bg-opacity-30 text-center backdrop-blur-sm">
          Download
        </div>
      </div>
      <nav className="fixed bottom-0 z-10 flex h-12 w-full items-center justify-around border-t border-t-gray-100 bg-white px-5 backdrop-blur-sm">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`h-10 w-10 cursor-pointer rounded-full p-2 hover:bg-gray-100 ${
              filterMenuIsOpen ? "bg-blue-500 text-white hover:bg-blue-300" : ""
            }`}
            onClick={() => handleOnClick("filter")}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"
            />
          </svg>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`h-10 w-10 cursor-pointer rounded-full p-2  hover:bg-gray-100  ${
              photoMenuIsOpen ? "bg-pink-500 text-white hover:bg-pink-300" : ""
            }`}
            onClick={() => handleOnClick("photo")}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
            />
          </svg>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`h-10 w-10 cursor-pointer rounded-full p-2  hover:bg-gray-100 ${
              downloadMenuIsOpen
                ? "bg-emerald-500 text-white hover:bg-emerald-300"
                : ""
            }`}
            onClick={() => handleOnClick("download")}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15M9 12l3 3m0 0l3-3m-3 3V2.25"
            />
          </svg>
        </div>
      </nav>
    </>
  );
};

export default BottomNav;
