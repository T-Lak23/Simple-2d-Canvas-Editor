import { PencilBrush } from "fabric";

export const handleDrawing = ({ canvas, selectedColor, setIsDrawingMode }) => {
  if (!canvas) return;

  canvas.isDrawingMode = true;
  setIsDrawingMode(true);
  if (!canvas.freeDrawingBrush) {
    canvas.freeDrawingBrush = new PencilBrush(canvas);
  }
  canvas.freeDrawingBrush.color = selectedColor;
  canvas.freeDrawingBrush.width = 3;
  canvas.renderAll();
};

export const handleEraser = ({ canvas, selectedBackgroundColor }) => {
  if (!canvas) return;
  canvas.isDrawingMode = false;
  canvas.isDrawingMode = true;
  const eraser = new PencilBrush(canvas);
  eraser.color = selectedBackgroundColor;
  eraser.width = 20;
  canvas.freeDrawingBrush = eraser;
  canvas.renderAll();
};

export const disableDrawing = ({ canvas, setIsDrawingMode }) => {
  if (!canvas) return;
  canvas.isDrawingMode = false;
  setIsDrawingMode(false);
  canvas.renderAll();
};
