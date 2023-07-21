import React from "react";
import { useParams } from "react-router-dom";
import TrainCard from "./TrainCard";

const SingleTrainPage = ({ trains }) => {
  const { trainNumber } = useParams();
  const train = trains.find((t) => t.trainNumber === trainNumber);

  return (
    <div>
      <h1>Single Train Page</h1>
      {train ? <TrainCard train={train} /> : <p>Train not found!</p>}
    </div>
  );
};

export default SingleTrainPage;
