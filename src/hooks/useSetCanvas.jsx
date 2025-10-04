import { Canvas } from "fabric";
import { doc, getDoc } from "firebase/firestore";
import { useEffect } from "react";
import { db } from "../config/firestore";

export const useSetCanvas = ({
  canvasRef,
  canvas,
  setCanvas,
  canvasId,
  setSelectedBackgroundColor,
  setTextBackgroundColor,
  setSelectedColor,
  setSelectedObject,
  selectedBackgroundColor,
}) => {
  useEffect(() => {
    if (!canvasRef.current) return;

    if (canvas) canvas.dispose();

    const initialCanvas = new Canvas(canvasRef.current, {
      backgroundColor: selectedBackgroundColor,
    });

    const resizeCanvas = () => {
      const containerHeight = window.innerHeight * 0.7;
      const containerWidth = window.innerWidth * 0.8;
      initialCanvas.setDimensions({
        width: containerWidth,
        height: containerHeight,
      });
    };
    resizeCanvas();

    const loadExisting = async () => {
      const docRef = doc(db, "canvases", canvasId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        if (data?.canavasData) {
          initialCanvas.loadFromJSON(
            data.canavasData,
            initialCanvas.requestRenderAll.bind(initialCanvas)
          );
        }
      }
    };
    loadExisting();

    window.addEventListener("resize", resizeCanvas);

    const onSelection = (e) => {
      const obj = e.selected[0];
      setSelectedObject(obj);
      setSelectedColor(obj.fill);
      setTextBackgroundColor(obj?.backgroundColor);
    };

    initialCanvas.on("selection:created", onSelection);
    initialCanvas.on("selection:updated", onSelection);
    initialCanvas.on("background:changed", () => {
      setSelectedBackgroundColor(canvas.backgroundColor);
      const activeObject = initialCanvas.getActiveObject();
      setTextBackgroundColor(activeObject.backgroundColor);
    });

    const handleRemoveKeyDown = (e) => {
      if (e.key === "Delete" || e.key === "Backspace") {
        const activeObject = initialCanvas.getActiveObject();
        if (activeObject && !activeObject.isEditing) {
          initialCanvas.remove(activeObject);
          initialCanvas.renderAll();
        }
      }
    };
    window.addEventListener("keydown", handleRemoveKeyDown);

    initialCanvas.renderAll();
    setCanvas(initialCanvas);
    return () => {
      window.removeEventListener("keydown", handleRemoveKeyDown);
      if (canvas) {
        setCanvas("");
        initialCanvas.dispose();
        canvas.dispose();
      }
    };
  }, [canvasId]);
};
