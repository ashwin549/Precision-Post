import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "../ui/dialog";
import Image from "next/image";
import img from "../../../public/IMG-20240724-WA0023.jpg";

export default function Profile() {
  const [name, setName] = useState("Keerthan Kumar C");
  const [officeHours, setOfficeHours] = useState("9am - 5pm");
  const [description, setDescription] = useState(
    "I am a dedicated software engineer with a passion for developing innovative solutions."
  );
  const [address, setAddress] = useState("Saket, New Delhi");
  const [location, setLocation] = useState("Delhi, India");
  const [country, setCountry] = useState("India");
  const [phoneNumber, setPhoneNumber] = useState("+91 9591124158");

  const editField = (label, value, setValue) => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="mt-2">
          Edit
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit {label}</DialogTitle>
          <DialogDescription>
            Change your {label} and save your updates.
          </DialogDescription>
        </DialogHeader>
        <Input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="mt-4"
        />
        <Button onClick={() => alert(`${label} updated!`)} className="mt-4">
          Save
        </Button>
      </DialogContent>
    </Dialog>
  );

  return (
    <section className="bg-white rounded-lg shadow-lg w-full">
      <div className="flex flex-row items-center gap-10">
        {/* Profile Image */}
        <div className="w-25% h-25% p-2 rounded-full overflow-hidden">
          <Image src={img} alt="profile pic" width={400} height={400} />
        </div>

        {/* Profile Details */}
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-3xl font-semibold">{name}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-lg text-muted-foreground mt-2">
                  Full Name: {name}
                </p>
                {editField("Name", name, setName)}
              </div>

              <div>
                <p className="text-lg text-muted-foreground mt-2">
                  Office Hours: {officeHours}
                </p>
                {editField("Office Hours", officeHours, setOfficeHours)}
              </div>

              <div>
                <p className="text-lg text-muted-foreground mt-2">
                  Description: {description}
                </p>
                {editField("Description", description, setDescription)}
              </div>

              <div>
                <p className="text-lg text-muted-foreground mt-2">
                  Address: {address}
                </p>
                {editField("Address", address, setAddress)}
              </div>

              <div>
                <p className="text-lg text-muted-foreground mt-2">
                  Location: {location}
                </p>
                {editField("Location", location, setLocation)}
              </div>

              <div>
                <p className="text-lg text-muted-foreground mt-2">
                  Country: {country}
                </p>
                {editField("Country", country, setCountry)}
              </div>

              <div>
                <p className="text-lg text-muted-foreground mt-2">
                  Phone Number: {phoneNumber}
                </p>
                {editField("Phone Number", phoneNumber, setPhoneNumber)}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
