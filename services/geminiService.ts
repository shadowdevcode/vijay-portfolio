import { GoogleGenAI } from "@google/genai";
import { PERSONAL_INFO, EXPERIENCE, PROJECTS, SKILLS } from "../constants";

let aiClient: GoogleGenAI | null = null;

const getClient = () => {
  if (!aiClient) {
    if (!process.env.API_KEY) {
      console.error("API_KEY is not defined in environment variables.");
      return null;
    }
    aiClient = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }
  return aiClient;
};

// Construct the system prompt based on the resume data
const constructSystemPrompt = () => {
  // Group skills by category since SKILLS is a flat list of Skill objects
  const skillsByCategory: Record<string, string[]> = {};
  SKILLS.forEach((skill) => {
    if (!skillsByCategory[skill.category]) {
      skillsByCategory[skill.category] = [];
    }
    skillsByCategory[skill.category].push(skill.name);
  });

  const skillsStr = Object.entries(skillsByCategory)
    .map(([category, skills]) => `${category}: ${skills.join(", ")}`)
    .join("; ");

  const jobsStr = EXPERIENCE.map(job => {
    const achievements = job.achievements ? `Achievements: ${job.achievements.join(" ")}` : "";
    return `${job.role} at ${job.company} (${job.period}). ${job.description || ""} ${achievements}`;
  }).join("\n");

  const projectsStr = PROJECTS.map(p => {
    const metrics = p.metrics ? `Metrics: ${p.metrics.join(", ")}` : "";
    return `${p.title}: ${p.description} ${metrics}`;
  }).join("\n");

  return `
    You are an AI assistant representing Vijay Sehgal on his portfolio website.
    Your goal is to answer questions about Vijay's professional experience, skills, and projects based on his resume.
    
    Here is Vijay's context:
    Name: ${PERSONAL_INFO.name}
    Summary: ${PERSONAL_INFO.summary}
    
    Skills: ${skillsStr}
    
    Experience:
    ${jobsStr}
    
    Projects:
    ${projectsStr}
    
    Tone: Professional, insightful, concise, and product-focused.
    If asked about contact info, provide ${PERSONAL_INFO.email}.
    If asked about something not in the resume, politely say you don't have that specific information but can discuss his known skills.
    Keep answers under 100 words unless asked for detail.
  `;
};

export const sendMessageToGemini = async (userMessage: string): Promise<string> => {
  const client = getClient();
  if (!client) {
    return "I'm sorry, I can't connect to the AI service right now. Please check the API configuration.";
  }

  try {
    const response = await client.models.generateContent({
      model: "gemini-2.5-flash",
      contents: userMessage,
      config: {
        systemInstruction: constructSystemPrompt(),
      }
    });

    return response.text || "I didn't get a response regarding that.";
  } catch (error: any) {
    console.error("Gemini API Error:", error);

    if (error.toString().includes("403") || error.toString().includes("API_KEY")) {
      return "I'm having trouble connecting (Invalid API Key). Please check your configuration.";
    }

    if (error.toString().includes("429")) {
      return "I'm receiving too many requests right now. Please try again in a minute.";
    }

    return "Something went wrong while thinking. Please try again.";
  }
};