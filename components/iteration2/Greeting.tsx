import { JSX } from "preact";
// import { motion } from "npm:framer-motion@11.2.10";

const Greeting = () => {
  return (
    <div className="col-span-3 text-center bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold mb-2">
        Hey, need assistance? <span role="img" aria-label="wave">👋</span>
      </h1>
      <p className="text-gray-600">Feel free to ask me anything!</p>
    </div>
  );
};

export default Greeting;
