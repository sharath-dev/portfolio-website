'use client'

import { Badge } from "./ui/badge"

export default function Timeline() {

  return (
    <div>
      <div className="flex flex-col pt-10">
        <div className="flex flex-row justify-between items-center">
          <div>
            <span className="text-3xl">Hexon Global</span> - Full Stack Engineer
          </div>
          <div>
            <Badge variant="outline">React</Badge>
            <Badge variant="outline">NextJS</Badge>
            <Badge variant="outline">Angular</Badge>
            <Badge variant="outline">Flask</Badge>
            <Badge variant="outline">NodeJS</Badge>
            <Badge variant="outline">Angular</Badge>
          </div>
        </div>
        <span>March 2021 - July 2023</span>
        <p>
          • Developed highly efficient backend APIs using Flask and NodeJS. <br/>
          • Architected and implemented serverless solutions using AWS Lambda, resulting in enhanced scalability for
            various applications.<br/>
          • Designed and developed responsive user interfaces for multiple applications using Angular and React.<br/>
          • Managed and automated application deployments using Docker, significantly reducing deployment time
          and ensuring consistent environments across production and development.<br/>
          • Engineered and implemented a robust CI/CD piple through AWS, enabling seamless multi-region
          deployment of Lambdas and increasing release frequency.
        </p>
      </div>
      <div className="flex flex-col pt-10">
        <div className="flex flex-row justify-between items-center">
          <div>
            <span className="text-3xl">Hexon Global</span> - Frontend Engineer
          </div>
          <div>
            <Badge variant="outline">Angular</Badge>
          </div>
        </div>
        <span>Sept 2020 — Mar 2021</span>
        <p>
          • Contributed to front-end development initiatives, primarily using Angular, to deliver intuitive user
            interfaces that enhanced user experience.
        </p>
      </div>
      <div className="flex flex-col pt-10">
        <div className="flex flex-row justify-between items-center">
          <div>
            <span className="text-3xl">BigFDay</span> - Full Stack Engineer
          </div>
          <div>
            <Badge variant="outline">Angular</Badge>
            <Badge variant="outline">.NET</Badge>
          </div>
        </div>
        <span>Nov 2018 — Apr 2019, Dec 2019 — Jan 2020</span>
        <p>
          • Contributed to full-stack web development using ASP.NET and Angular, implementing key features that
          improved application functionality and user interaction.<br/>
          • Successfully set up a CI/CD pipeline using Jenkins, automating testing and deployment processes, which
          reduced manual deployment efforts and improved team efficiency.
        </p>
      </div>
    </div>
  )
}