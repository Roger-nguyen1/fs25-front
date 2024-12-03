import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/app/lib/mongodb";
import { Farm } from "@/app/api/models/Farm";

export async function GET(request: NextRequest) {
  try {
    // Connexion à la base de données
    await connectToDatabase();

    // Récupération du paramètre `_id`
    const { searchParams } = new URL(request.url);
    const farmId = searchParams.get("_id");

    if (farmId) {
      // Recherche d'une ferme par ID
      const farm = await Farm.findById(farmId);

      if (!farm) {
        return NextResponse.json({ error: "Farm not found" }, { status: 404 });
      }

      return NextResponse.json({ farm }, { status: 200 });
    }

    // Sinon, récupérer toutes les fermes
    const farms = await Farm.find({});
    return NextResponse.json({ farms }, { status: 200 });
  } catch (error) {
    console.error("Error fetching farm(s):", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
