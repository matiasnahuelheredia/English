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
      title: "Business Meeting",
      category: "Professional Situations",
      imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
      description: "People in a professional meeting environment",
      sampleDescription: "In this photograph, I can see a group of approximately five or six professionals gathered around a modern conference table in what appears to be a bright, contemporary office space. The atmosphere seems quite collaborative and engaged. In the foreground, there's a woman with long dark hair who appears to be actively participating in the discussion, gesturing with her hands as if she's making an important point. She's dressed in smart casual attire, which suggests a relatively relaxed but professional work environment.\n\nThe meeting participants are clearly focused on their discussion, with some people taking notes on laptops while others are listening attentively. I can notice that there are papers and documents scattered across the table, along with what look like coffee cups, indicating this might be a longer working session. The body language of the people suggests they're comfortable with each other, possibly colleagues who work together regularly.\n\nThe setting itself is quite impressive - there are large windows in the background allowing natural light to flood the room, and the office has a modern, minimalist design with clean lines and neutral colors. This type of environment is typical of contemporary tech companies or creative agencies. The overall mood of the image is positive and productive, conveying a sense of teamwork and professional collaboration.",
      keyVocabulary: [
        "contemporary office space",
        "collaborative atmosphere",
        "smart casual attire",
        "actively participating",
        "body language",
        "colleagues",
        "natural light",
        "minimalist design",
        "productive environment",
        "professional collaboration"
      ],
      usefulPhrases: [
        "In this photograph/image, I can see...",
        "In the foreground/background...",
        "The atmosphere seems/appears to be...",
        "What strikes me most is...",
        "It looks as if/as though...",
        "This suggests that...",
        "The setting/environment is...",
        "The overall mood/feeling is..."
      ],
      grammarPoints: [
        "Present Continuous for describing ongoing actions: 'she's making a point', 'people are taking notes'",
        "Modal verbs for speculation: 'might be', 'could be', 'appears to be'",
        "Present Perfect for describing states: 'they've gathered', 'papers have been scattered'",
        "Passive voice: 'documents are scattered', 'the office is designed'"
      ],
      tips: "Structure your description: start with the general scene, move to specific details about people and their actions, then describe the setting. Use a variety of present tenses and speculative language to show B2-level proficiency."
    },
    {
      id: 2,
      title: "Street Performance",
      category: "Public Spaces",
      imageUrl: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=800&h=600&fit=crop",
      description: "Street musician or performer with audience",
      sampleDescription: "This vibrant image captures what appears to be a street performance taking place in a bustling urban area. At the center of the scene, there's a musician - possibly a guitarist or violinist - performing for a small crowd that has gathered around them. The performer seems completely absorbed in their music, their posture suggesting passion and dedication to their craft.\n\nWhat's particularly interesting about this scene is the diversity of the audience. I can make out people of various ages - some younger individuals who might be tourists or students, and what look like local residents as well. A few people in the crowd have stopped completely to watch and listen, while others seem to be pausing briefly on their way to somewhere else. Some audience members appear to be filming or photographing the performance with their smartphones, which is quite typical of modern street performances.\n\nThe setting looks like it could be a European city center, judging by the architecture visible in the background - there are what seem to be historic buildings with traditional facades. The lighting suggests it's either late afternoon or early evening, creating a warm, golden atmosphere that adds to the artistic feel of the moment. There might also be an open instrument case or hat on the ground for donations, which is the traditional way street performers earn money.\n\nThe overall impression is one of community and shared experience - strangers coming together to appreciate live music in a public space, which is one of the beautiful aspects of street culture in many cities around the world.",
      keyVocabulary: [
        "vibrant scene",
        "bustling urban area",
        "absorbed in their music",
        "diversity of the audience",
        "pausing briefly",
        "historic buildings",
        "traditional facades",
        "golden atmosphere",
        "shared experience",
        "street culture"
      ],
      usefulPhrases: [
        "This vibrant/striking image shows...",
        "At the center of the scene...",
        "What's particularly interesting/notable is...",
        "Judging by... it could be...",
        "The lighting suggests...",
        "The overall impression is...",
        "One of the [adjective] aspects is...",
        "It reminds me of..."
      ],
      grammarPoints: [
        "Present Continuous for ongoing actions: 'a musician is performing', 'people are filming'",
        "Modal verbs for deduction: 'could be', 'might be', 'seems to be'",
        "Relative clauses: 'people who have stopped', 'individuals who might be tourists'",
        "Present Perfect Continuous: 'has been gathering', 'have been watching'"
      ],
      tips: "When describing public scenes, comment on the interaction between people, the atmosphere, and cultural aspects. Use speculative language to show you're making educated guesses based on visual clues."
    },
    {
      id: 3,
      title: "Family Cooking Together",
      category: "Home & Family Life",
      imageUrl: "https://images.unsplash.com/photo-1556910096-6f5e72db6803?w=800&h=600&fit=crop",
      description: "Family members preparing food in a kitchen",
      sampleDescription: "This heartwarming photograph depicts what appears to be a multi-generational family engaging in the shared activity of cooking together in a bright, well-equipped kitchen. The scene radiates warmth and togetherness, capturing a moment of domestic harmony that's increasingly valued in our busy modern lives.\n\nIn the image, I can identify what looks like a parent or grandparent working alongside younger family members - possibly children or teenagers. They seem to be in the process of preparing a meal together, with various ingredients spread across the kitchen counter. What's touching about this scene is the clear sense of teaching and learning taking place - the older person appears to be showing the younger ones how to prepare something, perhaps passing down traditional family recipes or cooking techniques.\n\nEveryone in the photograph looks genuinely happy and engaged in the activity. There's laughter evident in their expressions, and the body language suggests easy, comfortable interaction that comes from close family bonds. The kitchen itself is modern and inviting, with good lighting - probably natural light coming from a window we can't see - which adds to the positive, healthy atmosphere of the scene.\n\nWhat strikes me most about this image is how it represents the importance of spending quality time together as a family. In today's world, where people are often distracted by technology and busy schedules, scenes like this of families collaborating on simple domestic tasks are becoming more precious. The act of cooking together serves multiple purposes - it's practical, educational, and provides an opportunity for bonding and creating memories.",
      keyVocabulary: [
        "heartwarming photograph",
        "multi-generational family",
        "domestic harmony",
        "teaching and learning",
        "passing down traditions",
        "family bonds",
        "quality time",
        "collaborating on tasks",
        "creating memories",
        "shared activity"
      ],
      usefulPhrases: [
        "This heartwarming/touching image shows...",
        "The scene radiates...",
        "What's touching/striking about...",
        "There's a clear sense of...",
        "The body language suggests...",
        "What strikes me most is...",
        "In today's world...",
        "It represents the importance of..."
      ],
      grammarPoints: [
        "Present Continuous: 'they're preparing', 'everyone is engaging'",
        "Present Perfect Continuous: 'have been cooking', 'has been teaching'",
        "Gerunds: 'spending quality time', 'cooking together serves'",
        "Passive constructions: 'are spread across', 'is valued in modern lives'"
      ],
      tips: "For domestic scenes, focus on emotions, relationships, and the significance of the activity. Connect the image to broader social themes or personal experiences. Use warm, descriptive language."
    },
    {
      id: 4,
      title: "Gym or Fitness Class",
      category: "Health & Lifestyle",
      imageUrl: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&h=600&fit=crop",
      description: "People exercising in a fitness environment",
      sampleDescription: "This dynamic image captures a group fitness class in full swing, showcasing what appears to be a high-energy workout session in a modern gym or fitness studio. The photograph conveys movement, determination, and the collective energy that makes group exercise so popular and effective.\n\nI can see several participants, possibly around eight to ten people, all engaged in what looks like an intensive cardiovascular or strength training exercise. They're positioned in rows, and from their postures and expressions, it's clear they're pushing themselves physically. Most of them are wearing typical athletic wear - form-fitting tops, leggings or shorts in various bright colors - which is standard for this type of activity. Their faces show concentration and effort, with some appearing to be breathing heavily, which indicates they're working at a challenging intensity.\n\nAt the front of the class, there seems to be an instructor who's demonstrating the movement or providing motivation and guidance. This person likely has more defined muscles and a confident posture that distinguishes them as the leader of the session. The instructor's role is crucial in group fitness - they set the pace, ensure proper form, and maintain the group's energy and motivation throughout the workout.\n\nThe facility itself looks professional and well-maintained, with proper flooring (probably rubber or specialized gym flooring to absorb impact), adequate lighting, and possibly mirrors on the walls, which are essential for participants to check their form. The atmosphere suggests a supportive community environment where people come not just to exercise but also to motivate each other and share in the challenge of improving their fitness.\n\nThis type of group exercise has become increasingly popular as people recognize that working out with others can be more motivating than exercising alone. It also provides accountability and a sense of belonging, which are important factors in maintaining a regular fitness routine.",
      keyVocabulary: [
        "dynamic image",
        "high-energy workout",
        "collective energy",
        "intensive training",
        "pushing themselves",
        "athletic wear",
        "concentration and effort",
        "proper form",
        "supportive community",
        "accountability"
      ],
      usefulPhrases: [
        "This dynamic/energetic image shows...",
        "The photograph conveys...",
        "From their postures/expressions...",
        "It's clear that...",
        "Their faces show...",
        "The atmosphere suggests...",
        "This type of... has become increasingly popular...",
        "People recognize that..."
      ],
      grammarPoints: [
        "Present Continuous for actions: 'they're working out', 'the instructor is demonstrating'",
        "Present Perfect: 'has become popular', 'fitness has evolved'",
        "Comparative structures: 'more motivating than...', 'better than exercising alone'",
        "Modal verbs: 'could be', 'might be', 'appears to be'"
      ],
      tips: "When describing action scenes, use dynamic vocabulary and focus on movement, energy, and physical details. Discuss the purpose and benefits of the activity to demonstrate deeper analysis."
    },
    {
      id: 5,
      title: "Students Studying Together",
      category: "Education & Learning",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
      description: "Group of students collaborating on academic work",
      sampleDescription: "This photograph presents a scene that will be instantly recognizable to anyone who's been through higher education - a group of students engaged in collaborative study. The image captures what appears to be three or four young adults huddled around a table in what could be a university library, a coffee shop, or a study room, all focused intently on their academic work.\n\nEach student appears to be actively contributing to the discussion. I can observe laptops open, notebooks spread out, and what might be textbooks or printed materials scattered across the workspace. One student seems to be explaining something, perhaps pointing at a screen or a page, while the others are listening attentively, some taking notes. This kind of peer-to-peer learning is incredibly valuable in academic settings, as students often find that explaining concepts to each other reinforces their own understanding.\n\nThe students' expressions suggest a mix of concentration and engagement. They don't look stressed or frustrated, which indicates they might be genuinely enjoying the collaborative process or at least finding it productive. The casual yet focused atmosphere is typical of modern learning environments, where the emphasis is on active participation and group work rather than passive listening.\n\nInterestingly, the diversity in their study materials - combining digital devices with traditional paper-based resources - reflects how contemporary students blend old and new learning methods. Some are typing on their laptops, possibly researching online or writing essays, while others prefer the tactile experience of handwriting notes, which research has shown can aid memory retention.\n\nThe overall setting looks comfortable and conducive to learning, with adequate space for everyone to spread out their materials. The lighting appears to be good, which is essential for extended study sessions to avoid eye strain. What this image really captures is the social aspect of learning - the way that studying doesn't have to be a solitary, isolating activity but can instead be a shared experience that builds both knowledge and friendships.",
      keyVocabulary: [
        "collaborative study",
        "huddled around",
        "focused intently",
        "peer-to-peer learning",
        "reinforces understanding",
        "casual yet focused",
        "active participation",
        "blend old and new methods",
        "memory retention",
        "conducive to learning"
      ],
      usefulPhrases: [
        "This photograph presents...",
        "The image captures...",
        "I can observe...",
        "This kind of... is incredibly valuable...",
        "Their expressions suggest...",
        "Interestingly...",
        "What this image really captures is...",
        "Research has shown that..."
      ],
      grammarPoints: [
        "Present Continuous: 'students are engaging', 'someone is explaining'",
        "Modal verbs: 'could be', 'might be', 'appears to be'",
        "Present Perfect: 'research has shown', 'this has become common'",
        "Gerunds: 'studying doesn't have to be', 'explaining concepts reinforces'"
      ],
      tips: "For educational scenes, analyze both the visible details and the broader implications of what you see. Comment on learning styles, educational trends, and the social aspects of studying."
    },
    {
      id: 6,
      title: "Outdoor Recreation",
      category: "Leisure & Outdoor Activities",
      imageUrl: "https://images.unsplash.com/photo-1527525443983-6e60c75fff46?w=800&h=600&fit=crop",
      description: "People enjoying outdoor recreational activities",
      sampleDescription: "This refreshing image showcases a group of people thoroughly enjoying themselves in the great outdoors, engaging in what appears to be a hiking or trekking adventure in a scenic natural setting. The photograph beautifully captures the spirit of outdoor recreation and the joy that comes from connecting with nature.\n\nI can see what looks like four or five individuals, possibly friends or family members, navigating through what might be a mountain trail or a forest path. They're all equipped with appropriate outdoor gear - backpacks, comfortable hiking clothes, and what appear to be walking sticks or trekking poles. Their body language exudes enthusiasm and energy; some are smiling broadly, others might be pointing at something interesting in the landscape, suggesting they're having an animated conversation about their surroundings.\n\nThe natural environment around them is spectacular - depending on the specific location, there could be mountains in the background, lush green vegetation, or perhaps a view of valleys below. The sky appears clear and blue, indicating favorable weather conditions for this kind of outdoor activity. The quality of light in the photograph suggests it might be morning or late afternoon, which are generally the best times for hiking when temperatures are more moderate.\n\nWhat's particularly notable about this scene is how it represents a growing trend in modern society - more people are seeking outdoor experiences as a way to disconnect from technology, reduce stress, and improve their physical and mental well-being. Hiking and similar activities offer multiple benefits: cardiovascular exercise, fresh air, exposure to natural beauty, and opportunities for social bonding.\n\nThe group dynamics visible in the image are also worth mentioning. Unlike solo hiking, which can be meditative and introspective, group hiking like this creates a shared adventure. People encourage each other when the trail gets challenging, share the excitement of reaching viewpoints, and create memories together. This social aspect is often what makes outdoor activities so memorable and motivating for many people.",
      keyVocabulary: [
        "the great outdoors",
        "scenic natural setting",
        "outdoor recreation",
        "connecting with nature",
        "equipped with gear",
        "body language exudes",
        "favorable weather conditions",
        "growing trend",
        "reduce stress",
        "shared adventure"
      ],
      usefulPhrases: [
        "This refreshing image shows...",
        "The photograph beautifully captures...",
        "Their body language exudes...",
        "The environment is spectacular...",
        "What's particularly notable is...",
        "This represents a growing trend...",
        "Unlike... this creates...",
        "The social aspect is..."
      ],
      grammarPoints: [
        "Present Continuous: 'they're having', 'people are seeking'",
        "Present Perfect: 'have equipped themselves', 'has become popular'",
        "Comparatives: 'more moderate', 'better times', 'more people'",
        "Conditional language: 'could be', 'might be', 'appears to be'"
      ],
      tips: "For outdoor scenes, describe the environment in detail, comment on the weather and time of day, and discuss why such activities are important in modern life. Show awareness of health and social benefits."
    },
    {
      id: 7,
      title: "Restaurant or Café Scene",
      category: "Social & Dining",
      imageUrl: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&h=600&fit=crop",
      description: "People dining and socializing in a restaurant setting",
      sampleDescription: "This inviting photograph captures a convivial dining scene in what appears to be a trendy restaurant or café, where a group of friends or colleagues are gathered around a table, clearly enjoying both the food and each other's company. The image perfectly encapsulates the social and cultural importance of dining out in contemporary society.\n\nThe group consists of approximately four to six people, seated around a table that's laden with various dishes, drinks, and possibly shared plates that suggest a communal dining experience. The style of eating - with multiple dishes in the center of the table - might indicate they're enjoying tapas, mezze, or family-style dining, which are all popular formats that encourage sharing and interaction. I can observe that the diners are engaged in animated conversation, with some people gesturing expressively, others laughing, and everyone appearing relaxed and comfortable.\n\nThe restaurant's ambiance looks warm and welcoming, with what seems to be soft, atmospheric lighting that creates an intimate feel. The décor might feature modern elements - perhaps exposed brick, wooden tables, or industrial-style fixtures - which are characteristic of contemporary urban dining establishments. The overall aesthetic suggests this is the type of place that focuses not just on serving food, but on creating an experience.\n\nWhat's interesting to note is the diversity in the group - they appear to be people from different backgrounds coming together, which is one of the beautiful aspects of food culture: it brings people together across divides. Some diners might be taking photos of the food with their phones, which has become a ubiquitous part of the modern dining experience, especially in photogenic restaurants.\n\nThe food itself appears to be presented with care and attention to detail, suggesting this might be a place that takes its cuisine seriously. The fact that the group has ordered multiple dishes to share indicates they're planning to spend a considerable amount of time here, making it a social occasion rather than just a quick meal. This leisurely approach to dining, where the focus is on conversation and companionship as much as on the food, represents a dining philosophy that values quality time and meaningful social connections.",
      keyVocabulary: [
        "convivial dining scene",
        "trendy restaurant",
        "communal dining experience",
        "animated conversation",
        "warm and welcoming ambiance",
        "atmospheric lighting",
        "contemporary urban establishments",
        "food culture",
        "attention to detail",
        "meaningful social connections"
      ],
      usefulPhrases: [
        "This inviting photograph shows...",
        "The image perfectly encapsulates...",
        "The group consists of...",
        "I can observe that...",
        "The ambiance looks...",
        "What's interesting to note is...",
        "The fact that... indicates...",
        "This represents a philosophy that..."
      ],
      grammarPoints: [
        "Present Continuous: 'people are enjoying', 'diners are engaged'",
        "Present Perfect: 'has become ubiquitous', 'have ordered'",
        "Relative clauses: 'a place that focuses', 'dishes that suggest'",
        "Modal verbs: 'might indicate', 'could be', 'appears to be'"
      ],
      tips: "When describing dining scenes, discuss the food, the atmosphere, the social dynamics, and the cultural significance of the meal. Note details about table arrangements and eating styles."
    },
    {
      id: 8,
      title: "Public Transportation",
      category: "Urban Life & Commuting",
      imageUrl: "https://images.unsplash.com/photo-1530099486328-e021101a494a?w=800&h=600&fit=crop",
      description: "People commuting on public transport",
      sampleDescription: "This candid photograph offers a glimpse into the daily reality of urban commuting, showing a diverse group of passengers aboard what appears to be a subway train, bus, or other form of public transportation. The image is particularly interesting because it captures the varied ways people occupy their time during their daily commutes, revealing much about contemporary urban life.\n\nThe passengers visible in the frame represent a cross-section of city dwellers - there might be professionals in business attire heading to or from work, students with backpacks, and perhaps elderly residents going about their daily errands. What's immediately striking is how most people, if not all, seem to be absorbed in their own worlds, creating what sociologists call 'civil inattention' - a phenomenon where people in close proximity deliberately ignore each other to maintain a sense of privacy in public spaces.\n\nMany of the passengers appear to be looking at their smartphones, which has become the default activity during commutes. Some might be reading - whether physical books, e-readers, or news on their phones. A few people might have headphones or earbuds in, listening to music, podcasts, or audiobooks, creating personal sound bubbles that help them psychologically separate from the shared public space. The body language is typically reserved and closed-off, with people trying to minimize their physical presence in the crowded environment.\n\nThe interior of the vehicle looks functional rather than luxurious, which is typical of public transport systems worldwide. The lighting might be fluorescent, creating a somewhat harsh but practical illumination. Through the windows, if visible, there might be glimpses of the urban landscape passing by - buildings, streets, other vehicles.\n\nWhat this image really illustrates is the paradox of modern urban life: we're physically closer to more people than at any point in human history, yet we're often more isolated and disconnected. The commute, which many people find tedious or stressful, has become a kind of transitional space between home and work life. Some research suggests that how people use this time - whether for productivity, relaxation, or mindless scrolling - can significantly impact their overall well-being and job satisfaction.",
      keyVocabulary: [
        "daily reality",
        "urban commuting",
        "cross-section of city dwellers",
        "civil inattention",
        "absorbed in their own worlds",
        "personal sound bubbles",
        "reserved body language",
        "transitional space",
        "paradox of modern life",
        "overall well-being"
      ],
      usefulPhrases: [
        "This candid photograph offers...",
        "The image is particularly interesting because...",
        "What's immediately striking is...",
        "The body language is typically...",
        "What this image really illustrates is...",
        "Research suggests that...",
        "Has become the default...",
        "Creating what sociologists call..."
      ],
      grammarPoints: [
        "Present Continuous: 'people are looking', 'passengers are commuting'",
        "Present Perfect: 'has become the default', 'have created'",
        "Modal verbs: 'might be', 'could be', 'appears to be'",
        "Gerunds: 'using this time', 'commuting has become'"
      ],
      tips: "For public transport scenes, observe people's behaviors, discuss social phenomena, and reflect on modern urban life. Use sociological or psychological concepts if appropriate to show analytical depth."
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