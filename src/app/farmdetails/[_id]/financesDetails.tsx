import formatCurrency from "@/app/lib/formatCurrency";

export default function FinancesDetails(props: any) {
  return (
    <div className="">
      <h2 className="text-xl font-semibold mb-2">
        Finances (Day {props.finances?.day})
      </h2>
      <div className="grid grid-cols-2 gap-2">
        <p className="text-gray-600">New Vehicles Cost:</p>
        <p className="text-right font-semibold">
          {formatCurrency(props.finances?.newVehiclesCost)}
        </p>
        <p className="text-gray-600">Construction Cost:</p>
        <p className="text-right font-semibold">
          {formatCurrency(props.finances?.constructionCost)}
        </p>
        <p className="text-gray-600">Field Purchase:</p>
        <p className="text-right font-semibold">
          {formatCurrency(props.finances?.fieldPurchase)}
        </p>
        <p className="text-gray-600">Property Maintenance:</p>
        <p className="text-right font-semibold">
          {formatCurrency(props.finances?.propertyMaintenance)}
        </p>
        <p className="text-gray-600">Fuel Purchase:</p>
        <p className="text-right font-semibold">
          {formatCurrency(props.finances?.purchaseFuel)}
        </p>
        {props.finances?.purchaseSeeds && (
          <>
            <p className="text-gray-600">Seeds Purchase:</p>
            <p className="text-right font-semibold">
              {formatCurrency(props.finances?.purchaseSeeds)}
            </p>
          </>
        )}
        <p className="text-gray-600">Fertilizer Purchase:</p>
        <p className="text-right font-semibold">
          {formatCurrency(props.finances?.purchaseFertilizer)}
        </p>
        <p className="text-gray-600">Harvest Income:</p>
        <p className="text-right font-semibold text-green-600">
          {formatCurrency(props.finances?.harvestIncome)}
        </p>
        <p className="text-gray-600">Mission Income:</p>
        <p className="text-right font-semibold text-green-600">
          {formatCurrency(props.finances?.missionIncome)}
        </p>
        <p className="text-gray-600">Wage Payment:</p>
        <p className="text-right font-semibold">
          {formatCurrency(props.finances?.wagePayment)}
        </p>
      </div>
    </div>
  );
}
