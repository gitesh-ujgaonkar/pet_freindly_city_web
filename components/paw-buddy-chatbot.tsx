"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { PawPrint, X, Send, ChevronDown, ChevronUp } from "lucide-react"
import { cn } from "@/lib/utils"

interface Message {
  id: string
  content: string
  sender: "user" | "bot"
  timestamp: Date
}

const initialMessages: Message[] = [
  {
    id: "1",
    content: "Hi there! I'm PawBuddy, your friendly pet assistant. How can I help you today?",
    sender: "bot",
    timestamp: new Date(),
  },
]

const botResponses: Record<string, string[]> = {
  volunteer: [
    "We'd love to have you volunteer! You can sign up through our volunteer form. We have roles like Street Feeder, Vet Assistant, and Digital Promoter.",
    "Volunteering is easy! Just fill out the form above and select your preferred role. We'll match you with opportunities that fit your schedule.",
  ],
  adopt: [
    "Looking to adopt? That's wonderful! Check out our adoption carousel to see pets currently looking for homes.",
    "Our adoption process is simple: browse available pets, click 'Adopt Me' on a pet's profile, and we'll contact you to arrange a meeting.",
  ],
  donate: [
    "Donations help us provide food, medical care, and shelter to animals in need. You can donate through our website or at any of our events.",
    "Every donation makes a difference! We use funds for emergency vet care, food for street animals, and supporting our shelter partners.",
  ],
  event: [
    "We host regular events including adoption days, volunteer training, and community feeding programs. Check our calendar for upcoming events!",
    "Our next event is a Vaccination Drive this Saturday at Central Park. Bring your pets or help us care for street animals!",
  ],
  care: [
    "For basic pet care, ensure your pet has fresh water, appropriate food, regular exercise, and annual vet check-ups.",
    "If you've found a stray animal, please provide water and food if possible, and contact our hotline at 555-PAWS for assistance.",
  ],
}

export default function PawBuddyChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    if (isOpen) {
      scrollToBottom()
    }
  }, [messages, isOpen])

  const handleSendMessage = () => {
    if (!input.trim()) return

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsTyping(true)

    // Simulate bot thinking
    setTimeout(() => {
      const botMessage = generateBotResponse(input)
      setMessages((prev) => [...prev, botMessage])
      setIsTyping(false)
    }, 1000)
  }

  const generateBotResponse = (userInput: string): Message => {
    const lowercaseInput = userInput.toLowerCase()
    let responseContent =
      "I'm not sure how to help with that. Would you like to know about volunteering, adoption, or pet care?"

    // Check for keywords in the user input
    for (const [keyword, responses] of Object.entries(botResponses)) {
      if (lowercaseInput.includes(keyword)) {
        responseContent = responses[Math.floor(Math.random() * responses.length)]
        break
      }
    }

    return {
      id: Date.now().toString(),
      content: responseContent,
      sender: "bot",
      timestamp: new Date(),
    }
  }

  return (
    <>
      {/* Chat button */}
      <Button
        className={cn(
          "fixed bottom-4 right-4 rounded-full w-14 h-14 shadow-lg z-50",
          isOpen ? "bg-red-500 hover:bg-red-600" : "bg-amber-600 hover:bg-amber-700",
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-6 w-6" /> : <PawPrint className="h-6 w-6" />}
        <span className="sr-only">{isOpen ? "Close chat" : "Open chat"}</span>
      </Button>

      {/* Chat window */}
      <div
        className={cn(
          "fixed bottom-20 right-4 w-80 sm:w-96 z-50 transition-all duration-300 transform",
          isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none",
        )}
      >
        <Card className="border-amber-200 dark:border-amber-800 shadow-xl">
          <CardHeader className="bg-amber-600 text-white py-3 px-4 flex flex-row items-center justify-between">
            <div className="flex items-center">
              <Avatar className="h-8 w-8 mr-2 bg-white">
                <AvatarImage src="/placeholder.svg?height=32&width=32" alt="PawBuddy" />
                <AvatarFallback className="bg-white text-amber-600">PB</AvatarFallback>
              </Avatar>
              <CardTitle className="text-lg">PawBuddy</CardTitle>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-amber-700 h-8 w-8"
              onClick={() => setIsOpen(false)}
            >
              {isOpen ? <ChevronDown className="h-5 w-5" /> : <ChevronUp className="h-5 w-5" />}
            </Button>
          </CardHeader>

          <CardContent className="p-0">
            <div className="h-80 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={cn("flex", message.sender === "user" ? "justify-end" : "justify-start")}
                >
                  <div
                    className={cn(
                      "max-w-[80%] rounded-lg p-3",
                      message.sender === "user"
                        ? "bg-amber-600 text-white rounded-tr-none"
                        : "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-tl-none",
                    )}
                  >
                    {message.content}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-lg rounded-tl-none max-w-[80%] p-3">
                    <div className="flex space-x-1">
                      <div
                        className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-500 animate-bounce"
                        style={{ animationDelay: "0ms" }}
                      />
                      <div
                        className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-500 animate-bounce"
                        style={{ animationDelay: "150ms" }}
                      />
                      <div
                        className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-500 animate-bounce"
                        style={{ animationDelay: "300ms" }}
                      />
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>
          </CardContent>

          <CardFooter className="p-2 border-t border-gray-200 dark:border-gray-700">
            <form
              className="flex w-full gap-2"
              onSubmit={(e) => {
                e.preventDefault()
                handleSendMessage()
              }}
            >
              <Input
                placeholder="Ask about volunteering, adoption..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1"
              />
              <Button
                type="submit"
                size="icon"
                className="bg-amber-600 hover:bg-amber-700 text-white"
                disabled={!input.trim() || isTyping}
              >
                <Send className="h-4 w-4" />
                <span className="sr-only">Send</span>
              </Button>
            </form>
          </CardFooter>
        </Card>
      </div>
    </>
  )
}
