// Base de datos de ejercicios para cada tiempo verbal

// Función para mezclar arrays aleatoriamente
const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const exercisesData = {
  'present-perfect': [
    {
      sentenceParts: [
        { type: 'text', content: 'Have you ever' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'a SQL injection attack?' }
      ],
      options: ['performed', 'performed OR been performing', 'been performing'],
      correctAnswer: 'performed',
      explanation: 'Usamos "performed" (Present Perfect Simple) porque estamos preguntando sobre una experiencia en la vida sin importar cuándo ocurrió. No necesitamos la forma continua porque no enfatizamos la duración de la acción.'
    },
    {
      sentenceParts: [
        { type: 'text', content: "The security team's" },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'on this vulnerability since January.' }
      ],
      options: ['worked OR been working', 'been working', 'worked'],
      correctAnswer: 'worked OR been working',
      explanation: 'Ambas formas son correctas. "Has worked" enfatiza el resultado (siguen trabajando), mientras que "has been working" enfatiza la continuidad de la acción desde enero hasta ahora.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The firewall has' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'five attacks this morning!' }
      ],
      options: ['blocked', 'blocked OR been blocking', 'been blocking'],
      correctAnswer: 'blocked',
      explanation: 'Usamos "blocked" porque estamos contando acciones completas (cinco ataques). El Present Perfect Simple se usa para acciones repetidas y contables.'
    },
    {
      sentenceParts: [
        { type: 'text', content: "The hackers are frustrated because they've" },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'exploits all day without success.' }
      ],
      options: ['tried OR been trying', 'tried', 'been trying'],
      correctAnswer: 'been trying',
      explanation: 'Usamos "been trying" (Present Perfect Continuous) porque enfatizamos la actividad continua que causó la frustración. La duración de la acción es importante aquí.'
    },
    {
      sentenceParts: [
        { type: 'text', content: "The pentesters haven't" },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'the new security system yet.' }
      ],
      options: ['tested OR been testing', 'tested', 'been testing'],
      correctAnswer: 'tested',
      explanation: 'Usamos "tested" porque se trata de una acción puntual (probar el sistema). "Test" en este sentido no se usa normalmente en forma continua.'
    },
    {
      sentenceParts: [
        { type: 'text', content: "I've never" },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'a zero-day exploit. Have you?' }
      ],
      options: ['been discovering', 'discovered', 'discovered OR been discovering'],
      correctAnswer: 'discovered',
      explanation: 'Usamos "discovered" porque "discover" (encontrar por primera vez) es una acción puntual que no se usa en forma continua en este contexto.'
    },
    {
      sentenceParts: [
        { type: 'text', content: "The DDoS attack's" },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'since midnight.' }
      ],
      options: ['continued OR been continuing', 'been continuing', 'continued'],
      correctAnswer: 'been continuing',
      explanation: 'Usamos "been continuing" (Present Perfect Continuous) porque enfatizamos la actividad continua desde medianoche. La duración es importante aquí.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The ethical hacker has just' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: "to the security conference. He won't be back till next week." }
      ],
      options: ['been going', 'gone', 'gone OR been going'],
      correctAnswer: 'gone',
      explanation: 'Usamos "gone" porque fue a la conferencia y no está aquí ahora. "Gone" implica que la persona no está presente, mientras que "been" implicaría que ya regresó.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'Our sysadmin has' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'remotely since the pandemic.' }
      ],
      options: ['worked', 'been working', 'worked OR been working'],
      correctAnswer: 'worked OR been working',
      explanation: 'Ambas formas son correctas. "Has worked" enfatiza el estado/resultado (trabaja remotamente), mientras que "has been working" enfatiza la continuidad de la situación desde la pandemia.'
    },
    {
      sentenceParts: [
        { type: 'text', content: "I've" },
        { type: 'dropdown', content: '' },
        { type: 'text', content: "the network logs all morning. I'm at entry 15,000." }
      ],
      options: ['analyzed', 'analyzed OR been analyzing', 'been analyzing'],
      correctAnswer: 'been analyzing',
      explanation: 'Usamos "been analyzing" (Present Perfect Continuous) porque enfatizamos la actividad continua de analizar durante toda la mañana. Mencionamos el progreso (entrada 15,000) lo que indica duración.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'I' },
        { type: 'input', content: '' },
        { type: 'text', content: '(patch) the server. Can we go live now?' }
      ],
      correctAnswer: ['have patched'],
      explanation: 'Present Perfect Simple: have/has + past participle. Usamos "have patched" porque la acción acaba de completarse y el resultado es importante ahora (podemos publicar).'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The hacker' },
        { type: 'input', content: '' },
        { type: 'text', content: '(infiltrate) systems for five years.' }
      ],
      correctAnswer: ['has infiltrated', 'has been infiltrating'],
      explanation: 'Ambas formas son correctas. "Has infiltrated" o "has been infiltrating" porque la duración (cinco años) conecta el pasado con el presente.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'They' },
        { type: 'input', content: '' },
        { type: 'text', content: '(never/crack) a 256-bit encryption before.' }
      ],
      correctAnswer: ['have never cracked', "haven't cracked"],
      explanation: 'Present Perfect con "never": have/has + never + past participle. Hablamos de una experiencia en ciberseguridad hasta ahora.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'How long' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'you' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'as a pentester?' }
      ],
      options: ['have', 'has'],
      correctAnswer: 'have',
      explanation: 'Usamos "have" con "you" en Present Perfect para preguntar sobre la duración de una acción que comenzó en el pasado y continúa.'
    },
    {
      sentenceParts: [
        { type: 'text', content: "I've" },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'my root password. Have you seen it?' }
      ],
      options: ['lost', 'losed', 'been losing'],
      correctAnswer: 'lost',
      explanation: 'Usamos "lost" (Present Perfect Simple) para indicar que la contraseña está perdida ahora. El resultado presente es importante.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'They' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'in the same hacker collective for 10 years.' }
      ],
      options: ['have been', 'are', 'were'],
      correctAnswer: 'have been',
      explanation: 'Usamos "have been" porque la duración (10 años) conecta el pasado con el presente. Todavía están en el colectivo.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'He' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'three network scans this morning.' }
      ],
      options: ['has run', 'ran', 'has been running'],
      correctAnswer: 'has run',
      explanation: 'Usamos "has run" porque contamos acciones completas en un período que aún no ha terminado ("this morning").'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'We' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'each other since our first CTF competition.' }
      ],
      options: ['have known', 'know', 'knew'],
      correctAnswer: 'have known',
      explanation: 'Usamos "have known" con "since" para indicar que la acción comenzó en el pasado (primera competencia CTF) y continúa hasta ahora.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The team' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'any bug bounties recently.' }
      ],
      options: ["hasn't found", "didn't find", 'is not finding'],
      correctAnswer: "hasn't found",
      explanation: 'Usamos "hasn\'t found" con "recently" para hablar de un período reciente hasta el presente.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'How many systems' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'you' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'into?' }
      ],
      options: ['have', 'has'],
      correctAnswer: 'have',
      explanation: 'Preguntamos sobre experiencias en pentesting usando Present Perfect con "How many".'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The backup' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'already' },
        { type: 'dropdown', content: '' }
      ],
      options: ['has', 'have'],
      correctAnswer: 'has',
      explanation: 'Usamos "has" con tercera persona singular. "Already" se usa con Present Perfect para indicar que algo sucedió antes de lo esperado.'
    },
    {
      sentenceParts: [
        { type: 'text', content: "I've" },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'to DEF CON twice.' }
      ],
      options: ['been', 'gone', 'went'],
      correctAnswer: 'been',
      explanation: 'Usamos "been" (no "gone") porque regresamos de la conferencia. "Gone" implicaría que todavía estamos allí.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'Someone' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'all the user data!' }
      ],
      options: ['has stolen', 'stole', 'steals'],
      correctAnswer: 'has stolen',
      explanation: 'Usamos Present Perfect porque el resultado presente es visible (no hay datos) pero no sabemos exactamente cuándo pasó.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'My colleague' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'their own cybersecurity startup.' }
      ],
      options: ['has launched', 'launched', 'launches'],
      correctAnswer: 'has launched',
      explanation: 'Usamos Present Perfect para noticias recientes o logros cuando el tiempo exacto no es importante.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The botnet' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'requests for hours!' }
      ],
      options: ['has been sending', 'sent', 'sends'],
      correctAnswer: 'has been sending',
      explanation: 'Usamos Present Perfect Continuous con "for hours" para enfatizar la duración de una actividad que continúa.'
    },
    {
      sentenceParts: [
        { type: 'text', content: "You've" },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'incredible progress in your hacking skills!' }
      ],
      options: ['made', 'make', 'making'],
      correctAnswer: 'made',
      explanation: 'Usamos "made" en Present Perfect para hablar sobre un logro o cambio visible hasta ahora.'
    },
    {
      sentenceParts: [
        { type: 'text', content: "We've" },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'for a server response for 30 minutes.' }
      ],
      options: ['been waiting', 'waited', 'wait'],
      correctAnswer: 'been waiting',
      explanation: 'Usamos Present Perfect Continuous con "for 30 minutes" para enfatizar la duración de una acción que continúa.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The penetration tester has' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'multiple CSRF vulnerabilities in the web application.' }
      ],
      options: ['identified', 'been identifying', 'identified OR been identifying'],
      correctAnswer: 'identified',
      explanation: 'Present Perfect Simple para reportar hallazgos específicos durante el pentesting.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'Our team has' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'privilege escalation since morning.' }
      ],
      options: ['attempted', 'been attempting', 'attempted OR been attempting'],
      correctAnswer: 'been attempting',
      explanation: 'Present Perfect Continuous enfatiza la actividad continua de intentar escalar privilegios.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The vulnerability scanner has' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: '47 critical issues so far.' }
      ],
      options: ['detected', 'been detecting', 'detected OR been detecting'],
      correctAnswer: 'detected',
      explanation: 'Usamos Present Perfect Simple porque contamos hallazgos específicos hasta ahora.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'Have you' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'the credentials database yet?' }
      ],
      options: ['dumped', 'been dumping', 'dumped OR been dumping'],
      correctAnswer: 'dumped',
      explanation: 'Pregunta sobre una acción específica completada, típica en informes de pentesting.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The application has never' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'input validation properly.' }
      ],
      options: ['implemented', 'been implementing', 'implemented OR been implementing'],
      correctAnswer: 'implemented',
      explanation: 'Usamos Present Perfect para describir un problema persistente sin tiempo específico.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'We have' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'XSS payloads throughout the entire session.' }
      ],
      options: ['tested', 'been testing', 'tested OR been testing'],
      correctAnswer: 'been testing',
      explanation: 'Present Perfect Continuous enfatiza la actividad continua de testing durante la sesión.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The SIEM has' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'suspicious activities since 3 AM.' }
      ],
      options: ['logged', 'been logging', 'logged OR been logging'],
      correctAnswer: 'been logging',
      explanation: 'Actividad continua de registro desde un punto específico en el pasado.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'Has the WAF' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'any malicious requests today?' }
      ],
      options: ['blocked', 'been blocking', 'blocked OR been blocking'],
      correctAnswer: 'blocked',
      explanation: 'Pregunta sobre acciones específicas completadas en un período que continúa (today).'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The red team has' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'lateral movement across the network.' }
      ],
      options: ['achieved', 'been achieving', 'achieved OR been achieving'],
      correctAnswer: 'achieved',
      explanation: 'Logro específico en pentesting reportado con Present Perfect Simple.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'I have' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'Burp Suite for web application testing for years.' }
      ],
      options: ['used', 'been using', 'used OR been using'],
      correctAnswer: 'used OR been using',
      explanation: 'Ambas formas son correctas para describir experiencia con herramientas.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The IDS has' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: '15 intrusion attempts this week.' }
      ],
      options: ['detected', 'been detecting', 'detected OR been detecting'],
      correctAnswer: 'detected',
      explanation: 'Contamos eventos específicos en un período que aún continúa (this week).'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'Have you ever' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'a successful buffer overflow attack?' }
      ],
      options: ['executed', 'been executing', 'executed OR been executing'],
      correctAnswer: 'executed',
      explanation: 'Pregunta sobre experiencia en pentesting sin tiempo específico.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The authentication mechanism has' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'broken for the past three releases.' }
      ],
      options: ['been', 'been being', 'is'],
      correctAnswer: 'been',
      explanation: 'Estado continuo desde el pasado hasta ahora en el informe.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'Our findings have' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'that HTTPS is not properly enforced.' }
      ],
      options: ['shown', 'been showing', 'shown OR been showing'],
      correctAnswer: 'shown',
      explanation: 'Hallazgos específicos reportados con Present Perfect Simple.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The organization has not' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'multi-factor authentication yet.' }
      ],
      options: ['deployed', 'been deploying', 'deployed OR been deploying'],
      correctAnswer: 'deployed',
      explanation: 'Acción específica que no se ha completado, reportada con "yet".'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'How many endpoints have you' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'during this assessment?' }
      ],
      options: ['compromised', 'been compromising', 'compromised OR been compromising'],
      correctAnswer: 'compromised',
      explanation: 'Pregunta cuantitativa sobre resultados específicos del pentesting.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The API has' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'sensitive data without encryption.' }
      ],
      options: ['exposed', 'been exposing', 'exposed OR been exposing'],
      correctAnswer: 'been exposing',
      explanation: 'Actividad continua problemática identificada durante el assessment.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'We have' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'all recommended security patches successfully.' }
      ],
      options: ['applied', 'been applying', 'applied OR been applying'],
      correctAnswer: 'applied',
      explanation: 'Acción completada reportada en el informe de remediación.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The penetration test has' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'numerous SQL injection points.' }
      ],
      options: ['revealed', 'been revealing', 'revealed OR been revealing'],
      correctAnswer: 'revealed',
      explanation: 'Hallazgos revelados durante el test, uso típico en informes.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'Security headers have not' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'configured on the web server.' }
      ],
      options: ['been', 'been being', 'is'],
      correctAnswer: 'been',
      explanation: 'Estado negativo identificado en el assessment de seguridad.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The pentester has just' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'root access on the target system.' }
      ],
      options: ['gained', 'been gaining', 'gained OR been gaining'],
      correctAnswer: 'gained',
      explanation: 'Logro reciente específico en el pentesting con "just".'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'Session management has' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'vulnerable throughout the application.' }
      ],
      options: ['been', 'been being', 'is'],
      correctAnswer: 'been',
      explanation: 'Vulnerabilidad persistente identificada en todo el sistema.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'Have you' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'the scope of the penetration test?' }
      ],
      options: ['defined', 'been defining', 'defined OR been defining'],
      correctAnswer: 'defined',
      explanation: 'Pregunta sobre una tarea específica completada antes del test.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The client has' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'all critical findings from last year.' }
      ],
      options: ['remediated', 'been remediating', 'remediated OR been remediating'],
      correctAnswer: 'remediated',
      explanation: 'Acción completada de corrección de vulnerabilidades reportada.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'Nmap has' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: '23 open ports on the target.' }
      ],
      options: ['discovered', 'been discovering', 'discovered OR been discovering'],
      correctAnswer: 'discovered',
      explanation: 'Resultado específico de reconocimiento con herramienta.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The security team has' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'incident response procedures since the breach.' }
      ],
      options: ['improved', 'been improving', 'improved OR been improving'],
      correctAnswer: 'been improving',
      explanation: 'Proceso continuo de mejora desde un evento pasado.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'Default credentials have' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'found on multiple devices.' }
      ],
      options: ['been', 'been being', 'is'],
      correctAnswer: 'been',
      explanation: 'Hallazgo pasivo reportado en evaluación de seguridad.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'How long has the vulnerability' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'in production?' }
      ],
      options: ['existed', 'been existing', 'existed OR been existing'],
      correctAnswer: 'existed',
      explanation: 'Pregunta sobre duración de una vulnerabilidad en el sistema.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The exploit has' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'against the test environment successfully.' }
      ],
      options: ['worked', 'been working', 'worked OR been working'],
      correctAnswer: 'worked',
      explanation: 'Resultado exitoso de prueba de exploit reportado.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'Metasploit has' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'the most reliable framework for exploitation.' }
      ],
      options: ['proven', 'been proving', 'proven OR been proving'],
      correctAnswer: 'proven',
      explanation: 'Evaluación basada en experiencia acumulada con la herramienta.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The assessment has' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'weak password policies across the organization.' }
      ],
      options: ['uncovered', 'been uncovering', 'uncovered OR been uncovering'],
      correctAnswer: 'uncovered',
      explanation: 'Hallazgo específico descubierto durante la evaluación.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'We have never' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'such poor segmentation in a corporate network.' }
      ],
      options: ['seen', 'been seeing', 'seen OR been seeing'],
      correctAnswer: 'seen',
      explanation: 'Experiencia extrema reportada sin tiempo específico.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The target has' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'to our port scanning attempts.' }
      ],
      options: ['responded', 'been responding', 'responded OR been responding'],
      correctAnswer: 'responded',
      explanation: 'Acción específica del objetivo durante reconocimiento.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'Security awareness training has not' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'conducted for employees this year.' }
      ],
      options: ['been', 'been being', 'is'],
      correctAnswer: 'been',
      explanation: 'Falta de acción identificada en revisión de controles.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The vulnerability has' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'in the OWASP Top 10 for five years.' }
      ],
      options: ['been', 'been being', 'is'],
      correctAnswer: 'been',
      explanation: 'Estado continuo de una vulnerabilidad conocida.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'Attackers have' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'this technique since 2020.' }
      ],
      options: ['exploited', 'been exploiting', 'exploited OR been exploiting'],
      correctAnswer: 'been exploiting',
      explanation: 'Actividad continua de atacantes desde un punto en el pasado.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The report has' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: '12 high-severity findings.' }
      ],
      options: ['documented', 'been documenting', 'documented OR been documenting'],
      correctAnswer: 'documented',
      explanation: 'Acción completada de documentar hallazgos en el informe.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'CSRF tokens have not' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'implemented on critical forms.' }
      ],
      options: ['been', 'been being', 'is'],
      correctAnswer: 'been',
      explanation: 'Control de seguridad faltante identificado en el test.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The blue team has' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'our activities within 15 minutes.' }
      ],
      options: ['detected', 'been detecting', 'detected OR been detecting'],
      correctAnswer: 'detected',
      explanation: 'Capacidad de detección demostrada durante el ejercicio.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'We have' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'command injection in three different endpoints.' }
      ],
      options: ['confirmed', 'been confirming', 'confirmed OR been confirming'],
      correctAnswer: 'confirmed',
      explanation: 'Verificación específica de vulnerabilidad en múltiples puntos.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The engagement has' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'longer than expected due to scope changes.' }
      ],
      options: ['taken', 'been taking', 'taken OR been taking'],
      correctAnswer: 'taken',
      explanation: 'Duración del proyecto reportada con justificación.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'Rate limiting has never' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'on the authentication endpoint.' }
      ],
      options: ['existed', 'been existing', 'existed OR been existing'],
      correctAnswer: 'existed',
      explanation: 'Ausencia completa de control de seguridad reportada.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The security posture has' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'significantly since last assessment.' }
      ],
      options: ['improved', 'been improving', 'improved OR been improving'],
      correctAnswer: 'improved',
      explanation: 'Cambio positivo comparado con evaluación anterior.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'Sensitive data has' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'stored in plain text in the database.' }
      ],
      options: ['been', 'been being', 'is'],
      correctAnswer: 'been',
      explanation: 'Práctica insegura identificada en revisión de datos.'
    }
  ],
  
  'present-perfect-continuous': [
    {
      sentenceParts: [
        { type: 'text', content: 'I' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'ports for two hours.' }
      ],
      options: ['have been scanning', 'have scanned', 'am scanning'],
      correctAnswer: 'have been scanning',
      explanation: 'Usamos Present Perfect Continuous "have been scanning" para enfatizar la duración de una acción que comenzó en el pasado y continúa hasta ahora.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'She' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'Python for exploit development for five years.' }
      ],
      options: ['has been learning', 'has learned', 'is learning'],
      correctAnswer: 'has been learning',
      explanation: 'Usamos "has been learning" para enfatizar la actividad continua durante los cinco años.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'How long' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'you' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'on this exploit?' }
      ],
      options: ['have', 'has'],
      correctAnswer: 'have',
      explanation: 'Preguntamos con "How long have you been working" sobre la duración de trabajar en este exploit.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'They' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'password hashes all day.' }
      ],
      options: ['have been cracking', 'have cracked', 'are cracking'],
      correctAnswer: 'have been cracking',
      explanation: 'Usamos "have been cracking" para enfatizar la actividad continua durante todo el día.'
    },
    {
      sentenceParts: [
        { type: 'text', content: "My eyes hurt. I've" },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'network traffic for hours.' }
      ],
      options: ['been monitoring', 'monitored', 'monitoring'],
      correctAnswer: 'been monitoring',
      explanation: 'Usamos Present Perfect Continuous para explicar la causa de ojos cansados (actividad reciente continua).'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'He' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'bug bounty hunting regularly lately.' }
      ],
      options: ['has been doing', 'has done', 'does'],
      correctAnswer: 'has been doing',
      explanation: 'Usamos "has been doing" con "lately" para una actividad repetida en el período reciente.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'How long' },
        { type: 'input', content: '' },
        { type: 'text', content: '(you/wait) for the exploit to compile?' }
      ],
      correctAnswer: ['have you been waiting'],
      explanation: 'Present Perfect Continuous question: How long + have/has + subject + been + verb-ing. Preguntamos por la duración de una acción que continúa.'
    },
    {
      sentenceParts: [
        { type: 'text', content: "You're exhausted! What" },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'you' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: '?' }
      ],
      options: ['have', 'has'],
      correctAnswer: 'have',
      explanation: 'Preguntamos "What have you been debugging?" para entender la causa del cansancio (actividad reciente).'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'We' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'this penetration test for months.' }
      ],
      options: ['have been planning', 'have planned', 'are planning'],
      correctAnswer: 'have been planning',
      explanation: 'Usamos "have been planning" para enfatizar el proceso continuo de planificación durante meses.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The security alerts' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'all morning!' }
      ],
      options: ['have been triggering', 'have triggered', 'are triggering'],
      correctAnswer: 'have been triggering',
      explanation: 'Usamos "have been triggering" para enfatizar lo molesto de una acción repetida durante toda la mañana.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'I' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'to establish a reverse shell all week.' }
      ],
      options: ['have been trying', 'have tried', 'am trying'],
      correctAnswer: 'have been trying',
      explanation: 'Usamos "have been trying" para enfatizar los intentos repetidos durante toda la semana.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The red team has' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'enumeration techniques since the engagement started.' }
      ],
      options: ['been using', 'used', 'using'],
      correctAnswer: 'been using',
      explanation: 'Actividad continua desde el inicio del engagement hasta ahora.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'How long have you' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'brute-force attacks on the login page?' }
      ],
      options: ['been running', 'run', 'running'],
      correctAnswer: 'been running',
      explanation: 'Pregunta sobre duración de actividad continua de pentesting.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'Wireshark has' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'packets for the last 3 hours.' }
      ],
      options: ['been capturing', 'captured', 'capturing'],
      correctAnswer: 'been capturing',
      explanation: 'Proceso continuo de captura durante período específico.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The honeypot has' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'attacker behavior patterns all month.' }
      ],
      options: ['been recording', 'recorded', 'recording'],
      correctAnswer: 'been recording',
      explanation: 'Actividad continua de monitoreo durante todo el mes.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'We have' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'SQLMap against the database since morning.' }
      ],
      options: ['been running', 'run', 'running'],
      correctAnswer: 'been running',
      explanation: 'Ejecución continua de herramienta desde la mañana.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'What have you' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'with Metasploit for so long?' }
      ],
      options: ['been doing', 'done', 'doing'],
      correctAnswer: 'been doing',
      explanation: 'Pregunta sobre actividad continua reciente con herramienta.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The IDS has' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'false positives throughout the test.' }
      ],
      options: ['been generating', 'generated', 'generating'],
      correctAnswer: 'been generating',
      explanation: 'Problema continuo durante toda la duración del test.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'Attackers have' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'the network perimeter for days.' }
      ],
      options: ['been probing', 'probed', 'probing'],
      correctAnswer: 'been probing',
      explanation: 'Actividad maliciosa continua durante varios días.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The SOC team has' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'alerts 24/7 for weeks.' }
      ],
      options: ['been monitoring', 'monitored', 'monitoring'],
      correctAnswer: 'been monitoring',
      explanation: 'Monitoreo continuo ininterrumpido durante semanas.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'I have' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'this vulnerability research for months.' }
      ],
      options: ['been conducting', 'conducted', 'conducting'],
      correctAnswer: 'been conducting',
      explanation: 'Investigación continua durante período prolongado.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The payload has' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'in the background since deployment.' }
      ],
      options: ['been executing', 'executed', 'executing'],
      correctAnswer: 'been executing',
      explanation: 'Ejecución continua desde el momento del despliegue.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'How long has the backdoor' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'on the server?' }
      ],
      options: ['been running', 'run', 'running'],
      correctAnswer: 'been running',
      explanation: 'Pregunta sobre duración de compromiso del sistema.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'We have' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'different injection vectors all afternoon.' }
      ],
      options: ['been testing', 'tested', 'testing'],
      correctAnswer: 'been testing',
      explanation: 'Testing continuo durante toda la tarde.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The cryptominer has' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'CPU resources for weeks undetected.' }
      ],
      options: ['been consuming', 'consumed', 'consuming'],
      correctAnswer: 'been consuming',
      explanation: 'Actividad maliciosa continua sin detección.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'Security researchers have' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'this exploit chain since disclosure.' }
      ],
      options: ['been analyzing', 'analyzed', 'analyzing'],
      correctAnswer: 'been analyzing',
      explanation: 'Análisis continuo desde el momento de divulgación.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The C2 server has' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'commands to infected hosts continuously.' }
      ],
      options: ['been sending', 'sent', 'sending'],
      correctAnswer: 'been sending',
      explanation: 'Comunicación continua de comando y control.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'What techniques have they' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'for privilege escalation?' }
      ],
      options: ['been using', 'used', 'using'],
      correctAnswer: 'been using',
      explanation: 'Pregunta sobre técnicas empleadas durante el ataque.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The fuzzer has' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'inputs for hours without crash.' }
      ],
      options: ['been generating', 'generated', 'generating'],
      correctAnswer: 'been generating',
      explanation: 'Proceso continuo de fuzzing durante horas.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'Threat actors have' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'APT techniques increasingly.' }
      ],
      options: ['been adopting', 'adopted', 'adopting'],
      correctAnswer: 'been adopting',
      explanation: 'Tendencia continua observada en threat intelligence.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The vulnerability scanner has' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'the entire subnet since midnight.' }
      ],
      options: ['been scanning', 'scanned', 'scanning'],
      correctAnswer: 'been scanning',
      explanation: 'Escaneo continuo desde medianoche hasta ahora.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'I have' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'to reverse engineer this malware for days.' }
      ],
      options: ['been trying', 'tried', 'trying'],
      correctAnswer: 'been trying',
      explanation: 'Esfuerzo continuo de ingeniería inversa.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The EDR has' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'suspicious processes constantly.' }
      ],
      options: ['been detecting', 'detected', 'detecting'],
      correctAnswer: 'been detecting',
      explanation: 'Detección continua por sistema de endpoint.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'How long have you' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'hash cracking with Hashcat?' }
      ],
      options: ['been doing', 'done', 'doing'],
      correctAnswer: 'been doing',
      explanation: 'Pregunta sobre duración de actividad de crackeo.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The pentester has' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'Active Directory enumeration all day.' }
      ],
      options: ['been performing', 'performed', 'performing'],
      correctAnswer: 'been performing',
      explanation: 'Enumeración continua durante todo el día.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'Automated scanners have' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'our WAF since last week.' }
      ],
      options: ['been testing', 'tested', 'testing'],
      correctAnswer: 'been testing',
      explanation: 'Testing automatizado continuo desde la semana pasada.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The organization has' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'its security infrastructure gradually.' }
      ],
      options: ['been hardening', 'hardened', 'hardening'],
      correctAnswer: 'been hardening',
      explanation: 'Proceso continuo de endurecimiento de seguridad.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'Malicious actors have' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'phishing campaigns targeting employees.' }
      ],
      options: ['been launching', 'launched', 'launching'],
      correctAnswer: 'been launching',
      explanation: 'Campañas continuas de phishing en curso.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The security team has' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'threat hunting exercises regularly.' }
      ],
      options: ['been conducting', 'conducted', 'conducting'],
      correctAnswer: 'been conducting',
      explanation: 'Actividad regular continua de búsqueda de amenazas.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'What payloads have you' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'against the IDS?' }
      ],
      options: ['been deploying', 'deployed', 'deploying'],
      correctAnswer: 'been deploying',
      explanation: 'Pregunta sobre actividad continua de testing.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The malware has' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'laterally across the network.' }
      ],
      options: ['been spreading', 'spread', 'spreading'],
      correctAnswer: 'been spreading',
      explanation: 'Propagación continua de malware en la red.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'I have' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'source code for vulnerabilities for hours.' }
      ],
      options: ['been reviewing', 'reviewed', 'reviewing'],
      correctAnswer: 'been reviewing',
      explanation: 'Revisión continua de código fuente.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The target has' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'unusually since we started reconnaissance.' }
      ],
      options: ['been behaving', 'behaved', 'behaving'],
      correctAnswer: 'been behaving',
      explanation: 'Comportamiento continuo anómalo desde reconocimiento.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'Cybercriminals have' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'ransomware-as-a-service models.' }
      ],
      options: ['been developing', 'developed', 'developing'],
      correctAnswer: 'been developing',
      explanation: 'Desarrollo continuo de modelos de negocio criminal.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The SIEM has' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'correlation rules since the upgrade.' }
      ],
      options: ['been refining', 'refined', 'refining'],
      correctAnswer: 'been refining',
      explanation: 'Proceso continuo de refinamiento desde actualización.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'How long has the APT group' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'in our infrastructure?' }
      ],
      options: ['been operating', 'operated', 'operating'],
      correctAnswer: 'been operating',
      explanation: 'Pregunta sobre duración de presencia de APT.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'We have' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'OSINT techniques throughout the engagement.' }
      ],
      options: ['been applying', 'applied', 'applying'],
      correctAnswer: 'been applying',
      explanation: 'Aplicación continua de técnicas OSINT.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The botnet has' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'in size exponentially.' }
      ],
      options: ['been growing', 'grown', 'growing'],
      correctAnswer: 'been growing',
      explanation: 'Crecimiento continuo observado en análisis.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'Security vendors have' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'signatures for this threat.' }
      ],
      options: ['been updating', 'updated', 'updating'],
      correctAnswer: 'been updating',
      explanation: 'Actualización continua de firmas de amenazas.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The persistence mechanism has' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'across system reboots successfully.' }
      ],
      options: ['been surviving', 'survived', 'surviving'],
      correctAnswer: 'been surviving',
      explanation: 'Persistencia continua demostrada a través de reinicios.'
    }
  ],

  'past-continuous': [
    {
      sentenceParts: [
        { type: 'text', content: 'I' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'network traffic when the breach happened.' }
      ],
      options: ['was monitoring', 'monitored', 'monitor'],
      correctAnswer: 'was monitoring',
      explanation: 'Usamos Past Continuous "was monitoring" para una acción en progreso interrumpida por otra acción en el pasado.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'They' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'a penetration test at 3 PM yesterday.' }
      ],
      options: ['were conducting', 'conducted', 'conduct'],
      correctAnswer: 'were conducting',
      explanation: 'Usamos "were conducting" para describir una acción que estaba en progreso a una hora específica del pasado.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'What' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'you' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'in the dark web at midnight?' }
      ],
      options: ['were', 'was'],
      correctAnswer: 'were',
      explanation: 'Preguntamos "What were you doing" sobre una acción en progreso en un momento específico del pasado.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The DDoS attack' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'when we shut down the server.' }
      ],
      options: ['was happening', 'happened', 'happens'],
      correctAnswer: 'was happening',
      explanation: 'Usamos "was happening" para describir un ataque que estaba en progreso cuando ocurrió otra acción.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'She' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'the exploit while I' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'the payload.' }
      ],
      options: ['was testing', 'tested'],
      correctAnswer: 'was testing',
      explanation: 'Usamos Past Continuous para dos acciones simultáneas en progreso en el pasado.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'We' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'a vulnerability scan when the power went out.' }
      ],
      options: ['were running', 'ran', 'run'],
      correctAnswer: 'were running',
      explanation: 'Usamos "were watching" para una acción en progreso que fue interrumpida (apagón).'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'He' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'to music all afternoon.' }
      ],
      options: ['was listening', 'listened', 'listens'],
      correctAnswer: 'was listening',
      explanation: 'Usamos "was listening" para una actividad continua durante un período específico del pasado.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'At 8 PM yesterday, we' },
        { type: 'input', content: '' },
        { type: 'text', content: '(have) dinner with friends.' }
      ],
      correctAnswer: ['were having'],
      explanation: 'Past Continuous: was/were + verb-ing. Usamos "were having" para describir una acción en progreso a una hora específica del pasado.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'What' },
        { type: 'input', content: '' },
        { type: 'text', content: '(you/do) when I called you?' }
      ],
      correctAnswer: ['were you doing'],
      explanation: 'Past Continuous question: What + was/were + subject + verb-ing. Preguntamos sobre una acción en progreso cuando ocurrió otra (la llamada).'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The children' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'in the park this morning.' }
      ],
      options: ['were playing', 'played', 'play'],
      correctAnswer: 'were playing',
      explanation: 'Usamos "were playing" para describir una actividad en progreso durante la mañana.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'I' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'about you just now!' }
      ],
      options: ['was thinking', 'thought', 'think'],
      correctAnswer: 'was thinking',
      explanation: 'Usamos "was thinking" para una actividad mental que estaba en progreso justo antes de ahora.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'They' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'to the radio when I arrived.' }
      ],
      options: ['were listening', 'listened', 'listen'],
      correctAnswer: 'were listening',
      explanation: 'Usamos "were listening" para una acción en progreso cuando llegué (otra acción).'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The security analyst' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'logs when the alert triggered.' }
      ],
      options: ['was reviewing', 'reviewed', 'reviews'],
      correctAnswer: 'was reviewing',
      explanation: 'Acción en progreso interrumpida por la alerta en informe.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'At 2 AM, the attacker' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'credentials from memory.' }
      ],
      options: ['was extracting', 'extracted', 'extracts'],
      correctAnswer: 'was extracting',
      explanation: 'Actividad en progreso en momento específico del ataque.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'What' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'the firewall doing at the time of breach?' }
      ],
      options: ['was', 'were', 'is'],
      correctAnswer: 'was',
      explanation: 'Pregunta sobre estado del firewall durante incidente.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'While we' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'the perimeter, they discovered the backdoor.' }
      ],
      options: ['were testing', 'tested', 'test'],
      correctAnswer: 'were testing',
      explanation: 'Dos acciones simultáneas durante pentesting.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The IDS' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'when we performed the attack.' }
      ],
      options: ['was sleeping', 'slept', 'sleeps'],
      correctAnswer: 'was sleeping',
      explanation: 'Estado del IDS durante ejecución del ataque.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'At midnight, the malware' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'files silently.' }
      ],
      options: ['was encrypting', 'encrypted', 'encrypts'],
      correctAnswer: 'was encrypting',
      explanation: 'Actividad de ransomware en progreso en momento específico.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The SOC team' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'the incident when I called.' }
      ],
      options: ['was investigating', 'investigated', 'investigates'],
      correctAnswer: 'was investigating',
      explanation: 'Investigación en progreso interrumpida por llamada.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'While the backup' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'running, the system crashed.' }
      ],
      options: ['was', 'were', 'is'],
      correctAnswer: 'was',
      explanation: 'Proceso en ejecución cuando ocurrió el fallo.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'What commands' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'the attacker executing at 3 PM?' }
      ],
      options: ['was', 'were', 'is'],
      correctAnswer: 'was',
      explanation: 'Pregunta sobre actividad específica del atacante.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The proxy logs show users' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'malicious sites yesterday.' }
      ],
      options: ['were visiting', 'visited', 'visit'],
      correctAnswer: 'were visiting',
      explanation: 'Actividad en progreso detectada en logs.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'During the assessment, we' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'lateral movement techniques.' }
      ],
      options: ['were employing', 'employed', 'employ'],
      correctAnswer: 'were employing',
      explanation: 'Técnicas en uso durante la evaluación.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The database' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'when the SQL injection occurred.' }
      ],
      options: ['was responding', 'responded', 'responds'],
      correctAnswer: 'was responding',
      explanation: 'Estado de la base de datos durante el ataque.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'At the time of compromise, administrators' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'the patch.' }
      ],
      options: ['were deploying', 'deployed', 'deploy'],
      correctAnswer: 'were deploying',
      explanation: 'Acción en progreso durante el compromiso.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The pentester' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'Nmap when the target went offline.' }
      ],
      options: ['was running', 'ran', 'runs'],
      correctAnswer: 'was running',
      explanation: 'Escaneo en progreso interrumpido por caída del objetivo.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'While authentication' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'failing, attackers gained access.' }
      ],
      options: ['was', 'were', 'is'],
      correctAnswer: 'was',
      explanation: 'Contexto del fallo durante explotación.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'What' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'the endpoint protection doing during infection?' }
      ],
      options: ['was', 'were', 'is'],
      correctAnswer: 'was',
      explanation: 'Pregunta sobre estado de protección durante incidente.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The red team' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'Active Directory when blue team detected them.' }
      ],
      options: ['was enumerating', 'enumerated', 'enumerates'],
      correctAnswer: 'was enumerating',
      explanation: 'Enumeración en progreso cuando fueron detectados.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'Network traffic' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'suspiciously high at 4 AM.' }
      ],
      options: ['was running', 'ran', 'runs'],
      correctAnswer: 'was running',
      explanation: 'Tráfico anómalo en momento específico reportado.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'While I' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'the report, new vulnerabilities emerged.' }
      ],
      options: ['was writing', 'wrote', 'write'],
      correctAnswer: 'was writing',
      explanation: 'Redacción en progreso cuando surgieron hallazgos.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The C2 server' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'instructions when we blocked it.' }
      ],
      options: ['was sending', 'sent', 'sends'],
      correctAnswer: 'was sending',
      explanation: 'Comunicación en progreso al momento del bloqueo.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'At 5 PM yesterday, the team' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'privilege escalation vectors.' }
      ],
      options: ['was researching', 'researched', 'researches'],
      correctAnswer: 'was researching',
      explanation: 'Investigación en curso en momento específico.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The exploit' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'when antivirus caught it.' }
      ],
      options: ['was executing', 'executed', 'executes'],
      correctAnswer: 'was executing',
      explanation: 'Ejecución interrumpida por detección de AV.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'What tools' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'you using during reconnaissance?' }
      ],
      options: ['were', 'was', 'are'],
      correctAnswer: 'were',
      explanation: 'Pregunta sobre herramientas en uso durante fase.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The victim' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'credentials when phishing link was clicked.' }
      ],
      options: ['was entering', 'entered', 'enters'],
      correctAnswer: 'was entering',
      explanation: 'Acción de víctima en progreso durante ataque.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'While defenders' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'focused on one attack, another began.' }
      ],
      options: ['were', 'was', 'are'],
      correctAnswer: 'were',
      explanation: 'Distracción durante ataque multi-vector.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The fuzzer' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'when it found the crash.' }
      ],
      options: ['was running', 'ran', 'runs'],
      correctAnswer: 'was running',
      explanation: 'Fuzzing en progreso cuando se encontró vulnerabilidad.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'At the moment of breach, logging' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'disabled.' }
      ],
      options: ['was', 'were', 'is'],
      correctAnswer: 'was',
      explanation: 'Estado crítico de logging durante incidente.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The administrator' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'when the ransomware struck.' }
      ],
      options: ['was sleeping', 'slept', 'sleeps'],
      correctAnswer: 'was sleeping',
      explanation: 'Momento del ataque durante horario no laboral.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'Data' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'exfiltrating slowly over weeks.' }
      ],
      options: ['was', 'were', 'is'],
      correctAnswer: 'was',
      explanation: 'Exfiltración continua durante período extendido.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'What' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'the EDR reporting at time of infection?' }
      ],
      options: ['was', 'were', 'is'],
      correctAnswer: 'was',
      explanation: 'Pregunta sobre telemetría durante compromiso.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The payload' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'obfuscation techniques when analyzed.' }
      ],
      options: ['was using', 'used', 'uses'],
      correctAnswer: 'was using',
      explanation: 'Técnica en uso descubierta durante análisis.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'While CVE details' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'being published, exploitation began.' }
      ],
      options: ['were', 'was', 'are'],
      correctAnswer: 'were',
      explanation: 'Explotación iniciada durante divulgación.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The honeypot' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'attacks when researchers checked it.' }
      ],
      options: ['was logging', 'logged', 'logs'],
      correctAnswer: 'was logging',
      explanation: 'Registro activo durante revisión de honeypot.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'At that time, the organization' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'their incident response plan.' }
      ],
      options: ['was updating', 'updated', 'updates'],
      correctAnswer: 'was updating',
      explanation: 'Actualización en progreso en momento relevante.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The malware' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'for C2 connection when firewall blocked it.' }
      ],
      options: ['was attempting', 'attempted', 'attempts'],
      correctAnswer: 'was attempting',
      explanation: 'Intento en progreso interrumpido por firewall.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'What indicators' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'showing up during the attack?' }
      ],
      options: ['were', 'was', 'are'],
      correctAnswer: 'were',
      explanation: 'Pregunta sobre IOCs presentes durante incidente.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'Threat intelligence feeds' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'this campaign when we saw it.' }
      ],
      options: ['were tracking', 'tracked', 'track'],
      correctAnswer: 'were tracking',
      explanation: 'Seguimiento en curso de campaña maliciosa.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The vulnerability' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'actively when patch released.' }
      ],
      options: ['was being exploited', 'exploited', 'exploits'],
      correctAnswer: 'was being exploited',
      explanation: 'Explotación activa en momento de parche.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'During the purple team exercise, both sides' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'effectively.' }
      ],
      options: ['were communicating', 'communicated', 'communicate'],
      correctAnswer: 'were communicating',
      explanation: 'Comunicación en progreso durante ejercicio.'
    }
  ],

  'past-perfect': [
    {
      sentenceParts: [
        { type: 'text', content: 'By the time I arrived, they' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'already' },
        { type: 'dropdown', content: '' }
      ],
      options: ['had', 'have'],
      correctAnswer: 'had',
      explanation: 'Usamos Past Perfect "had left" para una acción que ocurrió antes de otra acción en el pasado (antes de que yo llegara).'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'She' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'never' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'sushi before she visited Japan.' }
      ],
      options: ['had', 'has'],
      correctAnswer: 'had',
      explanation: 'Usamos "had never tried" para una experiencia (o falta de ella) antes de un momento específico del pasado.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'I' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'just' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'when you called.' }
      ],
      options: ['had', 'have'],
      correctAnswer: 'had',
      explanation: 'Usamos "had just finished" para una acción recién completada antes de otra acción en el pasado.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'They' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'for hours before they found the place.' }
      ],
      options: ['had been driving', 'had driven', 'drove'],
      correctAnswer: 'had been driving',
      explanation: 'Usamos Past Perfect Continuous para enfatizar la duración de una acción antes de encontrar el lugar.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'He was tired because he' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'well.' }
      ],
      options: ["hadn't slept", "didn't sleep", "hasn't slept"],
      correctAnswer: "hadn't slept",
      explanation: 'Usamos "hadn\'t slept" para explicar la causa (en el pasado) de estar cansado.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'We' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'the movie before, so we watched it again.' }
      ],
      options: ['had seen', 'saw', 'have seen'],
      correctAnswer: 'had seen',
      explanation: 'Usamos "had seen" para una experiencia que ocurrió antes de verla de nuevo.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'When I got home, I realized I' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'my keys at work.' }
      ],
      options: ['had left', 'left', 'have left'],
      correctAnswer: 'had left',
      explanation: 'Usamos "had left" porque dejar las llaves ocurrió antes de llegar a casa y darme cuenta.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'She' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'English before she moved to London.' }
      ],
      options: ['had studied', 'studied', 'has studied'],
      correctAnswer: 'had studied',
      explanation: 'Usamos "had studied" para una acción (estudiar) que ocurrió antes de otra acción (mudarse).'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The train' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'already' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'when we arrived at the station.' }
      ],
      options: ['had', 'has'],
      correctAnswer: 'had',
      explanation: 'Usamos "had already left" porque el tren se fue antes de que llegáramos.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'I' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'my homework before I went out.' }
      ],
      options: ['had finished', 'finished', 'have finished'],
      correctAnswer: 'had finished',
      explanation: 'Usamos "had finished" porque terminar la tarea ocurrió antes de salir.'
    }
  ],

  'past-perfect-continuous': [
    {
      sentenceParts: [
        { type: 'text', content: 'I' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'for an hour when she finally arrived.' }
      ],
      options: ['had been waiting', 'had waited', 'was waiting'],
      correctAnswer: 'had been waiting',
      explanation: 'Usamos Past Perfect Continuous para enfatizar la duración de esperar antes de que ella llegara.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'They' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'for 5 years before they got married.' }
      ],
      options: ['had been dating', 'had dated', 'were dating'],
      correctAnswer: 'had been dating',
      explanation: 'Usamos "had been dating" para enfatizar la duración de 5 años antes del matrimonio.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'She was exhausted because she' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'all night.' }
      ],
      options: ['had been studying', 'had studied', 'was studying'],
      correctAnswer: 'had been studying',
      explanation: 'Usamos "had been studying" para explicar la causa del cansancio (actividad continua antes).'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'How long' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'you' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'English before you moved here?' }
      ],
      options: ['had', 'have'],
      correctAnswer: 'had',
      explanation: 'Preguntamos sobre la duración de estudiar inglés antes de mudarse (Past Perfect Continuous).'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'He' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'for hours when it finally stopped.' }
      ],
      options: ['had been raining', 'had rained', 'was raining'],
      correctAnswer: 'had been raining',
      explanation: 'Usamos "had been raining" para enfatizar la duración de lluvia antes de que parara.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'We' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'there for months before we found out.' }
      ],
      options: ['had been living', 'had lived', 'were living'],
      correctAnswer: 'had been living',
      explanation: 'Usamos "had been living" para enfatizar la duración de vivir allí antes del descubrimiento.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'My legs ached because I' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'all day.' }
      ],
      options: ['had been walking', 'had walked', 'was walking'],
      correctAnswer: 'had been walking',
      explanation: 'Usamos "had been walking" para explicar la causa del dolor (caminar todo el día antes).'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'They' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'for the test for weeks.' }
      ],
      options: ['had been preparing', 'had prepared', 'were preparing'],
      correctAnswer: 'had been preparing',
      explanation: 'Usamos "had been preparing" para enfatizar el proceso continuo de preparación durante semanas.'
    }
  ],

  'future-perfect-continuous': [
    {
      sentenceParts: [
        { type: 'text', content: 'By next year, I' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'here for 10 years.' }
      ],
      options: ['will have been working', 'will have worked', 'will be working'],
      correctAnswer: 'will have been working',
      explanation: 'Usamos Future Perfect Continuous para enfatizar la duración (10 años) que se completará en el futuro.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'By the time you arrive, I' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'for 3 hours.' }
      ],
      options: ['will have been waiting', 'will have waited', 'will be waiting'],
      correctAnswer: 'will have been waiting',
      explanation: 'Usamos "will have been waiting" para enfatizar la duración de espera cuando llegues.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'She' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'English for 5 years by December.' }
      ],
      options: ['will have been studying', 'will have studied', 'will be studying'],
      correctAnswer: 'will have been studying',
      explanation: 'Usamos "will have been studying" para enfatizar la duración continua hasta diciembre.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'They' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'for 20 years next month.' }
      ],
      options: ['will have been married', 'will have married', 'will be married'],
      correctAnswer: 'will have been married',
      explanation: 'Usamos "will have been married" para un período de 20 años que se completará el próximo mes.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'By 6 PM, we' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'for 8 hours straight.' }
      ],
      options: ['will have been working', 'will have worked', 'will be working'],
      correctAnswer: 'will have been working',
      explanation: 'Usamos "will have been working" para enfatizar 8 horas continuas de trabajo hasta las 6 PM.'
    }
  ],

  'future-simple': [
    {
      sentenceParts: [
        { type: 'text', content: 'She' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'English every day.' }
      ],
      options: ['studies', 'study', 'studying'],
      correctAnswer: 'studies',
      explanation: 'Usamos "studies" porque es tercera persona singular (she) y el Present Simple requiere añadir -es/-s al verbo. Describe una rutina habitual.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'They' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'in New York.' }
      ],
      options: ['lives', 'live', 'living'],
      correctAnswer: 'live',
      explanation: 'Usamos "live" porque "they" es plural y en Present Simple no se añade -s. Describe un estado permanente.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'Water' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'at 100 degrees Celsius.' }
      ],
      options: ['boil', 'boils', 'boiling'],
      correctAnswer: 'boils',
      explanation: 'Usamos "boils" porque "water" es tercera persona singular y describe una verdad universal o hecho científico.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'I' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'coffee in the morning.' }
      ],
      options: ['drinks', 'drink', 'drinking'],
      correctAnswer: 'drink',
      explanation: 'Usamos "drink" porque "I" no requiere -s en Present Simple. Describe un hábito regular.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'He usually' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'to work by bus.' }
      ],
      options: ['go', 'goes', 'going'],
      correctAnswer: 'goes',
      explanation: 'Usamos "goes" porque "he" es tercera persona singular. "Usually" indica una acción habitual, típica del Present Simple.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The sun' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'in the east.' }
      ],
      options: ['rise', 'rises', 'rising'],
      correctAnswer: 'rises',
      explanation: 'Usamos "rises" porque es una verdad universal. "The sun" es tercera persona singular.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'My parents' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'in the countryside.' }
      ],
      options: ['lives', 'live', 'living'],
      correctAnswer: 'live',
      explanation: 'Usamos "live" porque "my parents" es plural y describe un estado permanente.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The store' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'at 9 AM every day.' }
      ],
      options: ['open', 'opens', 'opening'],
      correctAnswer: 'opens',
      explanation: 'Usamos "opens" porque "the store" es tercera persona singular y describe un horario regular.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'Dogs' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'bones.' }
      ],
      options: ['like', 'likes', 'liking'],
      correctAnswer: 'like',
      explanation: 'Usamos "like" porque "dogs" es plural. Describe una verdad general sobre los perros.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'My sister' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'as a doctor.' }
      ],
      options: ['work', 'works', 'working'],
      correctAnswer: 'works',
      explanation: 'Usamos "works" porque "my sister" es tercera persona singular y describe su profesión permanente.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'We' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'pizza on Fridays.' }
      ],
      options: ['eat', 'eats', 'eating'],
      correctAnswer: 'eat',
      explanation: 'Usamos "eat" porque "we" es primera persona plural. Describe una rutina semanal.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The Earth' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'around the Sun.' }
      ],
      options: ['revolve', 'revolves', 'revolving'],
      correctAnswer: 'revolves',
      explanation: 'Usamos "revolves" porque es un hecho científico y "the Earth" es tercera persona singular.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'Children' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'toys.' }
      ],
      options: ['love', 'loves', 'loving'],
      correctAnswer: 'love',
      explanation: 'Usamos "love" porque "children" es plural. Describe una característica general de los niños.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'My cat' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'a lot.' }
      ],
      options: ['sleep', 'sleeps', 'sleeping'],
      correctAnswer: 'sleeps',
      explanation: 'Usamos "sleeps" porque "my cat" es tercera persona singular. Describe un hábito del gato.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'I always' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'my teeth before bed.' }
      ],
      options: ['brush', 'brushes', 'brushing'],
      correctAnswer: 'brush',
      explanation: 'Usamos "brush" con "I" en Present Simple. "Always" indica un hábito regular.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'She never' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'sugar in her tea.' }
      ],
      options: ['put', 'puts', 'putting'],
      correctAnswer: 'puts',
      explanation: 'Usamos "puts" porque "she" es tercera persona singular. "Never" se usa con Present Simple para hábitos.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The movie' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'at 8 PM tonight.' }
      ],
      options: ['start', 'starts', 'starting'],
      correctAnswer: 'starts',
      explanation: 'Usamos Present Simple "starts" para horarios fijos programados, incluso cuando hablan del futuro.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'My friends' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'soccer every weekend.' }
      ],
      options: ['play', 'plays', 'playing'],
      correctAnswer: 'play',
      explanation: 'Usamos "play" porque "my friends" es plural. "Every weekend" indica una rutina regular.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'It often' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'in winter here.' }
      ],
      options: ['snow', 'snows', 'snowing'],
      correctAnswer: 'snows',
      explanation: 'Usamos "snows" porque "it" es tercera persona singular. "Often" se usa con Present Simple para frecuencia.'
    }
  ],
  
  'present-continuous': [
    {
      sentenceParts: [
        { type: 'text', content: 'I' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'TV right now.' }
      ],
      options: ['am watching', 'watch', 'watches'],
      correctAnswer: 'am watching',
      explanation: 'Usamos "am watching" (Present Continuous) porque "right now" indica una acción que está ocurriendo en este momento.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'They' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'dinner at the moment.' }
      ],
      options: ['are cooking', 'cook', 'cooks'],
      correctAnswer: 'are cooking',
      explanation: 'Usamos "are cooking" porque "at the moment" indica que la acción está en progreso ahora mismo.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'She' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'for her exam these days.' }
      ],
      options: ['is studying', 'studies', 'study'],
      correctAnswer: 'is studying',
      explanation: 'Usamos "is studying" porque "these days" indica una acción temporal que está ocurriendo en el período actual.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'Look! It' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'outside.' }
      ],
      options: ['is raining', 'rains', 'rain'],
      correctAnswer: 'is raining',
      explanation: 'Usamos "is raining" porque "Look!" indica que la acción está ocurriendo ahora y queremos que alguien la observe.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'We' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'on a new project this month.' }
      ],
      options: ['are working', 'work', 'works'],
      correctAnswer: 'are working',
      explanation: 'Usamos "are working" porque "this month" indica una acción temporal en progreso durante este período.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'Right now, I' },
        { type: 'input', content: '' },
        { type: 'text', content: '(study) for my English test.' }
      ],
      correctAnswer: ['am studying', "'m studying"],
      explanation: 'Present Continuous: am/is/are + verb-ing. Usamos "am studying" porque "right now" indica una acción en progreso en este momento exacto.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'They' },
        { type: 'input', content: '' },
        { type: 'text', content: '(not/listen) to the teacher right now.' }
      ],
      correctAnswer: ['are not listening', "aren't listening", 'are not listening'],
      explanation: 'Present Continuous negativo: am/is/are + not + verb-ing. La acción está ocurriendo (o no está ocurriendo) en este momento.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'What' },
        { type: 'input', content: '' },
        { type: 'text', content: '(you/do) this weekend?' }
      ],
      correctAnswer: ['are you doing', "'re you doing"],
      explanation: 'Present Continuous para planes futuros: What + am/is/are + subject + verb-ing. Preguntamos por planes ya organizados.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'Be quiet! The baby' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: '.' }
      ],
      options: ['is sleeping', 'sleeps', 'sleep'],
      correctAnswer: 'is sleeping',
      explanation: 'Usamos "is sleeping" porque la acción está ocurriendo en este momento y pedimos silencio por esa razón.'
    },
    {
      sentenceParts: [
        { type: 'text', content: "I can't talk now. I" },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'a shower.' }
      ],
      options: ['am taking', 'take', 'takes'],
      correctAnswer: 'am taking',
      explanation: 'Usamos "am taking" porque la acción está en progreso en este momento específico.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'My friends' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'me tomorrow.' }
      ],
      options: ['are visiting', 'visit', 'visits'],
      correctAnswer: 'are visiting',
      explanation: 'Usamos Present Continuous para planes futuros ya confirmados con "tomorrow".'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'Why' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'you' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: '?' }
      ],
      options: ['are', 'is'],
      correctAnswer: 'are',
      explanation: 'Usamos "are" con "you" en Present Continuous para preguntar sobre una acción en progreso ahora.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The children' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'in the garden now.' }
      ],
      options: ['are playing', 'play', 'plays'],
      correctAnswer: 'are playing',
      explanation: 'Usamos "are playing" porque "now" indica que la acción está ocurriendo en este momento.'
    },
    {
      sentenceParts: [
        { type: 'text', content: "He's always" },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'his phone!' }
      ],
      options: ['checking', 'check', 'checks'],
      correctAnswer: 'checking',
      explanation: 'Usamos Present Continuous con "always" para expresar una queja sobre un hábito molesto.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The temperature' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'rapidly.' }
      ],
      options: ['is rising', 'rises', 'rise'],
      correctAnswer: 'is rising',
      explanation: 'Usamos "is rising" para describir un cambio que está ocurriendo en este período.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'We' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'to Italy this summer.' }
      ],
      options: ['are traveling', 'travel', 'travels'],
      correctAnswer: 'are traveling',
      explanation: 'Usamos Present Continuous para planes de futuro ya organizados con "this summer".'
    },
    {
      sentenceParts: [
        { type: 'text', content: "Listen! Someone" },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'at the door.' }
      ],
      options: ['is knocking', 'knocks', 'knock'],
      correctAnswer: 'is knocking',
      explanation: 'Usamos "is knocking" porque "Listen!" indica que la acción está ocurriendo ahora mismo.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'My English' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'better and better.' }
      ],
      options: ['is getting', 'gets', 'get'],
      correctAnswer: 'is getting',
      explanation: 'Usamos Present Continuous para describir un cambio o desarrollo gradual que está en progreso.'
    },
    {
      sentenceParts: [
        { type: 'text', content: "You're always" },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'things!' }
      ],
      options: ['forgetting', 'forget', 'forgets'],
      correctAnswer: 'forgetting',
      explanation: 'Usamos Present Continuous con "always" para criticar un hábito repetitivo que nos molesta.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'What' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'you' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'about?' }
      ],
      options: ['are', 'is'],
      correctAnswer: 'are',
      explanation: 'Usamos "are" con "you" para preguntar sobre pensamientos en este momento.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'Scientists' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'new ways to fight cancer.' }
      ],
      options: ['are developing', 'develop', 'develops'],
      correctAnswer: 'are developing',
      explanation: 'Usamos Present Continuous para actividades en progreso en el período actual (aunque no en este momento exacto).'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The company' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'new employees next week.' }
      ],
      options: ['is hiring', 'hires', 'hire'],
      correctAnswer: 'is hiring',
      explanation: 'Usamos Present Continuous para planes futuros ya organizados con "next week".'
    }
  ],

  'past-simple': [
    {
      sentenceParts: [
        { type: 'text', content: 'I' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'to Black Hat conference last year.' }
      ],
      options: ['went', 'go', 'gone'],
      correctAnswer: 'went',
      explanation: 'Usamos "went" (Past Simple) porque "last year" indica un tiempo específico en el pasado. La acción está completamente terminada.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'She' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'the exploit development yesterday.' }
      ],
      options: ['completed', 'complete', 'completes'],
      correctAnswer: 'completed',
      explanation: 'Usamos "completed" porque "yesterday" es un marcador temporal del pasado que requiere Past Simple.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'They' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'a new security server in 2020.' }
      ],
      options: ['deployed', 'deploy', 'deploys'],
      correctAnswer: 'deployed',
      explanation: 'Usamos "deployed" porque "in 2020" es un tiempo específico en el pasado y la acción está completa.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'Last night, I' },
        { type: 'input', content: '' },
        { type: 'text', content: '(attend) a cybersecurity webinar.' }
      ],
      correctAnswer: ['attended'],
      explanation: 'Past Simple: verb + ed (regular verbs). Usamos "attended" porque "last night" es un tiempo específico y completado en el pasado.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'What system' },
        { type: 'input', content: '' },
        { type: 'text', content: '(you/compromise) last month?' }
      ],
      correctAnswer: ['did you compromise'],
      explanation: 'Past Simple question: Did + subject + verb (base form). "Did" ya indica el pasado, por eso el verbo va en forma base.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'My friends' },
        { type: 'input', content: '' },
        { type: 'text', content: '(not/come) to my party yesterday.' }
      ],
      correctAnswer: ["didn't come", 'did not come'],
      explanation: 'Past Simple negativo: did not (didn\'t) + verb (base form). La acción no ocurrió en un tiempo específico del pasado.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'We' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'at that restaurant last week.' }
      ],
      options: ['ate', 'eat', 'eats'],
      correctAnswer: 'ate',
      explanation: 'Usamos "ate" (Past Simple irregular) porque "last week" indica un tiempo terminado en el pasado.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'He' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'very hard for his exam.' }
      ],
      options: ['studied', 'study', 'studies'],
      correctAnswer: 'studied',
      explanation: 'Usamos "studied" porque la acción de estudiar está completamente terminada en el pasado.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'Did you' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'the movie last night?' }
      ],
      options: ['watch', 'watched', 'watches'],
      correctAnswer: 'watch',
      explanation: 'Después de "Did" usamos el infinitivo del verbo sin "to". "Did" ya indica el pasado.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'My grandmother' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'in this house 50 years ago.' }
      ],
      options: ['lived', 'live', 'lives'],
      correctAnswer: 'lived',
      explanation: 'Usamos "lived" porque "50 years ago" es un tiempo específico terminado en el pasado.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The concert' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'at 9 PM.' }
      ],
      options: ['started', 'start', 'starts'],
      correctAnswer: 'started',
      explanation: 'Usamos Past Simple porque hablamos de un evento específico que ocurrió en el pasado.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'We' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: "see John at the party yesterday. He wasn't there." }
      ],
      options: ["didn't", "don't", "doesn't"],
      correctAnswer: "didn't",
      explanation: 'Usamos "didn\'t" para la forma negativa en Past Simple. "Yesterday" confirma que es pasado.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'Where' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'you' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'last summer?' }
      ],
      options: ['did', 'do'],
      correctAnswer: 'did',
      explanation: 'Usamos "did" para formar preguntas en Past Simple con "last summer".'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'She' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'her keys this morning.' }
      ],
      options: ['lost', 'lose', 'loses'],
      correctAnswer: 'lost',
      explanation: 'Usamos "lost" (Past Simple irregular) porque "this morning" (si ya pasó) es un tiempo terminado.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The children' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'in the park all afternoon.' }
      ],
      options: ['played', 'play', 'plays'],
      correctAnswer: 'played',
      explanation: 'Usamos "played" porque la actividad de la tarde ya terminó (está en el pasado).'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'I' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'my best friend in college.' }
      ],
      options: ['met', 'meet', 'meets'],
      correctAnswer: 'met',
      explanation: 'Usamos "met" (Past Simple irregular) porque el encuentro ocurrió en un tiempo específico del pasado (college).'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'They' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'married in 2015.' }
      ],
      options: ['got', 'get', 'gets'],
      correctAnswer: 'got',
      explanation: 'Usamos "got" porque "in 2015" es una fecha específica en el pasado.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The train' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'on time yesterday.' }
      ],
      options: ['arrived', 'arrive', 'arrives'],
      correctAnswer: 'arrived',
      explanation: 'Usamos "arrived" porque "yesterday" indica un momento específico y completado en el pasado.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'My father' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'me how to drive when I was 18.' }
      ],
      options: ['taught', 'teach', 'teaches'],
      correctAnswer: 'taught',
      explanation: 'Usamos "taught" (Past Simple irregular) porque la acción ocurrió cuando tenía 18 años (pasado específico).'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'We' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'a great time at the wedding.' }
      ],
      options: ['had', 'have', 'has'],
      correctAnswer: 'had',
      explanation: 'Usamos "had" porque la boda es un evento del pasado que ya terminó.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'She' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'a beautiful song at the concert.' }
      ],
      options: ['sang', 'sing', 'sings'],
      correctAnswer: 'sang',
      explanation: 'Usamos "sang" (Past Simple irregular) porque el concierto es un evento pasado completo.'
    }
  ],

  'present-perfect-past-simple-2': [
    {
      sentenceParts: [
        { type: 'reorder', content: '' }
      ],
      words: shuffleArray(['yet.', "hasn't", 'started', 'The', 'film']),
      correctAnswer: ['The', 'film', "hasn't", 'started', 'yet.'],
      explanation: 'Present Perfect negativo: Subject + haven\'t/hasn\'t + past participle. "Yet" se usa en negativas y preguntas para indicar que algo no ha ocurrido hasta ahora.'
    },
    {
      sentenceParts: [
        { type: 'reorder', content: '' }
      ],
      words: shuffleArray(['you', 'How', 'long', 'did', 'Oxford?', 'stay', 'in']),
      correctAnswer: ['How', 'long', 'did', 'you', 'stay', 'in', 'Oxford?'],
      explanation: 'Past Simple pregunta: How long + did + subject + verb. Usamos Past Simple porque la estancia en Oxford ya terminó (acción completa en el pasado).'
    },
    {
      sentenceParts: [
        { type: 'reorder', content: '' }
      ],
      words: shuffleArray(['your', 'Have', 'finished', 'homework', 'yet?', 'you']),
      correctAnswer: ['Have', 'you', 'finished', 'your', 'homework', 'yet?'],
      explanation: 'Present Perfect pregunta: Have/Has + subject + past participle. "Yet" en preguntas significa "ya" y sugiere que esperamos que la acción esté completa pronto.'
    },
    {
      sentenceParts: [
        { type: 'reorder', content: '' }
      ],
      words: shuffleArray(['arrived', 'Laura', 'the', 'at', 'has', 'just', 'airport.']),
      correctAnswer: ['Laura', 'has', 'just', 'arrived', 'at', 'the', 'airport.'],
      explanation: 'Present Perfect con "just": Subject + has/have + just + past participle. "Just" indica que la acción ocurrió muy recientemente y es relevante ahora.'
    },
    {
      sentenceParts: [
        { type: 'reorder', content: '' }
      ],
      words: shuffleArray(['years', 'ago.', 'We', 'here', 'moved', 'three']),
      correctAnswer: ['We', 'moved', 'here', 'three', 'years', 'ago.'],
      explanation: 'Past Simple: Subject + verb (past). Usamos Past Simple porque "ago" siempre indica un tiempo específico terminado en el pasado.'
    },
    {
      sentenceParts: [
        { type: 'reorder', content: '' }
      ],
      words: shuffleArray(['been', 'to', 'has', 'USA.', 'Peter', 'never', 'the']),
      correctAnswer: ['Peter', 'has', 'never', 'been', 'to', 'the', 'USA.'],
      explanation: 'Present Perfect con "never": Subject + has/have + never + past participle. "Never" indica una experiencia de vida (nunca en toda su vida hasta ahora).'
    }
  ],

  'future-simple': [
    {
      sentenceParts: [
        { type: 'text', content: 'I' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'the exploit tomorrow.' }
      ],
      options: ['will execute', 'execute', 'executed'],
      correctAnswer: 'will execute',
      explanation: 'Usamos "will execute" (Future Simple) porque "tomorrow" indica una acción futura. "Will" expresa una decisión o promesa.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The update' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'deploy at 6 PM.' }
      ],
      options: ['will', "won't", 'is'],
      correctAnswer: 'will',
      explanation: 'Usamos "will" para expresar una predicción sobre el futuro basada en lo que creemos que va a pasar.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'They' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'to the CTF competition next Friday.' }
      ],
      options: ['will participate', 'participate', 'participated'],
      correctAnswer: 'will participate',
      explanation: 'Usamos "will participate" porque "next Friday" es un tiempo futuro específico.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The ransomware' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'spread later today.' }
      ],
      options: ['will', "won't", 'is'],
      correctAnswer: 'will',
      explanation: 'Usamos "will" para hacer una predicción sobre amenazas futuras basada en análisis.'
    },
    {
      sentenceParts: [
        { type: 'text', content: "Don't worry, I" },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'patch the vulnerability.' }
      ],
      options: ['will', "won't", 'am'],
      correctAnswer: 'will',
      explanation: 'Usamos "will" para expresar una promesa o ofrecimiento espontáneo de ayuda.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The penetration test' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'start in 10 minutes.' }
      ],
      options: ['will', "won't", 'is'],
      correctAnswer: 'will',
      explanation: 'Usamos "will" para hablar de un evento futuro programado o esperado.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'I think we' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'win the game.' }
      ],
      options: ['will', "won't", 'are'],
      correctAnswer: 'will',
      explanation: 'Usamos "will" con "I think" para expresar una opinión o predicción sobre el futuro.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'They' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'be back before midnight.' }
      ],
      options: ['will', "won't", 'are'],
      correctAnswer: 'will',
      explanation: 'Usamos "will" para hacer una predicción sobre cuándo regresarán.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'This homework' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'take long.' }
      ],
      options: ["won't", 'will', "isn't"],
      correctAnswer: "won't",
      explanation: 'Usamos "won\'t" (will not) para hacer una predicción negativa sobre la duración.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'Maybe she' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'change her mind.' }
      ],
      options: ['will', "won't", 'is'],
      correctAnswer: 'will',
      explanation: 'Usamos "will" con "maybe" para expresar una posibilidad futura incierta.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'I' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'be 30 next month.' }
      ],
      options: ['will', "won't", 'am'],
      correctAnswer: 'will',
      explanation: 'Usamos "will" para hablar de una edad futura en una fecha específica.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The sun' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'rise at 6 AM tomorrow.' }
      ],
      options: ['will', "won't", 'is'],
      correctAnswer: 'will',
      explanation: 'Usamos "will" para hechos o certezas sobre el futuro (como eventos naturales predecibles).'
    },
    {
      sentenceParts: [
        { type: 'text', content: "I'm sure you" },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'pass the exam.' }
      ],
      options: ['will', "won't", 'are'],
      correctAnswer: 'will',
      explanation: 'Usamos "will" con "I\'m sure" para expresar confianza sobre un resultado futuro.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'Tomorrow, I' },
        { type: 'input', content: '' },
        { type: 'text', content: '(visit) my grandmother.' }
      ],
      correctAnswer: ['will visit', "'ll visit"],
      explanation: 'Future Simple: will + verb (base form). Usamos "will visit" para una decisión o plan futuro.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'I think it' },
        { type: 'input', content: '' },
        { type: 'text', content: '(rain) tomorrow.' }
      ],
      correctAnswer: ['will rain', "'ll rain"],
      explanation: 'Future Simple con "I think": will + verb. Expresamos una predicción sobre el futuro basada en nuestra opinión.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'They' },
        { type: 'input', content: '' },
        { type: 'text', content: '(not/be) at home tonight.' }
      ],
      correctAnswer: ['will not be', "won't be", "will not be"],
      explanation: 'Future Simple negativo: will not (won\'t) + verb. Hacemos una predicción negativa sobre el futuro.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'We' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'have time to finish this today.' }
      ],
      options: ["won't", 'will', 'are'],
      correctAnswer: "won't",
      explanation: 'Usamos "won\'t" para hacer una predicción negativa sobre tener tiempo suficiente.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'He' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'probably be late again.' }
      ],
      options: ['will', "won't", 'is'],
      correctAnswer: 'will',
      explanation: 'Usamos "will" con "probably" para expresar una predicción con alta probabilidad.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The weather' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'be nice this weekend.' }
      ],
      options: ['will', "won't", 'is'],
      correctAnswer: 'will',
      explanation: 'Usamos "will" para hacer una predicción sobre el clima futuro.'
    }
  ],

  'future-continuous': [
    {
      sentenceParts: [
        { type: 'text', content: 'This time tomorrow, I' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'on the beach.' }
      ],
      options: ['will be lying', 'will lie', 'am lying'],
      correctAnswer: 'will be lying',
      explanation: 'Usamos "will be lying" (Future Continuous) porque indica una acción que estará en progreso en un momento específico del futuro (mañana a esta hora).'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'At 8 PM tonight, we' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'dinner with our friends.' }
      ],
      options: ['will be having', 'will have', 'are having'],
      correctAnswer: 'will be having',
      explanation: 'Usamos "will be having" porque describe una acción que estará en progreso a las 8 PM (un momento específico en el futuro).'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'She' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'for the exam all weekend.' }
      ],
      options: ['will be studying', 'will study', 'studies'],
      correctAnswer: 'will be studying',
      explanation: 'Usamos "will be studying" porque indica una actividad continua que ocurrirá durante todo el fin de semana en el futuro.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'Next month, they' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'in their new house.' }
      ],
      options: ['will be living', 'will live', 'live'],
      correctAnswer: 'will be living',
      explanation: 'Usamos "will be living" para enfatizar que la acción de vivir estará en progreso durante el próximo mes.'
    },
    {
      sentenceParts: [
        { type: 'text', content: "Don't call me at 10 AM. I" },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'in a meeting.' }
      ],
      options: ['will be', 'will', 'am'],
      correctAnswer: 'will be',
      explanation: 'Usamos "will be" (Future Continuous con verbo "be") porque indica que la reunión estará en progreso a las 10 AM.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'This time next year, he' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'in Paris.' }
      ],
      options: ['will be working', 'will work', 'works'],
      correctAnswer: 'will be working',
      explanation: 'Usamos "will be working" porque enfatiza que la acción estará en progreso en ese momento específico del futuro (el próximo año a esta hora).'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'We' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'the report when you arrive.' }
      ],
      options: ['will be finishing', 'will finish', 'finish'],
      correctAnswer: 'will be finishing',
      explanation: 'Usamos "will be finishing" porque la acción de terminar el informe estará en progreso cuando llegues.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'At midnight, people' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'the New Year.' }
      ],
      options: ['will be celebrating', 'will celebrate', 'celebrate'],
      correctAnswer: 'will be celebrating',
      explanation: 'Usamos "will be celebrating" porque describe una acción que estará en progreso a medianoche.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'Tomorrow afternoon, I' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'to music and relaxing.' }
      ],
      options: ['will be listening', 'will listen', 'listen'],
      correctAnswer: 'will be listening',
      explanation: 'Usamos "will be listening" para enfatizar que estas acciones estarán en progreso mañana por la tarde.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'They' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'for London at this time tomorrow.' }
      ],
      options: ['will be leaving', 'will leave', 'leave'],
      correctAnswer: 'will be leaving',
      explanation: 'Usamos "will be leaving" porque la partida estará en progreso mañana a esta hora.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'At 5 PM, the kids' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'their homework.' }
      ],
      options: ['will be doing', 'will do', 'do'],
      correctAnswer: 'will be doing',
      explanation: 'Usamos "will be doing" porque la tarea estará en progreso a las 5 PM.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'She' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'at the conference all day Friday.' }
      ],
      options: ['will be speaking', 'will speak', 'speaks'],
      correctAnswer: 'will be speaking',
      explanation: 'Usamos "will be speaking" porque describe una actividad continua durante todo el viernes.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'I' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'you at the airport when you land.' }
      ],
      options: ['will be waiting', 'will wait', 'wait'],
      correctAnswer: 'will be waiting',
      explanation: 'Usamos "will be waiting" porque estaré esperando cuando aterrices (acción en progreso en ese momento futuro).'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'Next week, we' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'to our new apartment.' }
      ],
      options: ['will be moving', 'will move', 'move'],
      correctAnswer: 'will be moving',
      explanation: 'Usamos "will be moving" para enfatizar que la mudanza será un proceso en progreso la próxima semana.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'At noon, the chef' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'lunch for the guests.' }
      ],
      options: ['will be preparing', 'will prepare', 'prepares'],
      correctAnswer: 'will be preparing',
      explanation: 'Usamos "will be preparing" porque la preparación estará en progreso al mediodía.'
    }
  ],

  'future-perfect': [
    {
      sentenceParts: [
        { type: 'text', content: 'By next June, I' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'from university.' }
      ],
      options: ['will have graduated', 'will graduate', 'graduate'],
      correctAnswer: 'will have graduated',
      explanation: 'Usamos "will have graduated" (Future Perfect) porque la acción estará completa antes de un momento específico en el futuro (junio próximo).'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'She' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'the book by the time you arrive.' }
      ],
      options: ['will have finished', 'will finish', 'finishes'],
      correctAnswer: 'will have finished',
      explanation: 'Usamos "will have finished" porque la acción de terminar el libro estará completa antes de que llegues.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'By 2030, scientists' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'a cure for the disease.' }
      ],
      options: ['will have found', 'will find', 'find'],
      correctAnswer: 'will have found',
      explanation: 'Usamos "will have found" porque predecimos que la acción estará completa antes del año 2030.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'They' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'for 10 years next month.' }
      ],
      options: ['will have been married', 'will be married', 'are married'],
      correctAnswer: 'will have been married',
      explanation: 'Usamos "will have been married" porque el período de 10 años se completará el próximo mes.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'By the end of this year, we' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'to five different countries.' }
      ],
      options: ['will have traveled', 'will travel', 'travel'],
      correctAnswer: 'will have traveled',
      explanation: 'Usamos "will have traveled" porque la acción de viajar a cinco países estará completa al final del año.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'I' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'all my exams by Friday.' }
      ],
      options: ['will have completed', 'will complete', 'complete'],
      correctAnswer: 'will have completed',
      explanation: 'Usamos "will have completed" porque todos los exámenes estarán terminados antes del viernes.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'By tomorrow morning, the builders' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'the wall.' }
      ],
      options: ['will have built', 'will build', 'build'],
      correctAnswer: 'will have built',
      explanation: 'Usamos "will have built" porque el muro estará construido antes de mañana por la mañana.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'She' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'dinner by the time we get home.' }
      ],
      options: ['will have cooked', 'will cook', 'cooks'],
      correctAnswer: 'will have cooked',
      explanation: 'Usamos "will have cooked" porque la cena estará preparada antes de que lleguemos a casa.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'He' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'here for 20 years by December.' }
      ],
      options: ['will have worked', 'will work', 'works'],
      correctAnswer: 'will have worked',
      explanation: 'Usamos "will have worked" porque el período de 20 años se completará en diciembre.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'By this time next year, they' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'their new house.' }
      ],
      options: ['will have bought', 'will buy', 'buy'],
      correctAnswer: 'will have bought',
      explanation: 'Usamos "will have bought" porque la compra estará completa antes del próximo año a esta hora.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'We' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'the project by the deadline.' }
      ],
      options: ['will have finished', 'will finish', 'finish'],
      correctAnswer: 'will have finished',
      explanation: 'Usamos "will have finished" porque el proyecto estará terminado antes de la fecha límite.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'By 8 PM, I' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'all the dishes.' }
      ],
      options: ['will have washed', 'will wash', 'wash'],
      correctAnswer: 'will have washed',
      explanation: 'Usamos "will have washed" porque los platos estarán lavados antes de las 8 PM.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The company' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: '1000 employees by next year.' }
      ],
      options: ['will have hired', 'will hire', 'hires'],
      correctAnswer: 'will have hired',
      explanation: 'Usamos "will have hired" porque la contratación de 1000 empleados estará completa antes del próximo año.'
    }
  ],

  'first-conditional': [
    {
      sentenceParts: [
        { type: 'text', content: 'If the firewall' },
        { type: 'input', content: '' },
        { type: 'text', content: '(detect) an intrusion, it' },
        { type: 'input', content: '' },
        { type: 'text', content: "(block) the connection." }
      ],
      correctAnswer: ['detects', 'will block'],
      explanation: 'First Conditional: If + Present Simple, will + infinitive. Usamos "detects" (presente simple) en la condición y "will block" (futuro simple) en el resultado. Expresa una situación real y posible en el futuro.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The company' },
        { type: 'input', content: '' },
        { type: 'text', content: '(be) grateful if you' },
        { type: 'input', content: '' },
        { type: 'text', content: "(report) the vulnerability." }
      ],
      correctAnswer: ['will be', 'report'],
      explanation: 'First Conditional: resultado + if + condición. "Will be" es el resultado futuro y "report" es la condición en presente simple. La condición es posible y realista.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'If they' },
        { type: 'input', content: '' },
        { type: 'text', content: "(not update) the system, they" },
        { type: 'input', content: '' },
        { type: 'text', content: "(get) hacked." }
      ],
      correctAnswer: ["don't update", 'will get'],
      explanation: 'First Conditional negativo: If + don\'t/doesn\'t + verbo, will + infinitive. "Don\'t update" es presente simple negativo y "will get" es el resultado futuro.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'If the hacker' },
        { type: 'input', content: '' },
        { type: 'text', content: "(bypass) the authentication, we" },
        { type: 'input', content: '' },
        { type: 'text', content: "(need) to investigate." }
      ],
      correctAnswer: ['bypasses', 'will need'],
      explanation: 'First Conditional: If + presente simple, will + infinitive. "Bypasses" (tercera persona) + "will need" (futuro). Situación futura posible.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'What' },
        { type: 'input', content: '' },
        { type: 'text', content: "(you/do) if you" },
        { type: 'input', content: '' },
        { type: 'text', content: "(win) the lottery?" }
      ],
      correctAnswer: ['will you do', 'win'],
      explanation: 'First Conditional en pregunta: What + will + sujeto + verbo + if + presente simple. "Will you do" es la pregunta sobre el futuro y "win" es la condición en presente.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'If I' },
        { type: 'input', content: '' },
        { type: 'text', content: "(see) John, I" },
        { type: 'input', content: '' },
        { type: 'text', content: "(tell) him about the party." }
      ],
      correctAnswer: ['see', 'will tell'],
      explanation: 'First Conditional: "see" (presente simple) describe una condición posible, y "will tell" es la acción futura que resultará de esa condición.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'If you' },
        { type: 'input', content: '' },
        { type: 'text', content: "(work) hard, you" },
        { type: 'input', content: '' },
        { type: 'text', content: "(succeed)." }
      ],
      correctAnswer: ['work', 'will succeed'],
      explanation: 'First Conditional: If + presente simple, will + infinitive. Expresa una consecuencia probable del trabajo duro.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'We' },
        { type: 'input', content: '' },
        { type: 'text', content: "(go) to the beach if the weather" },
        { type: 'input', content: '' },
        { type: 'text', content: "(be) nice." }
      ],
      correctAnswer: ['will go', 'is'],
      explanation: 'First Conditional: "will go" es el plan futuro e "is" (presente simple) es la condición que debe cumplirse.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'If she' },
        { type: 'input', content: '' },
        { type: 'text', content: "(not eat) breakfast, she" },
        { type: 'input', content: '' },
        { type: 'text', content: "(feel) hungry later." }
      ],
      correctAnswer: ["doesn't eat", 'will feel'],
      explanation: 'First Conditional negativo: "doesn\'t eat" (tercera persona) + "will feel". Causa y efecto futuro probable.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'If they' },
        { type: 'input', content: '' },
        { type: 'text', content: "(invite) us, we" },
        { type: 'input', content: '' },
        { type: 'text', content: "(attend) the party." }
      ],
      correctAnswer: ['invite', 'will attend'],
      explanation: 'First Conditional: condición posible "invite" (presente) + resultado futuro "will attend".'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'If I' },
        { type: 'input', content: '' },
        { type: 'text', content: "(have) time, I" },
        { type: 'input', content: '' },
        { type: 'text', content: "(help) you with your homework." }
      ],
      correctAnswer: ['have', 'will help'],
      explanation: 'First Conditional: "have" (presente) + "will help". Expresa una promesa condicional.'
    }
  ],

  'second-conditional': [
    {
      sentenceParts: [
        { type: 'text', content: 'If I' },
        { type: 'input', content: '' },
        { type: 'text', content: "(have) elite hacking skills, I" },
        { type: 'input', content: '' },
        { type: 'text', content: "(work) for a top cybersecurity firm." }
      ],
      correctAnswer: ['had', 'would work'],
      explanation: 'Second Conditional: If + Past Simple, would + infinitive. Usamos "had" para la condición hipotética. Describe situaciones hipotéticas o poco probables en el presente/futuro.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'She' },
        { type: 'input', content: '' },
        { type: 'text', content: "(get) the OSCP certification if she" },
        { type: 'input', content: '' },
        { type: 'text', content: "(practice) more." }
      ],
      correctAnswer: ['would get', 'practiced'],
      explanation: 'Second Conditional: resultado + if + condición. "Would get" expresa el resultado hipotético y "practiced" (pasado simple) la condición irreal o improbable.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'If the network' },
        { type: 'input', content: '' },
        { type: 'text', content: "(not be) vulnerable, we" },
        { type: 'input', content: '' },
        { type: 'text', content: "(exploit) it so easily." }
      ],
      correctAnswer: ["weren't", "wouldn't exploit"],
      explanation: 'Second Conditional negativo: If + weren\'t + verbo, wouldn\'t + infinitive. "Weren\'t" es la condición hipotética negativa y "wouldn\'t exploit" es el resultado.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'What' },
        { type: 'input', content: '' },
        { type: 'text', content: "(you/do) if you" },
        { type: 'input', content: '' },
        { type: 'text', content: "(discover) a zero-day exploit?" }
      ],
      correctAnswer: ['would you do', 'discovered'],
      explanation: 'Second Conditional en pregunta: What + would + sujeto + verbo + if + pasado simple. Situación hipotética: "would you do" + "discovered".'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'If he' },
        { type: 'input', content: '' },
        { type: 'text', content: "(study) harder, he" },
        { type: 'input', content: '' },
        { type: 'text', content: "(pass) his exams." }
      ],
      correctAnswer: ['studied', 'would pass'],
      explanation: 'Second Conditional: "studied" (pasado simple) + "would pass". Da consejo sobre una situación presente que probablemente no cambiará.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'I' },
        { type: 'input', content: '' },
        { type: 'text', content: "(be) very surprised if she" },
        { type: 'input', content: '' },
        { type: 'text', content: "(come) to the party." }
      ],
      correctAnswer: ['would be', 'came'],
      explanation: 'Second Conditional: "would be" + "came". Expresa que algo es poco probable que ocurra, por eso nos sorprendería.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'If we' },
        { type: 'input', content: '' },
        { type: 'text', content: "(win) the lottery, we" },
        { type: 'input', content: '' },
        { type: 'text', content: "(buy) a big house." }
      ],
      correctAnswer: ['won', 'would buy'],
      explanation: 'Second Conditional: "won" (pasado) + "would buy". Situación hipotética improbable sobre ganar la lotería.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'She' },
        { type: 'input', content: '' },
        { type: 'text', content: "(be) healthier if she" },
        { type: 'input', content: '' },
        { type: 'text', content: "(exercise) regularly." }
      ],
      correctAnswer: ['would be', 'exercised'],
      explanation: 'Second Conditional: "would be" + "exercised". Da consejo sobre un cambio de hábito poco probable.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'If I' },
        { type: 'input', content: '' },
        { type: 'text', content: "(speak) Chinese, I" },
        { type: 'input', content: '' },
        { type: 'text', content: "(move) to Beijing." }
      ],
      correctAnswer: ['spoke', 'would move'],
      explanation: 'Second Conditional: "spoke" + "would move". Situación contraria a la realidad presente (no habla chino).'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'If it' },
        { type: 'input', content: '' },
        { type: 'text', content: "(not be) so expensive, I" },
        { type: 'input', content: '' },
        { type: 'text', content: "(buy) it." }
      ],
      correctAnswer: ["weren't", 'would buy'],
      explanation: 'Second Conditional negativo: "weren\'t" (forma correcta para todas las personas) + "would buy".'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'They' },
        { type: 'input', content: '' },
        { type: 'text', content: "(be) happier if they" },
        { type: 'input', content: '' },
        { type: 'text', content: "(change) jobs." }
      ],
      correctAnswer: ['would be', 'changed'],
      explanation: 'Second Conditional: "would be" + "changed". Sugiere un cambio hipotético que mejoraría su situación.'
    }
  ],

  'third-conditional': [
    {
      sentenceParts: [
        { type: 'text', content: 'If I' },
        { type: 'input', content: '' },
        { type: 'text', content: "(know) about the vulnerability, I" },
        { type: 'input', content: '' },
        { type: 'text', content: "(patch) it." }
      ],
      correctAnswer: ['had known', 'would have patched'],
      explanation: 'Third Conditional: If + Past Perfect, would have + past participle. "Had known" y "would have patched" hablan de una situación pasada que no ocurrió. Expresa arrepentimiento o situaciones imposibles de cambiar.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The company' },
        { type: 'input', content: '' },
        { type: 'text', content: "(not suffer) the data breach if they" },
        { type: 'input', content: '' },
        { type: 'text', content: "(implement) 2FA." }
      ],
      correctAnswer: ["wouldn't have suffered", 'had implemented'],
      explanation: 'Third Conditional negativo: "wouldn\'t have suffered" (resultado que no pasó) + "had implemented" (condición que no se cumplió en el pasado).'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'If they' },
        { type: 'input', content: '' },
        { type: 'text', content: "(practice) more, they" },
        { type: 'input', content: '' },
        { type: 'text', content: "(win) the CTF competition." }
      ],
      correctAnswer: ['had practiced', 'would have won'],
      explanation: 'Third Conditional: "had practiced" + "would have won". Habla de algo que no pasó en el pasado y su resultado (que tampoco ocurrió).'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'What' },
        { type: 'input', content: '' },
        { type: 'text', content: "(you/do) if you" },
        { type: 'input', content: '' },
        { type: 'text', content: "(detect) the attack earlier?" }
      ],
      correctAnswer: ['would you have done', 'had detected'],
      explanation: 'Third Conditional en pregunta: What + would + sujeto + have + past participle + if + past perfect. Situación hipotética en el pasado.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'If he' },
        { type: 'input', content: '' },
        { type: 'text', content: "(not eat) that food, he" },
        { type: 'input', content: '' },
        { type: 'text', content: "(not get) sick." }
      ],
      correctAnswer: ["hadn't eaten", "wouldn't have gotten"],
      explanation: 'Third Conditional doble negativo: "hadn\'t eaten" (no comió, pero lo hizo) + "wouldn\'t have gotten" (no se habría enfermado, pero se enfermó).'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'I' },
        { type: 'input', content: '' },
        { type: 'text', content: "(buy) that house if I" },
        { type: 'input', content: '' },
        { type: 'text', content: "(have) enough money." }
      ],
      correctAnswer: ['would have bought', 'had had'],
      explanation: 'Third Conditional: "would have bought" + "had had" (doble "had" porque es el pasado perfecto de "have"). Habla de una oportunidad perdida en el pasado.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'If you' },
        { type: 'input', content: '' },
        { type: 'text', content: "(tell) me earlier, I" },
        { type: 'input', content: '' },
        { type: 'text', content: "(help) you." }
      ],
      correctAnswer: ['had told', 'would have helped'],
      explanation: 'Third Conditional: "had told" + "would have helped". Expresa arrepentimiento por algo que no ocurrió en el pasado.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'We' },
        { type: 'input', content: '' },
        { type: 'text', content: "(not be) late if we" },
        { type: 'input', content: '' },
        { type: 'text', content: "(take) a taxi." }
      ],
      correctAnswer: ["wouldn't have been", 'had taken'],
      explanation: 'Third Conditional negativo: "wouldn\'t have been" + "had taken". Lamenta una decisión pasada que causó llegar tarde.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'If she' },
        { type: 'input', content: '' },
        { type: 'text', content: "(save) money, she" },
        { type: 'input', content: '' },
        { type: 'text', content: "(afford) the trip." }
      ],
      correctAnswer: ['had saved', 'could have afforded'],
      explanation: 'Third Conditional con modal: "had saved" + "could have afforded". Usa "could" en lugar de "would" para expresar posibilidad perdida.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'If they' },
        { type: 'input', content: '' },
        { type: 'text', content: "(listen) to my advice, they" },
        { type: 'input', content: '' },
        { type: 'text', content: "(avoid) the problem." }
      ],
      correctAnswer: ['had listened', 'would have avoided'],
      explanation: 'Third Conditional: "had listened" + "would have avoided". Crítica a una decisión pasada que causó problemas.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'I' },
        { type: 'input', content: '' },
        { type: 'text', content: "(not forget) if you" },
        { type: 'input', content: '' },
        { type: 'text', content: "(remind) me." }
      ],
      correctAnswer: ["wouldn't have forgotten", 'had reminded'],
      explanation: 'Third Conditional: "wouldn\'t have forgotten" + "had reminded". Implica que olvidó porque no le recordaron.'
    }
  ],

  'question-forms': [
    {
      sentenceParts: [
        { type: 'text', content: 'I Should her tell I feel how' },
        { type: 'input', content: '' }
      ],
      correctAnswer: ['Should I tell her how I feel'],
      explanation: 'Modal question: Should + subject + verb + object + how + subject + verb. Las preguntas con modales ponen el modal antes del sujeto.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'friend known long best have How you your' },
        { type: 'input', content: '' }
      ],
      correctAnswer: ['How long have you known your best friend'],
      explanation: 'Present Perfect question: How long + have + subject + past participle. "How long" pregunta por duración.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'tell when you train next leaves the Could me' },
        { type: 'input', content: '' }
      ],
      correctAnswer: ['Could you tell me when the next train leaves'],
      explanation: 'Indirect question: Could you tell me + when + subject + verb (sin inversión). En preguntas indirectas, el orden es afirmativo después de "when".'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'are What about you thinking' },
        { type: 'input', content: '' }
      ],
      correctAnswer: ['What are you thinking about'],
      explanation: 'Present Continuous question: What + are + subject + verb-ing + preposition. "Think about" necesita la preposición al final.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'at do weekend you What doing the like' },
        { type: 'input', content: '' }
      ],
      correctAnswer: ['What do you like doing at the weekend'],
      explanation: 'Present Simple question: What + do + subject + like + verb-ing. "Like doing" expresa preferencias sobre actividades.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'music to does What Jane kind like listening of' },
        { type: 'input', content: '' }
      ],
      correctAnswer: ['What kind of music does Jane like listening to'],
      explanation: 'Present Simple question: What kind of + noun + does + subject + like + verb-ing + preposition. La preposición "to" va al final.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'you time film know finishes Do what the' },
        { type: 'input', content: '' }
      ],
      correctAnswer: ['Do you know what time the film finishes'],
      explanation: 'Indirect question: Do you know + what time + subject + verb. El orden después de "what time" es afirmativo, no interrogativo.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'class students yesterday to many came How' },
        { type: 'input', content: '' }
      ],
      correctAnswer: ['How many students came to class yesterday'],
      explanation: 'Past Simple question: How many + noun + verb (past). "How many" pregunta por cantidad.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'you remember is where Do the restaurant' },
        { type: 'input', content: '' }
      ],
      correctAnswer: ['Do you remember where the restaurant is'],
      explanation: 'Indirect question: Do you remember + where + subject + verb. El orden es afirmativo después de "where" en preguntas indirectas.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'housework family in Who your the does' },
        { type: 'input', content: '' }
      ],
      correctAnswer: ['Who does the housework in your family'],
      explanation: 'Question with "Who": Who + does + noun + preposition + possessive + noun. "Who" actúa como sujeto de la pregunta.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'studying been How you English have long' },
        { type: 'input', content: '' }
      ],
      correctAnswer: ['How long have you been studying English'],
      explanation: 'Present Perfect Continuous question: How long + have + subject + been + verb-ing. Pregunta por la duración de una acción continua.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'me know where you let Could is the station' },
        { type: 'input', content: '' }
      ],
      correctAnswer: ['Could you let me know where the station is'],
      explanation: 'Indirect polite question: Could you let me know + where + subject + verb. Forma muy cortés de pedir información.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'cost How much new does car a' },
        { type: 'input', content: '' }
      ],
      correctAnswer: ['How much does a new car cost'],
      explanation: 'Present Simple question: How much + does + subject + verb. "How much" pregunta por precio o cantidad.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'Why crying you are' },
        { type: 'input', content: '' }
      ],
      correctAnswer: ['Why are you crying'],
      explanation: 'Present Continuous question: Why + are + subject + verb-ing. Pregunta sobre la razón de una acción en progreso.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'did When last you holiday on go' },
        { type: 'input', content: '' }
      ],
      correctAnswer: ['When did you last go on holiday'],
      explanation: 'Past Simple question: When + did + subject + adverb + verb. "Last" se coloca entre el sujeto y el verbo principal.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'How often' },
        { type: 'input', content: '' },
        { type: 'text', content: 'exercise? (you / usually do)' }
      ],
      correctAnswer: ['do you usually do'],
      explanation: 'Present Simple question with frequency: How often + do + subject + adverb + verb. "Usually" va entre el sujeto y el verbo principal.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'Who' },
        { type: 'input', content: '' },
        { type: 'text', content: 'Oliver Twist? (write)' }
      ],
      correctAnswer: ['wrote'],
      explanation: 'Question with "Who" as subject: Who + verb (past). No necesita auxiliar "did" porque "Who" es el sujeto de la pregunta.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'Could you tell me how much' },
        { type: 'input', content: '' },
        { type: 'text', content: '? (this book / cost)' }
      ],
      correctAnswer: ['this book costs'],
      explanation: 'Indirect question: how much + subject + verb. En preguntas indirectas, el orden es afirmativo sin auxiliar.'
    },
    {
      sentenceParts: [
        { type: 'text', content: "I can't remember where" },
        { type: 'input', content: '' },
        { type: 'text', content: 'my car this morning. (I / park)' }
      ],
      correctAnswer: ['I parked'],
      explanation: 'Indirect question with "where": where + subject + verb (past). El orden es afirmativo en preguntas indirectas.'
    },
    {
      sentenceParts: [
        { type: 'input', content: '' },
        { type: 'text', content: 'your trip to Paris last weekend? (you / enjoy)' }
      ],
      correctAnswer: ['Did you enjoy'],
      explanation: 'Past Simple question: Did + subject + verb. "Did" es el auxiliar para preguntas en pasado simple.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'What kind of work' },
        { type: 'input', content: '' },
        { type: 'text', content: '? (your sister / do)' }
      ],
      correctAnswer: ['does your sister do'],
      explanation: 'Present Simple question: does + subject + verb. Para tercera persona singular usamos "does".'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'Who' },
        { type: 'input', content: '' },
        { type: 'text', content: 'the last biscuit? (eat)' }
      ],
      correctAnswer: ['ate'],
      explanation: 'Question with "Who" as subject: Who + verb (past). No necesita auxiliar porque "Who" actúa como sujeto.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'Do you know what time' },
        { type: 'input', content: '' },
        { type: 'text', content: 'on Saturdays? (the swimming pool / open)' }
      ],
      correctAnswer: ['the swimming pool opens'],
      explanation: 'Indirect question: what time + subject + verb. El orden es afirmativo sin auxiliar en preguntas indirectas.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'Why' },
        { type: 'input', content: '' },
        { type: 'text', content: "the present you gave her? (your sister / not like)" }
      ],
      correctAnswer: ["didn't your sister like"],
      explanation: 'Negative question in past: Why + didn\'t + subject + verb. "Didn\'t" es la forma negativa del auxiliar en pasado.'
    },
    {
      sentenceParts: [
        { type: 'input', content: '' },
        { type: 'text', content: "play your music so loud? I can't concentrate. (you / have to)" }
      ],
      correctAnswer: ['Do you have to'],
      explanation: 'Question with "have to": Do + subject + have to + verb. "Have to" expresa obligación o necesidad.'
    }
  ],

  'weather-match': [
    {
      type: 'match',
      instruction: 'Match the words and definitions.',
      words: ['hail', 'drought', 'blizzard', 'heatwave', 'flood', 'monsoon', 'lightning', 'thunder', 'hurricane'],
      definitions: [
        { id: 1, text: 'a period of unusually hot weather', answer: 'heatwave' },
        { id: 2, text: 'a long, usually hot, dry period when there is little or no rain', answer: 'drought' },
        { id: 3, text: 'small balls of ice that fall like rain', answer: 'hail' },
        { id: 4, text: 'a flash of very bright light in the sky caused by electricity', answer: 'lightning' },
        { id: 5, text: 'the loud noise that you hear during a storm', answer: 'thunder' },
        { id: 6, text: 'a snow storm with very strong winds', answer: 'blizzard' },
        { id: 7, text: 'when everything becomes covered with water', answer: 'flood' },
        { id: 8, text: 'a violent storm with very strong winds (also cyclone, tornado, typhoon)', answer: 'hurricane' },
        { id: 9, text: 'the season when it rains a lot in southern Asia', answer: 'monsoon' }
      ]
    }
  ],

  'present-simple-continuous-mix': [
    {
      sentenceParts: [
        { type: 'text', content: "It's my sister's birthday today and she" },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'a party.' }
      ],
      options: ["'s having", "has", "'s have"],
      correctAnswer: "'s having",
      explanation: "Usamos Present Continuous ('s having) porque es una acción temporal que está sucediendo ahora (today). La fiesta está ocurriendo en este momento específico."
    },
    {
      sentenceParts: [
        { type: 'text', content: 'We' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: "round to her house at eight o'clock this evening." }
      ],
      options: ["'re going", "go", "'re go"],
      correctAnswer: "'re going",
      explanation: "Usamos Present Continuous ('re going) porque es un plan futuro definido. Tenemos una hora específica (eight o'clock this evening) para esta acción planificada."
    },
    {
      sentenceParts: [
        { type: 'text', content: 'She' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'her birthday, but this one is special because she\'s thirty!' }
      ],
      options: ["doesn't usually celebrate", "isn't usually celebrating", "don't usually celebrate"],
      correctAnswer: "doesn't usually celebrate",
      explanation: "Usamos Present Simple negativo (doesn't usually celebrate) porque hablamos de un hábito o rutina general. 'Usually' es una palabra clave que indica Present Simple."
    },
    {
      sentenceParts: [
        { type: 'text', content: 'After class today I' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'into town to buy her present.' }
      ],
      options: ["'m going", "go", "'m go"],
      correctAnswer: "'m going",
      explanation: "Usamos Present Continuous ('m going) porque es un plan futuro específico. 'After class today' indica una intención o plan concreto para el futuro cercano."
    },
    {
      sentenceParts: [
        { type: 'text', content: 'I' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: "I'll get her some CDs." }
      ],
      options: ["think", "'m thinking", "thinks"],
      correctAnswer: "think",
      explanation: "Usamos Present Simple (think) porque 'think' es un non-action verb (verbo de estado) cuando expresa opinión. Los verbos de estado no se usan en forma continua."
    },
    {
      sentenceParts: [
        { type: 'text', content: 'She really' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'music.' }
      ],
      options: ["loves", "'s loving", "love"],
      correctAnswer: "loves",
      explanation: "Usamos Present Simple (loves) porque 'love' es un non-action verb (verbo de emoción/sentimiento). Los verbos de estado como love, like, hate, etc. normalmente no se usan en forma continua."
    }
  ],

  'mixed-tenses': []
};

export const getExercisesByTense = (tenseId) => {
  // Si es mixed-tenses, mezclar todos los ejercicios de todos los tiempos
  if (tenseId === 'mixed-tenses') {
    const allExercises = [];
    Object.keys(exercisesData).forEach(key => {
      if (key !== 'mixed-tenses') {
        // Agregar el nombre del tiempo verbal a cada ejercicio
        const exercisesWithTense = exercisesData[key].map(exercise => ({
          ...exercise,
          tense: getTenseName(key)
        }));
        allExercises.push(...exercisesWithTense);
      }
    });
    return shuffleArray(allExercises);
  }
  
  const exercises = exercisesData[tenseId] || [];
  return shuffleArray(exercises);
};

// Función auxiliar para obtener el nombre del tiempo verbal en español
const getTenseName = (tenseId) => {
  const tenseNames = {
    'present-perfect': 'Present Perfect',
    'present-perfect-continuous': 'Present Perfect Continuous',
    'past-continuous': 'Past Continuous',
    'past-perfect': 'Past Perfect',
    'past-perfect-continuous': 'Past Perfect Continuous',
    'future-perfect-continuous': 'Future Perfect Continuous',
    'future-simple': 'Present Simple',
    'present-continuous': 'Present Continuous',
    'past-simple': 'Past Simple',
    'future-simple': 'Future Simple',
    'future-continuous': 'Future Continuous',
    'future-perfect': 'Future Perfect',
    'first-conditional': 'First Conditional',
    'second-conditional': 'Second Conditional',
    'third-conditional': 'Third Conditional',
    'question-forms': 'Question Forms'
  };
  return tenseNames[tenseId] || tenseId;
};

export const getAllTenses = () => {
  return Object.keys(exercisesData);
};
