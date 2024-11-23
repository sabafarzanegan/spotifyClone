import { LucideProps } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../ui/card";

interface StatsProps {
  data: {
    title: string;
    icon: React.ForwardRefExoticComponent<
      Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
    >;
    number: number;
    color: string;
  };
}

function StatsCard({ data }: StatsProps) {
  return (
    <Card className="w-[200px] py-4 ">
      <CardContent className="flex items-center gap-x-6">
        <div>
          <p>{<data.icon className={`${data.color} w-10 h-10`} />}</p>
        </div>
        <div>
          <p className="font-semibold">{data.title}</p>
          <p className="text-lg">{data.number}</p>
        </div>
      </CardContent>
    </Card>
  );
}

export default StatsCard;
