import React from 'react'

const EasyClean = () => {
  return (
    <div className="h-screen pt-28 p-4 text-gray-800">
      <h1 className="text-3xl font-bold mb-4 text-blue-700">EASYCLEAN<sup>®</sup></h1>
      <p className="mb-6">
        EASY CLEAN is our water repellent finish, your trusted solution for long-lasting,
        easy-to-maintain fabric care.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">Key Features:</h2>
      <ul className="list-disc list-inside space-y-1 mb-6">
        <li>Water Repellent</li>
        <li>Anti Dust Mite Protection</li>
        <li>Dirt Repellent</li>
        <li>Anti Mildew Properties</li>
        <li>Stain Resistant</li>
      </ul>

      <p className="mb-6">
        The EASYCLEAN® finish is already applied to our Outdoor Fabric Range, offering built-in
        protection for even the most demanding environments.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">Performance You Can Rely On</h2>
      <p className="mb-6">
        Our premium soil and water-repellent fabrics are expertly treated with EASYCLEAN® TEXTIFIN,
        a high-performance protector designed for real-life messes—whether at home, in offices,
        hospitality venues, or entertainment spaces.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">Engineered to Last</h2>
      <ul className="list-disc list-inside space-y-1 mb-6">
        <li>Strict quality control conditions for consistent performance</li>
        <li>In-house testing: abrasion resistance, strength, and color fastness</li>
        <li>Compliant with SABS, ISO, and British Standards</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-2">Long-Term Durability</h2>
      <p className="mb-6">
        Every fabric treated with EASYCLEAN® comes with a limited 5-Year Warranty (Terms & Conditions apply).
        With proper care, your fabric will maintain its fresh appearance for years to come.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">Cleaning & Care Guidelines</h2>
      <p className="italic mb-4">
        Quick Action Is Key: Act fast—most stains can be removed if treated immediately.
      </p>

      <h3 className="text-lg font-medium mb-1">Step-by-Step Spot Cleaning:</h3>
      <ol className="list-decimal list-inside space-y-1 mb-6">
        <li>Blot excess liquids with a white, lint-free cloth (avoid colored cloths).</li>
        <li>Scoop solids with a spoon or back of a knife, working inward.</li>
        <li>Use warm soapy water, blot frequently. Avoid over-wetting.</li>
        <li>Repeat as needed, working gently to avoid pushing stains deeper.</li>
      </ol>

      <h3 className="text-lg font-medium mb-1">Important Do&apos;s and Don&apos;ts:</h3>
      <ul className="list-disc list-inside space-y-1 mb-6">
        <li>Do NOT use ammonia, bleach, or solvent-based cleaners</li>
        <li>Do NOT scrub or brush the fabric</li>
        <li>Do NOT soak or press liquids through the fabric</li>
      </ul>

      <p className="mb-6">
        With proper care and cleaning, your fabric will retain its performance and appearance for 5+ years—even
        in high-traffic spaces like cinemas and restaurants.
      </p>

      <h2 className="text-lg font-medium mb-2">Need More Help?</h2>
      <p className="mb-8">
        Contact us at:{" "}
        <a href="mailto:sales@helmtex.co.za" className="text-blue-600 hover:underline">
          sales@helmtex.co.za
        </a>
      </p>
    </div>
  );
}

export default EasyClean
