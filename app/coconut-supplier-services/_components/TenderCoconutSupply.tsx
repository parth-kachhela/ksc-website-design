import { supplyServices } from "@/app/coconut-supplier-services/_components/services.data";
import { SupplySection } from "@/app/coconut-supplier-services/_components/SupplySection";

export function TenderCoconutSupply() {
  const service = supplyServices[0];
  return <SupplySection {...service} />;
}