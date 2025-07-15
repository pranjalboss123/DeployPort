'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Github, Linkedin, Mail, Send } from 'lucide-react';
import Link from 'next/link';

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="min-h-screen pt-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl font-bold mb-6">Get in Touch</h1>
            <p className="text-lg text-muted-foreground mb-8">
              I'm always open to new opportunities and collaborations. Feel free to
              reach out if you'd like to work together or just want to say hello!
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Mail className="h-6 w-6 text-primary" />
                <a
                  href="mailto:your.email@example.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  guptapranjal68@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <Github className="h-6 w-6 text-primary" />
                <Link
                  href="https://github.com/pranjalboss123"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  github.com/pranjalboss123
                </Link>
              </div>
              <div className="flex items-center space-x-4">
                <Linkedin className="h-6 w-6 text-primary" />
                <Link
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  https://in.linkedin.com/in/rishikeshguptaa                </Link>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  placeholder="Your Name"
                  required
                  className="w-full"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  required
                  className="w-full"
                />
              </div>
              <div>
                <Input
                  type="text"
                  placeholder="Subject"
                  required
                  className="w-full"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  required
                  className="w-full min-h-[200px]"
                />
              </div>
              <Button type="submit" className="w-full">
                Send Message
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}