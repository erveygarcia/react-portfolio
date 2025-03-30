function About() {
  return (
    <section className="max-w-4xl mx-auto mt-10 px-6 py-10 bg-white rounded-lg shadow text-center">
      <img
        src="/Assets/avatar.jpg"
        alt="Ervey avatar"
        className="mx-auto rounded-full w-32 h-32 object-cover shadow mb-6 border-4 border-blue-500"
      />
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Hi, I'm Ervey García Silva 👋</h2>
      <p className="text-lg text-gray-700 leading-relaxed">
        I'm a passionate <strong>Full Stack Developer</strong> who builds modern web applications using
        <strong> React</strong>, <strong>Node.js</strong>, and more. I enjoy writing clean, efficient code and crafting responsive
        user experiences that look great on any device.
      </p>
    </section>
  );
}

export default About;
