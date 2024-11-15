import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import AuthcallbackPage from "./pages/AuthcallbackPage";
import { AuthenticateWithRedirectCallback } from "@clerk/clerk-react";
import Mainlayout from "./components/mainLayout/Mainlayout";
import Chat from "./pages/Chat";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Mainlayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<Chat />} />
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
