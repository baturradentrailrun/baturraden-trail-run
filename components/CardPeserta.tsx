import React from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { UsersRound } from "lucide-react";
import NumberTicker from "./ui/number-ticker";

interface CardPesertaProps {
  value: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}
const CardPeserta = ({
  value,
  title,
  description,
  icon,
  color,
}: CardPesertaProps) => {
  return (
    <Card className={` border-0 shadow-xl ${color}`}>
      <CardHeader>
        <div className="flex gap-4 justify-start items-start">
          <Button size={"icon"} variant={"ghost"}>
            {icon}
          </Button>
          <div>
            <CardTitle>{title}</CardTitle>
            <CardDescription className="text-white">
              {description}
            </CardDescription>
            <CardTitle className="text-3xl font-black mt-3">
              {value ? <NumberTicker value={value} /> : 0}
            </CardTitle>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
};

export default CardPeserta;
