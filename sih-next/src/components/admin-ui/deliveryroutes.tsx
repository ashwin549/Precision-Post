import Link from "next/link";
import {
  Bell,
  CircleUser,
  Earth,
  Home,
  HomeIcon,
  LineChart,
  MapPin,
  Menu,
  Package,
  Search,
  ShoppingCart,
  Truck,
  Users,
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
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import RouteMap from "./routemap";

export const description =
  "A dashboard for visualizing and optimizing delivery routes. The dashboard includes a map integration to show routes, options for dynamic route adjustments, and ETA calculations based on current conditions.";

const deliveryRoutes = [
  {
    id: "ROUTE001",
    startLocation: "123 Main St",
    endLocation: "456 Elm St",
    ecoFriendly: true,
    priorityDelivery: false,
    eta: "30 minutes",
  },
  {
    id: "ROUTE002",
    startLocation: "456 Elm St",
    endLocation: "789 Oak St",
    ecoFriendly: false,
    priorityDelivery: true,
    eta: "45 minutes",
  },
  {
    id: "ROUTE003",
    startLocation: "789 Oak St",
    endLocation: "123 Main St",
    ecoFriendly: true,
    priorityDelivery: false,
    eta: "50 minutes",
  },
];

export function Deliveryroutes() {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/30 md:block">
        <div className="flex h-full flex-col gap-4">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link
              href="/"
              className="flex items-center gap-2 text-lg font-bold"
            >
              <MapPin className="h-6 w-6" />
              <span>PrecisionPost</span>
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
              className="flex items-center gap-3 px-3 py-2 bg-muted/40 rounded-lg text-primary hover:text-gray-600"
            >
              <HomeIcon className="h-4 w-4" />
              Your Profile
            </Link>
          </nav>
          <div className="mt-auto p-4">
            <Card>
              <CardHeader className="p-2">
                <CardTitle>Feedback?</CardTitle>
                <CardDescription>
                  Provide Feedback so that we can deliver better.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-2">
                <Button size="sm" className="w-full">
                  Feedback
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
                placeholder="Search routes..."
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

        {/* Route Map and Routes Section */}
        <main className="p-4">
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <h1 className="text-lg font-bold">Best Routes for Today</h1>
            </div>
            <RouteMap />
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {deliveryRoutes.length > 0 ? (
                deliveryRoutes.map((route) => (
                  <Card
                    key={route.id}
                    className="p-4 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <CardHeader>
                      <CardTitle className="text-lg font-semibold">
                        Route {route.id}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-2">
                      <div className="flex items-center justify-between">
                        <span className="font-medium">Start Location:</span>
                        <span>{route.startLocation}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="font-medium">End Location:</span>
                        <span>{route.endLocation}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="font-medium">ETA:</span>
                        <span>{route.eta}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="font-medium">Eco-Friendly:</span>
                        <Badge
                          variant={route.ecoFriendly ? "secondary" : "default"}
                        >
                          {route.ecoFriendly ? "Yes" : "No"}
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="font-medium">Priority:</span>
                        <Badge
                          variant={
                            route.priorityDelivery ? "destructive" : "default"
                          }
                        >
                          {route.priorityDelivery ? "High" : "Normal"}
                        </Badge>
                      </div>
                      <Button variant="outline" className="mt-2">
                        Modify Route
                      </Button>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <div className="flex flex-col items-center text-center">
                  <h3 className="text-2xl font-bold">No Routes Available</h3>
                  <p className="text-sm text-muted-foreground">
                    You will be notified as soon as routes are scheduled.
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
