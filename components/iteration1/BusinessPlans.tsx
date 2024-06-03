import { JSX } from "preact";

const BusinessPlans = () => {
  return (
    <section className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl mb-2">Business Plans</h2>
      <ul className="list-none p-0">
        <li className="py-2 border-b border-gray-200">Marketing and Sales</li>
        <li className="py-2 border-b border-gray-200">
          Operations and Supply Chain
        </li>
        <li className="py-2">Product Development</li>
      </ul>
    </section>
  );
};

export default BusinessPlans;
