function Skills() {
  const skills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "Responsive Design",
    "Microsoft Word",
    "PowerPoint",
    "Communication",
    "Problem Solving",
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>

        <div className="grid md:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-blue-50 rounded-xl p-5 text-center font-semibold hover:bg-blue-100 transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
