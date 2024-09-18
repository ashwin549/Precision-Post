import React, { useState } from "react";
import Link from "next/link";
import {
  Bell,
  CircleUser,
  Menu,
  Package,
  Package2,
  Search,
  Truck,
  Earth,
  Check,
  MapPin,
  HomeIcon,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import img from "../../../public/indiapost_logo_L.png";
// Assume we have a RouteMap component that accepts a center prop
import RouteMap from "@/components/admin-ui/routemap";

const deliveries = [
  {
    id: "DEL001",
    location: "Connaught Place, New Delhi",
    arrivalDate: "2024-02-15",
    expectedTimeSlot: "10:00 AM - 12:00 PM",
    ecoFriendly: true,
    priorityDelivery: false,
    status: "pending",
    deliveryTime: null,
  },
  {
    id: "DEL002",
    location: "Lajpat Nagar, New Delhi",
    arrivalDate: "2024-02-15",
    expectedTimeSlot: "1:00 PM - 3:00 PM",
    ecoFriendly: false,
    priorityDelivery: true,
    status: "pending",
    deliveryTime: null,
  },
  // Add more delivery objects as needed
];
const Sidebar = () => (
  <div className="hidden border-r bg-muted/30 md:block">
    <div className="flex h-full flex-col gap-4">
      <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
        <Link
          href="/"
          className="flex items-center align-top text-lg font-bold"
        >
          <Image src={img} height={70} width={70} alt="India Post Logo" />
          {/* <Package2 className="h-6 w-6" /> */}
          <span className="gap-4">PrecisionPost</span>
        </Link>
        <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
          <Bell className="h-4 w-4" />
          <span className="sr-only">Toggle notifications</span>
        </Button>
      </div>
      <nav className="grid gap-4 px-2 lg:px-4 text-sm font-medium">
        <Link
          href="/admin/delivery"
          className="flex items-center gap-3 px-3 py-2 rounded-lg hover:text-gray-600"
        >
          <Truck className="h-4 w-4" />
          Manage Routes
        </Link>
        <Link
          href="/admin/delivery"
          className="flex items-center gap-3 px-3 py-2 rounded-lg bg-muted/40 hover:text-gray-600  text-primary"
        >
          <Package className="h-4 w-4" />
          Delivery Overview
          <Badge className="ml-auto flex h-6 w-6 items-center justify-center rounded-full font-bold ">
            {deliveries.length}
          </Badge>
        </Link>
        <Link
          href="/admin/profile"
          className="flex items-center gap-3 px-3 py-2  rounded-lg hover:text-gray-600"
        >
          <HomeIcon className="h-4 w-4" />
          Your Profile
        </Link>
      </nav>
      <div className="mt-auto p-4">
        <Card>
          <CardHeader className="p-2">
            <CardTitle>Need Help?</CardTitle>
            <CardDescription>
              Contact support or provide feedback.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-2">
            <Button size="sm" className="w-full">
              Support
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  </div>
);

const Header = () => (
  <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
    <Button variant="outline" size="icon" className="md:hidden">
      <Menu className="h-5 w-5" />
    </Button>
    <form className="flex-1">
      <div className="relative">
        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search PrecisionPost..."
          className="w-full pl-10"
        />
      </div>
    </form>
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" size="icon" className="rounded-full">
          <CircleUser className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuItem>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </header>
);

const DeliveryCard = ({
  delivery,
  onStatusChange,
  onDeliveryTimeChange,
  onOutForDelivery,
  onPredictBestTime,
}) => {
  const isCompleted = delivery.status === "completed";

  return (
    <Card
      className={`p-4 shadow-sm hover:shadow-md transition-shadow ${
        isCompleted ? "bg-green-100" : ""
      }`}
    >
      <CardHeader>
        <CardTitle className="text-lg font-semibold">
          Delivery {delivery.id}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <span className="font-medium">Location:</span>
          <span>{delivery.location}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-medium">Arrival Date:</span>
          <span>{delivery.arrivalDate}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-medium">Expected Time Slot:</span>
          <span>{delivery.expectedTimeSlot}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-medium">Eco-Friendly:</span>
          <Badge variant={delivery.ecoFriendly ? "secondary" : "default"}>
            {delivery.ecoFriendly ? "Yes" : "No"}
          </Badge>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-medium">Priority:</span>
          <Badge
            variant={delivery.priorityDelivery ? "destructive" : "default"}
          >
            {delivery.priorityDelivery ? "High" : "Normal"}
          </Badge>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-medium">Status:</span>
          <Badge variant={isCompleted ? "success" : "default"}>
            {isCompleted ? "Completed" : "Pending"}
          </Badge>
        </div>
        {delivery.deliveryTime && (
          <div className="flex items-center justify-between">
            <span className="font-medium">Delivery Time:</span>
            <span>{delivery.deliveryTime}</span>
          </div>
        )}
        <div className="flex gap-2 mt-2">
          <Button
            variant={isCompleted ? "secondary" : "default"}
            className="w-full"
            onClick={() =>
              onStatusChange(delivery.id, isCompleted ? "pending" : "completed")
            }
          >
            {isCompleted ? "Mark as Pending" : "Mark as Completed"}
          </Button>
          <Select
            onValueChange={(value) => onDeliveryTimeChange(delivery.id, value)}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Enter Delivery Time" />
            </SelectTrigger>
            <SelectContent>
              {Array.from({ length: 24 }, (_, i) => i).map((hour) => (
                <SelectItem
                  key={hour}
                  value={`${hour.toString().padStart(2, "0")}:00`}
                >
                  {`${hour.toString().padStart(2, "0")}:00`}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <Button
          className="w-full mt-2"
          onClick={() => onOutForDelivery(delivery.id)}
        >
          Out for Delivery
        </Button>
        {/* <Button
          className="w-full mt-2"
          variant={"link"}
          onClick={() => onPredictBestTime(delivery.id)}
        >
          Predict Best Time Slot
        </Button> */}
        <Button className="w-full mt-2" variant={"link"}>
          <Link href="/admin/delivery">View Best Routes</Link>
        </Button>
      </CardContent>
    </Card>
  );
};


export function Postmandashboard() {
  const [deliveriesState, setDeliveriesState] = useState(deliveries);
  const [isRouteDialogOpen, setRouteDialogOpen] = useState(false);
  const [isTimePredictionDialogOpen, setTimePredictionDialogOpen] =
    useState(false);
  const [selectedDeliveryId, setSelectedDeliveryId] = useState(null);
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [optimizetext, setOptimizeText] = useState("Optimize Route");
  const [predictedTimeSlot, setPredictedTimeSlot] = useState(null);

  const handleStatusChange = (id, newStatus) => {
    setDeliveriesState((prevDeliveries) =>
      prevDeliveries.map((delivery) =>
        delivery.id === id ? { ...delivery, status: newStatus } : delivery
      )
    );
  };

  const handleDeliveryTimeChange = (id, time) => {
    setDeliveriesState((prevDeliveries) =>
      prevDeliveries.map((delivery) =>
        delivery.id === id ? { ...delivery, deliveryTime: time } : delivery
      )
    );
  };

  const handleOutForDelivery = (id) => {
    setSelectedDeliveryId(id);
    setRouteDialogOpen(true);
  };

  const handleOptimizeRoute = () => {
    setIsOptimizing(true);
    setOptimizeText("Optimizing routes, please wait...");

    // Simulate route optimization
    setTimeout(() => {
      setIsOptimizing(false);
      setOptimizeText("Routes Optimized. Check the Manage Routes section.");
    }, 2000);
  };

  const handlePredictBestTime = (id) => {
    setSelectedDeliveryId(id);
    setTimePredictionDialogOpen(true);
  };

  const handlePredictTimeSlot = () => {
    // Simulate time slot prediction
    setTimeout(() => {
      const predictedSlot = "2:00 PM - 4:00 PM"; // Example predicted slot
      setPredictedTimeSlot(predictedSlot);
      setDeliveriesState((prevDeliveries) =>
        prevDeliveries.map((delivery) =>
          delivery.id === selectedDeliveryId
            ? { ...delivery, deliveryTime: predictedSlot }
            : delivery
        )
      );
      setTimePredictionDialogOpen(false);
    }, 2000);
  };

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <Sidebar />
      <div className="flex flex-col">
        <Header />
        <main className="p-4">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-lg font-bold">
              Your Deliveries for Today in Optimized Order
            </h1>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {deliveriesState.map((delivery) => (
              <DeliveryCard
                key={delivery.id}
                delivery={delivery}
                onStatusChange={handleStatusChange}
                onDeliveryTimeChange={handleDeliveryTimeChange}
                onOutForDelivery={handleOutForDelivery}
                onPredictBestTime={handlePredictBestTime}
              />
            ))}
          </div>
        </main>
      </div>
      <Dialog open={isRouteDialogOpen} onOpenChange={setRouteDialogOpen}>
        <DialogContent className="sm:max-w-[800px]">
          <DialogHeader>
            <h2 className="text-lg font-bold">Optimize Route</h2>
          </DialogHeader>
          <div className="mt-4 flex flex-col gap-4">
            <RouteMap center={{ lat: 28.6139, lng: 77.209 }} />{" "}
            {/* Coordinates for New Delhi */}
            <div className="flex gap-2">
              <Button
                onClick={handleOptimizeRoute}
                disabled={isOptimizing}
                className="w-full"
              >
                {isOptimizing ? (
                  <>
                    <span className="animate-spin mr-2">&#9696;</span>
                    {optimizetext || "Optimizing routes, please wait..."}
                  </>
                ) : (
                  "Optimize Route"
                )}
              </Button>
            </div>
          </div>
          <div className="mt-4 flex justify-end gap-2">
            <Button variant="outline" onClick={() => setRouteDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setRouteDialogOpen(false)}>Confirm</Button>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog
        open={isTimePredictionDialogOpen}
        onOpenChange={setTimePredictionDialogOpen}
      >
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <h2 className="text-lg font-bold">Predict Best Time Slot</h2>
          </DialogHeader>
          <div className="mt-4">
            <p className="mb-2">
              Predict the best time slot for delivery based on current data and
              availability.
            </p>
            <div className="mb-4">
              <span className="font-medium">Predicted Time Slot:</span>
              <span className="ml-2 text-lg font-bold">
                {predictedTimeSlot || "Not yet predicted"}
              </span>
            </div>
            <Button onClick={handlePredictTimeSlot} className="w-full">
              Predict Time Slot
            </Button>
          </div>
          <div className="mt-4 flex justify-end gap-2">
            <Button
              variant="outline"
              onClick={() => setTimePredictionDialogOpen(false)}
            >
              Cancel
            </Button>
            <Button onClick={() => setTimePredictionDialogOpen(false)}>
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

