import React from 'react'
import { FaLaptop, FaMobileAlt } from 'react-icons/fa'
import recsound from '../assets/Rec Sound.PNG'
import chatmih from '../assets/Chat Mih.PNG'
import ifidy from '../assets/ifidy.PNG'
import taskmaster from '../assets/TastMaster.PNG'
import loginui from '../assets/LoginUI.jpg'
import melodikey from '../assets/MelodiKey.jpg'
import { Badge } from "../Components/ui/badge"
import { Button } from "../Components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../Components/ui/card"
import { ExternalLink, Github, Monitor, Smartphone } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Rec Sound",
    description:
      "Plateforme de vente des materiels de musique : instruments, sonorisations, ... et des lumières, des projecteurs et etc...",
    image: recsound,
    type: "web",
    technologies: ["Dotnet", "Html", "Css", "MySQL"],
    githubUrl: "https://github.com/MihSA2006/Rec-Sound",
    liveUrl: "https://ecommerce-dashboard-demo.vercel.app",
    status: "completed",
  },
  {
    id: 2,
    title: "Chat Mih",
    description:
      "Plateforme de chatbot intelligent utilisant l'api de Groq. Ayant les models : texte, raisonnement, et vision",
    image: chatmih,
    type: "web",
    technologies: ["ReactJs", "Express", "Scss"],
    githubUrl: "https://github.com/MihSA2006/Chat-Mih",
    liveUrl: "https://ecommerce-dashboard-demo.vercel.app",
    status: "in-progress",
  },
  {
    id: 3,
    title: "I-Fidy",
    description:
      "Une plateforme sécurisée de vote électronique destinée aux élections locales. Sécurité : Authentification à deux facteurs, Reconnaissance faciale, ... ",
    image: ifidy,
    type: "web",
    technologies: ["ReactJs", "Django", "Tailwind Css", "Postgresql"],
    githubUrl: "https://github.com/rabearisonkhevin15/I-fidy-dash",
    liveUrl: "https://ecommerce-dashboard-demo.vercel.app",
    status: "in-progress",
  },
  {
    id: 4,
    title: "TaskMaster",
    description:
      "Simple Todo App avec Java Swing",
    image: taskmaster,
    type: "web",
    technologies: ["Java Swing"],
    githubUrl: "https://github.com/MihSA2006/Task-Master",
    liveUrl: "https://ecommerce-dashboard-demo.vercel.app",
    status: "completed",
  },
   {
    id: 5,
    title: "Login UI",
    description:
      "Application Simple de  Connexion et Inscription avec authentification Mail",
    image: loginui,
    type: "mobile",
    technologies: ["Java","SQLite"],
    githubUrl: "https://github.com/MihSA2006/Login-UI",
    liveUrl: "https://ecommerce-dashboard-demo.vercel.app",
    status: "completed",
  },
  {
    id: 6,
    title: "MelodiKey",
    description:
      "Application pour aider les musciens à organiser leur repertoire pour des évènements",
    image: melodikey,
    type: "mobile",
    technologies: ["Java","SQLite"],
    githubUrl: "https://github.com/Sarobidy2112/MelodiKey",
    liveUrl: "https://ecommerce-dashboard-demo.vercel.app",
    status: "in-progress",
  },
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



import { useState } from 'react';

const MyProject = () => {
  const [activeTab, setActiveTab] = useState('web');
  const webProjects = projects.filter((project) => project.type === "web");
  const mobileProjects = projects.filter((project) => project.type === "mobile");
  const displayedProjects = activeTab === 'web' ? webProjects : mobileProjects;

  return (
    <div id='project' className='mt-[135px] flex flex-col justify-center items-center w-full mb-[50px]'>
      <h1 className='text-center font-bold text-4xl text-neutral-800 mt-8'>Mes Projets</h1>

      <div className="flex justify-center mt-8 mb-8">
        <ul className="flex gap-8">
          <li
            className={`flex items-center gap-3 cursor-pointer mr-[80px] transition-all duration-200 ${activeTab === 'web' ? 'scale-105' : ''}`}
            onClick={() => setActiveTab('web')}
          >
            <span className={`rounded-full p-3 shadow-md flex items-center justify-center transition-all duration-200 ${activeTab === 'web' ? 'bg-black text-white' : 'bg-gray-300 text-gray-400'}`}>
              <FaLaptop className="text-xl" />
            </span>
            <span className={`font-bold transition-all duration-200 ${activeTab === 'web' ? 'text-black' : 'text-gray-400'}`}>Plateforme Web</span>
          </li>
          <li
            className={`flex items-center gap-3 cursor-pointer transition-all duration-200 ${activeTab === 'mobile' ? 'scale-105' : ''}`}
            onClick={() => setActiveTab('mobile')}
          >
            <span className={`rounded-full p-3 shadow-md flex items-center justify-center transition-all duration-200 ${activeTab === 'mobile' ? 'bg-black text-white' : 'bg-gray-300 text-gray-400'}`}>
              <FaMobileAlt className="text-xl" />
            </span>
            <span className={`font-bold transition-all duration-200 ${activeTab === 'mobile' ? 'text-black' : 'text-gray-400'}`}>Application Mobile</span>
          </li>
        </ul>
      </div>

      {/* section project Content */}
      <div className="flex justify-center w-full">
        <div className="max-w-5xl w-full mx-auto">
          <section className="mb-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center items-center">
              {displayedProjects.map((project) => (
                <Card key={project.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg w-[320px] h-[370px] flex flex-col justify-between">
                  <div>
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img
                        src={project.image}
                        alt={project.title}
                        width="320"
                        height="200"
                        className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-3 right-3">
                        <Badge className={getStatusColor(project.status)}>{getStatusText(project.status)}</Badge>
                      </div>
                    </div>

                    <CardHeader>
                      <CardTitle className="text-lg font-bold text-gray-900 group-hover:text-gray-600 transition-colors">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600 text-xs line-clamp-2">{project.description}</CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">{tech}</Badge>
                        ))}
                      </div>
                    </CardContent>
                  </div>
                  {/* section bouton fixé en bas */}
                  <div className="flex gap-2 justify-end px-6 pb-4 mt-auto">
                    {project.githubUrl && (
                      <Button variant="outline" size="sm">
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    )}
                    {project.liveUrl && (
                      <Button size="sm">
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Démo
                        </a>
                      </Button>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </div>

    </div>
  )
}

export default MyProject
