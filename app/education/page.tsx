'use client';

import { motion } from 'framer-motion';
import { BookOpen, GraduationCap, School } from 'lucide-react';

export default function Education() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen pt-20">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
      >
        <motion.h1
          variants={itemVariants}
          className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60"
        >
          Educational Journey
        </motion.h1>

        <div className="space-y-12">
          <motion.div
            variants={itemVariants}
            className="p-8 rounded-xl bg-gradient-to-br from-background to-primary/5 border border-primary/10 hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-start gap-6">
              <div className="hidden md:block">
                <GraduationCap className="h-12 w-12 text-primary" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-2">ABES Institute Of Technology</h2>
                <p className="text-xl text-muted-foreground mb-4">B.Tech in Computer Science and Engineering</p>
                <p className="text-muted-foreground mb-6">July 2022 - Present • Ghaziabad</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    { semester: '1st Semester', sgpa: '8.23' },
                    { semester: '2nd Semester', sgpa: '8.86' },
                    { semester: '3rd Semester', sgpa: '7.96' },
                    { semester: '4th Semester', sgpa: '8.17' },
                    { semester: '5th Semester', sgpa: '8.17' },
                  ].map((item, index) => (
                    <motion.div
                      key={item.semester}
                      variants={itemVariants}
                      className="p-4 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors"
                    >
                      <h3 className="font-semibold">{item.semester}</h3>
                      <p className="text-primary font-bold">SGPA: {item.sgpa}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="p-8 rounded-xl bg-gradient-to-br from-background to-primary/5 border border-primary/10 hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-start gap-6">
              <div className="hidden md:block">
                <School className="h-12 w-12 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-2">Angels Public School</h2>
                <div className='flex gap-4'>
                <div className="inline-block px-4 py-2 rounded-lg bg-primary/5">
                <p className="text-xl text-muted-foreground mb-2">Intermediate (12th Class - PCM)</p>
                <p className="text-muted-foreground mb-4">2022 • Delhi</p>
                  <p className="text-primary font-bold">Percentage: 80%</p>
                </div>
                <div className="inline-block px-4 py-2 rounded-lg bg-primary/5">
                <p className="text-xl text-muted-foreground mb-2">Senior Secondary (10th Class - PCM)</p>
                <p className="text-muted-foreground mb-4">2020 • Delhi</p>
                  <p className="text-primary font-bold">Percentage: 86%</p>
                </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}