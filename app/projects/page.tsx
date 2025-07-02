"use client"
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import "./style.css";
const projects = [
  {
    title: 'Shakti - Women Security Surveillance',
    description: 'An innovative AI-powered surveillance system designed to enhance women\'s security through real-time gender detection. Utilizing advanced computer vision and deep learning techniques, Shakti analyzes video feeds to identify potential security threats. The system employs a sophisticated CNN architecture for accurate gender detection, processes data streams using OpenCV, and leverages TensorFlow for robust machine learning capabilities. Built with scalability in mind, it includes comprehensive data analysis tools using Pandas and Numpy for pattern recognition and threat assessment.',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80',
    tags: ['Python', 'OpenCV', 'TensorFlow', 'CNN', 'Pandas', 'Numpy'],
    github: 'https://github.com/pranjalboss123/SHAKTI-Women-Security-Surveillance-System-',
  },
  {
    title: 'Kisaan Mart',
    description: 'A revolutionary e-commerce platform empowering farmers by eliminating intermediaries from the agricultural supply chain. This full-stack application provides a direct marketplace where farmers can showcase their produce, set their own prices, and connect directly with consumers. Built with React for a dynamic frontend, Node.js and Express.js for a robust backend, and MongoDB for flexible data storage. Features include real-time price updates, inventory management, secure payment processing, and an intuitive user interface for both farmers and buyers.',
    image: 'https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?auto=format&fit=crop&q=80',
    tags: ['React', 'Node.js', 'MongoDB', 'Express.js'],
    github: 'https://github.com/pranjalboss123/Khet-Market--MERN-',
  },
  {
    title: 'Swar-Shiksha',
    description: 'An interactive classical music learning platform that makes traditional Indian music education accessible to everyone. This web application features an intuitive interface for learning various ragas, taals, and musical compositions. Built with pure HTML, CSS, and JavaScript, it includes interactive music players, virtual instruments, practice modules, and progress tracking. The platform offers comprehensive lessons from basic to advanced levels, complete with audio examples and visual demonstrations.',
    image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&q=80',
    tags: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/pranjalboss123/Swar-Shiksha',
  },
  {
    title: 'Gym Management System',
    description: 'A comprehensive gym management solution that streamlines operations for fitness centers. Built with Python and SQL, this system handles member management, attendance tracking, workout planning, and billing operations. Features include automated membership renewals, personalized workout tracking, equipment maintenance schedules, and detailed financial reporting. The system also includes data visualization tools for analyzing membership trends and facility usage patterns.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80',
    tags: ['Python', 'SQL'],
    github: 'https://github.com/pranjalboss123/Gym-management',
  }
];

export default function Projects() {
  return (
    <div className="min-h-screen pt-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60"
        >
          Featured Projects
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group bg-gradient-to-br from-background to-primary/5 rounded-lg overflow-hidden shadow-lg border border-primary/10 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500"
            >
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-500">{project.title}</h3>
                <div className="relative">
                  {/* <p className="text-muted-foreground mb-4 line-clamp-4 group-hover:line-clamp-none transition-transform duration-700 ease-in-out">{project.description}</p> */}
                  <div className="relative group/desc">
                    <p
                      className="text-muted-foreground mb-4 overflow-hidden transition-all duration-700 ease-in-out max-h-[6.5rem] group-hover/desc:max-h-[1000px]"
                      style={{ willChange: 'max-height' }}
                    >
                      {project.description}
                    </p>
                    {/* Fade overlay */}
                    <div className="absolute bottom-0 left-0 w-full h-12 fade opacity-100 group-hover/desc:opacity-0 transition-opacity duration-700" />
                  </div>

                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-primary/10 text-primary rounded text-sm hover:bg-primary/20 transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Button asChild variant="outline" size="sm" className="hover:scale-105 transition-transform duration-300">
                    <Link href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      View Code
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}