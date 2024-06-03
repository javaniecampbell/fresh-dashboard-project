import { JSX } from "preact";

const Greeting = () => {
  return (
    <section className="col-span-3 text-center bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-2xl mb-2">
        Hey, need assistance? <span>👋</span>
      </h1>
      <p>Feel free to ask me anything!</p>
    </section>
  );
};

export default Greeting;
