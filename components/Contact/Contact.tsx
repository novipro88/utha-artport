"use client";

import { Terminal } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import React, { useState } from "react";
import { BsInstagram, BsGoogle, BsYoutube } from "react-icons/bs";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

const Contact = () => {
  const [emailSubmited, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    const JsonData = JSON.stringify(data);
    const endpoint = "/api/send";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JsonData,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Message Success");
      setEmailSubmitted(true);
    }
  };

  return (
    <section id="contact">
      <div className="grid grid-cols-1 md:grid-cols-2 my-10 gap-5 mt-12 md:mt-24">
        <div className="col-span-1">
          <h5 className="text-mycolor-100 font-semibold mb-4 text-2xl">
            Let&apos;s Connect
          </h5>
          <p className="text-base text-white">
            I am currently looking for new opportunities, my inbox is always
            open. Whether you have a question or just want to say hi, I will try
            my best to get back to you.!
          </p>

          <div className="flex flex-row gap-4 mt-5">
            <BsInstagram className="h-10 w-10 text-white" />
            <BsGoogle className="h-10 w-10 text-white" />
            <BsYoutube className="h-10 w-10 text-white" />
          </div>
        </div>

        <div className="col-span-1">
          {emailSubmited ? (
            <Alert className="bg-green-600 text-white">
              <Terminal className="h-4 w-4" />
              <AlertTitle>Your message has been successfully sent!</AlertTitle>
              <AlertDescription>
                I will immediately reply to your message at the first
                opportunity. Thank you..!
              </AlertDescription>
            </Alert>
          ) : (
            <form className="flex flex-col" onSubmit={handleSubmit}>
              <div className="mb-6 text-white">
                <Label>Your Email</Label>
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="bg-mycolor-600 mt-2"
                />
              </div>

              <div className="mb-6 text-white">
                <Label>Subject</Label>
                <Input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                  className="bg-mycolor-600 mt-2"
                />
              </div>

              <div className="mb-6 text-white">
                <Label>Message</Label>
                <Textarea
                  name="message"
                  className="bg-mycolor-600 mt-2"
                  placeholder="Type your message here."
                  required
                />
              </div>

              <button
                type="submit"
                className="bg-lime-500 hover:bg-lime-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
