import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  shared: {
    NODE_ENV: z.enum(["production", "development"]).default("development"),
  },
  client: {
    NEXT_PUBLIC_DASHBOARD_URL: z
      .string()
      .url()
      .default("http://localhost:3001"),
  },
  server: {
    DATABASE_URL: z.string().url(),
  },
  runtimeEnv: {
    NEXT_PUBLIC_DASHBOARD_URL: process.env.DASHBOARD_URL,
    DATABASE_URL: process.env.DATABASE_URL,
    NODE_ENV: process.env.NODE_ENV,
  },
});
