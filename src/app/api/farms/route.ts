import { NextResponse } from "next/server";
import { connectToDatabase } from "@/app/lib/mongodb";
import { Farm } from "@/app/api/models/Farm";

export async function GET() {
  try {
    // Connexion à la base de données
    await connectToDatabase();

    // Récupération des fermes
    const farms = await Farm.find({});

    // Réponse JSON
    return NextResponse.json({ farms }, { status: 200 });
  } catch (error) {
    console.error("Error fetching farms:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
