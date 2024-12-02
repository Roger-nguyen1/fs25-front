"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function FarmDetails() {
  const { _id } = useParams();

  return (
    <div>
      <h1>FARM DETAIL</h1>
    </div>
  );
}
