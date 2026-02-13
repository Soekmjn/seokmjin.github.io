let currentStep = 0;

// Konfigurasi Moments & Dates
const moments = [
    {img: "moment1.jpg", text: "The place that found us: Amidst the crowd of busy people and mingling voices, that place found us. I caught your adorable smile from afar, as if it set you apart from the surrounding chaos. It wasn’t planned, yet our steps seemed guided to meet, coming together in a fleeting but meaningful moment. There, time felt slower, giving us space to pause, exchange silent glances, and hold onto a small trace we’ll never forget."},
    {img: "moment2.jpg", text: "In yet another gathering, already within the warm, bustling circle, I began searching for a chance to interact, even if just through a smile or a fleeting glance. You noticed it with your adorable gaze, turning every small opportunity into something bigger, more meaningful, and opening the way for us to grow closer. Amid the scattered chatter and laughter, I felt a moment that only we understood, where the distance seemed to shrink and every second offered a chance to know each other more deeply."},
    {img: "moment3.jpg", text: "You started the conversation by telling me to be quiet—hey, how could I stay silent when I’m being reached out to by someone as adorably captivating as you?"},
    {img: "moment4.jpg", text: "We watched the rave together, just the three of us, but even so, it felt like a good step toward getting much closer to you. The little teasing you slipped into our conversation kept making me smile in between our talks."},
    {img: "moment5.jpg", text: "The first photo you sent me made me want to jump—it was so sudden, not exactly good for my sanity. But like an addiction, I think I’m starting to get hooked, constantly looking for any chance to have you send me more of your adorable photos."},
    {img: "moment6.jpg", text: "Getting involved in the game of Uno, especially with such a cute little stake, made me genuinely happy. It gave me a reason to make funny little videos—ones worthy of being sent to someone as charming as you. Maybe this is a perfect chance, a small moment that could bring us even closer."},
    {img: "moment7.jpg", text: "Even now, we’ve reached the stage of sharing kisses—the kind I’ve always been looking forward to. It’s truly addictive for me, and maybe… I hope it’s just as addictive for you too, babe."},
    {img: "moment8.jpg", text: "I’ve always loved every version of you, even the version of us now and the ones yet to come. Let’s create a beautiful, meaningful version of our story together."}
];

const dates = [
    {
        title: "Future Date #1",
        img: "date1.jpg",
        text: `Suatu hari nanti, mungkin kita akan lihat kembali fase awal setelah resmi pacaran. Bukan cuma tentang “jadian”, tapi tentang bagaimana kita belajar menikmati waktu berdua. <br><br>
        
        Kita duduk dekat kaca, cahaya sore jatuh lembut di meja kecil tempat dua cup es krim mulai meleleh perlahan. Kamu bercerita tentang hal-hal sederhana, dan aku lebih banyak memperhatikan caramu tersenyum daripada isi ceritanya. Sendok kecil di tanganmu bergerak pelan, seolah tidak ingin momen itu cepat selesai. <br><br>
        
        Lalu aku melihat sedikit es krim tertinggal di sudut bibirmu. <br><br>
        Aku tersenyum, mendekat sedikit tanpa membuatnya terasa tiba-tiba. Tanganku terangkat pelan, ibu jari menyentuh sudut bibirmu dengan hati-hati, membersihkannya selembut mungkin. Sentuhan yang singkat, tapi cukup untuk membuat kita sama-sama diam. <br><br>
        Tatapanmu langsung bertemu denganku. Tidak ada yang bicara, tapi jarak di antara kita terasa berbeda dari sebelumnya. Di luar kaca, orang-orang tetap berjalan, suara pintu toko sesekali terbuka dan tertutup, tapi di meja kecil itu suasananya seperti diperlambat. <br><br>
        Tanganku belum sepenuhnya menjauh. Ibu jariku masih di sana sepersekian detik lebih lama dari yang seharusnya, seolah memastikan benar-benar bersih. Aku tersenyum tipis melihat reaksimu yang tiba-tiba lebih tenang. Aku mendekat sedikit lagi, pelan, tanpa tergesa. Cukup dekat sampai aku bisa merasakan hangat napasmu. Tidak ada gerakan mendadak, tidak ada yang berlebihan. Hanya keputusan kecil yang mengalir begitu saja. <br><br>
        Bibirku menyentuh bibirmu singkat. Lembut dan ringan, seperti kecupan yang memang sudah ada di udara sejak tadi. Tidak lama, hanya cukup untuk meninggalkan rasa hangat di tengah dinginnya es krim yang hampir habis. <br><br>
        Saat aku menjauh, jarak kita masih dekat. Aku menatapmu beberapa detik, lalu tersenyum. <br><br>
        “Ternyata bukan ice cream yang paling manis.” <br><br>
        Kamu tertawa pelan, mungkin karena malu, mungkin karena setuju. Dan sore itu, dengan dua cup kosong di atas meja dan cahaya yang mulai meredup, terasa lebih manis dari yang kita rencanakan.`

    },
    {
        title: "Future Date #2",
        img: "date2.jpg",
        text: `Bioskop malam itu nggak terlalu ramai. Kita datang pas lampu lobby masih terang dan suara mesin popcorn samar terdengar dari kejauhan. Kamu jalan di sampingku, santai, sesekali cerita hal random yang bikin aku senyum sendiri. <br><br>
        Di dalam studio, aku pilih kursi baris tengah agak pinggir. Lebih lega. Lebih nyaman. Begitu kita duduk, popcorn ditaruh di tengah seolah memang sudah sepakat bakal rebutan. <br><br>
        Lampu perlahan redup. Layar menyala. <br><br>
        Awalnya kita benar-benar nonton. Ketawa kecil waktu ada dialog yang witty. Saling lirik kalau ada adegan yang terlalu manis. Tangan kita sesekali ketemu di ember popcorn, tapi belum ada yang sengaja menahan. <br><br>
        Lalu ceritanya masuk ke bagian yang lebih intim. Musiknya lebih pelan. Dialognya lebih dalam. <br><br>
        Kamu condong sedikit ke arahku dan berbisik, <br><br>
        “Ini film romantis banget sih.” <br><br>
        Aku masih menatap layar beberapa detik, membiarkan suasana menggantung. Baru kemudian aku menoleh ke kamu. <br><br>
        “Kita juga lagi di film romantis, sadar nggak?” <br><br> 
        Kamu melirikku, alis terangkat tipis. “Oh ya? Judulnya apa?” <br><br>
        Aku senyum kecil. Tanganku yang tadi santai di sandaran kursi turun pelan, menyentuh tanganmu dulu sebelum akhirnya menggenggamnya.<br><br>
        “Belum ada judul,” jawabku ringan. “Masih proses syuting.”<br><br> 
        Kamu menahan senyum supaya nggak ketawa. Cahaya layar berganti warna di wajahmu—kadang biru, kadang hangat. <br><br>
        Aku nggak buru-buru. Cuma tetap pegang tanganmu. Ibu jariku mengusap pelan punggung tanganmu, ritmenya santai.<br><br>
        “Jangan ganggu,” kamu berbisik lagi, pura-pura protes.<br><br>
        Aku mendekat sedikit, cukup buat suaraku cuma kamu yang dengar.“Kalau ini film romantis,” kataku pelan, “harusnya ada momen yang bikin deg-degan.”<br><br>
        Kamu menoleh lagi. Kali ini jarak kita lebih dekat dari sebelumnya.Nggak ada gerakan dramatis. Nggak ada tarik wajah atau sentuhan berlebihan. Cuma dua orang yang sama-sama berhenti di jarak yang terlalu dekat untuk dibilang kebetulan.Aku diam sebentar. Kasih kamu ruang.Kamu nggak mundur.Jadi aku condong sedikit lagi.<br><br>
        Ciumannya singkat. Hangat. Nggak lama, tapi cukup buat dunia di sekitar terasa sedikit lebih sunyi beberapa detik.Begitu lepas, aku tetap di situ sebentar. Napas kita masih berdekatan.Aku senyum tipis.<br><br>
        “Kayaknya ratingnya bakal bagus,” bisikku pelan.<br><br>
        Kamu menggeleng kecil, tapi dudukmu jadi sedikit lebih dekat dari sebelumnya. Aku kembali menatap layar, seolah nggak ada yang terjadi.Tapi tangan kita tetap saling terkait. Dan sepanjang sisa film itu, aku nggak yakin mana yang lebih bikin jantung terasa hidup. Cerita mereka di layar, atau kenyataan kalau di kursi baris tengah itu... kita juga lagi bikin versi kita sendiri.<br><br>`
    },
    {
        title: "Future Date #3",
        img: "date3.jpg",
        text: `Ruang musik itu hangat dan penuh energi. Di satu sisi, rak gitar dan keyboard menempel rapi di dinding, sementara lampu temaram memancarkan cahaya jingga yang lembut. Aku duduk di drum set, stik di tangan, merasakan ritme yang mengalir melalui jari dan kaki. Di depanku, dia berdiri dengan mikrofon, suaranya mengalun lembut menyatu dengan ketukan drummku—Sheila on 7 – “Kita”. Setiap pukulan dan nada vokal saling melengkapi, menciptakan harmoni yang terasa hanya milik kita. Aroma kayu dari lantai dan gema ringan dari ruangan kecil itu membuat momen ini intim; musik jadi bahasa diam yang mengikat, dan aku bisa merasakan, dalam setiap detik, bahwa kita benar-benar hadir bersama dalam lagu ini.<br><br>`
    },
    {
        title: "Future Date #4",
        img: "date4.jpg",
        text: `Aku angkat kamera, fokus ke kamu yang berdiri di bawah sinar matahari sore. Senyummu yang menggemaskan bikin aku nggak bisa berhenti tersenyum juga. Aku jepret beberapa kali, hati rasanya hangat karena cuma kamu yang bisa bikin momen sederhana di taman jadi begitu spesial.`
    }
];

const reasons = ["Your smile—it’s mine to admire", "Your eyes—they mesmerize me", "The way you care—you belong with me", "Your patience—it makes me proud", "Your soul—it’s mine to protect", "Your laugh—it drives me crazy", "Your presence—it completes me", "Your touch—it feels like home", "The way you look at me—you’re mine", "Your energy—it excites me", "Your confidence—it inspires me", "Your softness—it’s mine to hold", "Your curiosity—it keeps me intrigued", "Your style—it belongs with me", "The way you smile for me—it’s addictive", "Your warmth—it melts all my defenses", "Your determination—it makes me protective", "Your humor—it’s my favorite game", "Your elegance—it makes me proud", "Your heart—it’s mine forever"]; // Isi sampai 20
let reasonIdx = 0;

// Inisialisasi Slide Dinamis
function init() {
    const container = document.getElementById('dynamic-slides');
    moments.forEach((m, i) => {
        container.innerHTML += `
            <div class="step-container" id="s-${i+2}">
                <h2 class="elegant-title">Moment #${i+1}</h2>
                <div class="img-frame"><img src="${m.img}" class="photo-main"></div>
                <div class="scroll-card"><p>${m.text}</p></div>
                <button class="btn-main" onclick="nextSlide()">Trace Forward ↓</button>
            </div>`;
    });
    dates.forEach((d, i) => {
        container.innerHTML += `
            <div class="step-container" id="s-${i+12}">
                <h2 class="elegant-title gold">${d.title}</h2>
                <div class="img-frame"><img src="${d.img}" class="photo-main"></div>
                <div class="scroll-card"><p>${d.text}</p></div>
                <button class="btn-main" onclick="nextSlide()">See Next Dream ↓</button>
            </div>`;
    });
}
init();

function nextSlide() {
    document.getElementById(`s-${currentStep}`).classList.remove('active');
    currentStep++;
    document.getElementById(`s-${currentStep}`).classList.add('active');
    if(currentStep === 10) createPaperAlchemy();
    if(currentStep === 18) startFinalRain();
}

// Visual Alchemy: Paper Strip Effect
function createPaperAlchemy() {
    const canvas = document.getElementById('paper-canvas');
    canvas.innerHTML = ''; // Reset
    const stripWidth = 30; 
    for(let i=0; i<10; i++) {
        const s = document.createElement('div');
        s.className = 'paper-strip';
        s.style.width = stripWidth + 'px';
        s.style.height = '300px';
        s.style.backgroundImage = "url('flower_part.jpg')"; // Pastikan file ini ada
        s.style.backgroundPosition = `-${i * stripWidth}px 0px`;
        s.style.left = Math.random() * 200 + 'px';
        s.style.top = (Math.random() * 80 - 40) + 'px';
        s.style.transform = `rotate(${Math.random() * 60 - 30}deg)`;
        canvas.appendChild(s);
    }
}

function stitchPaper() {
    const strips = document.querySelectorAll('.paper-strip');
    strips.forEach((s, i) => {
        s.style.left = (i * 30) + 'px';
        s.style.top = '0px';
        s.style.transform = 'rotate(0deg)';
    });
    document.getElementById('btn-stitch').style.display = 'none';
    document.getElementById('alchemy-title').innerText = "Mahakarya Utuh";
    setTimeout(() => { document.getElementById('btn-next-alchemy').style.display = 'block'; }, 2000);
}

// Reject Button Menghindar
const rej = document.getElementById('rejectBtn');
rej.addEventListener('mouseover', () => {
    rej.style.left = Math.random() * 80 + 'vw';
    rej.style.top = Math.random() * 80 + 'vh';
});

// Chat Reasons
function addReason() {
    if(reasonIdx < reasons.length) {
        const area = document.getElementById('chat-area');
        const m = document.createElement('div');
        m.className = 'chat-msg';
        m.innerText = reasons[reasonIdx];
        m.style.left = Math.random() * 50 + '%';
        m.style.top = Math.random() * 80 + '%';
        area.appendChild(m);
        reasonIdx++;
        document.getElementById('counter').innerText = `${reasonIdx}/20`;
    } else { nextSlide(); }
}

// Final Rain (Hati, Kiss, 5 Foto Berulang)
function startFinalRain() {
    const assets = ['❤️', '💋', 'p1.jpg', 'p2.jpg', 'p3.jpg', 'p4.jpg', 'p5.jpg'];
    setInterval(() => {
        const item = assets[Math.floor(Math.random() * assets.length)];
        const div = document.createElement('div');
        div.className = 'rain-obj';
        div.style.left = Math.random() * 100 + 'vw';
        div.style.animation = `fallDown ${Math.random() * 2 + 3}s linear forwards`;

        if(item.includes('.jpg')) {
            const img = document.createElement('img');
            img.src = item;
            img.className = 'rain-img';
            div.appendChild(img);
        } else {
            div.innerText = item;
            div.style.fontSize = '2.5rem';
        }
        document.body.appendChild(div);
        setTimeout(() => div.remove(), 5000);
    }, 300);
}