"use server";

import connectToDB from "@/database";
import User from "@/models/user";

export async function addNewUserAction(formData) {
  await connectToDB();

  try {
    const newlyCreatedUser = await User.create(formData);
    if (newlyCreatedUser) {
      return {
        success: true,
        message: "User added successfully",
      };
    } else {
      return {
        success: false,
        message: "Some error occurred! Please try again",
      };
    }
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "Some error occurred! Please try again",
    };
  }
}

export async function getAllUserAction() {
  await connectToDB();

  try {
    const allUsers = await User.find({});
    return {
      success: true,
      data: allUsers,
    };
  } catch (error) {
    console.error("Error fetching users:", error);
    return {
      success: false,
      message: "Failed to fetch users. Please try again.",
    };
  }
}
