const sunDataArr: Data[] = [
  {
    name: 'Aries Sun',
    desc: 'The first sign of the zodiac Aries loves to be number one. Naturally, this dynamic fire sign is no stranger to competition. Bold and ambitious, Aries dives headfirst into even the most challenging situations—and they will make sure they always come out on top!',
  },
  {
    name: 'Taurus Sun',
    desc: 'What sign is more likely to take a six-hour bath, followed by a luxurious Swedish massage and decadent dessert spread? Why Taurus, of course! Taurus is an earth sign represented by the bull. Like their celestial spirit animal, Taureans enjoy relaxing in serene, bucolic environments surrounded by soft sounds, soothing aromas, and succulent flavors.',
  },
  {
    name: 'Gemini Sun',
    desc: 'Have you ever been so busy that you wished you could clone yourself just to get everything done? That is the Gemini experience in a nutshell. Spontaneous, playful, and adorably erratic, Gemini is driven by its insatiable curiosity. Appropriately symbolized by the celestial twins, this air sign was interested in so many pursuits that it had to double itself. You know, NBD!',
  },
  {
    name: 'Cancer Sun',
    desc: 'Represented by the crab, Cancer seamlessly weaves between the sea and shore representing Cancer’s ability to exist in both emotional and material realms. Cancers are highly intuitive and their psychic abilities manifest in tangible spaces. But—just like the hard-shelled crustaceans—this water sign is willing to do whatever it takes to protect itself emotionally. In order to get to know this sign, you are going to need to establish trust!',
  },
  {
    name: 'Leo Sun',
    desc: 'Roll out the red carpet because Leo has arrived. Passionate, loyal, and infamously dramatic, Leo is represented by the lion and these spirited fire signs are the kings and queens of the celestial jungle. They are delighted to embrace their royal status: Vivacious, theatrical, and fiery, Leos love to bask in the spotlight and celebrate… well, themselves.',
  },
  {
    name: 'Virgo Sun',
    desc: 'You know the expression, "if you want something done, give it to a busy person?" Well, that definitely is the Virgo anthem. Virgos are logical, practical, and systematic in their approach to life. Virgo is an earth sign historically represented by the goddess of wheat and agriculture, an association that speaks to Virgo is deep-rooted presence in the material world. This earth sign is a perfectionist at heart and is not afraid to improve skills through diligent and consistent practice',
  },
  {
    name: 'Libra Sun',
    desc: 'Balance, harmony, and justice define Libra energy. As a cardinal air sign, Libra is represented by the scales (interestingly, the only inanimate object of the zodiac), an association that reflects Libra is fixation on establishing equilibrium. Libra is obsessed with symmetry and strives to create equilibrium in all areas of life — especially when it comes to matters of the heart.',
  },
  {
    name: 'Scorpio Sun',
    desc: 'Elusive and mysterious, Scorpio is one of the most misunderstood signs of the zodiac. Scorpio is a water sign that uses emotional energy as fuel, cultivating powerful wisdom through both the physical and unseen realms. In fact, Scorpio derives its extraordinary courage from its psychic abilities, which is what makes this sign one of the most complicated, dynamic signs of the zodiac.',
  },
  {
    name: 'Sagittarius Sun',
    desc: 'Oh, the places Sagittarius goes! But… actually. This fire sign knows no bounds. Represented by the archer, Sagittarians are always on a quest for knowledge. The last fire sign of the zodiac, Sagittarius launches its many pursuits like blazing arrows, chasing after geographical, intellectual, and spiritual adventures.',
  },
  {
    name: 'Capricorn Sun',
    desc: 'What is the most valuable resource? For Capricorn, the answer is clear: Time. Capricorn is climbing the mountain straight to the top and knows that patience, perseverance, and dedication is the only way to scale. The last earth sign of the zodiac, Capricorn, is represented by the sea-goat, a mythological creature with the body of a goat and the tail of a fish. Accordingly, Capricorns are skilled at navigating both the material and emotional realms.',
  },
  {
    name: 'Aquarius Sun',
    desc: 'Despite the "aqua" in its name, Aquarius is actually the last air sign of the zodiac. Innovative, progressive, and shamelessly revolutionary, Aquarius is represented by the water bearer, the mystical healer who bestows water, or life, upon the land. Accordingly, Aquarius is the most humanitarian astrological sign. At the end of the day, Aquarius is dedicated to making the world a better place.',
  },
  {
    name: 'Pisces Sun',
    desc: 'If you looked up the word "psychic" in the dictionary, there would definitely be a picture of Pisces next to it. Pisces is the most intuitive, sensitive, and empathetic sign of the entire zodiac — and that’s because it’s the last of the last. As the final sign, Pisces has absorbed every lesson — the joys and the pain, the hopes and the fears — learned by all of the other signs. It is symbolized by two fish swimming in opposite directions, representing the constant division of Pisces attention between fantasy and reality.',
  },
  { name: '', desc: '' },
]

const moonDataArr: Data[] = [{ name: 'Aries Moon', desc: '' }]
const ascendantDataArr: Data[] = [
  {
    name: 'Aries Ascendant',
    desc: 'If you are an Aries rising, chances are you come off as brave, opinionated, and independent. You have a powerful and commanding presence and may even be seen as intimidating. You are the fierce warrior of the zodiac. Aries ruling planet is Mars, the god of war. Being the first sign, you lead the cavalry. As the first fire sign of the zodiac, you are intensely competitive and view the world as a series of competitions. Aries rising, you are a trailblazer who leaps before you look and asks for forgiveness, not permission. You also act on your instincts, which are usually spot-on.',
  },
  {
    name: 'Taurus Ascendant',
    desc: 'If you are a Taurus rising, you likely give off fierce, dependable, and strong-willed vibes. But you also have a softer side. You enjoy the good things in life, including beautiful clothes, fine food, and massages. Taurus sometimes gets pigeonholed as materialistic, and while you do like to surround yourself with gorgeous finery, you are also hard-working enough that you have earned a bit of luxury. Your ruling planet is sensual Venus, the goddess of beauty, love, and abundance, so you cannot help that you have refined taste. You are the first earth sign, and you represent earthiness in its purest form. This means you like being active and creative with your hands — for you, this could mean gardening, cooking, knitting, or even the challenge of finding an innovative new makeup look.',
  },
  {
    name: 'Gemini Ascendant',
    desc: 'If you are a Gemini rising, people likely perceive you as talkative, bright, and curious. Your highly creative mind can spit out ideas a mile a minute. However, you might get overwhelmed sometimes by the desire to do everything at once. This same principle can be applied to your love life. Geminis are infamous heartbreakers and can be very picky when settling down with someone. It is not because you are insensitive; it is because you are waiting for your perfect match (this sign is represented by the twins). Gemini is ruling planet is Mercury, the messenger of the gods. As a result, you come off as charming, well-spoken, and are likely an excellent public speaker.',
  },
  {
    name: 'Cancer Ascendant',
    desc: 'If you are a Cancer rising, then "traditional" and "nurturing" are words often used to describe you. You like your routine — after all, you have taken time and care to establish yourself and make things exactly the way you want them to be. Your home life is very important to you, so you tend to care deeply about your personal space and the people allowed inside. You might also be the person people come to with problems because you know how to hold space for people. But dont get it twisted, Cancers are more than the sensitive beings people often make them out to be. They come with pinchers and a hard exterior, after all. But because the intuitive moon rules the sign, you present yourself as kind and poetic as long as your claws are not out.',
  },
  {
    name: 'Leo Ascendant',
    desc: 'If you are a Leo rising, people probably think of you as confident, vibrant, and fun. You have a flair for the dramatic, and people immediately notice when you walk into the room. Whether you work in the arts or just have an epic Instagram feed, you are also highly creative. Seeing you live your best life inspires others to do the same. Leo season is the summer, and you carry that carefree, sunny spirit with you. This sign is also known as the child of the zodiac. Like children, you live in the moment but can also be a little demanding. Not everyone can keep up with your fiery energy, but don not let the haters get you down. Leo is ruling planet is the powerful sun, so you were made for the spotlight (and likely have great hair and a fantastic sense of style). ',
  },
  { name: 'Virgo Ascendant', desc: '' },
  {
    name: '',
    desc: 'If you are a Virgo rising, people who meet you may describe you as organized, put together, and reliable. You may give the air of a perfectionist, which can be a bit intimidating at times. This sign is ruling planet is messenger Mercury, and as a result, Virgo risings are communicative and curious. Friends and lovers likely come to you for advice. Virgo is the healer of the zodiac and cares deeply about those around them. If you are a Virgo rising, make sure to carve out time to care for yourself as well as others.',
  },
  {
    name: 'Libra Ascendant',
    desc: 'If you are a Libra rising, those who come into contact with you likely think of you as attractive, romantic, and sweet - although you may have a sharp tongue at times, even if that just means you are witty. You may have heard that Libras are indecisive, and while this may be true, it comes with good intentions because you generally want everyone to be happy. The scales represent this air sign, and as a result, you may always try to keep the peace and ensure justice is served. It is also the sign of partnerships, and with lover Venus as your ruling planet, Libra risings tend to be flirty and ethereal.',
  },
  {
    name: 'Scorpio Ascendant',
    desc: 'If you are a Scorpio rising, you may come off as mysterious, quiet, and alluring. It is not always a sexually charged charm, although it can be. Scorpios have a reputation for being the most sexual sign of the zodiac, so your inherent sensuality may intimidate others when they first meet you. Most of the time, there is so much going on behind that cool, pristine face that people want to know more and cannot stay away. Rising Scorpios are intense, and you have your reasons. You have likely had some experiences that have caused you to put up your guard, especially if you have other Scorpio influences in your chart. This sign is ruled by both the warrior Mars, and Pluto, the lord of the underworld, which explains some of the intensity.',
  },
  {
    name: 'Sagittarius Ascendant',
    desc: 'If you are a Sagittarius rising, people may describe you as intelligent and a fabulous storyteller who is always the life of the party. You have a zest for life that is contagious and are known as the optimist of the zodiac. The glass is always half full for you. You are outspoken, opinionated, and say what others are not saying. You can often be quite blunt, and sometimes it backfires. But, because the lucky planet Jupiter rules Sagittarius, you always come out on top.',
  },
  {
    name: 'Capricorn Ascendant',
    desc: 'If you are a Capricorn rising, you likely come off as mature, organized, and driven. You are always put together and prepared. People may think of you as a skilled businessperson with little interest in games, both in your professional and personal life. You strive for greatness, and you expect much of yourself and others. Much of this is because strict Saturn rules Capricorn, giving you major disciplinarian vibes. And yes, rising Cap, this can be as kinky as it sounds. While people tend to focus on your ambition, you also have a wild devilish side, which can be addictive to lovers.',
  },
  {
    name: 'Aquarius Ascendant',
    desc: 'If you are an Aquarius rising, you may be perceived as intellectual, innovative, and a humanitarian. Some think the "aqua" in Aquarius means you are a water sign, but Aquarius is actually the third air sign (along with Gemini and Libra) and a symbol of the water bearer. This sign has much more to do with community and being part of the collective; it is about sharing the water, not being the water. You are also known for being very individualistic and unafraid to let your freak flag fly. Your ruling planet is Uranus, which is as eccentric as you are.',
  },
]
