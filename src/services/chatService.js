const OPENAI_KEY = import.meta.env.VITE_OPENAI_API_KEY;

export function isLiveAiEnabled() {
  return Boolean(OPENAI_KEY);
}

function demoReply(messages) {
  const last = messages[messages.length - 1]?.content?.toLowerCase() || "";
  if (last.includes("usa") || last.includes("us")) {
    return `Here are some common USA scholarship suggestions: Fulbright, Knight-Hennessy, and university-specific merit awards. Tell me which degree or country you're from for more tailored options.`;
  }
  if (
    last.includes("germany") ||
    last.includes("de") ||
    last.includes("daad")
  ) {
    return `In Germany, look into DAAD scholarships and university-specific programs. DAAD is a good starting point; which level are you applying for?`;
  }
  if (
    last.includes("uk") ||
    last.includes("united kingdom") ||
    last.includes("britain")
  ) {
    return `For the UK, consider Chevening, Commonwealth Scholarships, and university bursaries. Which subject or degree are you targeting?`;
  }

  return `Hi — I'm running in demo mode. Try asking about scholarships in the USA, UK, or Germany, or set a VITE_OPENAI_API_KEY in your .env to enable live AI.`;
}

export async function sendChatMessage(messages = []) {
  if (!messages || messages.length === 0) return null;

  if (!isLiveAiEnabled()) {
    // Return a quick demo reply synchronously
    return demoReply(messages);
  }

  try {
    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${OPENAI_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages,
        max_tokens: 500,
        temperature: 0.7,
      }),
    });

    if (!res.ok) {
      const text = await res.text();
      console.error("OpenAI error:", res.status, text);
      return null;
    }

    const data = await res.json();
    const content = data?.choices?.[0]?.message?.content;
    return content ? content.trim() : null;
  } catch (err) {
    console.error("sendChatMessage error:", err);
    return null;
  }
}
