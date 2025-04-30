import { Avatar } from "@/components/ui/avatar";
import { auth } from "@/services/auth";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

export default async function Page() {
  const session = await auth();

  console.log(session);

  return (
    <main>
      <div>
        <Avatar>
          <AvatarImage
            alt="user Image"
            src="https://lh3.googleusercontent.com/a/ACg8ocKcWnX5lgCMQXQ9v0TdH0D42mL4-ckoappaf_x9rt2SV6yXl5BL6A=s96-c"
          />
          <AvatarFallback>{session?.user?.email?.[0]}</AvatarFallback>
        </Avatar>
        <span>{session?.user?.email}</span>
      </div>
    </main>
  );
}
