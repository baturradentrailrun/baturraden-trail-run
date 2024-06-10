import React from "react";

const Paket = ({ params }: { params: { slug: string } }) => {
  return <div>{params.slug}</div>;
};

export default Paket;
