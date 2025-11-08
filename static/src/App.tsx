import { APITester } from "./APITester";
import { BrowserRouter, Link, Route, Routes, useNavigate } from "react-router";
import "./bootstrap.min.css";
import "./index.css";

import logo from "./logo.svg";
import reactLogo from "./react.svg";

import Header from "./components/Header";

// pages
import GetAllPage from "./pages/GetAllPage";
import GetPage from "./pages/GetPage";
import PostPage from "./pages/PostPage";

export function App() {

  return (<>
    <BrowserRouter>
      <Header />
      <div className="container d-flex flex-column align-items-center">
        <div className="d-flex p-4 gap-3">
          <Link to="/" className="btn btn-primary px-5">
            GET
          </Link>
          <Link to="/GET" className="btn btn-primary px-5">
            GET
          </Link>
          <Link to="/POST" className="btn btn-primary px-5">
            POST
          </Link>
          <Link to="/PATCH" className="btn btn-primary px-5">
            PATCH
          </Link>
          <button className="btn btn-primary px-5">
            DELETE
          </button>
        </div>
        <div className="d-flex p-4 w-100">
          <Routes>
            <Route path="/" element={<GetAllPage />}/>
            <Route path="/GET" element={<GetPage />}/>
            <Route path="/POST" element={<PostPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  </>
  );
}

export default App;
