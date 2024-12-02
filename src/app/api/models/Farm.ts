import mongoose, { Schema, model, models } from "mongoose";

const FarmSchema = new Schema(
  {
    farmId: { type: String, required: true },
    name: { type: String, required: true },
    money: { type: Number, required: true },
    players: { type: [String] },
    finances: { type: [Object] },
    updatedAt: { type: Date },
  },
  { collection: "farms" } // Assurez-vous que cela correspond au nom de votre collection
);

export const Farm = models.Farm || model("Farm", FarmSchema);
