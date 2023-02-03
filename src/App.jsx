import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./Components/Login/Login";
import "./App.css";
import { AuthProvider, ValidateRoute } from "./Context/authContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route
              path="/"
              element={
                <ValidateRoute>
                  <h1>Hola</h1>
                </ValidateRoute>
              }
            />
            <Route path="/login" element={<Login />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
