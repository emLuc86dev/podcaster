import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex-center glassmorphism-autho h-screen w-full">
      <SignIn />;
    </div>
  );
}
