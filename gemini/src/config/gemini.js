import { GoogleGenerativeAI } from "@google/generative-ai";
//require('dotenv').config({ path: './src/config/gemini.env' });

console.log("API Key:", process.env.GEMINI_API_KEY); // Log the API key to check if it's loaded correctly

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

async function run(prompt) {
  try {
    const chatSession = model.startChat({
      generationConfig,
      history: [],
    });

    const result = await chatSession.sendMessage(prompt);
    const response = await result.response; // Make sure you await the response
    console.log(response); // Log the full response to inspect it
    return response.text(); // or use response.getText() depending on the actual structure of the response
  } catch (error) {
    console.error("Error generating response:", error);
    return "Sorry, something went wrong!";
  }
}

export default run;
