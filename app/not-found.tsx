import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="container-shell py-24 text-center">
      <h1 className="text-4xl font-bold text-black">Page not found</h1>
      <p className="mt-3 text-black/60">The page you are looking for does not exist.</p>
      <Link href="/">
        <Button className="mt-8 rounded-full">Back to Home</Button>
      </Link>
    </main>
  );
}
