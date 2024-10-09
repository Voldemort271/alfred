import React from "react";
import SectionHeader from "@/components/ui/section-header";

const ShopLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div>
      <SectionHeader />
      {children}
    </div>
  );
};

export default ShopLayout;
