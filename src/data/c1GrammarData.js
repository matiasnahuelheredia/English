// Ejercicios de gramática C1 para el Mixed Practice. Cubren los temas C1 de la
// app (inversión, condicionales mixtas, unreal past, discourse markers,
// especulación/deducción, gerundios e infinitivos, distancing, ellipsis, cleft
// y usos de "get"). Mismo formato que B1: desplegable (dd), completar (inp) y
// ordenar (ro). Explicaciones en inglés, como el resto de la gramática.

import { dd, inp, ro } from './exerciseBuilders';

export const c1MixedExercises = {
  // Inversión con negativos/adverbios al principio
  'c1-inversion': [
    dd('Never before', 'such a sophisticated attack in the wild.', ['had we seen', 'we had seen', 'we saw'], 'had we seen',
      'Negative adverbial (Never before) at the front → inversion: auxiliary before subject.'),
    dd('Not only', 'the data, but they also demanded a ransom.', ['did they steal', 'they stole', 'they did steal'], 'did they steal',
      '"Not only" at the start forces inversion: did + subject + base verb.'),
    dd('Rarely', 'a report written with such clarity.', ['have I read', 'I have read', 'I read'], 'have I read',
      '"Rarely" (negative frequency) at the front → inversion of the auxiliary.'),
    inp('No sooner', '(the system / reboot) than it crashed again.', 'had the system rebooted',
      'No sooner ... than: past perfect with inversion (had + subject + participle).'),
    ro('Little did she know the truth.',
      'Inversion after "Little": auxiliary (did) before the subject.'),
  ],

  // Condicionales mixtas y avanzadas
  'c1-conditionals': [
    dd('If I had backed up the files, I', 'access to them now.', ['would have', 'would have had', 'had'], 'would have',
      'Mixed conditional: past condition (had backed up) → present result (would have).'),
    dd('', 'more careful, the breach would never have happened.', ['Had they been', 'If they were', 'Were they'], 'Had they been',
      'Inverted third conditional: Had + subject + participle replaces "If they had been".'),
    dd('If it', 'for the firewall, the attack would have succeeded.', ["hadn't been", "wasn't", "weren't"], "hadn't been",
      '"If it hadn\'t been for..." = if something had not existed (past).'),
    inp('Were I', '(be) in charge, I would rotate the keys today.', 'to be',
      'Formal conditional: "Were I to be..." = If I were to be...'),
    ro('Should you need help, contact the team.',
      'Inverted first conditional with "Should": Should + subject + base verb.'),
  ],

  // Unreal past: wish, if only, it's time, would rather
  'c1-unreal-past': [
    dd("I wish I", 'the logs before deleting them.', ['had checked', 'checked', 'would check'], 'had checked',
      'Wish + past perfect for a regret about the past.'),
    dd("It's high time we", 'this legacy system.', ['replaced', 'replace', 'had replaced'], 'replaced',
      '"It\'s (high) time" + past simple to talk about something overdue now.'),
    dd('I would rather you', 'the client directly.', ['contacted', 'contact', 'have contacted'], 'contacted',
      '"Would rather + someone + past simple" for a present/future preference.'),
    inp('If only I', '(not / trust) that email.', "hadn't trusted",
      'If only + past perfect for a strong regret about the past.'),
    ro('I wish you would stop clicking suspicious links.',
      'Wish + would + base verb to complain about an annoying habit.'),
  ],

  // Discourse markers / linkers
  'c1-discourse-markers': [
    dd('The tool is powerful;', ', it is hard to configure.', ['however', 'moreover', 'therefore'], 'however',
      '"However" introduces a contrast.'),
    dd('The scope was small.', ', the findings were serious.', ['Nevertheless', 'Furthermore', 'Hence'], 'Nevertheless',
      '"Nevertheless" = in spite of that (contrast).'),
    dd('We patched the server;', ', we rotated all credentials.', ['furthermore', 'otherwise', 'whereas'], 'furthermore',
      '"Furthermore" adds another point.'),
    dd('Encrypt the backups;', ', the data could be read if stolen.', ['otherwise', 'therefore', 'meanwhile'], 'otherwise',
      '"Otherwise" = if not, this bad thing happens.'),
    inp('The endpoint was slow;', '(consequently), users gave up.', 'consequently',
      '"Consequently" introduces a result.'),
  ],

  // Especulación y deducción
  'c1-speculation': [
    dd('The attacker', 'used stolen credentials; the logs show a valid login.', ['must have', 'must', 'should have'], 'must have',
      'must have + participle = near-certain deduction about the past.'),
    dd('They', 'have noticed the intrusion; there were no alerts.', ["can't", "mustn't", "couldn't have"], "can't",
      '"can\'t have noticed" = it is almost impossible they noticed (past deduction).'),
    dd('This', 'be a false positive, but we should verify.', ['might', 'must', "can't"], 'might',
      'might + base verb = a present possibility.'),
    inp('She', '(may / leave) already; her session is closed.', 'may have left',
      'may have + participle = a past possibility.'),
    ro('It could have been an inside job.',
      'could have + participle for a past possibility.'),
  ],

  // Gerundios e infinitivos, verbos de los sentidos, distancing, ellipsis, get
  'c1-verb-patterns': [
    dd('The analyst avoided', 'the production database.', ['touching', 'to touch', 'touch'], 'touching',
      '"avoid" is followed by the -ing form.'),
    dd('We managed', 'the breach within an hour.', ['to contain', 'containing', 'contain'], 'to contain',
      '"manage" is followed by the to-infinitive.'),
    dd('I saw the process', 'and then vanish.', ['spawn', 'to spawn', 'spawning'], 'spawn',
      'Verb of the senses (see) + object + bare infinitive for a completed action.'),
    dd('The report is said', 'thousands of users.', ['to have affected', 'to affect', 'affecting'], 'to have affected',
      'Distancing/passive report: is said + to have + participle for an earlier action.'),
    inp('They wanted to help, but they', "(couldn't).", "couldn't",
      'Ellipsis: we drop the repeated verb (help) after the auxiliary.'),
    dd('It took a while, but the exploit finally', '.', ['got patched', 'got patch', 'is get patched'], 'got patched',
      'Informal passive with "get": got + past participle.'),
    ro('What we need is a proper incident response plan.',
      'Cleft sentence: What + clause + is + emphasised element.'),
  ],
};

export const c1GrammarInfo = {
  'mixed-c1': {
    title: 'C1 Mixed Practice',
    structure: {
      affirmative: 'Inversion, mixed conditionals, unreal past, linkers, deduction, verb patterns',
      negative: 'Not only... / hadn\'t... / can\'t have...',
      interrogative: 'Should you...? / Had they...?',
      example: 'Never before had we seen this. / If I had backed up, I would have it now.',
      signalWords: 'never, not only, rarely, had, should, wish, if only, must have, however',
    },
  },
};
