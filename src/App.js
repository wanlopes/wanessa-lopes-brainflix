import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import VideoUploadPage from "../src/pages/uploadPages/VideoUploadPage";
import VideoDetailsPage from "../src/pages/uploadPages/VideoDetailsPage";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/upload" element={<VideoUploadPage />} />
        <Route path="/video/:videoId" element={<VideoDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
