import React from 'react';

const SkillsSection = () => {
  return (
    <div className=" text-white mt-14">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6">Skills</h2>

        {/* Languages */}
        <div className="mb-3">
          <h3 className="text-2xl text-blue-400 mb-1">Languages</h3>
          <div className="flex flex-wrap gap-4">
            <div className="bg-gray-800 p-3 rounded-lg">JavaScript</div>
            <div className="bg-gray-800 p-3 rounded-lg">C++</div>
            <div className="bg-gray-800 p-3 rounded-lg">C</div>
            <div className="bg-gray-800 p-3 rounded-lg">SQL</div>
            <div className="bg-gray-800 p-3 rounded-lg">HTML/CSS</div>
          </div>
        </div>

       

        {/* Backend */}
        <div className="mb-3">
          <h3 className="text-2xl text-purple-400 mb-1">Backend</h3>
          <div className="flex flex-wrap gap-4">
            <div className="bg-gray-800 p-3 rounded-lg">HTML</div>
            <div className="bg-gray-800 p-3 rounded-lg">CSS</div>
            <div className="bg-gray-800 p-3 rounded-lg">JS</div>
            <div className="bg-gray-800 p-3 rounded-lg">DSA</div>
          </div>
        </div>

        {/* Testing */}
        <div className="mb-3">
          <h3 className="text-2xl text-red-400 mb-1">Testing</h3>
          <div className="flex flex-wrap gap-4">
            <div className="bg-gray-800 p-3 rounded-lg">Jest</div>
            <div className="bg-gray-800 p-3 rounded-lg">Postman</div>
          </div>
        </div>

        {/* Version Control */}
        <div className="mb-3">
          <h3 className="text-2xl text-yellow-400 mb-1">Version Control</h3>
          <div className="flex flex-wrap gap-4">
            <div className="bg-gray-800 p-3 rounded-lg">Git</div>
            <div className="bg-gray-800 p-3 rounded-lg">Github</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
