import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signin from "./components/Signin";
import Fan from "./components/Fan";
import SignupForm from "./components/SignUp";
import Join from "./components/Join";
import Note from "./components/Note";
import RestoreNotes from "./components/RestoreNotes";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Fan />} /> */}
        <Route path="/signin" element={<Signin />} />
        <Route path="/fan" element={<Fan />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/join" element={<Join />} />
        <Route path="/note" element={<Note />}/>
        <Route path="/restorenotes" element={<RestoreNotes/>}/>
        
      </Routes>
    </Router>
  );
};

export default App;
