import { UserStore } from "@/stores/user";
import { defineMiddleware } from "astro:middleware";

const protectedRoute = [];
const publicRoute = ["/", "/blank"];

export const authMiddleware = defineMiddleware((context, next) => {
  console.log("Masuk ke middleware auth ya bang!");
  const { cookies, url, redirect } = context;
  const token = cookies.get("authToken")?.value;

  const { isLoggedIn } = UserStore.get() || false;
  console.log("isLoggedIn: ", isLoggedIn);
  console.log("token: ", token);
  console.log(url.pathname);
  const isLoginPage = url.pathname == "/";

  const isPublicRoute = publicRoute.includes(url.pathname);

  if (isPublicRoute && !isLoginPage) {
    return next();
  }

  if (!token && !isPublicRoute && !isLoggedIn) {
    return redirect("/");
  }

  if (token && isLoginPage && isLoggedIn) {
    return redirect("/dashboard");
  }

  return next();
});
