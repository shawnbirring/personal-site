import { education } from "@/data/education";

export default function EducationSection({ id }: { id: string }) {
  return (
    <section id={id} className="mb-10">
      <h2 className="text-2xl font-bold mb-4">Education</h2>
      <div className="space-y-4">
        {education.map((item, idx) => (
          <div key={idx}>
            <div className="font-semibold text-lg">{item.degree}</div>
            <div className="text-sm text-muted-foreground">
              {item.school} — {item.date} · GPA: {item.gpa}
            </div>
            <p className="text-sm text-muted-foreground mt-1">{item.notes}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
