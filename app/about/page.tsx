'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen pt-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl font-bold mb-6">About Me</h1>
            <p className="text-lg text-muted-foreground mb-6">
              I'm a passionate Full Stack Developer with expertise in building modern web
              applications. With a strong foundation in both frontend and backend
              technologies, I create seamless digital experiences that solve real-world
              problems.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              My journey in web development started several years ago, and since then,
              I've worked on various projects ranging from small business websites to
              complex enterprise applications.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative h-[400px] rounded-lg overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80"
              alt="Developer workspace"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="mt-20"
        >
          {/* <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-muted rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Senior Developer</h3>
              <p className="text-muted-foreground mb-2">Tech Company • 2020 - Present</p>
              <p className="text-muted-foreground">
                Led development of multiple web applications using React and Node.js.
                Mentored junior developers and implemented best practices.
              </p>
            </div>
            <div className="p-6 bg-muted rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Full Stack Developer</h3>
              <p className="text-muted-foreground mb-2">Digital Agency • 2018 - 2020</p>
              <p className="text-muted-foreground">
                Developed and maintained client websites and applications. Worked with
                various technologies including React, Node.js, and PostgreSQL.
              </p>
            </div>
          </div> */}
        </motion.div>
      </motion.div>
    </div>
  );
}