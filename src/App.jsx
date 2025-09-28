import { BrowserRouter, Routes, Route } from "react-router-dom";
import DecisionTreeLogger from "./components/DecisionTreeLogger/DecisionTreeLogger.jsx";
import AuthPage from "./pages/AuthPage.jsx";
import { PrivateRoute, PublicRoute } from "./routes/guards.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path="/auth" element={<AuthPage />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<DecisionTreeLogger />} />
        </Route>
        <Route path="*" element={<DecisionTreeLogger />} />
      </Routes>
    </BrowserRouter>
  );
}
