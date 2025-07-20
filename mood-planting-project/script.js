const btn = document.getElementById('moodBtn');
const output = document.getElementById('output');

const moods = [
    "🌤️ Tenang",
    "🌧️ Sedih",
    "🌪️ Gelisah",
    "🌸 Lembut",
    "🌑 Hampa",
    "🌈 Penuh harapan"
];

btn.addEventListener('click', () => {
    const randomMood = moods[Math.floor(Math.random() * moods.length)];
    output.textContent = `Hari ini kamu merasa: ${randomMood}`;
});