"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { MessageCircle, X, Send, Bot } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const INITIAL_MESSAGE: Message = {
  role: "assistant",
  content: "Halo! Saya AI Assistant dari Adventure Sumbawa Island. Ada yang bisa saya bantu tentang paket wisata kami? 😊"
};

export function AIChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messages]);

  const sendMessage = useCallback(async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    
    // Add user message
    const newMessages: Message[] = [...messages, { role: "user", content: userMessage }];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      // Call internal API route (using mock for now)
      const response = await fetch("/api/chat-mock", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [
            {
              role: "system",
              content: `Kamu adalah AI customer service untuk Adventure Sumbawa Island, sebuah tour operator di Sumbawa, Indonesia. 
              
Paket wisata yang tersedia:
1. Tour Hiu Paus Teluk Saleh Harian (start/finish Sumbawa Besar)
2. Tour Hiu Paus 2D1N (start/finish Sumbawa Besar)
3. Paket Tour 3D2N Pulau Moyo + Hiu Paus
4. Tour Hiu Paus 2D1N (start/finish Lombok)
5. Paket Tour 4D3N Pulau Moyo, Pulau Kenawa & Hiu Paus
6. Whale Shark Scuba Diving Tour 2D1N

Destinasi utama: Hiu Paus Teluk Saleh, Pulau Moyo, Pulau Kenawa, snorkeling, diving.

Jawab dengan ramah, informatif, dan profesional. Gunakan bahasa ${language === "id" ? "Indonesia" : "Inggris"}. 
Jika ditanya harga atau detail spesifik, sarankan untuk hubungi WhatsApp atau lihat halaman tour.
Jangan buat-buat informasi yang tidak ada.`
            },
            ...newMessages.map(msg => ({
              role: msg.role,
              content: msg.content
            }))
          ]
        })
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error("API response not OK:", response.status, errorText);
        throw new Error(`API error: ${response.status}`);
      }

      const data = await response.json();
      console.log("API response data:", data);
      
      if (data.error) {
        console.error("API returned error:", data.error, data.details);
        throw new Error(data.error);
      }

      if (!data.choices || !data.choices[0] || !data.choices[0].message) {
        console.error("Invalid response format:", data);
        throw new Error("Invalid API response format");
      }

      const assistantMessage = data.choices[0].message.content;

      setMessages([...newMessages, { role: "assistant", content: assistantMessage }]);
    } catch (error) {
      console.error("Error calling chat API:", error);
      
      // Fallback response
      let fallbackMessage = "Maaf, sistem AI sedang mengalami gangguan. ";
      
      if (userMessage.toLowerCase().includes("harga") || userMessage.toLowerCase().includes("price")) {
        fallbackMessage += "Untuk informasi harga, silakan hubungi kami via WhatsApp di bawah. 📱";
      } else if (userMessage.toLowerCase().includes("hiu paus") || userMessage.toLowerCase().includes("whale shark")) {
        fallbackMessage += "Kami menyediakan berbagai paket tour hiu paus. Silakan lihat halaman tour atau hubungi WhatsApp untuk detail. 🦈";
      } else {
        fallbackMessage += "Silakan hubungi kami via WhatsApp untuk bantuan lebih lanjut. 🙏";
      }
      
      setMessages([
        ...newMessages,
        {
          role: "assistant",
          content: fallbackMessage
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  }, [input, isLoading, messages, language]);

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="fixed bottom-28 right-4 sm:right-6 z-40">
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center gap-2 group"
          aria-label="Open AI Chat"
        >
          <Bot className="w-6 h-6" />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap text-sm font-medium">
            AI Assistant
          </span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white rounded-2xl shadow-2xl w-80 sm:w-96 h-[450px] flex flex-col overflow-hidden border border-gray-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 p-2 rounded-full">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-sm">AI Customer Service</h3>
                <p className="text-xs text-blue-100">Adventure Sumbawa Island</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/20 p-2 rounded-full transition-colors"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                    msg.role === "user"
                      ? "bg-blue-600 text-white rounded-br-none"
                      : "bg-white text-gray-800 shadow-sm rounded-bl-none border border-gray-200"
                  }`}
                >
                  <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white rounded-2xl rounded-bl-none px-4 py-3 shadow-sm border border-gray-200">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-white border-t border-gray-200">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={language === "id" ? "Ketik pesan..." : "Type a message..."}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                disabled={isLoading}
              />
              <button
                onClick={sendMessage}
                disabled={isLoading || !input.trim()}
                className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Send message"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
