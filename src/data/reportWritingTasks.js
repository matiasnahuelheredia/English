// Tareas para entrenar la escritura de informes de pentesting. Cada tarea da un
// escenario (una vulnerabilidad), pide escribir una sección del informe, incluye
// una checklist de lo que debería tener y un modelo de respuesta adaptado del
// informe CompraYa (ejercicio de formación, empresa ficticia).

export const reportWritingTasks = [
  {
    id: 'exec-summary',
    section: 'Executive Summary',
    title: 'Resumen ejecutivo',
    audience: 'non-technical (management)',
    scenario:
      'You tested an e-commerce marketplace and found 7 issues (1 critical, 2 high, 2 medium, 1 low, 1 informational). The most severe was a broken authorization flaw on the Orders API that let one customer read another customer\'s order data. Write the opening of the executive summary for management: what you did, how many findings, and the business impact of the worst one.',
    checklist: [
      'What was tested and how many findings were identified',
      'The most severe finding and its business impact',
      'Written for management: little jargon, focus on risk to the business',
      'Past simple + passive (were identified, was found)',
    ],
    model:
      'During the external web application penetration test, seven findings were identified that threatened the confidentiality and integrity of customer and seller data. The most severe was a broken object level authorization flaw on the public Orders API: by changing a numeric order identifier in an ordinary authenticated request, the tester was able to retrieve another customer’s full order history, shipping address and masked payment details. On a marketplace that handles millions of customer records, this flaw could allow bulk harvesting of personal data and should be prioritized for remediation.',
  },
  {
    id: 'sqli-description',
    section: 'Description (incl. root cause)',
    title: 'Finding: Description — SQL Injection',
    audience: 'technical',
    scenario:
      'The product search endpoint on the seller portal (GET /catalog/search?category=...&sort=price) puts the "category" parameter straight into a SQL query as text, instead of using a bound parameter. Write the Description of this finding, explaining the root cause.',
    checklist: [
      'Name the affected endpoint/parameter',
      'Explain the root cause (string concatenation vs. a bound parameter)',
      'Neutral, factual, passive voice (was concatenated)',
      'Present or past — but consistent',
    ],
    model:
      'The category parameter of the product search endpoint on the seller portal (GET /catalog/search?category=...&sort=price) was concatenated directly into a backend SQL query instead of being passed as a bound parameter. As a result, input supplied in this parameter was interpreted as part of the SQL statement rather than as data.',
  },
  {
    id: 'idor-impact',
    section: 'Security Impact',
    title: 'Finding: Security Impact — IDOR',
    audience: 'technical',
    scenario:
      'The GET /v1/orders/{order_id} endpoint checks that the caller has a valid token, but never checks that the order belongs to that user. Using a low-privilege account, you changed the order_id and read other customers’ orders. Write the Security Impact: what you demonstrated and what it means at scale.',
    checklist: [
      'What you actually did (incremented the order_id, retrieved other orders)',
      'What data was exposed (order history, address, masked card details)',
      'The impact at scale (bulk harvesting of PII)',
      'Conditional for impact: would allow...',
    ],
    model:
      'Using the low-privilege seller account obtained earlier in the engagement, the tester incremented the order_id parameter across a small, deliberately limited range and retrieved other customers’ full order history, shipping address and masked payment card details, none of which belonged to the tester’s own account. At scale, this flaw would allow bulk harvesting of customer personal data across the entire platform.',
  },
  {
    id: 'ssrf-remediation',
    section: 'Remediation',
    title: 'Finding: Remediation — SSRF',
    audience: 'technical',
    scenario:
      'The "import product image from URL" feature fetches any URL the user provides, with no restrictions, and was used to reach the internal cloud metadata service. Write the Remediation: concrete, actionable steps to fix it.',
    checklist: [
      'Actionable imperatives (Restrict..., Block..., Prefer...)',
      'Allow-list of trusted destinations',
      'Block link-local / loopback / private ranges',
      'A defence-in-depth measure (e.g. IMDSv2)',
    ],
    model:
      'Restrict outbound requests from this feature to an explicit allow-list of trusted image-hosting domains. Block requests to link-local (169.254.0.0/16), loopback and private address ranges at the application layer, and prefer IMDSv2 over IMDSv1 on the affected cloud instances as defence in depth.',
  },
  {
    id: 'xss-description',
    section: 'Description (incl. root cause)',
    title: 'Finding: Description — Stored XSS',
    audience: 'technical',
    scenario:
      'The product review form stores the review text exactly as submitted and shows it again to other shoppers and to the internal moderation dashboard, without HTML-encoding it. Write the Description with the root cause.',
    checklist: [
      'Where the input is stored and where it is rendered',
      'Root cause: no HTML-encoding on output',
      'Mention it also reaches internal tools',
      'Passive voice, factual tone',
    ],
    model:
      'The product review submission form stored the review body verbatim and rendered it back to other visitors, and to the internal review-moderation dashboard, without HTML-encoding it on output. Because the stored content was returned unencoded, any HTML or script it contained was executed in the browser of anyone who viewed the review.',
  },
  {
    id: 'jwt-remediation',
    section: 'Remediation',
    title: 'Finding: Remediation — Weak JWT validation',
    audience: 'technical',
    scenario:
      'The API gateway reads the "alg" field from the token header and trusts it, so it accepts tokens with alg=none and no signature. Write the Remediation.',
    checklist: [
      'Hard-code the expected algorithm on the verifier',
      'Reject tokens with a different or "none" algorithm',
      'Rotate the signing key as a precaution',
      'Actionable imperatives',
    ],
    model:
      'Hard-code the single expected signing algorithm (for example RS256) on the verification side and reject any token whose header specifies a different algorithm, rather than trusting the algorithm the token itself claims to use. Rotate the signing key as a precaution and add automated tests that attempt alg=none and algorithm-confusion attacks against the token validation logic.',
  },
];
