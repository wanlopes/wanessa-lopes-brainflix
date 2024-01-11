import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Header from "../src/components/Header/Header";
import VideoUploadPage from "../src/pages/VideoUploadPage";
import VideoDetailsPage from "./pages/VideoDetailsPage";
import HomePage from "./pages/HomePage";
// import { useEffect } from "react";
// import axios from "axios";


function App() {
  // useEffect(() => {
  //   const fecthData = async () => {
  //     const { data } = await axios.get(`${baseURL}/list`);
  //   };
  //   fecthData();
  // });
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/upload" element={<VideoUploadPage />} />
        <Route path="/videos/:id" element={<VideoDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
