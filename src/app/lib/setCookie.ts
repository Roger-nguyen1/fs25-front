"use server";
import { cookies } from "next/headers";

export async function handlerCookie(code: string) {
  const cookieStore = await cookies();
  const maxAge = 2 * 60 * 60; // 2 heures en secondes
  const expirationDate = new Date(Date.now() + maxAge * 1000); // 2 heures à partir de maintenant
  cookieStore.set("token", code, {
    path: "/",
    maxAge: maxAge,
    expires: expirationDate,
  });
}
