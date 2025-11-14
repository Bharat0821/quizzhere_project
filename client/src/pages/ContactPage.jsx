import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Message Sent! We’ll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-black via-gray-800 to-gray-400 p-6 pt-20 ">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-2xl p-8 grid md:grid-cols-2 gap-8">
        {/* Left Side - Contact Info */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-black-600">Get in Touch</h2>
          <p className="text-gray-600">
            Have any questions or feedback? Fill out the form or reach us
            directly via email or phone.
          </p>

          <div className="flex items-center space-x-3">
            <Mail className="text-black-500" />
            <p className="text-gray-700">swamibharat2110@gmail.com</p>
          </div>

          <div className="flex items-center space-x-3">
            <Phone className="text- black-500" />
            <p className="text-gray-700">+91 8892634444</p>
          </div>

          <div className="flex items-center space-x-3">
            <MapPin className="text-black-500" />
            <p className="text-gray-700">Charkhi Dadri, Haryana, India</p>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-5 bg-yellow-50 rounded-xl p-6 shadow-inner"
        >
          <div>
            <label className="block text-gray-700 font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              require
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2"
              placeholder="Write your message"
            ></textarea>
          </div>

          <Button
            type="submit"
            className="w-full flex items-center justify-center gap-2 text-white font-semibold py-2 px-4 rounded-lg transition"
          >
            <Send size={18} /> Send Message
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
