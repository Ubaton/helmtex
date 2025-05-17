import React from 'react';
import { Flame, ShieldCheck, SmilePlus, Award, Building2, Users, Church, Video, Briefcase } from 'lucide-react';

const InfoCard = ({ icon, title, description }) => (
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

const FlameRetardantFinish = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 text-gray-800 font-sans space-y-12">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-blue-700">Flame Retardant Finish for Upholstery Fabric</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          At <strong>Helm Textiles</strong>, we offer a premium Flame Retardant (FR) finish as an optional treatment on our upholstery fabrics—an essential safety feature for public and commercial spaces.
        </p>
      </section>

      {/* Why Choose FR */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-blue-600">Why Choose a Flame Retardant Finish?</h2>
        <p className="text-gray-700">
          Flame retardant treatments significantly enhance the fire resistance of fabrics, helping to slow the spread of flames and reduce smoke development in the event of a fire. This added protection supports compliance with fire safety regulations and creates a safer environment for occupants.
        </p>
      </section>

      {/* Benefits Section with Icons */}
      <section>
        <h2 className="text-2xl font-semibold text-blue-600 mb-6">Benefits and Advantages</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mb-12">
          <InfoCard icon={<Flame size={28} className="text-red-600" />} title="Improved Fire Safety" description="Helps delay ignition and limits flame spread." />
          <InfoCard icon={<SmilePlus size={28} className="text-orange-500" />} title="Peace of Mind" description="Ideal for public venues where safety is a priority." />
          <InfoCard icon={<ShieldCheck size={28} className="text-blue-600" />} title="Compliance Ready" description="Assists with fire regulation standards." />
          <InfoCard icon={<Award size={28} className="text-green-600" />} title="Durability" description="Maintains fabric quality and appearance." />
        </div>
      </section>

      {/* Ideal Applications */}
      <section>
        <h2 className="text-2xl font-semibold text-blue-600 mb-6">Ideal for:</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 text-center">
          <IconTile icon={<Video size={28} />} label="Cinemas" />
          <IconTile icon={<Church size={28} />} label="Church Seating" />
          <IconTile icon={<Building2 size={28} />} label="Conference Rooms" />
          <IconTile icon={<Users size={28} />} label="Auditorium Seating" />
          <IconTile icon={<Briefcase size={28} />} label="Corporate Interiors" />
        </div>
      </section>

      {/* Service Details */}
      {/* <section className="space-y-2">
        <h2 className="text-2xl font-semibold text-red-600">Service Details</h2>
        <ul className="list-disc pl-6 text-gray-700 text-base">
          <li><strong>Minimum Order:</strong> 400 meters to finish</li>
          <li><strong>Cost:</strong> Quoted based on fabric quality and specifications</li>
        </ul>
      </section> */}

      {/* CTA Footer */}
      {/* <section className="text-center pt-6">
        <h3 className="text-xl font-semibold text-red-700">Upgrade your fabric with a Flame Retardant Finish</h3>
        <p className="text-gray-600">Safety and performance, tailored to your project.</p>
        <a
          href="/contact"
          className="mt-4 inline-block bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition"
        >
          Request a Quote
        </a>
      </section> */}
    </div>
  );
};

export default FlameRetardantFinish;