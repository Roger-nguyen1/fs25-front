import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/app/lib/mongodb";
import { DayTimes } from "../models/DayTime";

export async function GET(request: NextRequest) {
  try {
    // Connexion à la base de données
    await connectToDatabase();

    // Find the most recent document
    const mostRecentDayTime = await DayTimes.findOne().sort({ updatedAt: -1 });

    return NextResponse.json({ mostRecentDayTime }, { status: 200 });
  } catch (error) {
    console.error("Error fetching dayTimes:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
