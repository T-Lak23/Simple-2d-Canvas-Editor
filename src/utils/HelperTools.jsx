export const handleColorChange = ({ e, setSelectedColor, canvas }) => {
  const color = e.target.value;
  setSelectedColor(color);
  const activeObject = canvas.getActiveObject();
  if (activeObject) {
    activeObject.set("fill", color);
    canvas.renderAll();
  }
};

export const handleSelectedBackgroundColor = ({
  e,
  setSelectedBackgroundColor,
  canvas,
}) => {
  const color = e.target.value;
  setSelectedBackgroundColor(color);
  if (!canvas) return;
  canvas.set({
    backgroundColor: color,
  });
  canvas.renderAll();
};

export const removeSelected = ({ canvas }) => {
  const activeObject = canvas.getActiveObject();
  if (activeObject) {
    canvas.remove(activeObject);
    canvas.discardActiveObject();
    canvas.renderAll();
  }
};
