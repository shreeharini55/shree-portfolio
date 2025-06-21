"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  ExternalLink,
  Download,
  Trophy,
  Star,
  Award,
  MapPin,
  Calendar,
  Code,
  Smartphone,
  Database,
  Send,
} from "lucide-react"

export default function Portfolio() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    alert("Thank you for your message! I'll get back to you soon.")
    setFormData({ name: "", email: "", message: "" })
  }

  const downloadResume = () => {
    const link = document.createElement('a')
    link.href = '/ShreeHariniSResume.pdf'
    link.download = 'ShreeHariniSResume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const skills = ["Python", "Java", "C", "React", "Next.js", "HTML", "CSS", "JavaScript", "AWS", "Git", "MySQL"]

  const projects = [
    {
      title: "Smart Farming App",
      description:
        "A comprehensive React application built with Next.js for modern agricultural management and monitoring.",
      tech: "React + Next.js",
      icon: <Smartphone className="h-6 w-6" />,
    },
    {
      title: "Automated Irrigation System",
      description:
        "IoT-based smart irrigation solution that optimizes water usage through sensor data and automated controls.",
      tech: "IoT + Sensors",
      icon: <Database className="h-6 w-6" />,
    },
    {
      title: "Smart India Hackathon Solution",
      description:
        "Innovative solution developed for Smart India Hackathon addressing real-world challenges with technology.",
      tech: "Full Stack",
      icon: <Code className="h-6 w-6" />,
    },
    {
      title: "IKS Mini Project",
      description: "Indigenous Knowledge Systems project focusing on preserving and digitizing traditional knowledge.",
      tech: "Research + Development",
      icon: <Star className="h-6 w-6" />,
    },
  ]

  const experiences = [
    {
      company: "Zidio Development",
      role: "Java Full Stack Intern",
      period: "June – September 2025",
      points: [
        "Developed full-stack web applications using Java Spring Boot",
        "Implemented RESTful APIs and database integration",
        "Collaborated with cross-functional teams on enterprise projects",
      ],
    },
    {
      company: "Livestream Technologies",
      role: "Software Development Intern",
      period: "May – June 2023",
      points: [
        "Contributed to software development lifecycle processes",
        "Gained hands-on experience with modern development tools",
        "Participated in code reviews and agile development practices",
      ],
    },
  ]

  const achievements = [
    {
      title: "1st Prize – Quiz Competition",
      icon: <Trophy className="h-6 w-6 text-yellow-500" />,
    },
    {
      title: "2nd Prize – Engineering Graphics Competition",
      icon: <Award className="h-6 w-6 text-gray-500" />,
    },
  ]

  const certifications = [
    "AWS Academy Cloud Foundations",
    "Python and MySQL – GUVI",
    "Internship – Livestream Technologies",
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl font-bold text-blue-600">Shree Harini S</div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">
                About
              </a>
              <a href="#projects" className="text-gray-600 hover:text-blue-600 transition-colors">
                Projects
              </a>
              <a href="#experience" className="text-gray-600 hover:text-blue-600 transition-colors">
                Experience
              </a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="h-screen bg-cover bg-center bg-no-repeat relative flex items-end justify-center"
        style={{
          backgroundImage: "linear-gradient(rgba(51, 65, 85, 0.7), rgba(51, 65, 85, 0.7)), url('/images/hero-bg.png')",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hi, I'm <span className="text-blue-300">Shree Harini S</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Aspiring Software Developer | React Enthusiast | Python & Java Programmer
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              View My Projects
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-blue-300 text-blue-300 hover:bg-blue-300 hover:text-slate-800"
              onClick={downloadResume}
            >
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                I'm a final-year BE Computer Science Engineering student at Jansons Institute of Technology, passionate
                about creating innovative solutions through technology. With strong foundations in Python, Java, and C,
                I specialize in web development using React and Next.js. I'm driven by the opportunity to solve
                real-world problems through code and continuously expanding my knowledge in emerging technologies.
              </p>
              <div className="flex items-center justify-center text-gray-500 mb-8">
                <MapPin className="h-4 w-4 mr-2" />
                <span>Jansons Institute of Technology</span>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Technical Skills</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {skills.map((skill, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="px-4 py-2 bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Projects</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-blue-100 rounded-lg text-blue-600">{project.icon}</div>
                    <div>
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                      <Badge variant="outline" className="text-xs">
                        {project.tech}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-4">{project.description}</CardDescription>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </Button>
                    <Button size="sm" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Experience</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="border-l-4 border-l-blue-600 shadow-md">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <CardTitle className="text-xl text-gray-900">{exp.role}</CardTitle>
                      <CardDescription className="text-lg font-medium text-blue-600">{exp.company}</CardDescription>
                    </div>
                    <div className="flex items-center text-gray-500 mt-2 md:mt-0">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {exp.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-600">{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements & Certifications */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Achievements */}
            <div>
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Achievements</h2>
                <div className="w-16 h-1 bg-blue-600 mx-auto"></div>
              </div>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <Card key={index} className="shadow-md hover:shadow-lg transition-shadow">
                    <CardContent className="flex items-center p-6">
                      {achievement.icon}
                      <span className="ml-4 text-lg font-medium text-gray-900">{achievement.title}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Certifications</h2>
                <div className="w-16 h-1 bg-blue-600 mx-auto"></div>
              </div>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <Card key={index} className="shadow-md hover:shadow-lg transition-shadow">
                    <CardContent className="flex items-center p-6">
                      <Award className="h-6 w-6 text-blue-600" />
                      <span className="ml-4 text-lg font-medium text-gray-900">{cert}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-blue-600 mr-4" />
                  <a
                    href="mailto:shreeharini55@gmail.com"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    shreeharini55@gmail.com
                  </a>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-blue-600 mr-4" />
                  <a href="tel:+919384431237" className="text-gray-600 hover:text-blue-600 transition-colors">
                    +91 9384431237
                  </a>
                </div>
                <div className="flex items-center">
                  <Linkedin className="h-5 w-5 text-blue-600 mr-4" />
                  <a
                    href="https://linkedin.com/in/shreeharini55"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    linkedin.com/in/shreeharini55
                  </a>
                </div>
                <div className="flex items-center">
                  <Github className="h-5 w-5 text-blue-600 mr-4" />
                  <a
                    href="https://github.com/shreeharini55"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    github.com/shreeharini55
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="border-gray-300 focus:border-blue-600 focus:ring-blue-600"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="border-gray-300 focus:border-blue-600 focus:ring-blue-600"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="border-gray-300 focus:border-blue-600 focus:ring-blue-600"
                  />
                </div>
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p>&copy; 2025 Shree Harini S. All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <a
                href="https://github.com/shreeharini55"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/shreeharini55"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
