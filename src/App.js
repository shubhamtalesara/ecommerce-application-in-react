import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./Main";
import Productcollectionspage from "./Components/Productcollectionspage";
import Productspage from "./Components/Productspage";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/Productcollectionspage" element={<Productcollectionspage/>}/>
        <Route path="/productspage" element={<Productspage/>}/>
      </Routes>
    </div>
  );
}

export default App;
