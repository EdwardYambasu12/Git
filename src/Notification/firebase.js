// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcySdlyVHWd27ZlJ5NKEzCDpXLiGiaY5w",
  authDomain: "sportsup-2dc77.firebaseapp.com",
  projectId: "sportsup-2dc77",
  storageBucket: "sportsup-2dc77.appspot.com",
  messagingSenderId: "759581158877",
  appId: "1:759581158877:web:fad697bb4863b7733cda34",
  measurementId: "G-Q1N5ZVRKP6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);

const displayMessage = (message) => {
  const messageContainer = document.getElementById('notification-message');
  if (messageContainer) {
    messageContainer.textContent = message;
  } else {
    console.log(message); // Fallback to console if no container is found
  }
};

const checkNotificationSupport = async () => {
  if (!("Notification" in window)) {
    displayMessage("Notifications are not supported in this browser.");
    return;
  }

  const permission = Notification.permission;
  if (permission === "granted") {
    displayMessage("Notifications are enabled.");
    sessionStorage.setItem("noti", "no")
  } else if (permission === "denied") {
    displayMessage("Notifications are blocked. Please enable them in the browser settings.");
    await Notification.requestPermission();
    sessionStorage.setItem("noti", "no")
  } else {
    displayMessage("Notifications are not yet granted. Please allow notifications when prompted.");

    await Notification.requestPermission();
    sessionStorage.setItem("noti", "no")
  }
};

// Check for notification support
checkNotificationSupport();

export const generateToken = async () => {
  // Check if the Notification API and serviceWorker are supported in the browser
  if (!("Notification" in window) || !navigator.serviceWorker) {
    displayMessage("This browser does not support notifications or service workers.");
    return null;
  }

  // Request notification permission
  const permission = await Notification.requestPermission();
  console.log(permission);

  if (permission === "granted") {
    try {
      // Generate token using Firebase Messaging if permission is granted
      const token = await getToken(messaging, {
        vapidKey: "BHNaBYgoQL2jHI7T9j2-TIf6mS2HR2SqPtiJohzj1Xudqgxa-Ye6rhSvTlTO09CL9xJMvygqHvE9Ww1T7k4DrEk",
      });
      console.log("Token generated:", token);
      return token;
    } catch (error) {
      console.error("Error generating token:", error);
      return null;
    }
  } else {
    displayMessage("Permission for notifications was denied.");

    return null;
  }
};

