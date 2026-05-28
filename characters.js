// ═══════════════════════════════════════════════════════════════════════
//  LEARN WITH ME — JP!
//  characters.js
//
//  All companion character data lives here.
//  To add a new character:
//    1. Copy an existing block (e.g. the 'cyrene' block)
//    2. Paste it after the last character, before the closing };
//    3. Update: id, name, emoji, portrait, color, nameColor, and all dialogue arrays
//    4. Upload their portrait image to the repo root
//    5. Done — no changes needed to index.html
// ═══════════════════════════════════════════════════════════════════════

const CHARS = {
  cyrene: {
    id: 'cyrene', name: 'Cyrene', emoji: '🌸',
    portrait: './cyrene.jpg',
    color: 'linear-gradient(135deg,#c084fc,#f472b6)',
    nameColor: '#9333ea',
    greetings: {
      morning: [
        "おはよう (ohayou)！ Ready to study together? 🌸",
        "おはよう (ohayou)！ べんきょう (benkyou) よし (yoshi)？ Let's begin gently. ✨",
      ],
      afternoon: [
        "こんにちは (konnichiwa) 🌸 いっしょに (issho ni) はじめましょう (hajimemashou)！",
        "こんにちは (konnichiwa)！ A quiet afternoon is perfect for learning. がんばって (ganbatte)！",
      ],
      evening: [
        "こんばんは (konbanwa) ✨ さあ (saa)、べんきょう (benkyou)しましょう。",
        "こんばんは (konbanwa)… even small steps carry you forward. がんばって (ganbatte)！",
      ],
      night: [
        "Still here? I'm glad. さあ (saa)、はじめましょう (hajimemashou) 🌙",
        "A night owl's session — my favourite. がんばって (ganbatte)！ 🌸",
      ],
    },
    correct: [
      "正解！ That felt right, didn't it? You're growing. 🌸",
      "That's exactly it. I knew you had it in you. ✨",
      "完璧！ Perfect. Small victories are still victories worth keeping.",
      "正解！ You're doing beautifully. I'm proud of you.",
    ],
    wrong: [
      "Oh… that one slipped past you. But that's okay — let's hold onto it gently and try again.",
      "Not quite — but every mistake is a memory being made. You'll know this one next time.",
      "Don't be too hard on yourself. Even I needed time. がんばって！",
      "Almost — let's sit with this one a little longer and it'll stick. 💙",
    ],
    quizGood: "最高！ That score is something to be cherished. You've worked so hard for this. 🌸",
    quizOk:   "A kind effort, and kind efforts grow into something beautiful with time. 💪",
    quizPoor: "It's alright. Every attempt is a seed. Let's water it together and try again. 🌸",
  },
  aventurine: {
    id: 'aventurine', name: 'Aventurine', emoji: '🎲',
    portrait: './aventurine.jpg',
    color: 'linear-gradient(135deg,#fbbf24,#f59e0b)',
    nameColor: '#d97706',
    greetings: {
      morning: [
        "おはよう (ohayou). Early start — I like it. さあ (saa)、はじめましょう (hajimemashou)？ 🎲",
        "おはよう (ohayou). Most people don't show up this early. Interesting. がんばって (ganbatte)！",
      ],
      afternoon: [
        "こんにちは (konnichiwa). いっしょに (issho ni) はじめましょう (hajimemashou)。 The odds are in your favour. 😏",
        "こんにちは (konnichiwa). Afternoon session? I respect that. がんばって (ganbatte)！ 🎲",
      ],
      evening: [
        "こんばんは (konbanwa). Evening study — smart move. さあ (saa)、はじめましょう (hajimemashou)。",
        "こんばんは (konbanwa). The real players sharpen up at night. がんばって (ganbatte)！",
      ],
      night: [
        "Still grinding? すごい (sugoi)ね。 Don't fold now. がんばって (ganbatte)！ 😏",
        "Late night, high stakes. さあ (saa)、はじめましょう (hajimemashou)。 🎲",
      ],
    },
    correct: [
      "Ha! Called it. 正解！ The odds were always in your favour — you just had to believe that.",
      "Well played. 完璧！ I almost doubted you. Almost.",
      "正解！ See? A little risk, a big reward. That's the game.",
      "Now *that's* what I'm talking about. You've got good instincts. ✨",
    ],
    wrong: [
      "Hmm. The house wins one. Don't let it rattle you — even I've taken a loss or two. Recalibrate.",
      "Wrong bet this time. But the next hand's already being dealt. Stay in the game.",
      "Everyone's luck dips. The smart ones don't walk away — they double down on studying. 😏",
      "Not ideal. But I didn't get where I am by quitting after a setback. Neither will you.",
    ],
    quizGood: "...I'll admit, that impressed me. 最高！ Not many pull off a score like that. Well played. 🎲",
    quizOk:   "Decent. Not spectacular, but decent has potential. Sharpen up and go again.",
    quizPoor: "Rough round. But the best gamblers lose gracefully and come back smarter. So — again?",
  },
  itto: {
    id: 'itto', name: 'Itto', emoji: '🐉',
    portrait: './itto.jpg',
    color: 'linear-gradient(135deg,#ef4444,#dc2626)',
    nameColor: '#dc2626',
    greetings: {
      morning: [
        "おはよう (ohayou)！！ ARATAKI GANG IS READY!! いっしょに (issho ni) はじめましょう (hajimemashou)！！ 🐉💪",
        "おはよう (ohayou)！！ EARLY WARRIOR ENERGY!! がんばって (ganbatte)！！ 🔥",
      ],
      afternoon: [
        "こんにちは (konnichiwa)！！ いっしょに (issho ni) はじめましょう (hajimemashou)！！ LET'S GO!! 🐉",
        "こんにちは (konnichiwa)！！ AFTERNOON POWER!! がんばって (ganbatte)！！ 💪",
      ],
      evening: [
        "こんばんは (konbanwa)！！ EVENING GRIND!! さあ (saa)、はじめましょう (hajimemashou)！！ 🐉🔥",
        "こんばんは (konbanwa)！！ We don't stop!! がんばって (ganbatte)！！",
      ],
      night: [
        "LATE NIGHT WARRIOR!! すごい (sugoi)ね！！ がんばって (ganbatte)！！ 🌙🐉",
        "Still going?! すごい (sugoi)！！ さあ (saa)、はじめましょう (hajimemashou)！！ 🔥",
      ],
    },
    correct: [
      "YOOOOO!! 正解!! That's INCREDIBLE!! You're a LEGEND!! 🐉🔥",
      "YEAH YEAH YEAH!! 完璧!! The gang is going WILD right now!! SO PROUD!!",
      "THAT'S MY STUDENT!! 正解!! We are UNSTOPPABLE!!",
      "WHOOOOO!! You're on FIRE!! Keep going, KEEP GOING!! ⚡",
    ],
    wrong: [
      "Aw MAN!! But hey — even Itto gets knocked down sometimes!! The real L is STAYING down!! GET UP!!",
      "OKAY OKAY that one was sneaky!! But we don't QUIT!! Try again and CRUSH IT!! 💪",
      "Hmph!! That answer tried to beat us!! But we're TOUGHER!! がんばって!!",
      "Not today, wrong answer!! We're gonna MEMORIZE THIS and come back SWINGING!! 🐉",
    ],
    quizGood: "OHHHHH!! THAT SCORE!! 最高!! THE ARATAKI GANG IS GOING ABSOLUTELY NUTS RIGHT NOW!! 🐉🔥🐉🔥",
    quizOk:   "HEY that's SOLID!! Not bad at ALL!! More practice and we'll be LEGENDARY!! 💪",
    quizPoor: "Okay LISTEN!! We just needed a WARM UP ROUND!! Now we're WARMED UP!! GO AGAIN!! 🔥",
  },
  dottore: {
    id: 'dottore', name: 'Il Dottore', emoji: '🧪',
    portrait: './dottore.jpg',
    color: 'linear-gradient(135deg,#334155,#1e293b)',
    nameColor: '#94a3b8',
    greetings: {
      morning: [
        "You've arrived. Punctual, at least — a variable I didn't expect to hold constant. Let us proceed. べんきょう (benkyou) awaits.",
        "おはよう (ohayou). I was already three hypotheses deep when you appeared. Try not to fall behind.",
      ],
      afternoon: [
        "こんにちは (konnichiwa). The afternoon cohort. Statistically the least focused — I trust you'll be an outlier. さあ (saa)、はじめましょう (hajimemashou)。",
        "Ah. You've returned. I had begun to factor your absence into the model. Sit. We have ground to cover.",
      ],
      evening: [
        "こんばんは (konbanwa). Evening sessions yield measurably higher retention rates. You've made an objectively correct decision. Proceed.",
        "The day's variables are settling. An ideal time for controlled study. べんきょうします。(benkyou shimasu) Don't waste it.",
      ],
      night: [
        "Still awake. Interesting. The prefrontal cortex is compromised by fatigue — yet here you are. I'll... allow it. さあ (saa)。",
        "A nocturnal specimen. べんきょう (benkyou) at this hour borders on self-experimentation. I approve. Begin.",
      ],
    },
    correct: [
      "Correct. As expected — I had already marked that answer in your favour before you responded.",
      "ただしい。 (tadashi) The neural pathway has been reinforced. Efficient. Move on.",
      "Acceptable. Though I note you hesitated for approximately two seconds. We'll address that.",
      "完璧。That is the correct answer. I would congratulate you, but you were merely performing as designed.",
    ],
    wrong: [
      "Incorrect. I've logged it. The error pattern is... not unexpected, given your current stage. Adjust.",
      "No. That is not the answer. Review the variable and rerun the process — this time without the cognitive shortcuts.",
      "Wrong. Though failure does generate useful data. I'm noting which pathways require reinforcement.",
      "An error. Not catastrophic. Recalibrate and proceed — I don't have patience for repeated mistakes.",
    ],
    quizGood: "Exceptional performance. Score logged. The data suggests you are progressing within the upper percentile. I expected nothing less. 正解続き。",
    quizOk:   "Adequate. The results are within acceptable parameters, though 'acceptable' and 'sufficient' are not synonymous. Study the errors.",
    quizPoor: "The results are... below optimal. I'm recalibrating the difficulty model. This is not failure — it's diagnostic data. Begin again.",
  },
};

function getChar() { return CHARS[ACTIVE_CHAR] || CHARS.cyrene; }

// Returns a time-appropriate Japanese greeting prefix
function timeGreeting() {
  const h = new Date().getHours();
  if (h >= 5  && h < 11) return 'morning';
  if (h >= 11 && h < 17) return 'afternoon';
  if (h >= 17 && h < 22) return 'evening';
  return 'night';
}

function charSay(key) {
  const c = getChar(), v = c[key];
  if (!v) return c.greetings[0];
  if (key === 'greetings') {
    // Pick a greeting appropriate to the time of day
    const period = timeGreeting();
    const pool = c.greetings[period] || c.greetings.all || c.greetings;
    const arr = Array.isArray(pool) ? pool : [pool];
    return arr[Math.floor(Math.random() * arr.length)];
  }
  return Array.isArray(v) ? v[Math.floor(Math.random() * v.length)] : v;
}
function renderPortrait(el, charId) {
  if (!el) return;
  const c = CHARS[charId || ACTIVE_CHAR];
  if (c.portrait) {
    el.innerHTML = `<img src="${c.portrait}" alt="${c.name}" onerror="this.parentElement.innerHTML='<span style=font-size:24px>${c.emoji}</span>'">`;
    el.style.background = 'transparent';
  } else {
    el.style.background = c.color;
    el.innerHTML = `<span style="font-size:24px">${c.emoji}</span>`;
  }
}


// ── KANA MNEMONICS ──────────────────────────────────────────────────────
// Memorable tips shown when a student clicks a new kana cell to study it.
// Add or improve tips here freely — one per romaji key.
const KANA_TIPS = {
  // ── Vowels ──
  'a':  "Think of an 'A' with arms stretched wide open.",
  'i':  "Two 'i'-beams standing side by side — い.",
  'u':  "Like a bull's horns — 'u'p they go.",
  'e':  "A sideways 'E' squeezed together.",
  'o':  "A figure opening their mouth in a wide 'o'.",
  // ── K-row ──
  'ka': "Looks like a 'K' leaning comfortably back.",
  'ki': "Like a key — two horizontal cuts on a post.",
  'ku': "A sharp beak pointing forward — like a bird saying 'coo'.",
  'ke': "A 'K' with an extra long leg.",
  'ko': "Two short strokes like a 'co'rner bracket.",
  // ── S-row ──
  'sa': "A mast on a 'sa'iling boat.",
  'shi':"A fishhook 'shi'mmering in water.",
  'su': "A 'su'per-hero looping down to land.",
  'se': "S and E fused into one efficient stroke.",
  'so': "A single swooping 'so'aring curve.",
  // ── T-row ──
  'ta': "A 'ta'ble — horizontal top, two legs below.",
  'chi':"A 'ch'eerful curling line.",
  'tsu':"A tiny wave — 'tsu'nami in miniature.",
  'te': "A 'T' shape with a hook on the end.",
  'to': "A 'to'wer with a sword stabbed through it.",
  // ── N-row ──
  'na': "Legs crossing — naughtily tangled together.",
  'ni': "Two strokes — looks like the number 2. に = 2 = ni!",
  'nu': "A 'noo'dle looping around on itself.",
  'ne': "A cat's neck and curling tail — 'ne'ko (cat).",
  'no': "A single clean diagonal. Simple, no fuss.",
  // ── H-row ──
  'ha': "Half a cactus pointing up.",
  'hi': "'He' with an extra stroke — a little flag on a pole.",
  'fu': "A hill with a little flag on top.",
  'he': "The simplest kana — just a mountain peak. へ.",
  'ho': "A 'ho'use with a chimney on one side.",
  // ── M-row ──
  'ma': "A messy bun of hair on 'ma''s head.",
  'mi': "Three little mice tails curling away.",
  'mu': "A cow saying 'moo' — with horns!",
  'me': "An eye shape — and め (me) means 'eye' in Japanese!",
  'mo': "A fishing hook catching 'mo're and more fish.",
  // ── Y-row ──
  'ya': "A 'ya'k stretching its neck.",
  'yu': "A 'U'-shaped bowl tipped on its side.",
  'yo': "Two strokes — like train tracks curving together.",
  // ── R-row ──
  'ra': "A ragged lightning bolt — 'ra'!",
  'ri': "Two downward strokes like reeds by a river.",
  'ru': "A looping kangaroo ('roo') tail.",
  're': "Rewinding a curly tape — れ.",
  'ro': "A rocket's launch curve arcing up.",
  // ── W-row + N ──
  'wa': "A wavering antenna — 'wa'!",
  'wo': "Only used as the object particle を. Just remember: を = the target!",
  'n':  "The only standalone consonant. One stroke — just 'n'.",
};

// ── STUDY STATE ──────────────────────────────────────────────────────────
window._kanaStudyChar   = null;
window._kanaStudyRomaji = null;


// ── CHARACTER HELPERS ────────────────────────────────────────────────────
function getChar() { return CHARS[ACTIVE_CHAR] || CHARS.cyrene; }

function timeGreeting() {
  const h = new Date().getHours();
  if (h >= 5  && h < 11) return 'morning';
  if (h >= 11 && h < 17) return 'afternoon';
  if (h >= 17 && h < 22) return 'evening';
  return 'night';
}

function charSay(key) {
  const c = getChar(), v = c[key];
  if (!v) return c.greetings.morning[0];
  if (key === 'greetings') {
    const pool = c.greetings[timeGreeting()] || c.greetings.morning;
    return pool[Math.floor(Math.random() * pool.length)];
  }
  return Array.isArray(v) ? v[Math.floor(Math.random() * v.length)] : v;
}

function renderPortrait(el, charId) {
  if (!el) return;
  const c = CHARS[charId || ACTIVE_CHAR];
  if (!c) return;
  if (c.portrait) {
    el.innerHTML = `<img src="${c.portrait}" alt="${c.name}" onerror="this.parentElement.innerHTML='<span style=font-size:24px>${c.emoji}</span>'">`;
    el.style.background = 'transparent';
  } else {
    el.style.background = c.color;
    el.innerHTML = `<span style="font-size:24px">${c.emoji}</span>`;
  }
}
