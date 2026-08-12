const QUESTIONS = [
  { text: "周末没有安排时，你通常会怎么过？", dim: "E / I", options: [
    { label: "待在家里，做自己想做的事，保持安静", letter: "I" },
    { label: "找点事情让自己忙起来，不然会不安", letter: "J" },
    { label: "想出门，但最后常常因为各种理由没去成", letter: "P" },
    { label: "直接出去晃荡，走到哪算哪", letter: "E" },
  ]},
  { text: "别人突然取消约定时，你第一反应是？", dim: "T / F", options: [
    { label: "没关系，我可以自己安排别的事", letter: "T" },
    { label: "有点失落，但会告诉自己“理解就好”", letter: "F" },
    { label: "心里会有点烦，觉得对方不够重视", letter: "F" },
    { label: "直接问清楚原因，不想自己瞎猜", letter: "T" },
  ]},
  { text: "你更习惯用哪种方式处理压力？", dim: "E / I", options: [
    { label: "一个人静静待着，等情绪自然过去", letter: "I" },
    { label: "找人倾诉，说出来会舒服很多", letter: "E" },
    { label: "转移注意力，做点完全不相关的事", letter: "P" },
    { label: "直接行动，用做事把压力压下去", letter: "J" },
  ]},
  { text: "看到朋友情绪很低落时，你通常会？", dim: "T / F", options: [
    { label: "安静陪着，不急着给建议", letter: "F" },
    { label: "努力让对方开心起来，讲点轻松的", letter: "E" },
    { label: "先观察，确定对方需要什么再行动", letter: "S" },
    { label: "直接问“怎么了”，想尽快解决", letter: "T" },
  ]},
  { text: "你对自己“不够好”的地方，通常怎么看？", dim: "J / P", options: [
    { label: "接受它，觉得这就是自己的一部分", letter: "F" },
    { label: "会反复想，偶尔陷入自我怀疑", letter: "F" },
    { label: "尽量不去正面面对，转移注意力", letter: "P" },
    { label: "会想办法改，哪怕过程很难受", letter: "J" },
  ]},
  { text: "和人相处时，你更在意的是？", dim: "T / F", options: [
    { label: "对方是否真心，能不能长期稳定", letter: "F" },
    { label: "当下的感觉是否舒服、有趣", letter: "S" },
    { label: "彼此是否有足够的空间和边界", letter: "I" },
    { label: "对方是否可靠、能一起面对事情", letter: "T" },
  ]},
  { text: "计划被打乱时，你的反应更接近？", dim: "T / F", options: [
    { label: "顺其自然，重新调整就好", letter: "P" },
    { label: "会有点焦虑，需要时间适应", letter: "F" },
    { label: "表面没事，心里其实有点烦", letter: "F" },
    { label: "直接换个方案，尽快推进", letter: "J" },
  ]},
  { text: "你更喜欢什么样的生活节奏？", dim: "J / P", options: [
    { label: "稳定、可预期，变化不要太大", letter: "J" },
    { label: "偶尔有点小惊喜或混乱也无妨", letter: "P" },
    { label: "需要一些独处的时间来充电", letter: "I" },
    { label: "保持一定的紧张感和目标感", letter: "J" },
  ]},
  { text: "当别人误解你时，你通常会？", dim: "T / F", options: [
    { label: "不急着解释，时间会证明一切", letter: "I" },
    { label: "有点委屈，但不知道怎么说清楚", letter: "F" },
    { label: "用玩笑或模糊的方式带过", letter: "P" },
    { label: "直接澄清，不想留下误会", letter: "T" },
  ]},
  { text: "你对“被需要”这件事的感觉是？", dim: "T / F", options: [
    { label: "其实挺有安全感的", letter: "F" },
    { label: "会有压力，但也不讨厌", letter: "F" },
    { label: "更希望自己是可有可无的那种", letter: "I" },
    { label: "被需要说明自己有价值，可以接受", letter: "T" },
  ]},
  { text: "面对未知的情况，你第一反应是？", dim: "S / N", options: [
    { label: "先观察，确认安全再行动", letter: "S" },
    { label: "有点紧张，但会强迫自己试试", letter: "N" },
    { label: "保持距离，能不碰就不碰", letter: "I" },
    { label: "直接冲，边做边调整", letter: "E" },
  ]},
  { text: "你更享受哪种状态？", dim: "T / F", options: [
    { label: "被温柔对待，感觉被好好照顾", letter: "F" },
    { label: "有人在意你的情绪起伏", letter: "F" },
    { label: "保持神秘感，不被完全看透", letter: "N" },
    { label: "彼此都能独立，却又能互相依靠", letter: "T" },
  ]},
  { text: "做决定时，你更容易？", dim: "T / F", options: [
    { label: "考虑对方的感受，愿意退让", letter: "F" },
    { label: "受当下情绪影响比较大", letter: "F" },
    { label: "想很多，但最后可能还是犹豫", letter: "P" },
    { label: "快速决定，事后再调整", letter: "J" },
  ]},
  { text: "你对“改变自己”这件事的态度是？", dim: "J / P", options: [
    { label: "如果对方需要，我可以慢慢调整", letter: "F" },
    { label: "改变很难，但我偶尔会想试试", letter: "P" },
    { label: "不太想改，现在这样就好", letter: "P" },
    { label: "必要的时候会主动去改", letter: "J" },
  ]},
  { text: "当气氛变得尴尬时，你通常会？", dim: "E / I", options: [
    { label: "沉默，等待对方先开口", letter: "I" },
    { label: "努力找话题，想缓解气氛", letter: "E" },
    { label: "用玩笑或奇怪的话打破僵局", letter: "P" },
    { label: "直接把话题转到正事上", letter: "T" },
  ]},
  { text: "你更看重一段关系里的什么？", dim: "T / F", options: [
    { label: "长期的陪伴与稳定", letter: "F" },
    { label: "情绪上的共鸣与被理解", letter: "F" },
    { label: "精神上的自由与空间", letter: "N" },
    { label: "一起成长或一起变强的感觉", letter: "T" },
  ]},
  { text: "收到别人的关心时，你更习惯？", dim: "E / I", options: [
    { label: "默默接受，心里觉得温暖", letter: "I" },
    { label: "会有点受宠若惊，不知道怎么回应", letter: "F" },
    { label: "表面轻松接住，实际有点距离感", letter: "N" },
    { label: "直接表达感谢，并记住这份心意", letter: "E" },
  ]},
  { text: "你对自己“情绪化”的一面怎么看？", dim: "T / F", options: [
    { label: "尽量控制，不想影响别人", letter: "T" },
    { label: "有时候控制不住，事后会后悔", letter: "F" },
    { label: "觉得情绪本来就是真实的一部分", letter: "F" },
    { label: "情绪来了就处理，不让它堆积", letter: "T" },
  ]},
  { text: "如果必须长期待在一个地方，你更希望？", dim: "E / I", options: [
    { label: "那个地方让人安心，有熟悉的节奏", letter: "S" },
    { label: "至少有人可以说话，不会太寂寞", letter: "E" },
    { label: "能保留自己的私人空间", letter: "I" },
    { label: "有事情可以做，不会觉得无聊", letter: "J" },
  ]},
  { text: "你更容易被哪种人吸引？", dim: "S / N", options: [
    { label: "安静、稳定、让人放松的人", letter: "S" },
    { label: "情绪丰富、真实感很强的人", letter: "N" },
    { label: "说话带点神秘或幽默感的人", letter: "N" },
    { label: "有主见、行动力强的人", letter: "T" },
  ]},
  { text: "当计划失败时，你第一想法是？", dim: "T / F", options: [
    { label: "没关系，再想办法就好", letter: "T" },
    { label: "有点沮丧，需要时间消化", letter: "F" },
    { label: "早就猜到可能会这样", letter: "N" },
    { label: "分析原因，下次避免", letter: "T" },
  ]},
  { text: "你对“被依赖”的感觉是？", dim: "T / F", options: [
    { label: "可以接受，甚至有点喜欢", letter: "F" },
    { label: "会有压力，但也不忍心拒绝", letter: "F" },
    { label: "更希望彼此都能自己处理好", letter: "I" },
    { label: "如果对方值得，我愿意承担", letter: "T" },
  ]},
  { text: "闲下来的时候，你脑子里更容易想什么？", dim: "J / P", options: [
    { label: "一些温柔或平静的事情", letter: "F" },
    { label: "最近发生的情绪波动", letter: "F" },
    { label: "一些奇怪、跳跃的想法", letter: "N" },
    { label: "接下来要做的事或目标", letter: "J" },
  ]},
  { text: "你更倾向于用什么方式表达在意？", dim: "T / F", options: [
    { label: "默默付出，不求回报", letter: "F" },
    { label: "直接说出来，或用情绪表现", letter: "E" },
    { label: "用玩笑和调侃掩饰", letter: "P" },
    { label: "用实际行动证明", letter: "T" },
  ]},
  { text: "面对强势的人，你通常会？", dim: "T / F", options: [
    { label: "尽量配合，不想起冲突", letter: "F" },
    { label: "心里不舒服，但未必会说", letter: "F" },
    { label: "保持距离，观察对方", letter: "I" },
    { label: "不卑不亢，该坚持还是坚持", letter: "T" },
  ]},
  { text: "你觉得自己更接近哪种状态？", dim: "T / F", options: [
    { label: "愿意为重要的人调整自己", letter: "F" },
    { label: "情绪起伏比较明显", letter: "F" },
    { label: "外表轻松，内心其实有距离", letter: "N" },
    { label: "目标明确，行动优先", letter: "T" },
  ]},
  { text: "如果生活突然变得很混乱，你更可能？", dim: "T / F", options: [
    { label: "努力维持自己能控制的部分", letter: "J" },
    { label: "情绪先受到影响，再慢慢适应", letter: "F" },
    { label: "用一种抽离的态度看待", letter: "N" },
    { label: "直接进入解决问题的模式", letter: "T" },
  ]},
  { text: "你更希望自己的生活是？", dim: "T / F", options: [
    { label: "有人长期稳定地陪着", letter: "F" },
    { label: "充满真实的情绪流动", letter: "F" },
    { label: "保留一定的神秘与自由", letter: "N" },
    { label: "有方向、有行动、有成长", letter: "T" },
  ]},
];

const CHARACTERS = [
  { name: "诺登", image: "assets/blacksouls2/thumbs320/34e2abde05adbb44731dabe24ab1ad36_750.webp", color: "#4f46e5", color2: "#7c3aed", tagline: "沉稳可靠的守护者，话不多，但值得托付。", traits: ["安静而有担当，说到做到", "情绪稳定，是可靠的依靠", "重视承诺，不会轻易动摇"] },
  { name: "假海龟", image: "assets/blacksouls2/thumbs320/dd51b492b60e4ae0c2be746f7ac3f25d.webp", color: "#0d9488", color2: "#134e4a", tagline: "慢悠悠的温柔派，看似迷糊，其实心思细腻。", traits: ["温和耐心，从不催促别人", "共情力强，善于倾听", "慢热但真诚，认定了就不放手"] },
  { name: "渡渡", image: "assets/blacksouls2/thumbs320/172730f840a9e75b7ce30ad6d03b5380.webp", color: "#0284c7", color2: "#0c4a6e", tagline: "元气满满的乐天派，走到哪儿都带着笑声。", traits: ["乐观开朗，感染力十足", "直率单纯，不藏着掖着", "偶尔冒失，却总能把气氛变轻松"] },
  { name: "柴郡猫", image: "assets/blacksouls2/thumbs320/d2d405686ba5aa930e4858f30f74d6c9.webp", color: "#a855f7", color2: "#6b21a8", tagline: "神出鬼没的谜语人，笑容背后藏着深意。", traits: ["神秘有趣，永远猜不透", "聪明敏锐，看人很准", "喜欢保持距离，却始终在意着你"] },
  { name: "蕾克", image: "assets/blacksouls2/thumbs320/1bd86dea578df910bbc4ac24ac65fd95_750.webp", color: "#0891b2", color2: "#155e75", tagline: "冷静独立的实干家，外冷内热，值得信赖。", traits: ["理性果断，行动力强", "外冷内热，情感藏得很深", "目标明确，关键时刻靠得住"] },
  { name: "比尔", image: "assets/blacksouls2/thumbs320/e1c9f8195c40504fdfe86f14d5ec7f38.webp", color: "#d97706", color2: "#92400e", tagline: "嘴硬心软的行动派，嘴上嫌弃，手上却没停过。", traits: ["务实能干，擅长解决实际问题", "表面冷淡，其实很护短", "嘴上不饶人，关键时刻最可靠"] },
  { name: "普利凯特", image: "assets/blacksouls2/thumbs320/9a91945357b2769a39ff41df51731b98_750.webp", color: "#059669", color2: "#047857", tagline: "轻盈灵动的小精灵，走到哪里都讨人喜欢。", traits: ["活泼灵巧，人缘极好", "细心体贴，总在照顾别人", "乐观随和，适应能力很强"] },
  { name: "梅贝尔", image: "assets/blacksouls2/thumbs320/Screenshot_2026-08-11-16-01-24-107_ai.x.grok_1786.webp", color: "#e11d48", color2: "#9f1239", tagline: "温柔细腻的共情者，能接住你所有的情绪。", traits: ["情感丰富，共情力强", "温柔包容，让人安心", "重视关系，愿意默默付出"] },
  { name: "希夏", image: "assets/blacksouls2/thumbs320/266a6afff2fea3304c76d63230bedbf4.webp", color: "#7c3aed", color2: "#4c1d95", tagline: "安静神秘的存在，有自己的小小世界。", traits: ["内敛安静，不轻易展露内心", "观察力强，心思细腻", "需要自己的空间，也尊重你的"] },
  { name: "班达斯奈奇", image: "assets/blacksouls2/thumbs320/7a171a6cb0f0e61c0fe00f3d7b686ff7.webp", color: "#ea580c", color2: "#7c2d12", tagline: "野性难驯的行动派，想到就做，绝不拖沓。", traits: ["直来直往，讨厌绕弯子", "精力旺盛，行动力惊人", "自由奔放，不喜欢被束缚"] },
  { name: "贾布加布", image: "assets/blacksouls2/thumbs320/6dbce6dfb7f8ebfc866ca6556a9a97ee.webp", color: "#65a30d", color2: "#3f6212", tagline: "古怪又热闹的活宝，永远猜不到他下一步。", traits: ["古灵精怪，脑洞清奇", "爱热闹，总能带来惊喜", "看似不着调，其实很重感情"] },
  { name: "贾巴沃克", image: "assets/blacksouls2/thumbs320/c2289a38dc28e3002b0e4c6d32781d0c.webp", color: "#be123c", color2: "#4c0519", tagline: "强大而神秘的存在，令人敬畏，又忍不住靠近。", traits: ["气场强大，让人难以忽视", "深藏不露，心思难测", "认定的事，会贯彻到底"] },
];

const ROSTER_ORDER = [
  "蕾克",
  "贾布加布",
  "班达斯奈奇",
  "普利凯特",
  "诺登",
  "希夏",
  "渡渡",
  "贾巴沃克",
  "柴郡猫",
  "假海龟",
  "比尔",
  "梅贝尔",
];

// 结果匹配规则：每个角色都有一组理想的 A / B / C / D 作答分布。
// 最终根据你的答案分布与角色目标分布的距离来决定结果。
const CHARACTER_TARGETS = {
  诺登: [14, 8, 6, 0],
  假海龟: [3, 1, 3, 21],
  渡渡: [0, 14, 14, 0],
  柴郡猫: [14, 0, 14, 0],
  蕾克: [0, 0, 14, 14],
  比尔: [7, 14, 0, 7],
  普利凯特: [7, 11, 0, 10],
  梅贝尔: [7, 14, 7, 0],
  希夏: [7, 0, 7, 14],
  班达斯奈奇: [14, 0, 7, 7],
  贾布加布: [0, 14, 7, 7],
  贾巴沃克: [16, 7, 1, 4],
};

// 判定优先级：仅在匹配距离完全相同时使用，按此顺序决定最终显示角色
const WIN_PRIORITY = CHARACTERS.map((character) => character.name);
