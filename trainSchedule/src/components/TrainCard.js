import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const TrainCard = ({ train }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">{train.trainName}</Typography>
        <Typography variant="body2">
          Train Number: {train.trainNumber}
        </Typography>
        <Typography variant="body2">
          Departure Time: {train.departureTime.Hours}:
          {train.departureTime.Minutes}
        </Typography>
        <Typography variant="body2">
          Seats Available: Sleeper - {train.seatsAvailable.sleeper}, AC -{" "}
          {train.seatsAvailable.AC}
        </Typography>
        <Typography variant="body2">
          Price: Sleeper - {train.price.sleeper}, AC - {train.price.AC}
        </Typography>
        <Typography variant="body2">
          Delayed By: {train.delayedBy} minutes
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TrainCard;
