import React, { useState, useEffect } from 'react';

const PictureDescriptionB2 = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [showSampleDescription, setShowSampleDescription] = useState(false);
  const [copiedId, setCopiedId] = useState(null);

  // Timer effect
  useEffect(() => {
    let interval;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setTimeElapsed((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning]);

  const startTimer = () => {
    setTimeElapsed(0);
    setIsTimerRunning(true);
    setShowSampleDescription(false);
  };

  const stopTimer = () => {
    setIsTimerRunning(false);
  };

  const resetTimer = () => {
    setTimeElapsed(0);
    setIsTimerRunning(false);
    setShowSampleDescription(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % pictureExercises.length);
    resetTimer();
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? pictureExercises.length - 1 : prev - 1
    );
    resetTimer();
  };

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Format time as MM:SS
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Get recommendations based on time elapsed
  const getTimeBasedRecommendations = (seconds) => {
    const recommendations = [];
    
    if (seconds >= 0) {
      recommendations.push({
        time: '0:00-0:30',
        title: 'Observation Phase',
        text: 'Look at the overall scene. What type of situation is this? Where is it taking place?',
        color: 'blue'
      });
    }
    
    if (seconds >= 30) {
      recommendations.push({
        time: '0:30-1:00',
        title: 'Identify Key Elements',
        text: 'Focus on the people: How many? What are they doing? What are they wearing?',
        color: 'green'
      });
    }
    
    if (seconds >= 60) {
      recommendations.push({
        time: '1:00-1:30',
        title: 'Start Speaking',
        text: 'Begin with: "In this photograph, I can see..." Describe the general scene.',
        color: 'yellow'
      });
    }
    
    if (seconds >= 90) {
      recommendations.push({
        time: '1:30-2:00',
        title: 'Add Details',
        text: 'Describe specific details: facial expressions, body language, objects in the scene.',
        color: 'orange'
      });
    }
    
    if (seconds >= 120) {
      recommendations.push({
        time: '2:00-2:30',
        title: 'Speculate & Interpret',
        text: 'Use phrases like "It seems that...", "They might be...", "The atmosphere appears to be..."',
        color: 'purple'
      });
    }
    
    if (seconds >= 150) {
      recommendations.push({
        time: '2:30-3:00',
        title: 'Conclude',
        text: 'Wrap up with the overall mood, significance, or personal connection to the image.',
        color: 'red'
      });
    }
    
    if (seconds >= 180) {
      recommendations.push({
        time: '3:00+',
        title: 'Time Complete!',
        text: 'You\'ve reached the typical B2 speaking time. Review the sample description to compare.',
        color: 'htb-green'
      });
    }
    
    return recommendations;
  };

  // Using Unsplash API for high-quality images of people in various situations
  const pictureExercises = [
    {
      id: 1,
      title: "Fashion Store Shopping",
      category: "Clothes and Fashion",
      imageUrl: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&h=600&fit=crop",
      description: "People shopping for clothes in a fashion store",
      sampleDescription: "In this photograph, I can see what appears to be a modern, upscale clothing boutique with several customers browsing through various garments. The store has a contemporary design with excellent lighting that highlights the merchandise, and the overall atmosphere seems sophisticated and inviting.\n\nIn the foreground, there's a woman who appears to be in her twenties or thirties, carefully examining a piece of clothing - possibly a dress or a blouse. She's dressed stylishly herself, which suggests she has a good sense of fashion and is particular about what she chooses. Her body language indicates she's seriously considering the purchase, perhaps checking the fabric quality or the size tag. Behind her, I can see clothing racks filled with various items in different colors and styles, suggesting this is a store with a wide selection.\n\nWhat's interesting about this scene is the way fashion retail has evolved. Modern clothing stores aren't just about selling items; they create an experience. The lighting, the layout, and the way the clothes are displayed all contribute to making shopping feel more like a leisure activity than a chore. The store appears to be well-organized, with garments arranged by type or perhaps by color, making it easier for customers to find what they're looking for.\n\nThe overall impression is one of contemporary consumer culture, where shopping for clothes is as much about self-expression and personal style as it is about necessity. Fashion retail plays a significant role in how people present themselves to the world, and stores like this one cater to customers who value quality, style, and the latest trends.",
      keyVocabulary: [
        "upscale boutique",
        "browsing through garments",
        "contemporary design",
        "examining a piece of clothing",
        "sense of fashion",
        "fabric quality",
        "clothing racks",
        "fashion retail",
        "self-expression",
        "latest trends"
      ],
      usefulPhrases: [
        "In this photograph/image, I can see...",
        "In the foreground/background...",
        "The atmosphere seems/appears to be...",
        "What's interesting about this scene is...",
        "It looks as if/as though...",
        "This suggests that...",
        "The overall impression is...",
        "Modern... has evolved..."
      ],
      grammarPoints: [
        "Present Continuous for describing ongoing actions: 'she's examining', 'customers are browsing'",
        "Modal verbs for speculation: 'might be', 'could be', 'appears to be'",
        "Present Perfect for describing changes: 'fashion retail has evolved'",
        "Passive voice: 'garments are arranged', 'clothes are displayed'"
      ],
      tips: "When describing shopping scenes, focus on the clothing, colors, styles, and the overall atmosphere of the store. Discuss modern consumer behavior and fashion culture to show deeper analysis."
    },
    {
      id: 2,
      title: "Airport Terminal",
      category: "Airport",
      imageUrl: "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=800&h=600&fit=crop",
      description: "Travelers in an airport terminal with luggage",
      sampleDescription: "In this photograph, I can see a busy airport terminal with several travelers making their way through the departure or arrival area. The scene captures the typical hustle and bustle of modern air travel, with people at various stages of their journey.\n\nIn the foreground, there's a woman pulling a suitcase behind her, dressed in casual travel clothing - probably comfortable clothes chosen specifically for a long flight. She appears to be walking purposefully, perhaps heading to check-in or to her departure gate. Behind her, I can see other passengers with their luggage - some pulling rolling suitcases, others carrying backpacks or hand luggage. The diversity of the travelers suggests this is an international airport serving destinations around the world.\n\nThe terminal itself looks modern and spacious, with high ceilings and plenty of natural light coming through large windows. The architecture is typical of contemporary airports - clean, functional, and designed to handle large volumes of passengers efficiently. In the background, I can make out what appears to be flight information displays, check-in counters, or possibly departure gates. The signage is clearly visible, which is essential in airports where people from different countries need to navigate their way around.\n\nWhat's interesting about airport scenes like this is the mix of emotions they represent. Some travelers might be excited about their upcoming vacation or adventure, while others could be feeling stressed about making their flight on time or anxious about the journey ahead. Business travelers might be rushing to catch connecting flights, while families with children are probably managing the chaos of traveling with young ones. The overall atmosphere is one of constant movement and transition - airports are liminal spaces where people are between destinations, neither here nor there, which creates a unique energy.",
      keyVocabulary: [
        "busy airport terminal",
        "hustle and bustle",
        "pulling a suitcase",
        "casual travel clothing",
        "departure gate",
        "rolling suitcases",
        "international airport",
        "flight information displays",
        "check-in counters",
        "liminal spaces"
      ],
      usefulPhrases: [
        "In this photograph, I can see...",
        "The scene captures...",
        "In the foreground/background...",
        "The terminal appears to be...",
        "What's interesting about... is...",
        "Some travelers might be..., while others...",
        "The overall atmosphere is one of...",
        "It represents a mix of..."
      ],
      grammarPoints: [
        "Present Continuous for ongoing actions: 'people are making their way', 'she's walking'",
        "Modal verbs for speculation: 'might be', 'could be', 'probably'",
        "Present Perfect: 'has become', 'have arrived'",
        "Passive voice: 'is designed', 'are displayed'"
      ],
      tips: "When describing airport scenes, focus on the movement of people, their luggage, the architecture, and the various emotions travelers might be experiencing. Mention practical elements like signage and facilities."
    },
    {
      id: 3,
      title: "Rainy Day in the City",
      category: "Weather",
      imageUrl: "https://images.unsplash.com/photo-1428908728789-d2de25dbd4e2?w=800&h=600&fit=crop",
      description: "People with umbrellas walking in the rain",
      sampleDescription: "This atmospheric photograph captures a typical rainy day in what appears to be an urban setting. The image is dominated by the grey, overcast sky and wet surfaces that reflect the surrounding buildings and streetlights, creating that characteristic gloomy but somehow cozy feeling that rainy weather often brings.\n\nIn the scene, I can see several pedestrians making their way along the street, each carrying an umbrella to shield themselves from the rain. The umbrellas are in various colors - some black, some brightly colored - which adds visual interest to an otherwise grey and muted scene. The people are dressed in raincoats or jackets, and some appear to be walking quickly, eager to reach their destination and get out of the wet weather. Their body language suggests a mix of determination and mild discomfort that's typical when dealing with rain.\n\nThe wet pavement is quite noticeable, with puddles forming in various spots and the entire surface gleaming with moisture. This creates beautiful reflections of the city lights and buildings, which is one of the more photogenic aspects of rainy weather. The rain itself might not be visible in a still photograph, but its effects are everywhere - from the umbrellas to the wet clothing to the general atmosphere of dampness.\n\nWhat's interesting about rainy weather in cities is how it transforms the usual urban landscape. The sounds are different - there's the constant patter of rain, the splash of cars driving through puddles, and the general hushed quality that rain brings. The air feels fresher and cleaner, though the inconvenience of getting wet means most people would prefer sunny weather. Rain also affects daily routines - people might change their plans, stay indoors longer, or simply accept that they'll get wet and carry on with their day. The overall mood in the photograph is contemplative and slightly melancholic, which is a common emotional response to grey, rainy weather.",
      keyVocabulary: [
        "atmospheric photograph",
        "overcast sky",
        "wet surfaces",
        "gloomy but cozy",
        "shield themselves from the rain",
        "brightly colored umbrellas",
        "wet pavement",
        "puddles forming",
        "gleaming with moisture",
        "transforms the landscape"
      ],
      usefulPhrases: [
        "This atmospheric image shows...",
        "The scene is dominated by...",
        "I can see several people...",
        "The weather appears to be...",
        "What's interesting about... is...",
        "Rain affects...",
        "The overall mood is...",
        "It creates a feeling of..."
      ],
      grammarPoints: [
        "Present Continuous: 'people are walking', 'rain is falling'",
        "Present Perfect: 'rain has transformed', 'puddles have formed'",
        "Modal verbs: 'might not be visible', 'could be', 'would prefer'",
        "Passive voice: 'umbrellas are being used', 'streets are covered'"
      ],
      tips: "When describing weather scenes, focus on how the weather affects the environment and people's behavior. Describe the colors, atmosphere, and mood created by the weather conditions. Use sensory language."
    },
    {
      id: 4,
      title: "Doctor's Appointment",
      category: "Illnesses and Injuries",
      imageUrl: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&h=600&fit=crop",
      description: "Patient consultation with a doctor in a medical office",
      sampleDescription: "In this photograph, I can see what appears to be a medical consultation taking place in a doctor's office or clinic. The scene depicts a healthcare professional, most likely a doctor, having a conversation with a patient, which is a fundamental aspect of medical care and diagnosis.\n\nThe doctor appears to be wearing professional medical attire - possibly a white coat or scrubs - and is sitting in a position that suggests they're actively listening to the patient. Their body language indicates engagement and concern, which is essential in healthcare settings where patients need to feel heard and understood. The doctor might be holding a clipboard or medical records, or perhaps gesturing as they explain something to the patient about their condition or treatment options.\n\nThe patient, on the other hand, seems to be describing their symptoms or concerns. They might look worried or uncomfortable, which is quite common when people visit the doctor - whether it's for a routine check-up or because they're experiencing health problems. The interaction between doctor and patient is crucial; effective communication can make a significant difference in diagnosis accuracy and treatment compliance.\n\nThe medical office itself appears clean and professional, with typical medical equipment visible in the background - perhaps an examination table, medical charts on the walls, or diagnostic equipment. The lighting is bright and clinical, which is standard in healthcare facilities. The overall atmosphere is serious and focused, as befits a setting where people's health and well-being are the primary concern.\n\nWhat this image really represents is the importance of accessible healthcare and the doctor-patient relationship. Regular medical check-ups and consultations are essential for maintaining good health, catching potential problems early, and managing chronic conditions. The ability to visit a doctor when feeling unwell or injured is something many people take for granted, but it's a crucial part of modern healthcare systems.",
      keyVocabulary: [
        "medical consultation",
        "healthcare professional",
        "doctor's office",
        "medical attire",
        "actively listening",
        "describing symptoms",
        "diagnosis accuracy",
        "treatment options",
        "medical equipment",
        "doctor-patient relationship"
      ],
      usefulPhrases: [
        "In this photograph, I can see...",
        "The scene depicts...",
        "The doctor appears to be...",
        "Their body language suggests...",
        "What this image represents is...",
        "The interaction between... is crucial",
        "The overall atmosphere is...",
        "It's essential for..."
      ],
      grammarPoints: [
        "Present Continuous: 'the doctor is explaining', 'the patient is describing'",
        "Modal verbs: 'might be', 'could be', 'appears to be'",
        "Present Perfect: 'has become important', 'healthcare has evolved'",
        "Passive voice: 'is being examined', 'are being discussed'"
      ],
      tips: "When describing medical scenes, focus on the interaction between healthcare providers and patients, the professional environment, and the importance of healthcare. Use appropriate medical vocabulary and discuss the emotional aspects sensitively."
    },
    {
      id: 5,
      title: "Fashion Boutique Window Display",
      category: "Clothes and Fashion",
      imageUrl: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&h=600&fit=crop",
      description: "Person looking at clothes in a boutique window display",
      sampleDescription: "This captivating photograph captures someone examining a fashion boutique's window display, perfectly illustrating the art of window shopping and the powerful role of visual merchandising in retail. The image shows how fashion retailers use their window displays to attract customers and showcase their latest collections in the most appealing way possible.\n\nIn the scene, I can see a person standing in front of a boutique window, clearly engaged by what's displayed inside. The person might be studying the mannequins, which are typically dressed in the store's current seasonal offerings - perhaps spring collections featuring lighter fabrics and brighter colors, or autumn ranges with layered looks and earth tones. Window displays are carefully curated to tell a story about the brand and create desire for the products.\n\nThe boutique itself appears to be an upscale or trendy establishment, as evidenced by the attention to detail in the presentation. The lighting in the window is probably strategic and theatrical, designed to highlight the clothing and create an aspirational atmosphere. Fashion retailers invest significantly in window displays because they serve as silent salespeople, working 24 hours a day to attract passersby and communicate the store's aesthetic and target demographic.\n\nWhat's interesting about window shopping is that it's both a practical activity and a form of entertainment. The person in the photograph might be seriously considering a purchase, perhaps mentally calculating whether the items fit their budget and wardrobe needs. Alternatively, they could simply be enjoying the visual feast of fashion, drawing inspiration for their own style, or keeping up with current trends without any immediate intention to buy.\n\nThe act of window shopping has endured even in our digital age, despite the ease of online shopping. There's something irreplaceable about seeing clothing in person - observing the drape of fabric, imagining how colors might look in natural light, and experiencing the overall ambiance that a physical store creates. For many fashion enthusiasts, browsing boutique windows in fashionable shopping districts is a leisure activity in itself, offering both inspiration and aspiration.",
      keyVocabulary: [
        "window display",
        "visual merchandising",
        "seasonal offerings",
        "carefully curated",
        "upscale boutique",
        "aspirational atmosphere",
        "silent salespeople",
        "target demographic",
        "window shopping",
        "fashion inspiration"
      ],
      usefulPhrases: [
        "This captivating photograph captures...",
        "The image shows how...",
        "I can see someone...",
        "The boutique appears to be...",
        "What's interesting about... is...",
        "Serves as...",
        "Has endured even in...",
        "There's something irreplaceable about..."
      ],
      grammarPoints: [
        "Present Continuous: 'person is examining', 'retailers are using'",
        "Modal verbs: 'might be', 'could be', 'would look'",
        "Present Perfect: 'has endured', 'has become'",
        "Passive voice: 'are carefully curated', 'is displayed', 'are dressed'"
      ],
      tips: "When describing fashion and shopping scenes, discuss the visual merchandising techniques, the psychology of window shopping, and how fashion retail creates desire. Connect the physical experience with broader trends in retail."
    },
    {
      id: 6,
      title: "Airport Check-in Counter",
      category: "Airport",
      imageUrl: "https://images.unsplash.com/photo-1488085061387-422e29b40080?w=800&h=600&fit=crop",
      description: "Travelers checking in at airport counter with staff",
      sampleDescription: "In this photograph, I can see travelers at an airport check-in counter, interacting with airline staff in what appears to be the pre-flight check-in process. This scene represents one of the essential stages of air travel that every passenger must go through before boarding their flight.\n\nAt the counter, there's likely an airline employee - perhaps wearing a uniform with the airline's colors and logo - assisting passengers with their check-in procedures. The staff member is probably checking passports, boarding passes, and luggage tags, while also answering questions about the flight, baggage allowances, or seat assignments. Their professional demeanor and helpful attitude are crucial for creating a positive travel experience, especially for passengers who might be nervous or unfamiliar with air travel procedures.\n\nThe travelers themselves appear to have their luggage with them - suitcases that need to be weighed and checked in for the flight. They might be handing over their travel documents, asking about gate information, or requesting specific services like special meals or wheelchair assistance. The interaction between staff and passengers is an important moment where any travel concerns can be addressed and where the efficiency of the airline service becomes apparent.\n\nThe check-in area itself looks organized and professional, with clear signage indicating different airline counters, departure times, and destinations. Behind the counter, there are probably computer screens where staff can access passenger information, flight details, and baggage handling systems. The overall environment is busy but orderly, designed to process large numbers of passengers efficiently while maintaining service quality.\n\nWhat's interesting about modern airport check-in is how it has evolved with technology. While many passengers now use online check-in or self-service kiosks, the staffed counters remain essential for handling complex situations, checking in oversized luggage, or assisting passengers who need extra help. This human element of airport service is still valued despite increasing automation in the travel industry.",
      keyVocabulary: [
        "check-in counter",
        "airline staff",
        "pre-flight procedures",
        "boarding passes",
        "baggage allowances",
        "travel documents",
        "gate information",
        "professional demeanor",
        "service quality",
        "human element"
      ],
      usefulPhrases: [
        "In this photograph, I can see...",
        "The scene represents...",
        "The staff member is probably...",
        "Their demeanor is crucial for...",
        "The interaction between... is important",
        "What's interesting about... is...",
        "Has evolved with...",
        "Remains essential for..."
      ],
      grammarPoints: [
        "Present Continuous: 'staff are assisting', 'passengers are checking in'",
        "Modal verbs: 'might be', 'probably', 'appears to be'",
        "Present Perfect: 'has evolved', 'have arrived'",
        "Passive voice: 'are checked', 'is designed', 'are indicated'"
      ],
      tips: "When describing airport check-in scenes, focus on the interaction between staff and passengers, the procedures involved, and how technology has changed the check-in process while maintaining the importance of human service."
    },
    {
      id: 7,
      title: "Snowy Winter Day",
      category: "Weather",
      imageUrl: "https://images.unsplash.com/photo-1491002052546-bf38f186af56?w=800&h=600&fit=crop",
      description: "People walking in snowy winter weather conditions",
      sampleDescription: "This striking photograph captures a winter scene where people are navigating through snowy weather conditions. The image beautifully illustrates how winter weather dramatically transforms the urban or suburban landscape and affects people's daily routines and activities.\n\nIn the scene, I can see pedestrians bundled up in heavy winter clothing - thick coats, scarves, hats, and gloves - all essential for protecting themselves from the cold temperatures. Their clothing is likely in darker colors, which tend to be more practical in winter, though some might have bright-colored accessories that stand out against the white snow. The way people are walking suggests they're being careful about their footing, as snow and ice can make surfaces slippery and dangerous.\n\nThe snow itself is quite prominent in the photograph - it might be actively falling, creating that characteristic grey-white atmosphere of a snowy day, or it could be covering the ground in a thick white blanket that muffles sounds and creates a peaceful, almost magical quality. Trees and buildings in the background are probably dusted with snow, and the overall color palette of the image is likely muted and cool, dominated by whites, greys, and blues.\n\nWhat's particularly interesting about winter weather is how it affects people's behavior and mood. Some people might look cold and uncomfortable, hurrying to reach their destination and escape the harsh conditions. Others might appear more relaxed, perhaps enjoying the beauty of the snowfall despite the inconvenience. Winter weather can be both challenging and enchanting - while it creates difficulties for transportation and daily activities, it also transforms familiar environments into something new and visually stunning.\n\nSnowy weather also brings practical challenges: roads become hazardous, public transport can be delayed, and simple tasks like walking to work become more time-consuming and physically demanding. However, for many people, especially in countries where snow is seasonal, these first snowfalls of winter can evoke feelings of nostalgia and excitement, reminding them of childhood snow days and winter holidays.",
      keyVocabulary: [
        "winter scene",
        "snowy weather conditions",
        "bundled up",
        "heavy winter clothing",
        "slippery and dangerous",
        "thick white blanket",
        "muted color palette",
        "harsh conditions",
        "transportation challenges",
        "feelings of nostalgia"
      ],
      usefulPhrases: [
        "This striking photograph captures...",
        "The image illustrates how...",
        "I can see people...",
        "The snow creates...",
        "What's particularly interesting is...",
        "Weather affects...",
        "Some people might... while others...",
        "It brings both... and..."
      ],
      grammarPoints: [
        "Present Continuous: 'people are walking', 'snow is falling'",
        "Modal verbs: 'might be', 'could be', 'can be'",
        "Passive voice: 'are covered', 'is transformed'",
        "Present Perfect: 'has transformed', 'has created'"
      ],
      tips: "When describing snowy weather, focus on how it affects people's clothing, movement, and behavior. Describe the visual transformation of the environment and discuss both the challenges and beauty of winter weather."
    },
    {
      id: 8,
      title: "Hospital Emergency Room",
      category: "Illnesses and Injuries",
      imageUrl: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&h=600&fit=crop",
      description: "Medical staff attending to patients in emergency setting",
      sampleDescription: "This powerful photograph captures the intense environment of a hospital emergency room, where medical professionals are attending to patients in urgent situations. The image effectively conveys the critical nature of emergency healthcare and the dedication of medical staff who work in these high-pressure environments.\n\nIn the scene, I can see medical staff - likely nurses, doctors, or emergency medical technicians - wearing scrubs, which are the standard uniform in healthcare settings. Their scrubs might be in various colors, as different hospitals use different color-coding systems to distinguish between departments or roles. The staff appear focused and purposeful in their movements, demonstrating the professional competence that's essential in emergency situations where every second counts.\n\nThe emergency room environment looks clinical and functional, with medical equipment visible throughout - perhaps monitors displaying vital signs, IV stands, medical carts stocked with supplies, and diagnostic equipment. The lighting is typically bright and fluorescent, ensuring optimal visibility for medical procedures and patient assessment. The atmosphere conveys a sense of urgency and efficiency, as emergency rooms must be prepared to handle multiple patients with varying degrees of medical need simultaneously.\n\nWhat's particularly striking about this setting is the contrast between the routine nature of the work for the medical professionals and the potentially life-changing circumstances for the patients. For healthcare workers, this is their workplace, where they apply their training and experience daily. However, for patients and their families, arriving at the emergency room often represents a moment of crisis, fear, and vulnerability.\n\nThe emergency room serves as a critical gateway to healthcare services, providing immediate care for accidents, sudden illnesses, and acute medical conditions. The staff must be skilled not only in medical procedures but also in triage - determining which patients need immediate attention - and in communicating with distressed patients and family members. This environment demands excellent teamwork, quick decision-making abilities, and emotional resilience, as healthcare professionals regularly face challenging situations that require both technical expertise and human compassion.",
      keyVocabulary: [
        "emergency room",
        "medical professionals",
        "high-pressure environment",
        "wearing scrubs",
        "clinical and functional",
        "vital signs monitors",
        "sense of urgency",
        "triage process",
        "acute medical conditions",
        "emotional resilience"
      ],
      usefulPhrases: [
        "This powerful photograph captures...",
        "The image conveys...",
        "I can see medical staff...",
        "The environment looks...",
        "What's particularly striking is...",
        "The contrast between... and...",
        "Serves as a critical...",
        "Demands both... and..."
      ],
      grammarPoints: [
        "Present Continuous: 'staff are attending', 'monitors are displaying'",
        "Modal verbs: 'must be', 'might be', 'can see'",
        "Present Perfect: 'has arrived', 'have faced'",
        "Passive voice: 'are attended', 'is required', 'must be prepared'"
      ],
      tips: "When describing medical emergency settings, focus on the professionalism of staff, the clinical environment, the contrast between routine work and critical situations, and the human element. Show sensitivity while maintaining analytical depth."
    }
  ];

  const describingTechniques = [
    {
      title: "SOAP Structure",
      description: "Setting, Objects, Actions, People - A systematic way to organize your description",
      details: [
        "Setting: Where is the scene taking place? What's the environment like?",
        "Objects: What items, furniture, or things can you see?",
        "Actions: What are people doing? What's happening?",
        "People: Who are the people? What do they look like? How do they seem to feel?"
      ]
    },
    {
      title: "Foreground to Background",
      description: "Describe the image in layers, moving from front to back",
      details: [
        "Start with what's closest to the camera/viewer",
        "Move to the middle ground - the main action or focus",
        "Finish with background details - setting, environment, context",
        "This creates a natural flow and ensures comprehensive coverage"
      ]
    },
    {
      title: "General to Specific",
      description: "Begin with an overview, then zoom in on details",
      details: [
        "Opening sentence: Overall scene and main impression",
        "Second part: Specific details about key elements",
        "Third part: Smaller details, colors, textures, emotions",
        "Conclusion: Overall mood, significance, or personal reflection"
      ]
    }
  ];

  const usefulLanguage = {
    speculation: [
      "It looks like/as if/as though...",
      "It seems to be...",
      "It appears that...",
      "They might/could/may be...",
      "I'd say this is probably...",
      "I imagine they're...",
      "It gives the impression that...",
      "Judging by... I'd guess..."
    ],
    describing_people: [
      "In the foreground/background, there's a person who...",
      "She/He appears to be in her/his twenties/thirties...",
      "They're wearing...",
      "Their facial expression suggests...",
      "Their body language indicates...",
      "They seem to be feeling...",
      "One person is... while another is..."
    ],
    describing_atmosphere: [
      "The atmosphere seems quite relaxed/tense/energetic...",
      "There's a sense of...",
      "The mood appears to be...",
      "The overall feeling is one of...",
      "The scene conveys...",
      "It creates a... impression"
    ],
    describing_actions: [
      "In the process of (verb+ing)...",
      "Currently engaged in...",
      "Busy (verb+ing)...",
      "In the middle of...",
      "Appears to be (verb+ing)...",
      "Seems to be involved in..."
    ]
  };

  const examTips = [
    {
      title: "Time Management",
      tip: "In a B2 speaking exam, you typically have 1 minute to prepare and 2-3 minutes to describe. Use the preparation time to identify key elements using SOAP or another structure."
    },
    {
      title: "Don't Just List",
      tip: "Avoid simply listing what you see. Make connections, speculate about relationships between people, discuss the broader context or significance of the scene."
    },
    {
      title: "Use Varied Vocabulary",
      tip: "Demonstrate your range by using synonyms and varied expressions. Instead of always saying 'people', use: individuals, figures, persons, participants, etc."
    },
    {
      title: "Show, Don't Tell",
      tip: "Instead of 'They look happy', say 'They're smiling broadly and their eyes are lit up with excitement'. Descriptive language shows better command of English."
    },
    {
      title: "Speculate Intelligently",
      tip: "Making educated guesses about what's happening shows critical thinking: 'Based on their business attire and the laptops, I'd say this is likely a professional meeting.'"
    },
    {
      title: "Include Personal Response",
      tip: "If appropriate, briefly mention what the image makes you think of or how it relates to your experience: 'This reminds me of...' or 'In my country, we often see...'"
    }
  ];

  const currentExercise = pictureExercises[currentImageIndex];
  const recommendations = getTimeBasedRecommendations(timeElapsed);
  const colorClasses = {
    blue: 'bg-blue-900 border-blue-700',
    green: 'bg-green-900 border-green-700',
    yellow: 'bg-yellow-900 border-yellow-700',
    orange: 'bg-orange-900 border-orange-700',
    purple: 'bg-purple-900 border-purple-700',
    red: 'bg-red-900 border-red-700',
    'htb-green': 'bg-htb-green bg-opacity-20 border-htb-green'
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-htb-green mb-4">
            Picture Description - B2 Level
          </h1>
          <p className="text-gray-300 text-lg">
            Practice describing images with people in various situations. Use the timer to simulate exam conditions.
          </p>
        </div>

        {/* Main Practice Area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Left Column - Image and Controls */}
          <div className="lg:col-span-2 space-y-4">
            {/* Timer and Controls */}
            <div className="bg-gray-800 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div className="text-5xl font-bold text-htb-green font-mono">
                    {formatTime(timeElapsed)}
                  </div>
                  <div className="text-sm text-gray-400">
                    <div>Image {currentImageIndex + 1} of {pictureExercises.length}</div>
                    <div className="text-htb-green font-semibold">{currentExercise.category}</div>
                  </div>
                </div>
                <div className="flex space-x-2">
                  {!isTimerRunning ? (
                    <button
                      onClick={startTimer}
                      className="bg-htb-green hover:bg-green-600 text-gray-900 font-semibold px-6 py-3 rounded transition-colors"
                    >
                      ▶ Start
                    </button>
                  ) : (
                    <button
                      onClick={stopTimer}
                      className="bg-yellow-600 hover:bg-yellow-700 text-white font-semibold px-6 py-3 rounded transition-colors"
                    >
                      ⏸ Pause
                    </button>
                  )}
                  <button
                    onClick={resetTimer}
                    className="bg-gray-700 hover:bg-gray-600 text-white font-semibold px-6 py-3 rounded transition-colors"
                  >
                    ↻ Reset
                  </button>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                <div
                  className="bg-htb-green h-2 rounded-full transition-all duration-1000"
                  style={{ width: `${Math.min((timeElapsed / 180) * 100, 100)}%` }}
                ></div>
              </div>
              <div className="flex justify-between text-xs text-gray-400">
                <span>0:00</span>
                <span>1:00 (Preparation)</span>
                <span>3:00 (Target)</span>
              </div>
            </div>

            {/* Image */}
            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <img
                src={currentExercise.imageUrl}
                alt={currentExercise.description}
                className="w-full h-[500px] object-cover"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/800x600/374151/9CA3AF?text=Image+Loading...';
                }}
              />
              <div className="p-4">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {currentExercise.title}
                </h3>
                <p className="text-gray-400 italic">
                  {currentExercise.description}
                </p>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between">
              <button
                onClick={previousImage}
                className="bg-gray-700 hover:bg-gray-600 text-white font-semibold px-6 py-3 rounded transition-colors"
              >
                ← Previous Image
              </button>
              <button
                onClick={nextImage}
                className="bg-gray-700 hover:bg-gray-600 text-white font-semibold px-6 py-3 rounded transition-colors"
              >
                Next Image →
              </button>
            </div>

            {/* Sample Description Toggle */}
            <div className="bg-gray-800 rounded-lg p-4">
              <button
                onClick={() => setShowSampleDescription(!showSampleDescription)}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded transition-colors"
              >
                {showSampleDescription ? '🙈 Hide Sample Description' : '👁 Show Sample Description'}
              </button>

              {showSampleDescription && (
                <div className="mt-4 space-y-4">
                  {/* Sample Description */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-lg font-bold text-htb-green">
                        Sample Description (B2 Level)
                      </h4>
                      <button
                        onClick={() => copyToClipboard(currentExercise.sampleDescription, 'sample')}
                        className="text-sm bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded transition-colors"
                      >
                        {copiedId === 'sample' ? '✓ Copied!' : '📋 Copy'}
                      </button>
                    </div>
                    <div className="bg-gray-700 p-4 rounded max-h-96 overflow-y-auto">
                      <p className="text-gray-300 whitespace-pre-line">
                        {currentExercise.sampleDescription}
                      </p>
                    </div>
                  </div>

                  {/* Key Vocabulary */}
                  <div>
                    <h4 className="text-lg font-bold text-htb-green mb-2">
                      Key Vocabulary
                    </h4>
                    <div className="bg-gray-700 p-4 rounded">
                      <div className="flex flex-wrap gap-2">
                        {currentExercise.keyVocabulary.map((word, idx) => (
                          <span
                            key={idx}
                            className="bg-blue-900 text-blue-200 px-3 py-1 rounded-full text-sm"
                          >
                            {word}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Useful Phrases */}
                  <div>
                    <h4 className="text-lg font-bold text-htb-green mb-2">
                      Useful Phrases
                    </h4>
                    <div className="bg-gray-700 p-4 rounded">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {currentExercise.usefulPhrases.map((phrase, idx) => (
                          <div key={idx} className="text-gray-300 text-sm">
                            • {phrase}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Grammar Points */}
                  <div>
                    <h4 className="text-lg font-bold text-htb-green mb-2">
                      Grammar Points
                    </h4>
                    <div className="bg-gray-700 p-4 rounded">
                      <ul className="space-y-2">
                        {currentExercise.grammarPoints.map((point, idx) => (
                          <li key={idx} className="text-gray-300 text-sm">
                            • {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Time-based Recommendations */}
          <div className="space-y-4">
            <div className="bg-gray-800 rounded-lg p-4 sticky top-4">
              <h3 className="text-xl font-bold text-htb-green mb-4">
                📋 Time-Based Guide
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                Follow these recommendations as time progresses:
              </p>
              <div className="space-y-3">
                {recommendations.map((rec, index) => (
                  <div
                    key={index}
                    className={`${colorClasses[rec.color]} border-2 rounded-lg p-3 transition-all duration-500 ${
                      index === recommendations.length - 1 ? 'animate-pulse' : ''
                    }`}
                  >
                    <div className="flex items-start justify-between mb-1">
                      <span className="text-xs font-mono text-gray-300 bg-gray-900 px-2 py-1 rounded">
                        {rec.time}
                      </span>
                      {index === recommendations.length - 1 && (
                        <span className="text-xs text-htb-green">← Current</span>
                      )}
                    </div>
                    <h4 className="font-bold text-white mb-1">
                      {rec.title}
                    </h4>
                    <p className="text-gray-200 text-sm">
                      {rec.text}
                    </p>
                  </div>
                ))}
                
                {timeElapsed === 0 && (
                  <div className="bg-gray-700 border-2 border-gray-600 rounded-lg p-3">
                    <p className="text-gray-400 text-sm text-center italic">
                      👆 Press Start to begin the timer and see recommendations
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Reference Sections - Collapsible */}
        <div className="space-y-4">
          {/* Description Techniques */}
          <details className="bg-gray-800 rounded-lg">
            <summary className="cursor-pointer p-6 font-bold text-xl text-htb-green hover:bg-gray-750">
              📚 Description Techniques & Strategies
            </summary>
            <div className="p-6 pt-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {describingTechniques.map((technique, index) => (
                  <div key={index} className="bg-gray-700 rounded-lg p-4">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {technique.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-3">
                      {technique.description}
                    </p>
                    <ul className="space-y-1">
                      {technique.details.map((detail, idx) => (
                        <li key={idx} className="text-gray-400 text-sm">
                          • {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </details>

          {/* Useful Language Reference */}
          <details className="bg-gray-800 rounded-lg">
            <summary className="cursor-pointer p-6 font-bold text-xl text-htb-green hover:bg-gray-750">
              💬 Useful Language Reference
            </summary>
            <div className="p-6 pt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(usefulLanguage).map(([category, phrases]) => (
                  <div key={category} className="bg-gray-700 rounded-lg p-4">
                    <h3 className="text-lg font-bold text-white mb-3 capitalize">
                      {category.replace(/_/g, ' ')}
                    </h3>
                    <ul className="space-y-2">
                      {phrases.map((phrase, idx) => (
                        <li key={idx} className="text-gray-300 text-sm">
                          • {phrase}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </details>

          {/* Exam Tips */}
          <details className="bg-gray-800 rounded-lg">
            <summary className="cursor-pointer p-6 font-bold text-xl text-htb-green hover:bg-gray-750">
              🎯 B2 Speaking Exam Tips
            </summary>
            <div className="p-6 pt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {examTips.map((item, index) => (
                  <div key={index} className="bg-gray-700 rounded-lg p-4">
                    <h3 className="text-lg font-bold text-htb-green mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 text-sm">{item.tip}</p>
                  </div>
                ))}
              </div>
            </div>
          </details>
        </div>

        {/* Practice Instructions */}
        <div className="mt-8 bg-blue-900 bg-opacity-30 border border-blue-700 rounded-lg p-6">
          <h3 className="text-xl font-bold text-blue-300 mb-3">
            How to Practice Effectively
          </h3>
          <ol className="space-y-2 text-gray-300">
            <li>
              <strong>1. Click "Start"</strong> to begin the timer and simulate exam conditions.
            </li>
            <li>
              <strong>2. Use the first minute</strong> to observe the image and plan your description (following the time-based guide).
            </li>
            <li>
              <strong>3. Speak out loud</strong> for 2-3 minutes, describing what you see. Record yourself if possible.
            </li>
            <li>
              <strong>4. Check the sample description</strong> after you finish to compare your approach.
            </li>
            <li>
              <strong>5. Note new vocabulary</strong> and useful phrases you didn't use.
            </li>
            <li>
              <strong>6. Try again</strong> with the same image, incorporating what you learned.
            </li>
            <li>
              <strong>7. Move to the next image</strong> and repeat the process.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default PictureDescriptionB2;