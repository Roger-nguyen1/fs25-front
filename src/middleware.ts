// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const accessCode = process.env.NEXT_PUBLIC_ACCESS_CODE;

export function middleware(request: NextRequest) {
  const tokenCookie = request.cookies.get("token");
  const tokenIsValid = tokenCookie?.value === accessCode;
  const isFarmPage = request.nextUrl.pathname === "/farms";
  const isHomePage = request.nextUrl.pathname === "/";

  // Si un token valide est présent, rediriger vers /farms (sauf si on est déjà sur /farms)
  if (tokenIsValid && !isFarmPage) {
    return NextResponse.redirect(new URL("/farms", request.url));
  }

  // Si aucun token valide n'est présent, rediriger vers /
  if (!tokenIsValid && !isHomePage) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // Autoriser l'accès sinon
  return NextResponse.next();
}

// Configurer les chemins pour lesquels le middleware s'applique
export const config = {
  matcher: ["/", "/farms","/farmdetails"], // S'applique à toutes les pages
};
