import { projects } from "@/data/projects";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

export default function ProjectsSection({ id }: { id: string }) {
  return (
    <section id={id} className="mb-10">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <div className="space-y-4">
        {projects.map((project: any, idx: any) => (
          <Card key={idx}>
            <CardContent className="p-4">
              <CardTitle className="text-lg">{project.title}</CardTitle>
              <p className="text-muted-foreground mb-2">{project.description}</p>
              <div className="flex flex-wrap gap-2 text-sm">
                {project.technologies.map((tech: any) => (
                  <span key={tech} className="bg-zinc-800 px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 underline text-sm mt-2 inline-block"
                >
                  View Project →
                </a>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
