import { DotsVerticalIcon } from "@heroicons/react/outline";
import CardItem from "./Card";
import BoardData from "../data/boarddata.json";

function Board() {
  return (
    <>
      <div className="grid grid-cols-4 gap-2">
        {BoardData.map((board, index) => (
          <div className="bg-white shadow-md rounded-md " key={index}>
            <h4 className="flex justify-between items-center p-2">
              <span className="uppercase text-xs font-semibold text-gray-600 tracking-[.25em]">
                {board.name}
              </span>
              <DotsVerticalIcon className="w-4 h-4 text-gray-500 mb-4" />
            </h4>
            {board.items.map((item, iIndex) => (
              <CardItem key={iIndex} data={item} />
            ))}
          </div>
        ))}
      </div>
    </>
  );
}

export default Board;
