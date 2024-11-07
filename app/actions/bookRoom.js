"use server";

import { redirect } from "next/navigation";
import { createSessionClient } from "../../config/appwrite";
import { cookies } from "next/headers";
import checkAuth from "./checkAuth";
import { ID } from "node-appwrite";
import { revalidatePath } from "next/cache";
import checkRoomAvailability from "./checkRoomAvailability";
import { error } from "console";

async function bookRoom(previousState, formData) {
  const sessionCookie = await cookies().get("appwrite-session");
  if (!sessionCookie) {
    redirect("/login");
  }

  try {
    const { databases } = await createSessionClient(sessionCookie.value);

    const { user } = await checkAuth();
    if (!user) {
      return {
        error: "You must be logged in to book a room",
      };
    }

    const checkInDate = formData.get("check_in_date");
    const checkInTime = formData.get("check_in_time");
    const checkOutDate = formData.get("check_out_date");
    const checkOutTime = formData.get("check_out_time");
    const room_id = formData.get("room_id");

    const checkInDateTime = `${checkInDate}T${checkInTime}`;
    const checkOutDateTime = `${checkOutDate}T${checkOutTime}`;

    //Check if room is available
    const isAvailable = await checkRoomAvailability(
      room_id,
      checkInDateTime,
      checkOutDateTime
    );

    if (!isAvailable) {
      return {
        error: "this room is already booked for the selected time",
      };
    }

    const bookData = {
      check_in: checkInDateTime,
      check_out: checkOutDateTime,
      user_id: user.id,
      room_id: room_id,
    };

    const newBooking = await databases.createDocument(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
      process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_BOOKINGS,
      ID.unique(),
      bookData
    );
    // Revalidate cache
    revalidatePath("/bookings", "layout");
    return { success: true };
  } catch (error) {
    console.log("Failed to book room", error);
    return {
      error: "Something went wrong booking the room",
    };
  }
}

export default bookRoom;
