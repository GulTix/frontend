import Link from "next/link";

export default function Home() {
  const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <button className="border-4 border-black rounded-lg py-2 px-4">
        <Link href={`${BACKEND_URL}/auth/google`}>Sign in</Link>
      </button>
    </main>
  );
}
