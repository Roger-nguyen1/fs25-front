"use server";
import { cookies } from "next/headers";

export async function handlerCookie(code: string) {
  const cookieStore = await cookies();
  const maxAge = 10 * 60 * 60; // 10 heures en secondes
  const expirationDate = new Date(Date.now() + maxAge * 1000); // 10 heures à partir de maintenant
  cookieStore.set("token", code, {
    path: "/",
    maxAge: maxAge,
    expires: expirationDate,
  });
}
