// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const accessCode = process.env.NEXT_PUBLIC_ACCESS_CODE;

export function middleware(request: NextRequest) {
  const tokenCookie = request.cookies.get('token');
  const isHomePage = request.nextUrl.pathname === '/';

  // Vérifier si le token est présent et valide
  if (!tokenCookie || tokenCookie.value !== accessCode) {
    // Rediriger vers la page de connexion si le token n'est pas présent ou invalide
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // Si l'utilisateur est authentifié et tente d'accéder à la page d'accueil, rediriger vers le tableau de bord
  if (tokenCookie && tokenCookie.value === accessCode && isHomePage) {
    return NextResponse.redirect(new URL('/farms', request.url));
  }

  // Si le token est présent et valide, permettre l'accès à la page
  return NextResponse.next();
}

// Configurer les chemins pour lesquels le middleware s'applique
export const config = {
  matcher: ['/','/farms'],
};