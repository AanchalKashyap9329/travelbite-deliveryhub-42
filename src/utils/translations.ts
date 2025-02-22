export const translations = {
  en: {
    contact: "Contact Us",
    name: "Name",
    email: "Email",
    message: "Message",
    sendMessage: "Send Message",
    sending: "Sending...",
    messageSent: "Message sent successfully!",
    messageFailed: "Failed to send message. Please try again."
  },
  hi: {
    contact: "संपर्क करें",
    name: "नाम",
    email: "ईमेल",
    message: "संदेश",
    sendMessage: "संदेश भेजें",
    sending: "भेज रहा है...",
    messageSent: "संदेश सफलतापूर्वक भेजा गया!",
    messageFailed: "संदेश भेजने में विफल। कृपया पुनः प्रयास करें।"
  },
  cgr: {
    contact: "संपर्क करव",
    name: "नाम",
    email: "ईमेल",
    message: "संदेस",
    sendMessage: "संदेस भेजव",
    sending: "भेज रहे हन...",
    messageSent: "संदेस भेज दिए गे हे!",
    messageFailed: "संदेस नइ भेज पाए। फेर से कोशिश करव।"
  }
};

export type Language = 'en' | 'hi' | 'cgr';
export type TranslationKey = keyof typeof translations.en;
