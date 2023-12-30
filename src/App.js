import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Header from "../src/components/Header/Header";
import VideoUploadPage from "../src/pages/VideoUploadPage";
import VideoDetailsPage from "./pages/VideoDetailsPage";
import HomePage from "./pages/HomePage";
// import { useParams } from "react-router-dom";


function App() {
  // const {videoId} = useParams();
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
