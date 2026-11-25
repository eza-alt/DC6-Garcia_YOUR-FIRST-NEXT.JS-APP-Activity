import Link from "next/link";

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">
        Hello, my name is Jeneza Garcia
      </h1>

      <p className="mt-4">
        I am from langtad, Sagbayan, Bohol. 
      </p>

      <p>
       I am 20 years old and currently a third year college student.
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
