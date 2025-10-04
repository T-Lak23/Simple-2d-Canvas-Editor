import {
  Baseline,
  Circle,
  Eraser,
  Pencil,
  PencilOff,
  RectangleHorizontal,
  TextSelect,
  Trash,
} from "lucide-react";
const Toolbar = ({
  selectedBackgroundColor,
  handleSelectedBackgroundColor,
  setSelectedBackgroundColor,
  handleAddRectangle,
  handleAddCircle,
  removeSelected,
  selectedColor,
  setSelectedColor,
  canvas,
  isDrawingMode,
  setIsDrawingMode,
  handleAddText,
  handleAddTextBox,
  handleDrawing,
  disableDrawing,
  handleEraser,
  textBackgroundColor,
  setTextBackgroundColor,
  handleTextBackgroundColor,
  handleColorChange,
}) => {
  return (
    <div className="w-full max-w-5xl mx-auto bg-gray-200 p-3 rounded-xl flex flex-col gap-3 sm:gap-4 items-center justify-center">
      <div className="flex items-center justify-between gap-2 bg-gray-100 border border-gray-300 rounded-lg px-3 py-2 w-full sm:w-auto">
        <p className="font-medium text-sm sm:text-base">Canvas</p>
        <input
          type="color"
          value={selectedBackgroundColor || "#ffffff"}
          onChange={(e) =>
            handleSelectedBackgroundColor({
              e,
              setSelectedBackgroundColor,
              canvas,
            })
          }
          className="cursor-pointer w-8 h-8"
        />
      </div>

      <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
        {!isDrawingMode && (
          <>
            <button
              className="toolbar-btn"
              onClick={() => handleAddRectangle({ selectedColor, canvas })}
            >
              <RectangleHorizontal className="icon" />
            </button>
            <button
              className="toolbar-btn"
              onClick={() => handleAddCircle({ selectedColor, canvas })}
            >
              <Circle className="icon" />
            </button>
            <button
              className="toolbar-btn"
              onClick={() => removeSelected({ canvas })}
            >
              <Trash className="icon" />
            </button>
            <button
              className="toolbar-btn"
              onClick={() =>
                handleAddText({
                  selectedBackgroundColor,
                  selectedColor,
                  canvas,
                })
              }
            >
              <Baseline className="icon" />
            </button>
            <button
              className="toolbar-btn"
              onClick={() =>
                handleAddTextBox({
                  selectedBackgroundColor,
                  selectedColor,
                  canvas,
                })
              }
            >
              <TextSelect className="icon" />
            </button>
          </>
        )}

        <button
          className="toolbar-btn"
          onClick={
            isDrawingMode
              ? () => disableDrawing({ canvas, setIsDrawingMode })
              : () => handleDrawing({ canvas, selectedColor, setIsDrawingMode })
          }
        >
          {isDrawingMode ? (
            <PencilOff className="icon" />
          ) : (
            <Pencil className="icon" />
          )}
        </button>

        {isDrawingMode && (
          <button
            className="toolbar-btn"
            onClick={() => handleEraser({ canvas, selectedBackgroundColor })}
          >
            <Eraser className="icon" />
          </button>
        )}

        <div className="flex items-center gap-2">
          <input
            value={textBackgroundColor || "#ffffff"}
            type="color"
            onChange={(e) =>
              handleTextBackgroundColor(
                e,
                setTextBackgroundColor,
                textBackgroundColor,
                canvas
              )
            }
            className="cursor-pointer w-8 h-8"
          />

          <input
            value={selectedColor || "#000000"}
            type="color"
            onChange={(e) => handleColorChange({ e, setSelectedColor, canvas })}
            className="cursor-pointer w-8 h-8"
          />
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
