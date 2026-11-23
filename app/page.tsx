
import Link from "next/link";

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">
        Hello, my name is Jeneza Garcia
      </h1>

      <p className="mt-4">
        I am a third year college student.
      </p>

      <p>
        I am currently learning web development
        using React and Next.js.
      </p>

      <Link
        href="/projects"
        className="text-blue-600 underline mt-4 inline-block"
      >
        See my projects
      </Link>
    </main>
  );
}
