"use client";

import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export const HomeView = () => {
  const router = useRouter();
  const { data: session } = authClient.useSession();

  if (!session) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col p-4 gap-y-4">
      <p>Logged in as {session.user.name}</p>
      <Button
        onClick={() =>
          authClient.signOut().then(() => {
            router.push("/sign-in");
          })
        }
        className="w-fit"
      >
        Sign Out
      </Button>
      Home Page
    </div>
  );
};
