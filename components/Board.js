import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { useState, useEffect } from "react";
import { DotsVerticalIcon } from "@heroicons/react/outline";
import CardItem from "./Card";
import BoardData from "../data/boarddata.json";

function Board() {
  const [ready, setReady] = useState(false);
  const [boardData, setBoardData] = useState(BoardData);

  useEffect(() => {
    if (process.browser) {
      setReady(true);
    }
  });

  const onDragEnd = (re) => {
    if (!re.destination) return;
    let newBoardData = boardData;
    var dragItem =
      newBoardData[parseInt(re.source.droppableId)].items[re.source.index];
    newBoardData[parseInt(re.source.droppableId)].items.splice(
      re.source.index,
      1
    );
    newBoardData[parseInt(re.destination.droppableId)].items.splice(
      re.destination.index,
      0,
      dragItem
    );
    setBoardData(newBoardData);
  };

  return (
    <>
      {ready && (
        <DragDropContext onDragEnd={onDragEnd}>
          <div className="grid grid-cols-4 gap-2">
            {BoardData.map((board, index) => (
              <div key={index} className="bg-white shadow-md rounded-md ">
                <Droppable droppableId={index.toString()}>
                  {(provider) => (
                    <div {...provider.droppableProps} ref={provider.innerRef}>
                      <h4 className="flex justify-between items-center p-2">
                        <span className="uppercase text-xs font-semibold text-gray-600 tracking-[.25em]">
                          {board.name}
                        </span>
                        <DotsVerticalIcon className="w-4 h-4 text-gray-500 mb-4" />
                      </h4>
                      {board.items.length > 0 &&
                        board.items.map((item, iIndex) => {
                          return (
                            <CardItem
                              key={item.id}
                              data={item}
                              index={iIndex}
                            />
                          );
                        })}
                    </div>
                  )}
                </Droppable>
              </div>
            ))}
          </div>
        </DragDropContext>
      )}
    </>
  );
}

export default Board;
