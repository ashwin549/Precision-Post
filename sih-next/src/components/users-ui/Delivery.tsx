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
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("");
  const [ecoFriendly, setEcoFriendly] = useState(initialEcoFriendly);
  const [priorityDelivery, setPriorityDelivery] = useState(
    initialPriorityDelivery
  );
  const [expectedTimeSlot, setExpectedTimeSlot] = useState(
    initialExpectedTimeSlot
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const predictBestTimes = () => {
    setIsLoading(true);
    // Simulating API call
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
    if (selectedTimeSlot) {
      setExpectedTimeSlot(selectedTimeSlot);
    }
    setIsModalOpen(false);
    // Here you would typically send the updated data to your backend
  };

  const renderTimeSlotSelection = () => (
    <>
      <Button onClick={predictBestTimes} disabled={isLoading}>
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            AI MODEL Predicting best times...
          </>
        ) : (
          "Predict best times for you"
        )}
      </Button>
      {timeSlots.length > 0 && (
        <RadioGroup
          className="mt-4"
          value={selectedTimeSlot}
          onValueChange={setSelectedTimeSlot}
        >
          {timeSlots.map((slot, index) => (
            <div key={index} className="flex items-center space-x-2">
              <RadioGroupItem value={slot} id={`slot-${index}`} />
              <Label htmlFor={`slot-${index}`}>{slot}</Label>
            </div>
          ))}
        </RadioGroup>
      )}
    </>
  );

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
            <span className="font-medium">{expectedTimeSlot}</span>
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
            <Button variant="outline" size="sm" className="w-full">
              View Order Details
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[900px]">
            <DialogHeader>
              <DialogTitle>Order Details</DialogTitle>
            </DialogHeader>
            <div className="grid grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>Order Information</CardTitle>
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
                      <p>{expectedTimeSlot}</p>
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
                      <p className="text-sm text-muted-foreground">
                        Note: Eco-friendly delivery may extend delivery time to
                        reduce carbon footprint.
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
                        Note: Priority delivery incurs additional charges for
                        faster service.
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Time Slot Selection</CardTitle>
                </CardHeader>
                <CardContent>
                  {ecoFriendly ? (
                    <div className="space-y-4">
                      <p className="text-sm text-muted-foreground">
                        Eco-friendly delivery times are optimized to reduce
                        carbon footprint. This may result in slightly longer
                        delivery times.
                      </p>
                      {renderTimeSlotSelection()}
                    </div>
                  ) : priorityDelivery ? (
                    <div className="space-y-4">
                      <p className="text-sm text-muted-foreground">
                        Priority delivery offers faster delivery times at an
                        additional cost.
                      </p>
                      {renderTimeSlotSelection()}
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <p className="text-sm text-muted-foreground">
                        Select a delivery option or predict the best times for
                        standard delivery.
                      </p>
                      {renderTimeSlotSelection()}
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
            <div className="mt-4 flex justify-end space-x-2">
              <Button variant="outline" onClick={() => setIsModalOpen(false)}>
                Cancel
              </Button>
              <Button
                onClick={handleSaveChanges}
                disabled={
                  !selectedTimeSlot &&
                  ecoFriendly === initialEcoFriendly &&
                  priorityDelivery === initialPriorityDelivery
                }
              >
                Save Changes
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
}
