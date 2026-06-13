function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-24 bg-gradient-to-r from-blue-50 to-orange-50"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full">
            Computer Science Student
          </span>

          <h1 className="text-5xl md:text-6xl font-bold mt-5 mb-4">
            Muhammad Bilal Abid
          </h1>

          <p className="text-gray-600 text-lg mb-6">
            Passionate BSCS student with a strong interest in web development,
            responsive design, and modern technologies.
          </p>

          <a
            href="#contact"
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl"
          >
            Contact Me
          </a>
          <a
            href="https://wa.me/923146799202?text=Hi%20Bilal%2C%20I%20want%20to%20hire%20you"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 m-1 rounded-xl transition"
          >
            Hire Me
          </a>
        </div>

        <div className="flex justify-center">
          <img
            src="bilal.jpeg"
            alt="Bilal"
            className="w-[350px] h-[350px] rounded-full object-cover border-8 border-white shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
