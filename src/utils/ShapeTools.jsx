import { Circle, Rect } from "fabric";

export const handleAddRectangle = ({ selectedColor, canvas }) => {
  const rect = new Rect({
    top: 100,
    left: 5,
    fill: selectedColor,
    width: 100,
    height: 90,
  });

  canvas.add(rect);
  canvas.setActiveObject(rect);
  canvas.renderAll();
};

export const handleAddCircle = ({ selectedColor, canvas }) => {
  const circle = new Circle({
    top: 100,
    left: 5,
    fill: selectedColor,
    radius: 50,
  });
  canvas.add(circle);
  canvas.setActiveObject(circle);
  canvas.renderAll();
};
