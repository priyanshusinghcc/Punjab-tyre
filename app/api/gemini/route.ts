import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return Response.json({ error: "API key not set" }, { status: 500 });
    }

    const genAI = new GoogleGenerativeAI(apiKey);

    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash-lite",
    });

    const result = await model.generateContent(message);

    return Response.json({
      reply: result.response.text(),
    });
  } catch (error: any) {
    return Response.json(
      {
        error: error.message || "Something went wrong",
      },
      { status: 500 },
    );
  }
}
