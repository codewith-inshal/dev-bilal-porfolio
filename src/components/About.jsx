function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>

        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <p className="text-gray-600 leading-8">
              I am Muhammad Bilal Abid, a BS Computer Science student at Virtual
              University of Pakistan.
            </p>

            <p className="text-gray-600 leading-8 mt-4">
              My goal is to build practical skills, learn modern web
              technologies and contribute to innovative projects.
            </p>
          </div>

          <div className="bg-blue-50 p-6 rounded-2xl">
            <h3 className="font-bold text-xl mb-4">Personal Information</h3>

            <p>
              <strong>Location:</strong> Township, Lahore
            </p>
            <p>
              <strong>Degree:</strong> BSCS
            </p>
            <p>
              <strong>Semester:</strong> 4th Semester
            </p>
            <p>
              <strong>Languages:</strong> Urdu, English
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
