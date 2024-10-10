import React from "react";

const ShopCategory = ({ params }: { params: { slug: string } }) => {
  return <div>{params.slug}</div>;
};

export default ShopCategory;
