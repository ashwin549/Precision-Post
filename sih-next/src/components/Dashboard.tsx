"use client";
import React, { useState } from "react";
import {
  ChevronRight,
  Package,
  Settings,
  User,
  MapPin,
  Mail,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
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
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const deliveries = [
  {
    id: "DEL001",
    recipient: "John Doe",
    address: "123 Main St",
    timeSlot: "10:00 AM - 12:00 PM",
    status: "Pending",
  },
  {
    id: "DEL002",
    recipient: "Jane Smith",
    address: "456 Elm St",
    timeSlot: "2:00 PM - 4:00 PM",
    status: "Completed",
  },
  {
    id: "DEL003",
    recipient: "Bob Johnson",
    address: "789 Oak St",
    timeSlot: "11:00 AM - 1:00 PM",
    status: "Pending",
  },
];

export default function Dashboard() {
  const [selectedDelivery, setSelectedDelivery] = useState(null);

  const handleStatusChange = (deliveryId, newStatus) => {
    console.log(`Updating delivery ${deliveryId} status to ${newStatus}`);
  };

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-6">
        <div className="flex items-center gap-4">
          <Package className="h-6 w-6" />
          <h1 className="text-lg font-semibold">Postal Delivery Dashboard</h1>
        </div>
        <div className="ml-auto flex items-center gap-4">
          <Input
            type="search"
            placeholder="Search deliveries..."
            className="w-[200px] lg:w-[300px]"
          />
          <Button size="icon" variant="ghost">
            <Settings className="h-5 w-5" />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size="icon" variant="ghost">
                <User className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      <main className="flex flex-1 overflow-hidden">
        <div className="flex flex-1 overflow-hidden">
          <div className="flex-1 overflow-auto p-6">
            <Tabs defaultValue="all">
              <div className="flex items-center justify-between">
                <TabsList>
                  <TabsTrigger value="all">All Deliveries</TabsTrigger>
                  <TabsTrigger value="pending">Pending</TabsTrigger>
                  <TabsTrigger value="completed">Completed</TabsTrigger>
                </TabsList>
              </div>
              <TabsContent value="all" className="mt-6">
                <Card>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>ID</TableHead>
                          <TableHead>Recipient</TableHead>
                          <TableHead>Time Slot</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {deliveries.map((delivery) => (
                          <TableRow
                            key={delivery.id}
                            onClick={() => setSelectedDelivery(delivery)}
                          >
                            <TableCell>{delivery.id}</TableCell>
                            <TableCell>{delivery.recipient}</TableCell>
                            <TableCell>{delivery.timeSlot}</TableCell>
                            <TableCell>
                              <Badge
                                variant={
                                  delivery.status === "Completed"
                                    ? "secondary"
                                    : "outline"
                                }
                              >
                                {delivery.status}
                              </Badge>
                            </TableCell>
                            <TableCell>
                              <Button
                                size="sm"
                                variant={
                                  delivery.status === "Completed"
                                    ? "outline"
                                    : "default"
                                }
                                onClick={() =>
                                  handleStatusChange(
                                    delivery.id,
                                    delivery.status === "Completed"
                                      ? "Pending"
                                      : "Completed"
                                  )
                                }
                              >
                                {delivery.status === "Completed"
                                  ? "Mark Pending"
                                  : "Mark Completed"}
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
          {selectedDelivery && (
            <Card className="w-1/3 overflow-hidden border-l">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Delivery Details
                </CardTitle>
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={() => setSelectedDelivery(null)}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div className="flex items-center space-x-4">
                    <Package className="h-6 w-6" />
                    <div>
                      <p className="text-sm font-medium leading-none">
                        {selectedDelivery.id}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Delivery ID
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <User className="h-6 w-6" />
                    <div>
                      <p className="text-sm font-medium leading-none">
                        {selectedDelivery.recipient}
                      </p>
                      <p className="text-sm text-muted-foreground">Recipient</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <MapPin className="h-6 w-6" />
                    <div>
                      <p className="text-sm font-medium leading-none">
                        {selectedDelivery.address}
                      </p>
                      <p className="text-sm text-muted-foreground">Address</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Mail className="h-6 w-6" />
                    <div>
                      <p className="text-sm font-medium leading-none">
                        {selectedDelivery.timeSlot}
                      </p>
                      <p className="text-sm text-muted-foreground">Time Slot</p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full"
                  onClick={() =>
                    handleStatusChange(
                      selectedDelivery.id,
                      selectedDelivery.status === "Completed"
                        ? "Pending"
                        : "Completed"
                    )
                  }
                >
                  {selectedDelivery.status === "Completed"
                    ? "Mark as Pending"
                    : "Mark as Completed"}
                </Button>
              </CardFooter>
            </Card>
          )}
        </div>
      </main>
    </div>
  );
}
