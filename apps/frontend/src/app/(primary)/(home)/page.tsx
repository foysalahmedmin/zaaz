"use client";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { BarChart3, CreditCard, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: Zap,
    title: "Fast setup",
    description:
      "Get your workspace running in minutes with sensible defaults and guided onboarding.",
  },
  {
    icon: CreditCard,
    title: "Flexible billing",
    description:
      "Usage-based credits, subscriptions, and one-off packages — pick what fits your business.",
  },
  {
    icon: BarChart3,
    title: "Real-time insights",
    description:
      "Track usage, revenue, and customer activity from a single, unified dashboard.",
  },
  {
    icon: ShieldCheck,
    title: "Built for reliability",
    description:
      "Role-based access, audit trails, and resilient payment processing out of the box.",
  },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="border-b">
        <div className="mx-auto max-w-5xl px-4 py-20 text-center lg:px-6 lg:py-28">
          <h1 className="text-foreground text-4xl font-bold tracking-tight lg:text-5xl">
            Run your business on ZaaZ
          </h1>
          <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-lg">
            One platform for billing, credits, and customer management — built
            to scale with you from your first customer to your millionth.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/pricing">
              <Button size="lg">View Pricing</Button>
            </Link>
            <Link href="/signup">
              <Button size="lg" variant="outline">
                Create an account
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-4 py-16 lg:px-6 lg:py-24">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-foreground text-3xl font-bold">
            Everything you need, in one place
          </h2>
          <p className="text-muted-foreground mt-3">
            From onboarding to renewal, ZaaZ handles the operational work so you
            can focus on your product.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, description }) => (
            <Card key={title}>
              <Card.Content className="space-y-3">
                <div className="bg-primary/10 flex size-10 items-center justify-center rounded-md">
                  <Icon className="text-primary size-5" />
                </div>
                <h3 className="text-foreground font-semibold">{title}</h3>
                <p className="text-muted-foreground text-sm">{description}</p>
              </Card.Content>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center lg:px-6">
          <h2 className="text-foreground text-2xl font-bold lg:text-3xl">
            Ready to get started?
          </h2>
          <p className="text-muted-foreground mt-3">
            Explore our plans and find the one that fits your team.
          </p>
          <div className="mt-6">
            <Link href="/pricing">
              <Button size="lg">See Plans &amp; Pricing</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
