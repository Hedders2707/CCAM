import React from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { useForm, ValidationError } from "@formspree/react";

export function ContactSection() {
  const [state, handleSubmit] = useForm("xovykabo");

  return (
    <section className="py-16 px-8 bg-secondary" id="contact">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl mb-4">Get Your Free Quote Today</h2>
          <p className="text-lg text-muted-foreground">
            Ready to start your carpentry or maintenance project? Contact us for a free consultation and estimate.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Request a Quote</CardTitle>
            </CardHeader>

            <CardContent className="space-y-4">
              {state.succeeded ? (
                <div className="p-4 rounded-md bg-emerald-600/10 text-emerald-700">
                  <p className="font-medium">Thanks! We’ve received your request.</p>
                  <p className="text-sm opacity-80">We’ll get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Custom email subject for the notification you receive */}
                  <input type="hidden" name="_subject" value="New Quote Request — CCAM" />
                  {/* Honeypot (blocks basic bots) */}
                  <input type="text" name="_gotcha" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" name="firstName" placeholder="John" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" name="lastName" placeholder="Doe" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" placeholder="john@example.com" required />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" name="phone" type="tel" placeholder="+61 123 456 789" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="project">Project Description</Label>
                    <Textarea
                      id="project"
                      name="project"
                      placeholder="Tell us about your carpentry or maintenance project..."
                      className="min-h-[100px]"
                      required
                    />
                    <ValidationError prefix="Project" field="project" errors={state.errors} />
                  </div>

                  <Button className="w-full" type="submit" disabled={state.submitting}>
                    {state.submitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-muted-foreground">+61 413 315 700</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">Admin@CCAM.com.au</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Service Area</p>
                    <p className="text-muted-foreground">
                      Canberra ACT<br />
                      Queanbeyan and Jerrabomberra NSW
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Business Hours</p>
                    <p className="text-muted-foreground">
                      Mon - Fri: 7:00 AM - 6:00 PM<br />
                      Sat: 8:00 AM - 4:00 PM<br />
                      Sun: By appointment
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </div>
    </section>
  );
}
