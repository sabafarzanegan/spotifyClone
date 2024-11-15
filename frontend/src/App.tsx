import { Route, Routes } from "react-router-dom";
import { Button } from "./components/ui/button";
import Home from "./pages/Home";
import AuthcallbackPage from "./pages/AuthcallbackPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/authcallback" element={<AuthcallbackPage />} />
      </Routes>
    </>
  );
}

export default App;
