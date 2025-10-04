import { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { handleSaveCanvas } from "../config/firestore";
import { useSetCanvas } from "../hooks/useSetCanvas";
import {
  handleAddText,
  handleAddTextBox,
  handleTextBackgroundColor,
} from "../utils/TextTools";
import {
  disableDrawing,
  handleDrawing,
  handleEraser,
} from "../utils/DrawingTools";
import { handleAddCircle, handleAddRectangle } from "../utils/ShapeTools";
import {
  handleColorChange,
  handleSelectedBackgroundColor,
  removeSelected,
} from "../utils/HelperTools";
import Toolbar from "../components/Toolbar";

const CanvasPage = () => {
  const { canvasId } = useParams();
  const canvasRef = useRef(null);

  const [canvas, setCanvas] = useState("");
  const [selectedColor, setSelectedColor] = useState("#000000");
  const [selectedBackgroundColor, setSelectedBackgroundColor] =
    useState("#ffffff");
  const [textBackgroundColor, setTextBackgroundColor] = useState("#ffffff");
  const [selectedObject, setSelectedObject] = useState(null);
  const [isDrawingMode, setIsDrawingMode] = useState(false);

  useSetCanvas({
    canvasRef,
    canvas,
    setCanvas,
    canvasId,
    setSelectedBackgroundColor,
    setTextBackgroundColor,
    setSelectedColor,
    setSelectedObject,
    selectedBackgroundColor,
  });

  return (
    <div className="pt-10 flex flex-col items-center w-full min-h-screen bg-gray-100 py-4 px-3 sm:px-6 gap-4">
      <Toolbar
        selectedBackgroundColor={selectedBackgroundColor}
        handleSelectedBackgroundColor={handleSelectedBackgroundColor}
        setSelectedBackgroundColor={setSelectedBackgroundColor}
        handleAddRectangle={handleAddRectangle}
        handleAddCircle={handleAddCircle}
        removeSelected={removeSelected}
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
        canvas={canvas}
        isDrawingMode={isDrawingMode}
        setIsDrawingMode={setIsDrawingMode}
        handleAddText={handleAddText}
        handleAddTextBox={handleAddTextBox}
        handleDrawing={handleDrawing}
        disableDrawing={disableDrawing}
        handleEraser={handleEraser}
        textBackgroundColor={textBackgroundColor}
        setTextBackgroundColor={setTextBackgroundColor}
        handleTextBackgroundColor={handleTextBackgroundColor}
        handleColorChange={handleColorChange}
      />
      <div className="border border-gray-300 bg-white p-3 rounded-lg w-full max-w-4xl flex flex-col items-center justify-center">
        <p className="my-2 font-medium text-gray-800">Canvas</p>
        <div className="w-full mx-auto overflow-auto">
          <canvas
            ref={canvasRef}
            className="border border-dashed border-gray-400 rounded-lg w-full h-auto max-w-full"
          ></canvas>
        </div>
      </div>

      <button
        className="bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-lg text-white font-semibold transition "
        onClick={() => handleSaveCanvas({ canvasId, canvas })}
      >
        Save Canvas
      </button>
    </div>
  );
};

export default CanvasPage;
