import { experience } from "@/data/experience";

export default function ExperienceSection({ id }: { id: string }) {
  return (
    <section id={id} className="mb-10">
      <h2 className="text-2xl font-bold mb-4">Experience</h2>
      <div className="space-y-6">
        {experience.map((item, idx) => (
          <div key={idx}>
            <div className="font-semibold text-lg">{item.role}</div>
            <div className="text-sm text-muted-foreground">
              {item.company} — {item.date}
            </div>
            <ul className="list-disc list-inside mt-2 text-sm text-muted-foreground space-y-1">
              {item.details.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
