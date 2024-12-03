import { notFound } from "next/navigation";
import { Tractor } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useParams } from "next/navigation";

async function getFarm(id: string) {
  const res = await fetch(`/api/farms?_id=${id}`, { cache: "no-store" });
  if (!res.ok) {
    throw new Error("Failed to fetch farm");
  }
  return res.json();
}

export default async function FarmDetails() {
  const { _id } = useParams();
  let farm;
  try {
    const data = await getFarm(_id);
    farm = data.farm;
  } catch (error) {
    notFound();
  }

  if (!farm) {
    notFound();
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[url('/images/fs25-2.jpg')] bg-cover bg-center bg-no-repeat bg-opacity-0 animate-fade-in p-8">
      <Card className="w-full max-w-2xl overflow-hidden">
        <CardHeader className="bg-green-600 text-white">
          <div className="flex items-center space-x-4">
            <Tractor className="w-12 h-12" />
            <CardTitle className="text-3xl">{farm.name}</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h2 className="text-xl font-semibold mb-2">Farm Details</h2>
              <p className="text-gray-600">ID: {farm._id}</p>
              <p className="text-2xl font-bold text-green-600 mt-2">
                {farm.money.toLocaleString("fr-FR", {
                  style: "currency",
                  currency: "EUR",
                })}
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">Players</h2>
              <ul className="list-disc list-inside">
                {farm.players.map((player: string, index: number) => (
                  <li key={index} className="text-gray-600">
                    {player}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
