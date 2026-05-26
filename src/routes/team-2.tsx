import { createFileRoute, Navigate } from "@tanstack/react-router";

export const Route = createFileRoute("/team-2")({
  component: () => <Navigate to="/team" replace />,
});
