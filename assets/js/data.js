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
  host:   { mr: "मालतीताईंच्या घरची आरास", en: "Hosted with love at our home" },

  /* festival deep-dive, shown on the home page */
  about: [
    { icon:"🕉️", title:{ mr:"गणेश चतुर्थी", en:"Ganesh Chaturthi" },
      body:{ mr:"भाद्रपद शुक्ल चतुर्थीला श्रीगणेशाचा जन्मोत्सव साजरा होतो. विघ्नहर्ता आणि बुद्धीची देवता असलेला गणपती घरोघरी विराजमान होतो आणि अनंत चतुर्दशीला विसर्जन होते. लोकमान्य टिळकांनी हा उत्सव सार्वजनिक करून एकतेचे प्रतीक बनवला.",
             en:"On Bhadrapada Shukla Chaturthi, Maharashtra welcomes the birth of Shri Ganesha, remover of obstacles and lord of wisdom. He is installed at home and bid farewell with visarjan on Anant Chaturdashi. Lokmanya Tilak turned it into a great public celebration of unity." } },
    { icon:"🌸", title:{ mr:"गौरी-गणपती", en:"Gauri-Ganpati" },
      body:{ mr:"गणपतीच्या दिवसांत माहेरवाशिणींसारख्या ज्येष्ठा गौरी (पार्वती, गणेशाची माता) तीन दिवस घरी येतात. आवाहन, पूजन आणि विसर्जन या तीन दिवसांत त्यांना सजवून सोळा भाज्या व पुरणपोळीचा नैवेद्य दाखवला जातो.",
             en:"During Ganpati, Maharashtrian homes welcome Jyeshtha Gauri (Parvati, Ganesha's mother) for three days, like married daughters returning home. Across Avahan, Pujan and Visarjan she is adorned and offered a feast of sixteen vegetables and puran poli." } },
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

/* =====================================================================
   पत्री क्र. १, मालती (पूर्ण संशोधन दस्तऐवजावर आधारित)
   ===================================================================== */
const MALATI = {
  id: "malati", number: 1, ready: true, image: "assets/img/malati.png",
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
        { mr:"नाव समान असले तरी वनस्पती एकच असेलच असे नाही. संदर्भ व शास्त्रीय ओळख महत्त्वाची.", en:"A shared name need not mean a shared plant, context and scientific identity matter more than the local name." } ] } }
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
    note:{title:{mr:"केसांसाठी प्रसिद्ध",en:"Famed for hair"},mr:"आयुर्वेदात भृंगराज केस व यकृतासाठी ओळखला जातो, पारंपरिक उपयोग, आधुनिक उपचार नव्हे.",en:"Ayurveda prizes Bhringaraj for hair and the liver, traditional use, not modern medicine."} },

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
    note:{title:{mr:"⚠ विषारी वनस्पती",en:"⚠ A poisonous plant"},mr:"धोत्र्याचे सर्व भाग विषारी आहेत, फक्त पूजेसाठी हाताळावे, सेवन कधीही करू नये; लहान मुले व जनावरांपासून दूर ठेवावे.",en:"Every part of dhatura is toxic, handle only for worship, never consume, and keep away from children and animals."} },

  { id:"tulasi", number:7, name:{mr:"तुळस / तुलसी",en:"Tulsi"}, common:{mr:"पवित्र तुळस",en:"Holy Basil"},
    botanical:"Ocimum tenuiflorum", family:"Lamiaceae",
    desc:{mr:"सुगंधी पानांचे पवित्र झुडूप; अंगणातील तुळशी-वृंदावन.",en:"A sacred aromatic shrub, the tulsi of every courtyard."},
    puja:{mr:"सातवी पत्री म्हणून काही पूजाविधींत तुळस अर्पण केली जाते.",en:"Offered in some vidhis as the seventh leaf."},
    eco:{mr:"सुगंधी पाने कीटक दूर ठेवतात; मधमाश्यांना फुले उपयुक्त.",en:"Its scent repels insects while the flowers help bees."},
    care:{light:{mr:"भरपूर ऊन.",en:"Plenty of sun."},water:{mr:"नियमित, मध्यम पाणी.",en:"Regular, moderate water."},soil:{mr:"सुपीक, निचरा होणारी माती.",en:"Fertile, free-draining soil."},growth:{mr:"शेंडे खुडल्यास दाट वाढते.",en:"Pinch tips for bushy growth."}},
    note:{title:{mr:"तुळस आणि गणेश",en:"Tulsi and Ganesha"},mr:"एका प्रसिद्ध कथेनुसार तुळस गणेशाला वर्ज्य मानतात; तरी काही एकविंशति-पत्री याद्यांत ती येते, परंपरेनुसार आईंच्या पूजाविधीची खात्री करावी.",en:"A well-known legend holds that tulsi is normally not offered to Ganesha, yet it appears in some twenty-one-leaf lists, do verify against the family's own vidhi."} },

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
    note:{title:{mr:"आयुर्वेदातील स्थान",en:"A place in Ayurveda"},mr:"आघाडा पारंपरिक औषधींत ओळखला जातो, पारंपरिक उपयोग, आधुनिक उपचार नव्हे.",en:"Apamarga is known in traditional medicine, traditional use, not modern treatment."} },

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
    note:{title:{mr:"⚠ विषारी झुडूप",en:"⚠ A toxic shrub"},mr:"कण्हेरीचे सर्व भाग विषारी असतात, फक्त पूजेसाठी हाताळावे, सेवन टाळावे.",en:"All parts of oleander are poisonous, handle only for worship and never ingest."} },

  { id:"arka", number:12, name:{mr:"रुई / अर्क",en:"Arka"}, common:{mr:"रुई",en:"Crown Flower / Milkweed"},
    botanical:"Calotropis gigantea", family:"Apocynaceae",
    desc:{mr:"राखट पानांचे झुडूप; जांभळट-पांढरी मुकुटासारखी फुले, चीक असतो.",en:"A grey-leaved shrub with crown-like mauve-white flowers and milky latex."},
    puja:{mr:"बारावी पत्री; अर्क सूर्य व गणेशाशी जोडला जातो.",en:"The twelfth leaf; arka is linked to the Sun and to Ganesha."},
    eco:{mr:"रखरखीत जागीही तगते; फुलपाखरांचे (वाघमाशी) आश्रयस्थान.",en:"Thrives on the harshest ground; a host plant for tiger butterflies."},
    care:{light:{mr:"पूर्ण ऊन.",en:"Full sun."},water:{mr:"अत्यल्प पाणी.",en:"Very little water."},soil:{mr:"कोरडी, वालुकामय माती.",en:"Dry, sandy soil."},growth:{mr:"अतिशय कणखर; आपोआप वाढते.",en:"Very hardy; grows unaided."}},
    note:{title:{mr:"⚠ चीक टाळा",en:"⚠ Mind the latex"},mr:"रुईचा पांढरा चीक त्रासदायक/विषारी असतो, डोळे व त्वचेपासून दूर ठेवावा.",en:"Arka's white latex is irritant and toxic, keep it away from eyes and skin."} },

  { id:"arjuna", number:13, name:{mr:"अर्जुन",en:"Arjuna"}, common:{mr:"अर्जुनसादडा",en:"Arjuna Tree"},
    botanical:"Terminalia arjuna", family:"Combretaceae",
    desc:{mr:"नदीकाठी वाढणारा उंच वृक्ष; गुळगुळीत पांढरट साल.",en:"A tall riverside tree with smooth pale bark."},
    puja:{mr:"तेरावी पत्री म्हणून अर्पण केली जाते.",en:"Offered as the thirteenth leaf."},
    eco:{mr:"नदीकाठ स्थिर ठेवणारा वृक्ष; सावली व निवारा देतो.",en:"Stabilises riverbanks and gives shade and shelter."},
    care:{light:{mr:"पूर्ण ऊन.",en:"Full sun."},water:{mr:"भरपूर पाणी/ओलावा आवडतो.",en:"Likes ample moisture."},soil:{mr:"खोल, ओलसर माती.",en:"Deep, moist soil."},growth:{mr:"मोठा वृक्ष; भरपूर जागा हवी.",en:"A big tree needing space."}},
    note:{title:{mr:"हृदयाचा मित्र",en:"Friend of the heart"},mr:"अर्जुनाची साल आयुर्वेदात हृदयासाठी प्रसिद्ध आहे, पारंपरिक उपयोग, आधुनिक उपचार नव्हे.",en:"Arjuna's bark is famed in Ayurveda for the heart, traditional use, not modern treatment."} },

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
    care:{light:{mr:"पूर्ण ऊन.",en:"Full sun."},water:{mr:"मध्यम पाणी.",en:"Moderate water."},soil:{mr:"कोणतीही माती चालते.",en:"Grows in most soils."},growth:{mr:"प्रचंड वृक्ष; कुंडीत बोन्साय शक्य.",en:"An enormous tree, can be kept small as a bonsai."}},
    note:{title:{mr:"सळसळणारे पान",en:"The whispering leaf"},mr:"पिंपळाच्या पानाचा लांब देठ पानाला थोड्याशा वाऱ्यानेही सळसळायला लावतो.",en:"The peepal leaf's long stalk sets it trembling in the faintest breeze."} },

  { id:"jai", number:19, name:{mr:"जाई",en:"Jai Jasmine"}, common:{mr:"जाई",en:"Needle-flower Jasmine"},
    botanical:"Jasminum auriculatum", family:"Oleaceae",
    desc:{mr:"सुगंधी पांढऱ्या फुलांची वेल; हारासाठी लोकप्रिय.",en:"A climber of fragrant white flowers, beloved for garlands."},
    puja:{mr:"एकोणिसावी पत्री; जाईची सुगंधी फुले देवाला वाहतात.",en:"The nineteenth leaf; jai's fragrant flowers are offered to the deity."},
    eco:{mr:"संध्याकाळी दरवळणारा सुगंध परागकीटकांना बोलावतो.",en:"Its evening perfume calls in pollinators."},
    care:{light:{mr:"ऊन ते थोडी सावली.",en:"Sun to light shade."},water:{mr:"मध्यम, नियमित पाणी.",en:"Moderate, regular water."},soil:{mr:"सुपीक, निचरा होणारी माती.",en:"Fertile, free-draining soil."},growth:{mr:"आधार दिल्यास सुंदर वेल.",en:"Makes a lovely vine on a support."}} },

  { id:"kevada", number:20, name:{mr:"केवडा",en:"Kewda"}, common:{mr:"केवडा",en:"Screw Pine"},
    botanical:"Pandanus odorifer", family:"Pandanaceae",
    desc:{mr:"लांब काटेरी पानांचे झुडूप; अत्यंत सुगंधी तुरा.",en:"A shrub of long spiny leaves with an intensely fragrant flower-spike."},
    puja:{mr:"विसावी पत्री; केवड्याचा सुगंध पूजेत मोलाचा.",en:"The twentieth leaf; kewda's perfume is prized in worship."},
    eco:{mr:"समुद्रकाठ, दलदलीजवळ वाढतो; मुळे माती धरून ठेवतात.",en:"Grows by coasts and marshes; its roots hold the soil."},
    care:{light:{mr:"ऊन; उबदार दमट हवा.",en:"Sun; warm, humid air."},water:{mr:"भरपूर ओलावा.",en:"Plenty of moisture."},soil:{mr:"वालुकामय, ओलसर माती.",en:"Sandy, moist soil."},growth:{mr:"पाने काटेरी; जपून हाताळावे.",en:"Leaves are spiny, handle with care."}},
    note:{title:{mr:"केवडा आणि कथा",en:"Kewda and the legend"},mr:"एका पुराणकथेत केतकी/केवडा शंकराला वर्ज्य ठरतो; तरी काही याद्यांत तो येतो, परंपरेनुसार खात्री करावी.",en:"A legend bars ketaki/kewda from Shiva's worship, yet it appears in some lists, do verify by tradition."} },

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
  const sections = [
    { icon:"🕉️", title:{mr:"गणपती पूजेत स्थान",en:"Place in the Puja"}, points:[ b.puja ] },
    { icon:"🔬", title:{mr:"वनस्पतीशास्त्र",en:"Botany"}, facts, points:[ b.desc ] },
    { icon:"🌍", title:{mr:"पर्यावरण",en:"Ecology"}, points:[ b.eco ] },
    { icon:"🪴", title:{mr:"संगोपन",en:"How to Grow It"}, care:[
        { icon:"☀️", label:{mr:"प्रकाश",en:"Light"}, text:b.care.light },
        { icon:"💧", label:{mr:"पाणी",en:"Water"},  text:b.care.water },
        { icon:"🪴", label:{mr:"माती",en:"Soil"},   text:b.care.soil },
        { icon:"🌱", label:{mr:"वाढ",en:"Growth"},  text:b.care.growth } ] }
  ];
  if (b.note) sections.push({ icon:"✨", title:{mr:"एक रंजक गोष्ट",en:"A Fascinating Note"},
    callout:{ title:b.note.title, points:[ { mr:b.note.mr, en:b.note.en } ] } });

  return {
    id:b.id, number:b.number, ready:true, image:b.image || null,
    name:b.name, common:b.common, botanical:b.botanical, family:b.family,
    tagline:{ mr:`एकविंशति पत्रींपैकी क्रमांक ${DEVANAGARI_NUM[b.number]}`,
              en:`Patri ${b.number} of the twenty-one sacred leaves` },
    mantra:b.mantra || null,
    deityName:b.deityName, mantraMeaning:b.mantraMeaning,
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
