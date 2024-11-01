"use server";

const { cookies } = require("next/headers");
import { createSessionClient } from "../../config/appwrite";

async function checkAuth() {
  const sessionCookie = await cookies().get("appwrite-session");

  if (!sessionCookie) {
    return {
      isAuthenticated: false,
    };
  }

  try {
    const { account } = await createSessionClient(sessionCookie.value);
    const user = await account.get();

    return {
      isAuthenticated: true,
      user: {
        id: user.$id,
        name: user.email,
        email: user.email,
      },
    };
  } catch (error) {
    return {
      isAuthenticated: false,
    };
  }
}

export default checkAuth;
