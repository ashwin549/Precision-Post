import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";
import { Loader2 } from "lucide-react";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

export interface DeliveryProps {
  id: string;
  location: string;
  arrivalDate: string;
  expectedTimeSlot: string;
  ecoFriendly: boolean;
  priorityDelivery: boolean;
}

export default function Delivery({
  id,
  location,
  arrivalDate,
  expectedTimeSlot: initialExpectedTimeSlot,
  ecoFriendly: initialEcoFriendly,
  priorityDelivery: initialPriorityDelivery,
}: DeliveryProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [timeSlots, setTimeSlots] = useState<string[]>([]);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(
    initialExpectedTimeSlot
  );
  const [ecoFriendly, setEcoFriendly] = useState(initialEcoFriendly);
  const [priorityDelivery, setPriorityDelivery] = useState(
    initialPriorityDelivery
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const predictBestTimes = () => {
    setIsLoading(true);
    // Simulating API call for predicting time slots based on user history and preferences
    setTimeout(() => {
      let predictedSlots;
      if (ecoFriendly) {
        predictedSlots = [
          "5:00 PM - 6:00 PM",
          "6:00 PM - 7:00 PM",
          "7:00 PM - 8:00 PM",
        ];
      } else if (priorityDelivery) {
        predictedSlots = [
          "9:00 AM - 10:00 AM",
          "10:00 AM - 11:00 AM",
          "11:00 AM - 12:00 PM",
        ];
      } else {
        predictedSlots = [
          "1:00 PM - 2:00 PM",
          "2:00 PM - 3:00 PM",
          "3:00 PM - 4:00 PM",
        ];
      }
      setTimeSlots(predictedSlots);
      setIsLoading(false);
    }, 2000);
  };

  const handleEcoFriendlyChange = (checked: boolean) => {
    setEcoFriendly(checked);
    setPriorityDelivery(false);
    setSelectedTimeSlot("");
    setTimeSlots([]);
  };

  const handlePriorityDeliveryChange = (checked: boolean) => {
    setPriorityDelivery(checked);
    setEcoFriendly(false);
    setSelectedTimeSlot("");
    setTimeSlots([]);
  };

  const handleSaveChanges = () => {
    setIsModalOpen(false);
    // Simulate saving the updated time slot to the backend
  };

  return (
    <Card className="mb-4 shadow-md">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">{`Delivery #${id}`}</CardTitle>
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center text-sm">
            <span className="text-muted-foreground">Location:</span>
            <span className="font-medium">{location}</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-muted-foreground">Arrival Date:</span>
            <span className="font-medium">{arrivalDate}</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-muted-foreground">Expected Time Slot:</span>
            <span className="font-medium">{selectedTimeSlot}</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-muted-foreground">Eco-Friendly:</span>
            <span
              className={`font-medium ${
                ecoFriendly ? "text-green-600" : "text-red-600"
              }`}
            >
              {ecoFriendly ? "Yes" : "No"}
            </span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-muted-foreground">Priority Delivery:</span>
            <span
              className={`font-medium ${
                priorityDelivery ? "text-green-600" : "text-red-600"
              }`}
            >
              {priorityDelivery ? "Yes" : "No"}
            </span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-4">
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogTrigger asChild>
            <Button variant="default" size="sm" className="w-full">
              Manage Delivery Preferences
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[900px]">
            <DialogHeader>
              <DialogTitle>Manage Your Delivery</DialogTitle>
            </DialogHeader>
            <div className="grid grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>Delivery Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div>
                      <Label>Order ID:</Label>
                      <p>{id}</p>
                    </div>
                    <div>
                      <Label>Location:</Label>
                      <p>{location}</p>
                    </div>
                    <div>
                      <Label>Arrival Date:</Label>
                      <p>{arrivalDate}</p>
                    </div>
                    <div>
                      <Label>Current Time Slot:</Label>
                      <p>{selectedTimeSlot}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="eco-friendly">
                        Eco-Friendly Delivery:
                      </Label>
                      <Switch
                        id="eco-friendly"
                        checked={ecoFriendly}
                        onCheckedChange={handleEcoFriendlyChange}
                      />
                    </div>
                    {ecoFriendly && (
                      <p className="text-sm text-green-500">
                        Thank you for choosing the eco-friendly option. By doing
                        this, you're helping to reduce our carbon footprint and
                        making a positive impact on the environment.
                      </p>
                    )}
                    <div className="flex items-center justify-between">
                      <Label htmlFor="priority-delivery">
                        Priority Delivery:
                      </Label>
                      <Switch
                        id="priority-delivery"
                        checked={priorityDelivery}
                        onCheckedChange={handlePriorityDeliveryChange}
                      />
                    </div>
                    {priorityDelivery && (
                      <p className="text-sm text-muted-foreground">
                        Your priority is our foremost concern. We will deliver
                        as quickly as possible to meet your schedule.
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Select Preferred Time</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      You can manually select a preferred time slot or let us
                      predict the best times for you to pickup delivery using
                      AI.
                    </p>
                    <Select
                      value={selectedTimeSlot}
                      onValueChange={setSelectedTimeSlot}
                    >
                      <SelectTrigger>Select a Time Slot</SelectTrigger>
                      <SelectContent>
                        <SelectItem value="9:00 AM - 10:00 AM">
                          9:00 AM - 10:00 AM
                        </SelectItem>
                        <SelectItem value="10:00 AM - 11:00 AM">
                          10:00 AM - 11:00 AM
                        </SelectItem>
                        <SelectItem value="11:00 AM - 12:00 PM">
                          11:00 AM - 12:00 PM
                        </SelectItem>
                        <SelectItem value="1:00 PM - 2:00 PM">
                          1:00 PM - 2:00 PM
                        </SelectItem>
                        <SelectItem value="2:00 PM - 3:00 PM">
                          2:00 PM - 3:00 PM
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <Button onClick={predictBestTimes} disabled={isLoading}>
                      <Button
                        onClick={predictBestTimes}
                        disabled={isLoading}
                        className="flex items-center"
                      >
                        {isLoading ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            {ecoFriendly
                              ? "Minimizing Carbon Footprint..."
                              : priorityDelivery
                              ? "Fastest Delivery for Priority Service..."
                              : "Predicting Optimal Time..."}
                          </>
                        ) : (
                          "Predict Best Time Based on Your Preferences"
                        )}
                      </Button>
                    </Button>
                    {timeSlots.length > 0 && (
                      <RadioGroup
                        className="mt-4"
                        value={selectedTimeSlot}
                        onValueChange={setSelectedTimeSlot}
                      >
                        {timeSlots.map((slot, index) => (
                          <div
                            key={index}
                            className="flex items-center space-x-2"
                          >
                            <RadioGroupItem value={slot} id={`slot-${index}`} />
                            <Label htmlFor={`slot-${index}`}>{slot}</Label>
                          </div>
                        ))}
                      </RadioGroup>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
            <Button onClick={handleSaveChanges} className="mt-4">
              Save Changes
            </Button>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
}
