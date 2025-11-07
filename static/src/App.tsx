import { APITester } from "./APITester";
import { BrowserRouter, Link, Route, Routes, } from "react-router";
import "./bootstrap.min.css";
import "./index.css";

import logo from "./logo.svg";
import reactLogo from "./react.svg";

import Header from "./components/Header";

// pages
import GetAllPage from "./pages/GetAllPage";

export function App() {
  return (<>
    <BrowserRouter>
      <Header />
      <div className="container d-flex flex-column align-items-center">
        <div className="d-flex p-4 gap-3">
          <button className="btn btn-primary px-5">
            GET
          </button>
          <button className="btn btn-primary px-5">
            GET
          </button>
          <button className="btn btn-primary px-5">
            POST
          </button>
          <button className="btn btn-primary px-5">
            PATCH
          </button>
          <button className="btn btn-primary px-5">
            DELETE
          </button>
        </div>
        <div className="d-flex p-4">
          <Routes>
            <Route path="/" element={<GetAllPage />}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  </>
  );
}

export default App;
