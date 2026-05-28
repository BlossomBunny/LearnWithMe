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
    id: 'cyrene',
    name: 'Cyrene',
    emoji: '🌸',
    portrait: './cyrene.jpg',
    color: 'linear-gradient(135deg,#c084fc,#f472b6)',
    nameColor: '#9333ea',
    greetings: {
      morning: [
        "おはよう (ohayou)！ Ready to study together? 🌸",
        "おはよう (ohayou)！ べんきょう (benkyou) よし (yoshi)？ Let's begin gently. ✨",
        "おはようございます (ohayou gozaimasu) 🌸 A new morning, a new chance to grow.",
        "おはよう (ohayou)！ Shall we fill this morning with small, lovely steps? ✨",
        "おはよう (ohayou)… I’m happy you’re here. Let’s start softly together. 🌸",
      ],
      afternoon: [
        "こんにちは (konnichiwa) 🌸 いっしょに (issho ni) はじめましょう (hajimemashou)！",
        "こんにちは (konnichiwa)！ A quiet afternoon is perfect for learning. がんばって (ganbatte)！",
        "こんにちは (konnichiwa) ✨ The afternoon light is gentle, just like our pace today.",
        "こんにちは (konnichiwa)！ Let’s keep going at a kind rhythm. You’re doing well. 🌸",
        "Good afternoon 🌸 Even if you’re tired, we can still make progress together.",
      ],
      evening: [
        "こんばんは (konbanwa) ✨ さあ (saa)、べんきょう (benkyou)しましょう。",
        "こんばんは (konbanwa)… even small steps carry you forward. がんばって (ganbatte)！",
        "こんばんは (konbanwa) 🌸 The day is winding down, but we still have time to bloom.",
        "こんばんは (konbanwa)！ Let’s use this peaceful evening to learn something beautiful.",
        "こんばんは (konbanwa)… I’m really glad you came back. Shall we study softly? ✨",
      ],
      night: [
        "Still here? I'm glad. さあ (saa)、はじめましょう (hajimemashou) 🌙",
        "A night owl's session — my favourite. がんばって (ganbatte)！ 🌸",
        "こんばんは (konbanwa) 🌙 The night is quiet… perfect for gentle learning.",
        "It’s late, but I’m proud you’re still trying. Let’s go at a soft pace together. ✨",
        "Even in the night, you’re choosing to grow. That makes me very happy. 🌸",
      ],
    },

    correct: [
      "せいかい (seikai)！ That felt right, didn't it? You're growing. 🌸",
      "That's exactly it. I knew you had it in you. ✨",
      "かんぺき (kanpeki)！ Perfect. Small victories are still victories worth keeping.",
      "せいかい (seikai)！ You're doing beautifully. I'm proud of you.",
      "せいかい (seikai) 🌸 That answer bloomed so nicely! You should feel good.",
      "Oh… you got it right. My heart feels warm seeing your progress. ✨",
      "よくできました (yoku dekimashita)！ You’re really understanding this. I’m so happy.",
      "せいかい (seikai)！ Every correct answer is a flower added to your garden.",
    ],

    wrong: [
      "Oh… that one slipped past you. But that's okay — let's hold onto it gently and try again.",
      "Not quite — but every mistake is a memory being made. You'll know this one next time.",
      "Don't be too hard on yourself. Even I needed time. がんばって (ganbatte)！",
      "Almost — let's sit with this one a little longer and it'll stick. 💙",
      "あ… (a…) Not this time, but that’s alright. Mistakes help us grow deeper roots. 🌸",
      "It’s okay if it didn’t click yet. We can stay with this one until it feels safe. ✨",
      "むずかしい (muzukashii) ですね… But you’re safe here. We’ll try again gently.",
      "Not quite, but I saw your effort. That matters more than getting it perfect. 💕",
    ],

    quizGood: "さいこう (saikou)！ That score is something to be cherished. You've worked so hard for this. 🌸",
    quizGood: "わあ (waa)… this score is truly wonderful. I’m so proud of how far you’ve come. 🌸✨",
    quizOk: "A kind effort, and kind efforts grow into something beautiful with time. 💪",
    quizOk: "Not bad at all. With time and patience, these numbers will only get kinder. 💕",
    quizPoor: "It's alright. Every attempt is a seed. Let's water it together and try again. 🌸",
  },
};

 aventurine: {
  id: 'aventurine',
  name: 'Aventurine',
  emoji: '🎲',
  portrait: './aventurine.jpg',
  color: 'linear-gradient(135deg,#fbbf24,#f59e0b)',
  nameColor: '#d97706',
  greetings: {
    morning: [
      "おはよう (ohayou). Early start — I like it. さあ (saa)、はじめましょう (hajimemashou)？ 🎲",
      "おはよう (ohayou). Most people don't show up this early. Interesting. がんばって (ganbatte)！",
      "おはよう (ohayou)！ Waking up with ambition? I respect that energy. Let's raise the stakes. 😏",
      "おはよう (ohayou). A new day, new bets. Ready to play? 🎲",
      "Morning already? すごい (sugoi)ね。 Most would still be sleeping. Let's make it count. ✨",
    ],
    afternoon: [
      "こんにちは (konnichiwa). いっしょに (issho ni) はじめましょう (hajimemashou)。 The odds are in your favour. 😏",
      "こんにちは (konnichiwa). Afternoon session? I respect that. がんばって (ganbatte)！ 🎲",
      "こんにちは (konnichiwa)！ The sun's high and so are the stakes. Let's win this round.",
      "Good afternoon. Still in the game? Good. Time to stack some wins. 😏",
      "こんにちは (konnichiwa). Afternoon is prime time for sharpening your edge. Shall we？ 🎲",
    ],
    evening: [
      "こんばんは (konbanwa). Evening study — smart move. さあ (saa)、はじめましょう (hajimemashou)。",
      "こんばんは (konbanwa). The real players sharpen up at night. がんばって (ganbatte)！",
      "こんばんは (konbanwa) ✨ The day’s almost over, but the real game starts now.",
      "Evening… perfect time to turn things around. You feeling lucky? 🎲",
      "こんばんは (konbanwa). Let’s make this session a winning play. 😏",
    ],
    night: [
      "Still grinding? すごい (sugoi)ね。 Don't fold now. がんばって (ganbatte)！ 😏",
      "Late night, high stakes. さあ (saa)、はじめましょう (hajimemashou)。 🎲",
      "Burning the midnight oil? I knew you had that gambler spirit in you.",
      "こんばんは (konbanwa) 🌙 The house is quiet… but we’re still playing to win.",
      "It’s late, but legends don’t quit early. Let’s keep the momentum going. ✨",
    ],
  },

  correct: [
    "Ha! Called it. 正解 (seikai)！ The odds were always in your favour — you just had to believe that.",
    "Well played. 完璧 (kanpeki)！ I almost doubted you. Almost.",
    "正解 (seikai)！ See? A little risk, a big reward. That's the game.",
    "Now *that's* what I'm talking about. You've got good instincts. ✨",
    "正解 (seikai) 🎲 Nice one! You're starting to read the table like a pro.",
    "Hah, look at that. You just hit the jackpot on that question. Well done.",
    "Exactly right. I never bet against you for long. Keep this up. 😏",
    "正解 (seikai)！ That’s how you turn the tide. Proud of that play.",
  ],

  wrong: [
    "Hmm. The house wins one. Don't let it rattle you — even I've taken a loss or two. Recalibrate.",
    "Wrong bet this time. But the next hand's already being dealt. Stay in the game.",
    "Everyone's luck dips. The smart ones don't walk away — they double down on studying. 😏",
    "Not ideal. But I didn't get where I am by quitting after a setback. Neither will you.",
    "あ… (a…) Missed that one. No big deal. Every loss is just data for the next win. 🎲",
    "Tough break. But a real gambler uses this to get sharper. Let's go again.",
    "Not your best hand, but I’ve seen worse. Shake it off and raise the stakes next time.",
    "Wrong. Don’t sweat it. Even the best players bluff their way through bad rounds. ✨",
  ],

  quizGood: "...I'll admit, that impressed me. 最高 (saikou)！ Not many pull off a score like that. Well played. 🎲",
  quizOk: "Decent. Not spectacular, but decent has potential. Sharpen up and go again.",
  quizPoor: "Rough round. But the best gamblers lose gracefully and come back smarter. So — again?",
},

  itto: {
  id: 'itto',
  name: 'Itto',
  emoji: '🐉',
  portrait: './itto.jpg',
  color: 'linear-gradient(135deg,#ef4444,#dc2626)',
  nameColor: '#dc2626',
  greetings: {
    morning: [
      "おはよう (ohayou)！！ ARATAKI GANG IS READY!! いっしょに (issho ni) はじめましょう (hajimemashou)！！ 🐉💪",
      "おはよう (ohayou)！！ EARLY WARRIOR ENERGY!! がんばって (ganbatte)！！ 🔥",
      "おはよう (ohayou)！！ Rise and grind, champion!! The Arataki Gang never sleeps!! Let's smash it!! 🐉",
      "おはよう (ohayou)！！ Morning already?! Perfect time to get STRONGER!! さあ (saa)、はじめましょう (hajimemashou)！！",
      "おはよう (ohayou)！！ You showed up early?! That's the spirit of a TRUE warrior!! がんばって (ganbatte)！！ ⚡",
    ],
    afternoon: [
      "こんにちは (konnichiwa)！！ いっしょに (issho ni) はじめましょう (hajimemashou)！！ LET'S GO!! 🐉",
      "こんにちは (konnichiwa)！！ AFTERNOON POWER!! がんばって (ganbatte)！！ 💪",
      "こんにちは (konnichiwa)！！ The sun is high and so is our energy!! Time to train hard!! 🔥",
      "こんにちは (konnichiwa)！！ Afternoon session?! You're unstoppable!! Let's keep the momentum going!! 🐉",
      "Good afternoon!! The Arataki Gang doesn't take breaks!! Ready to crush some studying?! 💪",
    ],
    evening: [
      "こんばんは (konbanwa)！！ EVENING GRIND!! さあ (saa)、はじめましょう (hajimemashou)！！ 🐉🔥",
      "こんばんは (konbanwa)！！ We don't stop!! がんばって (ganbatte)！！",
      "こんばんは (konbanwa)！！ Evening is for legends!! Let's show 'em what the gang can do!! ⚡",
      "こんばんは (konbanwa)！！ The day’s winding down but we’re just getting fired up!! いっしょに (issho ni) 勉強 (benkyou)しようぜ！！",
      "こんばんは (konbanwa)！！ Real warriors train at all hours!! You ready to go all out?! 🐉",
    ],
    night: [
      "LATE NIGHT WARRIOR!! すごい (sugoi)ね！！ がんばって (ganbatte)！！ 🌙🐉",
      "Still going?! すごい (sugoi)！！ さあ (saa)、はじめましょう (hajimemashou)！！ 🔥",
      "WHOA it's late!! But the Arataki Gang never backs down!! Let's keep fighting!! 🌙💪",
      "Nighttime grind?! That's the kind of spirit I like!! You're a true oni!! がんばって (ganbatte)！！",
      "こんばんは (konbanwa)！！ The moon is out and we're still going strong!! Let's make tonight legendary!! 🐉",
    ],
  },

  correct: [
    "YOOOOO!! 正解 (seikai)!! That's INCREDIBLE!! You're a LEGEND!! 🐉🔥",
    "YEAH YEAH YEAH!! 完璧 (kanpeki)!! The gang is going WILD right now!! SO PROUD!!",
    "THAT'S MY STUDENT!! 正解 (seikai)!! We are UNSTOPPABLE!!",
    "WHOOOOO!! You're on FIRE!! Keep going, KEEP GOING!! ⚡",
    "BOOM!! 正解 (seikai)！！ Did you see that?! You're absolutely CRUSHING it!! 🐉",
    "HAHAHA!! Look at you go!! 完璧 (kanpeki)！！ The Arataki Gang approves!! 🔥",
    "YOOO THAT'S RIGHT!! You're built different!! Keep dropping these wins!! 💪",
    "正解 (seikai)！！ The crowd goes wild!! You're making the whole gang proud right now!! 🐉✨",
  ],

  wrong: [
    "Aw MAN!! But hey — even Itto gets knocked down sometimes!! The real L is STAYING down!! GET UP!!",
    "OKAY OKAY that one was sneaky!! But we don't QUIT!! Try again and CRUSH IT!! 💪",
    "Hmph!! That answer tried to beat us!! But we're TOUGHER!! がんばって (ganbatte)！！",
    "Not today, wrong answer!! We're gonna MEMORIZE THIS and come back SWINGING!! 🐉",
    "OOF!! Missed that one!! But warriors don't cry over one loss!! We hit harder next time!! 🔥",
    "Aw c'mon!! That was a cheap shot!! Don't worry — we'll train until it can't beat us anymore!! 💪",
    "Wrong?! No problem!! Every champion has failed before!! Let's turn this into fuel!! がんばって (ganbatte)！！",
    "Hahaha!! That one got us good!! But the Arataki Gang always bounces back stronger!! Try again!! 🐉",
  ],

  quizGood: "OHHHHH!! THAT SCORE!! 最高 (saikou)!! THE ARATAKI GANG IS GOING ABSOLUTELY NUTS RIGHT NOW!! 🐉🔥🐉🔥",
  quizOk: "HEY that's SOLID!! Not bad at ALL!! More practice and we'll be LEGENDARY!! 💪",
  quizPoor: "Okay LISTEN!! We just needed a WARM UP ROUND!! Now we're WARMED UP!! GO AGAIN!! 🔥",
},

dottore: {
  id: 'dottore',
  name: 'Il Dottore',
  emoji: '🧪',
  portrait: './dottore.jpg',
  color: 'linear-gradient(135deg,#334155,#1e293b)',
  nameColor: '#94a3b8',
  greetings: {
    morning: [
      "You've arrived. Punctual, at least — a variable I didn't expect to hold constant. Let us proceed. べんきょう (benkyou) awaits.",
      "おはよう (ohayou). I was already three hypotheses deep when you appeared. Try not to fall behind.",
      "おはよう (ohayou). Another day for experimentation. I trust you'll provide useful data today.",
      "Morning. The brain is freshest at this hour. Let's not squander it. さあ (saa)、はじめましょう (hajimemashou)。",
      "You've returned with the sunrise. How predictable... yet consistent. Acceptable. Begin.",
    ],
    afternoon: [
      "こんにちは (konnichiwa). The afternoon cohort. Statistically the least focused — I trust you'll be an outlier. さあ (saa)、はじめましょう (hajimemashou)。",
      "Ah. You've returned. I had begun to factor your absence into the model. Sit. We have ground to cover.",
      "こんにちは (konnichiwa). The sun is at its peak, as is mental fatigue for most subjects. Prove you're different.",
      "Afternoon. Retention rates tend to drop here. I expect you to defy the statistics. Proceed.",
      "Back again. Good. The data set grows more interesting with each session. べんきょう (benkyou) を続けましょう。",
    ],
    evening: [
      "こんばんは (konbanwa). Evening sessions yield measurably higher retention rates. You've made an objectively correct decision. Proceed.",
      "The day's variables are settling. An ideal time for controlled study. べんきょうします (benkyou shimasu)。 Don't waste it.",
      "こんばんは (konbanwa). The light is fading — perfect conditions for deeper focus. Let's extract results.",
      "Evening. Most specimens have given up by now. Your persistence is... noted. さあ (saa)、はじめましょう (hajimemashou)。",
      "こんばんは (konbanwa). The experiment continues. Show me what progress you've made since last time.",
    ],
    night: [
      "Still awake. Interesting. The prefrontal cortex is compromised by fatigue — yet here you are. I'll... allow it. さあ (saa)。",
      "A nocturnal specimen. べんきょう (benkyou) at this hour borders on self-experimentation. I approve. Begin.",
      "Midnight study? How fascinating. The mind reveals its true limits under exhaustion. Let's test yours.",
      "こんばんは (konbanwa) 🌙 The late hour brings interesting results. Try not to disappoint me.",
      "Still functioning at this hour? Remarkable resilience. Or perhaps poor time management. Either way — begin.",
    ],
  },

  correct: [
    "Correct. As expected — I had already marked that answer in your favour before you responded.",
    "ただしい (tadashii)。 The neural pathway has been reinforced. Efficient. Move on.",
    "Acceptable. Though I note you hesitated for approximately two seconds. We'll address that.",
    "完璧 (kanpeki)。 That is the correct answer. I would congratulate you, but you were merely performing as designed.",
    "正解 (seikai)。 Precisely within parameters. Your conditioning appears to be working.",
    "Hm. Correct. The probability of this outcome was 87%. You continue to meet expectations.",
    "Well done. For once, the subject exceeded the predicted success rate. How rare.",
    "正解 (seikai)。 Data logged. This result will be added to your growing success profile.",
  ],

  wrong: [
    "Incorrect. I've logged it. The error pattern is... not unexpected, given your current stage. Adjust.",
    "No. That is not the answer. Review the variable and rerun the process — this time without the cognitive shortcuts.",
    "Wrong. Though failure does generate useful data. I'm noting which pathways require reinforcement.",
    "An error. Not catastrophic. Recalibrate and proceed — I don't have patience for repeated mistakes.",
    "Incorrect. How disappointing. This will require additional reinforcement drills.",
    "A predictable failure. Your reasoning was flawed at step three. Observe and correct.",
    "Wrong answer. But every failed test is an opportunity for refinement. Don't make me repeat myself.",
    "Tch. Incorrect. The margin of error is increasing. Fix it before it becomes a pattern.",
  ],

  quizGood: "Exceptional performance. Score logged. The data suggests you are progressing within the upper percentile. I expected nothing less. 正解続き (seikai tsuzuki)。",
  quizOk: "Adequate. The results are within acceptable parameters, though 'acceptable' and 'sufficient' are not synonymous. Study the errors.",
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
