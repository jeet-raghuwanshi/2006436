import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AllTrainsPage from "./pages/AllTrainsPage";
import SingleTrainPage from "./pages/SingleTrainPage";

// Dummy train data
const dummyTrains = [
  {
    trainName: "Dummy Exp",
    trainNumber: "2314",
    departureTime: { Hours: 21, Minutes: 35, Seconds: 0 },
    seatsAvailable: { sleeper: 3, AC: 1 },
    price: { sleeper: 2, AC: 5 },
    delayedBy: 15,
  },
  {
    trainName: "Mumbai Exp",
    trainNumber: "2311",
    departureTime: { Hours: 23, Minutes: 55, Seconds: 0 },
    seatsAvailable: { sleeper: 6, AC: 7 },
    price: { sleeper: 554, AC: 1854 },
    delayedBy: 5,
  },
  // Add more dummy trains here...
];

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AllTrainsPage trains={dummyTrains} />} />
        <Route
          path="/train/:trainNumber"
          element={<SingleTrainPage trains={dummyTrains} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
