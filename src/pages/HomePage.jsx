import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/firestore";
import { useNavigate } from "react-router-dom";
import { SquarePen } from "lucide-react";
const HomePage = () => {
  const navigate = useNavigate();
  const handleCreateCanvas = async () => {
    try {
      const docRef = await addDoc(collection(db, "canvases"), {
        canavasData: null,
        createdAt: new Date().toISOString(),
      });
      navigate(`/canvas/${docRef.id}`);
    } catch (error) {
      console.log("Cannot create canvas", error);
    }
  };
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center  bg-gray-100 ">
      <h1 className="text-center my-3 font-semibold text-xl flex items-center gap-2">
        <SquarePen size={18} />
        Canvas
      </h1>
      <div className="md:h-4/5 h-2/3  w-4/5 bg-white rounded-xl shadow-md flex flex-col gap-3 justify-center items-center">
        <h1 className="text-3xl font-bold">Welcome</h1>
        <p className="text-gray-500 font-medium">
          Start a new drawing in a clean canvas
        </p>
        <button
          onClick={handleCreateCanvas}
          className="bg-black text-white px-4 py-3 rounded-lg cursor-pointer hover:bg-gray-700 transition"
        >
          Create Canvas
        </button>
        <p className="text-gray-500 font-medium">
          You can text, shapes and pen strokes
        </p>
        <p className="text-gray-500 font-medium">
          Save your progress as you go
        </p>
      </div>
    </div>
  );
};

export default HomePage;
