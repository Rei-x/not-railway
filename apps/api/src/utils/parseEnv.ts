import dotenv from "dotenv";
import { z } from "zod";

export const envSchema = z.array(
  z.object({
    name: z.string(),
    value: z.string(),
  })
);

export const parseEnv = (dotenvFile: string): z.infer<typeof envSchema> => {
  const env = dotenv.parse(dotenvFile);

  return Object.entries(env).map(([name, value]) => ({ name, value }));
};
