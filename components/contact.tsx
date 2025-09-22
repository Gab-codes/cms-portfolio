"use client";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { HoverEffect } from "./ui/card-hover-effect";

export function Contact() {
  const contactItems = [
    {
      title: "Email",
      description: "dayotoru@gmail.com",
      icon: <Mail className="h-6 w-6" />,
    },
    {
      title: "Location",
      description: "Lagos, Nigeria",
      icon: <MapPin className="h-6 w-6" />,
    },
    {
      title: "Phone",
      description: "+234 704 419 5454",
      icon: <Phone className="h-6 w-6" />,
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-muted/30">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            Get In Touch
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Let&apos;s discuss your next project or opportunity
          </p>
        </motion.div>

        <div className="flex flex-col w-full md:items-center justify-center gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="w-full md:max-w-xl">
              <CardHeader>
                <CardTitle>Send me a message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Input placeholder="Your Name" />
                  <Input placeholder="Your Email" type="email" />
                </div>
                <Input placeholder="Subject" />
                <Textarea placeholder="Your Message" rows={5} />
                <Button className="w-full flex items-center justify-center bg-gradient-to-br from-primary to-primary/80 text-white cursor-pointer">
                  <Send className="mr-2 size-4" />
                  <span>Send Message</span>
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <HoverEffect
              items={contactItems}
              className="grid-cols-1 md:grid-cols-3 gap-4 py-0"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
