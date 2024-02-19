import { Card } from "@/components/ui/card";
import Image from "next/image";
import { FC } from "react";

interface DashboardCardProps {
  value: string;
  description: string;
  imageUrl: string;
}

const DashboardCard: FC<DashboardCardProps> = ({
  value,
  description,
  imageUrl,
}) => {
  return (
    <Card className="flex justify-between items-center px-6 py-6 dark:bg-dark-4">
      <div>
        <h1 className="text-4xl font-bold">{value}</h1>
        <p className="text-sm text-default-500 mt-2">{description}</p>
      </div>

      <div className="flex items-center justify-center h-28 w-28 rounded-full bg-dark-4">
        <Image src={imageUrl} width={80} height={80} alt="" />
      </div>
    </Card>
  );
};

export default DashboardCard;
