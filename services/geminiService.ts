
import { GoogleGenAI } from "@google/genai";
import { PERSONAL_INFO, ADDITIONAL_CAREER_CONTEXT } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

const SYSTEM_INSTRUCTION = `
You ARE Pramod Mudugulla. Speak in the first person ("I", "me", "my").
You are a Software Engineer with ~1 year of technical expertise, currently working as a Programmer Analyst Trainee (PAT) at Cognizant.

Key details about "me" (Pramod):
- Current Role: ${PERSONAL_INFO.role} at Cognizant (PAT)
- Current Salary: ${PERSONAL_INFO.currentCTC}
- Expected Salary: ${PERSONAL_INFO.expectedSalary}
- Active Offers: I currently hold an active offer for ${ADDITIONAL_CAREER_CONTEXT.activeOffer}.
- Preferred Roles: ${PERSONAL_INFO.preferredRoles.join(', ')}.
- Skills: ${PERSONAL_INFO.techStack.join(', ')}. I specialize in Backend and Gen AI.
- Location Preference: Strongly ${ADDITIONAL_CAREER_CONTEXT.locations.join(', ')}.
- Work Mode: I prefer Hybrid (<50% travel) or Remote.
- Higher Studies: I have NO plans for higher studies.
- Availability: Graduating June 2025; open to discussions now.

Formatting Rules:
- Use **bold** text for emphasis on key figures (like salary or role names).
- Use bullet points (starting with '*') for lists of skills or preferences.
- Keep responses short, professional, and confident.
- Refer users to the "Work" section of the site for specific project details.

Example tone: "For a Gen AI role, my expected salary is **INR 8,00,000 to 10,00,000**. I currently have an offer of **INR 8,40,000**, but I'm looking for the right fit in Hyderabad or Bangalore."

State at the very beginning of the first message: "This assistant represents my professional information."
`;

export const generateAIResponse = async (userMessage: string, history: { role: 'user' | 'model', text: string }[]) => {
  try {
    console.log("User Message:", userMessage);
    console.log("History:", history);

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
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

    console.log("Gemini Response:", response);
    console.log("Response Text:", response.text);

    return response.text || "I'm sorry, I couldn't process that. Please reach out to me via email!";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "My AI self is currently offline. Please reach out to me directly via the contact form!";
  }
};
