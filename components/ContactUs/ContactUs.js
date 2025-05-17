"use client";

import React from "react";
import Footer from "../Footer/Footer";
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Textarea } from "../../components/ui/textarea";
import { Button } from "../../components/ui/button";
import { toast } from "../../components/ui/sonner";
import { useState } from "react";

const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (e) => {
    setFormData((prev) => ({ ...prev, subject: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      let data;
      try {
        data = await response.json();
      } catch (parseError) {
        // Handle case where response is not valid JSON
        throw new Error("Failed to parse response");
      }

      if (response.ok) {
        alert("Thank you for your message. We'll get back to you soon!");
        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          subject: "General Inquiry",
          message: "",
        });
      } else {
        throw new Error(
          data?.error ? data.error : "Failed to send message"
        );
      }
    } catch (error) {
      console.error("Contact form error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-between pt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
        <div className="bg-[#00378b] text-white p-8 rounded-lg shadow-lg space-y-6">
          <h2 className="text-2xl font-semibold">Contact Information</h2>
          <p className="text-gray-200">We’re here to help. Start a conversation today!</p>

          <div className="space-y-4 text-sm sm:text-base">
            <div className="flex items-center gap-4">
              <Phone size={20} className="text-blue-200" />
              <a href="tel:+27114935495" className="hover:text-blue-300 transition">
                +27 11 493 5495
              </a>
            </div>
            <div className="flex items-center gap-4">
              <Mail size={20} className="text-blue-200" />
              <div className="flex flex-col">
                <a
                  href="mailto:info@helmtex.co.za"
                  className="hover:text-blue-300 transition"
                >
                  info@helmtex.co.za
                </a>
                <a
                  href="mailto:sales@helmtex.co.za"
                  className="hover:text-blue-300 transition"
                >
                  sales@helmtex.co.za
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin size={20} className="text-blue-200" />
              <a
                href="https://maps.app.goo.gl/ujC1gntD3jMfKmbT9"
                className="hover:text-blue-300 transition leading-snug"
                target="_blank"
                rel="noopener noreferrer"
              >
                33 Fennell Street, New Centre, Johannesburg, 2001
              </a>
            </div>
          </div>

        {/* WhatsApp CTA */}
        <div className="pt-6">
          <h4 className="text-sm uppercase text-gray-200 mb-3 tracking-wide">Chat With Us</h4>
          <a
            href="https://wa.me/+27739660936"
            target="_blank"
            className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded-full transition"
          >
            <FaWhatsapp size={18} />    
          </a>
        </div>

        {/* Social Icons */}
        <div className="pt-6">
          <h4 className="text-sm uppercase text-gray-200 mb-3 tracking-wide">Follow Us</h4>
          <div className="flex space-x-4">
            <a
              href="https://web.facebook.com/p/Helm-Textile-Mills-61559102703086/?_rdc=1&_rdr"
              target="_blank"
              aria-label="Facebook"
              className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="https://www.instagram.com/helm_textiles/"
              target="_blank"
              aria-label="Instagram"
              className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition"
            >
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      </div>

        {/* Contact Form */}
        <div className="bg-white border border-[#00378b] p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="mb-6">
            Any questions or remarks? Just write us a message!
          </p>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <Input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
              />
              <Input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
              />
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
              />
              <Input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                required
              />
            </div>
            <div className="mb-4">
              <Label className="block text-gray-700 mb-2">Subject</Label>
              <div className="flex flex-wrap gap-4">
                {['General Inquiry', 'Feedback', 'Support'].map((option) => (
                  <Label
                    key={option}
                    className={`inline-flex items-center gap-2 px-4 py-2 border rounded-full cursor-pointer transition-colors duration-200 ${
                      formData.subject === option
                        ? 'bg-[#00378b] text-white border-[#00378b]'
                        : 'bg-white text-gray-700 border-gray-300 hover:border-blue-400'
                    }`}
                  >
                    <input
                      type="radio"
                      name="subject"
                      value={option}
                      checked={formData.subject === option}
                      onChange={handleRadioChange}
                      className="sr-only"
                    />
                    {option}
                  </Label>
                ))}
              </div>
            </div>
            <div className="mb-6">
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message..."
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="4"
                required
              />
            </div>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-[#00378b] text-white px-6 py-3 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-10 w-full">
        <Footer />
      </div>
    </div>
  );
};

export default ContactPage;
