import React from 'react';
import sarahimg from '../../assets/ProfileImages/sarah.png';
import guyimg from '../../assets/ProfileImages/guy.png';
import samimg from '../../assets/ProfileImages/sam.png';

import { Card, CardContent } from '../ui/card';
import {
  Carousel,
  CarouselItem,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel';

const testimonials = [
  {
    name: "Sarah M.",
    quote: "The portfolio analysis was incredibly helpful. It gave me a clear understanding of where I stand and helped me secure a great job!",
    avatar: sarahimg,
  },
  {
    name: "Jay R.",
    quote: "Got matched to an AI internship within a week. Super smooth experience!",
    avatar: guyimg,
  },
  {
    name: "Sam K.",
    quote: "Loved the clean UI and the deep insights into my skills. Highly recommend it!",
    avatar: samimg,
  }
];

function ReviewSegment() {
  return (
    <div className="w-full max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-10 text-gray-800 dark:text-white">
        What Our Users Say
      </h2>

      <Carousel className="relative w-full">
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem
              key={index}
              className="w-full flex justify-center"
            >
              <Card className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 bg-white dark:bg-slate-800 px-6 py-8 sm:px-10 sm:py-10 rounded-2xl shadow-md text-center transition-all duration-300">
                <CardContent className="flex flex-col items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="h-16 sm:h-20 w-16 sm:w-20 rounded-full mb-4 object-cover"
                  />
                  <p className="text-base sm:text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                    {testimonial.name}
                  </p>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 italic leading-relaxed">
                    “{testimonial.quote}”
                  </p>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10" />
        <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10" />
      </Carousel>
    </div>
  );
}

export default ReviewSegment;
