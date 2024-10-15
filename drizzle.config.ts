import dotenv from "dotenv";
dotenv.config();

import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./lib/schema.ts",
  out: "./drizzle/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url:
      process.env.POSTGRES_URL ||
      "postgres://default:w5NbIsLQXpW0@ep-silent-base-a4zctjfb-pooler.us-east-1.aws.neon.tech/verceldb?sslmode=require",
  },
});
