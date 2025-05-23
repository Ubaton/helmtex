import React from 'react';
import { ShieldCheck, Wind, Clock, HeartPulse, Users, Hospital, School, Briefcase, Church, Theater } from 'lucide-react';

const AntibacterialFinish = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 text-gray-800 font-sans">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-10">
        Antibacterial Finish for Upholstery Fabric
      </h1>

      <p className="text-lg mb-8 text-center max-w-3xl mx-auto">
        Helm Textiles offers an <strong>Antibacterial Finish</strong> as an optional treatment on our upholstery fabrics—ideal for environments where hygiene, health, and cleanliness are a top priority.
      </p>

      {/* Benefits Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mb-12">
        <Card icon={<ShieldCheck className="text-blue-600" />} title="Hygiene Protection" description="Helps prevent bacteria buildup on fabric surfaces." />
        <Card icon={<Wind className="text-green-600" />} title="Odour Control" description="Reduces unpleasant smells caused by microbial growth." />
        <Card icon={<Clock className="text-purple-600" />} title="Longer Lifespan" description="Enhances fabric durability by minimizing microbial damage." />
        <Card icon={<HeartPulse className="text-red-600" />} title="Comfort & Safety" description="Supports a healthier environment for occupants." />
      </div>

      {/* Ideal For Section */}
      <h2 className="text-2xl font-semibold text-blue-600 mb-6">Ideal for:</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mb-12 text-center text-sm font-medium">
        <IconTile icon={<Church size={28} />} label="Church Seating" />
        <IconTile icon={<Theater size={28} />} label="Theatres" />
        <IconTile icon={<Hospital size={28} />} label="Medical Areas" />
        <IconTile icon={<Briefcase size={28} />} label="Corporate Offices" />
        <IconTile icon={<School size={28} />} label="Schools & Institutions" />
      </div>

      {/* Closing Text */}
      <p className="text-xl font-medium mb-4">
        Protect your investment and your space. Add an Antibacterial Finish to your fabric order with Helm Textiles—cleaner, safer, smarter upholstery solutions.
      </p>
      <p className="text-blue-600 font-semibold text-lg">
        Contact us today for a personalized quote.
      </p>
    </div>
  );
};

const Card = ({ icon, title, description }) => (
  <div className="flex items-start space-x-4 p-4 border rounded-lg shadow-sm bg-white transition-transform transform hover:scale-105 hover:shadow-md duration-300">
    <div className="text-blue-600">{icon}</div>
    <div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-gray-700">{description}</p>
    </div>
  </div>
);

const IconTile = ({ icon, label }) => (
  <div className="flex flex-col items-center transition-transform hover:scale-110 duration-300">
    <div className="text-blue-600 mb-2">{icon}</div>
    <div className="text-gray-700 font-medium text-sm">{label}</div>
  </div>
);

export default AntibacterialFinish;