export default function ResumeSection() {
  return (
    <section id="resume" className="mb-10">
      <h2 className="text-2xl font-bold mb-4">Résumé</h2>
      <p className="text-muted-foreground mb-2">
        You can view or download my most recent résumé here:
      </p>
      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="underline text-primary"
      >
        View Résumé →
      </a>
    </section>
  );
}
