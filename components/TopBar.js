import { SearchIcon, BellIcon } from "@heroicons/react/outline";

function TopBar() {
  return (
    <div className="h-40 bg-white shadow-sm pl-72 fixed w-full pr-5 pt-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center px-5">
          <SearchIcon className="w-5 h-5 text-gray-500 cursor-pointer" />
          <input
            type="text"
            placeholder="Search"
            className="outline-none text-sm text-gray-500 pl-2"
          />
        </div>
        <div className="flex px-5 items-center space-x-3">
          <div className="w-8 h-8 rounded-full hover:bg-gray-200 transition flex justify-center items-center">
            <BellIcon className="w-5 h-5 text-gray-500 cursor-pointer " />
          </div>
          <div className="flex space-x-2 items-center  font-semibold cursor-pointer">
            <div className="w-8 text-white rounded-full justify-center items-center h-8 flex bg-blue-400 ">
              R
            </div>
            <div className="text-sm text-gray-900">Ram Kumar</div>
          </div>
        </div>
      </div>

      <div className="flex flex-col pl-5 pt-8">
        <div>
          <h3 className="text-sm text-gray-500">Checkout Experience Team</h3>
          <h3 className="text-normal text-gray-900 text-2xl">
            Storefront Checkout Rewamp
          </h3>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
