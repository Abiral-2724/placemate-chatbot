import { useState } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");
  
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    // First initialize vectors if needed
    await axios.get("http://localhost:5000/initialize-vectors");

    // Then send the question
    const res = await axios.post(
      "http://localhost:5000/ask-question",
      { query: message }, // Changed from 'message' to 'query'
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    setResponse(res.data.answer); // Changed from 'response' to 'answer'
  } catch (error) {
    let errorMessage = "Error fetching response";
    if (error.response) {
      errorMessage =
        error.response.data.error || `Server error: ${error.response.status}`;
    }
    setResponse(errorMessage);
    console.error("Full error:", error);
  }
};

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-4">PlaceMate Chatbot</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-full max-w-md"
      >
        <input
          type="text"
          placeholder="Ask something..."
          className="p-2 border rounded"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Send
        </button>
      </form>
      {response && (
        <div className="mt-4 p-3 bg-white shadow-md rounded w-full max-w-md">
          <strong>Response:</strong> {response}
        </div>
      )}
    </div>
  );
}

export default App;
