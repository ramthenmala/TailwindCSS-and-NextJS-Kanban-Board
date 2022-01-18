import {
  LightningBoltIcon,
  CheckCircleIcon,
  HomeIcon,
  ViewGridIcon,
  CalendarIcon,
  MicrophoneIcon,
  UserGroupIcon,
  ChartBarIcon,
} from "@heroicons/react/outline";

function Sidebar(props) {
  return (
    <div className="inset-y-0 w-72 fixed left-0 bg-white shadow-md">
      <div className="flex items-center space-x-3  mb-4 py-4 px-3">
        <span className="w-10 h-10 bg-indigo-500  text-3xl font-medium text-white rounded-lg flex items-center justify-center">
          K
        </span>
        <span className="text-xl font-medium">KanBan.</span>
      </div>

      <div className="divide-y px-3 flex flex-col">
        <div className="">
          <div className="flex items-center space-x-2 rounded-md text-gray-600 px-2 py-2 cursor-pointer hover:bg-indigo-100 hover:text-indigo-900 transition">
            <div className="">
              <LightningBoltIcon className="w-5 h-5 " />
            </div>
            <div className="">Activity</div>
          </div>

          <div className="flex items-center space-x-2 rounded-md text-gray-600 px-2 py-2 cursor-pointer hover:bg-indigo-100 hover:text-indigo-900 transition">
            <div className="">
              <CheckCircleIcon className="w-5 h-5 " />
            </div>
            <div className="">My Tasks</div>
          </div>
        </div>

        <div>
          <div className="flex items-center space-x-2 rounded-md text-gray-600 px-2 py-2 cursor-pointer hover:bg-indigo-100 hover:text-indigo-900 transition">
            <div className="">
              <HomeIcon className="w-5 h-5 " />
            </div>
            <div className="">Overview</div>
          </div>

          <div className="flex items-center space-x-2 rounded-md text-gray-600 px-2 py-2 cursor-pointer hover:bg-indigo-100 hover:text-indigo-900 transition">
            <div className="">
              <ViewGridIcon className="w-5 h-5 " />
            </div>
            <div className="">Projects</div>
          </div>

          <div className="flex items-center space-x-2 rounded-md text-gray-600 px-2 py-2 cursor-pointer hover:bg-indigo-100 hover:text-indigo-900 transition">
            <div className="">
              <CalendarIcon className="w-5 h-5 " />
            </div>
            <div className="">Calendar</div>
          </div>

          <div className="flex items-center space-x-2 rounded-md text-gray-600 px-2 py-2 cursor-pointer hover:bg-indigo-100 hover:text-indigo-900 transition">
            <div className="">
              <MicrophoneIcon className="w-5 h-5 " />
            </div>
            <div className="">Campaign</div>
          </div>

          <div className="flex items-center space-x-2 rounded-md text-gray-600 px-2 py-2 cursor-pointer hover:bg-indigo-100 hover:text-indigo-900 transition">
            <div className="">
              <UserGroupIcon className="w-5 h-5 " />
            </div>
            <div className="">Teams</div>
          </div>

          <div className="flex items-center space-x-2 rounded-md text-gray-600 px-2 py-2 cursor-pointer hover:bg-indigo-100 hover:text-indigo-900 transition">
            <div className="">
              <ChartBarIcon className="w-5 h-5 " />
            </div>
            <div className="">Analytics</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
