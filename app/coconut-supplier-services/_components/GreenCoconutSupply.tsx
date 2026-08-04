import { supplyServices } from "@/app/coconut-supplier-services/_components/services.data";
import { SupplySection } from "@/app/coconut-supplier-services/_components/SupplySection";

export function GreenCoconutSupply() {
  const service = supplyServices[1];
  return <SupplySection {...service} reversed />;
}