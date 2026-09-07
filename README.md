# गौरी-गणपती आरास २०२६ — वेबसाइट

गणेशपूजेतील एकविंशति (२१) पवित्र पत्रींची द्विभाषिक (मराठी + English) वेबसाइट.
A bilingual website presenting the 21 sacred patris offered to Shri Ganesha.

## पाहण्यासाठी (View the site)

फक्त `index.html` browser मध्ये उघडा. काही ब्राउझरमध्ये local files वर fonts/images नीट दिसण्यासाठी एक छोटा server चालवा:

```bash
python -m http.server 8000
```

नंतर browser मध्ये: `http://localhost:8000`

## नवीन पत्री कशी जोडावी (Add a new patri)

1. `assets/js/data.js` उघडा.
2. त्या पत्रीची नोंद शोधा (उदा. `id: "durva"`). तिचे संशोधन तयार झाले की:
   - `ready: false` चे `ready: true` करा.
   - `image`, `name`, `common`, `botanical`, `family`, `deityName`, `mantra` भरा.
   - `sections` आणि `references` मालतीच्या नोंदीप्रमाणे भरा (कॉपी करून बदला).
3. त्या पत्रीचा फोटो `assets/img/<id>.png` येथे ठेवा (उदा. `assets/img/durva.png`).

बस्स — website आपोआप ती पत्री ग्रिडमध्ये व स्वतंत्र पानावर दाखवेल.

## रचना (Structure)

```
index.html            मुख्य पान — २१ पत्रींची ग्रिड
patri.html            प्रत्येक पत्रीचे स्वतंत्र पान (?id=<id>)
assets/css/styles.css  डिझाइन
assets/js/data.js      ★ सर्व मजकूर येथे — फक्त हीच फाईल संपादा
assets/js/app.js       रेंडरिंग (बदलण्याची गरज नाही)
assets/img/            पत्रींचे फोटो
```

पहिली पत्री **मालती** पूर्ण भरलेली आहे — उरलेल्या २० "लवकरच / Coming soon" अशा दिसतात.

गणपती बाप्पा मोरया 🙏
