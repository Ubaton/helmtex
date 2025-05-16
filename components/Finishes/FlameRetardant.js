import React from 'react';
import { Flame, ShieldCheck, SmilePlus, Award, Building2, Users, Church, Video, Briefcase } from 'lucide-react';

const FlameRetardant = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 text-gray-800 font-sans space-y-12">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-red-700">Flame Retardant Finish for Upholstery Fabric</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          At <strong>Helm Textiles</strong>, we offer a premium Flame Retardant (FR) finish as an optional treatment on our upholstery fabrics—an essential safety feature for public and commercial spaces.
        </p>
      </section>

      {/* Why Choose FR */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-red-600">Why Choose a Flame Retardant Finish?</h2>
        <p className="text-gray-700">
          Flame retardant treatments significantly enhance the fire resistance of fabrics, helping to slow the spread of flames and reduce smoke development in the event of a fire. This added protection supports compliance with fire safety regulations and creates a safer environment for occupants.
        </p>
      </section>

      {/* Benefits */}
      <section>
        <h2 className="text-2xl font-semibold text-red-600 mb-4">Benefits and Advantages</h2>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-center gap-2"><Flame size={20} /> Improved Fire Safety – Helps delay ignition and limits flame spread.</li>
          <li className="flex items-center gap-2"><SmilePlus size={20} /> Peace of Mind – Ideal for public venues where safety is a priority.</li>
          <li className="flex items-center gap-2"><ShieldCheck size={20} /> Compliance Ready – Assists with fire regulation standards.</li>
          <li className="flex items-center gap-2"><Award size={20} /> Durability – Maintains fabric quality and appearance.</li>
        </ul>
      </section>

      {/* Ideal Applications */}
      <section>
        <h2 className="text-2xl font-semibold text-red-600 mb-4">Ideal for:</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 text-center text-sm font-medium text-gray-700">
          <div className="flex flex-col items-center gap-2"><Video size={28} /> Cinemas</div>
          <div className="flex flex-col items-center gap-2"><Church size={28} /> Church Seating</div>
          <div className="flex flex-col items-center gap-2"><Building2 size={28} /> Conference Rooms</div>
          <div className="flex flex-col items-center gap-2"><Users size={28} /> Auditorium Seating</div>
          <div className="flex flex-col items-center gap-2"><Briefcase size={28} /> Corporate Interiors</div>
        </div>
      </section>

      {/* Service Details */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold text-red-600">Service Details</h2>
        <ul className="list-disc pl-6 text-gray-700 text-base">
          <li><strong>Minimum Order:</strong> 400 meters to finish</li>
          <li><strong>Cost:</strong> Quoted based on fabric quality and specifications</li>
        </ul>
      </section>

      {/* Closing CTA */}
      <section className="text-center pt-6">
        <h3 className="text-xl font-semibold text-red-700">Upgrade your fabric with a Flame Retardant Finish</h3>
        <p className="text-gray-600">Safety and performance, tailored to your project.</p>
        <a
          href="/contact"
          className="mt-4 inline-block bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition"
        >
          Request a Quote
        </a>
      </section>
    </div>
  );
};

export default FlameRetardant;
