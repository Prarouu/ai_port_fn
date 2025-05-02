import { Button } from "../ui/button";
import { UploadIcon } from "lucide-react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <div className="m-auto bg-gray-100 h-2/4 w-70% px-2 py-10 sm:px-6 lg:px-8 flex-col items-center justify-center">
      <motion.h1
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="w-3/4 py-1 mx-auto text-center text-4xl h-24 2xl:text-9xl 2xl:h-74 xl:text-8xl xl:h-58 lg:text-7xl lg:h-42 md:text-6xl md:h-36 sm:text-5xl sm:h-30"
      >
        AI-Poweered portfolio Analysis
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
        className="w-3/4 mx-auto text-gray-400 text-xs text-center h-12 sm:text-xs sm:w-2/3 md:text-sm lg:text-sm xl:text-lg 2xl:text-xl"
      >
        Upload your portfolio to receive detailed insights and tallored job
        matches.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8, ease: "easeInOut" }}
        className="flex flex-col items-center justify-center"
      >
        <Button
          variant="ghost"
          className="bg-gray-100 p-2 m-2 w-58 h-14 flex items-center justify-around rounded-2xl border-2 border-gray-300 border-dashed md:w-72 md:h-18 xl:w-96 xl:h-20 xl:m-6 2xl:m-8 2xl:w-104 2xl:h-22"
        >
          <h1 className="text-xs md:text-sm lg:text-md xl:text-lg 2xl:text-xl text-gray-400">
            Upload 'PDF' or 'DOC' file
          </h1>
          <Button
            variant="ghost"
            className="bg-gray-200 h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 xl:h-14 xl:w-14 2xl:h-16 2xl:w-16 flex items-center justify-center"
          >
            <UploadIcon className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 xl:h-14 xl:w-14 2xl:h-16 2xl:w-16" />
          </Button>
        </Button>
      </motion.div>
    </div>
  );
}

export default Hero;
