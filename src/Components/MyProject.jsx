import React from 'react'
import { FaLaptop, FaMobileAlt } from 'react-icons/fa'
import css from '../assets/css.png'
import dotnet from '../assets/dotnet.png'
import mysql from '../assets/MySQL.png'
import recsound from '../assets/Rec Sound.PNG'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Github, Monitor, Smartphone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    id: 1,
    title: "Rec Sound",
    description:
      "Plateforme de vente des materiels de musique : instruments, sonorisations, ... et des lumières, des projecteurs et etc...",
    image: dotnet,
    type: "web",
    technologies: ["Dotnet", "Html", "Css", "MySQL"],
    githubUrl: "https://github.com/username/ecommerce-dashboard",
    liveUrl: "https://ecommerce-dashboard-demo.vercel.app",
    status: "completed",
  },
  {
    id: 2,
    title: "Task Manager Mobile",
    description:
      "Application mobile de gestion de tâches avec synchronisation cloud, notifications push et collaboration en équipe.",
    image: "/placeholder.svg?height=300&width=400",
    type: "mobile",
    technologies: ["React Native", "TypeScript", "Expo", "Firebase", "AsyncStorage"],
    githubUrl: "https://github.com/username/task-manager-mobile",
    status: "completed",
  },
  {
    id: 3,
    title: "Portfolio Personnel",
    description: "Site web portfolio responsive avec animations fluides, blog intégré et formulaire de contact.",
    image: "/placeholder.svg?height=300&width=400",
    type: "web",
    technologies: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "MDX"],
    githubUrl: "https://github.com/username/portfolio",
    liveUrl: "https://mon-portfolio.vercel.app",
    status: "completed",
  },
  {
    id: 4,
    title: "Fitness Tracker",
    description:
      "Application mobile de suivi fitness avec tracking GPS, plans d'entraînement personnalisés et statistiques détaillées.",
    image: "/placeholder.svg?height=300&width=400",
    type: "mobile",
    technologies: ["React Native", "Expo", "SQLite", "Maps API", "HealthKit"],
    githubUrl: "https://github.com/username/fitness-tracker",
    status: "in-progress",
  }
]

const getStatusColor = (status) => {
  switch (status) {
    case "completed":
      return "bg-green-100 text-green-800 border-green-200"
    case "in-progress":
      return "bg-yellow-100 text-yellow-800 border-yellow-200"
    case "planned":
      return "bg-blue-100 text-blue-800 border-blue-200"
    default:
      return "bg-gray-100 text-gray-800 border-gray-200"
  }
}

const getStatusText = (status) => {
  switch (status) {
    case "completed":
      return "Terminé"
    case "in-progress":
      return "En cours"
    case "planned":
      return "Planifié"
    default:
      return status
  }
}


const MyProject = () => {

  const webProjects = projects.filter((project) => project.type === "web")
  const mobileProjects = projects.filter((project) => project.type === "mobile")

  return (
    <div className='mt-[135px] flex flex-col justify-center items-center w-full mb-[50px]'>
        <h1 className='text-center font-bold text-4xl text-neutral-800 mt-8'>Mes Projets</h1>

        <div className="flex justify-center mt-8 mb-8">
          <ul className="flex gap-8">
            <li className="flex items-center gap-3 cursor-pointer mr-[80px]" >
              <span className="bg-black text-white rounded-full p-3 shadow-md flex items-center justify-center">
                <FaLaptop className="text-xl" />
              </span>
              <span className="font-bold text-black">Plateforme Web</span>
            </li>
            <li className="flex items-center gap-3 cursor-pointer">
              <span className="bg-gray-300 text-white rounded-full p-3 shadow-md flex items-center justify-center">
                <FaMobileAlt className="text-xl" />
              </span>
              <span className="font-medium text-gray-400">Application Mobile</span>
            </li>
          </ul>
        </div>

        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Mon Portfolio</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Découvrez mes projets web et mobile développés avec React.js, React Native et Tailwind CSS
              </p>
            </div>

            {/* Web Section */}
            <section className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <Monitor className="w-8 h-8 text-blue-600" />
                <h2 className="text-3xl font-bold text-gray-900">Projets Web</h2>
                <Badge variant="secondary" className="ml-2">{webProjects.length} projets</Badge>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {webProjects.map((project) => (
                  <Card key={project.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={400}
                        height={300}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 right-4">
                        <Badge className={getStatusColor(project.status)}>{getStatusText(project.status)}</Badge>
                      </div>
                    </div>

                    <CardHeader>
                      <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600 line-clamp-3">{project.description}</CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">{tech}</Badge>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        {project.githubUrl && (
                          <Button variant="outline" size="sm" asChild>
                            <Link href={project.githubUrl} target="_blank">
                              <Github className="w-4 h-4 mr-2" />
                              Code
                            </Link>
                          </Button>
                        )}
                        {project.liveUrl && (
                          <Button size="sm" asChild>
                            <Link href={project.liveUrl} target="_blank">
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Démo
                            </Link>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Mobile Section */}
            <section>
              <div className="flex items-center gap-3 mb-8">
                <Smartphone className="w-8 h-8 text-green-600" />
                <h2 className="text-3xl font-bold text-gray-900">Projets Mobile</h2>
                <Badge variant="secondary" className="ml-2">{mobileProjects.length} projets</Badge>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {mobileProjects.map((project) => (
                  <Card key={project.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={400}
                        height={300}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 right-4">
                        <Badge className={getStatusColor(project.status)}>{getStatusText(project.status)}</Badge>
                      </div>
                    </div>

                    <CardHeader>
                      <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600 line-clamp-3">{project.description}</CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">{tech}</Badge>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        {project.githubUrl && (
                          <Button variant="outline" size="sm" asChild>
                            <Link href={project.githubUrl} target="_blank">
                              <Github className="w-4 h-4 mr-2" />
                              Code
                            </Link>
                          </Button>
                        )}
                        {project.liveUrl && (
                          <Button size="sm" asChild>
                            <Link href={project.liveUrl} target="_blank">
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Démo
                            </Link>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Footer */}
            <div className="text-center mt-16 py-8 border-t border-gray-200">
              <p className="text-gray-600">Développé avec ❤️ en utilisant React.js et Tailwind CSS</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default MyProject
