import { useState } from "react";
import { FaRobot, FaTimes, FaPaperPlane } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { sendChatMessage, isLiveAiEnabled } from "../services/chatService";

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hi! I'm ScholarPath AI 🎓 How can I help you find scholarships today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userMsg = { role: "user", content: input.trim() };
    const nextMessages = [...messages, userMsg];

    setMessages(nextMessages);
    setInput("");
    setLoading(true);

    try {
      const reply = await sendChatMessage(nextMessages);
      if (!reply) throw new Error("Empty reply");
      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch (err) {
      console.error("Chat error:", err);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Sorry, something went wrong. If using live AI, check VITE_OPENAI_API_KEY in .env and restart npm run dev. You can still ask about USA, UK, or Germany scholarships.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 bg-primary text-white p-4 rounded-full shadow-lg hover:bg-indigo-700 z-50"
        aria-label={open ? "Close chat" : "Open chat"}
      >
        {open ? <FaTimes size={24} /> : <FaRobot size={24} />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-24 right-6 w-80 md:w-96 h-[500px] bg-white rounded-xl shadow-2xl flex flex-col z-50 border"
          >
            <div className="bg-primary text-white p-4 rounded-t-xl flex items-center justify-between gap-2">
              <span className="flex items-center gap-2">
                <FaRobot /> <span className="font-bold">ScholarPath AI</span>
              </span>
              <span className="text-xs opacity-80">
                {isLiveAiEnabled() ? "Live AI" : "Demo mode"}
              </span>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`p-3 rounded-lg max-w-[85%] whitespace-pre-wrap ${
                    msg.role === "user"
                      ? "bg-primary text-white ml-auto"
                      : "bg-gray-100 text-dark"
                  }`}
                >
                  {msg.content}
                </div>
              ))}
              {loading && <div className="text-gray-500 text-sm">Typing...</div>}
            </div>

            <div className="p-3 border-t flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                placeholder="Ask about scholarships..."
                className="flex-1 border rounded-lg px-3 py-2 focus:outline-primary"
                disabled={loading}
              />
              <button
                onClick={sendMessage}
                disabled={loading}
                className="bg-primary text-white p-2 rounded-lg disabled:opacity-60"
                aria-label="Send message"
              >
                <FaPaperPlane />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
