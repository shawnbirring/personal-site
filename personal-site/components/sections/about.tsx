export default function AboutSection({ id }: { id: string }){
  return (
    <section id={id}className="mb-10">
      <h2 className="text-2xl font-bold mb-2">About Me</h2>
      <p className="text-muted-foreground">
        I'm Shawn Birring, a Computer Science student at BCIT. I specialize in system automation,
        networking, and building clean, maintainable software. Welcome to my personal site!
      </p>
    </section>
  );
}



