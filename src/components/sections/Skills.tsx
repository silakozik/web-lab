export default function Skills() {
  const skills = [
    "HTML5", "CSS3", "JavaScript", 
    "React", "TypeScript", "Git"
  ];
  
  return (
    <section id="yetenekler" className="py-16 px-4 bg-white dark:bg-gray-950">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Yeteneklerim</h2>
        <ul className="flex flex-wrap justify-center gap-4">
          {skills.map(skill => (
            <li key={skill} className="px-6 py-2 bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-200 rounded-lg font-medium">
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
