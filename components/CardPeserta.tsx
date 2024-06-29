import React from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { UsersRound } from "lucide-react";

interface CardPesertaProps {
  value: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}
const CardPeserta = ({ value, title, description, icon }: CardPesertaProps) => {
  return (
    <Card>
      <CardHeader>
        <div className="flex gap-4 justify-start items-start">
          <Button size={"icon"} variant={"outline"} className="bg-slate-200">
            {icon}
          </Button>
          <div>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
            <CardTitle className="text-3xl mt-3">{value}</CardTitle>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
};

export default CardPeserta;
