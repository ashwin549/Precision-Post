import Link from "next/link";
import {
  Bell,
  CircleUser,
  HomeIcon,
  Menu,
  Package,
  Search,
  Truck,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import RouteMap from "./routemap";
import Image from "next/image";
import img from "../../../public/indiapost_logo_L.png";
import { ArrowRight } from "lucide-react";

export const description =
  "A dashboard for visualizing and optimizing delivery routes. The dashboard includes a map integration to show routes, options for dynamic route adjustments, and ETA calculations based on current conditions.";

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

export function Deliveryroutes() {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/30 md:block">
        <div className="flex h-full flex-col gap-4">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link
              href="/"
              className="flex items-center align-top text-lg font-bold"
            >
              <Image src={img} height={70} width={70} alt="India Post Logo" />
              <span className="gap-4">PrecisionPost</span>
            </Link>
            <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
              <Bell className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
          </div>
          <nav className="grid gap-4 px-2 lg:px-4 text-sm font-medium">
            <Link
              href="/admin/routes"
              className="flex items-center gap-3 px-3 py-2 rounded-lg font-bold text-primary"
            >
              <Truck className="h-4 w-4" />
              Manage Routes
            </Link>
            <Link
              href="/admin"
              className="flex items-center gap-3 px-3 py-2 rounded-lg hover:text-gray-600"
            >
              <Package className="h-4 w-4" />
              Delivery Overview
              <Badge className="ml-auto flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white">
                2
              </Badge>
            </Link>
            <Link
              href="/admin/profile"
              className="flex items-center gap-3 px-3 py-2  rounded-lg  hover:text-gray-600"
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

      {/* Main Content Area */}
      <div className="flex flex-col">
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
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>

        {/* Route Map and Deliveries Section */}
        <main className="p-4">
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <h1 className="text-lg font-bold">Delivery Schedule for Today</h1>
            </div>
            <RouteMap />
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {deliveries.length > 0 ? (
                deliveries.map((delivery, index) => (
                  <div
                    key={delivery.id}
                    className="relative p-4 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <Card className="relative">
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
                          <span className="font-medium">Time Slot:</span>
                          <span>{delivery.expectedTimeSlot}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="font-medium">Eco-Friendly:</span>
                          <Badge
                            variant={
                              delivery.ecoFriendly ? "secondary" : "default"
                            }
                          >
                            {delivery.ecoFriendly ? "Yes" : "No"}
                          </Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="font-medium">Priority:</span>
                          <Badge
                            variant={
                              delivery.priorityDelivery
                                ? "destructive"
                                : "default"
                            }
                          >
                            {delivery.priorityDelivery ? "High" : "Normal"}
                          </Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="font-medium">Status:</span>
                          <span>{delivery.status}</span>
                        </div>
                        <Button variant="outline" className="mt-2">
                          Mark as Completed
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                ))
              ) : (
                <div className="flex flex-col items-center text-center">
                  <h3 className="text-2xl font-bold">
                    No Deliveries Scheduled
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    You will be notified as soon as deliveries are scheduled.
                  </p>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
