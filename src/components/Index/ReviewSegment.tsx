import sarahimg from "../../assets/ProfileImages/sarah.png";
import guyimg from "../../assets/ProfileImages/guy.png";
import samimg from "../../assets/ProfileImages/sam.png";

import { Card, CardContent } from "../ui/card";
import {
  Carousel,
  CarouselItem,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    role: "AI Engineer",
    quote:
      "The portfolio analysis was incredibly helpful. It gave me a clear understanding of where I stand and helped me secure a great job!",
    avatar: sarahimg,
    rating: 5,
  },
  {
    name: "Jay R.",
    role: "Machine Learning Intern",
    quote:
      "Got matched to an AI internship within a week. Super smooth experience!",
    avatar: guyimg,
    rating: 5,
  },
  {
    name: "Sam K.",
    role: "Data Scientist",
    quote:
      "Loved the clean UI and the deep insights into my skills. Highly recommend it!",
    avatar: samimg,
    rating: 5,
  },
];

function ReviewSegment() {
  return (
    <div className="w-full bg-gradient-to-b from-white to-gray-50 py-20">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            What Our Users Say
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of AI professionals who have transformed their
            careers with our platform
          </p>
        </motion.div>

        <Carousel className="relative w-full">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="w-full flex justify-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2"
                >
                  <Card className="bg-white px-8 py-10 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="flex flex-col items-center">
                      <div className="relative mb-6">
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-30"></div>
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="relative h-20 w-20 rounded-full object-cover border-4 border-white"
                        />
                      </div>
                      <div className="flex items-center gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-5 w-5 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                      <p className="text-lg font-semibold text-slate-800 mb-1">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-blue-600 mb-6">
                        {testimonial.role}
                      </p>
                      <p className="text-base text-gray-600 italic leading-relaxed">
                        "{testimonial.quote}"
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg hover:bg-gray-50" />
          <CarouselNext className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg hover:bg-gray-50" />
        </Carousel>
      </div>
    </div>
  );
}

export default ReviewSegment;
