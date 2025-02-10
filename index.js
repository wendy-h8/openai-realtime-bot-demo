require("dotenv").config();
const WebSocket = require("ws");

// Connect to OpenAI Realtime API
const ws = new WebSocket("wss://api.openai.com/v1/realtime?model=gpt-4o-realtime-preview-2024-10-01", {
    headers: {
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
        "OpenAI-Beta": "realtime=v1",
    },
});

// WebSocket event listeners
ws.on("open", () => {
    console.log("Connection to OpenAI Realtime API is opened.");
});

ws.on("message", (data) => {
    console.log("Received message:", data.toString());
});

ws.on("error", (error) => {
    console.error("WebSocket error:", error);
});

ws.on("close", () => {
    console.log("Connection closed.");
});
