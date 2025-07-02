'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code, Layout, Server, Cpu, Database, BookOpen } from 'lucide-react';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const animatedTexts = [
  "Web Developer",
  "Software Developer",
  "DevOps Engineer",
  "Full Stack Developer"
];

export default function Home() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((current) => (current + 1) % animatedTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="flex items-center justify-center min-h-screen bg-gradient-to-br from-background via-primary/5 to-primary/10 pt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-0"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="mb-6"
              >
                <h2 className="text-xl md:text-2xl text-primary mb-4">Hello, I'm</h2>
                <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
                  Rishikesh Gupta
                </h1>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="h-16"
                >
                  <motion.h2
                    key={textIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="text-2xl md:text-3xl text-muted-foreground"
                  >
                    {animatedTexts[textIndex]}
                  </motion.h2>
                </motion.div>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0"
              >
                A passionate Full Stack Developer with expertise in modern web technologies.
                Proficient in multiple programming languages and frameworks, with a strong
                foundation in both frontend and backend development. Currently pursuing B.Tech
                in Computer Science while actively building innovative solutions.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Button asChild size="lg" className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transform hover:scale-105 transition-all">
                  <Link href="/projects">
                    View Projects <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="hover:shadow-lg transform hover:scale-105 transition-all">
                  <Link href="/contact">Contact Me</Link>
                </Button>
              </motion.div>
            </div>

            {/* <motion.div
              className="relative w-full h-[400px] lg:h-[500px] shadow-glow rounded-2xl overflow-hidden  transform hover:scale-[1.5]] transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent z-10 rounded-2xl" />
              <Image 
                src="Portme.jpg"
                alt="Professional headshot"
                fill
                className="object-cover  rounded-2xl"
                priority
              />
            </motion.div> */}
            <motion.div
              className="relative w-full h-[400px] lg:h-[570px] shadow-glow rounded-2xl overflow-hidden transform hover:scale-105 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent z-10 rounded-2xl" />
              <Image
                src="Portme.jpg"
                alt="Professional headshot"
                layout="responsive"
                width={800}
                height={1000}
                className="object-contain rounded-2xl w-full h-full"
                priority
              />
            </motion.div>
          </div>

        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gradient-to-b from-muted/50 to-background">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60"
          >
            Skills & Expertise
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              variants={itemVariants}
              className="group p-6 rounded-lg shadow-lg bg-gradient-to-br from-background to-primary/5 border border-primary/10 backdrop-blur-sm hover:shadow-xl hover:scale-105 transition-all duration-500 hover:bg-gradient-to-tr hover:from-primary/10 hover:via-primary/5 hover:to-background relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Code className="h-12 w-12 mb-4 text-primary relative z-10" />
              <h3 className="text-xl font-semibold mb-2 relative z-10">Programming Languages</h3>
              <p className="text-muted-foreground relative z-10">
                Java, C, JavaScript, C++, Python
              </p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="group p-6 rounded-lg shadow-lg bg-gradient-to-br from-background to-primary/5 border border-primary/10 backdrop-blur-sm hover:shadow-xl hover:scale-105 transition-all duration-500 hover:bg-gradient-to-tr hover:from-primary/10 hover:via-primary/5 hover:to-background relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Layout className="h-12 w-12 mb-4 text-primary relative z-10" />
              <h3 className="text-xl font-semibold mb-2 relative z-10">Frameworks</h3>
              <p className="text-muted-foreground relative z-10">
                Node.js, Express.js, React, Next.js, Bootstrap
              </p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="group p-6 rounded-lg shadow-lg bg-gradient-to-br from-background to-primary/5 border border-primary/10 backdrop-blur-sm hover:shadow-xl hover:scale-105 transition-all duration-500 hover:bg-gradient-to-tr hover:from-primary/10 hover:via-primary/5 hover:to-background relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Database className="h-12 w-12 mb-4 text-primary relative z-10" />
              <h3 className="text-xl font-semibold mb-2 relative z-10">Databases</h3>
              <p className="text-muted-foreground relative z-10">
                SQL, MongoDB
              </p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="group p-6 rounded-lg shadow-lg bg-gradient-to-br from-background to-primary/5 border border-primary/10 backdrop-blur-sm hover:shadow-xl hover:scale-105 transition-all duration-500 hover:bg-gradient-to-tr hover:from-primary/10 hover:via-primary/5 hover:to-background relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Cpu className="h-12 w-12 mb-4 text-primary relative z-10" />
              <h3 className="text-xl font-semibold mb-2 relative z-10">Tools & Platforms</h3>
              <p className="text-muted-foreground relative z-10">
                VS Code, Postman, Git, Google Cloud
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}