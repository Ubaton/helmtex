import { NextResponse } from "next/server";
import {
  getFirestore,
  collection,
  addDoc,
  Timestamp,
} from "firebase/firestore";
import app from "../../../lib/firebase";

// Initialize Firestore
const db = getFirestore(app);

export async function POST(request) {
  try {
    const data = await request.json();

    // Validate required fields
    if (!data.email || !data.message) {
      return NextResponse.json(
        { error: "Email and message are required" },
        { status: 400 }
      );
    }

    // Add message to Firestore
    const docRef = await addDoc(collection(db, "contactMessages"), {
      firstName: data.firstName || "",
      lastName: data.lastName || "",
      email: data.email,
      phone: data.phone || "",
      subject: data.subject || "General Inquiry",
      message: data.message,
      timestamp: Timestamp.now(),
      read: false,
      replied: false,
    });

    return NextResponse.json({
      success: true,
      id: docRef.id,
      message: "Message sent successfully",
    });
  } catch (error) {
    console.error("Error saving contact message:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
