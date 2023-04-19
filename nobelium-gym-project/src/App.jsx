import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Plans from "./pages/plans/Plans";
import NotFound from "./pages/notFound/NotFound";
import Footer from "./components/footer/Footer";
import Register from "./pages/Register/Register";
import Login from "./pages/login/Login";
import PrivateRoute from "./components/PrivateRoute"

function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element = {<PrivateRoute><Home /></PrivateRoute>}/>
        <Route path="/about" element = {<PrivateRoute><About /></PrivateRoute>}/>
        <Route path="/contact" element = {<PrivateRoute><Contact /></PrivateRoute>}/>
        <Route path="/register" element = {<Register />}/>
        <Route path="/plans" element = {<Plans />}/>
        <Route path="/login" element = {<Login />}/>
        <Route path="*" element = {<NotFound />}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
