import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../src/components/Header/Header";
import Main from "../src/components/Main/Main";
import VideoUploadPage from "../src/pages/uploadPages/VideoUploadPage";
import VideoDetailsPage from "../src/pages/uploadPages/VideoDetailsPage";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/upload" element={<VideoUploadPage />} />
        <Route path="/videos/:id" element={<VideoDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
