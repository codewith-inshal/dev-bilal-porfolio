function Education() {
  const education = [
    {
      title: "BS Computer Science",
      institute: "Virtual University of Pakistan",
      year: "Currently Enrolled (4th Semester)",
    },
    {
      title: "ICS - Physics",
      institute: "Punjab Group of Colleges",
      year: "2022 - 2023",
    },
    {
      title: "Matriculation",
      institute: "Azeem Talent High School",
      year: "2021",
    },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Education</h2>

        <div className="space-y-6">
          {education.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow">
              <h3 className="font-bold text-xl">{item.title}</h3>
              <p>{item.institute}</p>
              <p className="text-blue-600">{item.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
