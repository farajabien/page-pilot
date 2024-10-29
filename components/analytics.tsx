"use client";

import {
  Card,
  Text,
  Title,
  BarList,
  Flex,
  Grid,
  Bold,
  AreaChart,
} from "@tremor/react";
import Image from "next/image";

interface AnalyticsData {
  visitorData: { date: string; Visitors: number }[];
  topPages: { name: string; value: number }[];
  topReferrers: { name: string; value: number }[];
  topCountries: { name: string; value: number; code: string }[];
}

export default function AnalyticsComponent({
  analyticsData,
}: {
  analyticsData: AnalyticsData;
}) {
  const { visitorData, topPages, topReferrers, topCountries } = analyticsData;

  const categories = [
    {
      title: "Top Pages",
      subtitle: "Page",
      data: topPages,
    },
    {
      title: "Top Referrers",
      subtitle: "Source",
      data: topReferrers,
    },
    {
      title: "Countries",
      subtitle: "Country",
      data: topCountries,
    },
  ];

  return (
    <div className="grid gap-6">
      <Card>
        <Title>Visitors</Title>
        <AreaChart
          className="mt-4 h-72"
          data={visitorData}
          index="date"
          categories={["Visitors"]}
          colors={["indigo"]}
          valueFormatter={(number: number) =>
            Intl.NumberFormat("us").format(number).toString()
          }
        />
      </Card>
      <Grid numItemsSm={2} numItemsLg={3} className="gap-6">
        {categories.map(({ title, subtitle, data }) => (
          <Card key={title} className="max-w-lg">
            <Title>{title}</Title>
            <Flex className="mt-4">
              <Text>
                <Bold>{subtitle}</Bold>
              </Text>
              <Text>
                <Bold>Visitors</Bold>
              </Text>
            </Flex>
            <BarList
              data={data.map(({ name, value, code }) => ({
                name,
                value,
                icon: () => {
                  if (title === "Top Referrers") {
                    return (
                      <Image
                        src={`https://www.google.com/s2/favicons?sz=64&domain_url=${name}`}
                        alt={name}
                        className="mr-2.5"
                        width={20}
                        height={20}
                      />
                    );
                  } else if (title === "Countries") {
                    return (
                      <Image
                        src={`https://flag.vercel.app/m/${code}.svg`}
                        className="mr-2.5"
                        alt={code}
                        width={24}
                        height={16}
                      />
                    );
                  } else {
                    return null;
                  }
                },
              }))}
              className="mt-2"
            />
          </Card>
        ))}
      </Grid>
    </div>
  );
}
