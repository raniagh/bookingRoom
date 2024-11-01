"use server";

import { ID } from "node-appwrite";
import { createAdminClient } from "../../config/appwrite";

async function createUser(previousState, formData) {
  const email = formData.get("email");
  const name = formData.get("name");
  const password = formData.get("password");
  const confirmPassword = formData.get("confirm-password");

  if (!email || !password || !name) {
    return {
      error: "Please fill out fields",
    };
  }
  if (password.length < 8) {
    return {
      error: "Password must be at least 8 characters long",
    };
  }
  if (password !== confirmPassword) {
    return {
      error: "Passwords do not match",
    };
  }

  //Get account instance
  const { account } = await createAdminClient();
  try {
    //Create user
    await account.create(ID.unique(), email, password, name);

    return {
      success: true,
    };
  } catch (error) {
    return {
      error: "Could not register user",
    };
  }
}

export default createUser;
