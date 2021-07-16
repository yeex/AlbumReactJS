import { useState } from "react";
import SearchBox from "./components/searchBox";


function App() {

  return (
    <div className="container">
      <div className="input-group mt-5">
        <SearchBox />
        <div className="input-group-append">
          <button className="input-group-text border-0"><small>Get Album Photos By Id</small></button>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 my-2">
            <div className="card border-0 shadow-sm">
              <div className="card-body">
                <div className="media align-items-center">
                  <div className="img-box">
                    <img className="img-fluid" alt="" />
                  </div>
                  <div className="media-body ml-2">
                    <h3><small className="text-black-50">title</small></h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        <div className="d-flex justify-content-center">
          <h2 className="font-bold text-black-20">No Post Yet!!</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
