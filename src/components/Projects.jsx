function Projects() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-slate-50 p-6 rounded-2xl shadow">
              <h3 className="font-bold text-xl mb-2">Project {item}</h3>

              <p className="text-gray-600">
                Future project showcase will appear here.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
