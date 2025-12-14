"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, MapPin, Phone, Send } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import type { ContactFormData } from "@/lib/types"

export default function ContactPage() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Save to localStorage (simulating database)
    const submission: ContactFormData = {
      ...formData,
      timestamp: new Date().toISOString(),
    }

    const existingSubmissions = JSON.parse(localStorage.getItem("contact-submissions") || "[]")
    localStorage.setItem("contact-submissions", JSON.stringify([...existingSubmissions, submission]))

    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon!",
    })

    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" })
    setIsSubmitting(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <main className="flex-1 bg-[#F9FAFB]">
      <div className="container px-4 py-12">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8 text-center">
            <h1 className="mb-3 text-4xl font-bold text-[#1E3A4F]">Contact Us</h1>
            <p className="text-lg text-[#6B7280]">Have questions? We'd love to hear from you. Send us a message!</p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Contact Info */}
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#E87654]/10">
                    <Mail className="h-6 w-6 text-[#E87654]" />
                  </div>
                  <h3 className="mb-2 font-semibold text-[#1E3A4F]">Email</h3>
                  <p className="text-sm text-[#6B7280]">support@luminastore.com</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#E87654]/10">
                    <Phone className="h-6 w-6 text-[#E87654]" />
                  </div>
                  <h3 className="mb-2 font-semibold text-[#1E3A4F]">Phone</h3>
                  <p className="text-sm text-[#6B7280]">+1 (555) 123-4567</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#E87654]/10">
                    <MapPin className="h-6 w-6 text-[#E87654]" />
                  </div>
                  <h3 className="mb-2 font-semibold text-[#1E3A4F]">Address</h3>
                  <p className="text-sm text-[#6B7280]">123 Commerce St, San Francisco, CA 94105</p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="lg:col-span-2">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="How can we help?"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us more about your inquiry..."
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-[#E87654] text-white hover:bg-[#D66543]"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}
