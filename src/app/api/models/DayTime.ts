import mongoose, { Schema, model, models } from "mongoose";

const DayTimesSchema = new Schema(
  {
    dayTime: { type: String, required: true },
    currentDay: { type: String, required: true },
    currentMonotonicDay: { type: Number, required: true },
    realHourTimer: { type: String },
    daysPerPeriod: { type: String },
    lighting: { type: [String] },
    weather: { type: String },
    updatedAt: { type: Date },
  },
  { collection: "daytimes" } // Assurez-vous que cela correspond au nom de votre collection
);

export const DayTimes = models.DayTimes || model("DayTimes", DayTimesSchema);
