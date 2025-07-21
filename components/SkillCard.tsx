'use client';
import { motion } from 'framer-motion';
import SkillModal from './SkillModal';
import { ReactElement, useState } from 'react';

interface SkillCardProps {
  icon: ReactElement;
  title: string;
  details: { name: string; level: number; projects: string[] }[];
}

export default function SkillCard({ icon, title, details }: SkillCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <motion.div
        whileHover={{ y: -10 }}
        onClick={() => setIsOpen(true)}
        className="group p-6 h-full flex flex-col justify-between rounded-lg shadow-lg bg-gradient-to-br from-background to-primary/5 border border-primary/10 backdrop-blur-sm cursor-pointer relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative z-10 flex flex-col items-start flex-grow">
          {icon}
          <h3 className="text-xl font-semibold mb-2 mt-4">{title}</h3>
          <p className="text-muted-foreground mt-auto">
            {details.map((item) => item.name).join(', ')}
          </p>
        </div>
      </motion.div>
      <SkillModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title={title}
        details={details}
      />
    </>
  );
}
