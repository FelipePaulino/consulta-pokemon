import z from "zod";

export const scheduleSchema = z.object({
  nome: z.string(),
  sobrenome: z.string(),
  region: z.string(),
  city: z.string(),
  date: z.string(),
  time: z.string(),
  pokemons: z.array(z.string()),
});

export type User = z.infer<typeof scheduleSchema>;