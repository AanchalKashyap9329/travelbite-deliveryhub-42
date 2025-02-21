
export const translations = {
  en: {
    welcome: "Welcome to Danteserve",
    heroTitle: "Travel & Food Delivery in Dantewada",
    heroDescription: "Your one-stop solution for convenient travel and delicious food delivery services. Experience seamless booking and real-time tracking.",
    bookRide: "Book a Ride",
    orderFood: "Order Food",
    ourServices: "Our Services",
    servicesDescription: "Choose from our range of services designed to make your life easier",
    travelServices: "Travel Services",
    travelDescription: "Book bikes, taxis, and scooties with real-time tracking and flexible payment options.",
    foodDelivery: "Food Delivery",
    foodDescription: "Order from your favorite restaurants with live tracking and exclusive discounts.",
    language: "Language"
  },
  hi: {
    welcome: "डांटेसर्व में आपका स्वागत है",
    heroTitle: "दंतेवाड़ा में यात्रा और खाद्य वितरण",
    heroDescription: "सुविधाजनक यात्रा और स्वादिष्ट भोजन वितरण सेवाओं के लिए आपका वन-स्टॉप समाधान। सहज बुकिंग और रीयल-टाइम ट्रैकिंग का अनुभव करें।",
    bookRide: "राइड बुक करें",
    orderFood: "भोजन ऑर्डर करें",
    ourServices: "हमारी सेवाएं",
    servicesDescription: "आपका जीवन आसान बनाने के लिए डिज़ाइन की गई हमारी सेवाओं में से चुनें",
    travelServices: "यात्रा सेवाएं",
    travelDescription: "रीयल-टाइम ट्रैकिंग और लचीले भुगतान विकल्पों के साथ बाइक, टैक्सी और स्कूटी बुक करें।",
    foodDelivery: "खाना डिलीवरी",
    foodDescription: "लाइव ट्रैकिंग और विशेष छूट के साथ अपने पसंदीदा रेस्तरां से ऑर्डर करें।",
    language: "भाषा"
  },
  cgr: {
    welcome: "डांटेसर्व म स्वागत हे",
    heroTitle: "दंतेवाड़ा म यात्रा अउ खाना डिलीवरी",
    heroDescription: "सुविधाजनक यात्रा अउ स्वादिष्ट खाना डिलीवरी सेवा बर एक ठन समाधान। आसान बुकिंग अउ लाइव ट्रैकिंग के अनुभव करव।",
    bookRide: "सवारी बुक करव",
    orderFood: "खाना मंगाव",
    ourServices: "हमर सेवा मन",
    servicesDescription: "आप मन के जीवन आसान बनाए बर तैयार करे गे हमर सेवा मन ल चुनव",
    travelServices: "यात्रा सेवा",
    travelDescription: "लाइव ट्रैकिंग अउ आसान भुगतान के साथ बाइक, टैक्सी अउ स्कूटी बुक करव।",
    foodDelivery: "खाना डिलीवरी",
    foodDescription: "लाइव ट्रैकिंग अउ खास छूट के साथ मनपसंद होटल म से खाना मंगाव।",
    language: "भाषा"
  }
};

export type Language = 'en' | 'hi' | 'cgr';
export type TranslationKey = keyof typeof translations.en;
