import React from "react";
import { Card } from "../ui/card";
import Image from "next/image";

const Rute = ({ id }: { id: string }) => {
  return (
    <section id={id} className="bg-slate-900 relative  padding-container py-10">
      <div className="p-5 bg-white bg-opacity-10 backdrop-blur-md rounded-2xl border-t border-slate-500 border-l ">
        <Card className="w-full rounded-xl overflow-hidden ">
          <iframe
            src="https://www.google.com/maps/d/embed?mid=15reFvGVbgvmRQx3b2ZZ267c77V2zCNQ&ehbc=2E312F"
            width="100%"
            height="480"
          ></iframe>
        </Card>
      </div>
    </section>
  );
};

export default Rute;
