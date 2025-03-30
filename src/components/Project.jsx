function Project({ title, image, appLink, githubLink }) {
    return (
      <div className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200 hover:shadow-xl hover:scale-105 transition-transform duration-300">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2 text-gray-800">{title}</h3>
          <div className="flex justify-between text-sm text-blue-600">
            <a
              href={appLink}
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              View App
            </a>
            <a
              href={githubLink}
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    );
  }
  
  export default Project;
  