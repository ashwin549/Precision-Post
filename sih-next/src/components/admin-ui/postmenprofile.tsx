import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import Image from "next/image";
import img from "../../../public/IMG-20240724-WA0023.jpg";

export default function ProfilePostmen() {
  const [name, setName] = useState("Keerthan Kumar C");
  const [location, setLocation] = useState("Manipal, Udupi-576104");
  const [phoneNumber, setPhoneNumber] = useState("+91 9591124158");
  const [rating, setRating] = useState("4.7/5");
  const [completedDeliveries, setCompletedDeliveries] = useState(120);

  return (
    <section className="bg-white rounded-lg shadow-lg w-full">
      {/* Upper Triangle */}
      <div className="relative bg-blue-100 p-4 rounded-t-lg">
        <div className="absolute inset-0 bg-blue-300 -skew-y-6"></div>
        <div className="relative z-10 flex items-center gap-6">
          <div className="w-24 h-24 rounded-full overflow-hidden">
            <Image src={img} alt="Profile Picture" width={96} height={96} />
          </div>
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold">{name}</h1>
            <p className="text-lg text-gray-700">Location: {location}</p>
            <p className="text-lg text-gray-700">Phone: {phoneNumber}</p>
          </div>
        </div>
      </div>

      {/* Lower Rectangle */}
      <Card className="mt-6">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">Statistics</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <span className="font-medium">Customer Rating:</span>
            <span className="text-lg font-bold">{rating}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-medium">Completed Deliveries:</span>
            <span className="text-lg font-bold">{completedDeliveries}</span>
          </div>
          <Button className="mt-4" variant="outline" size="sm">
            Edit Details
          </Button>
        </CardContent>
      </Card>
    </section>
  );
}
