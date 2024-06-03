import { JSX } from "preact";

const FinancialOverview = () => {
  return (
    <section className="bg-white p-6 rounded-lg shadow-md">
      <div className="mb-4">
        <h2 className="text-2xl">$69,455</h2>
        <p>Monthly Income</p>
      </div>
      <div className="flex justify-between items-center">
        <div>
          <p>Linked to main account</p>
          <p>**** 64534</p>
          <button className="mt-2 p-2 bg-blue-500 text-white rounded-lg">
            Receive
          </button>
        </div>
        <div>
          <p>Monthly regular fee</p>
          <p>$27.00</p>
        </div>
      </div>
    </section>
  );
};

export default FinancialOverview;
