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
          <div className="container mx-auto px-4">
            <h1 className="text-center text-4xl font-extrabold text-primary">
              ChatPilot
            </h1>
            <p className="text-center text-lg text-muted-foreground">
              Your Multi-Tenant Solution for Custom AI Chatbots
            </p>
          </div>
          {/* Section: Introduction */}
          <Card>
            <CardHeader>
              <CardTitle className="text-center text-2xl">
                Coming Soon: ChatPilot
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-muted-foreground">
                Create, customize, and deploy your own AI chatbots with
                dedicated domains, tailored knowledge bases, and a seamless
                management dashboard.
              </p>
            </CardContent>
          </Card>

          {/* Section: Features Highlight */}
          <Card className="overflow-hidden shadow-lg">
            <CardHeader className="border-b border-border bg-primary/10">
              <CardTitle className="text-center text-3xl font-semibold">
                Key Features
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 text-center">
              <ul className="list-inside list-disc">
                <li>Multi-tenant architecture for resource isolation</li>
                <li>Custom domain handling for each chatbot</li>
                <li>Easy document upload for knowledge base management</li>
                <li>Simple analytics to track usage</li>
                <li>Flexible pricing plans to suit your needs</li>
              </ul>
            </CardContent>
          </Card>

          {/* Section: Stay Updated */}
          <Card className="overflow-hidden shadow-lg">
            <CardHeader>
              <CardTitle className="text-center text-2xl">
                Stay Updated
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center space-y-2">
              <p className="text-center text-muted-foreground">
                Sign up to be notified when ChatPilot launches!
              </p>
              <Link href="/signup" passHref>
                <Button
                  className="group mt-4 w-full"
                  aria-label="Sign up for updates"
                >
                  Sign Up for Updates
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </main>

      <footer className="border-t border-border py-4">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} ChatPilot. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
