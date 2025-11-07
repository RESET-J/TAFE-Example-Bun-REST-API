import { APITester } from "./APITester";
import "./bootstrap.min.css";
import "./index.css";

import logo from "./logo.svg";
import reactLogo from "./react.svg";

import Header from "./components/Header";

// pages
import GetAllPage from "./pages/GetAllPage";

export function App() {
  return (<>
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
    </div>
  </>
  );
}

export default App;
