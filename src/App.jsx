import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <>
      <h1>Wellcome to push notification demo</h1>
      <p>
        Push notifications are messages that can be sent directly to a user’s
        mobile device. Unlike in-app messages, push notifications can appear on
        a lock screen or in the top section of a mobile device. An app publisher
        can only send a push notification if the user has their app installed.
        If you have installed the app and have enabled push notifications, they
        can be sent by the app publisher at any time. Push notifications can be
        sent without the app requiring the user’s contact information (note that
        the app must first ask the user for permission in order to send push
        notifications). Push notifications are a lot smarter than when Apple
        first rolled them out in iOS 3.0. In their most recent version, a push
        notification can play a personalized notification tone, send users a
        short message, put a numbered badge over the app’s icon or enable you to
        complete an action without ever having to open the app. Each OS has its
        own type of push notification service, including Apple’s iOS, Android,
        Windows, BlackBerry, and Fire OS.
      </p>
    </>
  );
}

export default App;
