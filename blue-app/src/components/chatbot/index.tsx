import React from "react";
import { WebView } from "react-native-webview";

const ChatbotScreen = () => {
  return <WebView source={require("./chatbot.html")} style={{ flex: 1 }} />;
};

export default ChatbotScreen;
