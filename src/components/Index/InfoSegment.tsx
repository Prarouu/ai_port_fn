import React from "react";
import { BrainCircuit, BriefcaseBusiness } from "lucide-react";
import { motion } from "framer-motion";

function InfoSegment() {
  return (
    <div className="w-11/12 max-w-7xl mx-auto py-12 px-4 text-center flex flex-col items-center space-y-12">
      {/* Header */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800">
        Optimize your portfolio, find the right job
      </h1>

      {/* Info Boxes */}
      <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-6">
        {/* Box 1 */}
        <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 w-full sm:w-1/2 flex flex-col items-center text-center space-y-4">
          <BrainCircuit className="text-slate-600 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-700">
            AI Portfolio Insights
          </h2>
          <p className="text-sm sm:text-base text-gray-500">
            Utilize AI to identify your strengths and weaknesses in your
            portfolio.
          </p>
        </div>

        {/* Box 2 */}
        <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 w-full sm:w-1/2 flex flex-col items-center text-center space-y-4">
          <BriefcaseBusiness className="text-slate-600 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-700">
            Job Matching
          </h2>
          <p className="text-sm sm:text-base text-gray-500">
            Discover job opportunities that align with your skills and
            experience.
          </p>
        </div>
      </div>
    </div>
  );
}

export default InfoSegment;
