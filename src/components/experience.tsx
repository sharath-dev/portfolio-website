export default function Experience() {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Hexon Global",
      period: "Mar 2021 — July 2023",
      command: 'git log --author="Sharath" --since="Mar 2021" --until="July 2023"',
      achievements: [
        "Developed highly efficient backend APIs using Flask and NodeJS",
        "Architected serverless solutions using AWS Lambda for enhanced scalability",
        "Designed responsive UIs using Angular and React",
        "Automated deployments with Docker, reducing deployment time by 60%",
        "Implemented CI/CD pipeline, increasing release frequency by 50%"
      ]
    },
    {
      title: "Front End Developer",
      company: "Hexon Global",
      period: "Sept 2020 — Mar 2021",
      command: 'git log --author="Sharath" --since="Sept 2020" --until="Mar 2021"',
      achievements: [
        "Contributed to front-end development using Angular for intuitive UIs"
      ]
    }
  ]

  return (
    <section id="experience" className="py-20 bg-terminalGray">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-16 text-primary">
          <span className="text-gray-500"># </span>Experience
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="code-block p-8 rounded-lg border border-green-400/30">
              <div className="flex items-center mb-4">
                <span className="text-gray-500">$ </span>
                <span className="text-primary ml-2">{exp.command}</span>
              </div>
              <div className="border-l-2 border-accent pl-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-accent">{exp.title}</h3>
                    <p className="text-gray-400">{exp.company}</p>
                  </div>
                  <span className="text-gray-500 text-sm">{exp.period}</span>
                </div>
                <ul className="space-y-2 text-sm text-gray-300">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="flex items-start">
                      <span className="text-primary mr-2">{'>'}</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
