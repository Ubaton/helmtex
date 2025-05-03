// components/EasyClean.tsx
import React from 'react';
import Image from 'next/image';

const EasyClean = () => {
  return (
    <div className="px-4 py-12 max-w-7xl mx-auto space-y-20 pt-24">
      {/* Header Section */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-800">EASYCLEAN®</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          EASY CLEAN is our water repellent finish, your trusted solution for long-lasting, easy-to-maintain fabric care.
        </p>
      </section>

      {/* Features Section */}
      <section className="flex flex-col md:flex-row items-center gap-10">
      <div className="w-full md:w-1/2 space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Key Features</h2>
          <ul className="space-y-1 list-disc list-inside text-gray-700 text-base">
            <li>Water Repellent</li>
            <li>Anti Dust Mite Protection</li>
            <li>Dirt Repellent</li>
            <li>Anti Mildew Properties</li>
            <li>Stain Resistant</li>
          </ul>
          <p className="text-gray-600">
            The EASYCLEAN® finish is already applied to our Outdoor Fabric Range, offering built-in protection for even the most demanding environments.
          </p>
        </div>
        <Image
          src="/assets/wallpaper/DiamondDisplay.png"
          alt="EasyClean Features"
          width={100}
          height={100}
          className="w-full md:w-1/2 rounded-xl shadow"
        />
      </section>

      {/* Performance Section */}
      <section className="flex flex-col md:flex-row-reverse items-center gap-10">
      <div className="w-full md:w-1/2 space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Performance You Can Rely On</h2>
          <p className="text-gray-600 text-base">
            Our premium soil and water-repellent fabrics are expertly treated with EASYCLEAN® TEXTIFIN, a high-performance protector designed for real-life messes—whether at home, in offices, hospitality venues, or entertainment spaces.
          </p>
        </div>
        <Image
          src="/assets/wallpaper/DiamondDisplay.png"
          alt="Performance"
          width={100}
          height={100}
          className="w-full md:w-1/2 rounded-xl shadow"
        />
      </section>

      {/* Engineered Section */}
      <section className="flex flex-col md:flex-row items-center gap-10">
      <div className="w-full md:w-1/2 space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Engineered to Last</h2>
          <ul className="space-y-1 list-disc list-inside text-gray-700 text-base">
            <li>Strict quality control conditions for consistent performance</li>
            <li>In-house testing: abrasion resistance, strength, and color fastness</li>
            <li>Compliant with SABS, ISO, and British Standards</li>
          </ul>
        </div>
        <Image
          src="/assets/wallpaper/DiamondDisplay.png"
          alt="Engineered to Last"
          width={100}
          height={100}
          className="w-full md:w-1/2 rounded-xl shadow"
        />
      </section>

      {/* Durability Section */}
      <section className="flex flex-col md:flex-row-reverse items-center gap-10">
      <div className="w-full md:w-1/2 space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Long-Term Durability</h2>
          <p className="text-gray-600 text-base">
            Every fabric treated with EASYCLEAN® comes with a limited 5-Year Warranty (Terms & Conditions apply). With proper care, your fabric will maintain its fresh appearance for years to come.
          </p>
        </div>
        <Image
          src="/assets/wallpaper/DiamondDisplay.png"
          alt="Long-Term Durability"
          width={100}
          height={100}
          className="w-full md:w-1/2 rounded-xl shadow"
        />
      </section>

      {/* Cleaning Section */}
      <section className="flex flex-col md:flex-row items-start gap-10">
      <div className="w-full md:w-1/2 space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-gray-800">Cleaning & Care Guidelines</h2>
            <p className="text-gray-600 text-base">
              <strong>Quick Action Is Key:</strong> Most stains can be removed if treated immediately.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-medium text-gray-700">Step-by-Step Spot Cleaning</h3>
            <ul className="space-y-1 list-disc list-inside text-gray-700 text-base">
              <li>Blot excess liquids with a white, lint-free cloth (avoid colored cloths).</li>
              <li>Scoop solids with a spoon or back of a knife, working inward.</li>
              <li>Use warm soapy water, blot frequently. Avoid over-wetting.</li>
              <li>Repeat as needed, working gently to avoid pushing stains deeper.</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-medium text-gray-700">Important Do's and Don'ts</h3>
            <ul className="space-y-1 list-disc list-inside text-gray-700 text-base">
              <li>Do NOT use ammonia, bleach, or solvent-based cleaners</li>
              <li>Do NOT scrub or brush the fabric</li>
              <li>Do NOT soak or press liquids through the fabric</li>
            </ul>
          </div>

          <p className="text-gray-600 text-base">
            With proper care and cleaning, your fabric will retain its performance and appearance for 5+ years—even in high-traffic spaces like cinemas and restaurants.
          </p>
        </div>
        <Image
          src="/assets/wallpaper/DiamondDisplay.png"
          alt="Cleaning Guidelines"
          width={100}
          height={100}
          className="w-full md:w-1/2 rounded-xl shadow"
        />
      </section>

      {/* Contact */}
      <section className="text-center border-t border-gray-200 pt-10">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Need More Help?</h2>
        <p className="text-gray-600">
          Contact us at: <a href="mailto:sales@helmtex.co.za" className="text-blue-600 underline">sales@helmtex.co.za</a>
        </p>
      </section>
    </div>
  );
};

export default EasyClean;
