import { inferRouterOutputs } from "@trpc/server";

import type { AppRouter } from "@/trpc/routers/_app";

export type AgentsgetMany = inferRouterOutputs<AppRouter>["agents"]["getMany"]["items"];
export type AgentgetOne = inferRouterOutputs<AppRouter>["agents"]["getOne"];
