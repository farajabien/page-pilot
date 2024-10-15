import { InlineSnippet } from "@/components/form/domain-configuration";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <header className="border-b border-border py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-center text-4xl font-extrabold text-primary">
            Page Pilot
          </h1>
        </div>
      </header>

      <main className="container mx-auto flex-grow px-4 py-8">
        <div className="mx-auto max-w-3xl space-y-8">
          <Card className="overflow-hidden shadow-lg">
            <CardHeader className="border-b border-border bg-primary/10">
              <CardTitle className="text-center text-3xl font-semibold">
                Welcome to Page Pilot!
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="mb-4 text-center text-muted-foreground">
                Navigate your way to success with our easy-to-use platform.
              </p>
              <h3 className="mb-2 text-xl font-semibold">What We Offer:</h3>
              <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                <li>A user-friendly interface for quick setup</li>
                <li>Customization options to make your page uniquely yours</li>
                <li>Seamless integration with your favorite tools</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Get Started Today!</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-muted-foreground">
                Explore the potential of your online presence with us. Edit and
                update your pages effortlessly!
              </p>
              <Link
                href={`https://${process.env.NEXT_PUBLIC_ROOT_DOMAIN === "localhost" ? "app.localhost.com" : "app.fbien.com"}`}
                passHref
              >
                <Button className="group w-full">
                  Start Customizing
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="overflow-hidden shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">Use Cases</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                <li>Personal Blogging</li>
                <li>Professional Portfolios</li>
                <li>Niche Content Creation</li>
                <li>SEO-Focused Sites</li>
                <li>Affiliate Marketing</li>
                <li>Business Promotion</li>
                <li>Community Engagement</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>

      <footer className="border-t border-border py-4">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Page Pilot. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
