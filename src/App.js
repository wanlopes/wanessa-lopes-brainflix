import Header from "./components/Header";
import Main from "./components/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VideoUploadPage from "../src/pages/uploadPages/VideoUploadPage";
import VideoDetailsPage from "../src/pages/uploadPages/VideoDetailsPage";

function App() {
  return (
      <>
        <Header />
        <Main/>
      </>
  );
}

export default App;
