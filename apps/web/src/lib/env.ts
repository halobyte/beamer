import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  shared: {
    NODE_ENV: z.enum(["production", "development"]).default("development"),
    NEXT_PUBLIC_ORIGIN: z.string().url(),
    NEXT_PUBLIC_DASHBOARD_URL: z.string().url()
  },
  client: {
  },
  server: {
    DATABASE_URL: z.string().url(),
  },
  runtimeEnv: {
    NEXT_PUBLIC_DASHBOARD_URL: process.env.NEXT_PUBLIC_DASHBOARD_URL,
    DATABASE_URL: process.env.DATABASE_URL,
    NODE_ENV: process.env.NODE_ENV,
    NEXT_PUBLIC_ORIGIN: process.env.NEXT_PUBLIC_ORIGIN
  },
});
