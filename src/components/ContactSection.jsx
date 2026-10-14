import React from "react";
import { Phone, Mail, MapPin, Clock, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { useForm, ValidationError } from "@formspree/react";
import { PHONE_DISPLAY, PHONE_HREF, EMAIL } from "../siteInfo";

const contactDetails = [
  { icon: Phone, label: "Phone", value: PHONE_DISPLAY, href: PHONE_HREF },
  { icon: Mail, label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
  { icon: MapPin, label: "Service area", value: "Canberra ACT\nQueanbeyan & Jerrabomberra NSW" },
  { icon: Clock, label: "Business hours", value: "Mon – Fri: 7:00 AM – 6:00 PM\nSat: 8:00 AM – 4:00 PM\nSun: By appointment" },
];

export function ContactSection() {
  const [state, handleSubmit] = useForm("xovykabo");

  return (
    <section className="relative overflow-hidden bg-ink py-20 text-white sm:py-28" id="contact">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-48 -left-40 h-[32rem] w-[32rem] rounded-full bg-brand/20 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-8">
        {/* Intro + contact details */}
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-brand">Get in touch</p>
          <h2 className="text-3xl font-semibold sm:text-4xl lg:text-5xl">Get your free quote today.</h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-white/70">
            Ready to start your carpentry or maintenance project? Contact us for a free consultation
            and estimate.
          </p>

          <dl className="mt-10 space-y-6">
            {contactDetails.map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-brand">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <dt className="text-sm font-medium text-white/55">{label}</dt>
                  <dd className="mt-0.5 whitespace-pre-line font-medium text-white">
                    {href ? (
                      <a href={href} className="underline-offset-4 hover:text-brand hover:underline">
                        {value}
                      </a>
                    ) : (
                      value
                    )}
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        </div>

        {/* Contact Form */}
        <div className="rounded-3xl bg-white p-6 text-ink shadow-2xl shadow-black/30 sm:p-10">
          {state.succeeded ? (
            <div className="flex min-h-[24rem] flex-col items-center justify-center text-center">
              <CheckCircle2 className="h-14 w-14 text-primary" />
              <h3 className="mt-5 text-2xl font-semibold">Thanks — we've got your request.</h3>
              <p className="mt-2 text-muted-foreground">We'll be in touch shortly to talk through your project.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <h3 className="text-2xl font-semibold">Request a quote</h3>
                <p className="mt-1 text-sm text-muted-foreground">Free, no-obligation estimates.</p>
              </div>

              {/* Custom email subject for the notification you receive */}
              <input type="hidden" name="_subject" value="New Quote Request — CCAM" />
              {/* Honeypot (blocks basic bots) */}
              <input type="text" name="_gotcha" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First name</Label>
                  <Input id="firstName" name="firstName" placeholder="John" autoComplete="given-name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last name</Label>
                  <Input id="lastName" name="lastName" placeholder="Doe" autoComplete="family-name" required />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" placeholder="john@example.com" autoComplete="email" required />
                  <ValidationError prefix="Email" field="email" errors={state.errors} className="text-sm text-destructive" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone number</Label>
                  <Input id="phone" name="phone" type="tel" placeholder="0412 345 678" autoComplete="tel" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="project">Project description</Label>
                <Textarea
                  id="project"
                  name="project"
                  placeholder="Tell us about your carpentry or maintenance project..."
                  className="min-h-[140px]"
                  required
                />
                <ValidationError prefix="Project" field="project" errors={state.errors} className="text-sm text-destructive" />
              </div>

              <Button className="w-full" size="lg" type="submit" disabled={state.submitting}>
                {state.submitting ? "Sending..." : "Send request"}
                {!state.submitting && <ArrowRight className="h-4 w-4" />}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
