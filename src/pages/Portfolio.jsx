import Project from '../components/Project';

function Portfolio() {
  const projects = [
    {
      title: 'Yardify',
      image: '/Assets/yardify.png',
      appLink: 'https://doctorlequack1.github.io/Yardify/',
      githubLink: 'https://github.com/DoctorLeQuack1/Yardify.git',
    },
    {
      title: 'Weather Dashboard',
      image: '/Assets/WeatherDashboard.png',
      appLink: 'https://weather-challenge-qfmv.onrender.com',
      githubLink: 'https://github.com/erveygarcia/API2.git',
    },
    {
      title: 'Employee Tracker',
      image: '/Assets/EmployeeTracker.png',
      appLink: 'https://app.screencastify.com/v2/manage/videos/Q5wyiORjQgexkvCkiX4g',
      githubLink: 'https://github.com/erveygarcia/Employee-Tracker.git',
    },
    {
      title: 'README Generator',
      image: '/Assets/ReadmeGenerator.png',
      appLink: 'https://app.screencastify.com/v3/watch/164BFAbdldwEM3Hz7jY6',
      githubLink: 'https://github.com/erveygarcia/NodeJS.git',
    },
  ];

  return (
    <section className="mt-10 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">My Projects</h2>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((proj, i) => (
          <Project
            key={i}
            title={proj.title}
            image={proj.image}
            appLink={proj.appLink}
            githubLink={proj.githubLink}
          />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
