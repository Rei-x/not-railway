import { z } from "zod";

export const webhookSchema = z.object({
  pipelineRun: z.object({
    metadata: z.object({
      name: z.string(),
    }),
    status: z.object({
      conditions: z.array(
        z.object({
          type: z.string(),
          status: z.string(),
          lastTransitionTime: z.string(),
          reason: z.string(),
        })
      ),
      startTime: z.string(),
    }),
  }),
});
