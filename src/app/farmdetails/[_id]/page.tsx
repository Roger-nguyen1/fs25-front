"use client";

import { notFound } from "next/navigation";
import { Tractor } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import FinancesDetails from "./financesDetails";

interface Farm {
  _id: string;
  name: string;
  money: number;
  players: string[];
  updatedAt: any;
  finances: any;
}

export default function FarmDetails() {
  const { _id } = useParams();
  const [farmData, setFarmData] = useState<Farm>();
  const [financesDatas, setFinancesDatas] = useState<any>();

  useEffect(() => {
    const fetchFarms = async () => {
      try {
        const response = await fetch(`/api/farms?_id=${_id}`, {
          cache: "no-store",
        });

        const data = await response.json();
        //console.log("datas : ", data.farm.finances[0]);
        setFarmData(data.farm);
        setFinancesDatas(data.farm.finances[0]);
      } catch (error) {
        notFound();
      }
    };
    fetchFarms();
  }, []);

  console.log("financesDatas", financesDatas?.fieldPurchase);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[url('/images/fs25-2.jpg')] bg-cover bg-center bg-no-repeat bg-opacity-0 animate-fade-in p-8">
      <Card className="w-full max-w-2xl overflow-hidden">
        <CardHeader className="bg-green-600 text-white">
          <div className="flex items-center space-x-4">
            <Tractor className="w-12 h-12" />
            <CardTitle className="text-3xl">{farmData?.name}</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h2 className="text-xl font-semibold mb-2">Money</h2>

              <p className="text-2xl font-bold text-green-600 mt-2">
                {farmData?.money.toLocaleString("fr-FR", {
                  style: "currency",
                  currency: "EUR",
                })}
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">Players</h2>
              <ul className="list-disc list-inside">
                {farmData?.players.map((player: string, index: number) => (
                  <li key={index} className="text-gray-600">
                    {player}
                  </li>
                ))}
              </ul>
            </div>
            {/* FINANCES */}
            <FinancesDetails finances={financesDatas} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
