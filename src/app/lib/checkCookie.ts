"use client"

// lib/checkCookie.ts
import { cookies } from 'next/headers';

export async function checkCookieForToken(cookieName: string, tokenName: string): Promise<boolean> {
  const cookieStore = await cookies();
  const tokenCookie = cookieStore.get(tokenName);

  return tokenCookie !== undefined && tokenCookie.value === cookieName;
}