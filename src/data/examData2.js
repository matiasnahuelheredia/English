// Examen 2: Enfocado en Ciberseguridad

export const examData2 = {
  sections: [
    {
      id: 'cybersecurity-narrative',
      title: 'CYBERSECURITY - NARRATIVE TENSES',
      instruction: 'Complete the sentences with the correct narrative tense (cybersecurity context)',
      exercises: [
        {
          id: 1,
          sentence: 'The hacker _______ (access) our database when the firewall suddenly blocked him.',
          correctAnswer: ['was accessing'],
          explanation: 'Usamos Past Continuous "was accessing" porque describe una acción en progreso (el acceso del hacker) que fue interrumpida por otra acción (el firewall lo bloqueó).'
        },
        {
          id: 2,
          sentence: 'The IT team _______ (monitor) the network for hours when they detected the breach.',
          correctAnswer: ['had been monitoring'],
          explanation: 'Usamos Past Perfect Continuous "had been monitoring" porque enfatiza la duración de una acción (monitoreo) que ocurrió antes de otra acción pasada (detectaron la brecha).'
        },
        {
          id: 3,
          sentence: 'The security analyst discovered the malware and immediately _______ (report) it to management.',
          correctAnswer: ['reported'],
          explanation: 'Usamos Past Simple "reported" porque son dos acciones secuenciales completadas en el pasado (descubrió... y reportó).'
        },
        {
          id: 4,
          sentence: "The system _______ (not respond) to commands because the ransomware had encrypted all files.",
          correctAnswer: ["wasn't responding", "was not responding"],
          explanation: 'Usamos Past Continuous negativo "wasn\'t responding" porque describe un estado en progreso en un momento específico del pasado, causado por una acción anterior (ransomware).'
        },
        {
          id: 5,
          sentence: "When we arrived at the office, the attackers _______ (steal) confidential data for over two hours.",
          correctAnswer: ['had been stealing'],
          explanation: 'Usamos Past Perfect Continuous "had been stealing" porque enfatiza la duración de una acción que ocurrió antes de otra acción pasada (llegamos).'
        },
        {
          id: 6,
          sentence: "The employees _______ (not know) about the phishing attack until the security team sent the warning email.",
          correctAnswer: ["didn't know", "did not know"],
          explanation: 'Usamos Past Simple negativo "didn\'t know" porque describe un estado que cambió en un momento específico del pasado (hasta que enviaron el email).'
        },
        {
          id: 7,
          sentence: 'Our team was frustrated because we _______ (try) to patch the vulnerability for weeks without success.',
          correctAnswer: ['had been trying'],
          explanation: 'Usamos Past Perfect Continuous "had been trying" porque enfatiza la duración de un esfuerzo continuo antes del momento de frustración.'
        },
        {
          id: 8,
          sentence: 'When I checked my email, I realized that I _______ (click) on a malicious link earlier.',
          correctAnswer: ['had clicked'],
          explanation: 'Usamos Past Perfect "had clicked" porque la acción de hacer clic ocurrió antes de darse cuenta (realized).'
        }
      ]
    },
    {
      id: 'cybersecurity-present-perfect',
      title: 'CYBERSECURITY - PRESENT PERFECT',
      instruction: 'Complete with Present Perfect Simple or Continuous (cybersecurity context)',
      exercises: [
        {
          id: 1,
          sentence: 'Our company _______ (use) two-factor authentication since the data breach last year.',
          correctAnswer: ['has been using', 'has used'],
          explanation: 'Ambas formas son aceptables. "Has been using" enfatiza la continuidad, mientras que "has used" enfatiza el resultado de implementar 2FA.'
        },
        {
          id: 2,
          sentence: 'How long _______ (the hackers / attack) our servers?',
          correctAnswer: ['have the hackers been attacking'],
          explanation: 'Usamos Present Perfect Continuous "have been attacking" porque pregunta por la duración de una acción que continúa o acaba de terminar.'
        },
        {
          id: 3,
          sentence: '_______ (you / ever / experience) a DDoS attack on your website?',
          correctAnswer: ['Have you ever experienced'],
          explanation: 'Usamos Present Perfect Simple "Have you ever experienced" porque pregunta sobre una experiencia de vida sin enfatizar duración.'
        },
        {
          id: 4,
          sentence: "The security team is exhausted because they _______ (investigate) the incident all night!",
          correctAnswer: ['have been investigating'],
          explanation: 'Usamos Present Perfect Continuous "have been investigating" porque enfatiza la actividad continua que causó el cansancio actual.'
        },
        {
          id: 5,
          sentence: 'How long _______ (this antivirus software / protect) your computer?',
          correctAnswer: ['has this antivirus software protected'],
          explanation: 'Usamos Present Perfect Simple "has protected" porque "protect" en este contexto es más un estado continuo que una acción temporal.'
        },
        {
          id: 6,
          sentence: "This is the third time this month we _______ (detect) malware on employee devices.",
          correctAnswer: ['have detected'],
          explanation: 'Usamos Present Perfect Simple "have detected" porque se usa con "This is the first/second/third time...".'
        },
        {
          id: 7,
          sentence: 'The firewall _______ (block) suspicious traffic constantly this week.',
          correctAnswer: ["hasn't blocked", "has not blocked", "hasn't been blocking", "has not been blocking"],
          explanation: 'Ambas formas son correctas. Simple enfatiza el resultado, Continuous enfatiza la falta de actividad continua.'
        },
        {
          id: 8,
          sentence: 'I _______ (never / see) such a sophisticated cyber attack before!',
          correctAnswer: ['have never seen'],
          explanation: 'Usamos Present Perfect Simple "have never seen" porque expresa una experiencia (o falta de ella) hasta el presente.'
        }
      ]
    },
    {
      id: 'cybersecurity-future',
      title: 'CYBERSECURITY - FUTURE FORMS',
      instruction: 'Choose the correct future form (cybersecurity context)',
      type: 'multiple-choice',
      exercises: [
        {
          id: 1,
          sentence: "This time next week, our team will install / will be installing the new security patches.",
          options: ["will install", "will be installing"],
          correctAnswer: "will be installing",
          explanation: 'Usamos Future Continuous "will be installing" porque describe una acción en progreso en un momento específico del futuro (this time next week).'
        },
        {
          id: 2,
          sentence: "By Friday, the IT department will have finished / will be finishing the security audit.",
          options: ['will have finished', 'will be finishing'],
          correctAnswer: 'will have finished',
          explanation: 'Usamos Future Perfect "will have finished" porque la acción estará completa antes de un tiempo específico (by Friday).'
        },
        {
          id: 3,
          sentence: "We won't have implemented / won't be implementing blockchain security until next year.",
          options: ["won't have implemented", "won't be implementing"],
          correctAnswer: "won't be implementing",
          explanation: 'Usamos Future Continuous negativo "won\'t be implementing" para expresar un plan futuro que no se realizará en ese período.'
        },
        {
          id: 4,
          sentence: "At 3pm tomorrow, the penetration testers will have tested / will be testing our network vulnerabilities.",
          options: ["will have tested", "will be testing"],
          correctAnswer: "will be testing",
          explanation: 'Usamos Future Continuous "will be testing" porque describe una acción en progreso a una hora específica del futuro (at 3pm).'
        },
        {
          id: 5,
          sentence: "I hope we will have patched / will be patching all critical vulnerabilities by the end of the month.",
          options: ["will have patched", "will be patching"],
          correctAnswer: "will have patched",
          explanation: 'Usamos Future Perfect "will have patched" porque expresa que la acción estará completa antes de un tiempo futuro específico.'
        },
        {
          id: 6,
          sentence: "Good luck with the security certification exam! I will be thinking / will have thought of you.",
          options: ["will be thinking", "will have thought"],
          correctAnswer: "will be thinking",
          explanation: 'Usamos Future Continuous "will be thinking" porque describe una acción que estará en progreso durante el evento futuro.'
        }
      ]
    },
    {
      id: 'cybersecurity-word-order',
      title: 'CYBERSECURITY - WORD ORDER',
      instruction: 'Put the words in the correct order (cybersecurity context)',
      type: 'reorder',
      exercises: [
        {
          id: 1,
          words: ['is', 'Our firewall', 'updated', 'automatically', 'always'],
          correctAnswer: 'Our firewall is always automatically updated',
          explanation: 'El adverbio de frecuencia "always" va después del verbo "be" (is). El adverbio de modo "automatically" va después del adverbio de frecuencia.'
        },
        {
          id: 2,
          words: ['we', 'had', 'backup', 'created', 'Fortunately', 'a'],
          correctAnswer: 'Fortunately we had created a backup',
          explanation: 'El adverbio de opinión "Fortunately" va al principio. Luego: sujeto + verbo en pasado perfecto + objeto.'
        },
        {
          id: 3,
          words: ['phishing emails', 'The employees', 'receive', 'rarely'],
          correctAnswer: 'The employees rarely receive phishing emails',
          explanation: 'El adverbio de frecuencia "rarely" va antes del verbo principal "receive".'
        },
        {
          id: 4,
          words: ['and', 'are', 'data', 'very', 'encrypted', 'Our', 'securely'],
          correctAnswer: 'Our data are very securely encrypted',
          explanation: '"Very" intensifica a "securely", y ambos modifican al participio "encrypted". Orden: sujeto + be + adverb + participio.'
        },
        {
          id: 5,
          words: ['next', 'Monday', "We're", 'implementing', 'zero-trust architecture'],
          correctAnswer: "We're implementing zero-trust architecture next Monday",
          explanation: 'La expresión temporal "next Monday" va al final. Orden: sujeto + verbo + objeto + tiempo.'
        },
        {
          id: 6,
          words: ['the', 'much', 'week', 'passwords', 'this', 'Surprisingly', "didn't", 'change', 'users'],
          correctAnswer: "Surprisingly the users didn't change passwords much this week",
          explanation: '"Surprisingly" va al principio. "Much" modifica al verbo "change", y "this week" va al final como expresión temporal.'
        }
      ]
    },
    {
      id: 'cybersecurity-adverbs',
      title: 'CYBERSECURITY - ADVERBS',
      instruction: 'Choose the correct adverb (cybersecurity context)',
      type: 'multiple-choice',
      exercises: [
        {
          id: 1,
          sentence: 'Have you ever / even tried using a password manager?',
          options: ['ever', 'even'],
          correctAnswer: 'ever',
          explanation: '"Ever" se usa en preguntas sobre experiencias. "Even" significa "incluso".'
        },
        {
          id: 2,
          sentence: 'This encryption software was especially / specially designed for government agencies.',
          options: ['especially', 'specially'],
          correctAnswer: 'specially',
          explanation: '"Specially" significa "específicamente para un propósito". "Especially" significa "particularmente".'
        },
        {
          id: 3,
          sentence: "The attack was so sophisticated that we could hard / hardly detect it in time.",
          options: ['hard', 'hardly'],
          correctAnswer: 'hardly',
          explanation: '"Hardly" significa "apenas, casi no". "Hard" significa "con esfuerzo".'
        },
        {
          id: 4,
          sentence: "It's been hours and the vulnerability scan yet / still hasn't finished.",
          options: ['yet', 'still'],
          correctAnswer: 'still',
          explanation: '"Still" se usa en oraciones negativas para expresar que algo continúa. "Yet" iría al final.'
        },
        {
          id: 5,
          sentence: 'The team disagreed at the end / in the end about the best security protocol, but they chose the strongest one.',
          options: ['at the end', 'in the end'],
          correctAnswer: 'in the end',
          explanation: '"In the end" significa "finalmente". "At the end" se refiere al final de algo específico.'
        },
        {
          id: 6,
          sentence: 'The hacker nearly / near breached our defenses but our IDS stopped the attack.',
          options: ['nearly', 'near'],
          correctAnswer: 'nearly',
          explanation: '"Nearly" significa "casi" (adverbio). "Near" significa "cerca" (preposición/adjetivo).'
        }
      ]
    },
    {
      id: 'cybersecurity-mixed',
      title: 'CYBERSECURITY - MIXED GRAMMAR',
      instruction: 'Choose the correct option (cybersecurity context)',
      type: 'multiple-choice',
      exercises: [
        {
          id: 1,
          sentence: 'The vulnerable / The vulnerable systems should be patched immediately.',
          options: ['The vulnerable', 'The vulnerable systems'],
          correctAnswer: 'The vulnerable',
          explanation: '"The + adjective" se usa para referirse a un grupo en general. "The vulnerable" = "los sistemas vulnerables en general".'
        },
        {
          id: 2,
          sentence: "Your network doesn't have a firewall, does / doesn't it?",
          options: ['does', "doesn't"],
          correctAnswer: 'does',
          explanation: 'En question tags, si la oración es negativa (doesn\'t have), el tag debe ser positivo (does it).'
        },
        {
          id: 3,
          sentence: "A: Our company implemented MFA last month.\nB: Did / Have they? That's excellent for security!",
          options: ['Did', 'Have'],
          correctAnswer: 'Did',
          explanation: 'Usamos "Did they?" para responder a un verbo en Past Simple (implemented).'
        },
        {
          id: 4,
          sentence: 'We had such serious / a serious security incident that the CEO held an emergency meeting.',
          options: ['such serious', 'a serious'],
          correctAnswer: 'such a serious',
          explanation: 'Con sustantivos contables singulares: "such + a/an + adjective + noun". Debería ser "such a serious incident".'
        },
        {
          id: 5,
          sentence: "By 5pm, the security team will have completed / will be completing the vulnerability assessment.",
          options: ["will have completed", "will be completing"],
          correctAnswer: "will have completed",
          explanation: 'Usamos Future Perfect "will have completed" con "by 5pm" para indicar que la acción estará completa antes de ese momento.'
        },
        {
          id: 6,
          sentence: 'The experienced / Experienced cybersecurity professionals are in high demand worldwide.',
          options: ['The experienced', 'Experienced'],
          correctAnswer: 'Experienced',
          explanation: 'Aquí "experienced" es un adjetivo normal que modifica a "professionals", no se usa "the + adjective" porque ya tenemos el sustantivo.'
        },
        {
          id: 7,
          sentence: "The hacker won't be caught easily. He's clever always / always clever.",
          options: ["clever always", "always clever"],
          correctAnswer: 'always clever',
          explanation: 'El adverbio de frecuencia "always" va antes del adjetivo "clever".'
        },
        {
          id: 8,
          sentence: "I don't trust cloud storage, and neither will / does my colleague.",
          options: ['will', 'does'],
          correctAnswer: 'does',
          explanation: 'Usamos "neither + does" porque la primera oración usa "don\'t" (presente simple).'
        },
        {
          id: 9,
          sentence: 'I did warn / warned you about that suspicious email. You should have listened!',
          options: ['did warn', 'warned'],
          correctAnswer: 'did warn',
          explanation: 'Usamos "did + infinitive" para enfatizar. "I did warn you" = "Sí te advertí" (énfasis).'
        },
        {
          id: 10,
          sentence: "I hate weak passwords, but my manager does / doesn't.",
          options: ['does', "doesn't"],
          correctAnswer: "doesn't",
          explanation: '"But" indica contraste. Si yo las odio, mi manager NO las odia. Usamos "doesn\'t" para el contraste.'
        }
      ]
    },
    {
      id: 'cybersecurity-vocabulary',
      title: 'CYBERSECURITY - VOCABULARY',
      instruction: 'Complete the cybersecurity terms. The first letter is given',
      type: 'fill-word',
      exercises: [
        {
          id: 1,
          sentence: "A f_______ is a security system that monitors and controls incoming and outgoing network traffic.",
          firstLetter: 'f',
          correctAnswer: 'firewall',
          explanation: '"Firewall" (cortafuegos) es un sistema de seguridad que filtra el tráfico de red según reglas predefinidas.'
        },
        {
          id: 2,
          sentence: 'M_______ is malicious software designed to damage or gain unauthorized access to computer systems.',
          firstLetter: 'm',
          correctAnswer: 'malware',
          explanation: '"Malware" (software malicioso) incluye virus, troyanos, ransomware, spyware, etc.'
        },
        {
          id: 3,
          sentence: 'P_______ is a cyber attack where criminals send fraudulent emails pretending to be from legitimate sources.',
          firstLetter: 'p',
          correctAnswer: 'phishing',
          explanation: '"Phishing" es un ataque donde los criminales intentan engañar a usuarios para robar información confidencial.'
        },
        {
          id: 4,
          sentence: "E_______ is the process of converting information into a coded format to prevent unauthorized access.",
          firstLetter: 'e',
          correctAnswer: 'encryption',
          explanation: '"Encryption" (cifrado) protege los datos convirtiéndolos en un formato ilegible sin la clave correcta.'
        },
        {
          id: 5,
          sentence: 'A v_______ is a weakness in a system that can be exploited by attackers.',
          firstLetter: 'v',
          correctAnswer: 'vulnerability',
          explanation: '"Vulnerability" (vulnerabilidad) es un fallo o debilidad en software, hardware o procesos que puede ser explotado.'
        },
        {
          id: 6,
          sentence: "R_______ is a type of malware that encrypts victim's files and demands payment for decryption.",
          firstLetter: 'r',
          correctAnswer: 'ransomware',
          explanation: '"Ransomware" secuestra datos mediante cifrado y exige un rescate (ransom) para liberarlos.'
        },
        {
          id: 7,
          sentence: 'A b_______ is a copy of data stored separately to protect against data loss.',
          firstLetter: 'b',
          correctAnswer: 'backup',
          explanation: '"Backup" (copia de seguridad) es fundamental para recuperarse de ataques, fallos o pérdida de datos.'
        },
        {
          id: 8,
          sentence: 'Two-factor a_______ adds an extra layer of security by requiring two forms of verification.',
          firstLetter: 'a',
          correctAnswer: 'authentication',
          explanation: '"Authentication" (autenticación) verifica la identidad. Two-factor authentication (2FA) requiere dos métodos de verificación.'
        }
      ]
    }
  ]
};

export const getExam2Sections = () => {
  return examData2.sections;
};

export const getExam2Section = (sectionId) => {
  return examData2.sections.find(section => section.id === sectionId);
};

export const getTotalExam2Exercises = () => {
  return examData2.sections.reduce((total, section) => total + section.exercises.length, 0);
};
