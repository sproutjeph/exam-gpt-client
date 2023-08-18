import { FC } from "react";
import { Card, CardContent, CardHeader } from "../ui/card";

interface RevenueCardProps {}

const RevenueCard: FC<RevenueCardProps> = ({}) => {
  return (
    <Card className="max-w-xs">
      <CardHeader>Total Revenue</CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div className="text-3xl font-bold"> ₦100,000</div>
          <div className="text-sm text-gray-500">+2.5%</div>
        </div>
        <div className="mt-4">
          <div className="text-sm text-gray-500">From previous period</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RevenueCard;
