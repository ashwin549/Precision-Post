import Link from "next/link";
import {
  Bell,
  CircleUser,
  Home,
  LineChart,
  Menu,
  Package,
  Package2,
  Search,
  ShoppingCart,
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
import Delivery from "./Delivery";
import { useEffect, useState } from "react";
import Image from "next/image";
import img from "../../../public/indiapost_logo_L.png"
export const description =
  "A products dashboard with a sidebar navigation and a main content area. The dashboard has a header with a search input and a user menu. The sidebar has a logo, navigation links, and a card with a call to action. The main content area shows an empty state with a call to action.";

const deliveries = [
  {
    id: "DEL001",
    location: "Connaught Place, New Delhi",
    arrivalDate: "2024-02-15",
    expectedTimeSlot: "10:00 AM - 12:00 PM",
    ecoFriendly: true,
    priorityDelivery: false,
  },
  {
    id: "DEL002",
    location: "Khan Market, New Delhi",
    arrivalDate: "2024-02-16",
    expectedTimeSlot: "2:00 PM - 4:00 PM",
    ecoFriendly: false,
    priorityDelivery: true,
  },
  {
    id: "DEL003",
    location: "Hauz Khas, New Delhi",
    arrivalDate: "2024-02-17",
    expectedTimeSlot: "11:00 AM - 1:00 PM",
    ecoFriendly: true,
    priorityDelivery: false,
  },
];

export function Dashboard() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
      if (darkMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }, [darkMode]);
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
              {/* <Package2 className="h-6 w-6" /> */}
              <span className="gap-4">PrecisionPost</span>
            </Link>
            <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
              <Bell className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
          </div>
          <div className="flex-1">
            <nav className="grid gap-4 px-2 lg:px-4 text-sm font-medium ">
              <Link
                href="/users/profile"
                className="flex items-center gap-3 px-3 py-2 rounded-lg hover:text-gray-600"
              >
                <Home className="h-4 w-4" />
                Your Profile
              </Link>
              <Link
                href="/users/expected"
                className="flex items-center gap-3 px-3 py-2 rounded-lg bg-muted/40 hover:text-gray-600  text-primary"
              >
                <ShoppingCart className="h-4 w-4" />
                Expected Deliveries
                <Badge className="ml-auto flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white">
                  3
                </Badge>
              </Link>
              <Link
                href="/users/delivered"
                className="flex items-center gap-3 px-3 py-2  rounded-lg  hover:text-gray-600"
              >
                <Package className="h-4 w-4" />
                Delivered Orders
              </Link>
              {/* <Link
                href="#"
                className="flex items-center gap-3 px-3 py-2 rounded-lg hover:text-primary"
              >
                <Users className="h-4 w-4" />
                Customers
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 px-3 py-2 rounded-lg hover:text-primary"
              >
                <LineChart className="h-4 w-4" />
                Analytics
              </Link> */}
            </nav>
          </div>
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

        {/* Deliveries Section */}
        <main className="p-4">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-lg font-bold">Your Expected Deliveries</h1>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {deliveries.length > 0 ? (
              deliveries.map((delivery) => (
                <Delivery
                  key={delivery.id}
                  id={delivery.id}
                  location={delivery.location}
                  arrivalDate={delivery.arrivalDate}
                  expectedTimeSlot={delivery.expectedTimeSlot}
                  ecoFriendly={delivery.ecoFriendly}
                  priorityDelivery={delivery.priorityDelivery}
                />
              ))
            ) : (
              <div className="flex flex-col items-center text-center">
                <h3 className="text-2xl font-bold">No Deliveries Expected</h3>
                <p className="text-sm text-muted-foreground">
                  You will be notified as soon as a delivery is scheduled.
                </p>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

