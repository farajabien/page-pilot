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
            Faraja Bien
          </h1>
          <p className="text-center text-lg text-muted-foreground">
            Technical Expertise & Page Customization Solutions
          </p>
        </div>
      </header>

      <main className="container mx-auto flex-grow px-4 py-8">
        <div className="mx-auto max-w-3xl space-y-8">
          {/* Section: Tech Co-Founder Services */}
          <Card className="overflow-hidden shadow-lg">
            <CardHeader className="border-b border-border bg-primary/10">
              <CardTitle className="text-center text-3xl font-semibold">
                Need a Tech Co-Founder?
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 text-center">
              <p className="mb-4 text-muted-foreground">
                Turn your startup vision into reality with my technical
                expertise tailored for non-technical founders.
              </p>
              <Link href="https://tech-cofounder.fbien.com" passHref>
                <Button className="w-full" aria-label="Visit my tech services">
                  Visit My Tech Services
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Section: Page Pilot Intro */}
          <Card>
            <CardHeader>
              <CardTitle className="text-center text-2xl">
                Page Pilot - Your Page Customization Solution
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-muted-foreground">
                Create, customize, and launch web pages effortlessly with Page
                Pilot.
              </p>
              <Link
                href={`https://${process.env.NEXT_PUBLIC_ROOT_DOMAIN === "localhost" ? "app.localhost.com" : "app.fbien.com"}`}
                passHref
              >
                <Button
                  className="group mt-4 w-full"
                  aria-label="Get started with Page Pilot"
                >
                  Get Started with Page Pilot
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Section: Social Media Links */}
          <Card className="overflow-hidden shadow-lg">
            <CardHeader>
              <CardTitle className="text-center text-2xl">
                Connect with Me
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center space-y-2">
              <Link
                href="https://linkedin.com/in/bienvenufaraja"
                target="_blank"
                passHref
              >
                <Button variant="link" aria-label="LinkedIn profile">
                  LinkedIn
                </Button>
              </Link>
              <Link
                href="https://www.youtube.com/@farajabien"
                target="_blank"
                passHref
              >
                <Button variant="link" aria-label="YouTube channel">
                  YouTube
                </Button>
              </Link>
              <Link
                href="https://twitter.com/farajabien"
                target="_blank"
                passHref
              >
                <Button variant="link" aria-label="Twitter profile">
                  Twitter
                </Button>
              </Link>
              <Link
                href="https://tiktok.com/@farajabien"
                target="_blank"
                passHref
              >
                <Button variant="link" aria-label="TikTok profile">
                  TikTok
                </Button>
              </Link>
              <Link
                href="https://medium.com/@faraja.bien"
                target="_blank"
                passHref
              >
                <Button variant="link" aria-label="Medium blog">
                  Medium Blog
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </main>

      <footer className="border-t border-border py-4">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Faraja Bien. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
