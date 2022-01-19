import {
  ChatAlt2Icon,
  PaperClipIcon,
  PlusCircleIcon,
} from "@heroicons/react/outline";
import { Draggable } from "react-beautiful-dnd";

import Image from "next/image";

function CardItem({ data, index }) {
  return (
    <Draggable index={index} draggableId={data.id.toString()}>
      {(provided) => (
        <div
          className="bg-gray-100 rounded-sm shadow-sm p-2 m-2"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <label
            className={`capitalize py-1 px-2 text-xs text-white  rounded-full ${
              data.priority === 0
                ? "bg-green-600"
                : data.priority === 1
                ? "bg-yellow-400"
                : "bg-red-600"
            }`}
          >
            {data.priority === 0
              ? "Low priority"
              : data.priority === 1
              ? "Medium Priority"
              : "High Priority"}
          </label>
          <h2 className="text-gray-800 pt-2 text-sm pb-2 mb-2 font-semibold">
            {data.title}
          </h2>
          <div className="flex items-center justify-between">
            <div className="flex space-x-3 text-gray-600 items-center justify-between">
              {data.chat > 0 && (
                <span className="flex items-center justify-between space-x-1 text-sm cursor-pointer">
                  <ChatAlt2Icon className="w-4 h-4 " />
                  <span>{data.chat}</span>
                </span>
              )}

              {data.attachment > 0 && (
                <span className="flex items-center justify-between space-x-1 text-sm cursor-pointer">
                  <PaperClipIcon className="w-4 h-4 " />
                  <span>{data.attachment}</span>
                </span>
              )}
            </div>
            <div className="flex items-center justify-between  overflow-hidden">
              {data.assignees &&
                data.assignees.map((imgurl, iIMGIndex) => (
                  <div
                    key={iIMGIndex}
                    className="overflow-hidden -space-x-3 border-white border-2 rounded-full w-8 h-8 cursor-pointer relative"
                  >
                    <Image
                      src={imgurl.avt}
                      alt="img"
                      objectFit="cover"
                      className="rounded-full overflow-hidden"
                      width="30"
                      height="30"
                    />
                  </div>
                ))}
              <span className="flex items-center justify-between space-x-1 text-sm cursor-pointer">
                <PlusCircleIcon className="w-6 h-6 text-gray-400" />
              </span>
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
}

export default CardItem;
