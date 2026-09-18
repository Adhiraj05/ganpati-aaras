/*
 * गौरी-गणपती आरास २०२६ ,  पत्री संग्रह (data)
 * ------------------------------------------------------------------
 * आई / संपादकासाठी सूचना (How to edit):
 *
 *  • पहिली पत्री "मालती" पूर्ण संशोधनासह (MALATI) खाली दिली आहे ,
 *    तिच्या रचनेप्रमाणे कोणतीही पत्री विस्तृत करता येते.
 *  • उरलेल्या २० पत्री BRIEF यादीत संक्षिप्त, अचूक माहितीसह आहेत;
 *    त्या आपोआप पूर्ण पानात रूपांतरित होतात.
 *  • नवीन फोटो  assets/img/<id>.png  येथे ठेवा, नसेल तर सुंदर
 *    वनस्पती-placeholder आपोआप दिसतो.
 *  • नाम-मंत्र फक्त आईंच्या पूजाविधीनुसार खात्रीशीर असेल तेव्हाच
 *    "mantra" भरा, तोपर्यंत पानावर नम्र सूचना दिसते.
 *
 *  प्रत्येक मजकूर द्विभाषिक:  { mr: "मराठी", en: "English" }
 * ------------------------------------------------------------------
 */

const FESTIVAL = {
  year: "२०२६",
  title:  { mr: "गौरी-गणपती आरास", en: "Gauri-Ganpati Aaras" },
  theme:  { mr: "गणरायाचे प्रिय वृक्ष, पत्री आणि फुले",
            en: "The sacred trees, leaves & flowers beloved of Shri Ganesha" },
  intro:  { mr: "गणेशपूजेत अर्पण होणाऱ्या एकविंशति (२१) पवित्र पत्रींची ओळख, त्यांची पूजेतील जागा, संस्कृत व पौराणिक संदर्भ, आयुर्वेद, वनस्पतीशास्त्र आणि घरगुती संगोपन.",
            en: "A living almanac of the twenty-one sacred leaves offered to Ganesha, each plant's place in the puja, its Sanskrit and mythological roots, Ayurveda, botany and how to grow it at home." },
  host:   { mr: "नाईक निंबाळकर परिवार | ज्येष्ठागौरी–गणपती २०२६ आरास",
            en: "Naik Nimbalkar Family | Jyeshtha Gauri–Ganapati 2026 Aarās" },

  /* family welcome, shown at the top of the home hero */
  welcome:{ mr: "ज्येष्ठागौरी आणि गणरायाच्या मंगल सान्निध्यात नाईक निंबाळकर परिवार आपले सहर्ष स्वागत करीत आहे",
            en: "In the auspicious presence of Jyeshtha Gauri and Ganaraya, the Naik Nimbalkar family warmly welcomes you." },

  /* festival deep-dive, shown on the home page */
  about: [
    { icon:"🕉️", title:{ mr:"गणेश चतुर्थी", en:"Ganesh Chaturthi" },
      body:{ mr:"भाद्रपद शुक्ल चतुर्थीला श्रीगणेशाचा जन्मोत्सव साजरा होतो. विघ्नहर्ता आणि बुद्धीची देवता असलेला गणपती घरोघरी विराजमान होतो आणि अनंत चतुर्दशीला विसर्जन होते. लोकमान्य टिळकांनी हा उत्सव सार्वजनिक करून एकतेचे प्रतीक बनवला.",
             en:"On Bhadrapada Shukla Chaturthi, Maharashtra welcomes the birth of Shri Ganesha, remover of obstacles and lord of wisdom. He is installed at home and bid farewell with visarjan on Anant Chaturdashi. Lokmanya Tilak turned it into a great public celebration of unity." } },
    { icon:"🌸", title:{ mr:"गौरी-गणपती", en:"Gauri-Ganpati" },
      body:{ mr:"गणपती-उत्सवात माहेरवाशिणींसारख्या ज्येष्ठा गौरी (पार्वती, गणेशाची माता) भाद्रपद शुक्ल पक्षातील सलग तीन नक्षत्रांवर, अनुक्रमे अनुराधा, ज्येष्ठा आणि मूळ, तीन दिवसांसाठी घरी येतात. गौरी-आवाहन (आगमन), गौरी-पूजन (महानैवेद्य) आणि गौरी-विसर्जन (निरोप) या तीन दिवसांत त्यांना सुरेख सजवून, पहिल्या दिवशी मेथीची भाजी व बाजरीची भाकरी, दुसऱ्या दिवशी पुरणपोळी आणि तिसऱ्या दिवशी गोड डाळ-खिचडीचा नैवेद्य दाखविला जातो.",
             en:"During the Ganapati festival, Jyeshtha Gauri, regarded as daughters returning to their maternal home, are welcomed into the household for three days, corresponding to three consecutive nakshatras of the bright fortnight of Bhadrapada: Anuradha, Jyeshtha and Mula. The three days are kept as Gauri Avahana (Arrival), Gauri Pujan (Mahaneivedya) and Gauri Visarjan (Farewell). During these days the Gauris are beautifully adorned and offered traditional naivedya: fenugreek vegetable with bajra bhakri on the first day, puran poli on the second day, and sweet dal-khichadi on the third day." } },
    { icon:"🎨", title:{ mr:"आरास म्हणजे काय", en:"What is an Aaras" },
      body:{ mr:"‘आरास’ म्हणजे गणपतीभोवती घरच्यांनी मनापासून सजवलेला देखावा. दरवर्षी एक नवी संकल्पना घेतली जाते. यंदाची आरास गणरायाच्या प्रिय वृक्ष, पत्री आणि फुलांना समर्पित आहे.",
             en:"An aaras is the decorated scene a family lovingly builds around the idol, with a fresh theme each year. This year's aaras is devoted to the trees, leaves and flowers dear to Ganesha." } },
    { icon:"🌿", title:{ mr:"एकविंशति पत्री", en:"The Twenty-One Leaves" },
      body:{ mr:"पूजेत गणेशाला एकविंशति (२१) पवित्र पत्री, प्रत्येक एका गणेश-नामासह अर्पण केली जाते. निसर्ग आणि भक्ती यांना जोडणारी ही सुंदर परंपरा या आरासेचा गाभा आहे.",
             en:"In the puja, twenty-one sacred leaves are offered to Ganesha, each with one of his names. This lovely tradition, binding nature to devotion, is the heart of our aaras." } }
  ],

  /* 2026 almanac dates (Maharashtra) */
  dates: [
    { label:{ mr:"गणेश स्थापना", en:"Ganesh Sthapana" },        date:{ mr:"सोमवार, १४ सप्टेंबर", en:"Mon, 14 Sep" } },
    { label:{ mr:"ज्येष्ठा गौरी आवाहन", en:"Gauri Avahan" },     date:{ mr:"गुरुवार, १७ सप्टेंबर", en:"Thu, 17 Sep" } },
    { label:{ mr:"ज्येष्ठा गौरी पूजन", en:"Gauri Pujan" },       date:{ mr:"शुक्रवार, १८ सप्टेंबर", en:"Fri, 18 Sep" } },
    { label:{ mr:"ज्येष्ठा गौरी विसर्जन", en:"Gauri Visarjan" }, date:{ mr:"शनिवार, १९ सप्टेंबर", en:"Sat, 19 Sep" } },
    { label:{ mr:"अनंत चतुर्दशी विसर्जन", en:"Anant Chaturdashi" }, date:{ mr:"शुक्रवार, २५ सप्टेंबर", en:"Fri, 25 Sep" } }
  ]
};

const DEVANAGARI_NUM = ["०","१","२","३","४","५","६","७","८","९","१०","११","१२","१३","१४","१५","१६","१७","१८","१९","२०","२१"];

/* एकविंशति पत्री नाम-मंत्र (आईंच्या verified मंत्र फाईलवरून, पत्री क्रमानुसार) */
const MANTRAS = [
  { deity:"सुमुख",     line:"ॐ सुमुखाय नमः । मालतीपत्रं समर्पयामि ॥" },
  { deity:"गणाधिप",    line:"ॐ गणाधिपाय नमः । भृंगराजपत्रं समर्पयामि ॥" },
  { deity:"उमापुत्र",  line:"ॐ उमापुत्राय नमः । बिल्वपत्रं समर्पयामि ॥" },
  { deity:"गजानन",     line:"ॐ गजाननाय नमः । श्वेतदूर्वापत्रं समर्पयामि ॥" },
  { deity:"लंबोदर",    line:"ॐ लंबोदराय नमः । बदरीपत्रं समर्पयामि ॥" },
  { deity:"हरसूनु",    line:"ॐ हरसूनवे नमः । धत्तूरपत्रं समर्पयामि ॥" },
  { deity:"गजकर्णक",   line:"ॐ गजकर्णकाय नमः । तुलसीपत्रं समर्पयामि ॥" },
  { deity:"वक्रतुण्ड", line:"ॐ वक्रतुण्डाय नमः । शमीपत्रं समर्पयामि ॥" },
  { deity:"गुहाग्रज",  line:"ॐ गुहाग्रजाय नमः । अपामार्गपत्रं समर्पयामि ॥" },
  { deity:"एकदंत",     line:"ॐ एकदंताय नमः । बृहतीपत्रं समर्पयामि ॥" },
  { deity:"विकट",      line:"ॐ विकटाय नमः । करवीरपत्रं समर्पयामि ॥" },
  { deity:"कपिल",      line:"ॐ कपिलाय नमः । अर्कपत्रं समर्पयामि ॥" },
  { deity:"गजदंत",     line:"ॐ गजदंताय नमः । अर्जुनपत्रं समर्पयामि ॥" },
  { deity:"विघ्नराज",  line:"ॐ विघ्नराजाय नमः । विष्णुक्रान्तापत्रं समर्पयामि ॥" },
  { deity:"बटु",       line:"ॐ बटवे नमः । दाडिमीपत्रं समर्पयामि ॥" },
  { deity:"सुराग्रज",  line:"ॐ सुराग्रजाय नमः । देवदारुपत्रं समर्पयामि ॥" },
  { deity:"भालचंद्र",  line:"ॐ भालचंद्राय नमः । मरुवकपत्रं समर्पयामि ॥" },
  { deity:"हेरंब",     line:"ॐ हेरंबाय नमः । अश्वत्थपत्रं समर्पयामि ॥" },
  { deity:"चतुर्भुज",  line:"ॐ चतुर्भुजाय नमः । जातिपत्रं समर्पयामि ॥" },
  { deity:"विनायक",    line:"ॐ विनायकाय नमः । केतकीपत्रं समर्पयामि ॥" },
  { deity:"सर्वेश्वर", line:"ॐ सर्वेश्वराय नमः । अगस्तिपत्रं समर्पयामि ॥" }
];

/* master doc content (mom verified, bilingual): Ayurveda + Botany + Care per patri */
const MASTER = {
  1: {"ayurveda": [{"mr": "आयुर्वेदिक संदर्भात मालतीच्या फुलांचा उल्लेख सुगंधी द्रव्यांमध्ये तसेच त्वचा व दाहाशी संबंधित पारंपरिक उपयोगांत आढळतो.", "en": "In Ayurveda, Malati's flowers appear in fragrant preparations and in traditional remedies for the skin and inflammation."}, {"mr": "मालतीच्या विविध वनस्पतीभागांचा पारंपरिक औषधी कल्पनांमध्ये उल्लेख आढळतो; प्रत्यक्ष औषधी वापरासाठी अचूक वनस्पतीओळख व तज्ज्ञ मार्गदर्शन आवश्यक आहे.", "en": "Different parts of the plant appear in traditional medicine, but any real use needs correct identification and expert guidance."}], "botany": [{"mr": "ही सुगंधी वेल असून पांढरी, सुगंधी फुले आणि संयुक्त पाने ही तिची प्रमुख वैशिष्ट्ये आहेत.", "en": "A fragrant climber with white, scented flowers and compound leaves."}, {"mr": "फुलांचा सुगंध विविध परागीभवन करणाऱ्या कीटकांना आकर्षित करतो; आधार किंवा मांडव दिल्यास वेल चांगली वाढते.", "en": "The scent draws a range of pollinating insects, and the vine does best with a support or trellis."}], "care": [{"mr": "भरपूर प्रकाश, आधार देणारी कुंडी किंवा मांडव आणि निचरा असलेली सुपीक माती योग्य असते.", "en": "Give it plenty of light, a pot or trellis to climb, and fertile, well-draining soil."}, {"mr": "मातीचा वरचा थर कोरडा झाल्यावर पाणी द्यावे; पाणी साचू देऊ नये.", "en": "Water once the top of the soil dries, and don't let it stay soggy."}]},
  2: {"ayurveda": [{"mr": "भृंगराज विशेषतः केशसंवर्धनासाठी प्रसिद्ध असून पारंपरिक केशतेल व औषधी तयारींमध्ये त्याचा उल्लेख आढळतो.", "en": "Bhringaraj is best known for hair care and appears in traditional hair oils and remedies."}, {"mr": "आयुर्वेदिक द्रव्यगुणवर्णनात भृंगराजाचा यकृताशी संबंधित पारंपरिक उपयोगही आढळतो.", "en": "Ayurvedic texts also note a traditional use connected with the liver."}], "botany": [{"mr": "ही लहान शाकीय वनस्पती असून समोरासमोर येणारी पाने आणि लहान पांढरी फुले ही तिची प्रमुख ओळख आहेत.", "en": "A small herb, known by its opposite leaves and little white flowers."}, {"mr": "ओलसर जागा, शेतकडे व पाण्याच्या आसपासच्या अधिवासात ती वाढू शकते; त्यामुळे स्थानिक लहान वनस्पतीविविधतेत तिचे योगदान असते.", "en": "It grows in damp spots, along field edges and near water, adding to the local mix of small plants."}], "care": [{"mr": "सूर्यप्रकाश ते अंशतः सावली आणि ओलावा टिकवून ठेवणारी पण निचरा असलेली माती योग्य असते.", "en": "Suits sun to part shade and soil that holds moisture but still drains."}, {"mr": "कुंडीतील रोपाची वाढ नियमित छाटणी व पुरेशा प्रकाशामुळे चांगली राहते.", "en": "A potted plant stays healthy with regular trimming and enough light."}]},
  3: {"ayurveda": [{"mr": "बिल्वफळाचा उपयोग पचनसंस्थेशी संबंधित विकारांमध्ये, विशेषतः अतिसार व आमांशासारख्या अवस्थांमध्ये, पारंपरिक आयुर्वेदिक संदर्भांत वर्णिला आहे.", "en": "Bilva fruit is used in traditional Ayurveda for digestive troubles, especially diarrhoea and dysentery."}, {"mr": "बिल्वाची पाने, मुळे आणि फळ यांचे स्वतंत्र पारंपरिक औषधी उपयोग आढळतात; द्रव्यभागानुसार उपयोग बदलतो.", "en": "Its leaves, roots and fruit each have their own traditional uses, depending on the part."}], "botany": [{"mr": "त्रिदली पाने, काटेरी फांद्या आणि कठीण कवचाचे गोल फळ ही बेलाची वैशिष्ट्यपूर्ण लक्षणे आहेत.", "en": "Marked by trifoliate leaves, thorny branches and a round, hard-shelled fruit."}, {"mr": "उष्ण व तुलनेने कोरड्या हवामानातही हा वृक्ष तग धरू शकतो; फुले, फळे व बिया स्थानिक जैवविविधतेला उपयोगी ठरतात.", "en": "It stands up to warm, fairly dry weather, and its flowers, fruit and seeds support local wildlife."}], "care": [{"mr": "भरपूर सूर्यप्रकाश, मध्यम पाणी आणि निचरा असलेली जमीन योग्य असते.", "en": "Give it plenty of sun, moderate water and well-draining soil."}, {"mr": "रोप मोठे होऊ शकते, म्हणून मोकळी जागा आणि दीर्घकालीन वाढीचा विचार करावा.", "en": "It can grow into a large tree, so allow open space and plan for the long term."}]},
  4: {"ayurveda": [{"mr": "दूर्वेला आयुर्वेदिक संदर्भात शीतल, स्तंभक आणि रक्तस्राव कमी करण्यास सहाय्यकारी गुणांशी जोडले जाते.", "en": "In Ayurveda, Durva is linked with cooling and astringent qualities, and is traditionally seen as helpful in reducing bleeding."}, {"mr": "दूर्वेचा उपयोग दाह व त्वचेशी संबंधित काही पारंपरिक उपचारवर्णनांतही आढळतो.", "en": "It also appears in some traditional remedies for inflammation and the skin."}], "botany": [{"mr": "धावते खोड मातीला टेकलेल्या गाठींवरून मुळे सोडते आणि त्यामुळे दूर्वा वेगाने पसरते.", "en": "Its creeping stems root wherever the nodes touch the ground, so it spreads quickly."}, {"mr": "दाट गवताचा थर जमिनीचे संरक्षण करण्यास व मातीची धूप कमी करण्यास मदत करू शकतो; म्हणून ती जमिनीच्या आच्छादनासाठी उपयुक्त ठरते.", "en": "A dense mat of this grass shields the soil and slows erosion, which makes it good ground cover."}], "care": [{"mr": "सूर्यप्रकाश आणि मध्यम ओलावा पुरेसा असतो; ही गवतवर्गीय वनस्पती जमिनीवर वेगाने पसरते.", "en": "Sun and moderate moisture are enough, and the grass spreads fast across the ground."}, {"mr": "कुंडी किंवा मोकळ्या जागेत पाणी साचणार नाही याची काळजी घ्यावी.", "en": "In a pot or open ground, make sure water doesn't pool."}]},
  5: {"ayurveda": [{"mr": "बदरीचे फळ पौष्टिक व पचनास सहाय्यकारी मानले जाते आणि त्याचा आहारात पारंपरिक वापर आहे.", "en": "Ber fruit is considered nourishing and good for digestion, and has a long dietary use."}, {"mr": "बदरीच्या पानांचा व फळांचा विविध पारंपरिक औषधी संदर्भांत उल्लेख आढळतो.", "en": "Its leaves and fruit appear in various traditional remedies."}], "botany": [{"mr": "काटेरी फांद्या, लहान पाने आणि खाद्य फळे ही बोराची प्रमुख वैशिष्ट्ये आहेत.", "en": "Known for its thorny branches, small leaves and edible fruit."}, {"mr": "फळे पक्षी व इतर प्राण्यांसाठी अन्नस्रोत ठरतात आणि त्यांच्या माध्यमातून बियांचा प्रसार होण्यास मदत होते.", "en": "The fruit feeds birds and other animals, which in turn help spread its seeds."}], "care": [{"mr": "भरपूर सूर्यप्रकाश आणि निचरा असलेली जमीन योग्य असते.", "en": "Give it plenty of sun and well-draining soil."}, {"mr": "पाणी कमी असतानाही वाढू शकते; सुरुवातीच्या वाढीस नियमित पाणी उपयुक्त ठरते.", "en": "It copes with little water, though regular watering helps it get established."}]},
  6: {"ayurveda": [{"mr": "धत्तूराचा उपयोग आयुर्वेदिक परंपरेत मुख्यतः विशिष्ट बाह्योपचारात्मक औषधी कल्पनांमध्ये वर्णिला आहे.", "en": "In Ayurveda, Dhatūra is used mainly in specific preparations for external use."}, {"mr": "धत्तूर विषारी वनस्पती आहे; अंतर्गत किंवा घरगुती औषधी प्रयोग करू नयेत. औषधी उपयोग तज्ज्ञांच्या मार्गदर्शनाखालीच केला जातो.", "en": "It is a poisonous plant, so never use it internally or as a home remedy. Any medicinal use is strictly under expert guidance."}], "botany": [{"mr": "मोठी, ठळक फुले आणि काटेरी फळे ही धत्तुराची सहज ओळखता येणारी वैशिष्ट्ये आहेत.", "en": "Easy to spot by its large, showy flowers and spiny fruit."}, {"mr": "फुले काही परागीभवन करणाऱ्या कीटकांना आकर्षित करतात; विषारीपणामुळे वनस्पती हाताळताना विशेष काळजी आवश्यक असते.", "en": "The flowers draw some pollinating insects, but the plant is poisonous, so handle it with care."}], "care": [{"mr": "सूर्यप्रकाश आणि चांगला निचरा असलेली माती योग्य असते.", "en": "Suits sun and well-draining soil."}, {"mr": "विषारी असल्याने लहान मुले व पाळीव प्राणी यांच्यापासून सुरक्षित अंतरावर ठेवावे.", "en": "Being poisonous, keep it well away from young children and pets."}]},
  7: {"ayurveda": [{"mr": "तुळशीचा पारंपरिक आयुर्वेदिक उपयोग कफ, श्वसनमार्ग आणि पचनाशी संबंधित तक्रारींमध्ये वर्णिला आहे.", "en": "Tulasi has a traditional Ayurvedic use for kapha and for the respiratory tract and digestion."}, {"mr": "तुळशीची पाने सुगंधी व उष्ण गुणधर्माच्या पारंपरिक द्रव्यांमध्ये वापरली जातात.", "en": "Its leaves go into traditional preparations valued for their aroma and warming quality."}], "botany": [{"mr": "सुगंधी पाने, चौकोनी खोड आणि मंजिरीसारखी फुलोरे ही तुळशीची प्रमुख वैशिष्ट्ये आहेत.", "en": "Recognised by its fragrant leaves, square stem and spike-like flower clusters."}, {"mr": "फुले व सुगंधी पाने विविध कीटकांना आकर्षित करतात; घरच्या अंगणात किंवा कुंडीत सहज वाढवता येते.", "en": "Its flowers and scented leaves draw a range of insects, and it grows easily in a courtyard or pot."}], "care": [{"mr": "भरपूर प्रकाश, मोजके नियमित पाणी आणि निचरा असलेली माती योग्य असते.", "en": "Give it plenty of light, modest regular water and well-draining soil."}, {"mr": "पाणी साचल्यास मुळांना त्रास होऊ शकतो; त्यामुळे कुंडीला योग्य निचरा असावा.", "en": "Waterlogging harms the roots, so make sure the pot drains well."}]},
  8: {"ayurveda": [{"mr": "शमीच्या साल, पाने व शेंगांचा उल्लेख त्वचा, दाह आणि काही पचनाशी संबंधित पारंपरिक उपयोगांत आढळतो.", "en": "The bark, leaves and pods of Shami appear in traditional remedies for the skin, inflammation and some digestive complaints."}, {"mr": "औषधी वापरात योग्य द्रव्यभाग आणि अचूक वनस्पतीओळख महत्त्वाची आहे.", "en": "Using the right part, and identifying the plant correctly, both matter for any medicinal use."}], "botany": [{"mr": "शमी उष्ण व कोरड्या प्रदेशाशी जुळवून घेणारा वृक्ष असून बारीक पाने आणि काटेरी फांद्या त्याची वैशिष्ट्ये आहेत.", "en": "Shami is suited to hot, dry country, with fine leaves and thorny branches."}, {"mr": "कोरड्या प्रदेशातील मातीचे संरक्षण, सावली आणि स्थानिक प्राणिजीवनाला आधार देण्यात शमीची पर्यावरणीय भूमिका महत्त्वाची आहे.", "en": "In dry regions it plays a real ecological role, holding the soil, giving shade and supporting local wildlife."}], "care": [{"mr": "भरपूर सूर्यप्रकाश आणि कोरडी ते मध्यम ओलाव्याची, निचरा असलेली जमीन योग्य असते.", "en": "Give it plenty of sun and dry to moderately moist, well-draining soil."}, {"mr": "मोकळ्या जागेत लागवड केल्यास वृक्षाला पुढील वाढीसाठी पुरेशी जागा द्यावी.", "en": "Planted in the open, give the tree room to grow."}]},
  9: {"ayurveda": [{"mr": "अपामार्गाचा उपयोग कफ, त्वचा आणि पचनाशी संबंधित विविध पारंपरिक औषधी योगांमध्ये वर्णिला आहे.", "en": "Apamarga appears in many traditional remedies linked to kapha, the skin and digestion."}, {"mr": "अपामार्गक्षाराला आयुर्वेदिक ग्रंथपरंपरेत विशेष स्थान आहे; त्याचा उपयोग विशिष्ट प्रक्रियांमध्ये केला जातो.", "en": "Apamarga kshara holds a special place in Ayurvedic texts and is used in certain procedures."}], "botany": [{"mr": "उघड्या जागा, रस्त्याकडेला व शेतीच्या कडेला सहज आढळणारी ही शाकीय वनस्पती आहे.", "en": "A common herb of open ground, roadsides and field margins."}, {"mr": "तिच्या बिया व काटेरी पुष्परचना प्राणी किंवा कपड्यांना चिकटून दूर जाऊ शकतात, त्यामुळे बियांचा प्रसार होण्यास मदत होते.", "en": "Its seeds and spiny flower-heads catch on animals and clothing and travel far, which helps spread the seed."}], "care": [{"mr": "सूर्यप्रकाश आणि साधी, निचरा असलेली जमीन पुरेशी असते.", "en": "Sun and ordinary, well-draining soil are enough."}, {"mr": "ही सहज उगवणारी वनस्पती असल्यामुळे अतिपाणी किंवा जास्त खताची आवश्यकता नसते.", "en": "It grows easily, so it needs no heavy watering or feeding."}]},
  10: {"ayurveda": [{"mr": "बृहतीचा पारंपरिक उपयोग श्वसनसंस्था, कफ आणि वाताशी संबंधित औषधी योगांत वर्णिला आहे.", "en": "Brihati is used in traditional preparations for the respiratory system, kapha and vata."}, {"mr": "दशमूळातील बृहतीशी संबंधित उल्लेख आयुर्वेदिक साहित्यात आढळतो; या आरासेसाठी वनस्पतीची ओळख Solanum lasiocarpum अशी निश्चित केली आहे.", "en": "Ayurvedic texts count it among the Dashamula roots; for this display the plant is taken as Solanum lasiocarpum."}], "botany": [{"mr": "काटेरी झुडूप, रुंद पाने आणि फळे ही डोरलीची प्रमुख वैशिष्ट्ये आहेत; काटे शाकाहारी प्राण्यांपासून संरक्षण देतात.", "en": "A thorny shrub with broad leaves and fruit; the thorns guard it against grazing animals."}, {"mr": "फुले व फळे स्थानिक कीटक व पक्ष्यांसाठी अन्नस्रोत ठरू शकतात आणि काटेरी रचना वन्यजीवांना आश्रय देते.", "en": "Its flowers and fruit can feed local insects and birds, while the thorny growth shelters wildlife."}], "care": [{"mr": "सूर्यप्रकाश आणि निचरा असलेली माती योग्य असते.", "en": "Suits sun and well-draining soil."}, {"mr": "काटेरी भाग असल्यामुळे लागवड व छाटणी करताना हातमोजे वापरणे सुरक्षित ठरते.", "en": "It is thorny, so gloves are wise when planting or pruning."}]},
  11: {"ayurveda": [{"mr": "करवीराचा उल्लेख आयुर्वेदिक परंपरेत विशिष्ट बाह्योपचारात्मक औषधी तयारींमध्ये आढळतो.", "en": "Karavira appears in Ayurvedic tradition in certain preparations for external use."}, {"mr": "करवीर अत्यंत विषारी असल्यामुळे औषधी उपयोग केवळ तज्ज्ञांच्या मार्गदर्शनाखाली व शास्त्रोक्त प्रक्रियेनंतरच केला जातो; घरगुती प्रयोग टाळावेत.", "en": "It is highly poisonous, so any medicinal use is only under expert guidance and after proper traditional processing. Avoid home use."}], "botany": [{"mr": "सदाहरित झुडूप, लांबट पाने आणि आकर्षक फुलांचे गुच्छ ही कण्हेराची प्रमुख वैशिष्ट्ये आहेत.", "en": "An evergreen shrub with long leaves and showy clusters of flowers."}, {"mr": "फुले परागीभवन करणाऱ्या कीटकांना आकर्षित करतात; मात्र वनस्पतीच्या विषारीपणामुळे मानव व पाळीव प्राण्यांपासून सुरक्षित अंतर ठेवणे आवश्यक आहे.", "en": "The flowers draw pollinators, but the plant is poisonous, so keep it a safe distance from people and pets."}], "care": [{"mr": "भरपूर सूर्यप्रकाश, मध्यम पाणी आणि निचरा असलेली माती योग्य असते.", "en": "Give it plenty of sun, moderate water and well-draining soil."}, {"mr": "विषारी असल्यामुळे मुलांपासून व पाळीव प्राण्यांपासून दूर ठेवणे आवश्यक आहे.", "en": "Being poisonous, keep it away from children and pets."}]},
  12: {"ayurveda": [{"mr": "अर्काचा उपयोग त्वचा, वेदना व सूज यांच्याशी संबंधित काही बाह्योपचारांत पारंपरिक आयुर्वेदिक संदर्भांत वर्णिला आहे.", "en": "Arka appears in traditional Ayurveda in some external treatments for the skin, pain and swelling."}, {"mr": "अर्काचा दुधाळ चीक तीव्र व चिडचिड निर्माण करणारा असू शकतो; अंतर्गत किंवा त्वचेवर स्वतःहून वापरू नये.", "en": "Its milky latex can be strongly irritant, so never use it internally or on the skin without expert guidance."}], "botany": [{"mr": "जाड, मांसल पाने आणि दुधाळ चीक ही रुईची प्रमुख वैशिष्ट्ये आहेत; चीक वनस्पतीचे शाकाहारी प्राण्यांपासून संरक्षण करतो.", "en": "Marked by thick, fleshy leaves and milky latex; the latex protects it from grazing animals."}, {"mr": "रुईची फुले व त्यावर येणारे कीटक स्थानिक परागीभवन व अन्नसाखळीचा भाग बनतात; कोरड्या हवामानातही ही वनस्पती तग धरते.", "en": "Its flowers and the insects they attract feed into local pollination and food chains, and the plant handles dry weather well."}], "care": [{"mr": "भरपूर सूर्यप्रकाश आणि कोरडी ते मध्यम ओलाव्याची जमीन योग्य असते.", "en": "Give it plenty of sun and dry to moderately moist soil."}, {"mr": "दुधाळ चीक त्वचेवर लागू नये; लागवड करताना सुरक्षित हाताळणी आवश्यक आहे.", "en": "Keep the milky latex off your skin, and handle the plant safely when planting."}]},
  13: {"ayurveda": [{"mr": "अर्जुनाची साल आयुर्वेदिक संदर्भात विशेष महत्त्वाची असून हृदयाशी संबंधित पारंपरिक औषधी उपयोगांसाठी तिचा उल्लेख आढळतो.", "en": "Arjuna bark is especially valued in Ayurveda and is noted for traditional uses connected with the heart."}, {"mr": "अर्जुनसाल विविध काढे व औषधी योगांमध्ये वापरली जाते; पारंपरिक वर्णनात तिचे हृद्य महत्त्व विशेषत्वाने नमूद केले जाते.", "en": "It goes into decoctions and other preparations, and traditional texts single out its value for the heart."}], "botany": [{"mr": "मोठा वृक्ष, राखाडी साल आणि नदीकाठच्या प्रदेशात वाढण्याची प्रवृत्ती ही अर्जुनाची वैशिष्ट्ये आहेत.", "en": "A large tree with grey bark that tends to grow along riverbanks."}, {"mr": "नदीकाठच्या मातीला मुळे घट्ट धरून ठेवण्यास अर्जुनाची मुळे मदत करतात; त्यामुळे धूप नियंत्रण व नदीकाठच्या परिसंस्थेसाठी त्याचे महत्त्व आहे.", "en": "Its roots bind riverbank soil firmly, which makes it important for controlling erosion and supporting riverside ecosystems."}], "care": [{"mr": "भरपूर सूर्यप्रकाश, खोल व निचरा असलेली जमीन आणि मोकळी जागा योग्य असते.", "en": "Give it plenty of sun, deep well-draining soil and open space."}, {"mr": "मोठा वृक्ष असल्यामुळे कायमस्वरूपी जागा निवडून लागवड करावी.", "en": "It grows into a large tree, so choose a permanent spot to plant it."}]},
  14: {"ayurveda": [{"mr": "विष्णुक्रांतेचा पारंपरिक आयुर्वेदिक उपयोग मेध्य द्रव्य म्हणून, म्हणजे स्मरण, एकाग्रता व मनाशी संबंधित वर्णनांत आढळतो.", "en": "Vishnukranta has a traditional Ayurvedic use as a medhya dravya, tied to memory, focus and the mind."}, {"mr": "‘शंखपुष्पी’ या नावाने विविध वनस्पती ओळखल्या जात असल्याने औषधी वापरासाठी विष्णुक्रांतेची शास्त्रीय ओळख निश्चित करणे आवश्यक आहे.", "en": "Several plants go by the name 'Shankhapushpi', so its botanical identity should be confirmed before any medicinal use."}], "botany": [{"mr": "ही लहान, जमिनीलगत पसरणारी शाकीय वनस्पती असून नाजूक पाने व निळसर-जांभळट फुले ही तिची वैशिष्ट्ये आहेत.", "en": "A small, ground-hugging herb with delicate leaves and bluish-purple flowers."}, {"mr": "मोकळ्या गवताळ किंवा तुलनेने कोरड्या जागांत ती आढळू शकते आणि लहान वनस्पतींच्या स्थानिक समुदायाचा भाग बनते.", "en": "It turns up in open grassland and fairly dry ground, forming part of the local mix of small plants."}], "care": [{"mr": "सूर्यप्रकाश ते अंशतः सावली आणि हलकी, निचरा असलेली माती योग्य असते.", "en": "Suits sun to part shade and light, well-draining soil."}, {"mr": "अतिपाणी टाळून मातीमध्ये मध्यम ओलावा राखावा.", "en": "Avoid overwatering and keep the soil moderately moist."}]},
  15: {"ayurveda": [{"mr": "डाळिंबाच्या फळाचा उपयोग पचन, भूक व अतिसाराशी संबंधित पारंपरिक आयुर्वेदिक संदर्भांत वर्णिला आहे.", "en": "Pomegranate fruit is used in traditional Ayurveda for digestion, appetite and diarrhoea."}, {"mr": "डाळिंबाची साल व फुले यांनाही कषाय गुणधर्मामुळे स्वतंत्र पारंपरिक औषधी उपयोगांचा उल्लेख आढळतो.", "en": "Its bark and flowers also have their own traditional uses, thanks to their astringent quality."}], "botany": [{"mr": "लहान काटेरी झुडूप किंवा वृक्ष, चमकदार पाने, आकर्षक फुले आणि दाण्यांनी भरलेले फळ ही डाळिंबाची वैशिष्ट्ये आहेत.", "en": "A small thorny shrub or tree with glossy leaves, striking flowers and seed-packed fruit."}, {"mr": "फुले परागीभवन करणाऱ्या कीटकांना आकर्षित करतात आणि फळे पक्षी व इतर प्राण्यांसाठी अन्नस्रोत ठरू शकतात.", "en": "The flowers draw pollinators, and the fruit feeds birds and other animals."}], "care": [{"mr": "भरपूर सूर्यप्रकाश आणि निचरा असलेली जमीन योग्य असते.", "en": "Give it plenty of sun and well-draining soil."}, {"mr": "नियमित पाणी आणि वेळोवेळी छाटणी केल्यास झुडूपाची वाढ चांगली राहते.", "en": "Regular water and the odd prune keep the shrub growing well."}]},
  16: {"ayurveda": [{"mr": "देवदारूच्या हृदयकाष्ठाचा उपयोग वात-कफ, वेदना व सूज यांच्याशी संबंधित पारंपरिक औषधी योगांत वर्णिला आहे.", "en": "Devadaru heartwood is used in traditional preparations for vata-kapha, pain and swelling."}, {"mr": "देवदारू सुगंधी व उष्ण गुणधर्माच्या द्रव्यांमध्ये गणले जाते आणि विविध पारंपरिक औषधी कल्पनांत त्याचा संदर्भ आढळतो.", "en": "It counts as an aromatic, warming substance and appears in many traditional remedies."}], "botany": [{"mr": "हा हिमालयीन प्रदेशातील उंच, सदाहरित शंकुवृक्ष असून सुईसदृश पाने व सुगंधी लाकूड ही त्याची प्रमुख वैशिष्ट्ये आहेत.", "en": "A tall Himalayan evergreen conifer with needle-like leaves and fragrant wood."}, {"mr": "थंड डोंगराळ परिसंस्थेत मातीचे संरक्षण, कार्बन साठवण आणि जैवविविधतेला अधिवास देण्यात देवदाराचे महत्त्व आहे.", "en": "In cold mountain country it matters for holding soil, storing carbon and giving wildlife a home."}], "care": [{"mr": "थंड हवामान, खोल निचरा असलेली जमीन आणि भरपूर मोकळी जागा आवश्यक असते.", "en": "It needs a cool climate, deep well-draining soil and plenty of space."}, {"mr": "उष्ण मैदानी भागात या हिमालयीन वृक्षाची लागवड स्थानिक हवामानाचा विचार करूनच करावी.", "en": "On the warm plains, plant this Himalayan tree only after weighing the local climate."}]},
  17: {"ayurveda": [{"mr": "मरुवकाचा पारंपरिक उपयोग पचनास सहाय्यकारी, सुगंधी आणि वात-कफाशी संबंधित संदर्भांत वर्णिला आहे.", "en": "Maruvaka is traditionally described as aromatic, good for digestion and linked to vata-kapha."}, {"mr": "सुगंधी पानांचा उपयोग काही पाचक व सुगंधी पारंपरिक तयारींमध्ये केला जातो.", "en": "Its fragrant leaves go into some traditional digestive and aromatic preparations."}], "botany": [{"mr": "ही लहान सुगंधी शाकीय वनस्पती असून मऊ पाने व विशिष्ट सुगंध हे तिचे प्रमुख वैशिष्ट्य आहे.", "en": "A small aromatic herb with soft leaves and a distinctive scent."}, {"mr": "फुले व सुगंधी वनस्पतीभाग काही परागीभवन करणाऱ्या कीटकांना आकर्षित करू शकतात; कुंडीतही तिची लागवड शक्य आहे.", "en": "Its flowers and scented foliage can draw some pollinators, and it grows happily in pots."}], "care": [{"mr": "सूर्यप्रकाश आणि हलकी, निचरा असलेली माती योग्य असते.", "en": "Suits sun and light, well-draining soil."}, {"mr": "अतिपाणी टाळावे; नियमित छाटणीने सुगंधी पाने मिळण्यास मदत होते.", "en": "Avoid overwatering; regular trimming brings on the fragrant leaves."}]},
  18: {"ayurveda": [{"mr": "अश्वत्थाच्या सालीचा कषाय गुणधर्मासाठी उल्लेख आढळतो; पाने, फळे व इतर भागांचेही पारंपरिक उपयोग वर्णिले आहेत.", "en": "Peepal bark is noted for its astringent quality, and traditional uses are recorded for its leaves, fruit and other parts."}, {"mr": "विविध वनस्पतीभागांचा त्वचा, रक्तस्राव व दाहाशी संबंधित पारंपरिक उपचारवर्णनांत उल्लेख आढळतो.", "en": "Various parts appear in traditional remedies for the skin, bleeding and inflammation."}], "botany": [{"mr": "हृदयाकृती पाने, लांब टोक आणि मोठा पसारा ही पिंपळाची सहज ओळखता येणारी वैशिष्ट्ये आहेत.", "en": "Easily known by its heart-shaped leaves with long tips and its broad canopy."}, {"mr": "पिंपळाची फळासारखी दिसणारी संरचना प्रत्यक्षात अंतर्गत फुलांची रचना असते; पक्ष्यांमुळे बियांचा प्रसार होतो.", "en": "What looks like its fruit actually holds the flowers inside, and birds help spread the seed."}], "care": [{"mr": "भरपूर सूर्यप्रकाश आणि मोकळी, खोल जमीन योग्य असते.", "en": "Give it plenty of sun and open, deep soil."}, {"mr": "हा मोठा वृक्ष होतो, त्यामुळे घराच्या अगदी जवळ न लावता पुरेशी जागा ठेवावी.", "en": "It grows into a large tree, so leave it room rather than planting it close to the house."}]},
  19: {"ayurveda": [{"mr": "जातीच्या फुलांचा उपयोग त्वचा, दाह आणि सुगंधी द्रव्यांशी संबंधित पारंपरिक तयारींमध्ये वर्णिला आहे.", "en": "Jati flowers go into traditional preparations for the skin, inflammation and fragrance."}, {"mr": "जातीच्या पानांचा व इतर भागांचा काही बाह्योपचारात्मक पारंपरिक उपयोग आढळतो.", "en": "Its leaves and other parts have some traditional external uses."}], "botany": [{"mr": "ही सुगंधी वेल किंवा झुडूप असून पांढरी सुगंधी फुले आणि संयुक्त पाने ही तिची प्रमुख वैशिष्ट्ये आहेत.", "en": "A fragrant climber or shrub with white scented flowers and compound leaves."}, {"mr": "सुगंधी फुले परागीभवन करणाऱ्या कीटकांना आकर्षित करतात; आधार व नियमित छाटणी दिल्यास घरच्या बागेत चांगली वाढते.", "en": "The scented flowers draw pollinators, and with a support and regular pruning it does well in a home garden."}], "care": [{"mr": "सूर्यप्रकाश, आधार आणि निचरा असलेली सुपीक माती योग्य असते.", "en": "Give it sun, something to climb, and fertile, well-draining soil."}, {"mr": "नियमित छाटणी केल्यास फांद्यांची वाढ आणि फुलधारणा संतुलित ठेवता येते.", "en": "Regular pruning keeps its branching and flowering in balance."}]},
  20: {"ayurveda": [{"mr": "केतकीच्या मुळांचा विविध पारंपरिक औषधी उपयोगांसाठी उल्लेख आढळतो; औषधी वापरात अचूक द्रव्यभाग निश्चित करणे आवश्यक आहे.", "en": "Ketaki roots are noted for various traditional medicinal uses, and the right part must be identified for any such use."}, {"mr": "केतकीच्या सुगंधी पुष्परचनेचा उपयोग सुगंधी द्रव्यांमध्ये केला जातो आणि तिच्या वनस्पतीभागांचा वापर परंपरेनुसार वेगवेगळा असतो.", "en": "Its fragrant flower-spike goes into perfumes, and different parts are used according to tradition."}], "botany": [{"mr": "लांब, कडक व कडांवर काटे असलेली पाने तसेच सुगंधी पुष्परचना ही केवड्याची प्रमुख वैशिष्ट्ये आहेत.", "en": "Known for its long, stiff, spiny-edged leaves and fragrant flower-spike."}, {"mr": "दमट व किनारी किंवा पाण्याजवळच्या अधिवासात ती वाढू शकते; दाट पर्णसंभारामुळे लहान जीवांना आश्रय मिळतो.", "en": "It grows in moist, coastal or waterside spots, and its dense foliage shelters small creatures."}], "care": [{"mr": "भरपूर सूर्यप्रकाश, दमट पण निचरा असलेली जमीन आणि वाढीसाठी मोकळी जागा योग्य असते.", "en": "Give it plenty of sun, moist but well-draining soil and room to grow."}, {"mr": "पानांच्या कडा काटेरी असल्याने लागवड व देखभाल करताना काळजी घ्यावी.", "en": "The leaf edges are spiny, so take care when planting and tending it."}]},
  21: {"ayurveda": [{"mr": "अगस्तीच्या फुलांचा, पानांचा व इतर भागांचा विविध पारंपरिक आयुर्वेदिक उपयोग वर्णिला आहे.", "en": "The flowers, leaves and other parts of Agasti have various traditional Ayurvedic uses."}, {"mr": "अगस्तीची फुले भाजी म्हणून खाद्य आहेत; त्यामुळे धार्मिक अर्पणाबरोबरच ही वनस्पती स्थानिक आहारपरंपरेशीही जोडलेली आहे.", "en": "Its flowers are eaten as a vegetable, so besides the offering, the plant is tied to local food traditions."}], "botany": [{"mr": "हादगा हा जलद वाढणारा वृक्ष असून संयुक्त पाने आणि मोठी पांढरी किंवा लालसर फुले ही त्याची प्रमुख वैशिष्ट्ये आहेत.", "en": "Hadaga is a fast-growing tree with compound leaves and large white or reddish flowers."}, {"mr": "फुले खाद्य असल्यामुळे हा वृक्ष धार्मिक, आहारिक आणि स्थानिक जैवविविधतेच्या संदर्भात विशेष महत्त्वाचा आहे.", "en": "Because its flowers are edible, it holds a special place in religious life, cooking and local biodiversity."}], "care": [{"mr": "उबदार हवामान, भरपूर सूर्यप्रकाश आणि पाण्याचा चांगला निचरा असलेली जमीन योग्य असते.", "en": "Suits a warm climate, plenty of sun and well-draining soil."}, {"mr": "हा जलद वाढणारा वृक्ष असल्यामुळे नियमित पाणी व पुरेशी मोकळी जागा दिल्यास वाढ चांगली होते.", "en": "It grows fast, so regular water and enough open space keep it thriving."}]},
};

/* वर्गीकरण (kind) for the home filter: flower / tree / herb */
const KIND = {
  malati:"flower", maka:"herb", bilva:"tree", durva:"herb", badari:"tree",
  dhatura:"herb", tulasi:"herb", shami:"tree", apamarga:"herb", bruhati:"herb",
  karvira:"flower", arka:"herb", arjuna:"tree", vishnukranta:"flower", dadima:"tree",
  devadaru:"tree", maruva:"herb", ashvattha:"tree", jai:"flower", kevada:"flower", agasti:"tree"
};

/* =====================================================================
   पत्री क्र. १, मालती (पूर्ण संशोधन दस्तऐवजावर आधारित)
   ===================================================================== */
const MALATI = {
  id: "malati", number: 1, ready: true, kind: "flower", image: "assets/img/malati.jpg",
  name:      { mr: "मालती / मधुमालती", en: "Malati" },
  common:    { mr: "चमेली / जाई", en: "Spanish (Royal) Jasmine" },
  botanical: "Jasminum grandiflorum L.", family: "Oleaceae",
  deityName: { mr: "श्री सुमुख", en: "Shri Sumukha" },
  mantra:    "ॐ सुमुखाय नमः । मालतीपत्रं समर्पयामि ॥",
  mantraMeaning: { mr: "सुमुख श्रीगणेशाला मालतीचे पत्र अर्पण करीत आहे.",
                   en: "Unto Sumukha, the fair-faced Ganesha, I offer the leaf of Malati." },
  tagline:   { mr: "एकविंशति पत्रींपैकी पहिली पत्री", en: "The first of the twenty-one sacred leaves" },
  sections: [
    { icon:"🕉️", title:{ mr:"गणपती पूजेत स्थान", en:"Place in the Puja" }, points:[
      { mr:"महाराष्ट्रातील प्रचलित एकविंशति-पत्री पूजाविधीत ही पहिली पत्री आहे.", en:"In the Maharashtrian twenty-one-leaf puja tradition, Malati is offered first." },
      { mr:"श्री सुमुख या गणेश-नामासह ती अर्पण केली जाते.", en:"It is offered with the name Sumukha ('the fair-faced one')." },
      { mr:"उपलब्ध पूजाविधीत पत्रीचे नाव “मालतीपत्र” असे दिले आहे.", en:"In the traditional vidhi the leaf is named simply 'Malati-patra'." },
      { mr:"काही मराठी पूजाविधींमध्ये मालतीची ओळख चमेली अशी स्पष्टपणे दिली आहे.", en:"Several Marathi manuals explicitly identify Malati as chameli (jasmine)." } ] },
    { icon:"📜", title:{ mr:"संस्कृत / ग्रंथसंदर्भ", en:"Sanskrit & Scriptural Notes" }, points:[
      { mr:"संस्कृतमध्ये “मालती” हे नाव प्रामुख्याने सुगंधी पांढऱ्या जाई/चमेली वर्गातील वनस्पतीसाठी येते.", en:"In Sanskrit, 'Malati' chiefly denotes the fragrant white jasmine family." },
      { mr:"संस्कृत कोश व वनस्पती-संदर्भांत मालती = Jasminum grandiflorum अशी ओळख आढळते.", en:"Sanskrit lexicons and botanical sources identify Malati with Jasminum grandiflorum." },
      { mr:"मालती, जाती, मालतिका ही या वनस्पतीची संस्कृत नावे आढळतात.", en:"Malati, Jati and Malatika are recorded Sanskrit names for the plant." },
      { mr:"“गणपतीला मालती का प्रिय?” याचा एकमेव, प्राचीन, सर्वमान्य मूलग्रंथीय संदर्भ अद्याप निश्चित नाही, म्हणून कोणतीही कथा थेट सत्य म्हणून मांडलेली नाही.", en:"No single ancient, universally accepted source explains why Malati is dear to Ganesha, so no legend is presented here as literal fact." } ] },
    { icon:"🪷", title:{ mr:"पौराणिक / लोकपरंपरा", en:"Myth & Folk Tradition" }, points:[
      { mr:"मालती ही भारतीय संस्कृत साहित्यातील परिचित सुगंधी पुष्पवनस्पती आहे.", en:"Malati is a well-loved fragrant flower throughout classical Sanskrit literature." },
      { mr:"साहित्यात मालतीच्या फुलांचा सुगंध, शुभ्रता व सौंदर्य यांचे वारंवार वर्णन येते.", en:"Poets repeatedly praise its perfume, whiteness and beauty." },
      { mr:"काही परंपरांमध्ये मालती / जाती वर्गातील फुले देवपूजेत वापरली जातात.", en:"In several traditions, jasmine-family flowers are used in worship." } ] },
    { icon:"🌿", title:{ mr:"आयुर्वेद", en:"Ayurveda" }, points:[
      { mr:"Jasminum grandiflorum चा आयुर्वेदिक व पारंपरिक औषधी संदर्भ आढळतो.", en:"Jasminum grandiflorum has a recognised place in Ayurvedic and folk medicine." },
      { mr:"संस्कृत आयुर्वेदिक साहित्यात मालती / जाती नावांनी संबंधित वनस्पतींचे उल्लेख आहेत.", en:"Classical Ayurvedic texts mention the plant under the names Malati and Jati." },
      { mr:"पारंपरिक उपयोगांत फुले, पाने व इतर वनस्पतीभागांचा उल्लेख येतो.", en:"Traditional uses cite the flowers, leaves and other parts of the plant." } ],
      note:{ mr:"पारंपरिक उपयोग व आधुनिक वैद्यकीय उपचार यांची गल्लत करू नये. औषधी उपयोग फक्त विश्वसनीय classical Ayurvedic संदर्भासोबतच संक्षेपाने दिले आहेत.", en:"Traditional use is not modern medical advice. Any medicinal note here is brief and only where a reliable classical Ayurvedic reference exists." } },
    { icon:"🔬", title:{ mr:"वनस्पतीशास्त्र", en:"Botany" },
      facts:[ { k:{mr:"शास्त्रीय नाव",en:"Botanical name"}, v:"Jasminum grandiflorum L." },
              { k:{mr:"कुळ",en:"Family"}, v:"Oleaceae" },
              { k:{mr:"मराठी",en:"Marathi"}, v:"मालती" },
              { k:{mr:"संस्कृत",en:"Sanskrit"}, v:"मालती, जाती" },
              { k:{mr:"इंग्रजी",en:"English"}, v:"Spanish / Royal Jasmine" } ],
      points:[ { mr:"बहुधा वेलवर्गीय किंवा पसरत वाढणारी सुगंधी वनस्पती.", en:"A fragrant climbing or spreading shrub." },
               { mr:"पाने संयुक्त व समोरासमोर येणारी.", en:"Leaves compound and borne in opposite pairs." },
               { mr:"फुले पांढरी, अत्यंत सुगंधी व अनेक पाकळ्यांची.", en:"Flowers white, many-petalled and intensely fragrant." },
               { mr:"फुलांचा सुगंध संध्याकाळी विशेष जाणवतो.", en:"The scent grows strongest towards evening." } ] },
    { icon:"🌍", title:{ mr:"पर्यावरण", en:"Ecology" }, points:[
      { mr:"सुगंधी फुलांमुळे परागीभवन करणाऱ्या कीटकांसाठी ती आकर्षक ठरते.", en:"Its scented blooms attract pollinating insects." },
      { mr:"घराच्या बागेत, कुंडीत किंवा आधार देऊन वाढवता येते.", en:"It grows in a garden, in a pot, or trained on a support." },
      { mr:"घरगुती बागेला सौंदर्य व जैवविविधतेचा छोटा घटक मिळतो.", en:"It adds beauty and a small measure of biodiversity to a home garden." } ] },
    { icon:"🪴", title:{ mr:"संगोपन", en:"How to Grow It" }, care:[
      { icon:"☀️", label:{mr:"प्रकाश",en:"Light"}, text:{ mr:"भरपूर सूर्यप्रकाश किंवा उजेडाची जागा; चांगल्या फुलांसाठी पुरेसा प्रकाश महत्त्वाचा.", en:"Plenty of sun or bright light, essential for good flowering." } },
      { icon:"💧", label:{mr:"पाणी",en:"Water"}, text:{ mr:"माती कोरडी पडू लागल्यावर पाणी द्यावे; कुंडीत पाणी साचू देऊ नये.", en:"Water as the soil begins to dry; never let the pot waterlog." } },
      { icon:"🪴", label:{mr:"माती",en:"Soil"}, text:{ mr:"सेंद्रिय घटक असलेली, पाण्याचा निचरा होणारी माती योग्य.", en:"Rich in organic matter and free-draining." } },
      { icon:"🌱", label:{mr:"वाढ",en:"Growth"}, text:{ mr:"छाटणीने आकार नियंत्रित होतो; आधार दिल्यास व्यवस्थित वाढते.", en:"Prune to shape; train on a support. Happy in a home pot." } } ] },
    { icon:"✨", title:{ mr:"एक रंजक गोष्ट", en:"A Fascinating Note" }, callout:{
      title:{ mr:"“मधुमालती” नावाची गफलत होऊ शकते!", en:"Beware the name 'Madhumalati'!" }, points:[
        { mr:"आजच्या मराठीत “मधुमालती” म्हटले की अनेकदा Combretum indicum, Rangoon Creeper, अभिप्रेत असते.", en:"In everyday Marathi, 'Madhumalati' often means Combretum indicum, the Rangoon Creeper." },
        { mr:"पण गणेश-पत्री परंपरेतील “मालतीपत्र” साठी Jasminum grandiflorum / मालती-चमेलीचा संदर्भ अधिक महत्त्वाचा आहे.", en:"But for the puja's 'Malati-patra', it is Jasminum grandiflorum, the jasmine, that matters." },
        { mr:"नाव समान असले तरी वनस्पती एकच असेलच असे नाही. संदर्भ व शास्त्रीय ओळख महत्त्वाची.", en:"A shared name need not mean a shared plant; context and scientific identity matter more than the local name." } ] } }
  ],
  references: [
    { mr:"महाराष्ट्रातील प्रचलित गणेशपूजा व एकविंशति पत्री पूजाविधी (“सुमुख, मालतीपत्र” क्रम).", en:"Prevalent Maharashtrian Ganesh puja & twenty-one-leaf vidhi (the 'Sumukha, Malati-patra' order)." },
    { mr:"संस्कृत कोश व वनस्पती-संदर्भांतील मालती / जाती नोंदी.", en:"Malati / Jati entries in Sanskrit lexicons and botanical references." },
    { mr:"Jasminum grandiflorum L., accepted botanical identity; Indian flora & Kew MPNS.", en:"Jasminum grandiflorum L., accepted botanical identity; Indian flora & Kew MPNS." },
    { mr:"Cross-reference: Combretum indicum (Rangoon Creeper), “मधुमालती” या सामान्य नावाचा आधुनिक वापर.", en:"Cross-reference: Combretum indicum (Rangoon Creeper), modern use of the common name 'Madhumalati'." }
  ]
};

/* =====================================================================
   पत्री क्र. २-२१, संक्षिप्त, अचूक माहिती (आपोआप पूर्ण पानात रूपांतर)
   care: [प्रकाश, पाणी, माती, वाढ]  ·  note वैकल्पिक
   ===================================================================== */
const BRIEF = [
  { id:"maka", number:2, name:{mr:"माका / भृंगराज",en:"Bhringaraj"}, common:{mr:"भांगरा",en:"False Daisy"},
    botanical:"Eclipta prostrata", family:"Asteraceae",
    desc:{mr:"ओलसर जागी वाढणारी लहान वनौषधी; लहान पांढरी डेझीसारखी फुले.",en:"A small herb of moist ground with tiny white daisy-like flowers."},
    puja:{mr:"एकविंशति पत्रींपैकी दुसरी पत्री म्हणून गणेशाला अर्पण केली जाते.",en:"Offered to Ganesha as the second of the twenty-one leaves."},
    eco:{mr:"पावसाळ्यात शेतबांध व ओलसर जागी सहज उगवते; लहान परागकीटकांना उपयुक्त.",en:"Springs up on field bunds and damp ground in the monsoon; useful to small pollinators."},
    care:{light:{mr:"ऊन ते अर्धसावली.",en:"Sun to part shade."},water:{mr:"माती ओलसर ठेवा.",en:"Keep the soil moist."},soil:{mr:"ओलसर, सुपीक माती.",en:"Damp, fertile soil."},growth:{mr:"पसरत वाढते; कुंडीत सहज.",en:"Spreads readily; easy in a pot."}},
    note:{title:{mr:"केसांसाठी प्रसिद्ध",en:"Famed for hair"},mr:"आयुर्वेदात भृंगराज केस व यकृतासाठी ओळखला जातो, पारंपरिक उपयोग, आधुनिक उपचार नव्हे.",en:"Ayurveda prizes Bhringaraj for hair and the liver. A traditional use, not modern medicine."} },

  { id:"bilva", number:3, name:{mr:"बेल / बिल्व",en:"Bilva"}, common:{mr:"बेलफळ",en:"Bael / Wood Apple"},
    botanical:"Aegle marmelos", family:"Rutaceae",
    desc:{mr:"काटेरी पानझडी वृक्ष; तीन पानांचे (त्रिदल) संयुक्त पान व टणक कवचाचे फळ.",en:"A thorny deciduous tree with trifoliate leaves and a hard-shelled fruit."},
    puja:{mr:"तिसरी पत्री; बिल्वपत्र शंकर व गणेश दोघांच्या पूजेत पवित्र मानले जाते.",en:"The third leaf; bilva-patra is held sacred in the worship of both Shiva and Ganesha."},
    eco:{mr:"कोरड्या प्रदेशात तग धरणारा वृक्ष; फळे पक्षी व प्राण्यांना उपयुक्त.",en:"A drought-hardy tree; its fruit feeds birds and animals."},
    care:{light:{mr:"पूर्ण ऊन.",en:"Full sun."},water:{mr:"रुजल्यावर कमी पाणी.",en:"Low water once established."},soil:{mr:"कोणतीही निचरा होणारी माती.",en:"Any well-drained soil."},growth:{mr:"मोठा वृक्ष; अंगणात जागा हवी.",en:"A large tree; give it room in the yard."}},
    note:{title:{mr:"त्रिदल पान",en:"The three-in-one leaf"},mr:"बिल्वाचे एकच पान तीन पर्णिकांचे असते, त्रिमूर्तीचे प्रतीक मानले जाते.",en:"A single bilva leaf carries three leaflets, read as a symbol of the divine triad."} },

  { id:"durva", number:4, name:{mr:"दूर्वा",en:"Durva Grass"}, common:{mr:"हरळी",en:"Bermuda Grass"},
    botanical:"Cynodon dactylon", family:"Poaceae",
    desc:{mr:"जमिनीवर पसरणारे बारीक हरितगवत; कोवळ्या शेंड्यांच्या जुड्या अर्पण करतात.",en:"A fine creeping grass; tender tips are offered in small tufts."},
    puja:{mr:"चौथी पत्री आणि गणेशाची सर्वांत प्रिय, विषम (३ किंवा २१) दलांच्या जुड्यांनी वाहतात.",en:"The fourth leaf, and Ganesha's most beloved, offered in tufts of odd blades (threes, up to twenty-one)."},
    eco:{mr:"मातीची धूप रोखणारे कणखर गवत; अंगण व बागेला हिरवा गालिचा.",en:"A hardy grass that binds soil against erosion; a green carpet for the yard."},
    care:{light:{mr:"भरपूर ऊन.",en:"Plenty of sun."},water:{mr:"थोडेच पाणी पुरते.",en:"Very little water needed."},soil:{mr:"कोणतीही माती चालते.",en:"Grows in almost any soil."},growth:{mr:"धावत्या फुटव्यांनी झपाट्याने पसरते.",en:"Spreads fast by runners."}},
    note:{title:{mr:"बाप्पाची सर्वांत प्रिय पत्री",en:"Ganesha's dearest leaf"},mr:"दूर्वा गणेशाला विशेष प्रिय; अनेक ठिकाणी २१ दूर्वांची जुडी वाहतात.",en:"Durva is especially dear to Ganesha; many offer a bunch of twenty-one blades."} },

  { id:"badari", number:5, name:{mr:"बोर / बदरी",en:"Ber"}, common:{mr:"बोर",en:"Indian Jujube"},
    botanical:"Ziziphus mauritiana", family:"Rhamnaceae",
    desc:{mr:"काटेरी झुडूप/लहान वृक्ष; लहान गोड आंबट फळे.",en:"A thorny shrub or small tree bearing small sweet-tart fruit."},
    puja:{mr:"पाचवी पत्री म्हणून गणेशाला अर्पण केली जाते.",en:"Offered as the fifth of the sacred leaves."},
    eco:{mr:"अत्यंत कणखर, कोरड्या भागातही टिकते; फळे पक्ष्यांचे खाद्य.",en:"Extremely hardy even in dry regions; its fruit feeds birds."},
    care:{light:{mr:"पूर्ण ऊन.",en:"Full sun."},water:{mr:"दुष्काळसहनशील; कमी पाणी.",en:"Drought-tolerant; little water."},soil:{mr:"कोरडी, निचरा होणारी माती.",en:"Dry, well-drained soil."},growth:{mr:"काटेरी; छाटणीने आवरता येते.",en:"Thorny; keep in check by pruning."}} },

  { id:"dhatura", number:6, name:{mr:"धोत्रा / धत्तूर",en:"Dhatura"}, common:{mr:"धोत्रा",en:"Thorn Apple"},
    botanical:"Datura metel", family:"Solanaceae",
    desc:{mr:"मोठ्या कर्ण्यासारख्या फुलांचे झुडूप; काटेरी फळे.",en:"A shrub with large trumpet flowers and spiny seed-pods."},
    puja:{mr:"सहावी पत्री; धोत्रा शंकर व गणेश पूजेत वापरला जातो.",en:"The sixth leaf; dhatura features in the worship of Shiva and Ganesha."},
    eco:{mr:"पडीक जागी आपोआप उगवते; रात्री फुलणारी फुले पतंगांना आकर्षित करतात.",en:"Self-seeds on waste ground; night flowers draw moths."},
    care:{light:{mr:"पूर्ण ऊन.",en:"Full sun."},water:{mr:"मध्यम पाणी.",en:"Moderate water."},soil:{mr:"निचरा होणारी माती.",en:"Well-drained soil."},growth:{mr:"स्वतःच बीज पसरवते.",en:"Self-sows freely."}},
    note:{title:{mr:"⚠ विषारी वनस्पती",en:"⚠ A poisonous plant"},mr:"धोत्र्याचे सर्व भाग विषारी आहेत, फक्त पूजेसाठी हाताळावे, सेवन कधीही करू नये; लहान मुले व जनावरांपासून दूर ठेवावे.",en:"Every part of dhatura is toxic. Handle it only for worship, never consume it, and keep it away from children and animals."} },

  { id:"tulasi", number:7, name:{mr:"तुळस / तुलसी",en:"Tulsi"}, common:{mr:"पवित्र तुळस",en:"Holy Basil"},
    botanical:"Ocimum tenuiflorum", family:"Lamiaceae",
    desc:{mr:"सुगंधी पानांचे पवित्र झुडूप; अंगणातील तुळशी-वृंदावन.",en:"A sacred aromatic shrub, the tulsi of every courtyard."},
    puja:{mr:"सातवी पत्री म्हणून काही पूजाविधींत तुळस अर्पण केली जाते.",en:"Offered in some vidhis as the seventh leaf."},
    eco:{mr:"सुगंधी पाने कीटक दूर ठेवतात; मधमाश्यांना फुले उपयुक्त.",en:"Its scent repels insects while the flowers help bees."},
    care:{light:{mr:"भरपूर ऊन.",en:"Plenty of sun."},water:{mr:"नियमित, मध्यम पाणी.",en:"Regular, moderate water."},soil:{mr:"सुपीक, निचरा होणारी माती.",en:"Fertile, free-draining soil."},growth:{mr:"शेंडे खुडल्यास दाट वाढते.",en:"Pinch tips for bushy growth."}},
    note:{title:{mr:"तुळस आणि गणेश",en:"Tulsi and Ganesha"},mr:"एका प्रसिद्ध कथेनुसार तुळस गणेशाला वर्ज्य मानतात; तरी काही एकविंशति-पत्री याद्यांत ती येते, परंपरेनुसार आईंच्या पूजाविधीची खात्री करावी.",en:"A well-known legend holds that tulsi is normally not offered to Ganesha, yet it appears in some twenty-one-leaf lists, so do check against the family's own vidhi."} },

  { id:"shami", number:8, name:{mr:"शमी",en:"Shami"}, common:{mr:"खेजरी",en:"Khejri"},
    botanical:"Prosopis cineraria", family:"Fabaceae",
    desc:{mr:"बारीक संयुक्त पानांचा काटेरी वाळवंटी वृक्ष.",en:"A thorny desert tree with fine feathery leaves."},
    puja:{mr:"आठवी पत्री; शमी दसऱ्याशीही पवित्रपणे जोडलेली आहे.",en:"The eighth leaf; shami is also sacred to Dussehra."},
    eco:{mr:"कोरड्या भागातील जीवनदायी वृक्ष; जमिनीत नत्र स्थिरावतो.",en:"A life-giving tree of arid lands that fixes nitrogen in the soil."},
    care:{light:{mr:"पूर्ण ऊन.",en:"Full sun."},water:{mr:"अत्यल्प पाणी.",en:"Very little water."},soil:{mr:"वालुकामय, कोरडी माती.",en:"Sandy, dry soil."},growth:{mr:"हळू पण अतिशय कणखर.",en:"Slow but extremely tough."}} },

  { id:"apamarga", number:9, name:{mr:"आघाडा / अपामार्ग",en:"Apamarga"}, common:{mr:"आघाडा",en:"Prickly Chaff Flower"},
    botanical:"Achyranthes aspera", family:"Amaranthaceae",
    desc:{mr:"ताठ वाढणारी वनौषधी; बीजे कपड्यांना चिकटतात.",en:"An upright herb whose seeds cling to clothing."},
    puja:{mr:"नववी पत्री म्हणून गणेशाला अर्पण केली जाते.",en:"Offered as the ninth of the sacred leaves."},
    eco:{mr:"रस्त्याकडेला, पडीक जागी सहज उगवते; कणखर तण.",en:"A hardy roadside herb of waste places."},
    care:{light:{mr:"ऊन.",en:"Sun."},water:{mr:"कमी पाणी.",en:"Low water."},soil:{mr:"कोणतीही माती.",en:"Any soil."},growth:{mr:"स्वतःच वाढते; निगा नको.",en:"Grows on its own, needing little care."}},
    note:{title:{mr:"आयुर्वेदातील स्थान",en:"A place in Ayurveda"},mr:"आघाडा पारंपरिक औषधींत ओळखला जातो, पारंपरिक उपयोग, आधुनिक उपचार नव्हे.",en:"Apamarga is known in traditional medicine. A traditional use, not modern treatment."} },

  { id:"bruhati", number:10, name:{mr:"डोरली / बृहती",en:"Bruhati"}, common:{mr:"रानवांगी",en:"Indian Nightshade"},
    botanical:"Solanum indicum", family:"Solanaceae",
    desc:{mr:"काटेरी झुडूप; जांभळी फुले व लहान पिवळी फळे.",en:"A prickly shrub with purple flowers and small yellow berries."},
    puja:{mr:"दहावी पत्री म्हणून अर्पण केली जाते.",en:"Offered as the tenth of the leaves."},
    eco:{mr:"पडीक जागी वाढते; फुले परागकीटकांना उपयुक्त.",en:"Grows on open ground; flowers aid pollinators."},
    care:{light:{mr:"ऊन.",en:"Sun."},water:{mr:"मध्यम पाणी.",en:"Moderate water."},soil:{mr:"निचरा होणारी माती.",en:"Well-drained soil."},growth:{mr:"काटेरी; कणखर.",en:"Prickly and hardy."}},
    note:{title:{mr:"दशमूळांपैकी एक",en:"One of the ten roots"},mr:"बृहती आयुर्वेदातील प्रसिद्ध “दशमूळ” गटातील एक वनस्पती मानली जाते.",en:"Bruhati is counted among Ayurveda's celebrated 'Dashamula' (ten roots)."} },

  { id:"karvira", number:11, name:{mr:"कण्हेर / करवीर",en:"Karvira"}, common:{mr:"कण्हेर",en:"Oleander"},
    botanical:"Nerium oleander", family:"Apocynaceae",
    desc:{mr:"गुलाबी, पांढऱ्या वा लाल फुलांचे सदाहरित झुडूप.",en:"An evergreen shrub with pink, white or red flowers."},
    puja:{mr:"अकरावी पत्री; करवीराची फुले-पाने पूजेत वाहतात.",en:"The eleventh leaf; oleander's leaves and flowers are offered."},
    eco:{mr:"कोरड्या हवेतही भरपूर फुलते; बागेला रंग.",en:"Flowers freely even in dry heat, colouring the garden."},
    care:{light:{mr:"पूर्ण ऊन.",en:"Full sun."},water:{mr:"रुजल्यावर कमी पाणी.",en:"Low water once established."},soil:{mr:"कोणतीही निचरा होणारी माती.",en:"Any well-drained soil."},growth:{mr:"कणखर; छाटणीने आकार.",en:"Tough; shape by pruning."}},
    note:{title:{mr:"⚠ विषारी झुडूप",en:"⚠ A toxic shrub"},mr:"कण्हेरीचे सर्व भाग विषारी असतात, फक्त पूजेसाठी हाताळावे, सेवन टाळावे.",en:"All parts of oleander are poisonous. Handle only for worship and never ingest."} },

  { id:"arka", number:12, name:{mr:"रुई / अर्क",en:"Arka"}, common:{mr:"रुई",en:"Crown Flower / Milkweed"},
    botanical:"Calotropis gigantea", family:"Apocynaceae",
    desc:{mr:"राखट पानांचे झुडूप; जांभळट-पांढरी मुकुटासारखी फुले, चीक असतो.",en:"A grey-leaved shrub with crown-like mauve-white flowers and milky latex."},
    puja:{mr:"बारावी पत्री; अर्क सूर्य व गणेशाशी जोडला जातो.",en:"The twelfth leaf; arka is linked to the Sun and to Ganesha."},
    eco:{mr:"रखरखीत जागीही तगते; फुलपाखरांचे (वाघमाशी) आश्रयस्थान.",en:"Thrives on the harshest ground; a host plant for tiger butterflies."},
    care:{light:{mr:"पूर्ण ऊन.",en:"Full sun."},water:{mr:"अत्यल्प पाणी.",en:"Very little water."},soil:{mr:"कोरडी, वालुकामय माती.",en:"Dry, sandy soil."},growth:{mr:"अतिशय कणखर; आपोआप वाढते.",en:"Very hardy; grows unaided."}},
    note:{title:{mr:"⚠ चीक टाळा",en:"⚠ Mind the latex"},mr:"रुईचा पांढरा चीक त्रासदायक/विषारी असतो, डोळे व त्वचेपासून दूर ठेवावा.",en:"Arka's white latex is an irritant and toxic. Keep it away from eyes and skin."} },

  { id:"arjuna", number:13, name:{mr:"अर्जुन",en:"Arjuna"}, common:{mr:"अर्जुनसादडा",en:"Arjuna Tree"},
    botanical:"Terminalia arjuna", family:"Combretaceae",
    desc:{mr:"नदीकाठी वाढणारा उंच वृक्ष; गुळगुळीत पांढरट साल.",en:"A tall riverside tree with smooth pale bark."},
    puja:{mr:"तेरावी पत्री म्हणून अर्पण केली जाते.",en:"Offered as the thirteenth leaf."},
    eco:{mr:"नदीकाठ स्थिर ठेवणारा वृक्ष; सावली व निवारा देतो.",en:"Stabilises riverbanks and gives shade and shelter."},
    care:{light:{mr:"पूर्ण ऊन.",en:"Full sun."},water:{mr:"भरपूर पाणी/ओलावा आवडतो.",en:"Likes ample moisture."},soil:{mr:"खोल, ओलसर माती.",en:"Deep, moist soil."},growth:{mr:"मोठा वृक्ष; भरपूर जागा हवी.",en:"A big tree needing space."}},
    note:{title:{mr:"हृदयाचा मित्र",en:"Friend of the heart"},mr:"अर्जुनाची साल आयुर्वेदात हृदयासाठी प्रसिद्ध आहे, पारंपरिक उपयोग, आधुनिक उपचार नव्हे.",en:"Arjuna's bark is famed in Ayurveda for the heart. A traditional use, not modern treatment."} },

  { id:"vishnukranta", number:14, name:{mr:"विष्णुक्रांता / गोकर्ण",en:"Vishnukranta"}, common:{mr:"गोकर्ण / अपराजिता",en:"Butterfly Pea"},
    botanical:"Clitoria ternatea", family:"Fabaceae",
    desc:{mr:"नाजूक वेल; गडद निळी (कधी पांढरी) फुले.",en:"A slender climber with deep-blue (sometimes white) flowers."},
    puja:{mr:"चौदावी पत्री; निळी फुले देवपूजेत आवडती.",en:"The fourteenth leaf; its blue flowers are loved in worship."},
    eco:{mr:"जमिनीत नत्र स्थिरावते; फुले परागकीटकांना उपयुक्त.",en:"Fixes nitrogen in the soil; flowers help pollinators."},
    care:{light:{mr:"ऊन.",en:"Sun."},water:{mr:"मध्यम पाणी.",en:"Moderate water."},soil:{mr:"निचरा होणारी माती.",en:"Well-drained soil."},growth:{mr:"आधार दिल्यास सहज चढते.",en:"Climbs easily on a support."}},
    note:{title:{mr:"निळा चहा",en:"The blue tea"},mr:"गोकर्णाच्या निळ्या फुलांपासून “ब्लू टी” रंगते, नैसर्गिक रंगद्रव्याचे सुंदर उदाहरण.",en:"Its blue flowers colour 'blue tea', a lovely example of natural pigment."} },

  { id:"dadima", number:15, name:{mr:"डाळिंब / दाडिम",en:"Pomegranate"}, common:{mr:"डाळिंब",en:"Pomegranate"},
    botanical:"Punica granatum", family:"Lythraceae",
    desc:{mr:"लहान वृक्ष; तांबूस फुले व दाणेदार लालसर फळ.",en:"A small tree with orange-red flowers and jewel-seeded fruit."},
    puja:{mr:"पंधरावी पत्री म्हणून अर्पण केली जाते.",en:"Offered as the fifteenth leaf."},
    eco:{mr:"फुले परागकीटकांना, फळे पक्ष्यांना उपयुक्त.",en:"Flowers feed pollinators and fruit feeds birds."},
    care:{light:{mr:"पूर्ण ऊन.",en:"Full sun."},water:{mr:"मध्यम, नियमित पाणी.",en:"Moderate, regular water."},soil:{mr:"निचरा होणारी सुपीक माती.",en:"Fertile, free-draining soil."},growth:{mr:"कुंडीत/अंगणात; छाटणी उपयुक्त.",en:"Suits pot or yard; benefits from pruning."}} },

  { id:"devadaru", number:16, name:{mr:"देवदार",en:"Devadaru"}, common:{mr:"हिमालयी देवदार",en:"Himalayan Cedar"},
    botanical:"Cedrus deodara", family:"Pinaceae",
    desc:{mr:"सुगंधी लाकडाचा उंच सूचिपर्णी वृक्ष; “देवांचे लाकूड”.",en:"A tall aromatic conifer, the 'timber of the gods'."},
    puja:{mr:"सोळावी पत्री म्हणून अर्पण केली जाते.",en:"Offered as the sixteenth leaf."},
    eco:{mr:"हिमालयातील थंड डोंगरउतारांचा वृक्ष; पक्ष्यांना निवारा.",en:"A tree of cool Himalayan slopes, sheltering birds."},
    care:{light:{mr:"ऊन; थंड हवामान आवडते.",en:"Sun; prefers a cool climate."},water:{mr:"मध्यम पाणी.",en:"Moderate water."},soil:{mr:"निचरा होणारी माती.",en:"Well-drained soil."},growth:{mr:"थंड प्रदेशातच चांगला; उष्ण मैदानात कठीण.",en:"Thrives only in cool regions; hard on the hot plains."}},
    note:{title:{mr:"देवांचे लाकूड",en:"Wood of the gods"},mr:"“देवदारु” म्हणजे देवांचे वृक्ष; त्याचे सुगंधी लाकूड प्राचीन काळापासून पवित्र मानले जाते.",en:"'Deva-daru' means the tree of the gods; its fragrant wood has been held sacred since ancient times."} },

  { id:"maruva", number:17, name:{mr:"मरवा / मरुबक",en:"Maruva"}, common:{mr:"मरवा",en:"Sweet Marjoram"},
    botanical:"Origanum majorana", family:"Lamiaceae",
    desc:{mr:"सुगंधी पानांची लहान वनौषधी.",en:"A small herb with sweetly aromatic leaves."},
    puja:{mr:"सतरावी पत्री; सुगंधी मरवा पूजेत वाहतात.",en:"The seventeenth leaf; fragrant maruva is offered in worship."},
    eco:{mr:"फुले मधमाश्यांना आवडतात; सुगंध कीटक दूर ठेवतो.",en:"Bees love the flowers while the scent keeps pests away."},
    care:{light:{mr:"भरपूर ऊन.",en:"Plenty of sun."},water:{mr:"कमी पाणी.",en:"Little water."},soil:{mr:"हलकी, निचरा होणारी माती.",en:"Light, free-draining soil."},growth:{mr:"शेंडे खुडल्यास दाट; कुंडीत छान.",en:"Pinch for bushiness; lovely in a pot."}} },

  { id:"ashvattha", number:18, name:{mr:"पिंपळ / अश्वत्थ",en:"Peepal"}, common:{mr:"पिंपळ",en:"Sacred Fig"},
    botanical:"Ficus religiosa", family:"Moraceae",
    desc:{mr:"हृदयाकृती पानांचा भव्य पवित्र वृक्ष; पाने वाऱ्याने सळसळतात.",en:"A majestic sacred tree with heart-shaped leaves that shimmer in the breeze."},
    puja:{mr:"अठरावी पत्री; अश्वत्थ अत्यंत पवित्र वृक्ष मानला जातो.",en:"The eighteenth leaf; the peepal is held among the most sacred of trees."},
    eco:{mr:"भरपूर प्राणवायू देणारा वृक्ष; असंख्य पक्षी-कीटकांचा आधार.",en:"A great giver of oxygen and a haven for countless birds and insects."},
    care:{light:{mr:"पूर्ण ऊन.",en:"Full sun."},water:{mr:"मध्यम पाणी.",en:"Moderate water."},soil:{mr:"कोणतीही माती चालते.",en:"Grows in most soils."},growth:{mr:"प्रचंड वृक्ष; कुंडीत बोन्साय शक्य.",en:"An enormous tree, but can be kept small as a bonsai."}},
    note:{title:{mr:"सळसळणारे पान",en:"The whispering leaf"},mr:"पिंपळाच्या पानाचा लांब देठ पानाला थोड्याशा वाऱ्यानेही सळसळायला लावतो.",en:"The peepal leaf's long stalk sets it trembling in the faintest breeze."} },

  { id:"jai", number:19, name:{mr:"जाई",en:"Jai Jasmine"}, common:{mr:"जाई",en:"Needle-flower Jasmine"},
    botanical:"Jasminum auriculatum", family:"Oleaceae",
    desc:{mr:"सुगंधी पांढऱ्या फुलांची वेल; हारासाठी लोकप्रिय.",en:"A climber of fragrant white flowers, beloved for garlands."},
    puja:{mr:"एकोणिसावी पत्री; जाईची सुगंधी फुले देवाला वाहतात.",en:"The nineteenth leaf; jai's fragrant flowers are offered to the deity."},
    eco:{mr:"संध्याकाळी दरवळणारा सुगंध परागकीटकांना बोलावतो.",en:"Its fragrance, strongest at dusk, draws in pollinators."},
    care:{light:{mr:"ऊन ते थोडी सावली.",en:"Sun to light shade."},water:{mr:"मध्यम, नियमित पाणी.",en:"Moderate, regular water."},soil:{mr:"सुपीक, निचरा होणारी माती.",en:"Fertile, free-draining soil."},growth:{mr:"आधार दिल्यास सुंदर वेल.",en:"Makes a lovely vine on a support."}} },

  { id:"kevada", number:20, name:{mr:"केवडा",en:"Kewda"}, common:{mr:"केवडा",en:"Screw Pine"},
    botanical:"Pandanus odorifer", family:"Pandanaceae",
    desc:{mr:"लांब काटेरी पानांचे झुडूप; अत्यंत सुगंधी तुरा.",en:"A shrub of long spiny leaves with an intensely fragrant flower-spike."},
    puja:{mr:"विसावी पत्री; केवड्याचा सुगंध पूजेत मोलाचा.",en:"The twentieth leaf; kewda's perfume is prized in worship."},
    eco:{mr:"समुद्रकाठ, दलदलीजवळ वाढतो; मुळे माती धरून ठेवतात.",en:"Grows by coasts and marshes; its roots hold the soil."},
    care:{light:{mr:"ऊन; उबदार दमट हवा.",en:"Sun; warm, humid air."},water:{mr:"भरपूर ओलावा.",en:"Plenty of moisture."},soil:{mr:"वालुकामय, ओलसर माती.",en:"Sandy, moist soil."},growth:{mr:"पाने काटेरी; जपून हाताळावे.",en:"Leaves are spiny, handle with care."}},
    note:{title:{mr:"केवडा आणि कथा",en:"Kewda and the legend"},mr:"एका पुराणकथेत केतकी/केवडा शंकराला वर्ज्य ठरतो; तरी काही याद्यांत तो येतो, परंपरेनुसार खात्री करावी.",en:"A legend bars ketaki/kewda from Shiva's worship, yet it appears in some lists, so do check by tradition."} },

  { id:"agasti", number:21, name:{mr:"अगस्ति / हादगा",en:"Agasti"}, common:{mr:"हादगा",en:"Hummingbird Tree"},
    botanical:"Sesbania grandiflora", family:"Fabaceae",
    desc:{mr:"झपाट्याने वाढणारा लहान वृक्ष; मोठी पांढरी वा लाल फुले.",en:"A fast-growing small tree with large white or red flowers."},
    puja:{mr:"एकविसावी आणि शेवटची पत्री म्हणून अर्पण केली जाते.",en:"Offered as the twenty-first and final leaf."},
    eco:{mr:"जमिनीत नत्र स्थिरावतो; फुले पक्षी व मधमाश्यांना उपयुक्त.",en:"Fixes nitrogen; its flowers feed birds and bees."},
    care:{light:{mr:"पूर्ण ऊन.",en:"Full sun."},water:{mr:"नियमित पाणी.",en:"Regular water."},soil:{mr:"ओलसर, सुपीक माती.",en:"Moist, fertile soil."},growth:{mr:"खूप वेगाने वाढतो.",en:"Grows remarkably fast."}},
    note:{title:{mr:"फुलांची भाजी",en:"A flower on the plate"},mr:"हादग्याची फुले महाराष्ट्रात भाजी म्हणूनही खाल्ली जातात.",en:"Agasti flowers are also cooked as a vegetable in Maharashtra."} }
];

/* ---- संक्षिप्त नोंदीचे पूर्ण पानात रूपांतर ---- */
function buildPatri(b) {
  const facts = [
    { k:{mr:"शास्त्रीय नाव",en:"Botanical name"}, v:b.botanical },
    { k:{mr:"कुळ",en:"Family"}, v:b.family },
    { k:{mr:"मराठी",en:"Marathi"}, v:b.name.mr },
    { k:{mr:"इंग्रजी",en:"English"}, v:b.common.en }
  ];
  const m = MASTER[b.number] || {};
  const botanyPoints = (m.botany && m.botany.length) ? [b.desc, ...m.botany] : [b.desc];

  const sections = [
    { icon:"🕉️", title:{mr:"गणपती पूजेत स्थान",en:"Place in the Puja"}, points:[ b.puja ] },
    { icon:"🔬", title:{mr:"वनस्पतीशास्त्र व पर्यावरण",en:"Botany & Environment"}, facts, points:botanyPoints }
  ];

  if (m.ayurveda && m.ayurveda.length) {
    sections.push({ icon:"🌿", title:{mr:"आयुर्वेद व पारंपरिक उपयोग",en:"Ayurveda & Traditional Uses"},
      points:m.ayurveda,
      note:{ mr:"ही औषधी माहिती केवळ संदर्भात्मक आहे; प्रत्यक्ष उपचारासाठी पात्र आयुर्वेदतज्ज्ञांचा सल्ला आवश्यक.",
             en:"This medicinal information is for reference only; for actual treatment, consult a qualified Ayurveda expert." } });
  }

  sections.push(
    { icon:"🌍", title:{mr:"पर्यावरण",en:"Ecology"}, points:[ b.eco ] },
    { icon:"🪴", title:{mr:"संगोपन",en:"How to Grow It"}, care:[
        { icon:"☀️", label:{mr:"प्रकाश",en:"Light"}, text:b.care.light },
        { icon:"💧", label:{mr:"पाणी",en:"Water"},  text:b.care.water },
        { icon:"🪴", label:{mr:"माती",en:"Soil"},   text:b.care.soil },
        { icon:"🌱", label:{mr:"वाढ",en:"Growth"},  text:b.care.growth } ] }
  );

  if (b.note) sections.push({ icon:"✨", title:{mr:"एक रंजक गोष्ट",en:"A Fascinating Note"},
    callout:{ title:b.note.title, points:[ { mr:b.note.mr, en:b.note.en } ] } });

  return {
    id:b.id, number:b.number, ready:true, kind:KIND[b.id] || "herb", image:b.image || `assets/img/${b.id}.jpg`,
    name:b.name, common:b.common, botanical:b.botanical, family:b.family,
    tagline:{ mr:`एकविंशति पत्रींपैकी क्रमांक ${DEVANAGARI_NUM[b.number]}`,
              en:`Patri ${b.number} of the twenty-one sacred leaves` },
    mantra:b.mantra || (MANTRAS[b.number-1] && MANTRAS[b.number-1].line) || null,
    deityName:b.deityName || (MANTRAS[b.number-1] && { mr:"श्री " + MANTRAS[b.number-1].deity }),
    mantraMeaning:b.mantraMeaning,
    sections,
    references:[
      { mr:"महाराष्ट्रातील प्रचलित एकविंशति-पत्री गणेशपूजा परंपरा.",
        en:"The prevalent Maharashtrian twenty-one-leaf Ganesha puja tradition." },
      { mr:`${b.botanical}, accepted botanical identity; Indian flora व वनस्पती-संदर्भ.`,
        en:`${b.botanical}, accepted botanical identity; Indian flora references.` }
    ]
  };
}

const PATRIS = [ MALATI, ...BRIEF.map(buildPatri) ];
