"use client";
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tractor } from "lucide-react";

interface Farm {
  _id: string;
  name: string;
  money: number;
  players: string[];
}

export default function Farms() {
  const [farms, setFarms] = useState<Farm[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFarms = async () => {
      try {
        const response = await fetch("/api/farms");
        const data = await response.json();
        setFarms(data.farms || []);
      } catch (error) {
        console.error("Error fetching farms:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFarms();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[url('/images/fs25-2.jpg')] bg-cover bg-center bg-no-repeat bg-opacity-0 animate-fade-in">
        <p className="text-white text-2xl font-bold">Loading...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[url('/images/fs25-2.jpg')] bg-cover bg-center bg-no-repeat bg-opacity-0 animate-fade-in p-8">
      <h1 className="text-4xl font-bold text-white mb-8">
        Farming Simulator 25 Farms
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl">
        {farms.length > 0 ? (
          farms.map((farm) => (
            <Card
              key={farm._id}
              className="flex overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300 ease-in-out hover:scale-105"
            >
              <div className="bg-green-600 p-4 flex items-center justify-center">
                <Tractor className="text-white w-12 h-12" />
              </div>
              <div className="flex-grow">
                <CardHeader>
                  <CardTitle className="text-3xl">{farm.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xl font-semibold text-green-600">
                    {farm.money.toLocaleString("fr-FR", {
                      style: "currency",
                      currency: "EUR",
                    })}
                  </p>
                  <p className="mt-2 text-sm text-gray-600">
                    Players: {farm.players.join(", ")}
                  </p>
                </CardContent>
              </div>
            </Card>
          ))
        ) : (
          <p className="text-white text-xl col-span-full text-center">
            No farms found.
          </p>
        )}
      </div>
    </div>
  );
}
