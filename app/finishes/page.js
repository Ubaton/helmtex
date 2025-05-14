import React from "react";
import EasyClean from "../../components/Finishes/EasyClean";
import Latex from "../../components/Finishes/Latex"

const Finishes = () => {
  return (
    <div className="text-center text-gray-600 flex flex-col justify-center items-center py-10">
      <EasyClean/>
      <div className="text-center border-t border-gray-300 pt-10">
        <Latex/>
      </div>

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

export default Finishes;
