import Link from "next/link";
import {
  Bell,
  CircleUser,
  Home,
  HomeIcon,
  LightbulbIcon,
  LineChart,
  Menu,
  Package,
  Package2,
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
import DeliveredOrders from "@/components/users-ui/Delivered";
import ProfilePostmen from './postmenprofile';


export const description =
  "A products dashboard with a sidebar navigation and a main content area. The dashboard has a header with a search input and a user menu. The sidebar has a logo, navigation links, and a card with a call to action. The main content area shows an empty state with a call to action.";

export function Profilepostmendashboard() {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/30 md:block">
        <div className="flex h-full flex-col gap-4">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link
              href="/"
              className="flex items-center gap-2 text-lg font-bold"
            >
              <Package2 className="h-6 w-6" />
              <span>PrecisionPost</span>
            </Link>
            <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
              <Bell className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
          </div>
          <div className="flex-1">
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
                className="flex items-center gap-3 px-3 py-2 rounded-lg hover:text-gray-600"
              >
                <Package className="h-4 w-4" />
                Delivery Overview
                <Badge className="ml-auto flex h-6 w-6 items-center justify-center rounded-full font-bold ">
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
                placeholder="Search products..."
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

        <main className="p-4 space-y-6">
          {/* Header Section */}
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-lg font-bold">Your Profile</h1>
          </div>
          <ProfilePostmen />
        </main>
      </div>
    </div>
  );
}
