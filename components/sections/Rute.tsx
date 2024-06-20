import React from "react";
import { Card } from "../ui/card";

const Rute = ({ id }: { id: string }) => {
  return (
    <section id={id} className="bg-slate-900 relative  padding-container py-10">
      <div className="flex flex-col justify-center items-center mb-5">
        <div className="text-3xl font-black uppercase">rute</div>
        <div className="capitalize text-slate-500">
          rute baturraden trail run
        </div>
      </div>
      <Card className="w-full rounded-xl overflow-hidden shadow-xl boeder">
        <iframe
          src="https://www.google.com/maps/d/embed?mid=15reFvGVbgvmRQx3b2ZZ267c77V2zCNQ&ehbc=2E312F"
          width="100%"
          height="480"
        ></iframe>
      </Card>
    </section>
  );
};

export default Rute;
