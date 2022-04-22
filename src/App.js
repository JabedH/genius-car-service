import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Pages/Home/Home/Home";
import About from "./Components/Pages/About/About";
import Header from "./Components/Pages/Shared/Header/Header";
import Footer from "./Components/Pages/Shared/Footer/Footer";
import ServiceDetails from "./Components/ServiceDetails/ServiceDetails";
import Notfound from "./Components/Pages/Shared/Notfound/Notfound";
import Login from "./Components/Pages/Login/Login/Login";
import Register from "./Components/Pages/Login/Register/Register";
import RequireAuth from "./Components/Pages/Login/RequireAuth/RequireAuth";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/service/:serviceId" element={<ServiceDetails />} />
        <Route
          path="/About"
          element={
            <RequireAuth>
              <About />
            </RequireAuth>
          }
        />
        <Route path="Login" element={<Login />} />
        <Route path="Register" element={<Register />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
