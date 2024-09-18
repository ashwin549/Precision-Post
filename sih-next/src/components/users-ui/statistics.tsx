import React, { useState } from "react";
import { Badge } from "../ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { LightbulbIcon } from "lucide-react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Spinner from "./spinner"; // Ensure Spinner component is implemented

export default function Statistics() {
  const [predicting, setPredicting] = useState(false);
  const [predictions, setPredictions] = useState<string[]>([]);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedOfficeHours, setSelectedOfficeHours] = useState("");
  const [preferredTime, setPreferredTime] = useState("");
  const [location, setLocation] = useState("");

  const officeHoursOptions = [
    "8:00 AM - 4:00 PM",
    "9:00 AM - 5:00 PM",
    "10:00 AM - 6:00 PM",
    "11:00 AM - 7:00 PM",
    "12:00 PM - 8:00 PM",
  ];

  const handlePredict = () => {
    setPredicting(true);
    // Simulate an AI prediction request
    setTimeout(() => {
      setPredicting(false);
      setPredictions([
        "9:00 AM - 10:00 AM",
        "10:00 AM - 11:00 AM",
        "2:00 PM - 3:00 PM",
      ]);
    }, 2000); // Simulate a delay for the prediction
  };

  return (
    <>
      {/* Statistics Cards */}
      <div className="flex flex-row gap-4">
        <Card className="flex-1">
          <CardHeader>
            <CardTitle>Expected Deliveries</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-2 text-sm">
              <div className="flex items-center gap-2">
                <Badge variant="destructive">3</Badge>
                <span>Expected Deliveries</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="flex-1">
          <CardHeader>
            <CardTitle>Received Deliveries</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-2 text-sm">
              <div className="flex items-center gap-2">
                <Badge variant="secondary">3</Badge>
                <span>Received Deliveries</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="flex-1">
          <CardHeader>
            <CardTitle>Predict Time Slots</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-2 text-sm">
              <div className="flex items-center gap-2">
                <LightbulbIcon className="h-5 w-5" />
                <span>Predict best time to receive</span>
              </div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" size="sm" className="mt-2">
                    Predict
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Predict Time Slots</DialogTitle>
                    <DialogDescription>
                      Enter the details below to predict the best time slots for
                      your delivery. This will help us ensure you’re ready to
                      receive it at the most convenient time.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="flex flex-col gap-4">
                    <label className="text-sm">Date</label>
                    <input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="p-2 border rounded"
                    />

                    <label className="text-sm">Office Hours</label>
                    <select
                      value={selectedOfficeHours}
                      onChange={(e) => setSelectedOfficeHours(e.target.value)}
                      className="p-2 border rounded"
                    >
                      <option value="" disabled>
                        Select Office Hours
                      </option>
                      {officeHoursOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>

                    <label className="text-sm">Preferred Time</label>
                    <input
                      type="time"
                      value={preferredTime}
                      onChange={(e) => setPreferredTime(e.target.value)}
                      className="p-2 border rounded"
                    />

                    <label className="text-sm">Location</label>
                    <Input
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="Enter your location"
                      className="p-2 border rounded"
                    />

                    <Button onClick={handlePredict} className="mt-4">
                      Predict
                    </Button>

                    {predicting && (
                      <div className="mt-4 flex items-center gap-2">
                        <Spinner />
                        <span>Predicting best time slots...</span>
                      </div>
                    )}

                    {predictions.length > 0 && (
                      <div className="mt-4">
                        <h3 className="text-lg font-semibold">
                          You can expect your delivery at one of the following
                          time slots:
                        </h3>

                        <ul className="list-disc pl-5 mt-2">
                          {predictions.map((prediction, index) => (
                            <li key={index}>{prediction}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
