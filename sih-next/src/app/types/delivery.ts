export interface Delivery {
  id: string;
  recipientName: string;
  address: string;
  timeSlot: string;
  status: "Pending" | "Completed";
}

export interface NewDelivery {
  recipientName: string;
  address: string;
  timeSlot: string;
}
