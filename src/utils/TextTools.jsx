import { IText, Textbox } from "fabric";

export const handleAddText = ({
  selectedBackgroundColor,
  selectedColor,
  canvas,
}) => {
  const textObj = new IText("Type here...", {
    left: 20,
    top: 150,
    fontSize: 24,
    fill: selectedColor,
    backgroundColor: selectedBackgroundColor,
  });

  canvas.add(textObj);
  canvas.setActiveObject(textObj);
  textObj.enterEditing();
  canvas.renderAll();
};

export const handleAddTextBox = ({
  selectedBackgroundColor,
  selectedColor,
  canvas,
}) => {
  const textBox = new Textbox("Type here...", {
    left: 10,
    top: 150,
    fontSize: 24,
    fill: selectedColor,
    backgroundColor: selectedBackgroundColor,
  });
  canvas.add(textBox);
  canvas.setActiveObject(textBox);
  textBox.enterEditing();
  canvas.renderAll();
};

export const handleTextBackgroundColor = (
  e,
  setTextBackgroundColor,
  textBackgroundColor,
  canvas
) => {
  const color = e.target.value;
  setTextBackgroundColor(color);
  if (!canvas) return;
  const activeObject = canvas.getActiveObject();
  activeObject.set({
    backgroundColor: textBackgroundColor,
  });
  canvas.renderAll();
};
