import { supplyServices, supplyDisclaimer } from "@/app/coconut-supplier-services/_components/services.data";
import { SupplySection } from "@/app/coconut-supplier-services/_components/SupplySection";
import { Reveal } from "@/components/global/Reveal";

export function BulkOrderSection() {
  const service = supplyServices[2];
  return (
    <>
      <SupplySection {...service} />
      <div className="mx-auto max-w-7xl px-4 pb-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="max-w-2xl text-sm leading-6 text-muted-foreground">
            {supplyDisclaimer}
          </p>
        </Reveal>
      </div>
    </>
  );
}