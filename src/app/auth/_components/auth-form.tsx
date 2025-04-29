/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { toast } from "sonner";

export function AuthForm() {
  const form = useForm();

  const handleSubmit = async () => {
    await signIn("google");
    try {
      toast("Signing in...", {
        description: "Please wait while we sign you in.",
        duration: 2000,
        style: { backgroundColor: "black", color: "white" },
      });
    } catch (error) {
      toast("Error", {
        description: "An error occurred while signing in.",
        duration: 2000,
        style: { backgroundColor: "black", color: "white" },
      });
    }
  };

  return (
    <div>
      <div>
        <Button type="submit" onClick={handleSubmit}>
          SignIn Google
        </Button>
      </div>
    </div>
  );
}
