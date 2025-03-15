import { useEffect, useState } from "react";

const useWebSocket = (url) => {
  const [data, setData] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const socket = new WebSocket(url);

    socket.onopen = () => {
      console.log("WebSocket connected!");
      setIsConnected(true);
      setError(null);  // Reset error on successful connection
    };

    socket.onmessage = async (event) => {
      let text;
      console.log(event, "ws");

      try {
        if (event.data instanceof Blob) {
          text = await event.data.text(); // Convert Blob to text
        } else {
          text = event.data; // Already a string
        }

        // Check for non-JSON data and handle accordingly
        if (text.startsWith('-ERR')) {
          setError(`Error: ${text}`);
          return;
        }

        // Extract JSON part from the response
        const jsonStart = text.indexOf("{"); // Find first `{`
        const jsonText = jsonStart !== -1 ? text.substring(jsonStart) : text;

        const message = JSON.parse(jsonText); // Parse cleaned JSON
        setData(message);
        console.log("Received:", message);
      } catch (error) {
        console.error("Error parsing WebSocket JSON:", error, "Raw message:", text);
        setError(`Error parsing message: ${text}`);
      }
    };

    socket.onclose = () => {
      console.log("WebSocket disconnected!");
      setIsConnected(false);
    };

    socket.onerror = (error) => {
      console.error("WebSocket Error:", error);
      setError(`WebSocket Error: ${error.message}`);
    };

    // Cleanup on component unmount
    return () => {
      socket.close();
    };
  }, [url]);

  return { data, isConnected, error };
};

export default useWebSocket;
