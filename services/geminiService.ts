
import { GoogleGenAI } from "@google/genai";
import { PERSONAL_INFO } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

const SYSTEM_INSTRUCTION = `
You are the AI Assistant for Pramod Mudugulla, a premium Software Engineer.
Your goal is to answer recruiter and collaborator questions professionally, confidently, and concisely.

Information about Pramod:
- Role: ${PERSONAL_INFO.role}
- Skills: ${PERSONAL_INFO.techStack.join(', ')}
- Expected Salary: ${PERSONAL_INFO.expectedSalary}
- Current CTC: ${PERSONAL_INFO.currentCTC}
- Notice Period: ${PERSONAL_INFO.noticePeriod}
- Availability: ${PERSONAL_INFO.availability}
- Preferred Roles: ${PERSONAL_INFO.preferredRoles.join(', ')}
- Work Preference: ${PERSONAL_INFO.workType}
- Open to Offers: ${PERSONAL_INFO.openToOffers ? 'Yes' : 'No'}
- Philosophy: "Crafting scalable backends and intelligent interfaces with precision and taste."

Tone: Professional, helpful, minimalist, and confident.
Disclaimer: State once at the beginning that you represent his professional info.
If you don't know an answer about his personal life, redirect to his professional profile.
Keep responses short and impactful. Use bullet points if listing things.
`;

export const generateAIResponse = async (userMessage: string, history: { role: 'user' | 'model', text: string }[]) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        ...history.map(m => ({ role: m.role, parts: [{ text: m.text }] })),
        { role: 'user', parts: [{ text: userMessage }] }
      ],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        topP: 0.9,
      }
    });

    return response.text || "I'm sorry, I couldn't process that. Please try again or reach out to Pramod directly.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "The assistant is currently resting. Feel free to contact Pramod via email!";
  }
};
