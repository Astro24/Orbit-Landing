"use client";

import { useState } from "react";
import Pricing from "../../Components/Pricing/Pricing";
import FAQ from "../../Components/Pricing/FAQ/FAQ";
import View from "../../Components/shared/View";

export default function PricingCar() {
  const [variant, setVariant] = useState("month");

  return (
    <div className="text-center mt-10">
      <Pricing variant={variant} onChange={setVariant} />
      <FAQ />
      <View />
    </div>
  );
}