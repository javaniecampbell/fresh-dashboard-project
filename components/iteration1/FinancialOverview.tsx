import { JSX } from "preact";

const FinancialOverview = () => {
  return (
    <section className="bg-white p-6 rounded-lg shadow-md">
      <div className="mb-4">
        <h2 className="text-2xl">$69,455</h2>
        <p className="text-gray-600">Monthly Income</p>
      </div>
      <div className="flex justify-between items-center">
        <div className="visa-card flex flex-col">
          <p className="text-gray-600">Linked to main account</p>
          <p className="font-bold">**** 64534</p>
          <button className="mt-2 p-2 bg-blue-500 text-white rounded-lg">
            Receive
          </button>
          <button className="mt-2 p-2 bg-gray-600 text-white rounded-lg">
            Send
          </button>
        </div>
        <div className="monthly-fee">
          <p className="text-gray-600">Monthly regular fee</p>
          <p className="text-2xl">$27.00</p>
        </div>
      </div>
    </section>
  );
};

export default FinancialOverview;
