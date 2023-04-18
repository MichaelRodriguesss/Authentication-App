import { NextResponse } from "next/server";

const publicPaths = ["/", "/login"];

const isPublic = (path) => {
  return publicPaths.find((x) =>
    path.match(new RegExp(`^${x}$`.replace("*$", "($|/)")))
  );
};

//fazer uma requisição para validar o token pelo middleware
const isAuthenticated = false;

export function middleware(request) {
  if (isPublic(request.nextUrl.pathname)) {
    return NextResponse.next();
  }

  if (!isAuthenticated) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to authenticate",
      },
      {
        status: 401,
      }
    );
  }

  return NextResponse.redirect(new URL("/login", request.url));
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next
     * - static (static files)
     * - favicon.ico (favicon file)
     * - public folder
     * - public folder
     */
    "/((?!static|.*\\..*|_next|favicon.ico).*)",
    "/",
  ],
};
