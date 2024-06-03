import { JSX } from "preact";
import Header from "./Header.tsx";
import Greeting from "./Greeting.tsx";
import Reporting from "./Reporting.tsx";
import FinancialOverview from "./FinancialOverview.tsx";
import BusinessPlans from "./BusinessPlans.tsx";
import TrafficStatus from "./TrafficStatus.tsx";
import Sales from "./Sales.tsx";
import StockProduct from "./StockProduct.tsx";

const Dashboard = () => {
  return (
    <div className="dashboard grid grid-rows-[auto,1f] h-screen">
      <Header />
      <main className="p-8 grid grid-cols-3 gap-8">
        <Greeting />
        <Reporting />
        <FinancialOverview />
        <BusinessPlans />
        <TrafficStatus />
        <Sales />
        <StockProduct />
      </main>
    </div>
  );
};

export default Dashboard;
