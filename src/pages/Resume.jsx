import { HiDocumentDownload } from 'react-icons/hi';

function Resume() {
  return (
    <section className="max-w-2xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Resume</h2>

      <div className="text-center mb-8">
        <a
          href="/Assets/resume.pdf"
          download
          className="inline-flex items-center gap-2 bg-blue-600 text-white font-medium px-6 py-2 rounded shadow hover:bg-blue-700 transition"
        >
          <HiDocumentDownload className="text-xl" />
          Download My Resume
        </a>
      </div>

      <h3 className="text-xl font-semibold mb-4 text-gray-700">Proficiencies</h3>
      <ul className="list-disc list-inside space-y-2 text-gray-600">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
        <li>SQL</li>
        <li>Git & GitHub</li>
      </ul>
    </section>
  );
}

export default Resume;
