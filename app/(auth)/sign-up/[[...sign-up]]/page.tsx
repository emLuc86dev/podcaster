import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex-center glassmorphism-autho h-screen w-full">
      <SignUp />;
    </div>
  );
}
