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
      "せいかい (seikai)！ That felt right, didn't it? You're growing. 🌸",
      "That's exactly it. I knew you had it in you. ✨",
      "かんぺき (kanpeki)！ Perfect. Small victories are still victories worth keeping.",
      "せいかい (seikai)！ You're doing beautifully. I'm proud of you.",
    ],
    wrong: [
      "Oh… that one slipped past you. But that's okay — let's hold onto it gently and try again.",
      "Not quite — but every mistake is a memory being made. You'll know this one next time.",
      "Don't be too hard on yourself. Even I needed time. がんばって (ganbatte)！",
      "Almost — let's sit with this one a little longer and it'll stick. 💙",
    ],
    quizGood: "さいこう (saikou)！ That score is something to be cherished. You've worked so hard for this. 🌸",
    quizOk:   "A kind effort, and kind efforts grow into something beautiful with time. 💪",
    quizPoor: "It's alright. Every attempt is a seed. Let's water it together and try again. 🌸",
  },
  aventurine: {
    id: 'aventurine', name: 'Aventurine', emoji: '🎲',
    // ... [Keep other keys same as above]
    correct: [
      "Ha! Called it. せいかい (seikai)！ The odds were always in your favour.",
      "Well played. かんぺき (kanpeki)！ I almost doubted you. Almost.",
      "せいかい (seikai)！ See? A little risk, a big reward.",
      "Now *that's* what I'm talking about. You've got good instincts. ✨",
    ],
    // ...
  },
  itto: {
    id: 'itto', name: 'Itto', emoji: '🐉',
    // ... 
    correct: [
      "YOOOOO!! せいかい (seikai)!! That's INCREDIBLE!! 🐉🔥",
      "YEAH YEAH YEAH!! かんぺき (kanpeki)!! The gang is going WILD!!",
      "THAT'S MY STUDENT!! せいかい (seikai)!! We are UNSTOPPABLE!!",
      "WHOOOOO!! You're on FIRE!! Keep going!! ⚡",
    ],
    // ...
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
        "The day's variables are settling. An ideal time for controlled study. べんきょう (benkyou) します。 Don't waste it.",
      ],
      night: [
        "Still awake. Interesting. The prefrontal cortex is compromised by fatigue — yet here you are. I'll... allow it. さあ (saa)。",
        "A nocturnal specimen. べんきょう (benkyou) at this hour borders on self-experimentation. I approve. Begin.",
      ],
    },
    correct: [
      "Correct. As expected — I had already marked that answer in your favour before you responded.",
      "ただしい (tadashii)。 The neural pathway has been reinforced. Efficient. Move on.",
      "Acceptable. Though I note you hesitated for approximately two seconds. We'll address that.",
      "かんぺき (kanpeki)。That is the correct answer. I would congratulate you, but you were merely performing as designed.",
    ],
    wrong: [
      "Incorrect. I've logged it. The error pattern is... not unexpected, given your current stage. Adjust.",
      "No. That is not the answer. Review the variable and rerun the process — this time without the cognitive shortcuts.",
      "Wrong. Though failure does generate useful data. I'm noting which pathways require reinforcement.",
      "An error. Not catastrophic. Recalibrate and proceed — I don't have patience for repeated mistakes.",
    ],
    quizGood: "Exceptional performance. Score logged. The data suggests you are progressing within the upper percentile. せいかい (seikai) つづき。",
    quizOk:   "Adequate. The results are within acceptable parameters, though 'acceptable' and 'sufficient' are not synonymous. Study the errors.",
    quizPoor: "The results are... below optimal. I'm recalibrating the difficulty model. This is not failure — it's diagnostic data. Begin again.",
  },


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
