importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcySdlyVHWd27ZlJ5NKEzCDpXLiGiaY5w",
  authDomain: "sportsup-2dc77.firebaseapp.com",
  projectId: "sportsup-2dc77",
  storageBucket: "sportsup-2dc77.appspot.com",
  messagingSenderId: "759581158877",
  appId: "1:759581158877:web:fad697bb4863b7733cda34",
  measurementId: "G-Q1N5ZVRKP6"
};

// Initialize Firebase app
firebase.initializeApp(firebaseConfig);

// Retrieve Firebase Messaging instance
const messaging = firebase.messaging();

// Handle background messages
messaging.onBackgroundMessage((payload) => {
  console.log('Received background message: ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.icon || 'https://www.sportsupd.com/sportsup.png', // Production icon URL
    data: { link: payload.fcmOptions ? payload.fcmOptions.link : "https://www.sportsupd.com" }, // Store the link in the notification data
  };

  // Display the notification
  self.registration.showNotification(notificationTitle, notificationOptions);
});

// Handle notification click events
self.addEventListener('notificationclick', (event) => {
  console.log('Notification click event:', event);

  event.notification.close(); // Close the notification when clicked
  const notificationLink = event.notification.data.link || 'https://www.sportsupd.com/'; // Customize fallback

  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(windowClients => {
      // Check if the notification link is already open in a tab
      for (let client of windowClients) {
        if (client.url === notificationLink && 'focus' in client) {
          return client.focus(); // Focus the existing tab if it’s already open
        }
      }

      // If the link is not open, open a new tab with the link
      if (clients.openWindow) {
        return clients.openWindow(notificationLink); // Open a new window/tab with the link
      }
    })
  );
});
