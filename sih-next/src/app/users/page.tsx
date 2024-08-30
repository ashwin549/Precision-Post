// pages/index.tsx

"use client";
import React, { useState } from "react";
import { Delivery, NewDelivery } from "@/app/types/delivery";
import { Button } from "@/components/ui/button";

const initialDeliveries: Delivery[] = [
  {
    id: "DEL001",
    recipientName: "John Doe",
    address: "123 Main St",
    timeSlot: "10:00 AM - 12:00 PM",
    status: "Pending",
  },
  {
    id: "DEL002",
    recipientName: "Jane Smith",
    address: "456 Elm St",
    timeSlot: "2:00 PM - 4:00 PM",
    status: "Completed",
  },
];

export default function Dashboard() {
  const [deliveries, setDeliveries] = useState<Delivery[]>(initialDeliveries);
  const [newDelivery, setNewDelivery] = useState<NewDelivery>({
    recipientName: "",
    address: "",
    timeSlot: "",
  });

  const handleSendDelivery = () => {
    const newId = `DEL00${deliveries.length + 1}`;
    const delivery: Delivery = {
      id: newId,
      ...newDelivery,
      status: "Pending",
    };
    setDeliveries([...deliveries, delivery]);
    setNewDelivery({ recipientName: "", address: "", timeSlot: "" });
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
        Postal Delivery Dashboard
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Section 1: Send Delivery */}
        <section className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-700 mb-6">
            Send a Delivery
          </h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendDelivery();
            }}
            className="space-y-4"
          >
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Recipient Name
              </label>
              <input
                type="text"
                value={newDelivery.recipientName}
                onChange={(e) =>
                  setNewDelivery({
                    ...newDelivery,
                    recipientName: e.target.value,
                  })
                }
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Address
              </label>
              <input
                type="text"
                value={newDelivery.address}
                onChange={(e) =>
                  setNewDelivery({ ...newDelivery, address: e.target.value })
                }
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Time Slot
              </label>
              <input
                type="text"
                value={newDelivery.timeSlot}
                onChange={(e) =>
                  setNewDelivery({ ...newDelivery, timeSlot: e.target.value })
                }
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <Button onClick={handleSendDelivery}>Send Delivery</Button>
          </form>
        </section>

        {/* Section 2: View Deliveries */}
        <section className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-700 mb-6">
            Your Deliveries
          </h2>

          <div className="space-y-6">
            <h3 className="text-lg font-medium text-gray-600">
              Sent Deliveries
            </h3>
            <ul className="space-y-4">
              {deliveries.map((delivery) => (
                <li
                  key={delivery.id}
                  className="border border-gray-200 rounded-lg p-4 bg-gray-50 hover:bg-gray-100 transition duration-200"
                >
                  <p>
                    <strong className="text-gray-600">ID:</strong> {delivery.id}
                  </p>
                  <p>
                    <strong className="text-gray-600">Recipient:</strong>{" "}
                    {delivery.recipientName}
                  </p>
                  <p>
                    <strong className="text-gray-600">Address:</strong>{" "}
                    {delivery.address}
                  </p>
                  <p>
                    <strong className="text-gray-600">Time Slot:</strong>{" "}
                    {delivery.timeSlot}
                  </p>
                  <p>
                    <strong className="text-gray-600">Status:</strong>
                    <span
                      className={`ml-2 inline-block rounded-full px-3 py-1 text-xs font-medium ${
                        delivery.status === "Completed"
                          ? "bg-green-200 text-green-700"
                          : "bg-yellow-200 text-yellow-700"
                      }`}
                    >
                      {delivery.status}
                    </span>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
