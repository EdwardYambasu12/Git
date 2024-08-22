// src/onesignal-init.js
import OneSignal from '@onesignal/onesignal-react';

export const initOneSignal = () => {
  OneSignal.init({
    appId: "YOUR_ONESIGNAL_APP_ID",
    allowLocalhostAsSecureOrigin: true,
  });

  // Optional: Handle notifications received while the app is in the foreground
  OneSignal.on('notificationDisplay', (event) => {
    console.log('Notification displayed:', event);
  });

  // Optional: Handle notification clicks
  OneSignal.on('notificationClick', (event) => {
    console.log('Notification clicked:', event);
  });
};
