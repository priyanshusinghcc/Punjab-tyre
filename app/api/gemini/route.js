import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function POST(req) {
  try {
    const { message } = await req.json();

    if (!process.env.GEMINI_API_KEY) {
      return Response.json({ error: "API key not set" }, { status: 500 });
    }

    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-lite" });
    const result = await model.generateContent(message);
    return Response.json({ reply: result.response.text() });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
