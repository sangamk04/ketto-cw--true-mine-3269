import React from "react";
import { Route, Routes } from "react-router-dom";
import RequiredAuth from "../hoc/RequiredAuth";
import BrowseFundraiser from "./BrowseFundraiser";
import Homepage from "./Homepage";
import HowItWorks from "./HowItWorks";
import NewFundRaiser from "./NewFundRaiser";
import NewFundRaiser2 from "./NewFundRaiser2";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route
        path="/crowdfunding/fundraisers/"
        element={<BrowseFundraiser />}
      ></Route>
      <Route
        path="/new/crowdfunding/type=:cat"
        element={
          // <RequiredAuth>
          <NewFundRaiser2 />
          // </RequiredAuth>
        }
      ></Route>
      <Route path="/crowdfunding/fundraisers/:name"></Route>
      <Route path="/crowdfunding" element={<HowItWorks />}></Route>
    </Routes>
  );
};

export default MainRoutes;
