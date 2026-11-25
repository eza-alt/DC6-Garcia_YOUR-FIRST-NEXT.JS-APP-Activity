export const metadata = { title: "Projects | Garcia" };

const projects = [
  { id: 1, name: "Project 1 : Database", description: "A database project." },
  { id: 2, name: "Project 2 : Web App", description: "A web application project." },
  { id: 3, name: "Project 3 : Mobile App", description: "A mobile application project." },
];
export default function ProjectsPage() {
  return (
    <main className="p-8">
      <h3 className="text-2xl font-bold">Projects: </h3>

      <br />
      <div>

        {projects.map((project) => (
          <div key={project.id} className="mb-4">
            <h2 className="text-xl font-semibold">{project.name}</h2>
            <p>{project.description}</p>
          </div>
        ))}
     </div>
    </main>
  );
}

