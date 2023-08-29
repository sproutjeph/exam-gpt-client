import {
  LineChartComp,
  Payments,
  RecentSales,
  ReportIssue,
  RevenueCard,
  TeamMembers,
} from "@/components/base-components";
import PaymentMethod from "@/components/base-components/PaymentMethods";

const AddminDashboard = ({}) => {
  return (
    <div className="container grid w-full h-full grid-cols-1 gap-4 p-1 mx-auto md:grid-cols-2 md:p-8">
      <RevenueCard />
      <LineChartComp />
      <TeamMembers />
      <Payments />
      <PaymentMethod />
      <ReportIssue />
      <RecentSales />
    </div>
  );
};

export default AddminDashboard;
