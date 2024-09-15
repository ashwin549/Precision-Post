import { Label } from "@radix-ui/react-label";
import React from "react";
import { CheckCircle, AlertCircle, BadgeInfoIcon } from "lucide-react"; // Using icons for a modern look
import { Button } from "../ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { Badge } from "../ui/badge"; // Adding badges for priority and eco-friendly delivery

export interface DeliveredProps {
  id: string;
  location: string;
  DeliveredDate: string;
  PredictedTimeSlot: string;
  ChangedTimeSlot: string;
  DeliveredTimeSlot: string;
  ecoFriendly: boolean;
  priorityDelivery: boolean;
  Delayed: string;
}

export default function DeliveredOrders({
  id,
  location,
  DeliveredDate,
  PredictedTimeSlot,
  ChangedTimeSlot,
  DeliveredTimeSlot,
  ecoFriendly,
  priorityDelivery,
  Delayed,
}: DeliveredProps) {
  return (
    <Card className="mb-6 shadow-lg hover:shadow-xl transition-shadow">
      <CardHeader className="flex items-center justify-between bg-muted/40 p-4 rounded-t-lg">
        <CardTitle className="text-lg font-semibold">
          {`${id} - ${location}`}
        </CardTitle>
        <div className="flex items-center gap-2">
          {ecoFriendly && <Badge variant="default">Eco-Friendly</Badge>}
          {priorityDelivery && <Badge variant="destructive">Priority</Badge>}
        </div>
      </CardHeader>
      <CardContent className="p-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col">
          <Label className="text-muted-foreground">Delivered Date</Label>
          <span className="font-medium">{DeliveredDate}</span>
        </div>
        <div className="flex flex-col">
          <Label className="text-muted-foreground">Predicted Time Slot</Label>
          <span className="font-medium">{PredictedTimeSlot}</span>
        </div>
        <div className="flex flex-col">
          <Label className="text-muted-foreground">Changed Time Slot</Label>
          <span className="font-medium">{ChangedTimeSlot || "N/A"}</span>
        </div>
        <div className="flex flex-col">
          <Label className="text-muted-foreground">Delivered Time Slot</Label>
          <span className="font-medium">{DeliveredTimeSlot}</span>
        </div>
        <div className="flex flex-col">
          <Label className="text-muted-foreground">Delivery Status</Label>
          {Delayed === "Yes" ? (
            <div className="flex items-center text-red-600">
              <AlertCircle className="h-5 w-5 mr-2" />
              <span className="font-medium">Delayed</span>
            </div>
          ) : (
            <div className="flex items-center text-green-600">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span className="font-medium">On Time</span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
