export default function About() {
  return (
    <section id="about" className="py-20 bg-terminalGray">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-16 text-primary">
          <span className="text-gray-500"># </span>About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="code-block p-6 rounded-lg border border-green-400/30">
              <div className="text-sm">
                <span className="text-gray-500">/*</span>
              </div>
              <div className="text-sm text-gray-400 ml-2">
                * Passionate full-stack developer with 3+ years of experience
              </div>
              <div className="text-sm text-gray-400 ml-2">
                * building robust web applications and scalable backend systems.
              </div>
              <div className="text-sm text-gray-400 ml-2">
                * I love solving complex problems and creating user-friendly
              </div>
              <div className="text-sm text-gray-400 ml-2">
                * interfaces that make a difference.
              </div>
              <div className="text-sm">
                <span className="text-gray-500">*/</span>
              </div>
            </div>
            
            <div className="code-block p-6 rounded-lg border border-green-400/30">
              <div className="space-y-2 text-sm">
                <div className="text-green-400">
                  <span className="text-blue-400">const</span> 
                  <span className="text-yellow-400"> currentStatus</span> = {'{'}
                </div>
                <div className="ml-4 text-green-400">
                  studying: <span className="text-orange-400">&quot;MS Computer Science @ IIT Chicago&quot;</span>,
                </div>
                <div className="ml-4 text-green-400">
                  location: <span className="text-orange-400">&quot;Chicago, Illinois&quot;</span>,
                </div>
                <div className="ml-4 text-green-400">
                  graduation: <span className="text-orange-400">&quot;December 2025&quot;</span>,
                </div>
                <div className="ml-4 text-green-400">
                  cgpa: <span className="text-orange-400">3.6</span>
                </div>
                <div className="text-green-400">{'};'}</div>
              </div>
            </div>
          </div>
          
          <div className="code-block p-6 rounded-lg border border-green-400/30">
            <h3 className="text-xl font-bold mb-6 text-primary">Education</h3>
            <div className="space-y-6 text-sm">
              <div>
                <div className="text-primary font-bold">Master of Computer Science</div>
                <div className="text-gray-400">Illinois Institute of Technology, Chicago</div>
                <div className="text-gray-500">2024 - Present (Expected: Dec 2025) | CGPA: 3.6</div>
              </div>
              
              <div className="border-l-2 border-green-400/30 pl-4">
                <div className="text-primary font-bold">Bachelor of Engineering</div>
                <div className="text-gray-400">Computer Science & Engineering</div>
                <div className="text-gray-400">Loyola-ICAM College of Engineering & Technology</div>
                <div className="text-gray-500">2017 - 2021 | CGPA: 7.6/10.0</div>
              </div>
              
              <div className="border-l-2 border-green-400/30 pl-4">
                <div className="text-primary font-bold">High School</div>
                <div className="text-gray-400">Don Bosco Egmore, Chennai</div>
                <div className="text-gray-500">2016 - 2017 | Percentage: 91%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
