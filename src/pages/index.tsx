import Link from "next/link";
import { apiUrl } from "@/utils/env";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <button className="border-4 border-black rounded-lg py-2 px-4">
        <Link href={`${apiUrl}/auth/google`}>Sign in</Link>
      </button>
    </main>
  );
}
