import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CanvasPage from "./pages/CanvasPage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/canvas/:canvasId" element={<CanvasPage />} />
      </Routes>
    </div>
  );
};

export default App;
