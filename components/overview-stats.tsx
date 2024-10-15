"use client";

import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Skeleton } from "@/components/ui/skeleton";
import { track } from "@vercel/analytics";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Area,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";
import { AlertCircle } from "lucide-react";

type AnalyticsData = {
  date: string;
  pageviews: number;
  visitors: number;
};

export default function OverviewStats() {
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const response = await fetch("/api/analytics");
        if (!response.ok) {
          throw new Error("Failed to fetch analytics data");
        }
        const data: AnalyticsData[] = await response.json();
        setAnalyticsData(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to fetch analytics data:", error);
        setError("Failed to load analytics data. Please try again later.");
        setIsLoading(false);
      }
    };

    fetchAnalytics();
  }, []);

  useEffect(() => {
    track("page_view");
  }, []);

  if (isLoading) {
    return <LoadingSkeleton />;
  }

  if (error) {
    return (
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    );
  }

  const totalVisitors = analyticsData.reduce(
    (sum, day) => sum + day.visitors,
    0,
  );
  const totalPageviews = analyticsData.reduce(
    (sum, day) => sum + day.pageviews,
    0,
  );

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <StatCard
        title="Total Visitors"
        description="Unique visitors in the last 7 days"
        total={totalVisitors}
        data={analyticsData}
        dataKey="visitors"
        color="blue"
      />
      <StatCard
        title="Total Pageviews"
        description="Pageviews in the last 7 days"
        total={totalPageviews}
        data={analyticsData}
        dataKey="pageviews"
        color="green"
      />
    </div>
  );
}

type StatCardProps = {
  title: string;
  description: string;
  total: number;
  data: AnalyticsData[];
  dataKey: keyof AnalyticsData;
  color: string;
};

function StatCard({
  title,
  description,
  total,
  data,
  dataKey,
  color,
}: StatCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div
          className="text-2xl font-bold"
          aria-label={`${title}: ${total.toLocaleString()}`}
        >
          {total.toLocaleString()}
        </div>
        <Badge
          className="mt-2"
          aria-label={`Growth rate: ${((total / 7) * 100).toFixed(2)}%`}
        >
          {total > 0 ? "+" : ""}
          {((total / 7) * 100).toFixed(2)}%
        </Badge>
        <ChartContainer
          config={{
            [dataKey]: {
              label: title,
              color: `hsl(var(--${color}))`,
            },
          }}
          className="mt-4 h-[200px]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="date"
                tickFormatter={(value) => new Date(value).toLocaleDateString()}
              />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Area
                type="monotone"
                dataKey={dataKey}
                stroke={`hsl(var(--${color}))`}
                fill={`hsl(var(--${color}))`}
                fillOpacity={0.3}
              />
            </AreaChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

function LoadingSkeleton() {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {[0, 1].map((i) => (
        <Card key={i}>
          <CardHeader>
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </CardHeader>
          <CardContent>
            <Skeleton className="h-10 w-[100px]" />
            <Skeleton className="mt-2 h-4 w-[60px]" />
            <Skeleton className="mt-4 h-[200px] w-full" />
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
