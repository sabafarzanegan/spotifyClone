import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import AuthcallbackPage from "./pages/AuthcallbackPage";
import { AuthenticateWithRedirectCallback } from "@clerk/clerk-react";
import Mainlayout from "./components/mainLayout/Mainlayout";
import Chat from "./pages/Chat";
import AlbumPage from "./pages/AlbumPage";
import Adminpage from "./pages/Adminpage";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Mainlayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Adminpage />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/albums/:albumId" element={<AlbumPage />} />
        </Route>
        <Route
          path="/sso-callback"
          element={
            <AuthenticateWithRedirectCallback signUpForceRedirectUrl="/authcallback" />
          }
        />
        <Route path="/authcallback" element={<AuthcallbackPage />} />
      </Routes>
    </>
  );
}

export default App;
