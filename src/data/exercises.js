// Exercise database for each verb tense

// Function to randomly shuffle arrays
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
      explanation: 'We use "performed" (Present Perfect Simple) because we are asking about a life experience regardless of when it happened. We don\'t need the continuous form because we don\'t emphasize the duration of the action.'
    },
    {
      sentenceParts: [
        { type: 'text', content: "The security team's" },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'on this vulnerability since January.' }
      ],
      options: ['worked OR been working', 'been working', 'worked'],
      correctAnswer: 'worked OR been working',
      explanation: 'Both forms are correct. "Has worked" emphasizes the result (they continue working), while "has been working" emphasizes the continuity of the action from January until now.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The firewall has' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'five attacks this morning!' }
      ],
      options: ['blocked', 'blocked OR been blocking', 'been blocking'],
      correctAnswer: 'blocked',
      explanation: 'We use "blocked" because we are counting complete actions (five attacks). Present Perfect Simple is used for repeated and countable actions.'
    },
    {
      sentenceParts: [
        { type: 'text', content: "The hackers are frustrated because they've" },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'exploits all day without success.' }
      ],
      options: ['tried OR been trying', 'tried', 'been trying'],
      correctAnswer: 'been trying',
      explanation: 'We use "been trying" (Present Perfect Continuous) because we emphasize the continuous activity that caused the frustration. The duration of the action is important here.'
    },
    {
      sentenceParts: [
        { type: 'text', content: "The pentesters haven't" },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'the new security system yet.' }
      ],
      options: ['tested OR been testing', 'tested', 'been testing'],
      correctAnswer: 'tested',
      explanation: 'We use "tested" because it\'s a punctual action (testing the system). "Test" in this sense is not normally used in continuous form.'
    },
    {
      sentenceParts: [
        { type: 'text', content: "I've never" },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'a zero-day exploit. Have you?' }
      ],
      options: ['been discovering', 'discovered', 'discovered OR been discovering'],
      correctAnswer: 'discovered',
      explanation: 'We use "discovered" because "discover" (finding for the first time) is a punctual action that is not used in continuous form in this context.'
    },
    {
      sentenceParts: [
        { type: 'text', content: "The DDoS attack's" },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'since midnight.' }
      ],
      options: ['continued OR been continuing', 'been continuing', 'continued'],
      correctAnswer: 'been continuing',
      explanation: 'We use "been continuing" (Present Perfect Continuous) because we emphasize the continuous activity since midnight. Duration is important here.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The ethical hacker has just' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: "to the security conference. He won't be back till next week." }
      ],
      options: ['been going', 'gone', 'gone OR been going'],
      correctAnswer: 'gone',
      explanation: 'We use "gone" because he went to the conference and is not here now. "Gone" implies that the person is not present, while "been" would imply that he already returned.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'Our sysadmin has' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'remotely since the pandemic.' }
      ],
      options: ['worked', 'been working', 'worked OR been working'],
      correctAnswer: 'worked OR been working',
      explanation: 'Both forms are correct. "Has worked" emphasizes the state/result (works remotely), while "has been working" emphasizes the continuity of the situation since the pandemic.'
    },
    {
      sentenceParts: [
        { type: 'text', content: "I've" },
        { type: 'dropdown', content: '' },
        { type: 'text', content: "the network logs all morning. I'm at entry 15,000." }
      ],
      options: ['analyzed', 'analyzed OR been analyzing', 'been analyzing'],
      correctAnswer: 'been analyzing',
      explanation: 'We use "been analyzing" (Present Perfect Continuous) because we emphasize the continuous activity of analyzing throughout the entire morning. We mention the progress (entry 15,000) which indicates duration.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'I' },
        { type: 'input', content: '' },
        { type: 'text', content: '(patch) the server. Can we go live now?' }
      ],
      correctAnswer: ['have patched'],
      explanation: 'Present Perfect Simple: have/has + past participle. We use "have patched" because the action has just been completed and the result is important now (we can go live).'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The hacker' },
        { type: 'input', content: '' },
        { type: 'text', content: '(infiltrate) systems for five years.' }
      ],
      correctAnswer: ['has infiltrated', 'has been infiltrating'],
      explanation: 'Both forms are correct. "Has infiltrated" or "has been infiltrating" because the duration (five years) connects the past with the present.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'They' },
        { type: 'input', content: '' },
        { type: 'text', content: '(never/crack) a 256-bit encryption before.' }
      ],
      correctAnswer: ['have never cracked', "haven't cracked"],
      explanation: 'Present Perfect with "never": have/has + never + past participle. We talk about a cybersecurity experience up to now.'
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
      explanation: 'We use "have" with "you" in Present Perfect to ask about the duration of an action that began in the past and continues.'
    },
    {
      sentenceParts: [
        { type: 'text', content: "I've" },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'my root password. Have you seen it?' }
      ],
      options: ['lost', 'losed', 'been losing'],
      correctAnswer: 'lost',
      explanation: 'We use "lost" (Present Perfect Simple) to indicate that the password is lost now. The present result is important.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'They' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'in the same hacker collective for 10 years.' }
      ],
      options: ['have been', 'are', 'were'],
      correctAnswer: 'have been',
      explanation: 'We use "have been" because the duration (10 years) connects the past with the present. They are still in the collective.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'He' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'three network scans this morning.' }
      ],
      options: ['has run', 'ran', 'has been running'],
      correctAnswer: 'has run',
      explanation: 'We use "has run" because we count complete actions in a period that has not yet ended ("this morning").'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'We' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'each other since our first CTF competition.' }
      ],
      options: ['have known', 'know', 'knew'],
      correctAnswer: 'have known',
      explanation: 'We use "have known" with "since" to indicate that the action began in the past (first CTF competition) and continues until now.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The team' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'any bug bounties recently.' }
      ],
      options: ["hasn't found", "didn't find", 'is not finding'],
      correctAnswer: "hasn't found",
      explanation: 'We use "hasn\'t found" with "recently" to talk about a recent period up to the present.'
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
      explanation: 'We ask about pentesting experiences using Present Perfect with "How many".'
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
      explanation: 'We use "has" with third person singular. "Already" is used with Present Perfect to indicate that something happened earlier than expected.'
    },
    {
      sentenceParts: [
        { type: 'text', content: "I've" },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'to DEF CON twice.' }
      ],
      options: ['been', 'gone', 'went'],
      correctAnswer: 'been',
      explanation: 'We use "been" (not "gone") because we returned from the conference. "Gone" would imply that we are still there.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'Someone' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'all the user data!' }
      ],
      options: ['has stolen', 'stole', 'steals'],
      correctAnswer: 'has stolen',
      explanation: 'We use Present Perfect because the present result is visible (there is no data) but we don\'t know exactly when it happened.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'My colleague' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'their own cybersecurity startup.' }
      ],
      options: ['has launched', 'launched', 'launches'],
      correctAnswer: 'has launched',
      explanation: 'We use Present Perfect para noticias recientes o logros cuando el tiempo exacto no es importante.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The botnet' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'requests for hours!' }
      ],
      options: ['has been sending', 'sent', 'sends'],
      correctAnswer: 'has been sending',
      explanation: 'We use Present Perfect Continuous with "for hours" to emphasize the duration of an activity that continues.'
    },
    {
      sentenceParts: [
        { type: 'text', content: "You've" },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'incredible progress in your hacking skills!' }
      ],
      options: ['made', 'make', 'making'],
      correctAnswer: 'made',
      explanation: 'We use "made" en Present Perfect to talk about un logro o cambio visible hasta ahora.'
    },
    {
      sentenceParts: [
        { type: 'text', content: "We've" },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'for a server response for 30 minutes.' }
      ],
      options: ['been waiting', 'waited', 'wait'],
      correctAnswer: 'been waiting',
      explanation: 'We use Present Perfect Continuous with "for 30 minutes" to emphasize the duration of an action that continues.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The penetration tester has' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'multiple CSRF vulnerabilities in the web application.' }
      ],
      options: ['identified', 'been identifying', 'identified OR been identifying'],
      correctAnswer: 'identified',
      explanation: 'Present Perfect Simple to report specific findings during pentesting.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'Our team has' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'privilege escalation since morning.' }
      ],
      options: ['attempted', 'been attempting', 'attempted OR been attempting'],
      correctAnswer: 'been attempting',
      explanation: 'Present Perfect Continuous emphasizes the continuous activity of attempting privilege escalation.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The vulnerability scanner has' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: '47 critical issues so far.' }
      ],
      options: ['detected', 'been detecting', 'detected OR been detecting'],
      correctAnswer: 'detected',
      explanation: 'We use Present Perfect Simple because we count specific findings up to now.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'Have you' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'the credentials database yet?' }
      ],
      options: ['dumped', 'been dumping', 'dumped OR been dumping'],
      correctAnswer: 'dumped',
      explanation: 'Question about a specific completed action, typical in pentesting reports.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The application has never' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'input validation properly.' }
      ],
      options: ['implemented', 'been implementing', 'implemented OR been implementing'],
      correctAnswer: 'implemented',
      explanation: 'We use Present Perfect to describe a persistent problem without specific time.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'We have' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'XSS payloads throughout the entire session.' }
      ],
      options: ['tested', 'been testing', 'tested OR been testing'],
      correctAnswer: 'been testing',
      explanation: 'Present Perfect Continuous emphasizes the continuous testing activity throughout the session.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The SIEM has' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'suspicious activities since 3 AM.' }
      ],
      options: ['logged', 'been logging', 'logged OR been logging'],
      correctAnswer: 'been logging',
      explanation: 'Continuous logging activity from a specific point in the past.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'Has the WAF' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'any malicious requests today?' }
      ],
      options: ['blocked', 'been blocking', 'blocked OR been blocking'],
      correctAnswer: 'blocked',
      explanation: 'Question about specific completed actions in a period that continues (today).'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The red team has' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'lateral movement across the network.' }
      ],
      options: ['achieved', 'been achieving', 'achieved OR been achieving'],
      correctAnswer: 'achieved',
      explanation: 'Specific achievement in pentesting reported with Present Perfect Simple.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'I have' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'Burp Suite for web application testing for years.' }
      ],
      options: ['used', 'been using', 'used OR been using'],
      correctAnswer: 'used OR been using',
      explanation: 'Both forms are correct to describe experience with tools.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The IDS has' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: '15 intrusion attempts this week.' }
      ],
      options: ['detected', 'been detecting', 'detected OR been detecting'],
      correctAnswer: 'detected',
      explanation: 'We count specific events in a period that still continues (this week).'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'Have you ever' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'a successful buffer overflow attack?' }
      ],
      options: ['executed', 'been executing', 'executed OR been executing'],
      correctAnswer: 'executed',
      explanation: 'Question about pentesting experience without specific time.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The authentication mechanism has' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'broken for the past three releases.' }
      ],
      options: ['been', 'been being', 'is'],
      correctAnswer: 'been',
      explanation: 'Continuous state from the past until now in the report.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'Our findings have' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'that HTTPS is not properly enforced.' }
      ],
      options: ['shown', 'been showing', 'shown OR been showing'],
      correctAnswer: 'shown',
      explanation: 'Specific findings reported with Present Perfect Simple.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The organization has not' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'multi-factor authentication yet.' }
      ],
      options: ['deployed', 'been deploying', 'deployed OR been deploying'],
      correctAnswer: 'deployed',
      explanation: 'Specific action that has not been completed, reported with "yet".'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'How many endpoints have you' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'during this assessment?' }
      ],
      options: ['compromised', 'been compromising', 'compromised OR been compromising'],
      correctAnswer: 'compromised',
      explanation: 'Quantitative question about specific pentesting results.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The API has' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'sensitive data without encryption.' }
      ],
      options: ['exposed', 'been exposing', 'exposed OR been exposing'],
      correctAnswer: 'been exposing',
      explanation: 'Problematic continuous activity identified during the assessment.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'We have' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'all recommended security patches successfully.' }
      ],
      options: ['applied', 'been applying', 'applied OR been applying'],
      correctAnswer: 'applied',
      explanation: 'Completed action reported in the remediation report.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The penetration test has' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'numerous SQL injection points.' }
      ],
      options: ['revealed', 'been revealing', 'revealed OR been revealing'],
      correctAnswer: 'revealed',
      explanation: 'Findings revealed during the test, typical use in reports.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'Security headers have not' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'configured on the web server.' }
      ],
      options: ['been', 'been being', 'is'],
      correctAnswer: 'been',
      explanation: 'Negative state identified in security assessment.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The pentester has just' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'root access on the target system.' }
      ],
      options: ['gained', 'been gaining', 'gained OR been gaining'],
      correctAnswer: 'gained',
      explanation: 'Recent specific achievement in pentesting with "just".'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'Session management has' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'vulnerable throughout the application.' }
      ],
      options: ['been', 'been being', 'is'],
      correctAnswer: 'been',
      explanation: 'Persistent vulnerability identified throughout the system.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'Have you' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'the scope of the penetration test?' }
      ],
      options: ['defined', 'been defining', 'defined OR been defining'],
      correctAnswer: 'defined',
      explanation: 'Question about a specific task completed before the test.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The client has' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'all critical findings from last year.' }
      ],
      options: ['remediated', 'been remediating', 'remediated OR been remediating'],
      correctAnswer: 'remediated',
      explanation: 'Completed action of vulnerability remediation reported.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'Nmap has' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: '23 open ports on the target.' }
      ],
      options: ['discovered', 'been discovering', 'discovered OR been discovering'],
      correctAnswer: 'discovered',
      explanation: 'Specific reconnaissance result with tool.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The security team has' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'incident response procedures since the breach.' }
      ],
      options: ['improved', 'been improving', 'improved OR been improving'],
      correctAnswer: 'been improving',
      explanation: 'Continuous improvement process since a past event.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'Default credentials have' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'found on multiple devices.' }
      ],
      options: ['been', 'been being', 'is'],
      correctAnswer: 'been',
      explanation: 'Passive finding reported in security assessment.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'How long has the vulnerability' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'in production?' }
      ],
      options: ['existed', 'been existing', 'existed OR been existing'],
      correctAnswer: 'existed',
      explanation: 'Question about duration of a vulnerability in the system.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The exploit has' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'against the test environment successfully.' }
      ],
      options: ['worked', 'been working', 'worked OR been working'],
      correctAnswer: 'worked',
      explanation: 'Successful exploit test result reported.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'Metasploit has' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'the most reliable framework for exploitation.' }
      ],
      options: ['proven', 'been proving', 'proven OR been proving'],
      correctAnswer: 'proven',
      explanation: 'Evaluation based on accumulated experience with the tool.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The assessment has' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'weak password policies across the organization.' }
      ],
      options: ['uncovered', 'been uncovering', 'uncovered OR been uncovering'],
      correctAnswer: 'uncovered',
      explanation: 'Specific finding discovered during the evaluation.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'We have never' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'such poor segmentation in a corporate network.' }
      ],
      options: ['seen', 'been seeing', 'seen OR been seeing'],
      correctAnswer: 'seen',
      explanation: 'Experiencia extrema reportada sin tiempo specific.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The target has' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'to our port scanning attempts.' }
      ],
      options: ['responded', 'been responding', 'responded OR been responding'],
      correctAnswer: 'responded',
      explanation: 'Specific action by the target during reconnaissance.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'Security awareness training has not' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'conducted for employees this year.' }
      ],
      options: ['been', 'been being', 'is'],
      correctAnswer: 'been',
      explanation: 'Lack of action identified in controls review.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The vulnerability has' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'in the OWASP Top 10 for five years.' }
      ],
      options: ['been', 'been being', 'is'],
      correctAnswer: 'been',
      explanation: 'Continuous state of a known vulnerability.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'Attackers have' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'this technique since 2020.' }
      ],
      options: ['exploited', 'been exploiting', 'exploited OR been exploiting'],
      correctAnswer: 'been exploiting',
      explanation: 'Continuous activity by attackers from a point in the past.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The report has' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: '12 high-severity findings.' }
      ],
      options: ['documented', 'been documenting', 'documented OR been documenting'],
      correctAnswer: 'documented',
      explanation: 'Completed action of documenting findings in the report.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'CSRF tokens have not' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'implemented on critical forms.' }
      ],
      options: ['been', 'been being', 'is'],
      correctAnswer: 'been',
      explanation: 'Missing security control identified in the test.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The blue team has' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'our activities within 15 minutes.' }
      ],
      options: ['detected', 'been detecting', 'detected OR been detecting'],
      correctAnswer: 'detected',
      explanation: 'Detection capability demonstrated during the exercise.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'We have' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'command injection in three different endpoints.' }
      ],
      options: ['confirmed', 'been confirming', 'confirmed OR been confirming'],
      correctAnswer: 'confirmed',
      explanation: 'Specific verification of vulnerability at multiple points.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The engagement has' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'longer than expected due to scope changes.' }
      ],
      options: ['taken', 'been taking', 'taken OR been taking'],
      correctAnswer: 'taken',
      explanation: 'Project duration reported with justification.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'Rate limiting has never' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'on the authentication endpoint.' }
      ],
      options: ['existed', 'been existing', 'existed OR been existing'],
      correctAnswer: 'existed',
      explanation: 'Complete absence of security control reported.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The security posture has' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'significantly since last assessment.' }
      ],
      options: ['improved', 'been improving', 'improved OR been improving'],
      correctAnswer: 'improved',
      explanation: 'Positive change compared to previous assessment.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'Sensitive data has' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'stored in plain text in the database.' }
      ],
      options: ['been', 'been being', 'is'],
      correctAnswer: 'been',
      explanation: 'Insecure practice identified in data review.'
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
      explanation: 'We use Present Perfect Continuous "have been scanning" to emphasize the duration of an action that began in the past and continues until now.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'She' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'Python for exploit development for five years.' }
      ],
      options: ['has been learning', 'has learned', 'is learning'],
      correctAnswer: 'has been learning',
      explanation: 'We use "has been learning" to emphasize the continuous activity during the five years.'
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
      explanation: 'We ask with "How long have you been working" about the duration of working on this exploit.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'They' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'password hashes all day.' }
      ],
      options: ['have been cracking', 'have cracked', 'are cracking'],
      correctAnswer: 'have been cracking',
      explanation: 'We use "have been cracking" to emphasize the continuous activity throughout the entire day.'
    },
    {
      sentenceParts: [
        { type: 'text', content: "My eyes hurt. I've" },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'network traffic for hours.' }
      ],
      options: ['been monitoring', 'monitored', 'monitoring'],
      correctAnswer: 'been monitoring',
      explanation: 'We use Present Perfect Continuous to explain the cause of tired eyes (recent continuous activity).'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'He' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'bug bounty hunting regularly lately.' }
      ],
      options: ['has been doing', 'has done', 'does'],
      correctAnswer: 'has been doing',
      explanation: 'We use "has been doing" with "lately" for a repeated activity in the recent period.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'How long' },
        { type: 'input', content: '' },
        { type: 'text', content: '(you/wait) for the exploit to compile?' }
      ],
      correctAnswer: ['have you been waiting'],
      explanation: 'Present Perfect Continuous question: How long + have/has + subject + been + verb-ing. We ask about the duration of an action that continues.'
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
      explanation: 'We ask "What have you been debugging?" to understand the cause of tiredness (recent activity).'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'We' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'this penetration test for months.' }
      ],
      options: ['have been planning', 'have planned', 'are planning'],
      correctAnswer: 'have been planning',
      explanation: 'We use "have been planning" to emphasize the continuous planning process during months.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The security alerts' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'all morning!' }
      ],
      options: ['have been triggering', 'have triggered', 'are triggering'],
      correctAnswer: 'have been triggering',
      explanation: 'We use "have been triggering" to emphasize how annoying a repeated action is throughout the entire morning.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'I' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'to establish a reverse shell all week.' }
      ],
      options: ['have been trying', 'have tried', 'am trying'],
      correctAnswer: 'have been trying',
      explanation: 'We use "have been trying" to emphasize the repeated attempts throughout the entire week.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The red team has' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'enumeration techniques since the engagement started.' }
      ],
      options: ['been using', 'used', 'using'],
      correctAnswer: 'been using',
      explanation: 'Continuous activity from the start of the engagement until now.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'How long have you' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'brute-force attacks on the login page?' }
      ],
      options: ['been running', 'run', 'running'],
      correctAnswer: 'been running',
      explanation: 'Question about duration of continuous pentesting activity.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'Wireshark has' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'packets for the last 3 hours.' }
      ],
      options: ['been capturing', 'captured', 'capturing'],
      correctAnswer: 'been capturing',
      explanation: 'Continuous capture process during specific period.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The honeypot has' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'attacker behavior patterns all month.' }
      ],
      options: ['been recording', 'recorded', 'recording'],
      correctAnswer: 'been recording',
      explanation: 'Continuous monitoring activity throughout the entire month.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'We have' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'SQLMap against the database since morning.' }
      ],
      options: ['been running', 'run', 'running'],
      correctAnswer: 'been running',
      explanation: 'Continuous tool execution since morning.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'What have you' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'with Metasploit for so long?' }
      ],
      options: ['been doing', 'done', 'doing'],
      correctAnswer: 'been doing',
      explanation: 'Question about recent continuous activity with tool.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The IDS has' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'false positives throughout the test.' }
      ],
      options: ['been generating', 'generated', 'generating'],
      correctAnswer: 'been generating',
      explanation: 'Continuous problem throughout the entire test duration.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'Attackers have' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'the network perimeter for days.' }
      ],
      options: ['been probing', 'probed', 'probing'],
      correctAnswer: 'been probing',
      explanation: 'Continuous malicious activity over several days.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The SOC team has' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'alerts 24/7 for weeks.' }
      ],
      options: ['been monitoring', 'monitored', 'monitoring'],
      correctAnswer: 'been monitoring',
      explanation: 'Continuous uninterrupted monitoring for weeks.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'I have' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'this vulnerability research for months.' }
      ],
      options: ['been conducting', 'conducted', 'conducting'],
      correctAnswer: 'been conducting',
      explanation: 'Continuous investigation over an extended period.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The payload has' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'in the background since deployment.' }
      ],
      options: ['been executing', 'executed', 'executing'],
      correctAnswer: 'been executing',
      explanation: 'Continuous execution since deployment.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'How long has the backdoor' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'on the server?' }
      ],
      options: ['been running', 'run', 'running'],
      correctAnswer: 'been running',
      explanation: 'Question about duration of system compromise.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'We have' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'different injection vectors all afternoon.' }
      ],
      options: ['been testing', 'tested', 'testing'],
      correctAnswer: 'been testing',
      explanation: 'Continuous testing throughout the entire afternoon.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The cryptominer has' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'CPU resources for weeks undetected.' }
      ],
      options: ['been consuming', 'consumed', 'consuming'],
      correctAnswer: 'been consuming',
      explanation: 'Continuous malicious activity without detection.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'Security researchers have' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'this exploit chain since disclosure.' }
      ],
      options: ['been analyzing', 'analyzed', 'analyzing'],
      correctAnswer: 'been analyzing',
      explanation: 'Continuous analysis since disclosure.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The C2 server has' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'commands to infected hosts continuously.' }
      ],
      options: ['been sending', 'sent', 'sending'],
      correctAnswer: 'been sending',
      explanation: 'Continuous command and control communication.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'What techniques have they' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'for privilege escalation?' }
      ],
      options: ['been using', 'used', 'using'],
      correctAnswer: 'been using',
      explanation: 'Question about techniques employed during the attack.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The fuzzer has' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'inputs for hours without crash.' }
      ],
      options: ['been generating', 'generated', 'generating'],
      correctAnswer: 'been generating',
      explanation: 'Continuous fuzzing process for hours.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'Threat actors have' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'APT techniques increasingly.' }
      ],
      options: ['been adopting', 'adopted', 'adopting'],
      correctAnswer: 'been adopting',
      explanation: 'Continuous trend observed in threat intelligence.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The vulnerability scanner has' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'the entire subnet since midnight.' }
      ],
      options: ['been scanning', 'scanned', 'scanning'],
      correctAnswer: 'been scanning',
      explanation: 'Continuous scanning from midnight until now.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'I have' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'to reverse engineer this malware for days.' }
      ],
      options: ['been trying', 'tried', 'trying'],
      correctAnswer: 'been trying',
      explanation: 'Continuous reverse engineering effort.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The EDR has' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'suspicious processes constantly.' }
      ],
      options: ['been detecting', 'detected', 'detecting'],
      correctAnswer: 'been detecting',
      explanation: 'Continuous detection by endpoint system.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'How long have you' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'hash cracking with Hashcat?' }
      ],
      options: ['been doing', 'done', 'doing'],
      correctAnswer: 'been doing',
      explanation: 'Question about duration of cracking activity.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The pentester has' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'Active Directory enumeration all day.' }
      ],
      options: ['been performing', 'performed', 'performing'],
      correctAnswer: 'been performing',
      explanation: 'Continuous enumeration throughout the entire day.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'Automated scanners have' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'our WAF since last week.' }
      ],
      options: ['been testing', 'tested', 'testing'],
      correctAnswer: 'been testing',
      explanation: 'Continuous automated testing since last week.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The organization has' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'its security infrastructure gradually.' }
      ],
      options: ['been hardening', 'hardened', 'hardening'],
      correctAnswer: 'been hardening',
      explanation: 'Continuous security hardening process.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'Malicious actors have' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'phishing campaigns targeting employees.' }
      ],
      options: ['been launching', 'launched', 'launching'],
      correctAnswer: 'been launching',
      explanation: 'Ongoing continuous phishing campaigns.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The security team has' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'threat hunting exercises regularly.' }
      ],
      options: ['been conducting', 'conducted', 'conducting'],
      correctAnswer: 'been conducting',
      explanation: 'Regular continuous threat hunting activity.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'What payloads have you' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'against the IDS?' }
      ],
      options: ['been deploying', 'deployed', 'deploying'],
      correctAnswer: 'been deploying',
      explanation: 'Question about continuous testing activity.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The malware has' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'laterally across the network.' }
      ],
      options: ['been spreading', 'spread', 'spreading'],
      correctAnswer: 'been spreading',
      explanation: 'Continuous malware propagation across the network.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'I have' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'source code for vulnerabilities for hours.' }
      ],
      options: ['been reviewing', 'reviewed', 'reviewing'],
      correctAnswer: 'been reviewing',
      explanation: 'Continuous source code review.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The target has' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'unusually since we started reconnaissance.' }
      ],
      options: ['been behaving', 'behaved', 'behaving'],
      correctAnswer: 'been behaving',
      explanation: 'Continuous anomalous behavior since reconnaissance.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'Cybercriminals have' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'ransomware-as-a-service models.' }
      ],
      options: ['been developing', 'developed', 'developing'],
      correctAnswer: 'been developing',
      explanation: 'Continuous development of criminal business models.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The SIEM has' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'correlation rules since the upgrade.' }
      ],
      options: ['been refining', 'refined', 'refining'],
      correctAnswer: 'been refining',
      explanation: 'Continuous refinement process since update.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'How long has the APT group' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'in our infrastructure?' }
      ],
      options: ['been operating', 'operated', 'operating'],
      correctAnswer: 'been operating',
      explanation: 'Question about duration of APT presence.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'We have' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'OSINT techniques throughout the engagement.' }
      ],
      options: ['been applying', 'applied', 'applying'],
      correctAnswer: 'been applying',
      explanation: 'Continuous application of OSINT techniques.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The botnet has' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'in size exponentially.' }
      ],
      options: ['been growing', 'grown', 'growing'],
      correctAnswer: 'been growing',
      explanation: 'Continuous growth observed in analysis.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'Security vendors have' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'signatures for this threat.' }
      ],
      options: ['been updating', 'updated', 'updating'],
      correctAnswer: 'been updating',
      explanation: 'Continuous update of threat signatures.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The persistence mechanism has' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'across system reboots successfully.' }
      ],
      options: ['been surviving', 'survived', 'surviving'],
      correctAnswer: 'been surviving',
      explanation: 'Continuous persistence demonstrated through reboots.'
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
      explanation: 'We use Past Continuous "was monitoring" for an action in progress interrupted by another action in the past.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'They' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'a penetration test at 3 PM yesterday.' }
      ],
      options: ['were conducting', 'conducted', 'conduct'],
      correctAnswer: 'were conducting',
      explanation: 'We use "were conducting" to describe an action that was in progress at a specific time in the past.'
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
      explanation: 'We ask "What were you doing" about an action in progress at a specific moment in the past.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The DDoS attack' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'when we shut down the server.' }
      ],
      options: ['was happening', 'happened', 'happens'],
      correctAnswer: 'was happening',
      explanation: 'We use "was happening" to describe an attack that was in progress when another action occurred.'
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
      explanation: 'We use Past Continuous for two simultaneous actions in progress in the past.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'We' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'a vulnerability scan when the power went out.' }
      ],
      options: ['were running', 'ran', 'run'],
      correctAnswer: 'were running',
      explanation: 'We use "were running" for an action in progress that was interrupted (power outage).'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'He' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'to music all afternoon.' }
      ],
      options: ['was listening', 'listened', 'listens'],
      correctAnswer: 'was listening',
      explanation: 'We use "was listening" for a continuous activity during a specific period in the past.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'At 8 PM yesterday, we' },
        { type: 'input', content: '' },
        { type: 'text', content: '(have) dinner with friends.' }
      ],
      correctAnswer: ['were having'],
      explanation: 'Past Continuous: was/were + verb-ing. We use "were having" to describe an action in progress at a specific time in the past.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'What' },
        { type: 'input', content: '' },
        { type: 'text', content: '(you/do) when I called you?' }
      ],
      correctAnswer: ['were you doing'],
      explanation: 'Past Continuous question: What + was/were + subject + verb-ing. We ask about an action in progress when another occurred (the call).'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The children' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'in the park this morning.' }
      ],
      options: ['were playing', 'played', 'play'],
      correctAnswer: 'were playing',
      explanation: 'We use "were playing" to describe an activity in progress during the morning.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'I' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'about you just now!' }
      ],
      options: ['was thinking', 'thought', 'think'],
      correctAnswer: 'was thinking',
      explanation: 'We use "was thinking" for a mental activity that was in progress just before now.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'They' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'to the radio when I arrived.' }
      ],
      options: ['were listening', 'listened', 'listen'],
      correctAnswer: 'were listening',
      explanation: 'We use "were listening" for an action in progress when I arrived (another action).'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The security analyst' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'logs when the alert triggered.' }
      ],
      options: ['was reviewing', 'reviewed', 'reviews'],
      correctAnswer: 'was reviewing',
      explanation: 'Action in progress interrupted by the alert in report.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'At 2 AM, the attacker' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'credentials from memory.' }
      ],
      options: ['was extracting', 'extracted', 'extracts'],
      correctAnswer: 'was extracting',
      explanation: 'Activity in progress at specific moment of the attack.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'What' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'the firewall doing at the time of breach?' }
      ],
      options: ['was', 'were', 'is'],
      correctAnswer: 'was',
      explanation: 'Question about firewall state during incident.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'While we' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'the perimeter, they discovered the backdoor.' }
      ],
      options: ['were testing', 'tested', 'test'],
      correctAnswer: 'were testing',
      explanation: 'Two simultaneous actions during pentesting.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The IDS' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'when we performed the attack.' }
      ],
      options: ['was sleeping', 'slept', 'sleeps'],
      correctAnswer: 'was sleeping',
      explanation: 'IDS state during attack execution.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'At midnight, the malware' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'files silently.' }
      ],
      options: ['was encrypting', 'encrypted', 'encrypts'],
      correctAnswer: 'was encrypting',
      explanation: 'Ransomware activity in progress at specific moment.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The SOC team' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'the incident when I called.' }
      ],
      options: ['was investigating', 'investigated', 'investigates'],
      correctAnswer: 'was investigating',
      explanation: 'Investigation in progress interrupted by call.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'While the backup' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'running, the system crashed.' }
      ],
      options: ['was', 'were', 'is'],
      correctAnswer: 'was',
      explanation: 'Process running when the failure occurred.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'What commands' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'the attacker executing at 3 PM?' }
      ],
      options: ['was', 'were', 'is'],
      correctAnswer: 'was',
      explanation: 'Question about specific attacker activity.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The proxy logs show users' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'malicious sites yesterday.' }
      ],
      options: ['were visiting', 'visited', 'visit'],
      correctAnswer: 'were visiting',
      explanation: 'Activity in progress detected in logs.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'During the assessment, we' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'lateral movement techniques.' }
      ],
      options: ['were employing', 'employed', 'employ'],
      correctAnswer: 'were employing',
      explanation: 'Techniques in use during the assessment.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The database' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'when the SQL injection occurred.' }
      ],
      options: ['was responding', 'responded', 'responds'],
      correctAnswer: 'was responding',
      explanation: 'Database state during the attack.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'At the time of compromise, administrators' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'the patch.' }
      ],
      options: ['were deploying', 'deployed', 'deploy'],
      correctAnswer: 'were deploying',
      explanation: 'Action in progress during the compromise.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The pentester' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'Nmap when the target went offline.' }
      ],
      options: ['was running', 'ran', 'runs'],
      correctAnswer: 'was running',
      explanation: 'Scan in progress interrupted by target going offline.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'While authentication' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'failing, attackers gained access.' }
      ],
      options: ['was', 'were', 'is'],
      correctAnswer: 'was',
      explanation: 'Failure context during exploitation.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'What' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'the endpoint protection doing during infection?' }
      ],
      options: ['was', 'were', 'is'],
      correctAnswer: 'was',
      explanation: 'Question about protection state during incident.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The red team' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'Active Directory when blue team detected them.' }
      ],
      options: ['was enumerating', 'enumerated', 'enumerates'],
      correctAnswer: 'was enumerating',
      explanation: 'Enumeration in progress when they were detected.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'Network traffic' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'suspiciously high at 4 AM.' }
      ],
      options: ['was running', 'ran', 'runs'],
      correctAnswer: 'was running',
      explanation: 'Anomalous traffic at specific moment reported.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'While I' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'the report, new vulnerabilities emerged.' }
      ],
      options: ['was writing', 'wrote', 'write'],
      correctAnswer: 'was writing',
      explanation: 'Writing in progress when findings emerged.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The C2 server' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'instructions when we blocked it.' }
      ],
      options: ['was sending', 'sent', 'sends'],
      correctAnswer: 'was sending',
      explanation: 'Communication in progress at the moment of blocking.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'At 5 PM yesterday, the team' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'privilege escalation vectors.' }
      ],
      options: ['was researching', 'researched', 'researches'],
      correctAnswer: 'was researching',
      explanation: 'Research in progress at specific moment.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The exploit' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'when antivirus caught it.' }
      ],
      options: ['was executing', 'executed', 'executes'],
      correctAnswer: 'was executing',
      explanation: 'Execution interrupted by AV detection.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'What tools' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'you using during reconnaissance?' }
      ],
      options: ['were', 'was', 'are'],
      correctAnswer: 'were',
      explanation: 'Question about tools in use during phase.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The victim' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'credentials when phishing link was clicked.' }
      ],
      options: ['was entering', 'entered', 'enters'],
      correctAnswer: 'was entering',
      explanation: 'Victim action in progress during attack.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'While defenders' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'focused on one attack, another began.' }
      ],
      options: ['were', 'was', 'are'],
      correctAnswer: 'were',
      explanation: 'Distraction during multi-vector attack.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The fuzzer' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'when it found the crash.' }
      ],
      options: ['was running', 'ran', 'runs'],
      correctAnswer: 'was running',
      explanation: 'Fuzzing in progress when vulnerability was found.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'At the moment of breach, logging' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'disabled.' }
      ],
      options: ['was', 'were', 'is'],
      correctAnswer: 'was',
      explanation: 'Critical logging state during incident.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The administrator' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'when the ransomware struck.' }
      ],
      options: ['was sleeping', 'slept', 'sleeps'],
      correctAnswer: 'was sleeping',
      explanation: 'Attack timing during non-business hours.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'Data' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'exfiltrating slowly over weeks.' }
      ],
      options: ['was', 'were', 'is'],
      correctAnswer: 'was',
      explanation: 'Continuous exfiltration over extended period.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'What' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'the EDR reporting at time of infection?' }
      ],
      options: ['was', 'were', 'is'],
      correctAnswer: 'was',
      explanation: 'Question about telemetry during compromise.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The payload' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'obfuscation techniques when analyzed.' }
      ],
      options: ['was using', 'used', 'uses'],
      correctAnswer: 'was using',
      explanation: 'Technique in use discovered during analysis.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'While CVE details' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'being published, exploitation began.' }
      ],
      options: ['were', 'was', 'are'],
      correctAnswer: 'were',
      explanation: 'Exploitation initiated during disclosure.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The honeypot' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'attacks when researchers checked it.' }
      ],
      options: ['was logging', 'logged', 'logs'],
      correctAnswer: 'was logging',
      explanation: 'Active logging during honeypot review.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'At that time, the organization' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'their incident response plan.' }
      ],
      options: ['was updating', 'updated', 'updates'],
      correctAnswer: 'was updating',
      explanation: 'Update in progress at relevant moment.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The malware' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'for C2 connection when firewall blocked it.' }
      ],
      options: ['was attempting', 'attempted', 'attempts'],
      correctAnswer: 'was attempting',
      explanation: 'Attempt in progress interrupted by firewall.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'What indicators' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'showing up during the attack?' }
      ],
      options: ['were', 'was', 'are'],
      correctAnswer: 'were',
      explanation: 'Question about IOCs present during incident.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'Threat intelligence feeds' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'this campaign when we saw it.' }
      ],
      options: ['were tracking', 'tracked', 'track'],
      correctAnswer: 'were tracking',
      explanation: 'Ongoing tracking of malicious campaign.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The vulnerability' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'actively when patch released.' }
      ],
      options: ['was being exploited', 'exploited', 'exploits'],
      correctAnswer: 'was being exploited',
      explanation: 'Active exploitation at time of patch.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'During the purple team exercise, both sides' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'effectively.' }
      ],
      options: ['were communicating', 'communicated', 'communicate'],
      correctAnswer: 'were communicating',
      explanation: 'Communication in progress during exercise.'
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
      explanation: 'We use Past Perfect "had left" for an action that occurred before another action in the past (before I arrived).'
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
      explanation: 'We use "had never tried" for an experience (or lack thereof) before a specific moment in the past.'
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
      explanation: 'We use "had just finished" for an action recently completed before another action in the past.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'They' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'for hours before they found the place.' }
      ],
      options: ['had been driving', 'had driven', 'drove'],
      correctAnswer: 'had been driving',
      explanation: 'We use Past Perfect Continuous to emphasize the duration of an action before finding the place.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'He was tired because he' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'well.' }
      ],
      options: ["hadn't slept", "didn't sleep", "hasn't slept"],
      correctAnswer: "hadn't slept",
      explanation: 'We use "hadn\'t slept" to explain the cause (in the past) of being tired.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'We' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'the movie before, so we watched it again.' }
      ],
      options: ['had seen', 'saw', 'have seen'],
      correctAnswer: 'had seen',
      explanation: 'We use "had seen" for an experience that occurred before seeing it again.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'When I got home, I realized I' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'my keys at work.' }
      ],
      options: ['had left', 'left', 'have left'],
      correctAnswer: 'had left',
      explanation: 'We use "had left" because leaving the keys occurred before arriving home and realizing.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'She' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'English before she moved to London.' }
      ],
      options: ['had studied', 'studied', 'has studied'],
      correctAnswer: 'had studied',
      explanation: 'We use "had studied" for an action (studying) that occurred before another action (moving).'
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
      explanation: 'We use "had already left" because the train left before we arrived.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'I' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'my homework before I went out.' }
      ],
      options: ['had finished', 'finished', 'have finished'],
      correctAnswer: 'had finished',
      explanation: 'We use "had finished" because finishing homework occurred before going out.'
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
      explanation: 'We use Past Perfect Continuous to emphasize the duration of waiting before she arrived.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'They' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'for 5 years before they got married.' }
      ],
      options: ['had been dating', 'had dated', 'were dating'],
      correctAnswer: 'had been dating',
      explanation: 'We use "had been dating" to emphasize the duration of 5 years before the marriage.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'She was exhausted because she' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'all night.' }
      ],
      options: ['had been studying', 'had studied', 'was studying'],
      correctAnswer: 'had been studying',
      explanation: 'We use "had been studying" to explain the cause of tiredness (continuous activity before).'
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
      explanation: 'We ask about the duration of studying English before moving (Past Perfect Continuous).'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'He' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'for hours when it finally stopped.' }
      ],
      options: ['had been raining', 'had rained', 'was raining'],
      correctAnswer: 'had been raining',
      explanation: 'We use "had been raining" to emphasize the duration of rain before it stopped.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'We' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'there for months before we found out.' }
      ],
      options: ['had been living', 'had lived', 'were living'],
      correctAnswer: 'had been living',
      explanation: 'We use "had been living" to emphasize the duration of living there before the discovery.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'My legs ached because I' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'all day.' }
      ],
      options: ['had been walking', 'had walked', 'was walking'],
      correctAnswer: 'had been walking',
      explanation: 'We use "had been walking" to explain the cause of pain (walking all day before).'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'They' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'for the test for weeks.' }
      ],
      options: ['had been preparing', 'had prepared', 'were preparing'],
      correctAnswer: 'had been preparing',
      explanation: 'We use "had been preparing" to emphasize the continuous preparation process for weeks.'
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
      explanation: 'We use Future Perfect Continuous to emphasize the duration (10 years) that will be completed in the future.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'By the time you arrive, I' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'for 3 hours.' }
      ],
      options: ['will have been waiting', 'will have waited', 'will be waiting'],
      correctAnswer: 'will have been waiting',
      explanation: 'We use "will have been waiting" to emphasize the duration of waiting when you arrive.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'She' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'English for 5 years by December.' }
      ],
      options: ['will have been studying', 'will have studied', 'will be studying'],
      correctAnswer: 'will have been studying',
      explanation: 'We use "will have been studying" to emphasize the continuous duration until December.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'They' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'for 20 years next month.' }
      ],
      options: ['will have been married', 'will have married', 'will be married'],
      correctAnswer: 'will have been married',
      explanation: 'We use "will have been married" for a period of 20 years that will be completed next month.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'By 6 PM, we' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'for 8 hours straight.' }
      ],
      options: ['will have been working', 'will have worked', 'will be working'],
      correctAnswer: 'will have been working',
      explanation: 'We use "will have been working" to emphasize 8 continuous hours of work until 6 PM.'
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
      explanation: 'We use "studies" because it is third person singular (she) and Present Simple requires adding -es/-s to the verb. Describes a habitual routine.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'They' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'in New York.' }
      ],
      options: ['lives', 'live', 'living'],
      correctAnswer: 'live',
      explanation: 'We use "live" because "they" is plural and in Present Simple we don\'t add -s. Describes a permanent state.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'Water' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'at 100 degrees Celsius.' }
      ],
      options: ['boil', 'boils', 'boiling'],
      correctAnswer: 'boils',
      explanation: 'We use "boils" because "water" is third person singular and describes a universal truth or scientific fact.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'I' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'coffee in the morning.' }
      ],
      options: ['drinks', 'drink', 'drinking'],
      correctAnswer: 'drink',
      explanation: 'We use "drink" because "I" doesn\'t require -s in Present Simple. Describes a regular habit.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'He usually' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'to work by bus.' }
      ],
      options: ['go', 'goes', 'going'],
      correctAnswer: 'goes',
      explanation: 'We use "goes" because "he" is third person singular. "Usually" indicates a habitual action, typical of Present Simple.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The sun' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'in the east.' }
      ],
      options: ['rise', 'rises', 'rising'],
      correctAnswer: 'rises',
      explanation: 'We use "rises" because it\'s a universal truth. "The sun" is third person singular.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'My parents' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'in the countryside.' }
      ],
      options: ['lives', 'live', 'living'],
      correctAnswer: 'live',
      explanation: 'We use "live" because "my parents" is plural and describes a permanent state.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The store' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'at 9 AM every day.' }
      ],
      options: ['open', 'opens', 'opening'],
      correctAnswer: 'opens',
      explanation: 'We use "opens" because "the store" is third person singular and describes a regular schedule.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'Dogs' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'bones.' }
      ],
      options: ['like', 'likes', 'liking'],
      correctAnswer: 'like',
      explanation: 'We use "like" because "dogs" is plural. Describes a general truth about dogs.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'My sister' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'as a doctor.' }
      ],
      options: ['work', 'works', 'working'],
      correctAnswer: 'works',
      explanation: 'We use "works" because "my sister" is third person singular and describes her permanent profession.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'We' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'pizza on Fridays.' }
      ],
      options: ['eat', 'eats', 'eating'],
      correctAnswer: 'eat',
      explanation: 'We use "eat" because "we" is first person plural. Describes a weekly routine.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The Earth' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'around the Sun.' }
      ],
      options: ['revolve', 'revolves', 'revolving'],
      correctAnswer: 'revolves',
      explanation: 'We use "revolves" because it\'s a scientific fact and "the Earth" is third person singular.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'Children' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'toys.' }
      ],
      options: ['love', 'loves', 'loving'],
      correctAnswer: 'love',
      explanation: 'We use "love" because "children" is plural. Describes a general characteristic of children.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'My cat' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'a lot.' }
      ],
      options: ['sleep', 'sleeps', 'sleeping'],
      correctAnswer: 'sleeps',
      explanation: 'We use "sleeps" because "my cat" is third person singular. Describes a cat\'s habit.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'I always' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'my teeth before bed.' }
      ],
      options: ['brush', 'brushes', 'brushing'],
      correctAnswer: 'brush',
      explanation: 'We use "brush" with "I" in Present Simple. "Always" indicates a regular habit.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'She never' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'sugar in her tea.' }
      ],
      options: ['put', 'puts', 'putting'],
      correctAnswer: 'puts',
      explanation: 'We use "puts" because "she" is third person singular. "Never" is used with Present Simple for habits.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The movie' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'at 8 PM tonight.' }
      ],
      options: ['start', 'starts', 'starting'],
      correctAnswer: 'starts',
      explanation: 'We use Present Simple "starts" para horarios fijos programados, incluso cuando hablan del futuro.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'My friends' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'soccer every weekend.' }
      ],
      options: ['play', 'plays', 'playing'],
      correctAnswer: 'play',
      explanation: 'We use "play" because "my friends" is plural. "Every weekend" indicates a regular routine.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'It often' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'in winter here.' }
      ],
      options: ['snow', 'snows', 'snowing'],
      correctAnswer: 'snows',
      explanation: 'We use "snows" because "it" is third person singular. "Often" is used with Present Simple for frequency.'
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
      explanation: 'We use "am watching" (Present Continuous) because "right now" indicates an action that is happening at this moment.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'They' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'dinner at the moment.' }
      ],
      options: ['are cooking', 'cook', 'cooks'],
      correctAnswer: 'are cooking',
      explanation: 'We use "are cooking" because "at the moment" indicates that the action is in progress right now.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'She' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'for her exam these days.' }
      ],
      options: ['is studying', 'studies', 'study'],
      correctAnswer: 'is studying',
      explanation: 'We use "is studying" because "these days" indicates a temporary action that is occurring in the current period.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'Look! It' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'outside.' }
      ],
      options: ['is raining', 'rains', 'rain'],
      correctAnswer: 'is raining',
      explanation: 'We use "is raining" because "Look!" indicates that the action is happening now and we want someone to observe it.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'We' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'on a new project this month.' }
      ],
      options: ['are working', 'work', 'works'],
      correctAnswer: 'are working',
      explanation: 'We use "are working" because "this month" indicates a temporary action in progress during this period.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'Right now, I' },
        { type: 'input', content: '' },
        { type: 'text', content: '(study) for my English test.' }
      ],
      correctAnswer: ['am studying', "'m studying"],
      explanation: 'Present Continuous: am/is/are + verb-ing. We use "am studying" because "right now" indicates an action in progress at this exact moment.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'They' },
        { type: 'input', content: '' },
        { type: 'text', content: '(not/listen) to the teacher right now.' }
      ],
      correctAnswer: ['are not listening', "aren't listening", 'are not listening'],
      explanation: 'Present Continuous negative: am/is/are + not + verb-ing. The action is happening (or not happening) at this moment.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'What' },
        { type: 'input', content: '' },
        { type: 'text', content: '(you/do) this weekend?' }
      ],
      correctAnswer: ['are you doing', "'re you doing"],
      explanation: 'Present Continuous for future plans: What + am/is/are + subject + verb-ing. We ask about already organized plans.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'Be quiet! The baby' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: '.' }
      ],
      options: ['is sleeping', 'sleeps', 'sleep'],
      correctAnswer: 'is sleeping',
      explanation: 'We use "is sleeping" because the action is happening at this moment and we ask for silence for that reason.'
    },
    {
      sentenceParts: [
        { type: 'text', content: "I can't talk now. I" },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'a shower.' }
      ],
      options: ['am taking', 'take', 'takes'],
      correctAnswer: 'am taking',
      explanation: 'We use "am taking" because the action is in progress at this specific moment.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'My friends' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'me tomorrow.' }
      ],
      options: ['are visiting', 'visit', 'visits'],
      correctAnswer: 'are visiting',
      explanation: 'We use Present Continuous for future plans already confirmed with "tomorrow".'
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
      explanation: 'We use "are" with "you" in Present Continuous to ask about an action in progress now.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The children' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'in the garden now.' }
      ],
      options: ['are playing', 'play', 'plays'],
      correctAnswer: 'are playing',
      explanation: 'We use "are playing" because "now" indicates that the action is happening at this moment.'
    },
    {
      sentenceParts: [
        { type: 'text', content: "He's always" },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'his phone!' }
      ],
      options: ['checking', 'check', 'checks'],
      correctAnswer: 'checking',
      explanation: 'We use Present Continuous with "always" to express a complaint about an annoying habit.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The temperature' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'rapidly.' }
      ],
      options: ['is rising', 'rises', 'rise'],
      correctAnswer: 'is rising',
      explanation: 'We use "is rising" to describe a change that is occurring in this period.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'We' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'to Italy this summer.' }
      ],
      options: ['are traveling', 'travel', 'travels'],
      correctAnswer: 'are traveling',
      explanation: 'We use Present Continuous for future plans already organized with "this summer".'
    },
    {
      sentenceParts: [
        { type: 'text', content: "Listen! Someone" },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'at the door.' }
      ],
      options: ['is knocking', 'knocks', 'knock'],
      correctAnswer: 'is knocking',
      explanation: 'We use "is knocking" because "Listen!" indicates that the action is happening right now.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'My English' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'better and better.' }
      ],
      options: ['is getting', 'gets', 'get'],
      correctAnswer: 'is getting',
      explanation: 'We use Present Continuous to describe a gradual change or development in progress.'
    },
    {
      sentenceParts: [
        { type: 'text', content: "You're always" },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'things!' }
      ],
      options: ['forgetting', 'forget', 'forgets'],
      correctAnswer: 'forgetting',
      explanation: 'We use Present Continuous with "always" to criticize a repetitive habit that annoys us.'
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
      explanation: 'We use "are" with "you" to ask about thoughts at this moment.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'Scientists' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'new ways to fight cancer.' }
      ],
      options: ['are developing', 'develop', 'develops'],
      correctAnswer: 'are developing',
      explanation: 'We use Present Continuous for activities in progress in the current period (though not at this exact moment).'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The company' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'new employees next week.' }
      ],
      options: ['is hiring', 'hires', 'hire'],
      correctAnswer: 'is hiring',
      explanation: 'We use Present Continuous for future plans already organized with "next week".'
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
      explanation: 'We use "went" (Past Simple) because "last year" indicates a specific time in the past. The action is completely finished.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'She' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'the exploit development yesterday.' }
      ],
      options: ['completed', 'complete', 'completes'],
      correctAnswer: 'completed',
      explanation: 'We use "completed" because "yesterday" is a past time marker that requires Past Simple.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'They' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'a new security server in 2020.' }
      ],
      options: ['deployed', 'deploy', 'deploys'],
      correctAnswer: 'deployed',
      explanation: 'We use "deployed" because "in 2020" is a specific time in the past and the action is complete.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'Last night, I' },
        { type: 'input', content: '' },
        { type: 'text', content: '(attend) a cybersecurity webinar.' }
      ],
      correctAnswer: ['attended'],
      explanation: 'Past Simple: verb + ed (regular verbs). We use "attended" because "last night" is a specific and completed time in the past.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'What system' },
        { type: 'input', content: '' },
        { type: 'text', content: '(you/compromise) last month?' }
      ],
      correctAnswer: ['did you compromise'],
      explanation: 'Past Simple question: Did + subject + verb (base form). "Did" already indicates the past, that is why the verb goes in base form.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'My friends' },
        { type: 'input', content: '' },
        { type: 'text', content: '(not/come) to my party yesterday.' }
      ],
      correctAnswer: ["didn't come", 'did not come'],
      explanation: 'Past Simple negative: did not (did not) + verb (base form). The action did not occur at a specific time in the past.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'We' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'at that restaurant last week.' }
      ],
      options: ['ate', 'eat', 'eats'],
      correctAnswer: 'ate',
      explanation: 'We use "ate" (Past Simple irregular) because "last week" indicates a finished time in the past.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'He' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'very hard for his exam.' }
      ],
      options: ['studied', 'study', 'studies'],
      correctAnswer: 'studied',
      explanation: 'We use "studied" because the action of studying is completely finished in the past.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'Did you' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'the movie last night?' }
      ],
      options: ['watch', 'watched', 'watches'],
      correctAnswer: 'watch',
      explanation: 'After "Did" we use the verb infinitive without "to". "Did" already indicates the past.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'My grandmother' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'in this house 50 years ago.' }
      ],
      options: ['lived', 'live', 'lives'],
      correctAnswer: 'lived',
      explanation: 'We use "lived" because "50 years ago" is a specific finished time in the past.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The concert' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'at 9 PM.' }
      ],
      options: ['started', 'start', 'starts'],
      correctAnswer: 'started',
      explanation: 'We use Past Simple because we are talking about a specific event that occurred in the past.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'We' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: "see John at the party yesterday. He wasn't there." }
      ],
      options: ["didn't", "don't", "doesn't"],
      correctAnswer: "didn't",
      explanation: 'We use "did not" for the negative form in Past Simple. "Yesterday" confirms that it is past.'
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
      explanation: 'We use "did" to form questions in Past Simple with "last summer".'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'She' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'her keys this morning.' }
      ],
      options: ['lost', 'lose', 'loses'],
      correctAnswer: 'lost',
      explanation: 'We use "lost" (Past Simple irregular) because "this morning" (if already past) is a finished time.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The children' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'in the park all afternoon.' }
      ],
      options: ['played', 'play', 'plays'],
      correctAnswer: 'played',
      explanation: 'We use "played" because the afternoon activity has already finished (it is in the past).'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'I' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'my best friend in college.' }
      ],
      options: ['met', 'meet', 'meets'],
      correctAnswer: 'met',
      explanation: 'We use "met" (Past Simple irregular) because the meeting occurred at a specific time in the past (college).'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'They' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'married in 2015.' }
      ],
      options: ['got', 'get', 'gets'],
      correctAnswer: 'got',
      explanation: 'We use "got" because "in 2015" is a specific date in the past.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The train' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'on time yesterday.' }
      ],
      options: ['arrived', 'arrive', 'arrives'],
      correctAnswer: 'arrived',
      explanation: 'We use "arrived" because "yesterday" indicates a specific and completed moment in the past.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'My father' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'me how to drive when I was 18.' }
      ],
      options: ['taught', 'teach', 'teaches'],
      correctAnswer: 'taught',
      explanation: 'We use "taught" (Past Simple irregular) because the action occurred when I was 18 (specific past).'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'We' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'a great time at the wedding.' }
      ],
      options: ['had', 'have', 'has'],
      correctAnswer: 'had',
      explanation: 'We use "had" because the wedding is a past event that has already finished.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'She' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'a beautiful song at the concert.' }
      ],
      options: ['sang', 'sing', 'sings'],
      correctAnswer: 'sang',
      explanation: 'We use "sang" (Past Simple irregular) because the concert is a complete past event.'
    }
  ],

  'present-perfect-past-simple-2': [
    {
      sentenceParts: [
        { type: 'reorder', content: '' }
      ],
      words: shuffleArray(['yet.', "hasn't", 'started', 'The', 'film']),
      correctAnswer: ['The', 'film', "hasn't", 'started', 'yet.'],
      explanation: 'Present Perfect negative: Subject + have not/has not + past participle. "Yet" is used in negatives and questions to indicate that something has not occurred until now.'
    },
    {
      sentenceParts: [
        { type: 'reorder', content: '' }
      ],
      words: shuffleArray(['you', 'How', 'long', 'did', 'Oxford?', 'stay', 'in']),
      correctAnswer: ['How', 'long', 'did', 'you', 'stay', 'in', 'Oxford?'],
      explanation: 'Past Simple question: How long + did + subject + verb. We use Past Simple because the stay in Oxford has already finished (complete action in the past).'
    },
    {
      sentenceParts: [
        { type: 'reorder', content: '' }
      ],
      words: shuffleArray(['your', 'Have', 'finished', 'homework', 'yet?', 'you']),
      correctAnswer: ['Have', 'you', 'finished', 'your', 'homework', 'yet?'],
      explanation: 'Present Perfect question: Have/Has + subject + past participle. "Yet" in questions means "already" and suggests we expect the action to be complete soon.'
    },
    {
      sentenceParts: [
        { type: 'reorder', content: '' }
      ],
      words: shuffleArray(['arrived', 'Laura', 'the', 'at', 'has', 'just', 'airport.']),
      correctAnswer: ['Laura', 'has', 'just', 'arrived', 'at', 'the', 'airport.'],
      explanation: 'Present Perfect with "just": Subject + has/have + just + past participle. "Just" indicates that the action occurred very recently and is relevant now.'
    },
    {
      sentenceParts: [
        { type: 'reorder', content: '' }
      ],
      words: shuffleArray(['years', 'ago.', 'We', 'here', 'moved', 'three']),
      correctAnswer: ['We', 'moved', 'here', 'three', 'years', 'ago.'],
      explanation: 'Past Simple: Subject + verb (past). We use Past Simple because "ago" always indicates a specific finished time in the past.'
    },
    {
      sentenceParts: [
        { type: 'reorder', content: '' }
      ],
      words: shuffleArray(['been', 'to', 'has', 'USA.', 'Peter', 'never', 'the']),
      correctAnswer: ['Peter', 'has', 'never', 'been', 'to', 'the', 'USA.'],
      explanation: 'Present Perfect with "never": Subject + has/have + never + past participle. "Never" indicates a life experience (never in his entire life until now).'
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
      explanation: 'We use "will execute" (Future Simple) because "tomorrow" indicates a future action. "Will" expresses a decision or promise.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The update' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'deploy at 6 PM.' }
      ],
      options: ['will', "won't", 'is'],
      correctAnswer: 'will',
      explanation: 'We use "will" to express a prediction about the future based on what we believe will happen.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'They' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'to the CTF competition next Friday.' }
      ],
      options: ['will participate', 'participate', 'participated'],
      correctAnswer: 'will participate',
      explanation: 'We use "will participate" because "next Friday" is a specific future time.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The ransomware' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'spread later today.' }
      ],
      options: ['will', "won't", 'is'],
      correctAnswer: 'will',
      explanation: 'We use "will" to make a prediction about future threats based on analysis.'
    },
    {
      sentenceParts: [
        { type: 'text', content: "Don't worry, I" },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'patch the vulnerability.' }
      ],
      options: ['will', "won't", 'am'],
      correctAnswer: 'will',
      explanation: 'We use "will" to express a promise or spontaneous offer of help.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The penetration test' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'start in 10 minutes.' }
      ],
      options: ['will', "won't", 'is'],
      correctAnswer: 'will',
      explanation: 'We use "will" to talk about a scheduled or expected future event.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'I think we' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'win the game.' }
      ],
      options: ['will', "won't", 'are'],
      correctAnswer: 'will',
      explanation: 'We use "will" with "I think" to express an opinion or prediction about the future.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'They' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'be back before midnight.' }
      ],
      options: ['will', "won't", 'are'],
      correctAnswer: 'will',
      explanation: 'We use "will" to make a prediction about when they will return.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'This homework' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'take long.' }
      ],
      options: ["won't", 'will', "isn't"],
      correctAnswer: "won't",
      explanation: 'We use "will not" (will not) to make a negative prediction about the duration.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'Maybe she' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'change her mind.' }
      ],
      options: ['will', "won't", 'is'],
      correctAnswer: 'will',
      explanation: 'We use "will" with "maybe" to express an uncertain future possibility.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'I' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'be 30 next month.' }
      ],
      options: ['will', "won't", 'am'],
      correctAnswer: 'will',
      explanation: 'We use "will" to talk about a future age on a specific date.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The sun' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'rise at 6 AM tomorrow.' }
      ],
      options: ['will', "won't", 'is'],
      correctAnswer: 'will',
      explanation: 'We use "will" for facts or certainties about the future (such as predictable natural events).'
    },
    {
      sentenceParts: [
        { type: 'text', content: "I'm sure you" },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'pass the exam.' }
      ],
      options: ['will', "won't", 'are'],
      correctAnswer: 'will',
      explanation: 'We use "will" with "I\'m sure" to express confidence about a future result.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'Tomorrow, I' },
        { type: 'input', content: '' },
        { type: 'text', content: '(visit) my grandmother.' }
      ],
      correctAnswer: ['will visit', "'ll visit"],
      explanation: 'Future Simple: will + verb (base form). We use "will visit" for a future decision or plan.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'I think it' },
        { type: 'input', content: '' },
        { type: 'text', content: '(rain) tomorrow.' }
      ],
      correctAnswer: ['will rain', "'ll rain"],
      explanation: 'Future Simple with "I think": will + verb. We express a prediction about the future based on our opinion.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'They' },
        { type: 'input', content: '' },
        { type: 'text', content: '(not/be) at home tonight.' }
      ],
      correctAnswer: ['will not be', "won't be", "will not be"],
      explanation: 'Future Simple negative: will not (will not) + verb. We make a negative prediction about the future.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'We' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'have time to finish this today.' }
      ],
      options: ["won't", 'will', 'are'],
      correctAnswer: "won't",
      explanation: 'We use "will not" to make a negative prediction about having enough time.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'He' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'probably be late again.' }
      ],
      options: ['will', "won't", 'is'],
      correctAnswer: 'will',
      explanation: 'We use "will" with "probably" to express a prediction with high probability.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The weather' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'be nice this weekend.' }
      ],
      options: ['will', "won't", 'is'],
      correctAnswer: 'will',
      explanation: 'We use "will" to make a prediction about future weather.'
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
      explanation: 'We use "will be lying" (Future Continuous) because it indicates an action that will be in progress at a specific moment in the future (tomorrow at this time).'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'At 8 PM tonight, we' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'dinner with our friends.' }
      ],
      options: ['will be having', 'will have', 'are having'],
      correctAnswer: 'will be having',
      explanation: 'We use "will be having" because it describes an action that will be in progress at 8 PM (a specific moment in the future).'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'She' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'for the exam all weekend.' }
      ],
      options: ['will be studying', 'will study', 'studies'],
      correctAnswer: 'will be studying',
      explanation: 'We use "will be studying" because it indicates a continuous activity that will occur throughout the entire weekend in the future.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'Next month, they' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'in their new house.' }
      ],
      options: ['will be living', 'will live', 'live'],
      correctAnswer: 'will be living',
      explanation: 'We use "will be living" to emphasize that the action of living will be in progress during next month.'
    },
    {
      sentenceParts: [
        { type: 'text', content: "Don't call me at 10 AM. I" },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'in a meeting.' }
      ],
      options: ['will be', 'will', 'am'],
      correctAnswer: 'will be',
      explanation: 'We use "will be" (Future Continuous with verb "be") because it indicates that the meeting will be in progress at 10 AM.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'This time next year, he' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'in Paris.' }
      ],
      options: ['will be working', 'will work', 'works'],
      correctAnswer: 'will be working',
      explanation: 'We use "will be working" because it emphasizes that the action will be in progress at that specific moment in the future (next year at this time).'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'We' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'the report when you arrive.' }
      ],
      options: ['will be finishing', 'will finish', 'finish'],
      correctAnswer: 'will be finishing',
      explanation: 'We use "will be finishing" because the action of finishing the report will be in progress when you arrive.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'At midnight, people' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'the New Year.' }
      ],
      options: ['will be celebrating', 'will celebrate', 'celebrate'],
      correctAnswer: 'will be celebrating',
      explanation: 'We use "will be celebrating" because it describes an action that will be in progress at midnight.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'Tomorrow afternoon, I' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'to music and relaxing.' }
      ],
      options: ['will be listening', 'will listen', 'listen'],
      correctAnswer: 'will be listening',
      explanation: 'We use "will be listening" to emphasize that these actions will be in progress tomorrow afternoon.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'They' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'for London at this time tomorrow.' }
      ],
      options: ['will be leaving', 'will leave', 'leave'],
      correctAnswer: 'will be leaving',
      explanation: 'We use "will be leaving" because the departure will be in progress tomorrow at this time.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'At 5 PM, the kids' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'their homework.' }
      ],
      options: ['will be doing', 'will do', 'do'],
      correctAnswer: 'will be doing',
      explanation: 'We use "will be doing" because the task will be in progress at 5 PM.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'She' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'at the conference all day Friday.' }
      ],
      options: ['will be speaking', 'will speak', 'speaks'],
      correctAnswer: 'will be speaking',
      explanation: 'We use "will be speaking" because it describes a continuous activity throughout Friday.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'I' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'you at the airport when you land.' }
      ],
      options: ['will be waiting', 'will wait', 'wait'],
      correctAnswer: 'will be waiting',
      explanation: 'We use "will be waiting" because I will be waiting when you land (action in progress at that future moment).'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'Next week, we' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'to our new apartment.' }
      ],
      options: ['will be moving', 'will move', 'move'],
      correctAnswer: 'will be moving',
      explanation: 'We use "will be moving" to emphasize that the move will be an ongoing process next week.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'At noon, the chef' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'lunch for the guests.' }
      ],
      options: ['will be preparing', 'will prepare', 'prepares'],
      correctAnswer: 'will be preparing',
      explanation: 'We use "will be preparing" because the preparation will be in progress at noon.'
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
      explanation: 'We use "will have graduated" (Future Perfect) because the action will be complete before a specific moment in the future (next June).'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'She' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'the book by the time you arrive.' }
      ],
      options: ['will have finished', 'will finish', 'finishes'],
      correctAnswer: 'will have finished',
      explanation: 'We use "will have finished" because the action of finishing the book will be complete before you arrive.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'By 2030, scientists' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'a cure for the disease.' }
      ],
      options: ['will have found', 'will find', 'find'],
      correctAnswer: 'will have found',
      explanation: 'We use "will have found" because we predict that the action will be complete before the year 2030.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'They' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'for 10 years next month.' }
      ],
      options: ['will have been married', 'will be married', 'are married'],
      correctAnswer: 'will have been married',
      explanation: 'We use "will have been married" because the 10-year period will be completed next month.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'By the end of this year, we' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'to five different countries.' }
      ],
      options: ['will have traveled', 'will travel', 'travel'],
      correctAnswer: 'will have traveled',
      explanation: 'We use "will have traveled" because the action of traveling to five countries will be complete at the end of the year.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'I' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'all my exams by Friday.' }
      ],
      options: ['will have completed', 'will complete', 'complete'],
      correctAnswer: 'will have completed',
      explanation: 'We use "will have completed" because all exams will be finished before Friday.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'By tomorrow morning, the builders' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'the wall.' }
      ],
      options: ['will have built', 'will build', 'build'],
      correctAnswer: 'will have built',
      explanation: 'We use "will have built" because the wall will be built before tomorrow morning.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'She' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'dinner by the time we get home.' }
      ],
      options: ['will have cooked', 'will cook', 'cooks'],
      correctAnswer: 'will have cooked',
      explanation: 'We use "will have cooked" because dinner will be prepared before we arrive home.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'He' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'here for 20 years by December.' }
      ],
      options: ['will have worked', 'will work', 'works'],
      correctAnswer: 'will have worked',
      explanation: 'We use "will have worked" because the 20-year period will be completed in December.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'By this time next year, they' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'their new house.' }
      ],
      options: ['will have bought', 'will buy', 'buy'],
      correctAnswer: 'will have bought',
      explanation: 'We use "will have bought" because the purchase will be complete before next year at this time.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'We' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'the project by the deadline.' }
      ],
      options: ['will have finished', 'will finish', 'finish'],
      correctAnswer: 'will have finished',
      explanation: 'We use "will have finished" because the project will be finished before the deadline.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'By 8 PM, I' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'all the dishes.' }
      ],
      options: ['will have washed', 'will wash', 'wash'],
      correctAnswer: 'will have washed',
      explanation: 'We use "will have washed" because the dishes will be washed before 8 PM.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'The company' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: '1000 employees by next year.' }
      ],
      options: ['will have hired', 'will hire', 'hires'],
      correctAnswer: 'will have hired',
      explanation: 'We use "will have hired" because the hiring of 1000 employees will be complete before next year.'
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
      explanation: 'First Conditional: If + Present Simple, will + infinitive. We use "detects" (present simple) in the condition and "will block" (future simple) in the result. Expresses a real and possible situation in the future.'
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
      explanation: 'First Conditional: result + if + condition. "Will be" is the future result and "report" is the condition in present simple. The condition is possible and realistic.'
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
      explanation: 'First Conditional negative: If + don\'t/doesn\'t + verb, will + infinitive. "Don\'t update" is present simple negative and "will get" is the future result.'
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
      explanation: 'First Conditional: If + present simple, will + infinitive. "Bypasses" (third person) + "will need" (future). Possible future situation.'
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
      explanation: 'First Conditional question: What + will + subject + verb + if + present simple. "Will you do" asks about the future and "win" is the condition in present.'
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
      explanation: 'First Conditional: "see" (present simple) describes a possible condition, and "will tell" is the future action that will result from that condition.'
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
      explanation: 'First Conditional: If + present simple, will + infinitive. Expresses a probable consequence of hard work.'
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
      explanation: 'First Conditional: "will go" is the future plan and "is" (present simple) is the condition that must be met.'
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
      explanation: 'First Conditional negative: "doesn\'t eat" (third person) + "will feel". Probable future cause and effect.'
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
      explanation: 'First Conditional: "have" (present) + "will help". Expresses a conditional promise.'
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
      explanation: 'Second Conditional: If + Past Simple, would + infinitive. We use "had" for the hypothetical condition. Describes hypothetical or unlikely situations in the present/future.'
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
      explanation: 'Second Conditional: result + if + condition. "Would get" expresses the hypothetical result and "practiced" (past simple) is the unreal or unlikely condition.'
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
      explanation: 'Second Conditional negative: If + weren\'t + verb, wouldn\'t + infinitive. "Weren\'t" is the negative hypothetical condition and "wouldn\'t exploit" is the result.'
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
      explanation: 'Second Conditional: "won" (past) + "would buy". Hypothetical unlikely situation about winning the lottery.'
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
      explanation: 'Second Conditional negative: "weren\'t" (correct form for all persons) + "would buy".'
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
      explanation: 'Third Conditional: If + Past Perfect, would have + past participle. "Had known" and "would have patched" talk about a past situation that didn\'t occur. Expresses regret or impossible situations to change.'
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
      explanation: 'Third Conditional negative: "wouldn\'t have suffered" (result that didn\'t happen) + "had implemented" (condition that wasn\'t met in the past).'
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
      explanation: 'Third Conditional: "had practiced" + "would have won". Talks about something that didn\'t happen in the past and its result (which also didn\'t occur).'
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
      explanation: 'Third Conditional double negative: "hadn\'t eaten" (didn\'t eat, but did) + "wouldn\'t have gotten" (wouldn\'t have gotten sick, but did).'
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
      explanation: 'Third Conditional: "would have bought" + "had had" (double "had" because it\'s the past perfect of "have"). Talks about a lost opportunity in the past.'
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
      explanation: 'Third Conditional: "had told" + "would have helped". Expresses regret for something that didn\'t happen in the past.'
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
      explanation: 'Third Conditional negative: "wouldn\'t have been" + "had taken". Regrets a past decision that caused being late.'
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
      explanation: 'Third Conditional with modal: "had saved" + "could have afforded". Uses "could" instead of "would" to express lost possibility.'
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
      explanation: 'Third Conditional: "had listened" + "would have avoided". Criticizes a past decision that caused problems.'
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
      explanation: 'Third Conditional: "wouldn\'t have forgotten" + "had reminded". Implies that they forgot because nobody reminded them.'
    }
  ],

  'question-forms': [
    {
      sentenceParts: [
        { type: 'text', content: 'I Should her tell I feel how' },
        { type: 'input', content: '' }
      ],
      correctAnswer: ['Should I tell her how I feel'],
      explanation: 'Modal question: Should + subject + verb + object + how + subject + verb. Questions with modals put the modal before the subject.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'friend known long best have How you your' },
        { type: 'input', content: '' }
      ],
      correctAnswer: ['How long have you known your best friend'],
      explanation: 'Present Perfect question: How long + have + subject + past participle. "How long" asks for duration.'
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
      explanation: 'Present Continuous question: What + are + subject + verb-ing + preposition. "Think about" necesita la preposición at the end.'
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
      explanation: 'Present Simple question: What kind of + noun + does + subject + like + verb-ing + preposition. La preposición "to" va at the end.'
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
      explanation: 'Indirect question: Do you remember + where + subject + verb. The order is affirmative after "where" in indirect questions.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'housework family in Who your the does' },
        { type: 'input', content: '' }
      ],
      correctAnswer: ['Who does the housework in your family'],
      explanation: 'Question with "Who": Who + does + noun + preposition + possessive + noun. "Who" acts as the subject of the question.'
    },
    {
      sentenceParts: [
        { type: 'text', content: 'studying been How you English have long' },
        { type: 'input', content: '' }
      ],
      correctAnswer: ['How long have you been studying English'],
      explanation: 'Present Perfect Continuous question: How long + have + subject + been + verb-ing. Question for the duration of a continuous action.'
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
      explanation: 'Present Continuous question: Why + are + subject + verb-ing. Question sobre la razón de una action in progress.'
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
      explanation: 'Indirect question: what time + subject + verb. The order is affirmative without auxiliary in indirect questions.'
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
      explanation: "We use Present Continuous (is having) because it is a temporary action that is happening now (today). The party is occurring at this specific moment."
    },
    {
      sentenceParts: [
        { type: 'text', content: 'We' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: "round to her house at eight o'clock this evening." }
      ],
      options: ["'re going", "go", "'re go"],
      correctAnswer: "'re going",
      explanation: "We use Present Continuous (are going) because it is a definite future plan. We have a specific time (eight o'clock this evening) for this planned action."
    },
    {
      sentenceParts: [
        { type: 'text', content: 'She' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'her birthday, but this one is special because she\'s thirty!' }
      ],
      options: ["doesn't usually celebrate", "isn't usually celebrating", "don't usually celebrate"],
      correctAnswer: "doesn't usually celebrate",
      explanation: "We use Present Simple negative (does not usually celebrate) because we are talking about a general habit or routine. 'Usually' is a key word that indicates Present Simple."
    },
    {
      sentenceParts: [
        { type: 'text', content: 'After class today I' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'into town to buy her present.' }
      ],
      options: ["'m going", "go", "'m go"],
      correctAnswer: "'m going",
      explanation: "We use Present Continuous (am going) because it is a specific future plan. 'After class today' indicates a concrete intention or plan for the near future."
    },
    {
      sentenceParts: [
        { type: 'text', content: 'I' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: "I'll get her some CDs." }
      ],
      options: ["think", "'m thinking", "thinks"],
      correctAnswer: "think",
      explanation: "We use Present Simple (think) because 'think' is a non-action verb (state verb) when expressing opinion. State verbs are not used in continuous form."
    },
    {
      sentenceParts: [
        { type: 'text', content: 'She really' },
        { type: 'dropdown', content: '' },
        { type: 'text', content: 'music.' }
      ],
      options: ["loves", "'s loving", "love"],
      correctAnswer: "loves",
      explanation: "We use Present Simple (loves) because 'love' is a non-action verb (emotion/feeling verb). State verbs like love, like, hate, etc. are normally not used in continuous form."
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

// Helper function to get the verb tense name in Spanish
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
