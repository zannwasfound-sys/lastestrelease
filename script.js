/*
  ╔════════════════════════════════════════════════════════╗
  ║           SCRIPT.JS — FILE JAVASCRIPT                  ║
  ║                                                        ║
  ║  File ini menangani semua interaktivitas website.      ║
  ║  Isi:                                                  ║
  ║  1. Data Terjemahan (Indonesia ↔ Inggris)              ║
  ║  2. Sistem Partikel Mengambang                         ║
  ║  3. Toggle Tema (Gelap ↔ Terang)                       ║
  ║  4. Toggle Bahasa (ID ↔ EN)                            ║
  ║  5. Navbar (scroll + animasi klik)                     ║
  ║  6. Menu Mobile (hamburger)                            ║
  ║  7. Animasi Scroll (IntersectionObserver)              ║
  ║  8. Flip Card Sertifikat (3D)                          ║
  ║  9. Kartu Polaroid Draggable + Tali                    ║
  ║  10. Inisialisasi (jalankan saat halaman siap)         ║
  ╚════════════════════════════════════════════════════════╝
*/

/* ═══════════════════════════════════════════════════════════
   1. DATA TERJEMAHAN
   
   Objek ini menyimpan semua teks dalam dua bahasa.
   Kunci (key) harus sama dengan nilai data-translate="..."
   di HTML.
   
   Cara tambah terjemahan baru:
   1. Tambah data-translate="key_baru" di HTML
   2. Tambah "key_baru": "teks indonesia" di bagian 'id'
   3. Tambah "key_baru": "english text" di bagian 'en'
   ═══════════════════════════════════════════════════════════ */
const translations = {
  id: {
    // ── Navbar ──
    nav_home: 'Beranda',
    nav_about: 'Tentang',
    nav_exp: 'Pengalaman',
    nav_cert: 'Sertifikat',
    nav_music: 'Musik',
    nav_gaming: 'Gaming',
    nav_peripheral: 'Setup',
    nav_contact: 'Kontak',

    // ── Hero ──
    hero_status: 'Mahasiswa Teknik Informatika',
    hero_tagline: '"Seorang arsitek tidak membangun gedung dengan tangan kosong. ia menggunakan alat terbaik untuk memastikan presisi"',
    hero_btn_about: 'Mau kenalan?',
    hero_btn_contact: 'Kontak',
    polaroid_caption: 'Fav Photo <3',
    badge_student: 'Informatika 2025',
    badge_code: 'HTML · CSS · JS',
    badge_ai: 'AI Explorer',
    scroll_down: 'Scroll ke bawah',

    // ── About ──
    about_tag: '// tentang_saya',
    about_title: 'Siapa Aku?',
    about_p1: 'Halo! Aku mahasiswa Teknik Informatika semester 2 Universitas Komputer Indonesia yang lagi seru-serunya eksplor dunia digital. Belum jadi expert sih, tapi setiap hari belajar sesuatu yang baru dan itu yang bikin aku jadi penasaran dan semangat!',
    about_p2: 'Website ini bukan portofolio pro yang penuh klien dan projek besar. Ini lebih kayak "buku harian digital" yang nunjukkin perjalanan belajarku dari ngedit video, ngulik AI, sampai nyoba bikin website pertamaku walaupun masih dengan bantuan AI😅.',
    about_p3: 'Masih banyak yang mau aku pelajari, tapi yang penting mulai dulu, kan ya? 😄',
    fact_status: 'Status',
    fact_status_val: 'Mahasiswa Aktif UNIKOM tahun 2025',
    fact_major: 'Jurusan',
    fact_major_val: 'Teknik Informatika',
    fact_focus: 'Fokus',
    fact_focus_val: 'Kreatif Digital & AI',
    fact_goal: 'Tujuan',
    fact_goal_val: 'Jadi Web Developer bagian Frontend',

    // ── Experience ──
    exp_tag: '// pengalaman',
    exp_title: 'Yang Udah Aku Kuasai',
    exp_sub: 'Bukan expert, tapi udah cukup tau gimana cara kerjanya 😄',
    now: 'sekarang',

    exp1_title: 'Video Editor',
    exp1_desc: 'Udah main CapCut sejak 2020, versi mobile dan juga udah terjun ke desktop juga. Dari yang cuma potong-potong video, sekarang udah bisa bikin konten yang lumayan enak dilihat. Mulai dari transisi, teks animasi, dan efek.',

    exp2_title: 'Photo Editor',
    exp2_years: '2021 - Sekarang',
    exp2_desc: 'Dari Pixellab buat desain logo, Canva buat poster & presentasi, Google Seed buat eksplorasi dan editing foto nature, sampai Photoshop Mobile buat hasil yang lebih pro. Banyak tools, makin banyak kreasi!',

    exp3_title: 'AI Enthusiast',
    exp3_desc: 'Sejak 2024 aktif eksplor berbagai tools AI. Saya suka banget cari-cari prompt yang unik dan menarik, apalagi kalau sudah menyangkut pemrograman dan Image Generator. Saya masih terus eksplor sampai sekarang karena AI berkembang super cepet,canggih dan juga mulai dibutuhkan.',

    exp4_title: 'Web Development',
    exp4_years: '~1 Tahun Belajar',
    exp4_desc: 'Masih dalam tahap belajar tapi udah lumayan ngerti konsep dasarnya. HTML buat struktur, CSS buat tampilan, JavaScript buat yang interaktif. Masih banyak yang belum dikuasai termasuk JavaScript yang masih sering bikin saya garuk kepala dan stress karena logikanya..😅',

    // ── Certificates ──
    cert_tag: '// sertifikat',
    cert_title: 'Sertifikat & Pencapaian',
    cert_sub: 'Klik kartunya buat lihat detailnya ya! 🃏',
    cert_img_hint: 'Taruh Foto Sertifikat',
    cert_size_hint: '(Disarankan rasio 4:3)',
    cert_flip: 'Klik untuk detail ↩',
    cert_back: 'Kembali ↩',

    cert1_name: 'Sertifikat Seminar Nasional UNIKOM & KPI',
    cert1_issuer: 'Direktorat Kemahasiswaan UNIKOM & KPI Pusat (2025)',
    cert1_date: 'November 7, 2025',
    cert1_desc: 'Sertifikat kepesertaan dalam Seminar Nasional dengan tema "Konten Penyiaran Vs Konten Media Baru Bagi Gen Z". Materi ini berfokus pada perbandingan dan adaptasi dunia penyiaran konvensional terhadap tren media baru di kalangan generasi muda."',

    cert2_name: 'Sertifikat International Scientific Virtual Talk #9 Cyber Security',
    cert2_issuer: 'CV. Semiotika bekerja sama dengan International Open University (IOU), The Gambia.',
    cert2_date: 'October 2, 2025',
    cert2_desc: 'Sertifikat internasional sebagai peserta dalam diskusi ilmiah bertajuk "Cyber Security". Acara ini merupakan kolaborasi lintas negara (India-Indonesia) yang membahas isu-isu keamanan siber di tingkat global.',

    cert3_name: 'Sertifikat International Scientific Virtual Talk #10 Penelitian Berbasis AI untuk Publikasi Jurnal Mahasiswa',
    cert3_issuer: 'CV. Semiotika & Local Government Rural Development Pakistan',
    cert3_date: 'October 14, 2025',
    cert3_desc: 'International Virtual Talk: Implementasi AI dalam Riset dan Publikasi Jurnal Ilmiah.',

    // ── Contact ──
    contact_tag: '// kontak',
    contact_title: 'MUNGKIN BUTUH SESUATU?',
    contact_sub: 'Mau ngobrol, kolaborasi, atau sekadar say hi? Langsung aja kepoin saya ya hahaha! 👋😂',
    contact_follow: 'Lihat Profil →',
    contact_chat: 'Chat Sekarang →',
    contact_note: 'Aku aktif di Instagram & WhatsApp. Respons biasanya dalam 1–24 jam ya! 😄',

    // ── Video ──
    nav_video: 'Video',
    video_tag: '// video_perkenalan',
    video_title: 'Video Perkenalan',
    video_sub: 'Lebih kenal aku lewat video ini yok 😂🎬',

    // ── Music ──
    music_tag: '// musik_favorit',
    music_title: 'Musik Favoritku',
    music_sub: 'Playlist yang menemani hari-hariku 🎧',

    // ── Footer ──
    footer_made: 'Dibuat dengan bantuan AI + banyak trial & error yang harus manual fix😒',
    footer_copy: 'Semua konten milik penulis',

    // ── Peripheral ──
    peripheral_tag: '// setup_saya',
    peripheral_title: 'My Setup',
    peripheral_sub: 'Gear yang menemani hari-hariku 🖥️',
    peripheral_cat_laptop: 'Laptop',
    peripheral_cat_phone: 'Handphone',
    peripheral_cat_keyboard: 'Keyboard',
    peripheral_cat_mouse: 'Mouse',
    peripheral_cat_iem: 'IEM',
    peripheral_cat_mic: 'Microphone',

    // ── Gaming ──
    gaming_tag: '// gaming_profile',
    gaming_title: 'Gaming Profile',
    gaming_sub: 'Mabar? 🎮',
    game_ml_tag: 'Bang Bang',
    game_roblox_tag: 'Casual Player',
    game_stat_username: 'Username',
    game_stat_highest: 'Highest Rank',
    game_stat_role: 'Role Favorit',
    game_stat_hero: 'Hero Andalan',
    game_stat_playstyle: 'Gaya Main',
    game_stat_display: 'Display Name',
    game_stat_goal: 'Tujuan',
    game_playstyle_ml: 'Tergantung Mood 😄',
    game_playstyle_roblox: 'Casual 🎲',
    game_goal_roblox: 'Isi Waktu Luang 😄',
    game_hero_role: 'Assassin / Mage',
    game_mastery: 'Main',
    game_profile_btn: 'Lihat Profil Roblox →',

    // ── Skills Progress ──
    skills_tag_nav: 'Skills',
    skills_tag: '// skill_level',
    skills_title: 'Seberapa Jauh?',
    skills_sub: 'Progress belajarku sampai sekarang 📊',
    skill_cat_web: 'Web Development',
    skill_cat_creative: 'Creative & Digital',
    skill_level_html: 'Intermediate',
    skill_level_css: 'Basic+',
    skill_level_js: 'Pemula',
    skill_level_video: 'Mahir',
    skill_level_photo: 'Mahir',
    skill_level_ai: 'Mahir',
    skill_name_html: 'HyperText Markup Language',
    skill_name_css: 'Cascading Style Sheets',
    skill_name_js: 'JavaScript',
    skill_name_video: 'Editing Video',
    skill_name_photo: 'Editing Photo',
    skill_name_ai: 'AI Prompter',

    // ── Bulletin Board ──
    nav_bulletin: 'Pesan',
    bulletin_tag: '// papan_pesan',
    bulletin_title: 'Papan Pesan',
    bulletin_sub: 'Tinggalin pesan buat aku yuk! Aku pasti baca semuanya 📌',
    bulletin_form_title: 'Tulis Pesanmu',
    bulletin_name_label: 'Nama',
    bulletin_msg_label: 'Pesan',
    bulletin_send: 'Kirim Pesan 📨',
    bulletin_loading: 'Memuat pesan...',
    bulletin_empty: 'Belum ada pesan. Jadilah yang pertama!',
    bulletin_success: 'Pesan terkirim! Makasih ya 🙏',
    bulletin_error: 'Gagal kirim pesan. Coba lagi ya!',
    bulletin_fill: 'Nama dan pesan wajib diisi!',
    bulletin_name_ph: 'Nama kamu...',
    bulletin_msg_ph: 'Tulis pesanmu di sini... (maks. 300 karakter)',
    bulletin_reply_ph: 'Tulis balasanmu...',
    bulletin_badword: 'Pesan mengandung kata yang tidak pantas 🚫',
    // ── Bulletin action buttons ──
    bulletin_btn_reply:    'Balas',
    bulletin_btn_delete:   'Hapus',
    bulletin_btn_send:     'Kirim 💬',
    bulletin_btn_cancel:   'Batal',
    // ── Bulletin modals ──
    bulletin_del_msg_title:  'Hapus Pesan Ini?',
    bulletin_del_msg_desc:   'Pesanmu akan dihapus permanen dari papan. Tindakan ini tidak bisa dibatalkan.',
    bulletin_del_msg_ok:     'Ya, Hapus!',
    bulletin_del_reply_title:'Hapus Balasan?',
    bulletin_del_reply_desc: 'Balasan ini akan dihapus permanen dan tidak bisa dikembalikan.',
    bulletin_del_reply_ok:   'Ya, Hapus',
    bulletin_del_cancel:     'Batal',
    bulletin_del_fail_title: 'Gagal Hapus',
    bulletin_del_fail_desc:  'Terjadi error. Coba lagi ya!',
    bulletin_del_fail_ok:    'OK',
    bulletin_del_reply_fail_desc: 'Terjadi error saat menghapus. Coba lagi ya!',
    bulletin_count_msg:   'pesan',
    bulletin_count_reply: 'balasan',

    // ── Meme of the Month ──
    nav_meme:  'Meme',
    meme_tag:  '// meme_of_the_month',
    meme_title:'Meme of the Month',
    meme_sub:  'Apa itu jir💀',

    // ── Username lock ──
    uname_change_btn:        'Ganti',
    uname_change_btn_locked: 'Ganti ({days} hari lagi)',
    uname_change_title:      'Ganti Username',
    uname_change_title_locked: 'Username terkunci selama 3 hari. Bisa diubah dalam {days} hari.',
    uname_cooldown_chip:     '🔒 Dapat diganti dalam {days} hari',
    uname_change_sub:        'Masukkan username barumu. Username lama akan digantikan.',

    // ── Quiz Section ──
    nav_quiz:           'Quiz',
    quiz_tag:           '// quiz_challenge',
    quiz_title:         'Quiz Challenge',
    quiz_sub:           'Uji pengetahuanmu! Saingan sama pengunjung lain di leaderboard 🏆',
    quiz_start_title:   'Siap Mulai?',
    quiz_start_sub:     '10 soal campuran • Pengetahuan Umum, Teknologi & Matematika',
    quiz_pill_umum:     '📚 Pengetahuan Umum',
    quiz_pill_tekno:    '💻 Teknologi & IT',
    quiz_pill_math:     '🔢 Matematika',
    quiz_playing_as:    'Main sebagai:',
    quiz_start_btn:     'Mulai Quiz ⚡',
    quiz_retry_btn:     '🔄 Main Lagi',
    quiz_lb_btn:        '🏆 Leaderboard',
    quiz_reset_label:   '🔄 Reset dalam:',
    quiz_lb_loading_text: 'Memuat...',
    quiz_lb_empty:      'Belum ada pemain. Jadilah yang pertama! 🎯',
    quiz_lb_error:      'Gagal memuat. Coba refresh.',
    quiz_result_sub:    '{correct} jawaban benar dari {total} soal',
    quiz_stat_correct:  '✅ Benar:',
    quiz_stat_wrong:    '❌ Salah:',
    quiz_stat_score:    '⭐ Skor:',
    quiz_rank_msg:      'Kamu berada di peringkat #{rank} di leaderboard! 🎯',
    quiz_no_login:      'Login dengan username untuk masuk leaderboard!',
    quiz_reset_soon:    'Segera direset...',
    quiz_lb_me:         'kamu',
    quiz_time_d:        'h',
    quiz_time_h:        'j',
    quiz_time_m:        'm',
    quiz_time_s:        'd',
    quiz_result_9:      'Luar Biasa! Jenius!',
    quiz_result_7:      'Bagus Banget!',
    quiz_result_5:      'Lumayan Nih!',
    quiz_result_3:      'Masih Perlu Belajar!',
    quiz_result_0:      'Jangan Menyerah!',
    quiz_cat_umum:      '📚 Umum',
    quiz_cat_tekno:     '💻 Teknologi',
    quiz_cat_math:      '🔢 Matematika',
  },

  en: {
    // ── Navbar ──
    nav_home: 'Home',
    nav_about: 'About',
    nav_exp: 'Experience',
    nav_cert: 'Certificates',
    nav_music: 'Music',
    nav_gaming: 'Gaming',
    nav_peripheral: 'Setup',
    nav_contact: 'Contact',

    // ── Hero ──
    hero_status: 'Informatics Engineering Student',
    hero_tagline: '"An architect does not build a building with empty hands. He uses the best tools to ensure precision"',
    hero_btn_about: "Would you like to get to know me?",
    hero_btn_contact: 'Contact',
    polaroid_caption: "Fav Photo <3",
    badge_student: 'Informatics 2025',
    badge_code: 'HTML · CSS · JS',
    badge_ai: 'AI Explorer',
    scroll_down: 'Scroll down',

    // ── About ──
    about_tag: '// about_me',
    about_title: 'Who Am I?',
    about_p1: "Hello! I am a second semester computer science student at Universitas Komputer Indonesia who is currently exploring the digital world. I'm not an expert yet, but every day I learn something new, and that's what makes me curious and excited!",
    about_p2: "This website is not a professional portfolio full of clients and big projects. It's more like a “digital diary” that shows my learning journey from editing videos, exploring AI, to trying to build my first website, even though it was still with the help of AI😅",
    about_p3: "Still so much to learn, but hey, gotta start somewhere right? 😄",
    fact_status: 'Status',
    fact_status_val: 'UNIKOM Active Student in 2025',
    fact_major: 'Major',
    fact_major_val: 'Informatics Engineering',
    fact_focus: 'Focus',
    fact_focus_val: 'Digital Creative & AI',
    fact_goal: 'Goal',
    fact_goal_val: 'Become a Frontend Web Developer',

    // ── Experience ──
    exp_tag: '// experience',
    exp_title: "What I've Been Up To",
    exp_sub: "Not an expert, but I know enough to get things done 😄",
    now: 'Now',

    exp1_title: 'Video Editor',
    exp1_desc: "I've been using CapCut since 2020, both the mobile and desktop versions. From just cutting videos, now I can create content that is quite pleasing to the eye. Starting from transitions, animated text, and effects.",

    exp2_title: 'Photo Editor',
    exp2_years: '2021 - Now',
    exp2_desc: 'From Pixellab for logo design, Canva for posters and presentations, Google Seed for exploring and editing nature photos, to Photoshop Mobile for more professional results. More tools, more creativity!',

    exp3_title: 'AI Enthusiast',
    exp3_desc: "Since 2024, I have been actively exploring various AI tools. I really enjoy searching for unique and interesting prompts, especially when it comes to programming and image generators. I am still exploring them today because AI is developing very quickly, becoming more sophisticated, and is starting to be needed.",

    exp4_title: 'Web Development',
    exp4_years: '~1 Year of Learning',
    exp4_desc: "I'm still learning, but I already understand the basic concepts pretty well. HTML is for structure, CSS is for appearance, and JavaScript is for interactivity. There's still a lot I haven't mastered, including JavaScript, which often makes me scratch my head and stress me out because of its logic.😅",

    // ── Certificates ──
    cert_tag: '// certificates',
    cert_title: 'Certificates & Achievements',
    cert_sub: 'Click a card to see the details! 🃏',
    cert_img_hint: 'Add Certificate Image',
    cert_size_hint: '(Recommended 4:3 ratio)',
    cert_flip: 'Click for details ↩',
    cert_back: 'Back ↩',

        cert1_name: 'UNIKOM & KPI National Seminar Certificate',
    cert1_issuer: 'UNIKOM Student Affairs Directorate & KPI Center (2025)',
    cert1_date: 'November 7, 2025',
    cert1_desc: 'Certificate of participation in the National Seminar with the theme “Broadcast Content vs. New Media Content for Gen Z.” This material focuses on the comparison and adaptation of the conventional broadcasting world to new media trends among the younger generation.',

    cert2_name: 'Certificate for International Scientific Virtual Talk #9 Cyber Security',
    cert2_issuer: 'CV. Semiotika collaborates with the International Open University (IOU), The Gambia.',
    cert2_date: 'October 2, 2025',
    cert2_desc: 'International certificate as a participant in a scientific discussion entitled “Cyber Security”. This event was a cross-border collaboration (India-Indonesia) that discussed cyber security issues at the global level.',

    cert3_name: 'Certificate for International Scientific Virtual Talk #10 Artificial Intelligence-Based Research for Student Journal Publications',
    cert3_issuer: 'CV. Semiotika & Local Government Rural Development Pakistan (2025)',
    cert3_date: 'October 14, 2025',
    cert3_desc: 'International Virtual Talk: Implementing AI in Research and Scientific Journal Publications.',

    // ── Contact ──
    contact_tag: '// contact',
    contact_title: 'Perhaps you need something?',
    contact_sub: 'Want to chat, collaborate, or just say hi? Go for it hahaha! 👋😂',
    contact_follow: 'View Profile →',
    contact_chat: 'Chat Now →',
    contact_note: "I'm active on Instagram & WhatsApp. Usually respond within 1–24 hours! 😄",

    // ── Video ──
    nav_video: 'Video',
    video_tag: '// intro_video',
    video_title: 'Introduction Video',
    video_sub: 'Get to know me better through this video 😂🎬',

    // ── Music ──
    music_tag: '// favorite_music',
    music_title: 'My Favorite Music',
    music_sub: 'The playlist that keeps me company 🎧',

    // ── Footer ──
    footer_made: 'Created with the help of AI + lots of trial and error that had to be fixed manually😒',
    footer_copy: 'All content belongs to the author',

    // ── Peripheral ──
    peripheral_tag: '// my_setup',
    peripheral_title: 'My Setup',
    peripheral_sub: 'Gear that gets me through the day 🖥️',
    peripheral_cat_laptop: 'Laptop',
    peripheral_cat_phone: 'Phone',
    peripheral_cat_keyboard: 'Keyboard',
    peripheral_cat_mouse: 'Mouse',
    peripheral_cat_iem: 'IEM',
    peripheral_cat_mic: 'Microphone',

    // ── Gaming ──
    gaming_tag: '// gaming_profile',
    gaming_title: 'Gaming Profile',
    gaming_sub: 'Play Together? 🎮',
    game_ml_tag: 'Bang Bang',
    game_roblox_tag: 'Casual Player',
    game_stat_username: 'Username',
    game_stat_highest: 'Highest Rank',
    game_stat_role: 'Favorite Role',
    game_stat_hero: 'Main Hero',
    game_stat_playstyle: 'Playstyle',
    game_stat_display: 'Display Name',
    game_stat_goal: 'Goal',
    game_playstyle_ml: 'Depends on Mood 😄',
    game_playstyle_roblox: 'Casual 🎲',
    game_goal_roblox: 'Just for fun! 😄',
    game_hero_role: 'Assassin / Mage',
    game_mastery: 'Main',
    game_profile_btn: 'View Roblox Profile →',

    // ── Skills Progress ──
    skills_tag_nav: 'Skills',
    skills_tag: '// skill_level',
    skills_title: 'How Far Along?',
    skills_sub: 'My learning progress so far 📊',
    skill_cat_web: 'Web Development',
    skill_cat_creative: 'Creative & Digital',
    skill_level_html: 'Intermediate',
    skill_level_css: 'Basic+',
    skill_level_js: 'Beginner',
    skill_level_video: 'Advanced',
    skill_level_photo: 'Advanced',
    skill_level_ai: 'Advanced',
    skill_name_html: 'HyperText Markup Language',
    skill_name_css: 'Cascading Style Sheets',
    skill_name_js: 'JavaScript',
    skill_name_video: 'Video Editing',
    skill_name_photo: 'Photo Editing',
    skill_name_ai: 'AI Prompter',

    // ── Bulletin Board ──
    nav_bulletin: 'Board',
    bulletin_tag: '// message_board',
    bulletin_title: 'Message Board',
    bulletin_sub: "Leave me a message! I'll read every single one 📌",
    bulletin_form_title: 'Write Your Message',
    bulletin_name_label: 'Name',
    bulletin_msg_label: 'Message',
    bulletin_send: 'Send Message 📨',
    bulletin_loading: 'Loading messages...',
    bulletin_empty: 'No messages yet. Be the first!',
    bulletin_success: 'Message sent! Thank you 🙏',
    bulletin_error: 'Failed to send. Please try again!',
    bulletin_fill: 'Name and message are required!',
    bulletin_name_ph: 'Your name...',
    bulletin_msg_ph: 'Write your message here... (max. 300 characters)',
    bulletin_reply_ph: 'Write your reply...',
    bulletin_badword: 'Message contains inappropriate words 🚫',
    // ── Bulletin action buttons ──
    bulletin_btn_reply:    'Reply',
    bulletin_btn_delete:   'Delete',
    bulletin_btn_send:     'Send 💬',
    bulletin_btn_cancel:   'Cancel',
    // ── Bulletin modals ──
    bulletin_del_msg_title:  'Delete This Message?',
    bulletin_del_msg_desc:   'Your message will be permanently removed from the board. This cannot be undone.',
    bulletin_del_msg_ok:     'Yes, Delete!',
    bulletin_del_reply_title:'Delete Reply?',
    bulletin_del_reply_desc: 'This reply will be permanently deleted and cannot be recovered.',
    bulletin_del_reply_ok:   'Yes, Delete',
    bulletin_del_cancel:     'Cancel',
    bulletin_del_fail_title: 'Delete Failed',
    bulletin_del_fail_desc:  'An error occurred. Please try again!',
    bulletin_del_fail_ok:    'OK',
    bulletin_del_reply_fail_desc: 'An error occurred while deleting. Please try again!',
    bulletin_count_msg:   'message',
    bulletin_count_reply: 'reply',

    // ── Meme of the Month ──
    nav_meme:  'Meme',
    meme_tag:  '// meme_of_the_month',
    meme_title:'Meme of the Month',
    meme_sub:  'What the hell is that💀',

    // ── Username lock ──
    uname_change_btn:        'Change',
    uname_change_btn_locked: 'Change ({days} days left)',
    uname_change_title:      'Change Username',
    uname_change_title_locked: 'Username locked for 3 days. Can be changed in {days} days.',
    uname_cooldown_chip:     '🔒 Can be changed in {days} days',
    uname_change_sub:        'Enter your new username. Your old username will be replaced.',

    // ── Quiz Section ──
    nav_quiz:           'Quiz',
    quiz_tag:           '// quiz_challenge',
    quiz_title:         'Quiz Challenge',
    quiz_sub:           'Test your knowledge! Compete with other visitors on the leaderboard 🏆',
    quiz_start_title:   'Ready to Start?',
    quiz_start_sub:     '10 mixed questions • General Knowledge, Technology & Math',
    quiz_pill_umum:     '📚 General Knowledge',
    quiz_pill_tekno:    '💻 Technology & IT',
    quiz_pill_math:     '🔢 Mathematics',
    quiz_playing_as:    'Playing as:',
    quiz_start_btn:     'Start Quiz ⚡',
    quiz_retry_btn:     '🔄 Play Again',
    quiz_lb_btn:        '🏆 Leaderboard',
    quiz_reset_label:   '🔄 Resets in:',
    quiz_lb_loading_text: 'Loading...',
    quiz_lb_empty:      'No players yet. Be the first! 🎯',
    quiz_lb_error:      'Failed to load. Try refreshing.',
    quiz_result_sub:    '{correct} correct answers out of {total} questions',
    quiz_stat_correct:  '✅ Correct:',
    quiz_stat_wrong:    '❌ Wrong:',
    quiz_stat_score:    '⭐ Score:',
    quiz_rank_msg:      "You're ranked #{rank} on the leaderboard! 🎯",
    quiz_no_login:      'Login with a username to join the leaderboard!',
    quiz_reset_soon:    'Resetting soon...',
    quiz_lb_me:         'you',
    quiz_time_d:        'd',
    quiz_time_h:        'h',
    quiz_time_m:        'm',
    quiz_time_s:        's',
    quiz_result_9:      'Outstanding! Genius!',
    quiz_result_7:      'Great Job!',
    quiz_result_5:      'Not Bad!',
    quiz_result_3:      'Keep Learning!',
    quiz_result_0:      "Don't Give Up!",
    quiz_cat_umum:      '📚 General',
    quiz_cat_tekno:     '💻 Technology',
    quiz_cat_math:      '🔢 Math',
  }
};

/* ═══════════════════════════════════════════════════════════
   VARIABEL STATUS GLOBAL
   Variabel yang dipakai di berbagai fungsi di bawah.
   'let' = bisa diubah nilainya nanti
   'const' = nilainya tetap tidak berubah
   ═══════════════════════════════════════════════════════════ */

// Bahasa aktif saat ini ('id' = Indonesia, 'en' = Inggris)
let currentLang = 'id';

// Tema aktif ('dark' atau 'light')
let currentTheme = 'dark';

/* ═══════════════════════════════════════════════════════════
   2. SISTEM PARTIKEL
   
   Cara kerja:
   - Canvas digambar ulang terus-menerus (60x per detik)
   - Setiap partikel punya posisi (x, y), kecepatan, dan ukuran
   - Saat partikel keluar dari layar, muncul dari sisi lain
   - Garis ditarik antara partikel yang berdekatan
   ═══════════════════════════════════════════════════════════ */

// Ambil elemen canvas dari HTML
const canvas = document.getElementById('particleCanvas');
// ctx = "context 2D" — alat untuk menggambar di canvas
const ctx = canvas.getContext('2d');

// Jumlah partikel yang akan dibuat
const PARTICLE_COUNT = 60;

// Array yang menyimpan semua partikel
let particles = [];

// Posisi mouse (untuk interaksi partikel dengan kursor)
let mouse = { x: null, y: null };

// Fungsi: sesuaikan ukuran canvas dengan ukuran layar
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

// Kelas Partikel — template untuk membuat tiap partikel
class Particle {
  constructor() {
    this.reset(); // Inisialisasi posisi dan sifat awal
  }

  // Reset/inisialisasi ulang partikel ke posisi acak
  reset() {
    this.x = Math.random() * canvas.width;      // Posisi X acak
    this.y = Math.random() * canvas.height;     // Posisi Y acak
    this.size = Math.random() * 2 + 0.5;        // Ukuran 0.5–2.5px
    this.speedX = (Math.random() - 0.5) * 0.4; // Kecepatan X (-0.2 s/d 0.2)
    this.speedY = (Math.random() - 0.5) * 0.4; // Kecepatan Y
    this.opacity = Math.random() * 0.5 + 0.1;  // Transparansi 10%–60%
    // Kecepatan berkedip (opacity naik-turun)
    this.blinkSpeed = Math.random() * 0.005 + 0.002;
    this.blinkDir = Math.random() > 0.5 ? 1 : -1; // Arah: naik atau turun
  }

  // Update posisi partikel setiap frame
  update() {
    this.x += this.speedX; // Geser X
    this.y += this.speedY; // Geser Y

    // Efek kedip: opacity naik turun
    this.opacity += this.blinkSpeed * this.blinkDir;
    if (this.opacity >= 0.6) this.blinkDir = -1; // Balik arah turun
    if (this.opacity <= 0.05) this.blinkDir = 1; // Balik arah naik

    // Kalau partikel keluar layar, muncul dari sisi berlawanan
    if (this.x < 0) this.x = canvas.width;
    if (this.x > canvas.width) this.x = 0;
    if (this.y < 0) this.y = canvas.height;
    if (this.y > canvas.height) this.y = 0;
  }

  // Gambar partikel ke canvas
  draw() {
    // ⚠️ PENTING: baca dari document.body, BUKAN document.documentElement!
    // Karena class ".light-mode" ada di <body>, bukan di <html>.
    // Kalau baca dari documentElement (html), variabel warna tidak terupdate
    // saat ganti tema → makanya partikel tetap putih di light mode!
    const color = getComputedStyle(document.body)
      .getPropertyValue('--particle-color').trim() || '255, 255, 255';

    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${color}, ${this.opacity})`;
    ctx.fill();
  }
}

// Buat semua partikel
function initParticles() {
  particles = [];
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    particles.push(new Particle());
  }
}

// Gambar garis antara partikel yang berdekatan
function connectParticles() {
  // Sama seperti draw() — baca dari body supaya warna ikut tema
  const color = getComputedStyle(document.body)
    .getPropertyValue('--particle-color').trim() || '255, 255, 255';

  for (let a = 0; a < particles.length; a++) {
    for (let b = a + 1; b < particles.length; b++) {
      // Hitung jarak antara dua partikel
      const dx = particles[a].x - particles[b].x;
      const dy = particles[a].y - particles[b].y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      // Gambar garis hanya kalau jarak < 120px
      const maxDist = 120;
      if (dist < maxDist) {
        // Makin jauh = makin transparan
        const opacity = (1 - dist / maxDist) * 0.15;
        ctx.beginPath();
        ctx.moveTo(particles[a].x, particles[a].y); // Titik awal
        ctx.lineTo(particles[b].x, particles[b].y); // Titik akhir
        ctx.strokeStyle = `rgba(${color}, ${opacity})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }
    }
  }
}

// Loop animasi utama partikel
// requestAnimationFrame = browser memanggil fungsi ini ~60x per detik
function animateParticles() {
  // Bersihkan canvas sebelum gambar ulang
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Update dan gambar tiap partikel
  for (const p of particles) {
    p.update();
    p.draw();
  }

  // Gambar garis koneksi
  connectParticles();

  // Panggil lagi di frame berikutnya (loop terus)
  requestAnimationFrame(animateParticles);
}

/* ═══════════════════════════════════════════════════════════
   3. TOGGLE TEMA (GELAP / TERANG)
   
   Cara kerja:
   - Tambah/hapus class "dark-mode" dan "light-mode" di <body>
   - CSS sudah mengatur tampilan berdasarkan class ini
   ═══════════════════════════════════════════════════════════ */
/* ═══════════════════════════════════════════════════════════
   SWITCH TRANSITION — parallelogram wipe for mode / language
   Anti-spam: a new call while one is running immediately
   completes the pending change and starts fresh.
   ═══════════════════════════════════════════════════════════ */
let _transitionBusy    = false;
let _transitionTimers  = [];   // all pending setTimeout IDs
let _transitionPending = null; // pending onMidpoint not yet fired

function _clearTransitionTimers() {
  _transitionTimers.forEach(id => clearTimeout(id));
  _transitionTimers = [];
}

function showSwitchTransition(label, onMidpoint) {
  const overlay  = document.getElementById('switchTransitionOverlay');
  const labelEl  = document.getElementById('switchTransitionLabel');

  if (_transitionBusy) {
    _clearTransitionTimers();
    if (_transitionPending) { _transitionPending(); _transitionPending = null; }
    if (overlay) overlay.classList.remove('active', 'phase-enter', 'phase-exit');
    _transitionBusy = false;
  }

  if (!overlay || !labelEl) { if (onMidpoint) onMidpoint(); return; }

  _transitionBusy    = true;
  _transitionPending = onMidpoint;
  labelEl.textContent = label;

  // 1. Reset classes
  overlay.classList.remove('active', 'phase-enter', 'phase-exit');

  // 2. Double rAF agar browser commit reset sebelum animasi baru
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      overlay.classList.add('active', 'phase-enter');
    });
  });

  // Timing: fade-in 280ms, label bounces in at 120ms delay,
  // fire midpoint after label fully visible, then fade out 320ms
  const enter = 420;   // cukup untuk fade-in + label muncul sempurna
  const pause = 100;
  const exit  = 360;

  const t1 = setTimeout(() => {
    _transitionPending = null;
    if (onMidpoint) onMidpoint();

    const t2 = setTimeout(() => {
      overlay.classList.remove('phase-enter');
      requestAnimationFrame(() => {
        overlay.classList.add('phase-exit');
      });

      const t3 = setTimeout(() => {
        overlay.classList.remove('active', 'phase-exit');
        _transitionBusy = false;
      }, exit + 60);
      _transitionTimers.push(t3);
    }, pause);
    _transitionTimers.push(t2);
  }, enter);
  _transitionTimers.push(t1);
}

function toggleTheme() {
  const body = document.body;
  const goingLight = currentTheme === 'dark';
  const label = goingLight ? 'LIGHT MODE' : 'DARK MODE';

  const _thOverlay = document.getElementById('switchTransitionOverlay');
  if (_thOverlay) {
    // Hapus semua class warna lama
    _thOverlay.classList.remove('lang-en', 'lang-id', 'theme-toggle', 'going-light', 'going-dark');
    // Set class SEBELUM animasi — tidak bergantung body class sama sekali
    _thOverlay.classList.add(goingLight ? 'going-light' : 'going-dark');
  }

  showSwitchTransition(label, () => {
    if (goingLight) {
      body.classList.remove('dark-mode');
      body.classList.add('light-mode');
      currentTheme = 'light';
    } else {
      body.classList.remove('light-mode');
      body.classList.add('dark-mode');
      currentTheme = 'dark';
    }
  });
}



/* ═══════════════════════════════════════════════════════════
   4. SISTEM BAHASA (INDONESIA / INGGRIS)
   
   Bug sebelumnya & kenapa:
   ─ el.textContent = value
     Kalau elemen punya anak HTML (child nodes), textContent
     akan MENGHAPUS semua anak itu lalu isi dengan teks polos.
     Akibatnya, elemen anak yang punya data-translate hilang
     dari DOM → klik terjemahan berikutnya tidak menemukan
     elemen itu lagi → teks tidak berubah → "balik ke awal".
   
   ─ Terjemahan tidak di-apply saat load
     Halaman mulai dengan teks Indonesia hardcoded di HTML.
     Saat user klik EN terus balik ID, teks diambil dari
     translations['id'] yang secara konten sama tapi format
     bisa beda (whitespace, dll) → user merasa "reset".
   
   Fix:
   ─ Pakai innerHTML alih-alih textContent
     innerHTML tidak merusak struktur HTML anak, lebih aman.
   
   ─ Apply terjemahan langsung di DOMContentLoaded
     Supaya state selalu diambil dari translations object,
     bukan dari HTML hardcode. Toggle pun selalu konsisten.
   
   ─ Simpan SEMUA teks asli HTML di Map sebelum ditimpa
     Jadi kalau ada key yang hilang di translations,
     kita bisa fallback ke teks aslinya, tidak kosong.
   ═══════════════════════════════════════════════════════════ */

// Map untuk simpan teks/HTML asli tiap elemen (key = data-translate value)
// Map = struktur data seperti objek tapi key-nya bisa apa saja
const originalContent = new Map();

// Fungsi: simpan semua konten asli dari HTML sebelum ditimpa terjemahan
// Dipanggil SEKALI saat halaman pertama load
function snapshotOriginalContent() {
  const elements = document.querySelectorAll('[data-translate]');
  elements.forEach(el => {
    const key = el.getAttribute('data-translate');
    // Simpan innerHTML (bukan textContent) supaya struktur HTML terjaga
    // Tapi karena teks kita tidak ada HTML di dalamnya, bisa pakai textContent juga
    // Kita pakai trim() untuk hapus whitespace awal/akhir dari HTML indented
    if (!originalContent.has(key)) {
      originalContent.set(key, el.innerHTML.trim());
    }
  });
}

// Fungsi terapkan terjemahan ke semua elemen
function applyTranslations() {
  const elements = document.querySelectorAll('[data-translate]');

  elements.forEach(el => {
    const key = el.getAttribute('data-translate');

    // Cek apakah terjemahan untuk key ini tersedia
    const terjemahan = translations[currentLang]?.[key];

    if (terjemahan) {
      // ✅ Pakai innerHTML bukan textContent!
      // Alasan: innerHTML tidak merusak child elements.
      // textContent AKAN merusak child elements (child node hilang dari DOM).
      el.innerHTML = terjemahan;
    } else {
      // Kalau key tidak ada di translations, fallback ke konten asli HTML
      // supaya tidak kosong/blank
      const fallback = originalContent.get(key);
      if (fallback !== undefined) {
        el.innerHTML = fallback;
      }
      // Log ke console supaya mudah debug key yang missing
      console.warn(`[Terjemahan] Key tidak ditemukan: "${key}" untuk bahasa "${currentLang}"`);
    }
  });
}

function toggleLanguage() {
  const nextLang  = currentLang === 'id' ? 'en' : 'id';
  const transLabel = nextLang === 'id' ? 'BAHASA INDONESIA' : 'ENGLISH';

  // Set warna bendera di overlay sebelum transisi
  const _overlay = document.getElementById('switchTransitionOverlay');
  if (_overlay) {
    _overlay.classList.remove('lang-en', 'lang-id', 'theme-toggle');
    _overlay.classList.add(nextLang === 'en' ? 'lang-en' : 'lang-id');
  }

  showSwitchTransition(transLabel, () => {
    currentLang = nextLang;

    // Update label tombol bahasa (desktop + mobile)
    const isID = currentLang === 'id';
    ['langLabel', 'langLabelMobile'].forEach(elId => {
      const el = document.getElementById(elId);
      if (!el) return;
      // Reset semua class dulu baru set yang baru
      el.className = '';
      el.innerHTML = `
        <span class="lang-flag-strip ${isID ? 'lang-flag-id' : 'lang-flag-en'}"></span>
        <span class="lang-code">${isID ? 'ID' : 'EN'}</span>
      `;
      el.className = `lang-badge ${isID ? 'lang-id' : 'lang-en'}`;
    });

    // Terapkan semua terjemahan
    applyTranslations();
    document.dispatchEvent(new CustomEvent('zanpw:langChanged'));
  });
}

/* ═══════════════════════════════════════════════════════════
   SMOOTH SCROLL KUSTOM (pakai requestAnimationFrame)
   
   Kenapa tidak pakai window.scrollTo({ behavior:'smooth' })?
   Karena cara itu bisa tidak jalan kalau:
   - Body punya overflow-x: hidden
   - Browser lama tidak support
   - Ada CSS yang "memblokir" scroll behavior
   
   Solusi: kita animasikan scroll sendiri pakai requestAnimationFrame.
   Cara kerja:
   1. Catat posisi scroll awal (start) dan tujuan (end)
   2. Setiap frame, hitung posisi antara (interpolasi easing)
   3. Geser scroll ke posisi itu
   4. Ulangi sampai sampai tujuan
   
   easeInOutCubic = fungsi easing supaya scroll
   terasa lambat di awal, cepat di tengah, lambat lagi di akhir
   (tidak seperti lari lurus yang kaku)
   ═══════════════════════════════════════════════════════════ */

// Fungsi easing — mengubah angka 0–1 menjadi kurva halus
// t = progress (0 = awal, 1 = selesai)
function easeInOutCubic(t) {
  // Rumus kurva cubic: lambat → cepat → lambat
  return t < 0.5
    ? 4 * t * t * t
    : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

// Fungsi scroll halus ke posisi Y tertentu
// targetY   = posisi tujuan (piksel dari atas halaman)
// duration  = durasi animasi dalam milidetik (default 700ms)
function smoothScrollTo(targetY, duration = 700) {
  const startY   = window.scrollY;           // Posisi scroll sekarang
  const distance = targetY - startY;         // Jarak yang harus ditempuh
  let   startTime = null;                    // Waktu mulai animasi

  // Kalau sudah di posisi itu, tidak perlu scroll
  if (Math.abs(distance) < 2) return;

  // ─ PENTING: matikan sementara CSS smooth scroll ─
  // Kalau CSS scroll-behavior: smooth aktif bersamaan dengan JS rAF,
  // browser "double-animates" → awal super lambat lalu tiba-tiba loncat.
  // Solusi: override ke 'auto' selama JS animation, restore setelah selesai.
  const htmlEl = document.documentElement;
  const origBehavior = htmlEl.style.scrollBehavior;
  htmlEl.style.scrollBehavior = 'auto';

  // Fungsi yang dipanggil setiap frame oleh browser
  function step(currentTime) {
    // Set waktu mulai saat pertama dipanggil
    if (!startTime) startTime = currentTime;

    // Hitung sudah berapa lama berjalan (0 → duration)
    const elapsed  = currentTime - startTime;

    // Konversi ke progress 0.0 → 1.0, maksimal 1
    const progress = Math.min(elapsed / duration, 1);

    // Terapkan fungsi easing ke progress
    const eased    = easeInOutCubic(progress);

    // Hitung posisi scroll saat ini berdasarkan easing
    const currentY = startY + distance * eased;

    // Gunakan window.scrollTo — lebih konsisten di mobile & semua browser
    window.scrollTo(0, currentY);

    // Kalau belum selesai, panggil lagi di frame berikutnya
    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      // Setelah selesai, kembalikan CSS scroll-behavior ke semula
      htmlEl.style.scrollBehavior = origBehavior;
    }
  }

  // Mulai loop animasi
  requestAnimationFrame(step);
}


/* ═══════════════════════════════════════════════════════════
   5. NAVBAR — SCROLL & ANIMASI KLIK
   ═══════════════════════════════════════════════════════════ */
function initNavbar() {
  const navbar   = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link');

  // ─ a) Deteksi scroll — tambah shadow saat di-scroll ─
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    updateActiveNavLink();
  });

  // ─ b) Klik nav link: animasi ripple + smooth scroll ─
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      // Cegah lompat langsung tanpa animasi (default browser)
      e.preventDefault();

      // ── Animasi ripple ──
      // Hapus dulu dari semua link supaya bisa diulang tiap klik
      navLinks.forEach(l => {
        l.classList.remove('clicked');
        void l.offsetWidth; // reset paksa animasi CSS
      });
      this.classList.add('clicked');
      setTimeout(() => this.classList.remove('clicked'), 500);

      // ── Scroll halus ke target ──
      const targetId = this.getAttribute('href'); // contoh: "#about"
      const target   = document.querySelector(targetId);

      if (target) {
        // Tinggi navbar (72px) — dikurangi supaya judul tidak ketutupan navbar
        const NAV_HEIGHT = 72;

        // Posisi section dari atas halaman (bukan dari atas viewport)
        // getBoundingClientRect().top = dari atas LAYAR (berubah saat scroll)
        // + window.scrollY = konversi ke dari atas HALAMAN (tidak berubah)
        const targetY = target.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT;

        // Jalankan scroll halus kustom kita
        smoothScrollTo(targetY, 750); // 750ms durasi — enak di mata
      }

      // Tutup menu mobile kalau terbuka
      closeMobileMenu();
    });
  });
}

// Fungsi: tandai link aktif berdasarkan section yang terlihat
function updateActiveNavLink() {
  const sections = document.querySelectorAll('section[id]');
  const scrollPos = window.scrollY + window.innerHeight / 3;

  sections.forEach(section => {
    const top = section.offsetTop;
    const bottom = top + section.offsetHeight;
    const id = section.getAttribute('id');

    // Cari link yang sesuai dengan section ini
    const link = document.querySelector(`.nav-link[href="#${id}"]`);

    if (scrollPos >= top && scrollPos < bottom) {
      // Hapus active dari semua
      document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
      // Tambah active ke link ini
      if (link) link.classList.add('active');
    }
  });
}

/* ═══════════════════════════════════════════════════════════
   6. MENU MOBILE (HAMBURGER)
   ═══════════════════════════════════════════════════════════ */
function toggleMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  // Toggle class "open" — CSS yang atur tampilan menu
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
}

function closeMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  hamburger.classList.remove('open');
  navLinks.classList.remove('open');
}

/* ═══════════════════════════════════════════════════════════
   7. ANIMASI SCROLL (INTERSECTION OBSERVER)
   
   Cara kerja:
   - IntersectionObserver "mengawasi" elemen-elemen tertentu
   - Saat elemen masuk ke viewport (terlihat di layar),
     tambah class "visible"
   - CSS sudah mengatur animasi saat class "visible" aktif
   
   Kenapa tidak pakai scroll event biasa?
   IntersectionObserver jauh lebih efisien dan tidak
   bikin website lemot.
   ═══════════════════════════════════════════════════════════ */
function initScrollAnimations() {
  // Elemen-elemen yang mau dianimasi saat terlihat
  const animateElements = document.querySelectorAll(
    '.section-header, .about-text p, .fact-card, ' +
    '.exp-card, .cert-container, .contact-card, .peripheral-card, ' +
    '.bulletin-form-card, .bulletin-board, .video-wrapper, .meme-video-wrap'
  );

  // Buat observer dengan opsi
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Elemen terlihat di layar
        const el = entry.target;
        // Ambil delay (jeda) dari atribut data-delay jika ada
        const delay = el.dataset.delay || 0;

        setTimeout(() => {
          el.classList.add('visible');
        }, parseInt(delay));

        // Berhenti mengawasi setelah animasi tampil
        // (tidak perlu animasi lagi kalau sudah terlihat)
        observer.unobserve(el);
      }
    });
  }, {
    threshold: 0.1,  // Mulai animasi saat 10% elemen terlihat
    rootMargin: '0px 0px -50px 0px' // Offset sedikit supaya tidak terlalu dini
  });

  // Mulai awasi tiap elemen
  animateElements.forEach(el => observer.observe(el));
}

/* ═══════════════════════════════════════════════════════════
   8. FLIP CARD SERTIFIKAT (3D)
   
   Cara kerja:
   - Fungsi dipanggil saat kartu diklik (onclick di HTML)
   - Toggle class "flipped" — CSS yang handle rotasi 3D-nya
   ═══════════════════════════════════════════════════════════ */
function flipCard(container) {
  // Toggle = kalau ada hapus, kalau tidak ada tambah
  container.classList.toggle('flipped');

  // Efek visual kecil: sedikit scale saat flip
  container.style.transform = 'scale(0.97)';
  setTimeout(() => {
    container.style.transform = '';
  }, 100);
}

/* ═══════════════════════════════════════════════════════════
   9. KARTU POLAROID DRAGGABLE + TALI KARET (SPRING PHYSICS)
   
   Cara kerja:
   - Canvas rope menggambar tali dari titik anchor (atas) ke kartu
   - Tali digambar sebagai kurva bezier (melengkung alami)
   - Kartu bisa di-drag (mouse dan touch)
   - Saat dilepas → kartu balik ke posisi asal seperti karet!
   
   Fisika spring (pegas/karet):
   - Setiap frame, hitung "gaya" yang menarik kartu ke posisi asal
   - Makin jauh dari posisi asal → makin kuat tarikannya
   - Ada "redaman" (damping) supaya tidak mental-mental terus
   - Rumus: velocity += (restPos - cardPos) * stiffness
             velocity *= damping   ← perlambat pelan-pelan
             cardPos  += velocity
   ═══════════════════════════════════════════════════════════ */
function initRopeCard() {
  const ropeCanvas = document.getElementById('ropeCanvas');
  const card = document.getElementById('polaroidCard');
  const ropeSection = document.getElementById('ropeSection');

  if (!ropeCanvas || !card || !ropeSection) return;

  const ropeCtx = ropeCanvas.getContext('2d');

  // ── State drag ──
  let isDragging = false;
  let dragOffsetX = 0;
  let dragOffsetY = 0;

  // ── Posisi saat ini (yang tampil di layar) ──
  let cardX = 0;
  let cardY = 0;

  // ── Posisi "istirahat" — kartu akan selalu kembali ke sini ──
  let restX = 0;
  let restY = 0;

  // ── Kecepatan kartu (untuk fisika spring) ──
  let velX = 0;
  let velY = 0;

  // ── Konstanta fisika — kamu bisa ubah ini! ──
  //
  // STIFFNESS (kekakuan pegas):
  // - Nilai tinggi (0.2+) = balik super cepat, kaku
  // - Nilai rendah (0.04) = balik pelan, lembut & elastis
  // - Rekomendasi: 0.08–0.12 buat efek karet yang enak
  const STIFFNESS = 0.10;
  //
  // DAMPING (redaman / gesekan):
  // - Nilai mendekati 1.0 (0.95+) = lama berhenti, mental-mental banyak
  // - Nilai rendah (0.75) = cepat berhenti, tidak banyak mental
  // - Rekomendasi: 0.82–0.88 buat efek karet nyata
  const DAMPING = 0.84;

  // Anchor tali (paku di atas)
  let anchorX = 0;
  let anchorY = 0;

  // ── Sesuaikan ukuran canvas + reset posisi ──
  function resizeRopeCanvas() {
    ropeCanvas.width = ropeSection.offsetWidth;
    ropeCanvas.height = ropeSection.offsetHeight;

    anchorX = ropeCanvas.width / 2;
    anchorY = 10;

    // Posisi istirahat: tengah canvas, 90px dari atas
    restX = ropeCanvas.width / 2;
    restY = 90;

    // Kalau baru pertama kali, taruh kartu di posisi istirahat
    if (cardX === 0 && cardY === 0) {
      cardX = restX;
      cardY = restY;
    }

    updateCardPosition();
  }

  // ── Update visual posisi kartu di DOM ──
  function updateCardPosition() {
    card.style.left = (cardX - card.offsetWidth / 2) + 'px';
    card.style.top = cardY + 'px';
  }

  // ── Gambar tali (rope) dari anchor ke kartu ──
  function drawRope() {
    ropeCtx.clearRect(0, 0, ropeCanvas.width, ropeCanvas.height);

    const x1 = anchorX, y1 = anchorY;
    const x2 = cardX,   y2 = cardY;

    // Hitung kelengkungan tali berdasarkan jarak kartu dari anchor
    const dist = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

    // Saat kartu ditarik jauh, tali meregang (sag berkurang, lebih lurus)
    // Saat kartu di posisi asal, tali melengkung santai
    const sag = Math.max(dist * 0.25, 20);
    const cpX = (x1 + x2) / 2;
    const cpY = Math.max(y1, y2) + sag;

    const isDark = document.body.classList.contains('dark-mode');

    // ── Bayangan tali (efek kedalaman) ──
    ropeCtx.beginPath();
    ropeCtx.moveTo(x1 + 1, y1 + 1);
    ropeCtx.quadraticCurveTo(cpX + 1, cpY + 1, x2 + 1, y2 + 1);
    ropeCtx.strokeStyle = isDark
      ? 'rgba(0, 0, 0, 0.3)'
      : 'rgba(0, 0, 0, 0.1)';
    ropeCtx.lineWidth = 2.5;
    ropeCtx.stroke();

    // ── Tali utama ──
    ropeCtx.beginPath();
    ropeCtx.moveTo(x1, y1);
    ropeCtx.quadraticCurveTo(cpX, cpY, x2, y2);
    ropeCtx.strokeStyle = isDark
      ? 'rgba(255, 255, 255, 0.55)'
      : 'rgba(0, 0, 0, 0.45)';
    ropeCtx.lineWidth = 2;
    ropeCtx.lineCap = 'round';
    ropeCtx.stroke();

    // ── Paku di anchor ──
    ropeCtx.beginPath();
    ropeCtx.arc(x1, y1, 5, 0, Math.PI * 2);
    ropeCtx.fillStyle = isDark
      ? 'rgba(255, 255, 255, 0.7)'
      : 'rgba(0, 0, 0, 0.55)';
    ropeCtx.fill();

    // ── Titik kecil di ujung tali (tempat tali nyambung ke kartu) ──
    ropeCtx.beginPath();
    ropeCtx.arc(x2, y2, 3, 0, Math.PI * 2);
    ropeCtx.fillStyle = isDark
      ? 'rgba(255, 255, 255, 0.4)'
      : 'rgba(0, 0, 0, 0.3)';
    ropeCtx.fill();
  }

  // ── Loop utama: fisika spring + gambar ulang setiap frame ──
  function animateRope() {
    // Kalau TIDAK sedang di-drag, aktifkan fisika spring
    if (!isDragging) {
      const dx = restX - cardX;
      const dy = restY - cardY;

      velX += dx * STIFFNESS;
      velY += dy * STIFFNESS;
      velX *= DAMPING;
      velY *= DAMPING;

      cardX += velX;
      cardY += velY;

      if (Math.abs(dx) < 0.01 && Math.abs(velX) < 0.01) { cardX = restX; velX = 0; }
      if (Math.abs(dy) < 0.01 && Math.abs(velY) < 0.01) { cardY = restY; velY = 0; }

      updateCardPosition();
    }

    // ── Miring/tilt kartu berdasarkan seberapa jauh dari posisi istirahat ──
    // Makin jauh ke kanan → miring kanan, makin jauh ke kiri → miring kiri
    // Makin jauh ke bawah → sedikit scale membesar (efek gravitasi)
    // Nilai offset dari rest position:
    const offsetX = cardX - restX;  // Negatif = kiri, positif = kanan
    const offsetY = cardY - restY;  // Negatif = atas, positif = bawah

    // Konversi offset ke derajat kemiringan (bagi 8 supaya tidak terlalu ekstrem)
    // + 8 = kemiringan bawaan saat diam (supaya terlihat real seperti tergantung miring)
    const tiltDeg = (offsetX / 8) + 8;

    // Terapkan tilt ke kartu via CSS transform
    // rotate() = miring, scale() sedikit besar saat ditarik ke bawah
    const scaleVal = isDragging ? 1.04 : (1 + Math.max(0, offsetY) * 0.0003);
    card.style.transform = `rotate(${tiltDeg}deg) scale(${scaleVal})`;

    drawRope();
    requestAnimationFrame(animateRope);
  }

  // ── Mulai drag (mouse) ──
  card.addEventListener('mousedown', (e) => {
    isDragging = true;
    // Reset kecepatan saat mulai di-drag supaya tidak "loncat"
    velX = 0;
    velY = 0;

    const rect = card.getBoundingClientRect();
    dragOffsetX = e.clientX - rect.left - card.offsetWidth / 2;
    dragOffsetY = e.clientY - rect.top;

    card.classList.add('dragging');
    e.preventDefault();
  });

  // ── Gerak drag (mouse) ──
  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const sectionRect = ropeSection.getBoundingClientRect();
    cardX = e.clientX - sectionRect.left - dragOffsetX;
    cardY = e.clientY - sectionRect.top - dragOffsetY;

    // ── BATAS DRAG ──
    // Kartu tidak boleh keluar dari area ropeSection.
    // Dengan ini, kartu tidak akan mengganggu foto profil & nama
    // yang ada di kolom kiri (hero-left) karena ropeSection
    // memang hanya ada di kolom kanan.
    const halfW = card.offsetWidth / 2;
    const padding = 12; // Jarak aman dari tepi section
    cardX = Math.max(halfW + padding, Math.min(ropeCanvas.width - halfW - padding, cardX));
    // Batas atas: jangan sampai kartu nutup paku (anchor) di y=10
    cardY = Math.max(40, Math.min(ropeCanvas.height - card.offsetHeight - padding, cardY));

    updateCardPosition();
  });

  // ── Lepas drag (mouse) → spring mulai bekerja! ──
  window.addEventListener('mouseup', () => {
    if (!isDragging) return;
    isDragging = false;
    card.classList.remove('dragging');
    // velX & velY tetap 0 saat dilepas — spring langsung menarik balik
    // Kalau mau ada efek "lempar" (throw), bisa tambah velocity di sini
  });

  // ── Drag sentuh / touch (HP) ──
  card.addEventListener('touchstart', (e) => {
    isDragging = true;
    velX = 0;
    velY = 0;
    const touch = e.touches[0];
    const rect = card.getBoundingClientRect();
    dragOffsetX = touch.clientX - rect.left - card.offsetWidth / 2;
    dragOffsetY = touch.clientY - rect.top;
    card.classList.add('dragging');
    e.preventDefault();
  }, { passive: false });

  window.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    const touch = e.touches[0];
    const sectionRect = ropeSection.getBoundingClientRect();
    cardX = touch.clientX - sectionRect.left - dragOffsetX;
    cardY = touch.clientY - sectionRect.top - dragOffsetY;

    // Batas drag yang sama seperti mouse
    const halfW = card.offsetWidth / 2;
    const padding = 12;
    cardX = Math.max(halfW + padding, Math.min(ropeCanvas.width - halfW - padding, cardX));
    cardY = Math.max(40, Math.min(ropeCanvas.height - card.offsetHeight - padding, cardY));

    updateCardPosition();
    e.preventDefault();
  }, { passive: false });

  window.addEventListener('touchend', () => {
    isDragging = false;
    card.classList.remove('dragging');
  });

  // ── Jalankan! ──
  resizeRopeCanvas();
  animateRope();

  window.addEventListener('resize', () => {
    // Saat resize, kartu ikut pindah ke posisi istirahat yang baru
    const prevRestX = restX;
    resizeRopeCanvas();
    // Sesuaikan posisi kartu relatif terhadap posisi istirahat baru
    cardX = cardX + (restX - prevRestX);
  });
}

/* ═══════════════════════════════════════════════════════════
   10. SMOOTH SCROLL UNTUK SEMUA LINK ANCHOR DI HALAMAN
   
   Fungsi ini menangkap SEMUA tag <a href="#..."> di luar navbar —
   termasuk tombol "Kenalan Yuk" dan "Hubungi Aku" di hero.
   
   Cara kerja:
   - Cari semua <a> yang href-nya diawali dengan "#"
   - Kalau belum punya event listener dari navbar, pasang satu
   - Pakai smoothScrollTo() yang sama supaya konsisten
   ═══════════════════════════════════════════════════════════ */
function initAnchorLinks() {
  // Ambil semua link anchor di halaman (href mulai dengan "#")
  // :not(.nav-link) = skip link navbar karena sudah dihandle di initNavbar()
  const allAnchors = document.querySelectorAll('a[href^="#"]:not(.nav-link)');

  allAnchors.forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href'); // contoh: "#about"

      // Kalau href cuma "#" (link kosong), abaikan
      if (!targetId || targetId === '#') return;

      const target = document.querySelector(targetId);
      if (!target) return;

      // Cegah lompat langsung — kita yang handle scrollnya
      e.preventDefault();

      const NAV_HEIGHT = 72;
      const targetY = target.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT;

      // Pakai fungsi smoothScrollTo yang sama dengan navbar
      smoothScrollTo(targetY, 750);
    });
  });
}

/* ═══════════════════════════════════════════════════════════
   11. INISIALISASI UTAMA
   
   Semua fungsi di atas dipanggil di sini saat halaman siap.
   'DOMContentLoaded' = event yang terjadi saat HTML selesai dimuat
   (lebih cepat dari 'load' yang menunggu gambar selesai juga)
   ═══════════════════════════════════════════════════════════ */

// Disable browser's automatic scroll restoration so refresh always
// starts at the top — not wherever the user last scrolled to
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}
window.scrollTo(0, 0);

document.addEventListener('DOMContentLoaded', () => {
  // Force top again after DOM is ready (belt-and-suspenders)
  window.scrollTo(0, 0);

  // ─ Partikel ─
  resizeCanvas();           // Sesuaikan ukuran canvas
  initParticles();          // Buat partikel
  animateParticles();       // Mulai animasi partikel

  // ─ Bahasa: simpan konten asli lalu apply terjemahan ID (supaya state konsisten) ─
  snapshotOriginalContent();  // Simpan HTML asli sebelum ditimpa apapun
  applyTranslations();        // Apply translations['id'] supaya state selalu dari objek ini,
                              // bukan dari HTML hardcode — toggle jadi selalu konsisten

  // ─ Navbar ─
  initNavbar();             // Setup navbar + animasi klik

  // ─ Semua link anchor (termasuk tombol CTA hero) ─
  initAnchorLinks();        // "Kenalan Yuk" & "Hubungi Aku" jadi smooth scroll juga

  // ─ Scroll Animations ─
  initScrollAnimations();   // Setup animasi scroll

  // ─ Kartu Tali ─
  initRopeCard();           // Setup kartu Polaroid draggable

  // ─ Footer tahun ─
  // Isi tahun di footer secara otomatis (tidak perlu update manual setiap tahun!)
  const yearEl = document.getElementById('footerYear');
  if (yearEl) yearEl.textContent = '© ' + new Date().getFullYear();

  // ─ Tracking posisi mouse (untuk partikel) ─
  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  // ─ Resize handler ─
  window.addEventListener('resize', () => {
    resizeCanvas();       // Resize canvas partikel
    initParticles();      // Reset partikel (distribusi ulang)
  });

  // ─ Animasi muncul hero kiri saat load ─
  // Pastikan elemen hero kiri langsung terlihat
  setTimeout(() => {
    const heroLeft = document.querySelector('.hero-left');
    if (heroLeft) {
      heroLeft.style.opacity = '1';
      heroLeft.style.transform = 'translateY(0)';
    }
  }, 100);

});

/* ═══════════════════════════════════════════════════════════
   11. COIN FLIP — FOTO PROFIL

   Desktop : hover masuk → video, hover keluar → foto
   Mobile  : tap toggle (pointer: coarse detection)
   GIF dibiarkan loop sendiri — tidak disentuh sama sekali.
   ═══════════════════════════════════════════════════════════ */
(function initPhotoFlip() {
  const scene = document.getElementById('photoFlipScene');
  const card  = document.getElementById('photoFlipCard');
  if (!scene || !card) return;

  const DURATION = 900;
  const SPIN     = 540;

  let currentDeg  = 0;
  let isAnimating = false;
  let isHovered   = false;
  let rafId       = null;

  const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;

  card.style.transform = 'rotateY(0deg)';

  function ease(t) {
    if (t < 0.35) {
      const p = t / 0.35;
      return 0.35 * (p * p * p);
    }
    const p = (t - 0.35) / 0.65;
    return 0.35 + 0.65 * (1 - Math.pow(1 - p, 3));
  }

  function animate(fromDeg, toDeg, onDone) {
    if (rafId) cancelAnimationFrame(rafId);
    const startTime = performance.now();
    const delta     = toDeg - fromDeg;
    isAnimating     = true;

    function frame(now) {
      const t     = Math.min((now - startTime) / DURATION, 1);
      const eased = ease(t);
      card.style.transform = `rotateY(${fromDeg + delta * eased}deg)`;
      if (t < 1) {
        rafId = requestAnimationFrame(frame);
      } else {
        const landing = ((toDeg % 360) + 360) % 360;
        card.style.transform = `rotateY(${landing}deg)`;
        currentDeg  = landing;
        isAnimating = false;
        if (onDone) onDone();
      }
    }
    rafId = requestAnimationFrame(frame);
  }

  function showingVideo() { return Math.round(currentDeg) === 180; }

  function flipToVideo() {
    animate(currentDeg, currentDeg + SPIN, () => {
      if (!isTouchDevice && !isHovered) flipToPhoto();
    });
  }

  function flipToPhoto() {
    animate(currentDeg, currentDeg + SPIN, () => {
      if (!isTouchDevice && isHovered) flipToVideo();
    });
  }

  if (isTouchDevice) {
    // ── Mobile: touchstart → flip ke GIF (seperti mouseenter) ──
    //           touchend   → flip balik foto (seperti mouseleave)
    // Ini meniru perilaku hover desktop di layar sentuh.
    scene.addEventListener('touchstart', (e) => {
      e.preventDefault(); // Cegah delay 300ms & ghost click
      if (isAnimating) return;
      if (!showingVideo()) flipToVideo();
    }, { passive: false });

    const revertToPhoto = () => {
      if (isAnimating) return;
      if (showingVideo()) flipToPhoto();
    };

    scene.addEventListener('touchend',    revertToPhoto);
    scene.addEventListener('touchcancel', revertToPhoto);
  } else {
    scene.addEventListener('mouseenter', () => {
      isHovered = true;
      if (isAnimating) return;
      if (!showingVideo()) flipToVideo();
    });
    scene.addEventListener('mouseleave', () => {
      isHovered = false;
      if (isAnimating) return;
      if (showingVideo()) flipToPhoto();
    });
  }
})();


/* ═══════════════════════════════════════════════════════════
   12. SISTEM MUSIK — BG MUSIC + FAVORITE TRACKS
   
   ARSITEKTUR AUDIO (penting untuk dipahami):
   ─────────────────────────────────────────────
   Web Audio API hanya mengizinkan SATU MediaElementSourceNode
   per elemen <audio>. Kalau createMediaElementSource() dipanggil
   dua kali pada elemen yang sama → error → audio mati.

   Solusi: SATU AudioContext global, SATU analyser global.
   bgMusic dan favAudio bergantian di-route melalui analyser
   yang sama. Fungsi switchAudioSource() yang handle pergantian.
   ═══════════════════════════════════════════════════════════ */

// ── Elemen audio ──
const bgMusic     = document.getElementById('bgMusic');
const musicToggle = document.getElementById('musicToggle');

// ── State bg music ──
let musicEnabled = false;
let musicFadeRaf = null;
let _fadeGen     = 0;

const MUSIC_TARGET_VOLUME = 0.4;
const FADE_IN_DURATION    = 1800;
const FADE_OUT_DURATION   = 800;

// ── State favorite music ──
const favAudio      = new Audio();
favAudio.preload    = 'none';
favAudio.volume     = 0;
let currentFavTrack = -1;
let favIsPlaying    = false;
let favWasBgPlaying = false;
let favFadeRaf      = null;
let _favFadeGen     = 0;

/* ─────────────────────────────────────────────────────────────
   SHARED WEB AUDIO API — satu AudioContext untuk semuanya.
   bgMusic dan favAudio keduanya melalui satu analyser.
   ───────────────────────────────────────────────────────────── */
let sharedAudioCtx   = null;
let sharedAnalyser   = null;
let sharedDataArray  = null;
let bgSourceNode     = null;   // MediaElementSource untuk bgMusic
let favSourceNode    = null;   // MediaElementSource untuk favAudio
let audioInitDone    = false;

function initSharedAudio() {
  if (audioInitDone) return;
  try {
    sharedAudioCtx  = new (window.AudioContext || window.webkitAudioContext)();
    sharedAnalyser  = sharedAudioCtx.createAnalyser();
    sharedAnalyser.fftSize = 256;
    sharedAnalyser.smoothingTimeConstant = 0.6;
    sharedAnalyser.connect(sharedAudioCtx.destination);
    sharedDataArray = new Uint8Array(sharedAnalyser.frequencyBinCount);

    // Buat source node sekali saja — tidak bisa dibuat ulang
    if (bgMusic) {
      bgSourceNode = sharedAudioCtx.createMediaElementSource(bgMusic);
    }
    favSourceNode = sharedAudioCtx.createMediaElementSource(favAudio);

    audioInitDone = true;
  } catch(e) {
    console.warn('[Audio] Gagal init Web Audio API:', e);
  }
}

// Arahkan analyser ke sumber yang sedang aktif
function connectAnalyserTo(source) {
  if (!sharedAnalyser || !source) return;
  try {
    // Disconnect semua source dulu
    if (bgSourceNode)  { try { bgSourceNode.disconnect();  } catch(_) {} }
    if (favSourceNode) { try { favSourceNode.disconnect(); } catch(_) {} }
    // Reconnect source yang aktif ke analyser
    source.connect(sharedAnalyser);
  } catch(e) {}
}

async function ensureAudioCtxRunning() {
  if (!sharedAudioCtx) initSharedAudio();
  if (sharedAudioCtx && sharedAudioCtx.state === 'suspended') {
    await sharedAudioCtx.resume();
  }
}

/* ─────────────────────────────────────
   FADE VOLUME untuk bgMusic
   ───────────────────────────────────── */
function fadeVolume(toVolume, durationMs, onDone) {
  if (musicFadeRaf) { cancelAnimationFrame(musicFadeRaf); musicFadeRaf = null; }
  if (!bgMusic) return;
  const myGen      = ++_fadeGen;
  const fromVolume = bgMusic.volume;
  const startTime  = performance.now();
  const delta      = toVolume - fromVolume;
  if (Math.abs(delta) < 0.001) { bgMusic.volume = toVolume; if (onDone) onDone(); return; }
  function step(now) {
    if (_fadeGen !== myGen) return;
    const t = Math.min((now - startTime) / durationMs, 1);
    const e = t < 0.5 ? 4*t*t*t : 1 - Math.pow(-2*t+2, 3)/2;
    bgMusic.volume = Math.max(0, Math.min(1, fromVolume + delta * e));
    if (t < 1) { musicFadeRaf = requestAnimationFrame(step); }
    else { bgMusic.volume = toVolume; musicFadeRaf = null; if (onDone) onDone(); }
  }
  musicFadeRaf = requestAnimationFrame(step);
}

/* ─────────────────────────────────────
   FADE VOLUME untuk favAudio
   ───────────────────────────────────── */
function fadeFavVolume(toVol, ms) {
  if (favFadeRaf) { cancelAnimationFrame(favFadeRaf); favFadeRaf = null; }
  const gen   = ++_favFadeGen;
  const from  = favAudio.volume;
  const delta = toVol - from;
  if (Math.abs(delta) < 0.001) { favAudio.volume = toVol; return; }
  const t0 = performance.now();
  function step(now) {
    if (_favFadeGen !== gen) return;
    const p = Math.min((now - t0) / ms, 1);
    const e = p < 0.5 ? 4*p*p*p : 1 - Math.pow(-2*p+2, 3)/2;
    favAudio.volume = Math.max(0, Math.min(1, from + delta * e));
    if (p < 1) favFadeRaf = requestAnimationFrame(step);
    else { favAudio.volume = toVol; favFadeRaf = null; }
  }
  favFadeRaf = requestAnimationFrame(step);
}

/* ─────────────────────────────────────
   BG MUSIC: start / pause / stop / toggle
   ───────────────────────────────────── */
function startMusic() {
  if (!bgMusic) return;
  ensureAudioCtxRunning().then(() => {
    // Route bgMusic through analyser
    connectAnalyserTo(bgSourceNode);
    bgMusic.volume = 0;
    bgMusic.play().then(() => {
      musicEnabled = true;
      updateMusicUI();
      fadeVolume(MUSIC_TARGET_VOLUME, FADE_IN_DURATION);
      if (typeof updateSpectrumState === 'function') updateSpectrumState(true);
    }).catch(err => {
      musicEnabled = false;
      updateMusicUI();
      console.warn('[bgMusic] play() failed:', err.message);
    });
  });
}

function pauseMusic() {
  if (!bgMusic) return;
  fadeVolume(0, FADE_OUT_DURATION, () => {
    bgMusic.pause();
    musicEnabled = false;
    updateMusicUI();
    if (typeof updateSpectrumState === 'function') updateSpectrumState(false);
  });
}

function stopBgMusicImmediate() {
  if (!bgMusic) return;
  if (musicFadeRaf) { cancelAnimationFrame(musicFadeRaf); musicFadeRaf = null; }
  ++_fadeGen;
  bgMusic.volume = 0;
  bgMusic.pause();
  musicEnabled   = false;
  updateMusicUI();
}

function toggleMusic() {
  if (musicEnabled) { pauseMusic(); } else { startMusic(); }
}

function updateMusicUI() {
  if (!musicToggle) return;
  if (musicEnabled) {
    musicToggle.classList.add('playing');
    musicToggle.title = 'Matikan musik';
  } else {
    musicToggle.classList.remove('playing');
    musicToggle.title = 'Nyalakan musik';
  }
}

/* ═══════════════════════════════════════════════════════════
   ENTRY SEQUENCE — Greeting Card + Tear Split Reveal
   ─────────────────────────────────────────────────────
   Flow:
   1. Click "enter" → entry overlay disappears instantly (display:none)
   2. Greeting card is ALREADY visible underneath (no fade, clean cut)
   3. Content staggers in with staggered animations
   4. After reading time (~3.5s), the two halves tear apart:
      top half slides up / bottom half slides down carrying the
      actual rendered text with them (clip-path halves)
   5. Homepage is revealed in the middle gap
   ═══════════════════════════════════════════════════════════ */

/* ── Random motivational quotes ── */
const MOTIVATIONAL_QUOTES = [
  { text: "Mulailah dari mana kamu berada. Gunakan apa yang kamu punya. Lakukan apa yang kamu bisa.", author: "Arthur Ashe" },
  { text: "Setiap hari adalah kesempatan baru untuk menjadi lebih baik dari kemarin.", author: "Zan's Himself" },
  { text: "Kesuksesan bukan tentang seberapa jauh kamu berlari, tapi seberapa kuat kamu bangkit setelah jatuh.", author: "Zan's Mother" },
  { text: "Jangan hitung hari-harimu, buat setiap harinya berarti.", author: "Muhammad Ali" },
  { text: "Hal-hal besar tidak dilakukan dengan dorongan sesaat, tapi oleh akumulasi hal-hal kecil.", author: "Vincent Van Gogh" },
  { text: "Hidup ini singkat. Lakukan hal yang membuatmu tersenyum.", author: "Zan's PW" },
  { text: "Kamu tidak harus hebat untuk memulai, tapi kamu harus memulai untuk menjadi hebat.", author: "Zig Ziglar" },
  { text: "Percayalah pada dirimu sendiri dan semua yang kamu miliki.", author: "Christian D. Larson" },
  { text: "Satu-satunya cara untuk melakukan pekerjaan yang baik adalah mencintai apa yang kamu kerjakan.", author: "Steve Jobs" },
  { text: "Impian tanpa tindakan hanya akan tetap menjadi impian.", author: "Zan's Himself" },
  { text: "Di balik setiap kesulitan, selalu ada kemudahan.", author: "Al-Qur'an, 94:5" },
  { text: "Kode yang baik adalah kode yang bisa dibaca oleh manusia, bukan hanya mesin.", author: "Martin Fowler" },
  { text: "Jalan terbaik untuk memprediksi masa depan adalah dengan menciptakannya.", author: "Abraham Lincoln" },
  { text: "Jangan takut gagal. Takutlah jika kamu tidak pernah mencoba.", author: "Zan's Mother" },
  { text: "Kreativitas adalah kecerdasan yang sedang bersenang-senang.", author: "Albert Einstein" },
];

function getRandomQuote() {
  return MOTIVATIONAL_QUOTES[Math.floor(Math.random() * MOTIVATIONAL_QUOTES.length)];
}

/* ── Time-of-day data ── */
function getTimeGreeting() {
  const h = new Date().getHours();
  if (h >= 4  && h < 6)  return { emoji:'🌄', chip:'Selamat Subuh!',  main:'SELAMAT SUBUH',    tagline:'Semoga harimu dimulai dengan penuh berkah...' };
  if (h >= 6  && h < 10) return { emoji:'☀️', chip:'Selamat Pagi!',   main:'SELAMAT PAGI',     tagline:'Semangat memulai hari yang luar biasa...' };
  if (h >= 10 && h < 12) return { emoji:'🌤️', chip:'Halo, Pagi!',     main:'HALO, PAGI!',      tagline:'Masih pagi, masih banyak hal yang bisa dilakukan...' };
  if (h >= 12 && h < 14) return { emoji:'🌞', chip:'Selamat Siang!',  main:'SELAMAT SIANG',    tagline:'Istirahat sejenak sambil eksplor web ini...' };
  if (h >= 14 && h < 16) return { emoji:'⛅', chip:'Selamat Siang!',  main:'HAI, SIANG!',      tagline:'Semoga aktivitasmu hari ini berjalan lancar...' };
  if (h >= 16 && h < 18) return { emoji:'🌇', chip:'Selamat Sore!',   main:'SELAMAT SORE',     tagline:'Waktu yang tepat untuk sedikit bersantai...' };
  if (h >= 18 && h < 20) return { emoji:'🌆', chip:'Selamat Petang!', main:'SELAMAT PETANG',   tagline:'Malam segera tiba, selamat beristirahat...' };
  if (h >= 20 && h < 22) return { emoji:'🌙', chip:'Selamat Malam!',  main:'SELAMAT MALAM',    tagline:'Malam yang tenang untuk menjelajah...' };
  if (h >= 22)            return { emoji:'🌛', chip:'Selamat Malam!',  main:'MALAM YANG SUNYI', tagline:'Masih terjaga? Terima kasih sudah mampir...' };
  /* 0–4 AM */             return { emoji:'⭐', chip:'Selamat Tengah Malam!',  main:'TENGAH MALAM',     tagline:'Jam segini masih online? Respect banget aku wok 🤙' };
}

/* ── Populate BOTH halves of the greeting card ── */
function populateGreetCard() {
  const t = getTimeGreeting();
  const q = getRandomQuote();

  // Helper: set textContent on an element by id, silently skip if missing
  const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };

  // Populate A (top half) and B (bottom half) — identical content
  ['A', 'B'].forEach(s => {
    set('gcChipIcon'   + s, t.emoji);
    set('gcChipText'   + s, t.chip);
    set('gcGreeting'   + s, t.main);
    set('gcTagline'    + s, t.tagline);
    set('gcQuoteText'  + s, q.text);
    set('gcQuoteAuthor'+ s, '— ' + q.author);
  });

  // Update the entry overlay chip too
  set('entryGreetingTime', t.emoji);
  set('entryGreetingText', t.chip);
}

/* ── Main entry function ── */
function enterSite(withMusic) {
  // ── Username gate ──────────────────────────────────────────────
  // Tampilkan popup username jika belum pernah set (first visit)
  if (!localStorage.getItem('zanpw_username')) {
    window._zanpwUnameCallback = () => enterSite(withMusic);
    const unOv = document.getElementById('unameOverlay');
    const closeBtnEl = document.getElementById('unameCloseBtn');
    if (unOv) {
      // First visit: tampilkan X, kalau ditutup → kembali ke entry overlay
      if (closeBtnEl) {
        closeBtnEl.style.display = 'flex';
        closeBtnEl.replaceWith(closeBtnEl.cloneNode(true));
        const freshClose = document.getElementById('unameCloseBtn');
        if (freshClose) freshClose.addEventListener('click', () => {
          // Tutup popup username
          unOv.classList.remove('active');
          window._zanpwUnameCallback = null;
          // Kembali ke entry overlay (pilihan musik)
          const entryOv = document.getElementById('entryOverlay');
          if (entryOv) {
            entryOv.classList.remove('hidden', 'dismissing');
          }
        });
      }
      unOv.classList.add('active');
      setTimeout(() => {
        const inp = document.getElementById('unameInput');
        if (inp) inp.focus();
      }, 420);
    }
    return;
  }
  // ──────────────────────────────────────────────────────────────
  const entryOverlay = document.getElementById('entryOverlay');
  const greetCard    = document.getElementById('greetCard');
  if (!entryOverlay) return;
  if (entryOverlay.classList.contains('dismissing') || entryOverlay.classList.contains('hidden')) return;

  // ── TIMING ───────────────────────────────────────────────────
  // T+0      Entry overlay gone instantly (hidden class, no fade)
  //          Greet card is revealed underneath — already visible
  //          Content begins staggered entrance animations
  // T+~2000  All content has staggered in, user reads quote
  // T+3600   Tear split fires: top half slides up, bottom down
  //          carrying the text with them (600ms animation)
  // T+4100   Homepage fully revealed → unlock scroll
  // T+4200   Start music (after unlock)
  // T+4500   Remove greet card from layout
  // ─────────────────────────────────────────────────────────────

  // Step 1: instantly hide entry overlay, reveal greeting card
  entryOverlay.classList.add('hidden');
  document.body.classList.add('scroll-locked');
  // Fix mobile: simpan posisi scroll dan terapkan ke top
  document.body.style.top = `-${window.scrollY}px`;
  document.body.style.width = '100%'; // keep locked during greeting

  if (!greetCard) {
    document.body.classList.remove('scroll-locked');
    if (withMusic) startMusic();
    return;
  }

  // Greeting card is already visible (gc-active set at page load),
  // just trigger content entrance animations now
  greetCard.classList.add('gc-enter');

  // Start music immediately when quote page appears
  if (withMusic) startMusic();

  // Step 2: trigger tear split after reading time
  // Tanpa musik = lebih cepat (1800ms), dengan musik = normal (5200ms)
  const splitDelay  = withMusic ? 5200 : 2800;
  const doneDelay   = withMusic ? 8400 : 6000;

  setTimeout(() => {
    greetCard.classList.add('gc-splitting');
    greetCard.style.pointerEvents = 'none';
    // Blok semua interaksi di halaman selama animasi split berlangsung
    document.body.style.pointerEvents = 'none';
    document.body.style.userSelect = 'none';
  }, splitDelay);

  // Step 5: remove greet card + lepas semua lock setelah split selesai
  setTimeout(() => {
    greetCard.classList.add('gc-done');
    // Baru lepas scroll lock setelah split selesai
    const scrollY = parseInt(document.body.style.top || '0') * -1;
    document.body.classList.remove('scroll-locked');
    document.body.style.top = '';
    document.body.style.width = '';
    document.body.style.pointerEvents = '';
    document.body.style.userSelect = '';
    window.scrollTo(0, scrollY);
    // Dispatch setelah split selesai → trigger popup notif
    document.dispatchEvent(new CustomEvent('zanpw:siteEntered'));

    // Broadcast online setelah split selesai — user sudah benar-benar masuk
    const _uname = localStorage.getItem('zanpw_username') || '';
    if (window._broadcastUserJoined) window._broadcastUserJoined(_uname);
  }, doneDelay);
}

(function initEntryOverlay() {
  const overlay = document.getElementById('entryOverlay');
  if (!overlay) return;
  document.body.classList.add('scroll-locked');

  // Populate greeting card content (both halves) before entry overlay appears
  populateGreetCard();

  // Pre-activate the greeting card so it's sitting visible
  // beneath the entry overlay (z-index keeps entry on top)
  const greetCard = document.getElementById('greetCard');
  if (greetCard) greetCard.classList.add('gc-active');

  // Klik sembarang tempat dinonaktifkan — user harus tekan salah satu tombol
  const entryCanvas = document.getElementById('entryCanvas');
  if (!entryCanvas) return;
  const entryCtx = entryCanvas.getContext('2d');
  let entryParticles = [];
  const ENTRY_PARTICLE_COUNT = 50;
  function resizeEntryCanvas() {
    entryCanvas.width  = window.innerWidth;
    entryCanvas.height = window.innerHeight;
  }
  class EntryParticle {
    constructor() { this.reset(); }
    reset() {
      this.x = Math.random() * entryCanvas.width;
      this.y = Math.random() * entryCanvas.height;
      this.size = Math.random() * 1.5 + 0.5;
      this.speedX = (Math.random() - 0.5) * 0.35;
      this.speedY = (Math.random() - 0.5) * 0.35;
      this.opacity = Math.random() * 0.4 + 0.05;
      this.blinkSpeed = Math.random() * 0.004 + 0.002;
      this.blinkDir = Math.random() > 0.5 ? 1 : -1;
    }
    update() {
      this.x += this.speedX; this.y += this.speedY;
      this.opacity += this.blinkSpeed * this.blinkDir;
      if (this.opacity >= 0.45) this.blinkDir = -1;
      if (this.opacity <= 0.02) this.blinkDir = 1;
      if (this.x < 0) this.x = entryCanvas.width;
      if (this.x > entryCanvas.width) this.x = 0;
      if (this.y < 0) this.y = entryCanvas.height;
      if (this.y > entryCanvas.height) this.y = 0;
    }
    draw() {
      entryCtx.beginPath();
      entryCtx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      entryCtx.fillStyle = `rgba(255,255,255,${this.opacity})`;
      entryCtx.fill();
    }
  }
  resizeEntryCanvas();
  for (let i = 0; i < ENTRY_PARTICLE_COUNT; i++) entryParticles.push(new EntryParticle());
  let entryAnimRunning = true;
  function animateEntryParticles() {
    if (!entryAnimRunning) return;
    entryCtx.clearRect(0, 0, entryCanvas.width, entryCanvas.height);
    for (const p of entryParticles) { p.update(); p.draw(); }
    requestAnimationFrame(animateEntryParticles);
  }
  animateEntryParticles();
  overlay.addEventListener('transitionend', () => {
    if (overlay.classList.contains('dismissing')) entryAnimRunning = false;
  }, { once: true });
  window.addEventListener('resize', resizeEntryCanvas);
})();

/* ═══════════════════════════════════════════════════════════
   13. FAVORITE MUSIC PLAYER
   ═══════════════════════════════════════════════════════════ */

function fmtTime(sec) {
  if (!isFinite(sec)) return '0:00';
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m}:${s.toString().padStart(2, '0')}`;
}

function getTrackData(index) {
  const card = document.querySelector(`.music-card[data-track="${index}"]`);
  if (!card) return null;
  // Cover is stored on the vinyl-label's background-image
  const labelEl = card.querySelector('.vinyl-label');
  let cover = null;
  if (labelEl) {
    const bg = labelEl.style.backgroundImage;
    const m  = bg.match(/url\(['"]?([^'"]+)['"]?\)/);
    if (m) cover = m[1];
  }
  return {
    src:    card.dataset.src,
    title:  card.dataset.title,
    artist: card.dataset.artist,
    genre:  card.dataset.genre,
    cover,
    icon:   '🎵',
  };
}

/* ── Vinyl spin helpers ── */
function setVinylSpin(index, spinning) {
  const disc = document.querySelector(`#vinyl${index} .vinyl-disc`);
  if (disc) disc.classList.toggle('spinning', spinning);
}
function stopAllVinyls() {
  document.querySelectorAll('.vinyl-disc').forEach(d => d.classList.remove('spinning'));
}

/* ── Toast notification ── */
let _toastTimer = null;
function showNowPlayingToast(track) {
  const toast      = document.getElementById('nowPlayingToast');
  const titleEl    = document.getElementById('toastTitle');
  const artistEl   = document.getElementById('toastArtist');
  const labelEl    = document.getElementById('toastVinylLabel');
  const discEl     = document.getElementById('toastVinylDisc');
  if (!toast) return;

  // Fill content
  if (titleEl)  titleEl.textContent  = track.title;
  if (artistEl) artistEl.textContent = track.artist;
  if (labelEl)  labelEl.style.backgroundImage = track.cover ? `url('${track.cover}')` : '';
  if (discEl)   discEl.classList.add('spinning');

  // Show
  clearTimeout(_toastTimer);
  toast.classList.add('show');

  // Auto-hide after 3.5s
  _toastTimer = setTimeout(() => {
    toast.classList.remove('show');
    if (discEl) discEl.classList.remove('spinning');
  }, 3500);
}

function resetAllCards() {
  document.querySelectorAll('.music-card').forEach(card => {
    card.classList.remove('active', 'playing');
    const idx   = card.dataset.track;
    const btn   = document.getElementById(`playBtn${idx}`);
    const waves = document.getElementById(`waves${idx}`);
    if (btn)   btn.innerHTML = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>';
    if (waves) waves.classList.remove('active');
  });
  stopAllVinyls();
}

function updatePlaybar(track) {
  const playbar = document.getElementById('musicPlaybar');
  if (!playbar) return;
  if (!track) { playbar.classList.remove('visible'); return; }
  playbar.classList.add('visible');
  document.getElementById('playbarTitle').textContent  = track.title;
  document.getElementById('playbarArtist').textContent = track.artist;
  const artEl     = document.getElementById('playbarArt');
  const artIconEl = document.getElementById('playbarArtIcon');
  if (track.cover) {
    artEl.style.backgroundImage    = `url('${track.cover}')`;
    artEl.style.backgroundSize     = 'cover';
    artEl.style.backgroundPosition = 'center';
    if (artIconEl) artIconEl.style.display = 'none';
  } else {
    artEl.style.backgroundImage = '';
    if (artIconEl) { artIconEl.style.display = ''; artIconEl.textContent = track.icon; }
  }
  const genreEl = document.getElementById('playbarGenre');
  if (genreEl) {
    genreEl.textContent = track.genre;
    genreEl.className   = 'playbar-genre';
    if (track.genre === 'Lo-Fi') genreEl.classList.add('genre-lofi');
    else if (track.genre === 'Indie') genreEl.classList.add('genre-indie');
  }
}

function updatePlaybarBtn(playing) {
  const btn = document.getElementById('playbarPlayBtn');
  if (!btn) return;
  btn.classList.toggle('paused', playing);
}

/* ─────────────────────────────────────
   PLAY a favorite track
   ───────────────────────────────────── */
function playFavoriteTrack(index) {
  const track = getTrackData(index);
  if (!track) return;

  // Save bg music state and stop it — only when coming from fully stopped state
  if (currentFavTrack === -1) {
    favWasBgPlaying = musicEnabled || (bgMusic && !bgMusic.paused && bgMusic.volume > 0);
    stopBgMusicImmediate();
  }

  // Cancel any in-flight fav fade
  if (favFadeRaf) { cancelAnimationFrame(favFadeRaf); favFadeRaf = null; }
  ++_favFadeGen;

  const resumingSame = (currentFavTrack === index);
  currentFavTrack    = index;

  ensureAudioCtxRunning().then(() => {
    // Route favAudio through the shared analyser
    connectAnalyserTo(favSourceNode);

    if (!resumingSame) {
      favAudio.src = track.src;
    }
    favAudio.volume = 0;

    favAudio.play().then(() => {
      favIsPlaying = true;
      fadeFavVolume(0.8, 500);
      if (typeof updateSpectrumState === 'function') updateSpectrumState(true);
    }).catch(err => {
      console.warn('[FavMusic] play() failed:', err.message);
      favIsPlaying = false;
    });
  });

  // Update UI immediately
  resetAllCards();
  const card = document.querySelector(`.music-card[data-track="${index}"]`);
  if (card) {
    card.classList.add('active', 'playing');
    const btn   = document.getElementById(`playBtn${index}`);
    const waves = document.getElementById(`waves${index}`);
    if (btn)   btn.innerHTML = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>';
    if (waves) waves.classList.add('active');
  }
  setVinylSpin(index, true);
  if (!resumingSame) showNowPlayingToast(track);
  updatePlaybar(track);
  updatePlaybarBtn(true);
}

/* ─────────────────────────────────────
   PAUSE favorite (keep position)
   ───────────────────────────────────── */
function pauseFavoriteTrack() {
  favAudio.pause();
  favIsPlaying = false;
  const card = document.querySelector(`.music-card[data-track="${currentFavTrack}"]`);
  if (card) {
    card.classList.remove('playing');
    card.classList.add('active');
    const btn   = document.getElementById(`playBtn${currentFavTrack}`);
    const waves = document.getElementById(`waves${currentFavTrack}`);
    if (btn)   btn.innerHTML = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>';
    if (waves) waves.classList.remove('active');
  }
  setVinylSpin(currentFavTrack, false);
  updatePlaybarBtn(false);
  if (typeof updateSpectrumState === 'function') updateSpectrumState(false);
}

/* ─────────────────────────────────────
   STOP (✕ button) — fully stop and resume bgMusic
   ───────────────────────────────────── */
function stopFavoriteTrack() {
  // Stop fav audio completely
  if (favFadeRaf) { cancelAnimationFrame(favFadeRaf); favFadeRaf = null; }
  ++_favFadeGen;
  favAudio.pause();
  favAudio.currentTime = 0;
  favAudio.volume  = 0;
  favIsPlaying     = false;
  currentFavTrack  = -1;

  // Reset UI
  resetAllCards();
  const artEl     = document.getElementById('playbarArt');
  const artIconEl = document.getElementById('playbarArtIcon');
  if (artEl)     artEl.style.backgroundImage = '';
  if (artIconEl) { artIconEl.style.display = ''; artIconEl.textContent = '🎵'; }
  updatePlaybar(null);
  if (typeof updateSpectrumState === 'function') updateSpectrumState(false);

  // Resume bgMusic if it was playing before fav started
  if (favWasBgPlaying) {
    favWasBgPlaying = false;
    ensureAudioCtxRunning().then(() => {
      // Switch analyser back to bgMusic source
      connectAnalyserTo(bgSourceNode);
      if (musicFadeRaf) { cancelAnimationFrame(musicFadeRaf); musicFadeRaf = null; }
      ++_fadeGen;
      musicEnabled  = false;
      bgMusic.volume = 0;
      bgMusic.play().then(() => {
        musicEnabled = true;
        updateMusicUI();
        fadeVolume(MUSIC_TARGET_VOLUME, FADE_IN_DURATION);
        if (typeof updateSpectrumState === 'function') updateSpectrumState(true);
      }).catch(err => console.warn('[bgMusic] resume after fav failed:', err.message));
    });
  }
}

function toggleFavoriteTrack(index) {
  if (currentFavTrack === index && favIsPlaying) {
    pauseFavoriteTrack();
  } else {
    playFavoriteTrack(index);
  }
}

function prevFavoriteTrack() {
  const total = document.querySelectorAll('.music-card').length;
  playFavoriteTrack(currentFavTrack <= 0 ? total - 1 : currentFavTrack - 1);
}

function nextFavoriteTrack() {
  const total = document.querySelectorAll('.music-card').length;
  playFavoriteTrack((currentFavTrack + 1) % total);
}

function seekFavoriteTrack(e) {
  const bar = document.getElementById('playbarProgressBar');
  if (!bar || !favAudio.duration) return;
  const rect = bar.getBoundingClientRect();
  favAudio.currentTime = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width)) * favAudio.duration;
}

// ── Progress bar updates ──
favAudio.addEventListener('timeupdate', () => {
  if (!favAudio.duration) return;
  const pct   = (favAudio.currentTime / favAudio.duration) * 100;
  const fill  = document.getElementById('playbarProgressFill');
  const thumb = document.getElementById('playbarProgressThumb');
  const cur   = document.getElementById('playbarCurrentTime');
  if (fill)  fill.style.width = pct + '%';
  if (thumb) thumb.style.left  = pct + '%';
  if (cur)   cur.textContent   = fmtTime(favAudio.currentTime);
});

favAudio.addEventListener('loadedmetadata', () => {
  const dur = document.getElementById('playbarDuration');
  if (dur) dur.textContent = fmtTime(favAudio.duration);
});

favAudio.addEventListener('ended', () => nextFavoriteTrack());

/* ═══════════════════════════════════════════════════════════
   14. PHOTO BEAT PULSE
   Reads audio energy every frame and sets --beat (0–1) on
   the photo flip scene so it scales + glows with the music.
   Works for both bgMusic and favAudio via sharedAnalyser.
   ═══════════════════════════════════════════════════════════ */
(function initPhotoPulse() {
  const scene = document.getElementById('photoFlipScene');
  if (!scene) return;

  let isActive  = false;
  let smoothed  = 0;          // smoothed energy value 0–1

  function updateSpectrumState(active) {
    isActive = active;
    if (active && sharedAudioCtx && sharedAudioCtx.state === 'suspended') {
      sharedAudioCtx.resume();
    }
    // When music stops, smoothly decay to zero
    if (!active) smoothed = 0;
  }
  window.updateSpectrumState = updateSpectrumState;

  function tick() {
    requestAnimationFrame(tick);

    let energy = 0;

    if (isActive && sharedAnalyser && sharedDataArray) {
      sharedAnalyser.getByteFrequencyData(sharedDataArray);
      // Full bass + mid range for maximum rhythm response
      const bins = Math.floor(sharedDataArray.length * 0.6);
      let sum = 0;
      for (let i = 0; i < bins; i++) sum += sharedDataArray[i];
      energy = (sum / bins) / 255;
      // Amplify and remap: push the signal into upper range
      energy = Math.min(1, Math.pow(energy * 2.8, 0.7));
    }

    // Very fast attack, quick decay — follows every beat clearly
    const attack = 0.75;
    const decay  = 0.30;
    smoothed += (energy - smoothed) * (energy > smoothed ? attack : decay);

    scene.style.setProperty('--beat', smoothed.toFixed(4));
  }

  tick();
})();



/* ═══════════════════════════════════════════════════════════
   SCROLL REVEAL — IntersectionObserver
   ─────────────────────────────────────────────────────────
   Auto-tags key elements with data-reveal + stagger delays,
   then observes them. No HTML changes needed.
   ═══════════════════════════════════════════════════════════ */
(function initScrollReveal() {
  // Skip if browser doesn't support IntersectionObserver
  if (!('IntersectionObserver' in window)) return;

  // ── 1. Auto-tag elements with reveal attributes ──────────
  // Each entry: { selector, reveal direction, base delay, stagger between siblings }
  const REVEAL_MAP = [
    // Section headers
    { sel: '.section-header',     dir: 'up',    delay: 0,   stagger: 0 },
    { sel: '.section-tag',        dir: 'up',    delay: 0,   stagger: 0 },
    { sel: '.section-title',      dir: 'up',    delay: 100, stagger: 0 },

    // About
    { sel: '.about-text p',       dir: 'up',    delay: 150, stagger: 80 },
    { sel: '.fact-card',          dir: 'scale', delay: 200, stagger: 80 },

    // Experience
    { sel: '.exp-item',           dir: 'left',  delay: 100, stagger: 100 },

    // Certificates
    { sel: '.cert-card',          dir: 'up',    delay: 100, stagger: 80 },

    // Music
    { sel: '.music-track',        dir: 'up',    delay: 100, stagger: 60 },
    { sel: '.music-player',       dir: 'scale', delay: 150, stagger: 0 },

    // Contact
    { sel: '.contact-card',       dir: 'up',    delay: 100, stagger: 100 },
    { sel: '.contact-form',       dir: 'up',    delay: 200, stagger: 0 },

    // Hero (subtle — already visible on load, just a soft entrance)
    { sel: '.hero-identity',      dir: 'up',    delay: 100, stagger: 0 },
    { sel: '.hero-right',         dir: 'right', delay: 200, stagger: 0 },

    // Bulletin / Papan Pesan
    { sel: '.bulletin-form-card', dir: 'up',    delay: 100, stagger: 0 },
    { sel: '.bulletin-board',     dir: 'up',    delay: 200, stagger: 0 },

    // Meme of the Month
    { sel: '.meme-video-wrap',    dir: 'up',    delay: 100, stagger: 0 },

    // Video Perkenalan
    { sel: '.video-wrapper',      dir: 'up',    delay: 100, stagger: 0 },

    // Quiz
    { sel: '.quiz-main-card',     dir: 'up',    delay: 100, stagger: 0 },
    { sel: '.quiz-lb-card',       dir: 'right', delay: 200, stagger: 0 },

    // Gaming & Peripheral
    { sel: '.game-card',          dir: 'up',    delay: 100, stagger: 80 },
    { sel: '.peripheral-item',    dir: 'up',    delay: 100, stagger: 60 },
  ];

  REVEAL_MAP.forEach(({ sel, dir, delay, stagger }) => {
    // Group siblings by their parent so stagger is per-group
    const elements = Array.from(document.querySelectorAll(sel));
    const groups   = new Map();

    elements.forEach(el => {
      // Skip if already tagged
      if (el.hasAttribute('data-reveal')) return;
      const parent = el.parentElement;
      if (!groups.has(parent)) groups.set(parent, []);
      groups.get(parent).push(el);
    });

    groups.forEach(siblings => {
      siblings.forEach((el, i) => {
        el.setAttribute('data-reveal', dir === 'up' ? 'true' : dir);
        const d = delay + i * stagger;
        if (d > 0) el.setAttribute('data-delay', String(d));
      });
    });
  });

  // ── 2. Observe all tagged elements ───────────────────────
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target); // only animate once
      }
    });
  }, {
    threshold: 0.12,      // trigger when 12% of element is visible
    rootMargin: '0px 0px -40px 0px' // slight offset from bottom
  });

  document.querySelectorAll('[data-reveal]').forEach(el => {
    observer.observe(el);
  });

  // On touch/mobile use a lower threshold so elements trigger earlier
  const mobileObserver = window.matchMedia('(pointer: coarse)').matches
    ? new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            mobileObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.05, rootMargin: '0px 0px -20px 0px' })
    : null;

  if (mobileObserver) {
    document.querySelectorAll('[data-reveal]').forEach(el => {
      observer.unobserve(el);
      mobileObserver.observe(el);
    });
  }
})();

/* ═══════════════════════════════════════════════════════════
   SKILL TOOLTIP
   ─────────────────────────────────────────────────────────
   Appears above any .tag[data-tip] on hover.
   Positioned dynamically so it never clips off-screen.
   ═══════════════════════════════════════════════════════════ */
(function initSkillTooltip() {
  const tooltip = document.getElementById('skillTooltip');
  const tipLabel = document.getElementById('skillTooltipLabel');
  const tipText  = document.getElementById('skillTooltipText');
  if (!tooltip || !tipLabel || !tipText) return;

  const isTouch = window.matchMedia('(pointer: coarse)').matches;
  let hideTimer  = null;
  let activeTag  = null; // currently shown tag (touch only)

  /* ── Position & show tooltip above (or below) a tag ── */
  function show(tag) {
    clearTimeout(hideTimer);
    const text  = tag.getAttribute('data-tip');
    const label = tag.getAttribute('data-tip-label');
    if (!text) return;

    tipLabel.textContent = label || '';
    tipText.textContent  = text;

    tooltip.style.visibility = 'hidden';
    tooltip.style.display    = 'block';
    tooltip.classList.remove('is-visible');

    const tagRect = tag.getBoundingClientRect();
    const tipW    = tooltip.offsetWidth;
    const tipH    = tooltip.offsetHeight;
    const GAP     = 10;
    const pad     = 10;

    let left = tagRect.left + tagRect.width / 2 - tipW / 2;
    let top  = tagRect.top  - tipH - GAP;

    // Clamp horizontally
    left = Math.max(pad, Math.min(left, window.innerWidth - tipW - pad));

    // Flip below if not enough room above
    const arrow = tooltip.querySelector('.skill-tooltip-arrow');
    if (top < pad) {
      top = tagRect.bottom + GAP;
      arrow.style.top         = '-5px';
      arrow.style.bottom      = 'auto';
      arrow.style.borderRight = 'none';
      arrow.style.borderBottom= 'none';
      arrow.style.borderLeft  = '1px solid rgba(255,255,255,0.1)';
      arrow.style.borderTop   = '1px solid rgba(255,255,255,0.1)';
    } else {
      arrow.style.top         = 'auto';
      arrow.style.bottom      = '-5px';
      arrow.style.borderLeft  = '';
      arrow.style.borderTop   = '';
      arrow.style.borderRight = '1px solid rgba(255,255,255,0.1)';
      arrow.style.borderBottom= '1px solid rgba(255,255,255,0.1)';
    }

    tooltip.style.left       = left + 'px';
    tooltip.style.top        = top  + 'px';
    tooltip.style.visibility = 'visible';

    requestAnimationFrame(() => tooltip.classList.add('is-visible'));
  }

  function hide(immediate) {
    if (immediate) {
      tooltip.classList.remove('is-visible');
      activeTag = null;
    } else {
      hideTimer = setTimeout(() => {
        tooltip.classList.remove('is-visible');
        activeTag = null;
      }, 80);
    }
  }

  /* ── Mouse events (desktop) ── */
  if (!isTouch) {
    document.addEventListener('mouseover', e => {
      const tag = e.target.closest('.tag[data-tip]');
      if (tag) show(tag);
    });
    document.addEventListener('mouseout', e => {
      const tag = e.target.closest('.tag[data-tip]');
      if (tag) hide(false);
    });
  }

  /* ── Touch events (mobile) ── */
  if (isTouch) {
    document.addEventListener('touchstart', e => {
      const tag = e.target.closest('.tag[data-tip]');
      if (tag) {
        // Toggle: tap same tag = hide, tap new tag = show new
        if (activeTag === tag) {
          hide(true);
          e.preventDefault(); // prevent ghost click
          return;
        }
        activeTag = tag;
        show(tag);
        e.preventDefault(); // prevent ghost click
      } else {
        // Tapped outside — hide
        if (tooltip.classList.contains('is-visible')) {
          hide(true);
        }
      }
    }, { passive: false });
  }

  // Hide on scroll
  window.addEventListener('scroll', () => hide(true), { passive: true });
})();



/* ═══════════════════════════════════════════════════════════
/* ═══════════════════════════════════════════════════════════
   VIDEO INTRO PLAYER
   ─────────────────────────────────────────────────────────
   Custom media player untuk section video perkenalan.
   - Play/Pause toggle + big play overlay
   - Backward / Forward 10 detik
   - Progress bar seekable + draggable
   - Mute toggle
   - Fullscreen
   - Saat video diputar → bg music pause
   - Saat video pause/end → bg music resume (jika sebelumnya aktif)
   ═══════════════════════════════════════════════════════════ */
(function initVideoPlayer() {
  const video       = document.getElementById('introVideo');
  const placeholder = document.getElementById('videoPlaceholder');
  const bigPlay     = document.getElementById('videoBigPlay');
  const playBtn     = document.getElementById('vpPlayBtn');
  const fill        = document.getElementById('vpProgressFill');
  const thumb       = document.getElementById('vpProgressThumb');
  const barWrap     = document.getElementById('vpProgressBar');
  const curTime     = document.getElementById('vpCurrentTime');
  const durTime     = document.getElementById('vpDuration');
  const volBtn      = document.getElementById('vpVolBtn');
  const fsBtn       = document.getElementById('vpFsBtn');
  const bgMusic     = document.getElementById('bgMusic');

  if (!video) return;

  // ── Pastikan video tidak muted dan volume penuh ──
  video.muted  = false;
  video.volume = 1;
  if (volBtn) volBtn.classList.remove('is-muted');
  function checkSrc() {
    const hasSrc = video.getAttribute('src') && video.getAttribute('src') !== '';
    if (placeholder) placeholder.style.display = hasSrc ? 'none' : 'flex';
    if (bigPlay)     bigPlay.style.display      = hasSrc ? 'flex' : 'none';
  }
  checkSrc();

  // ── Format seconds → m:ss ──
  function fmt(s) {
    if (isNaN(s)) return '0:00';
    const m   = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, '0')}`;
  }

  // ── BG music bridge ──
  let bgWasPlaying = false;

  function pauseBgMusic() {
    // Hanya bertindak kalau musik memang sedang playing
    if (bgMusic && !bgMusic.paused && bgMusic.volume > 0) {
      bgWasPlaying = true;
      // Fade out smooth selama 1 detik, lalu pause
      fadeVolume(0, 1000, () => {
        bgMusic.pause();
        musicEnabled = false;
        if (typeof updateMusicUI === 'function') updateMusicUI();
        if (typeof updateSpectrumState === 'function') updateSpectrumState(false);
      });
    }
  }
  window.pauseBgMusic  = pauseBgMusic;

  function resumeBgMusic() {
    // Resume hanya kalau musik memang sedang kita yang pause-kan karena video
    if (bgMusic && bgWasPlaying) {
      bgWasPlaying = false;
      // Pastikan AudioContext jalan dulu, lalu fade in
      ensureAudioCtxRunning().then(() => {
        connectAnalyserTo(bgSourceNode);
        bgMusic.volume = 0;
        bgMusic.play().then(() => {
          musicEnabled = true;
          if (typeof updateMusicUI === 'function') updateMusicUI();
          if (typeof updateSpectrumState === 'function') updateSpectrumState(true);
          // Fade in smooth selama 1.5 detik
          fadeVolume(MUSIC_TARGET_VOLUME, 1500);
        }).catch(() => {});
      });
    }
  }
  window.resumeBgMusic = resumeBgMusic;

  // ── Play / Pause ──
  window.videoTogglePlay = function () {
    if (!video.getAttribute('src') || video.getAttribute('src') === '') return;
    if (video.paused) { video.play(); } else { video.pause(); }
  };

  video.addEventListener('play', () => {
    if (playBtn) playBtn.classList.add('is-playing');
    if (bigPlay) bigPlay.style.opacity = '0';
    pauseBgMusic();
  });
  video.addEventListener('pause', () => {
    if (playBtn) playBtn.classList.remove('is-playing');
    if (bigPlay) bigPlay.style.opacity = '1';
    resumeBgMusic();
  });
  video.addEventListener('ended', () => {
    if (playBtn) playBtn.classList.remove('is-playing');
    if (bigPlay) bigPlay.style.opacity = '1';
    resumeBgMusic();
  });

  // ── Big play overlay click ──
  if (bigPlay) bigPlay.addEventListener('click', window.videoTogglePlay);

  // ── Skip forward / backward ──
  window.videoSkip = function (sec) {
    if (!video.getAttribute('src')) return;
    video.currentTime = Math.max(0, Math.min(video.duration || 0, video.currentTime + sec));
  };

  // ── Progress update ──
  video.addEventListener('timeupdate', () => {
    if (!video.duration) return;
    const pct = (video.currentTime / video.duration) * 100;
    if (fill)    fill.style.width  = pct + '%';
    if (thumb)   thumb.style.left  = pct + '%';
    if (curTime) curTime.textContent = fmt(video.currentTime);
  });
  video.addEventListener('loadedmetadata', () => {
    if (durTime) durTime.textContent = fmt(video.duration);
    checkSrc();
  });

  // ── Seek on click + drag ──
  if (barWrap) {
    function seek(e) {
      if (!video.duration) return;
      const rect = barWrap.getBoundingClientRect();
      const pct  = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
      video.currentTime = pct * video.duration;
    }
    barWrap.addEventListener('click', seek);
    let dragging = false;
    barWrap.addEventListener('mousedown', () => { dragging = true; });
    document.addEventListener('mousemove', (e) => { if (dragging) seek(e); });
    document.addEventListener('mouseup',   () => { dragging = false; });
  }

  // ══ Volume Control ══════════════════════════════════════
  const volTrack      = document.getElementById('vpVolTrack');
  const volFill       = document.getElementById('vpVolFill');
  const volThumb      = document.getElementById('vpVolThumb');
  const volPct        = document.getElementById('vpVolPct');
  const volBackdrop   = document.getElementById('vpVolBackdrop');
  const volSheet      = document.getElementById('vpVolSheet');
  const volSheetTrack = document.getElementById('vpVolSheetTrack');
  const volSheetFill  = document.getElementById('vpVolSheetFill');
  const volSheetThumb = document.getElementById('vpVolSheetThumb');
  const volSheetPct   = document.getElementById('vpVolSheetPct');
  const volSheetIcon  = document.getElementById('vpVolSheetIcon');
  let lastVol = 1;

  function updateVolUI(val) {
    const pct   = Math.round(val * 100);
    const muted = val === 0 || video.muted;
    // Desktop slider
    if (volFill)       volFill.style.width       = pct + '%';
    if (volThumb)      volThumb.style.left        = pct + '%';
    if (volPct)        volPct.textContent         = pct + '%';
    // Mobile sheet
    if (volSheetFill)  volSheetFill.style.width   = pct + '%';
    if (volSheetThumb) volSheetThumb.style.left   = pct + '%';
    if (volSheetPct)   volSheetPct.textContent    = pct + '%';
    if (volSheetIcon)  volSheetIcon.textContent   = muted ? '🔇' : val < 0.4 ? '🔉' : '🔊';
    // Button icon state
    if (volBtn) {
      volBtn.classList.remove('is-muted', 'is-low');
      if (muted)          volBtn.classList.add('is-muted');
      else if (val < 0.4) volBtn.classList.add('is-low');
    }
    // Highlight active preset
    document.querySelectorAll('.vp-vol-preset-btn').forEach(btn => {
      const m = btn.getAttribute('onclick').match(/setVolPreset\(([^)]+)\)/);
      if (m) btn.classList.toggle('active', Math.abs(parseFloat(m[1]) - val) < 0.01);
    });
  }
  updateVolUI(1);

  function setVol(val) {
    video.muted  = val === 0;
    video.volume = val;
    if (val > 0) lastVol = val;
    updateVolUI(val);
  }

  // Mute toggle (dipakai di desktop klik icon)
  window.videoToggleMute = function () {
    setVol(video.muted || video.volume === 0 ? (lastVol > 0 ? lastVol : 1) : 0);
  };

  // Desktop: klik icon = mute toggle | Mobile: klik icon = buka sheet
  window.videoVolBtnClick = function () {
    if (window.matchMedia('(max-width:600px)').matches) openVolSheet();
    else window.videoToggleMute();
  };

  // Desktop drag
  let volDrag = false;
  function volSeek(cx) {
    if (!volTrack) return;
    const r = volTrack.getBoundingClientRect();
    setVol(Math.max(0, Math.min(1, (cx - r.left) / r.width)));
  }
  if (volTrack) {
    volTrack.addEventListener('mousedown',  e => { volDrag = true; volSeek(e.clientX); });
    volTrack.addEventListener('touchstart', e => { e.preventDefault(); volDrag = true; volSeek(e.touches[0].clientX); }, { passive: false });
    volTrack.addEventListener('touchmove',  e => { e.preventDefault(); if (volDrag) volSeek(e.touches[0].clientX); }, { passive: false });
    volTrack.addEventListener('touchend',   () => { volDrag = false; });
  }
  document.addEventListener('mousemove', e => { if (volDrag) volSeek(e.clientX); });
  document.addEventListener('mouseup',   () => { volDrag = false; });

  // Mobile bottom sheet (position:fixed di body, tidak terpotong overflow)
  function openVolSheet() {
    if (volSheet)   volSheet.classList.add('is-open');
    if (volBackdrop) volBackdrop.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }
  window.closeVolSheet = function () {
    if (volSheet)   volSheet.classList.remove('is-open');
    if (volBackdrop) volBackdrop.classList.remove('is-open');
    document.body.style.overflow = '';
  };
  window.setVolPreset = function (val) { setVol(val); };

  // Mobile sheet drag
  let sheetDrag = false;
  function sheetSeek(cx) {
    if (!volSheetTrack) return;
    const r = volSheetTrack.getBoundingClientRect();
    setVol(Math.max(0, Math.min(1, (cx - r.left) / r.width)));
  }
  if (volSheetTrack) {
    volSheetTrack.addEventListener('mousedown',  e => { sheetDrag = true; sheetSeek(e.clientX); });
    volSheetTrack.addEventListener('touchstart', e => { sheetDrag = true; sheetSeek(e.touches[0].clientX); }, { passive: true });
    volSheetTrack.addEventListener('touchmove',  e => { if (sheetDrag) sheetSeek(e.touches[0].clientX); }, { passive: true });
    volSheetTrack.addEventListener('touchend',   () => { sheetDrag = false; });
  }
  document.addEventListener('mousemove', e => { if (sheetDrag) sheetSeek(e.clientX); });
  document.addEventListener('mouseup',   () => { sheetDrag = false; });

  // ── Fullscreen ──
  window.videoToggleFullscreen = function () {
    const el = document.getElementById('videoSlot');
    if (!document.fullscreenElement) {
      (el.requestFullscreen || el.webkitRequestFullscreen || el.mozRequestFullScreen).call(el);
    } else {
      (document.exitFullscreen || document.webkitExitFullscreen).call(document);
    }
  };
  document.addEventListener('fullscreenchange', () => {
    if (fsBtn) fsBtn.classList.toggle('is-fullscreen', !!document.fullscreenElement);
  });
})();

/* ═══════════════════════════════════════════════════════════
   VIDEO UPLOAD HANDLER
   ─────────────────────────────────────────────────────────
   Memungkinkan user upload video langsung dari browser.
   Menggunakan URL.createObjectURL() agar video langsung
   bisa diputar tanpa upload ke server.
   ═══════════════════════════════════════════════════════════ */
(function initVideoUpload() {
  const placeholder  = document.getElementById('videoPlaceholder');
  const uploadZone   = document.getElementById('videoUploadZone');
  const changeBtn    = document.getElementById('videoChangeBtn');
  const video        = document.getElementById('introVideo');
  const bigPlay      = document.getElementById('videoBigPlay');
  const durTime      = document.getElementById('vpDuration');

  if (!placeholder || !video) return;

  // ── Handle file dari input / drop ──
  window.handleVideoUpload = function (e) {
    const file = e.target.files?.[0];
    if (!file) return;
    loadVideoFile(file);
  };

  function loadVideoFile(file) {
    // Revoke URL lama kalau ada
    if (video._objectURL) {
      URL.revokeObjectURL(video._objectURL);
    }

    const url = URL.createObjectURL(file);
    video._objectURL = url;
    video.src = url;
    video.load();

    // Sembunyikan placeholder, tampilkan big play & change btn
    placeholder.style.display = 'none';
    if (bigPlay)    { bigPlay.style.display = 'flex'; bigPlay.style.opacity = '1'; }
    if (changeBtn)  { changeBtn.classList.add('is-visible'); }
    if (durTime)    { durTime.textContent = '0:00'; }

    // Reset progress
    const fill  = document.getElementById('vpProgressFill');
    const thumb = document.getElementById('vpProgressThumb');
    const cur   = document.getElementById('vpCurrentTime');
    if (fill)  fill.style.width = '0%';
    if (thumb) thumb.style.left = '0%';
    if (cur)   cur.textContent  = '0:00';
  }

  // ── Drag & Drop ──
  ['dragenter', 'dragover'].forEach(evt => {
    placeholder.addEventListener(evt, (e) => {
      e.preventDefault();
      placeholder.classList.add('drag-over');
    });
  });

  ['dragleave', 'dragend', 'drop'].forEach(evt => {
    placeholder.addEventListener(evt, () => {
      placeholder.classList.remove('drag-over');
    });
  });

  placeholder.addEventListener('drop', (e) => {
    e.preventDefault();
    const file = e.dataTransfer?.files?.[0];
    if (file && file.type.startsWith('video/')) {
      loadVideoFile(file);
    }
  });
})();

/* ═══════════════════════════════════════════════════════════
   SKILLS PROGRESS BAR ANIMATION
   Bars animate in when they scroll into view.
   ═══════════════════════════════════════════════════════════ */
(function initSkillBars() {
  const items = document.querySelectorAll('.skill-item');
  if (!items.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const item = entry.target;
        item.classList.add('in-view');
        const fill = item.querySelector('.skill-bar-fill');
        if (fill) fill.classList.add('animated');
        observer.unobserve(item);
      }
    });
  }, { threshold: 0.3 });

  items.forEach(item => observer.observe(item));
})();

/* ═══════════════════════════════════════════════════════════
   BULLETIN BOARD  (v5 — custom modal + clear-all + delete fix)
   ═══════════════════════════════════════════════════════════════ */

/* ── Custom Modal (pengganti alert/confirm biasa) ───────────── */
const ZanModal = (() => {
  const backdrop  = document.getElementById('zanpwModalBackdrop');
  const iconEl    = document.getElementById('zanpwModalIcon');
  const titleEl   = document.getElementById('zanpwModalTitle');
  const descEl    = document.getElementById('zanpwModalDesc');
  const cancelBtn = document.getElementById('zanpwModalCancel');
  const confirmBtn= document.getElementById('zanpwModalConfirm');
  const iconRing  = document.querySelector('.zanpw-modal-icon-ring');

  let _resolve = null;

  function open({ icon='🗑️', title='Hapus?', desc='', confirmText='Hapus', cancelText='Batal', type='danger' }) {
    iconEl.textContent     = icon;
    titleEl.textContent    = title;
    descEl.textContent     = desc;
    confirmBtn.textContent = confirmText;
    cancelBtn.textContent  = cancelText;
    cancelBtn.style.display = (cancelText === '' || cancelText === null) ? 'none' : '';
    confirmBtn.className   = 'zanpw-modal-btn zanpw-btn-confirm' + (type === 'info' ? ' is-info' : '');
    backdrop.classList.add('is-open');
    return new Promise(resolve => { _resolve = resolve; });
  }

  function close(result) {
    backdrop.classList.remove('is-open');
    if (_resolve) { _resolve(result); _resolve = null; }
  }

  cancelBtn.addEventListener('click',  () => close(false));
  confirmBtn.addEventListener('click', () => close(true));
  backdrop.addEventListener('click', e => { if (e.target === backdrop) close(false); });
  document.addEventListener('keydown', e => {
    if (!backdrop.classList.contains('is-open')) return;
    if (e.key === 'Escape') close(false);
    if (e.key === 'Enter')  close(true);
  });

  return { open };
})();

(function initMemePlayer() {
  const video   = document.getElementById('memeVideo');
  const playBtn = document.getElementById('memePlayBtn');
  const wrap    = video ? video.closest('.meme-video-wrap') : null;
  if (!video || !playBtn || !wrap) return;

  // Click wrap → toggle play/pause
  wrap.addEventListener('click', () => {
    if (video.paused) { video.play(); }
    else              { video.pause(); }
  });

  // Play → hide button + fade out bg music
  video.addEventListener('play', () => {
    playBtn.classList.add('hidden');
    if (typeof window.pauseBgMusic === 'function') window.pauseBgMusic();
  });

  // Pause → show button + fade in bg music
  video.addEventListener('pause', () => {
    playBtn.classList.remove('hidden');
    if (typeof window.resumeBgMusic === 'function') window.resumeBgMusic();
  });

  // Ended → show button + fade in bg music
  video.addEventListener('ended', () => {
    playBtn.classList.remove('hidden');
    if (typeof window.resumeBgMusic === 'function') window.resumeBgMusic();
  });
})();

(function initBulletinBoard() {

  const FIREBASE_URL = 'https://personalweb-zan-default-rtdb.asia-southeast1.firebasedatabase.app';
  const BASE         = `${FIREBASE_URL}/bulletin`;
  const ENDPOINT     = `${BASE}.json`;
  const TOKEN_KEY    = 'zanpw_blt_tokens';

  const nameInput   = document.getElementById('bulletinName');
  const msgInput    = document.getElementById('bulletinMsg');
  const submitBtn   = document.getElementById('bulletinSubmit');
  const statusEl    = document.getElementById('bulletinStatus');
  const listEl      = document.getElementById('bulletinList');
  const loadingEl   = document.getElementById('bulletinLoading');
  const emptyEl     = document.getElementById('bulletinEmpty');
  const charCountEl = document.getElementById('bulletinCharCount');
  if (!nameInput || !msgInput) return;

  /* ── Username from saved value ──────────────────────── */
  // nameInput is now a hidden field; its value is set by initUsernameSystem → updateChip
  // Ensure it's populated on init
  const _savedUsername = localStorage.getItem('zanpw_username') || '';
  if (_savedUsername && nameInput) nameInput.value = _savedUsername;

  /* ── Reaction constants ──────────────────────────────────────── */
  // key = string disimpan di Firebase, emoji = yang ditampilkan
  const REACTIONS = [
    { key: 'like',  emoji: '👍' },
    { key: 'heart', emoji: '❤️' },
    { key: 'haha',  emoji: '😂' },
    { key: 'fire',  emoji: '🔥' },
    { key: 'wow',   emoji: '😮' },
  ];
  const REACT_STORE = 'zanpw_reacts'; // { "msgId:key": true }

  function getMyReacts() {
    try { return JSON.parse(localStorage.getItem(REACT_STORE) || '{}'); } catch { return {}; }
  }
  function setMyReact(msgId, key, val) {
    const r = getMyReacts();
    const k = `${msgId}:${key}`;
    if (val) r[k] = true; else delete r[k];
    localStorage.setItem(REACT_STORE, JSON.stringify(r));
  }
  function hasMyReact(msgId, key) {
    return !!getMyReacts()[`${msgId}:${key}`];
  }
  function getUserId() {
    let id = localStorage.getItem('zanpw_userid');
    if (!id) {
      id = 'u' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
      localStorage.setItem('zanpw_userid', id);
    }
    return id;
  }

  /* ── Toggle reaction (optimistic UI + Firebase) ─────────────── */
  async function toggleReaction(msgId, key) {
    const userId    = getUserId();
    const reacted   = hasMyReact(msgId, key);
    const path      = `${BASE}/${msgId}/reactions/${key}/${userId}.json`;
    const card      = listEl.querySelector(`.blt-card[data-id="${msgId}"]`);
    const btn       = card?.querySelector(`.blt-react-btn[data-rkey="${key}"]`);
    const countSpan = btn?.querySelector('.blt-react-count');

    // Optimistic update — hanya update active class & animasi
    // Count dibiarkan polling yang update supaya akurat untuk semua user
    if (btn) {
      if (reacted) {
        btn.classList.remove('active');
      } else {
        btn.classList.add('active');
        btn.classList.add('react-pop');
        setTimeout(() => btn.classList.remove('react-pop'), 320);
      }
    }
    setMyReact(msgId, key, !reacted);

    try {
      if (reacted) {
        await fetch(path, { method: 'DELETE' });
      } else {
        await fetch(path, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(true)
        });
      }
    } catch(e) {
      // Revert on error
      setMyReact(msgId, key, reacted);
    }
  }

  /* ── Render reactions row ────────────────────────────────────── */
  function renderReactions(msgId, reactionsData) {
    const wrap = document.createElement('div');
    wrap.className = 'blt-reactions';
    wrap.dataset.reactMsgid = msgId;

    REACTIONS.forEach(({ key, emoji }) => {
      const voters = (reactionsData && reactionsData[key]) ? reactionsData[key] : {};
      const count  = Object.values(voters).filter(Boolean).length;
      const active = hasMyReact(msgId, key);

      const btn = document.createElement('button');
      btn.className      = 'blt-react-btn' + (active ? ' active' : '');
      btn.dataset.rkey   = key;
      btn.title          = emoji;
      btn.innerHTML      = `<span class="blt-react-emoji">${emoji}</span><span class="blt-react-count">${count}</span>`;
      btn.addEventListener('click', () => toggleReaction(msgId, key));
      wrap.appendChild(btn);
    });
    return wrap;
  }

  /* ── Update reaction counts from fresh Firebase data ───────────
     Called by SSE listener and polling fallback                   */
  function refreshReactions(allData) {
    if (!allData) return;
    Object.entries(allData).forEach(([msgId, msg]) => {
      if (!msg) return;
      const card = listEl.querySelector(`.blt-card[data-id="${msgId}"]`);
      if (!card) return;
      const wrap = card.querySelector('.blt-reactions');
      if (!wrap) return;
      const reactions = msg.reactions || {};
      REACTIONS.forEach(({ key }) => {
        const btn       = wrap.querySelector(`.blt-react-btn[data-rkey="${key}"]`);
        if (!btn) return;
        const voters   = reactions[key] || {};
        const newCount = Object.values(voters).filter(Boolean).length;
        const countSpan = btn.querySelector('.blt-react-count');
        if (countSpan) {
          const oldCount = parseInt(countSpan.textContent) || 0;
          if (oldCount !== newCount) {
            countSpan.textContent = newCount;
            countSpan.classList.add('count-bounce');
            setTimeout(() => countSpan.classList.remove('count-bounce'), 360);
          }
        }
        const active = hasMyReact(msgId, key);
        btn.classList.toggle('active', active);
      });
    });
  }

  /* ═════════════════════════════════════════════════════
     REALTIME ENGINE — Firebase SSE + poll fallback
     ─────────────────────────────────────────────────────
     • Firebase RTDB streams SSE at the plain .json URL
       (no ?stream=true needed — EventSource triggers it)
     • On full-path update: diff IDs → add/remove cards
     • On sub-path update: refresh only that card's data
     • Polling fallback runs every 20 s as a safety net
  ═════════════════════════════════════════════════════ */
  let _knownIds    = new Set();   // IDs currently rendered
  let _sseActive   = false;       // true once SSE connected
  let _initDone    = false;       // skip first SSE dump (loadMessages already did it)

  /* ── Show "new message" pip in board topbar ── */
  function showNewMsgPip() {
    const topbar = document.querySelector('.bulletin-board-topbar');
    if (!topbar) return;
    let pip = topbar.querySelector('.blt-new-pip');
    if (pip) { pip.dataset.count = (parseInt(pip.dataset.count||0)+1); return; }
    pip = document.createElement('span');
    pip.className = 'blt-new-pip';
    pip.dataset.count = 1;
    pip.textContent = '● pesan baru';
    pip.style.cssText = `
      font-size:.75rem; font-weight:600; color:#10b981;
      animation: blt-pip-pulse 1.6s ease-in-out infinite;
      cursor:pointer; user-select:none;
    `;
    pip.addEventListener('click', () => {
      pip.remove();
      listEl.firstElementChild?.scrollIntoView({ behavior:'smooth', block:'nearest' });
    });
    topbar.appendChild(pip);
    // auto-hide after 12 s
    setTimeout(() => pip?.remove(), 12000);
  }

  /* ── Insert a brand-new card at the TOP of the list ── */
  function insertNewCard(msgId, msg) {
    if (_knownIds.has(msgId)) return; // already exists
    _knownIds.add(msgId);
    const card = renderCard(msgId, msg);
    card.style.opacity   = '0';
    card.style.transform = 'translateY(-12px)';
    card.style.transition = 'opacity .35s ease, transform .35s ease';
    listEl.prepend(card);
    // tiny defer so transition fires
    requestAnimationFrame(() => requestAnimationFrame(() => {
      card.style.opacity   = '1';
      card.style.transform = 'translateY(0)';
    }));
    emptyEl.style.display = 'none';
    updateCount();
    showNewMsgPip();
  }

  /* ── Remove a card that was deleted by another user ── */
  function removeCardById(msgId) {
    if (!_knownIds.has(msgId)) return;
    _knownIds.delete(msgId);
    const card = listEl.querySelector(`.blt-card[data-id="${msgId}"]`);
    if (!card) return;
    card.style.transition = 'opacity .3s, transform .3s';
    card.style.opacity    = '0';
    card.style.transform  = 'scale(.96)';
    setTimeout(() => {
      card.remove();
      updateCount();
      if (!listEl.querySelector('.blt-card')) emptyEl.style.display = 'flex';
    }, 320);
  }

  /* ── Full-snapshot diff: add new, remove deleted ── */
  function applyFullSnapshot(data) {
    if (!data) {
      // Board was wiped
      [..._knownIds].forEach(id => removeCardById(id));
      return;
    }
    const incoming = new Set(Object.keys(data));

    // New messages
    Object.entries(data)
      .sort(([,a],[,b]) => b.time - a.time)   // newest first
      .forEach(([id, msg]) => {
        if (!_knownIds.has(id)) insertNewCard(id, msg);
      });

    // Deleted messages
    [..._knownIds].forEach(id => {
      if (!incoming.has(id)) removeCardById(id);
    });

    // Update reactions for existing cards
    refreshReactions(data);
  }

  /* ── Handle a sub-path SSE update ── */
  function applyPatchUpdate(path, value) {
    const parts  = path.split('/').filter(Boolean); // e.g. [msgId] or [msgId, 'reactions', ...]
    const msgId  = parts[0];
    if (!msgId) return;

    if (parts.length === 1) {
      // Whole message was added or set
      if (value === null) {
        removeCardById(msgId);
      } else if (!_knownIds.has(msgId)) {
        insertNewCard(msgId, value);
      } else {
        // Message already exists; refresh its reactions
        if (value.reactions) refreshReactions({ [msgId]: value });
      }
      return;
    }

    if (parts[1] === 'devFav') {
      const card = listEl.querySelector(`.blt-card[data-id="${msgId}"]`);
      if (!card) return;
      const row = card.querySelector('.blt-row');
      if (!row) return;
      // Hapus badge lama
      row.querySelector('.blt-fav-badge')?.remove();
      if (value === true) {
        const badge = document.createElement('span');
        badge.className = 'blt-fav-badge';
        const lang = typeof currentLang !== 'undefined' ? currentLang : 'id';
        badge.innerHTML = lang === 'en' ? '⭐ Dev Pick' : '⭐ Pilihan Dev';
        const nameEl = row.querySelector('.blt-name');
        if (nameEl) nameEl.insertAdjacentElement('afterend', badge);
      }
      // Toggle class is-dev-fav di card
      if (value === true) {
        card.classList.add('is-dev-fav');
      } else {
        card.classList.remove('is-dev-fav');
      }
      // Update tombol fav dev kalau ada
      const favBtn = card.querySelector('.blt-dev-fav-btn');
      if (favBtn) {
        if (value === true) {
          favBtn.innerHTML = '⭐ Unfav';
          favBtn.classList.add('is-fav');
        } else {
          favBtn.innerHTML = '☆ Fav';
          favBtn.classList.remove('is-fav');
        }
      }
      return;
    }

    if (parts[1] === 'reactions') {
      // Reaction sub-path changed; do a targeted fetch
      fetch(`${BASE}/${msgId}/reactions.json`)
        .then(r => r.json())
        .then(node => {
          if (node === null) return;
          refreshReactions({ [msgId]: { reactions: node } });
        })
        .catch(() => {});
    }

    if (parts[1] === 'replies') {
      const replyId = parts[2];
      if (!replyId) return;

      const card     = listEl.querySelector(`.blt-card[data-id="${msgId}"]`);
      if (!card) return;
      const repliesEl = card.querySelector('.blt-replies');
      if (!repliesEl) return;

      if (value === null) {
        // Reply dihapus oleh user lain — remove card-nya
        const existing = repliesEl.querySelector(`.blt-reply-card[data-reply-id="${replyId}"]`);
        if (existing) {
          existing.style.transition = 'opacity .25s, transform .25s';
          existing.style.opacity = '0';
          existing.style.transform = 'scale(.96)';
          setTimeout(() => { existing.remove(); updateCount(); }, 260);
        }
      } else {
        // Reply baru dari user lain — insert kalau belum ada
        const existing = repliesEl.querySelector(`.blt-reply-card[data-reply-id="${replyId}"]`);
        if (!existing) {
          const newCard = renderReplyCard(value, replyId, msgId);
          newCard.dataset.replyId = replyId;
          newCard.style.opacity = '0';
          newCard.style.transform = 'translateY(8px)';
          newCard.style.transition = 'opacity .3s ease, transform .3s ease';
          repliesEl.appendChild(newCard);
          requestAnimationFrame(() => requestAnimationFrame(() => {
            newCard.style.opacity = '1';
            newCard.style.transform = 'translateY(0)';
          }));
          updateCount();
          // Cek ulang setelah 500ms — kalau token baru tersimpan tapi
          // tombol hapus belum muncul (race condition), re-render card-nya
          setTimeout(() => {
            const card2 = repliesEl.querySelector(`.blt-reply-card[data-reply-id="${replyId}"]`);
            if (!card2) return;
            const hasDeleteBtn = card2.querySelector('.blt-del-reply');
            const ownerNow = isOwner(`${msgId}__r__${replyId}`, value.ownerToken);
            if (ownerNow && !hasDeleteBtn) {
              // Re-render card dengan token yang sudah ada
              const fresh = renderReplyCard(value, replyId, msgId);
              fresh.dataset.replyId = replyId;
              card2.replaceWith(fresh);
            }
          }, 600);
        }
      }
    }
  }

  /* ── Start SSE ── */
  (function startSSE() {
    if (typeof EventSource === 'undefined') {
      startPollFallback(); return;
    }
    try {
      // Firebase RTDB auto-streams when URL is opened as EventSource
      const es = new EventSource(ENDPOINT);
      _sseActive = true;

      es.addEventListener('put', e => {
        try {
          const payload = JSON.parse(e.data);
          if (!payload) return;

          // Very first event = initial full dump; loadMessages() already painted it
          if (!_initDone) {
            _initDone = true;
            // Still sync _knownIds so diffs work
            if (payload.path === '/' && payload.data) {
              Object.keys(payload.data).forEach(id => _knownIds.add(id));
            }
            return;
          }

          if (payload.path === '/') {
            applyFullSnapshot(payload.data);
          } else {
            applyPatchUpdate(payload.path, payload.data);
          }
        } catch(err) { /* ignore */ }
      });

      es.addEventListener('patch', e => {
        try {
          const payload = JSON.parse(e.data);
          if (!payload || !payload.data) return;
          Object.entries(payload.data).forEach(([subPath, val]) => {
            applyPatchUpdate(payload.path + '/' + subPath, val);
          });
        } catch(err) { /* ignore */ }
      });

      es.onerror = () => {}; // EventSource auto-reconnects
    } catch(e) {
      startPollFallback();
    }
  })();

  /* ── Poll fallback: every 20 s, runs even if SSE is active ── */
  function startPollFallback() {
    setInterval(async () => {
      try {
        const data = await fetch(ENDPOINT).then(r => r.json());
        if (!_sseActive) applyFullSnapshot(data);
        else             refreshReactions(data);
      } catch(e) { /* ignore */ }
    }, 1000);
  }
  startPollFallback(); // always start poll for reaction sync safety

  /* ── Token helpers (localStorage) ──────────────────────── */
  function getTokens() {
    try { return JSON.parse(localStorage.getItem(TOKEN_KEY) || '{}'); } catch { return {}; }
  }
  function saveToken(id, token) {
    const t = getTokens(); t[id] = token;
    localStorage.setItem(TOKEN_KEY, JSON.stringify(t));
  }
  function isOwner(id, storedToken) {
    if (!storedToken) return false;
    return getTokens()[id] === storedToken;
  }
  function genToken() {
    return Date.now().toString(36) + Math.random().toString(36).slice(2);
  }

  /* ── Bad word filter ─────────────────────────────────────
     Daftar kata kasar/kotor (Indonesia + umum).
     Tambahkan kata lain sesuai kebutuhan.                  */
  const BAD_WORDS = [
    'anjing','anjir','anj','bangsat','bangsa','bajingan','brengsek',
    'keparat','kampret','goblok','goblog','tolol','idiot','bodoh','dungu',
    'tai','tahi','taik','kotoran','kontol','memek','ngentot','entot',
    'jancok','jancuk','cok','cuk','asu','asuw','celeng','babi','bajing',
    'sundal','setan','iblis','laknat','sialan','sial','kurang ajar',
    'fuck','shit','asshole','bitch','bastard','damn','crap','dick',
    'pussy','ass','nigga','nigger','whore','slut','cunt','faggot',
    'motherfucker','bullshit'
  ];

  function containsBadWord(text) {
    const lower = text.toLowerCase().replace(/[^a-z0-9\s]/g,'');
    return BAD_WORDS.some(w => {
      // exact word match, atau substring tanpa spasi (misal "g0bl0k")
      const re = new RegExp(`\\b${w.replace(/\s/g,'\\s*')}\\b`, 'i');
      return re.test(lower) || lower.includes(w.replace(/\s/g,''));
    });
  }

  /* ── Helpers ─────────────────────────────────────────── */
  function escHtml(s) {
    return String(s)
      .replace(/&/g,'&amp;').replace(/</g,'&lt;')
      .replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  }
  function avatarColor(name) {
    const c = ['#6366f1','#ec4899','#f59e0b','#10b981','#3b82f6','#8b5cf6','#ef4444','#14b8a6'];
    return c[(name||'?').charCodeAt(0) % c.length];
  }
  function fmtDate(ts) {
    return new Date(ts).toLocaleDateString('id-ID', {
      day:'numeric', month:'short', year:'numeric',
      hour:'2-digit', minute:'2-digit'
    });
  }
  function t(key) {
    return (translations[currentLang] || translations['id'])[key] || key;
  }

  /* ── Character counter ──────────────────────────────── */
  msgInput.addEventListener('input', () => {
    charCountEl.textContent = msgInput.value.length;
  });

  /* ── Sync message placeholder on lang change ─────────── */
  function syncMainPh() {
    msgInput.placeholder = t('bulletin_msg_ph');
  }
  syncMainPh();
  document.addEventListener('zanpw:langChanged', syncMainPh);
  document.addEventListener('zanpw:langChanged', updateCount);
    document.addEventListener('zanpw:langChanged', () => { if (window._zanpwUpdateChip) window._zanpwUpdateChip(); });
  document.addEventListener('zanpw:langChanged', () => {
    const lang = typeof currentLang !== 'undefined' ? currentLang : 'id';
    document.querySelectorAll('.blt-fav-badge').forEach(b => {
      b.innerHTML = lang === 'en' ? '⭐ Dev Pick' : '⭐ Pilihan Dev';
    });
  });

  // Keep hidden name input in sync whenever username changes
  document.addEventListener('zanpw:usernameChanged', () => {
    const u = localStorage.getItem('zanpw_username') || '';
    if (nameInput) nameInput.value = u;
  });

  /* ═════════════════════════════════════════════════════
     RENDER REPLY CARD
  ═════════════════════════════════════════════════════ */
  function renderReplyCard(reply, replyId, msgId) {
    const div     = document.createElement('div');
    div.className = 'blt-reply-card';
    div.dataset.replyId = replyId; // untuk realtime SSE tracking
    const color   = avatarColor(reply.name);
    const initial = (reply.name||'?').charAt(0).toUpperCase();
    const owner   = isOwner(`${msgId}__r__${replyId}`, reply.ownerToken);

    div.innerHTML = `
      <div class="blt-reply-avatar" style="background:${color}">${initial}</div>
      <div class="blt-reply-body">
        <div class="blt-row">
          <span class="blt-name${reply.name === 'King Zann' ? ' dev-badge' : ''}">${escHtml(reply.name)}</span>
          <span class="blt-time">${fmtDate(reply.time)}</span>
        </div>
        <p class="blt-msg">${escHtml(reply.message)}</p>
        ${owner ? `<button class="blt-del-btn blt-del-reply">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M9 6V4h6v2"/>
          </svg><span class="blt-del-reply-label">${t('bulletin_btn_delete')}</span>
        </button>` : ''}
      </div>`;

    // Re-sync delete button label on language change
    if (owner) {
      const delLabelEl = div.querySelector('.blt-del-reply-label');
      if (delLabelEl) {
        document.addEventListener('zanpw:langChanged', () => {
          delLabelEl.textContent = t('bulletin_btn_delete');
        });
      }
    }

    if (owner) {
      div.querySelector('.blt-del-reply').addEventListener('click', async () => {
        const ok = await ZanModal.open({
          icon: '🗑️',
          title: t('bulletin_del_reply_title'),
          desc: t('bulletin_del_reply_desc'),
          confirmText: t('bulletin_del_reply_ok'),
          cancelText: t('bulletin_del_cancel')
        });
        if (!ok) return;
        try {
          const resp = await fetch(`${BASE}/${msgId}/replies/${replyId}.json`, { method:'DELETE' });
          if (resp.ok || resp.status === 200) {
            div.style.transition = 'opacity .25s';
            div.style.opacity = '0';
            setTimeout(() => { div.remove(); updateCount(); }, 260);
          }
        } catch(e) {
          await ZanModal.open({ icon:'⚠️', title: t('bulletin_del_fail_title'), desc: t('bulletin_del_reply_fail_desc'), confirmText: t('bulletin_del_fail_ok'), cancelText:'', type:'info' });
        }
      });
    }
    return div;
  }

  /* ═════════════════════════════════════════════════════
     RENDER PESAN UTAMA
  ═════════════════════════════════════════════════════ */
  function renderCard(msgId, msg) {
    const card    = document.createElement('div');
    card.className = 'blt-card' + (msg.devFav ? ' is-dev-fav' : '');
    card.dataset.id = msgId;
    const color   = avatarColor(msg.name);
    const initial = (msg.name||'?').charAt(0).toUpperCase();
    const owner   = isOwner(msgId, msg.ownerToken);

    card.innerHTML = `
      <div class="blt-avatar" style="background:${color}">${initial}</div>
      <div class="blt-body">
        <div class="blt-row">
          <span class="blt-name${msg.name === 'King Zann' ? ' dev-badge' : ''}">${escHtml(msg.name)}</span>
          <span class="blt-time">${fmtDate(msg.time)}</span>
          ${msg.devFav ? '<span class="blt-fav-badge">⭐ ' + (typeof currentLang !== 'undefined' && currentLang === 'en' ? 'Dev Pick' : 'Pilihan Dev') + '</span>' : ''}
        </div>
        <p class="blt-msg">${escHtml(msg.message)}</p>
        <div class="blt-actions">
          <button class="blt-action-btn blt-reply-btn">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="9 17 4 12 9 7"/><path d="M20 18v-2a4 4 0 0 0-4-4H4"/>
            </svg><span class="blt-reply-label">${t('bulletin_btn_reply')}</span>
          </button>
          ${owner ? `<button class="blt-action-btn blt-delete-btn">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M9 6V4h6v2"/>
            </svg><span class="blt-delete-label">${t('bulletin_btn_delete')}</span>
          </button>` : ''}
        </div>

        <!-- Reply form -->
        <div class="blt-reply-form" style="display:none">
          <input type="text" class="bulletin-input blt-rname" maxlength="40" placeholder="${t('bulletin_name_ph')}" />
          <textarea class="bulletin-textarea blt-rmsg" maxlength="300" rows="2" placeholder="${t('bulletin_reply_ph')}"></textarea>
          <div class="blt-reply-btns">
            <button class="blt-send-reply"><span class="blt-send-label">${t('bulletin_btn_send')}</span></button>
            <button class="blt-cancel-reply"><span class="blt-cancel-label">${t('bulletin_btn_cancel')}</span></button>
          </div>
        </div>

        <!-- Replies -->
        <div class="blt-replies"></div>
      </div>`;

    // Inject reaction row
    const bodyEl = card.querySelector('.blt-body');
    const msgEl  = card.querySelector('.blt-msg');
    if (bodyEl && msgEl) {
      const reactRow = renderReactions(msgId, msg.reactions);
      msgEl.insertAdjacentElement('afterend', reactRow);
    }

    const body      = card.querySelector('.blt-body');
    const form      = body.querySelector('.blt-reply-form');
    const rName     = body.querySelector('.blt-rname');
    const rMsg      = body.querySelector('.blt-rmsg');
    const repliesEl = body.querySelector('.blt-replies');

    // Sync placeholder
    const syncPh = () => {
      rName.placeholder = t('bulletin_name_ph');
      rMsg.placeholder  = t('bulletin_reply_ph');
      // Also sync all visible action labels in this card
      const replyLbl  = card.querySelector('.blt-reply-label');
      const deleteLbl = card.querySelector('.blt-delete-label');
      const sendLbl   = card.querySelector('.blt-send-label');
      const cancelLbl = card.querySelector('.blt-cancel-label');
      if (replyLbl)  replyLbl.textContent  = t('bulletin_btn_reply');
      if (deleteLbl) deleteLbl.textContent = t('bulletin_btn_delete');
      if (sendLbl)   sendLbl.textContent   = t('bulletin_btn_send');
      if (cancelLbl) cancelLbl.textContent = t('bulletin_btn_cancel');
    };
    syncPh();
    document.addEventListener('zanpw:langChanged', syncPh);

    // Pre-fill reply name with saved username
    const _uname = localStorage.getItem('zanpw_username') || '';
    if (_uname) {
      rName.value    = _uname;
      rName.readOnly = true;
      rName.style.opacity = '0.72';
    }

    // Render existing replies
    if (msg.replies) {
      Object.entries(msg.replies)
        .sort(([,a],[,b]) => a.time - b.time)
        .forEach(([rId, r]) => repliesEl.appendChild(renderReplyCard(r, rId, msgId)));
    }

    // Toggle reply form
    body.querySelector('.blt-reply-btn').addEventListener('click', () => {
      const open = form.style.display !== 'none';
      form.style.display = open ? 'none' : 'block';
      if (!open) rName.focus();
    });

    // Cancel reply
    body.querySelector('.blt-cancel-reply').addEventListener('click', () => {
      form.style.display = 'none';
      // Kembalikan nama ke username tersimpan (jangan dikosongkan)
      const _saved = localStorage.getItem('zanpw_username') || '';
      if (_saved) rName.value = _saved;
      rMsg.value = '';
    });

    // Send reply
    let _replySending = false;
    body.querySelector('.blt-send-reply').addEventListener('click', async () => {
      const btn     = body.querySelector('.blt-send-reply');
      const name    = rName.value.trim();
      const message = rMsg.value.trim();
      if (!name || !message) return;
      if (containsBadWord(name) || containsBadWord(message)) {
        showStatus(t('bulletin_badword'), 'error'); return;
      }
      if (_replySending) return; // cegah spam klik
      _replySending = true;
      btn.disabled = true; btn.style.opacity = '.6';
      const token = genToken();
      try {
        const res  = await fetch(`${BASE}/${msgId}/replies.json`, {
          method:'POST', headers:{'Content-Type':'application/json'},
          body: JSON.stringify({ name, message, time: Date.now(), ownerToken: token })
        });
        const json = await res.json();
        const replyId = json.name;
        saveToken(`${msgId}__r__${replyId}`, token);
        // Simpan token dulu supaya tombol hapus muncul saat SSE render card
        saveToken(`${msgId}__r__${replyId}`, token);
        // Tutup form reply setelah kirim (lebih natural)
        form.style.display = 'none';
        rMsg.value = '';
        const _savedAfterSend = localStorage.getItem('zanpw_username') || '';
        if (_savedAfterSend) rName.value = _savedAfterSend;
        // Kirim notifikasi ke pemilik pesan asli (fire and forget)
        fetch(`${BASE}/${msgId}/notifs.json`, {
          method:'POST', headers:{'Content-Type':'application/json'},
          body: JSON.stringify({ from: name, preview: message.slice(0,60), time: Date.now(), read: false })
        }).catch(() => {});

      } catch(e) { console.warn('[Bulletin] Reply error:', e); }
      finally {
        _replySending = false;
        btn.disabled = false;
        btn.style.opacity = '';
      }
    });

    // Delete message
    if (owner) {
      body.querySelector('.blt-delete-btn').addEventListener('click', async () => {
        const ok = await ZanModal.open({
          icon: '🗑️',
          title: t('bulletin_del_msg_title'),
          desc: t('bulletin_del_msg_desc'),
          confirmText: t('bulletin_del_msg_ok'),
          cancelText: t('bulletin_del_cancel')
        });
        if (!ok) return;
        try {
          const resp = await fetch(`${BASE}/${msgId}.json`, { method:'DELETE' });
          if (resp.ok || resp.status === 200) {
            card.style.transition = 'opacity .3s, transform .3s';
            card.style.opacity = '0'; card.style.transform = 'scale(.96)';
            setTimeout(() => {
              card.remove();
              updateCount();
              if (!listEl.querySelector('.blt-card')) emptyEl.style.display = 'flex';
            }, 320);
          }
        } catch(e) {
          await ZanModal.open({ icon:'⚠️', title: t('bulletin_del_fail_title'), desc: t('bulletin_del_fail_desc'), confirmText: t('bulletin_del_fail_ok'), cancelText:'', type:'info' });
        }
      });
    }

    return card;
  }

  /* ═════════════════════════════════════════════════════
     LOAD PESAN + REALTIME COUNTER
  ═════════════════════════════════════════════════════ */
  const countEl = document.getElementById('bulletinCount');

  // Sembunyikan tombol Reset Pesanku permanen
  const clearAllBtn = document.getElementById('bulletinClearAll');
  if (clearAllBtn) clearAllBtn.style.display = 'none';

  // Update counter dari jumlah card di DOM (realtime setiap hapus/tambah)
  function updateCount() {
    if (!countEl) return;
    const msgs    = listEl.querySelectorAll('.blt-card').length;
    const replies = listEl.querySelectorAll('.blt-reply-card').length;
    const total   = msgs + replies;
    if (total === 0) { countEl.textContent = ''; return; }
    const _lang     = typeof currentLang !== 'undefined' ? currentLang : 'id';
    const msgWord   = _lang === 'en'
      ? (msgs === 1 ? 'message' : 'messages')
      : 'pesan';
    const replyWord = _lang === 'en'
      ? (replies === 1 ? 'reply' : 'replies')
      : 'balasan';
    countEl.textContent = replies > 0
      ? `${msgs} ${msgWord} · ${replies} ${replyWord}`
      : `${msgs} ${msgWord}`;
  }

  async function loadMessages() {
    loadingEl.style.display = 'flex';
    listEl.innerHTML = '';
    _knownIds.clear();
    emptyEl.style.display = 'none';
    if (countEl) countEl.textContent = '';
    try {
      const data = await fetch(ENDPOINT).then(r => r.json());
      loadingEl.style.display = 'none';
      if (!data || Object.keys(data).length === 0) {
        emptyEl.style.display = 'flex'; return;
      }
      const entries = Object.entries(data).sort(([,a],[,b]) => b.time - a.time);
      entries.forEach(([id, msg]) => {
        listEl.appendChild(renderCard(id, msg));
        _knownIds.add(id);
      });
      updateCount();
    } catch(e) {
      loadingEl.style.display = 'none';
      emptyEl.style.display = 'flex';
    }
  }

  /* ═════════════════════════════════════════════════════
     KIRIM PESAN BARU
  ═════════════════════════════════════════════════════ */
  async function submitMessage() {
    const name    = nameInput.value.trim();
    const message = msgInput.value.trim();
    if (!name || !message)                              { showStatus(t('bulletin_fill'), 'error'); return; }
    if (containsBadWord(name) || containsBadWord(message)) { showStatus(t('bulletin_badword'), 'error'); return; }

    submitBtn.disabled = true; submitBtn.style.opacity = '.6';
    const token = genToken();
    try {
      const res  = await fetch(ENDPOINT, {
        method:'POST', headers:{'Content-Type':'application/json'},
        body: JSON.stringify({ name, message, time: Date.now(), ownerToken: token })
      });
      const json = await res.json();
      saveToken(json.name, token);
      // Restore username (don't clear) if a saved username is present
      if (!_savedUsername) nameInput.value = '';
      msgInput.value = '';
      charCountEl.textContent = '0';
      showStatus(t('bulletin_success'), 'success');
      // SSE will handle inserting the new card; no need for full reload
      // but do a one-time reload so the card's ownerToken is validated
      await loadMessages();
    } catch(e) { showStatus(t('bulletin_error'), 'error'); }
    finally { submitBtn.disabled = false; submitBtn.style.opacity = ''; }
  }

  function showStatus(msg, type) {
    statusEl.textContent   = msg;
    statusEl.className     = `bulletin-status bulletin-status--${type}`;
    statusEl.style.display = 'block';
    setTimeout(() => { statusEl.style.display = 'none'; }, 4000);
  }

  submitBtn.addEventListener('click', submitMessage);
  msgInput.addEventListener('keydown', e => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); submitMessage(); }
  });

  // ── Reset semua pesan (jalankan sekali dari console browser) ──
  // Ketik di console: window.resetBulletinBoard()
  window.resetBulletinBoard = async function() {
    const ok = await ZanModal.open({
      icon: '⚠️',
      title: 'Hapus SEMUA Pesan?',
      desc: 'Seluruh pesan di papan akan dihapus permanen. Ini tidak bisa dibatalkan!',
      confirmText: 'Ya, Hapus Semua!',
      cancelText: 'Batal'
    });
    if (!ok) return;
    await fetch(ENDPOINT, { method: 'DELETE' });
    await loadMessages();
    console.log('[Bulletin] Semua pesan berhasil dihapus.');
  };

  loadMessages();

  /* ═════════════════════════════════════════════════════════
     REPLY NOTIFICATION SYSTEM
     - Setiap 15 detik, cek Firebase untuk notif baru
     - Hanya tampilkan untuk pesan yang token-nya ada di localStorage
     - Toast WA-style: avatar + nama pengirim + preview pesan
     - Setelah ditampilkan, tandai sebagai read di Firebase
  ═════════════════════════════════════════════════════════ */
  const NOTIF_SEEN_KEY = 'zanpw_blt_seen_notifs';

  function getSeenNotifs() {
    try { return JSON.parse(localStorage.getItem(NOTIF_SEEN_KEY) || '{}'); } catch { return {}; }
  }
  function markNotifSeen(notifId) {
    const s = getSeenNotifs(); s[notifId] = true;
    localStorage.setItem(NOTIF_SEEN_KEY, JSON.stringify(s));
  }

  function showReplyNotif(from, preview, notifId) {
    // Hapus toast lama kalau ada
    document.querySelectorAll('.blt-reply-notif-toast').forEach(el => el.remove());

    const initial = (from || '?').charAt(0).toUpperCase();
    const color   = avatarColor(from);
    const toast   = document.createElement('div');
    toast.className = 'blt-reply-notif-toast';
    toast.innerHTML = `
      <div class="brn-avatar" style="background:${color}">${initial}</div>
      <div class="brn-body">
        <div class="brn-header">
          <span class="brn-name">${escHtml(from)}</span>
          <span class="brn-label">membalas pesanmu</span>
        </div>
        <p class="brn-preview">${escHtml(preview)}${preview.length >= 60 ? '…' : ''}</p>
      </div>
      <button class="brn-close" aria-label="tutup">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 6 6 18M6 6l12 12"/></svg>
      </button>
    `;

    // Klik toast → scroll ke section bulletin
    toast.addEventListener('click', (e) => {
      if (e.target.closest('.brn-close')) return;
      document.getElementById('bulletin')?.scrollIntoView({ behavior:'smooth', block:'start' });
      toast.classList.remove('brn-show');
      setTimeout(() => toast.remove(), 400);
    });

    // Tombol close
    toast.querySelector('.brn-close').addEventListener('click', () => {
      toast.classList.remove('brn-show');
      setTimeout(() => toast.remove(), 400);
    });

    document.body.appendChild(toast);
    // Trigger animation
    requestAnimationFrame(() => requestAnimationFrame(() => toast.classList.add('brn-show')));
    // Auto dismiss setelah 6 detik
    setTimeout(() => {
      toast.classList.remove('brn-show');
      setTimeout(() => toast.remove(), 400);
    }, 6000);

    markNotifSeen(notifId);
  }

  async function checkReplyNotifs() {
    const tokens = getTokens();
    const seen   = getSeenNotifs();
    // Ambil semua msgId yang dimiliki user (bukan reply token)
    const myMsgIds = Object.keys(tokens).filter(k => !k.includes('__r__'));
    if (!myMsgIds.length) return;

    for (const msgId of myMsgIds) {
      try {
        const res  = await fetch(`${BASE}/${msgId}/notifs.json`);
        if (!res.ok) continue;
        const notifs = await res.json();
        if (!notifs || typeof notifs !== 'object') continue;
        // Cek notif yang belum pernah ditampilkan
        for (const [notifId, notif] of Object.entries(notifs)) {
          const uid = `${msgId}__n__${notifId}`;
          if (seen[uid]) continue;
          // Tampilkan toast
          showReplyNotif(notif.from || '?', notif.preview || '...', uid);
          // Cukup tampilkan satu per check agar tidak spam
          return;
        }
      } catch(e) { /* silent */ }
    }
  }

  // Cek saat pertama kali load (delay 3 detik biar halaman settle)
  setTimeout(checkReplyNotifs, 3000);
  // Lalu cek tiap 15 detik
  setInterval(checkReplyNotifs, 15000);
})();


/* ═══════════════════════════════════════════════════════════


/* ═══════════════════════════════════════════════════════════
   USERNAME SYSTEM  (v2)
   ─────────────────────────────────────────────────────────
   • First visit  → popup wajib isi username (tanpa X)
   • Username terkunci 3 hari setelah disimpan
   • Setelah 7 hari → tombol "Ganti" aktif, bisa ubah
   • Popup ganti username sama modal, tapi ada X untuk batal
   • Chip username tampil di atas form papan pesan
   ═══════════════════════════════════════════════════════════ */
(function initUsernameSystem() {
  const UNAME_KEY    = 'zanpw_username';
  const UNAME_TS_KEY = 'zanpw_username_ts';   // timestamp saat disimpan
  const USERID_KEY   = 'zanpw_userid';
  const FIREBASE_URL = 'https://personalweb-zan-default-rtdb.asia-southeast1.firebasedatabase.app';
  const LOCK_MS      = 3 * 24 * 60 * 60 * 1000; // 3 hari dalam ms
  const BAD_WORDS_U  = ['anjing','bangsat','kontol','memek','ngentot','jancok',
                        'fuck','shit','bitch','asshole','bastard','cunt'];

  /* ── Helpers ─────────────────────────────────────── */
  function getOrCreateUserId() {
    let id = localStorage.getItem(USERID_KEY);
    if (!id) {
      id = 'u' + Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
      localStorage.setItem(USERID_KEY, id);
    }
    return id;
  }
  window._zanpwGetUserId = getOrCreateUserId;

  function getSavedUsername()  { return localStorage.getItem(UNAME_KEY) || ''; }
  function getSavedTs()        { return parseInt(localStorage.getItem(UNAME_TS_KEY) || '0', 10); }
  function isLocked()          { return getSavedUsername() && (Date.now() - getSavedTs() < LOCK_MS); }
  function daysUntilUnlock()   {
    const remaining = LOCK_MS - (Date.now() - getSavedTs());
    return Math.ceil(remaining / (24 * 60 * 60 * 1000));
  }

  async function saveToFirebase(username) {
    const userId = getOrCreateUserId();
    try {
      // JANGAN set online:true di sini — status online hanya boleh di-set
      // oleh _zanpwDoFirstOnline (dipicu setelah broadcast + delay toast)
      await fetch(`${FIREBASE_URL}/users/${userId}.json`, {
        method : 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body   : JSON.stringify({ username, updatedAt: Date.now(), online: false, lastSeen: Date.now() })
      });
    } catch(e) { /* silent */ }
  }

  /* ── Presence tracking — tandai user online/offline ── */
  function initPresence() {
    // Dev mode aktif — jangan set online, akun dev tidak boleh muncul di panel
    if (sessionStorage.getItem('zanpw_dev_session') === '1') return;
    const userId   = getOrCreateUserId();
    const username = localStorage.getItem('zanpw_username') || '';
    if (!username) return;

    const PRESENCE_URL = `${FIREBASE_URL}/users/${userId}.json`;

    function setOnline(onDone) {
      fetch(PRESENCE_URL, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ online: true, lastSeen: Date.now(), username })
      }).then(() => { if (onDone) onDone(); })
        .catch(() => { if (onDone) onDone(); });
    }

    function setOffline() {
      // Fetch keepalive — request tetap jalan meski tab ditutup
      // Pakai PUT agar kompatibel dengan sendBeacon Firebase
      const payload = JSON.stringify({ online: false, lastSeen: Date.now(), username });
      fetch(PRESENCE_URL, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: payload,
        keepalive: true
      }).catch(() => {});
    }

    // setOnline pertama TIDAK langsung dipanggil di sini.
    // Akan dipanggil oleh _broadcastUserJoined tepat saat data online
    // ditulis ke Firebase — momen yang sama ketika toast "user online"
    // muncul di layar pengunjung lain.
    // Simpan referensi agar bisa dipanggil dari luar.
    // _zanpwDoFirstOnline dipanggil oleh _broadcastUserJoined setelah
    // data masuk Firebase DAN delay 2100ms berlalu (= saat toast muncul
    // di layar pengunjung lain). Baru di titik ini user boleh online.
    let _heartbeatStarted = false;
    let _presTimer = null;

    window._zanpwDoFirstOnline = function() {
      if (_heartbeatStarted) return;
      _heartbeatStarted = true;
      window._zanpwDoFirstOnline = null;
      setOnline();
      _presTimer = setInterval(setOnline, 10000);
      window._zanpwPresTimer = _presTimer; // expose untuk bisa di-clear dari luar
    };

    // Expose fungsi stop presence — dipanggil saat dev login
    window._zanpwStopPresence = function() {
      _heartbeatStarted = false;
      if (_presTimer) { clearInterval(_presTimer); _presTimer = null; }
      window._zanpwPresTimer = null;
      window._zanpwDoFirstOnline = null;
    };

    let _offlineFired = false;
    function _doOffline() {
      if (_offlineFired) return;
      _offlineFired = true;
      if (_presTimer) clearInterval(_presTimer);
      setOffline();
    }
    window.addEventListener('beforeunload', _doOffline);
    window.addEventListener('pagehide', _doOffline);

    document.addEventListener('visibilitychange', () => {
      if (!document.hidden && _heartbeatStarted) {
        _offlineFired = false;
        setOnline();
      }
    });
  }

  // Jalankan presence setelah username tersimpan
  window.addEventListener('zanpw:usernameChanged', () => setTimeout(initPresence, 500));

  // Kalau sudah punya username saat load → cek dulu apakah akun sudah dihapus dev
  const _existingUname = localStorage.getItem('zanpw_username');
  if (_existingUname) {
    setTimeout(async () => {
      const _userId = localStorage.getItem(USERID_KEY);
      if (_userId) {
        try {
          const _delRes = await fetch(`${FIREBASE_URL}/deleted_users/${_userId}.json`);
          const _delData = await _delRes.json();
          if (_delData && _delData.deletedAt) {
            // Akun ini sudah dihapus oleh dev — bersihkan localStorage saja
            // Blacklist /deleted_users TIDAK dihapus agar tidak bisa re-register
            localStorage.removeItem(UNAME_KEY);
            localStorage.removeItem(UNAME_TS_KEY);
            localStorage.removeItem(USERID_KEY);
            localStorage.removeItem('zanpw_blt_tokens');
            localStorage.removeItem('zanpw_blt_seen_notifs');
            window.location.reload();
            return;
          }
        } catch(e) { /* silent — lanjut normal */ }
      }
      saveToFirebase(_existingUname); // sync user lama ke /users
      initPresence();
    }, 1500);
  }

  function avatarColorFor(name) {
    const c = ['#6366f1','#ec4899','#f59e0b','#10b981','#3b82f6','#8b5cf6','#ef4444','#14b8a6'];
    return c[(name||'?').charCodeAt(0) % c.length];
  }

  /* ── DOM refs ─────────────────────────────────────── */
  const overlay    = document.getElementById('unameOverlay');
  const inputEl    = document.getElementById('unameInput');
  const btnEl      = document.getElementById('unameBtn');
  const btnLabel   = document.getElementById('unameBtnLabel');
  const noteEl     = document.getElementById('unameNote');
  const closeBtnEl = document.getElementById('unameCloseBtn');
  const titleEl    = document.getElementById('unameModalTitle');
  const subEl      = document.getElementById('unameModalSub');
  const waveEl     = document.getElementById('unameWaveEmoji');
  if (!overlay || !inputEl || !btnEl) return;

  /* ── Bulletin chip DOM refs ──────────────────────── */
  const chipRow        = document.getElementById('bltUserChipRow');
  const chipAvatar     = document.getElementById('bltUserChipAvatar');
  const chipName       = document.getElementById('bltUserChipName');
  const changeBtn      = document.getElementById('bltChangeUnameBtn');
  const changeBtnLabel = document.getElementById('bltChangeUnameBtnLabel');

  /* ── Update the bulletin chip display ───────────── */
  function updateChip() {
    const uname = getSavedUsername();
    if (!chipRow) return;
    if (!uname) { chipRow.style.display = 'none'; return; }

    chipRow.style.display = '';
    if (chipAvatar) {
      chipAvatar.textContent    = uname.charAt(0).toUpperCase();
      chipAvatar.style.background = avatarColorFor(uname);
    }
    if (chipName) chipName.textContent = uname;

    // Also keep hidden input in sync (used by submitMessage)
    const bltName = document.getElementById('bulletinName');
    if (bltName) bltName.value = uname;

    if (changeBtn && changeBtnLabel) {
      if (isLocked()) {
        changeBtn.classList.add('locked');
        const days = daysUntilUnlock();
        changeBtnLabel.textContent = (translations[currentLang]?.uname_change_btn_locked || 'Ganti ({days} hari lagi)').replace('{days}', days);
        changeBtn.title = (translations[currentLang]?.uname_change_title_locked || 'Username terkunci. Bisa diubah dalam {days} hari.').replace('{days}', days);
      } else {
        changeBtn.classList.remove('locked');
        changeBtnLabel.textContent = translations[currentLang]?.uname_change_btn || 'Ganti';
        changeBtn.title = translations[currentLang]?.uname_change_title || 'Ganti Username';
      }
    }

    // Remove cooldown chip if already there
    chipRow.parentElement.querySelectorAll('.blt-cooldown-chip').forEach(el => el.remove());
    if (isLocked()) {
      const chip = document.createElement('span');
      chip.className   = 'blt-cooldown-chip';
      chip.textContent = (translations[currentLang]?.uname_cooldown_chip || '🔒 Dapat diganti dalam {days} hari').replace('{days}', daysUntilUnlock());
      chipRow.insertAdjacentElement('afterend', chip);
    }
  }

  /* ── Open popup in "change" mode ─────────────────── */
  function openChangeMode() {
    if (isLocked()) return;
    if (titleEl)  titleEl.textContent = translations[currentLang]?.uname_change_title || 'Ganti Username';
    if (subEl)    subEl.textContent   = translations[currentLang]?.uname_change_sub || 'Masukkan username barumu. Username lama akan digantikan.';
    if (waveEl)   waveEl.textContent  = '✏️';
    if (btnLabel) btnLabel.textContent = 'Simpan Username Baru';
    inputEl.value   = getSavedUsername();
    inputEl.select();
    noteEl.textContent = '';
    noteEl.className   = 'uname-note';
    // Show X close button (can dismiss without saving)
    if (closeBtnEl) closeBtnEl.style.display = 'flex';
    overlay.classList.add('active');
    setTimeout(() => inputEl.focus(), 420);
  }

  /* ── Close popup without saving ─────────────────── */
  function closePopup() {
    overlay.classList.remove('active');
    noteEl.textContent = '';
    // reset modal to default first-visit state for next time
    if (titleEl)  titleEl.textContent  = 'Hai, siapa namamu?';
    if (subEl)    subEl.textContent    = 'Username-mu akan muncul saat kamu kirim pesan di papan pesan!';
    if (waveEl)   waveEl.textContent   = '👋';
    if (btnLabel) btnLabel.textContent = 'Lanjut Masuk';
    if (closeBtnEl) closeBtnEl.style.display = 'none';
  }

  /* ── Submit / save handler ───────────────────────── */
  async function doSubmit() {
    const val = inputEl.value.trim();
    if (!val) {
      noteEl.textContent = 'Username tidak boleh kosong!';
      noteEl.className   = 'uname-note error';
      inputEl.focus(); return;
    }
    if (val.length < 2) {
      noteEl.textContent = 'Minimal 2 karakter ya!';
      noteEl.className   = 'uname-note error'; return;
    }
    if (BAD_WORDS_U.some(w => val.toLowerCase().includes(w))) {
      noteEl.textContent = 'Username mengandung kata tidak pantas 🚫';
      noteEl.className   = 'uname-note error'; return;
    }
    if (val === getSavedUsername()) {
      // Same as before — just close
      closePopup();
      if (typeof window._zanpwUnameCallback === 'function') {
        const cb = window._zanpwUnameCallback;
        window._zanpwUnameCallback = null;
        cb();
      }
      return;
    }

    noteEl.textContent = 'Menyimpan...';
    noteEl.className   = 'uname-note info';
    btnEl.disabled     = true;

    localStorage.setItem(UNAME_KEY, val);
    localStorage.setItem(UNAME_TS_KEY, Date.now().toString());
    await saveToFirebase(val);

    updateChip();
    document.dispatchEvent(new CustomEvent('zanpw:usernameChanged', { detail: val }));
    closePopup();
    btnEl.disabled = false;

    // Fire pending enterSite callback (first visit only)
    if (typeof window._zanpwUnameCallback === 'function') {
      const cb = window._zanpwUnameCallback;
      window._zanpwUnameCallback = null;
      cb();
    }
  }

  /* ── Event listeners ─────────────────────────────── */
  btnEl.addEventListener('click', doSubmit);
  inputEl.addEventListener('keydown', e => { if (e.key === 'Enter') doSubmit(); });
  if (closeBtnEl) closeBtnEl.addEventListener('click', closePopup);

  // Change button in bulletin chip
  if (changeBtn) changeBtn.addEventListener('click', () => {
    if (!isLocked()) openChangeMode();
  });

  // Delete account button
  const deleteAccountBtn = document.getElementById('bltDeleteAccountBtn');
  if (deleteAccountBtn) {
    deleteAccountBtn.addEventListener('click', async () => {
      const ok = await ZanModal.open({
        icon: '🗑️',
        title: 'Hapus Akun?',
        desc: 'Akunmu, semua pesanmu, dan semua balasan pesanmu akan dihapus permanen. Tindakan ini tidak bisa dibatalkan!',
        confirmText: 'Ya, Hapus Semua',
        cancelText: 'Batal',
        type: 'danger'
      });
      if (!ok) return;

      const userId = localStorage.getItem(USERID_KEY);
      const tokens = JSON.parse(localStorage.getItem('zanpw_blt_tokens') || '{}');

      // Pisahkan token pesan dan token reply
      const msgTokens   = Object.entries(tokens).filter(([k]) => !k.includes('__r__'));
      const replyTokens = Object.entries(tokens).filter(([k]) =>  k.includes('__r__'));

      try {
        // Ambil semua pesan dari Firebase
        const res  = await fetch(`${FIREBASE_URL}/bulletin.json`);
        const data = res.ok ? await res.json() : null;

        if (data && typeof data === 'object') {
          for (const [msgId, msg] of Object.entries(data)) {
            if (!msg) continue;

            // Cek apakah pesan ini milik user
            const isMsgOwner = msgTokens.some(([, token]) => token === msg.ownerToken);

            if (isMsgOwner) {
              // Hapus seluruh pesan (termasuk semua reply-nya sekaligus)
              await fetch(`${FIREBASE_URL}/bulletin/${msgId}.json`, { method: 'DELETE' });
            } else if (msg.replies && typeof msg.replies === 'object') {
              // Pesan bukan milik user — cek apakah ada reply milik user
              for (const [replyId, reply] of Object.entries(msg.replies)) {
                if (!reply) continue;
                const isReplyOwner = replyTokens.some(([k, token]) =>
                  k === `${msgId}__r__${replyId}` && token === reply.ownerToken
                );
                if (isReplyOwner) {
                  await fetch(`${FIREBASE_URL}/bulletin/${msgId}/replies/${replyId}.json`, { method: 'DELETE' });
                }
              }
            }
          }
        }

        // Hapus user dari Firebase
        if (userId) {
          await fetch(`${FIREBASE_URL}/users/${userId}.json`, { method: 'DELETE' });
        }

        // Hapus push subscription
        for (const [, token] of msgTokens) {
          const subKey = token.replace(/[.#$[\]]/g, '_');
          await fetch(`${FIREBASE_URL}/push_subscriptions/${subKey}.json`, { method: 'DELETE' });
        }

      } catch(e) { console.warn('[DeleteAccount] Error:', e); }

      // Hapus semua data lokal
      localStorage.removeItem(UNAME_KEY);
      localStorage.removeItem(UNAME_TS_KEY);
      localStorage.removeItem(USERID_KEY);
      localStorage.removeItem('zanpw_blt_tokens');
      localStorage.removeItem('zanpw_blt_seen_notifs');

      // Reload halaman → user akan diminta buat username baru
      window.location.reload();
    });
  }

  /* ── Wave emoji animation ─────────────────────────── */
  if (waveEl) {
    const waves = ['👋','✋','🖐️','👋'];
    let wi = 0;
    setInterval(() => {
      // Only animate when showing the welcome version
      if (waveEl.textContent !== '✏️') waveEl.textContent = waves[wi++ % waves.length];
    }, 1400);
  }

  /* ── Show close button on popup only if user already has a name ──
     (i.e. this is a "change" session triggered from chip, not first visit) */
  // The enterSite gate sets _zanpwUnameCallback — if it's set AND username is
  // already present, that means re-entry (shouldn't happen, but guard anyway)

  /* ── On page load: init chip ─────────────────────── */
  updateChip();

  /* ── Expose helper for bulletin board init ────────── */
  window._zanpwUpdateChip = updateChip;
})();


/* ═══════════════════════════════════════════════════════════


/* ═══════════════════════════════════════════════════════════

/* ═══════════════════════════════════════════════════════════
   DEVELOPER SYSTEM v2 — Zan's Personal Web
   ─────────────────────────────────────────────────────────
   • Login username + password khusus
   • Badge nama emas bergerak di papan pesan
   • Hapus pesan siapapun
   • Blokir user dengan durasi & alasan custom
   • Kirim pengumuman realtime ke semua pengunjung
   • Panel ikut tema web (dark/light)
   ═══════════════════════════════════════════════════════════ */
(function initDevSystem() {
  const FIREBASE_URL  = 'https://personalweb-zan-default-rtdb.asia-southeast1.firebasedatabase.app';
  const DEV_PASSWORD  = 'f7831';
  const DEV_USERNAME  = 'King Zann';
  const DEV_LOGIN_ID  = 'admin'; // username yang diketik saat login (beda dari display name)
  const DEV_KEY       = 'zanpw_dev_session';
  const ANNOUNCE_PATH = `${FIREBASE_URL}/announcements`;
  const BLOCKED_PATH      = `${FIREBASE_URL}/blocked_users`;
  const FIREBASE_BULLETIN  = `${FIREBASE_URL}/bulletin`;
  const BAN_ANNOUNCE_PATH  = `${FIREBASE_URL}/ban_announcements`;

  function isDevLoggedIn() {
    return sessionStorage.getItem(DEV_KEY) === '1';
  }

  /* ── Helper: inline toast feedback di dalam dev panel ── */
  let _devToastTimer = null;
  function _showDevToast(containerEl, msg, type = 'success') {
    // Hapus toast lama
    document.querySelectorAll('.dev-inline-toast').forEach(e => e.remove());
    clearTimeout(_devToastTimer);
    const t = document.createElement('div');
    t.className = `dev-inline-toast dit-${type}`;
    t.textContent = msg;
    document.body.appendChild(t);
    requestAnimationFrame(() => requestAnimationFrame(() => t.classList.add('dit-show')));
    _devToastTimer = setTimeout(() => {
      t.classList.remove('dit-show');
      setTimeout(() => t.remove(), 300);
    }, 2800);
  }

  /* ── Auto-logout dev saat tab ditutup ── */
  // Guard agar cleanup tidak jalan dua kali (beforeunload + pagehide keduanya bisa trigger)
  let _devLogoutFired = false;

  function _devAutoLogoutCleanup() {
    if (_devLogoutFired) return;
    if (!isDevLoggedIn()) return;
    _devLogoutFired = true;

    // Restore username asli
    const prevUname = sessionStorage.getItem('zanpw_prev_username') || '';
    if (prevUname) localStorage.setItem('zanpw_username', prevUname);
    else localStorage.removeItem('zanpw_username');

    // Bersihkan session DEV
    sessionStorage.removeItem(DEV_KEY);
    sessionStorage.removeItem('zanpw_prev_username');

    // Set dev_status offline di Firebase — pakai fetch + keepalive:true
    // (sendBeacon tidak support PUT dengan body JSON di Firebase REST API)
    const FIREBASE_URL_LOCAL = 'https://personalweb-zan-default-rtdb.asia-southeast1.firebasedatabase.app';
    fetch(`${FIREBASE_URL_LOCAL}/dev_status.json`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ online: false, time: Date.now() }),
      keepalive: true   // ← key: request tetap jalan meski tab sudah ditutup
    }).catch(() => {});
  }

  window.addEventListener('beforeunload', _devAutoLogoutCleanup);
  // pagehide lebih reliable di iOS Safari & mobile Chrome
  window.addEventListener('pagehide', _devAutoLogoutCleanup);

  // Broadcast offline saat user tutup tab
  window.addEventListener('beforeunload', () => {
    const _uname = localStorage.getItem('zanpw_username') || '';
    if (window._broadcastUserLeft) window._broadcastUserLeft(_uname);
  });

  /* ── Preload SFX saat halaman load supaya zero-delay saat diputar ── */
  const _sfxOnline  = new Audio('files/walkie.mp3');
  const _sfxOffline = new Audio('files/walkie.mp3');
  _sfxOnline.preload  = 'auto';
  _sfxOffline.preload = 'auto';

  // Mobile: unlock audio saat pertama kali ada interaksi user
  let _sfxUnlocked = false;
  function _unlockAudio() {
    if (_sfxUnlocked) return;
    _sfxUnlocked = true;
    [_sfxOnline, _sfxOffline].forEach(a => {
      a.play().then(() => { a.pause(); a.currentTime = 0; }).catch(() => {});
    });
  }
  ['touchstart', 'touchend', 'click', 'keydown'].forEach(ev =>
    document.addEventListener(ev, _unlockAudio, { once: true, passive: true })
  );

  /* ══════════════════════════════════════════════════════
     CSS
  ══════════════════════════════════════════════════════ */
  const devStyle = document.createElement('style');
  devStyle.textContent = `
    /* Font dev panel pakai font web */
    .dev-panel-overlay *, .dev-login-overlay *, .dev-announce-popup * {
      font-family: 'Outfit', sans-serif;
    }

    /* ── Golden badge ── */
    .blt-name.dev-badge {
      background: linear-gradient(90deg, #ff4444, #ff6b6b, #ff0000, #ff4444);
      background-size: 300% auto;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      animation: devRedShimmer 2s linear infinite, devFloat 3s ease-in-out infinite;
      font-weight: 800 !important;
      position: relative;
      filter: drop-shadow(0 0 6px rgba(255,68,68,0.8));
      display: inline-block;
    }
    .blt-name.dev-badge::after {
      content: ' 👑';
      -webkit-text-fill-color: initial;
      font-size: 0.75em;
      animation: devFloat 3s ease-in-out infinite;
      display: inline-block;
    }
    @keyframes devRedShimmer {
      0%   { background-position: 0% center; }
      100% { background-position: 300% center; }
    }
    @keyframes devFloat {
      0%, 100% { transform: translateY(0px); }
      50%       { transform: translateY(-3px); }
    }

    /* ── Dev button ── */
    .dev-panel-btn {
      position: fixed; bottom: 24px; left: 24px; z-index: 9000;
      background: var(--bg-2);
      border: 1px solid var(--border-2);
      color: var(--text); border-radius: 50px;
      padding: 10px 18px; font-size: 0.82rem; font-weight: 800;
      cursor: pointer; font-family: 'Outfit', sans-serif;
      box-shadow: 0 4px 20px rgba(0,0,0,0.2);
      display: flex; align-items: center; gap: 6px;
      opacity: 0; transform: translateY(12px);
      animation: devBtnFadeIn 0.5s cubic-bezier(0.22,1,0.36,1) forwards;
      transition: transform 0.2s, box-shadow 0.2s, background 0.2s;
    }
    @keyframes devBtnFadeIn {
      to { opacity: 1; transform: translateY(0); }
    }
    .dev-panel-btn:hover {
      transform: translateY(-2px);
      background: var(--bg-3);
      border-color: var(--accent);
      box-shadow: 0 8px 28px rgba(0,0,0,0.2);
    }

    /* ── Overlay backdrop ── */
    .dev-overlay-backdrop {
      position: fixed; inset: 0; z-index: 9998;
      background: rgba(0,0,0,0.55);
      backdrop-filter: blur(12px);
      display: flex; align-items: center; justify-content: center;
      opacity: 0; visibility: hidden;
      transition: opacity 0.3s, visibility 0.3s;
    }
    .dev-overlay-backdrop.active { opacity: 1; visibility: visible; }

    /* ── Base card (panel + login share this) ── */
    .dev-card {
      background: var(--bg-2);
      border: 1px solid var(--border-2);
      border-radius: 22px;
      box-shadow: 0 24px 64px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05);
      transform: translateY(24px) scale(0.96);
      transition: transform 0.4s cubic-bezier(0.22,1,0.36,1), opacity 0.35s ease;
      opacity: 0;
      position: relative;
    }
    .dev-overlay-backdrop.active .dev-card {
      transform: translateY(0) scale(1);
      opacity: 1;
    }

    /* ── Dev Panel ── */
    .dev-panel-card {
      width: min(440px, 93vw);
      padding: 26px 24px 22px;
      max-height: 90vh;
      overflow-y: auto;
    }
    .dev-panel-header {
      display: flex; align-items: center; justify-content: space-between;
      margin-bottom: 20px;
    }
    .dev-panel-title {
      font-size: 1rem; font-weight: 800; color: var(--text);
      display: flex; align-items: center; gap: 8px; margin: 0;
    }
    .dev-panel-title-gold {
      color: var(--text);
      -webkit-text-fill-color: var(--text);
    }
    .dev-close-btn {
      background: none; border: none;
      color: var(--text-3); cursor: pointer; font-size: 1.1rem;
      width: 28px; height: 28px; border-radius: 50%;
      display: flex; align-items: center; justify-content: center;
      transition: background 0.2s, color 0.2s;
    }
    .dev-close-btn:hover { background: var(--bg-3); color: var(--text); }

    /* ── Section label ── */
    .dev-section-label {
      font-size: 0.72rem; font-weight: 700; letter-spacing: 1.5px;
      text-transform: uppercase; color: var(--text-3);
      margin: 0 0 8px; display: block;
    }
    .dev-divider {
      border: none; border-top: 1px solid var(--border);
      margin: 18px 0;
    }

    /* ── Inputs & textarea ── */
    .dev-input, .dev-textarea, .dev-select {
      width: 100%; box-sizing: border-box;
      background: var(--bg-3);
      border: 1px solid var(--border);
      border-radius: 10px; padding: 9px 12px;
      color: var(--text); font-size: 0.84rem;
      font-family: 'Outfit', sans-serif;
      outline: none; transition: border-color 0.2s;
      margin-bottom: 8px;
    }
    .dev-textarea { resize: none; }
    .dev-select { cursor: pointer; }
    .dev-input:focus, .dev-textarea:focus, .dev-select:focus {
      border-color: rgba(246,211,101,0.5);
    }

    /* ── Buttons ── */
    .dev-btn-gold {
      width: 100%; background: var(--accent);
      color: var(--bg); border: none; border-radius: 10px;
      padding: 10px; font-size: 0.84rem; font-weight: 800;
      cursor: pointer; font-family: 'Outfit', sans-serif;
      transition: opacity 0.2s, transform 0.15s;
      margin-top: 4px;
    }
    .dev-btn-gold:hover { opacity: 0.85; transform: scale(1.01); }
    .dev-btn-gold:disabled { opacity: 0.4; cursor: not-allowed; transform: none; }
    .dev-btn-danger {
      width: 100%; background: rgba(239,68,68,0.12);
      border: 1px solid rgba(239,68,68,0.3);
      color: #ef4444; border-radius: 10px;
      padding: 9px; font-size: 0.82rem; font-weight: 700;
      cursor: pointer; font-family: 'Outfit', sans-serif;
      transition: background 0.2s, border-color 0.2s;
      margin-top: 4px;
    }
    .dev-btn-danger:hover { background: rgba(239,68,68,0.2); border-color: rgba(239,68,68,0.5); }
    .dev-btn-ghost {
      width: 100%; background: var(--bg-3);
      border: 1px solid var(--border);
      color: var(--text-2); border-radius: 10px;
      padding: 9px; font-size: 0.82rem; font-weight: 600;
      cursor: pointer; font-family: 'Outfit', sans-serif;
      transition: background 0.2s, color 0.2s;
      margin-top: 4px;
    }
    .dev-btn-ghost:hover { background: var(--bg-2); color: var(--text); }

    /* ── Login card ── */
    .dev-login-card {
      width: min(360px, 93vw);
      padding: 28px 24px;
      border-color: var(--border-2) !important;
    }
    .dev-login-title {
      font-size: 1rem; font-weight: 800; margin: 0 0 4px;
      color: var(--text);
    }
    .dev-login-sub { font-size: 0.78rem; color: var(--text-3); margin: 0 0 18px; }
    .dev-login-err {
      font-size: 0.75rem; color: #ef4444;
      margin: 4px 0 0; display: none;
    }

    /* ── Block modal ── */
    .dev-block-card {
      width: min(380px, 93vw);
      padding: 24px;
    }
    .dev-block-title {
      font-size: 0.95rem; font-weight: 800; color: var(--text);
      margin: 0 0 4px; display: flex; align-items: center; gap: 6px;
    }
    .dev-block-target {
      font-size: 0.8rem; color: var(--text-3); margin: 0 0 16px;
    }
    .dev-duration-grid {
      display: grid; grid-template-columns: repeat(3,1fr); gap: 6px;
      margin-bottom: 10px;
    }
    .dev-dur-btn {
      background: var(--bg-3); border: 1px solid var(--border);
      color: var(--text-2); border-radius: 8px; padding: 7px 4px;
      font-size: 0.75rem; font-weight: 600; cursor: pointer;
      font-family: 'Outfit', sans-serif;
      transition: all 0.15s; text-align: center;
    }
    .dev-dur-btn:hover, .dev-dur-btn.selected {
      background: var(--accent-dim);
      border-color: var(--border-2);
      color: var(--accent);
    }

    /* ── Announcement Toast ── */
    /* ── Toast floating + partikel api roket ── */
    @keyframes datFloat {
      0%, 100% { transform: translateX(-50%) translateY(0px); }
      50%       { transform: translateX(-50%) translateY(-7px); }
    }
    @keyframes datParticle {
      0%   { transform: translateY(0) translateX(0) scale(1); opacity: 1; }
      100% { transform: translateY(28px) translateX(var(--dx, 0px)) scale(0); opacity: 0; }
    }
    .dat-fire-wrap {
      position: absolute;
      bottom: -6px;
      left: 50%;
      transform: translateX(-50%);
      width: 70%;
      height: 0;
      pointer-events: none;
      display: flex;
      justify-content: center;
      gap: 0;
    }
    .dat-spark {
      position: absolute;
      bottom: 0;
      width: 7px;
      height: 7px;
      border-radius: 50%;
      opacity: 0;
      animation: datParticle var(--dur, 0.6s) ease-out var(--delay, 0s) infinite;
    }

    .dev-ann-toast {
      position: fixed;
      top: calc(var(--nav-height, 56px) + 16px);
      left: 50%;
      transform: translateX(-50%) translateY(-160%) translateZ(0);
      z-index: 999999;
      background: var(--bg-2, #111);
      border: 1px solid var(--border-2, rgba(255,255,255,0.15));
      border-radius: 20px;
      padding: 12px 16px 15px 14px;
      display: flex;
      align-items: flex-start;
      gap: 11px;
      font-family: 'Outfit', sans-serif;
      box-shadow: 0 12px 48px var(--shadow, rgba(0,0,0,0.4)),
                  0 0 0 1px var(--glass-border, rgba(255,255,255,0.06));
      backdrop-filter: blur(24px);
      -webkit-backdrop-filter: blur(24px);
      transition: transform 0.5s cubic-bezier(0.22,1,0.36,1), opacity 0.55s ease;
      opacity: 0;
      max-width: min(400px, 88vw);
      width: max-content;
      overflow: visible;
      isolation: isolate;
      /* Promosikan ke GPU compositing layer sejak elemen dibuat
         sehingga animasi pertama tidak perlu promote dulu → no jank */
      will-change: transform, opacity, filter;
    }
    .dev-ann-toast.dat-show {
      transform: translateX(-50%) translateY(0);
      opacity: 1;
      animation: datFloat 3s ease-in-out infinite;
    }
    @keyframes datFlyUp {
      0%   {
        transform: translateX(-50%) translateY(0) scaleY(1) scaleX(1);
        filter: blur(0px);
        opacity: 1;
      }
      15%  {
        transform: translateX(-50%) translateY(4px) scaleY(0.92) scaleX(1.04);
        filter: blur(0px);
        opacity: 1;
      }
      100% {
        transform: translateX(-50%) translateY(-260%) scaleY(2.2) scaleX(0.7);
        filter: blur(8px);
        opacity: 0;
      }
    }
    .dev-ann-toast.dat-hide {
      animation: datFlyUp 0.52s cubic-bezier(0.4, 0, 0.2, 1) forwards;
      transition: none;
    }

    .dat-icon-wrap {
      flex-shrink: 0;
      width: 34px; height: 34px;
      border-radius: 10px;
      background: var(--accent-dim, rgba(255,255,255,0.1));
      border: 1px solid var(--border-2, rgba(255,255,255,0.15));
      display: flex; align-items: center; justify-content: center;
      font-size: 1rem;
    }
    .dat-body { display: flex; flex-direction: column; gap: 2px; min-width: 0; flex: 1; }
    .dat-label {
      font-size: 0.65rem; font-weight: 700;
      letter-spacing: 1.4px; text-transform: uppercase;
      color: var(--text-3, #666); line-height: 1;
    }
    .dat-msg {
      font-size: 0.86rem; font-weight: 500;
      color: var(--text, #f5f5f5);
      line-height: 1.5;
      word-break: break-word;
    }
    .dat-progress-wrap {
      position: absolute;
      bottom: 0;
      left: 20px;        /* tidak sampai ujung kiri */
      right: 20px;       /* tidak sampai ujung kanan */
      height: 3px;
      border-radius: 3px;
      overflow: hidden;
      pointer-events: none;
    }
    .dat-progress {
      width: 100%; height: 100%;
      background: var(--accent, #fff);
      opacity: 0.35;
      transform-origin: left;
      transform: scaleX(1);
    }
    .dat-close {
      flex-shrink: 0; align-self: flex-start;
      background: none; border: none;
      color: var(--text-3, #666);
      cursor: pointer;
      width: 20px; height: 20px;
      display: flex; align-items: center; justify-content: center;
      border-radius: 6px;
      transition: background 0.15s, color 0.15s;
      font-size: 0.85rem; line-height: 1;
      padding: 0; margin-top: 1px;
    }
    .dat-close:hover { background: var(--bg-3, #1a1a1a); color: var(--text, #f5f5f5); }

    /* ── Reply section di dalam toast ── */
    .dat-reply-section {
      width: 100%; margin-top: 10px; padding-top: 10px;
      border-top: 1px solid var(--border, rgba(255,255,255,0.08));
      display: flex; flex-direction: column; gap: 8px;
    }
    .dat-reply-list {
      display: flex; flex-direction: column; gap: 5px;
      max-height: 110px; overflow-y: auto;
    }
    .dat-reply-item {
      display: flex; align-items: flex-start; gap: 6px;
      font-size: 0.76rem;
      animation: datReplyIn 0.28s cubic-bezier(0.22,1,0.36,1);
    }
    @keyframes datReplyIn {
      from { opacity:0; transform:translateY(5px); }
      to   { opacity:1; transform:translateY(0); }
    }
    .dat-reply-avatar {
      width: 18px; height: 18px; border-radius: 50%;
      display: flex; align-items: center; justify-content: center;
      font-size: 0.55rem; font-weight: 700; color: #fff;
      flex-shrink: 0; margin-top: 1px;
    }
    .dat-reply-name { font-weight: 700; color: var(--text, #f5f5f5); }
    .dat-reply-text { color: var(--text-2, #aaa); line-height: 1.4; word-break: break-word; }
    .dat-reply-input-row { display: flex; gap: 6px; align-items: center; }
    .dat-reply-input {
      flex: 1; min-width: 0;
      background: var(--bg-3, #1a1a1a);
      border: 1px solid var(--border-2, rgba(255,255,255,0.12));
      border-radius: 20px; padding: 6px 12px;
      font-size: 0.76rem; color: var(--text, #f5f5f5);
      font-family: 'Outfit', sans-serif; outline: none;
    }
    .dat-reply-input::placeholder { color: var(--text-3, #555); }
    .dat-reply-input:focus { border-color: rgba(255,255,255,0.25); }
    .dat-reply-send {
      flex-shrink: 0;
      background: var(--accent, #fff); color: var(--bg, #111);
      border: none; border-radius: 20px;
      padding: 6px 12px; font-size: 0.72rem; font-weight: 700;
      cursor: pointer; font-family: 'Outfit', sans-serif;
      transition: opacity 0.15s, transform 0.15s; white-space: nowrap;
    }
    .dat-reply-send:hover { opacity: 0.85; transform: scale(1.03); }
    .dat-reply-send:disabled { opacity: 0.4; cursor: not-allowed; transform: none; }

    /* ── Blocked page ── */
    .dev-blocked-page {
      position: fixed; inset: 0; z-index: 99999;
      background: var(--bg, #0d0d0d);
      display: flex; align-items: center; justify-content: center;
      flex-direction: column; padding: 24px; text-align: center;
      animation: blockedFadeIn 0.5s ease;
    }
    @keyframes blockedFadeIn { from { opacity: 0; } to { opacity: 1; } }
    .blocked-icon {
      font-size: 4rem; margin-bottom: 16px;
      animation: blockedShake 0.5s ease 0.3s both;
    }
    @keyframes blockedShake {
      0%,100% { transform: rotate(0); }
      20%      { transform: rotate(-8deg); }
      40%      { transform: rotate(8deg); }
      60%      { transform: rotate(-4deg); }
      80%      { transform: rotate(4deg); }
    }
    .blocked-title {
      font-size: 1.4rem; font-weight: 800; color: #ef4444;
      margin: 0 0 8px; font-family: 'Outfit', sans-serif;
    }
    .blocked-sub {
      font-size: 0.85rem; color: var(--text-2, rgba(255,255,255,0.5));
      margin: 0 0 20px; max-width: 340px; line-height: 1.6;
      font-family: 'Outfit', sans-serif;
    }
    .blocked-reason {
      background: rgba(239,68,68,0.08);
      border: 1px solid rgba(239,68,68,0.2);
      border-radius: 12px; padding: 14px 18px;
      max-width: 360px; width: 100%;
      font-size: 0.85rem; color: var(--text, #fff);
      font-family: 'Outfit', sans-serif; line-height: 1.5;
      margin-bottom: 20px;
    }
    .blocked-reason strong { color: #ef4444; font-weight: 700; }
    .blocked-until {
      font-size: 0.78rem; color: var(--text-3, rgba(255,255,255,0.3));
      font-family: 'Outfit', sans-serif;
    }

    /* ── Dev inline toast (feedback di dalam panel) ── */
    .dev-inline-toast {
      position: fixed;
      bottom: 28px;
      left: 50%;
      transform: translateX(-50%) translateY(20px);
      z-index: 999999;
      padding: 9px 18px;
      border-radius: 50px;
      font-family: 'Outfit', sans-serif;
      font-size: 0.82rem;
      font-weight: 600;
      white-space: nowrap;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.25s ease, transform 0.3s cubic-bezier(0.22,1,0.36,1);
      box-shadow: 0 4px 20px rgba(0,0,0,0.3);
    }
    .dev-inline-toast.dit-show {
      opacity: 1;
      transform: translateX(-50%) translateY(0);
    }
    .dev-inline-toast.dit-success {
      background: rgba(34,197,94,0.18);
      border: 1px solid rgba(34,197,94,0.4);
      color: #4ade80;
    }
    .dev-inline-toast.dit-warn {
      background: rgba(234,179,8,0.15);
      border: 1px solid rgba(234,179,8,0.4);
      color: #facc15;
    }
    .dev-inline-toast.dit-error {
      background: rgba(239,68,68,0.15);
      border: 1px solid rgba(239,68,68,0.4);
      color: #f87171;
    }

    /* ── Dev delete btn (muncul di semua pesan kalau dev login) ── */
    .blt-dev-del {
      background: none; border: none;
      color: #ef4444; font-size: 0.72rem; font-weight: 700;
      cursor: pointer; padding: 2px 6px; border-radius: 6px;
      font-family: 'Outfit', sans-serif;
      transition: background 0.15s;
      display: inline-flex; align-items: center; gap: 4px;
    }
    .blt-dev-del:hover { background: rgba(239,68,68,0.1); }
    .blt-dev-block {
      background: none; border: none;
      color: #f59e0b; font-size: 0.72rem; font-weight: 700;
      cursor: pointer; padding: 2px 6px; border-radius: 6px;
      font-family: 'Outfit', sans-serif;
      transition: background 0.15s;
      display: inline-flex; align-items: center; gap: 4px;
    }
    .blt-dev-block:hover { background: rgba(245,158,11,0.1); }

    /* ── Dev Favorite Badge ── */
    .blt-dev-fav-btn {
      background: none; border: none;
      color: var(--text-3); font-size: 0.72rem; font-weight: 700;
      cursor: pointer; padding: 2px 6px; border-radius: 6px;
      font-family: 'Outfit', sans-serif;
      transition: background 0.15s, color 0.15s;
      display: inline-flex; align-items: center; gap: 4px;
    }
    .blt-dev-fav-btn:hover { background: rgba(255,200,0,0.1); color: #ffc800; }
    .blt-dev-fav-btn.is-fav { color: #ffc800; }

    /* Badge favorit dev — label kecil di kanan row */
    .blt-fav-badge {
      display: inline-flex; align-items: center; gap: 3px;
      font-size: 0.65rem; font-weight: 700;
      color: #ffe066;
      background: rgba(255,220,50,0.15);
      border: 1px solid rgba(255,220,50,0.35);
      border-radius: 20px; padding: 1px 7px;
      letter-spacing: 0.02em;
      flex-shrink: 0;   /* tidak menyusut */
      white-space: nowrap;
      animation: favBadgePop 0.35s cubic-bezier(0.22,1,0.36,1);
      text-shadow: 0 0 8px rgba(255,220,50,0.6);
    }
    @keyframes favBadgePop {
      from { transform: scale(0.6); opacity: 0; }
      to   { transform: scale(1);   opacity: 1; }
    }

    /* ── Dev mode enter/exit overlay ── */
    .dev-mode-flash {
      position: fixed; inset: 0; z-index: 99999;
      pointer-events: none;
      display: flex; align-items: center; justify-content: center;
    }
    .dev-mode-flash-bg {
      position: absolute; inset: 0;
      background: radial-gradient(ellipse at center,
        rgba(255,50,50,0.18) 0%,
        rgba(0,0,0,0) 70%);
      animation: devFlashBg 0.8s ease-out forwards;
    }
    .dev-mode-flash-text {
      position: relative; z-index: 1;
      font-family: 'Outfit', sans-serif;
      font-size: 1.1rem; font-weight: 800;
      color: #ff4444;
      letter-spacing: 3px; text-transform: uppercase;
      text-shadow: 0 0 20px rgba(255,68,68,0.8);
      animation: devFlashText 0.9s cubic-bezier(0.22,1,0.36,1) forwards;
      opacity: 0;
    }
    @keyframes devFlashBg {
      0%   { opacity: 0; transform: scale(0.8); }
      30%  { opacity: 1; transform: scale(1.1); }
      100% { opacity: 0; transform: scale(1.5); }
    }
    @keyframes devFlashText {
      0%   { opacity: 0; transform: scale(0.5) translateY(20px); }
      30%  { opacity: 1; transform: scale(1.05) translateY(0); }
      70%  { opacity: 1; transform: scale(1); }
      100% { opacity: 0; transform: scale(1.1) translateY(-10px); }
    }

    /* Card background gradient emas bergerak saat jadi favorit */
    .blt-card.is-dev-fav {
      background: linear-gradient(
        135deg,
        rgba(255,210,0,0.12) 0%,
        rgba(255,160,30,0.1) 35%,
        rgba(255,100,0,0.07) 65%,
        rgba(255,210,0,0.12) 100%
      );
      background-size: 300% 300%;
      animation: favCardGlow 3.5s ease-in-out infinite;
      border-color: rgba(255,210,0,0.35) !important;
      box-shadow: 0 0 20px rgba(255,200,0,0.08), inset 0 1px 0 rgba(255,210,0,0.1);
    }
    @keyframes favCardGlow {
      0%   { background-position: 0% 50%; }
      50%  { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }

    /* ── Dev Navbar Status Indicator ── */
    .dev-nav-status {
      display: flex; align-items: center; gap: 4px;
      padding: 3px 7px 3px 5px;
      border-radius: 20px;
      background: rgba(239,68,68,0.15);
      border: 1px solid rgba(239,68,68,0.3);
      cursor: default;
      transition: all 0.35s ease;
      line-height: 1;
      flex-shrink: 0;
    }
    .dev-nav-status.is-online {
      background: rgba(34,197,94,0.15);
      border-color: rgba(34,197,94,0.35);
    }
    .dev-nav-dot {
      width: 6px; height: 6px;
      border-radius: 50%;
      background: #ef4444;
      box-shadow: 0 0 4px rgba(239,68,68,0.7);
      flex-shrink: 0;
      transition: background 0.35s, box-shadow 0.35s;
      animation: devNavDotPulse 1.8s ease-in-out infinite;
    }
    .dev-nav-status.is-online .dev-nav-dot {
      background: #22c55e;
      box-shadow: 0 0 5px rgba(34,197,94,0.8);
    }
    @keyframes devNavDotPulse {
      0%,100% { opacity: 1; transform: scale(1); }
      50%      { opacity: 0.6; transform: scale(1.3); }
    }
    .dev-nav-label {
      font-size: 0.62rem; font-weight: 700;
      color: #ef4444;
      font-family: 'Outfit', sans-serif;
      transition: color 0.35s;
      white-space: nowrap;
    }
    .dev-nav-status.is-online .dev-nav-label { color: #22c55e; }

    /* Compact dev status on small screens */
    @media (max-width: 480px) {
      .dev-nav-status { padding: 2px 5px 2px 4px; gap: 3px; }
      .dev-nav-label  { font-size: 0.52rem; }
      .dev-nav-dot    { width: 5px; height: 5px; }
    }
    @media (max-width: 360px) {
      .dev-nav-label  { font-size: 0.48rem; }
    }

    /* ── Dev Online Status Toast ── */
    .dev-status-toast {
      position: fixed;
      top: calc(var(--nav-height, 56px) + 10px);
      left: 50%;
      transform: translateX(-50%) translateY(-120%);
      z-index: 999999;
      background: var(--bg-2);
      border: 1px solid var(--border-2);
      border-radius: 50px;
      padding: 5px 12px 5px 8px;
      display: flex;
      align-items: center;
      gap: 6px;
      font-family: 'Outfit', sans-serif;
      font-size: 0.72rem;
      font-weight: 600;
      color: var(--text-2);
      box-shadow: 0 2px 12px rgba(0,0,0,0.2);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      transition: transform 0.4s cubic-bezier(0.22,1,0.36,1), opacity 0.3s ease;
      opacity: 0;
      white-space: nowrap;
    }
    .dev-status-toast.dst-show {
      transform: translateX(-50%) translateY(0);
      opacity: 1;
    }
    .dev-status-toast.dst-hide {
      transform: translateX(-50%) translateY(-120%);
      opacity: 0;
    }
    .dev-status-dot {
      width: 6px; height: 6px;
      border-radius: 50%;
      background: #ef4444;
      box-shadow: 0 0 4px rgba(239,68,68,0.7);
      animation: devDotPulse 1.5s ease-in-out infinite;
      flex-shrink: 0;
      transition: background 0.3s, box-shadow 0.3s;
    }
    .dev-status-toast.dst-online .dev-status-dot {
      background: #22c55e;
      box-shadow: 0 0 5px rgba(34,197,94,0.8);
    }
    .dev-status-toast.dst-online {
      border-color: rgba(34,197,94,0.3);
      background: rgba(34,197,94,0.08);
    }
    .dev-status-toast.dst-offline {
      border-color: rgba(239,68,68,0.3);
      background: rgba(239,68,68,0.08);
    }
    @keyframes devDotPulse {
      0%,100% { opacity: 1; transform: scale(1); }
      50%      { opacity: 0.5; transform: scale(1.3); }
    }

    /* Background flash saat dev online/offline — overlay di atas bg web */
    .dev-bg-flash {
      position: fixed; inset: 0; z-index: 9990;
      pointer-events: none;
      opacity: 0;
      transition: opacity 0.25s ease;
    }
    .dev-bg-flash.flash-in  { opacity: 1; }
    .dev-bg-flash.flash-out { opacity: 0; transition: opacity 0.6s ease; }

    /* ── Ban announcement bar ── */
    .dev-ban-bar {
      position: fixed;
      top: var(--nav-height, 56px);
      left: 0; right: 0;
      z-index: 8999;
      background: linear-gradient(90deg, rgba(239,68,68,0.97), rgba(185,28,28,0.97));
      backdrop-filter: blur(8px);
      color: #fff;
      font-family: 'Outfit', sans-serif;
      font-size: 0.82rem;
      font-weight: 600;
      padding: 10px 16px;
      display: flex;
      align-items: center;
      gap: 10px;
      box-shadow: 0 4px 20px rgba(239,68,68,0.35);
      transform: translateY(-110%);
      transition: transform 0.4s cubic-bezier(0.22,1,0.36,1), opacity 0.35s ease;
      opacity: 0;
      line-height: 1.4;
    }
    .dev-ban-bar.ban-show { transform: translateY(0); opacity: 1; }
    .dev-ban-bar.ban-hide { transform: translateY(-8px); opacity: 0; }
    .dev-ban-bar-icon { font-size: 1.1rem; flex-shrink: 0; }
    .dev-ban-bar-text { flex: 1; min-width: 0; }
    .dev-ban-bar-close {
      background: rgba(255,255,255,0.15);
      border: none; border-radius: 6px;
      color: #fff; cursor: pointer;
      padding: 3px 8px; font-size: 0.75rem;
      font-family: 'Outfit', sans-serif; flex-shrink: 0;
      transition: background 0.15s;
    }
    .dev-ban-bar-close:hover { background: rgba(255,255,255,0.25); }

    @media (min-width: 768px) {
      .dev-ban-bar {
        left: 50%; right: auto;
        transform: translateX(-50%) translateY(-110%);
        width: min(600px, 90vw);
        border-radius: 0 0 14px 14px;
        font-size: 0.85rem;
        padding: 12px 20px;
      }
      .dev-ban-bar.ban-show { transform: translateX(-50%) translateY(0); opacity: 1; }
      .dev-ban-bar.ban-hide { transform: translateX(-50%) translateY(-8px); opacity: 0; }
    }
  `;
  document.head.appendChild(devStyle);

  /* ── User Presence Toast CSS ── */
  const _presStyle = document.createElement('style');
  _presStyle.textContent = `
    .user-presence-toast {
      position: fixed;
      bottom: 24px;
      left: 50%;
      transform: translateX(-50%) translateY(30px);
      z-index: 99998;
      background: var(--bg-2, #111);
      border: 1px solid var(--border-2, rgba(255,255,255,0.12));
      border-radius: 50px;
      padding: 7px 14px 7px 8px;
      display: flex;
      align-items: center;
      gap: 8px;
      font-family: 'Outfit', sans-serif;
      font-size: 0.78rem;
      font-weight: 500;
      color: var(--text-2, #aaa);
      box-shadow: 0 4px 24px rgba(0,0,0,0.3);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      opacity: 0;
      pointer-events: none;
      transition: transform 0.4s cubic-bezier(0.22,1,0.36,1), opacity 0.35s ease;
      white-space: nowrap;
      will-change: transform, opacity;
    }
    .user-presence-toast.upt-show {
      opacity: 1;
      transform: translateX(-50%) translateY(0);
    }
    .user-presence-toast.upt-hide {
      opacity: 0;
      transform: translateX(-50%) translateY(30px);
      transition: transform 0.35s ease, opacity 0.3s ease;
    }
    .upt-dot {
      width: 7px; height: 7px;
      border-radius: 50%;
      flex-shrink: 0;
    }
    .upt-dot.online  { background: #22c55e; box-shadow: 0 0 5px rgba(34,197,94,0.8); }
    .upt-dot.offline { background: #ef4444; box-shadow: 0 0 5px rgba(239,68,68,0.7); }
    .upt-avatar {
      width: 20px; height: 20px;
      border-radius: 50%;
      display: flex; align-items: center; justify-content: center;
      font-size: 0.65rem; font-weight: 700;
      color: #fff; flex-shrink: 0;
    }
    .upt-text strong { color: var(--text, #f5f5f5); font-weight: 700; }
  `;
  document.head.appendChild(_presStyle);

  /* ══════════════════════════════════════════════════════
     UTILS
  ══════════════════════════════════════════════════════ */
  /* ── SFX player (pakai Web Audio API — gratis, tanpa file) ── */
  function playBanSFX() {
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();

      // Suara "ban" — kombinasi bass drop + buzz
      function playTone(freq, type, start, duration, gainVal) {
        const osc  = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.type = type;
        osc.frequency.setValueAtTime(freq, ctx.currentTime + start);
        osc.frequency.exponentialRampToValueAtTime(freq * 0.3, ctx.currentTime + start + duration);
        gain.gain.setValueAtTime(gainVal, ctx.currentTime + start);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + start + duration);
        osc.start(ctx.currentTime + start);
        osc.stop(ctx.currentTime + start + duration);
      }

      playTone(220, 'sawtooth', 0,    0.3, 0.4);
      playTone(110, 'square',   0.1,  0.4, 0.3);
      playTone(80,  'sine',     0.15, 0.5, 0.5);
      playTone(440, 'sawtooth', 0,    0.1, 0.2);
    } catch(e) {}
  }

  /* ── Dev online/offline status toast ── */
  function showDevStatusToast(online) {
    document.querySelectorAll('.dev-status-toast').forEach(e => {
      e.classList.remove('dst-show');
      e.classList.add('dst-hide');
      setTimeout(() => e.remove(), 400);
    });

    const toast = document.createElement('div');
    toast.className = 'dev-status-toast';
    const lang = typeof currentLang !== 'undefined' ? currentLang : 'id';

    if (online) {
      toast.classList.add('dst-online');
      toast.innerHTML = `
        <div class="dev-status-dot"></div>
        <span>👑 King Zann ${lang === 'en' ? 'is Online' : 'sedang Online'}</span>
      `;
    } else {
      toast.classList.add('dst-offline');
      toast.innerHTML = `
        <div class="dev-status-dot"></div>
        <span>King Zann ${lang === 'en' ? 'went Offline' : 'telah Offline'}</span>
      `;
    }

    // Flash overlay di atas background web — smooth, tidak ganggu warna asli
    const flashEl = document.createElement('div');
    flashEl.className = 'dev-bg-flash';
    flashEl.style.background = online
      ? 'rgba(34,197,94,0.07)'
      : 'rgba(239,68,68,0.07)';
    document.body.appendChild(flashEl);
    requestAnimationFrame(() => requestAnimationFrame(() => {
      flashEl.classList.add('flash-in');
      setTimeout(() => {
        flashEl.classList.remove('flash-in');
        flashEl.classList.add('flash-out');
        setTimeout(() => flashEl.remove(), 700);
      }, 400);
    }));

    document.body.appendChild(toast);

    // SFX bunyi DULUAN sebelum toast muncul
    // VOL_ONLINE & VOL_OFFLINE bisa disesuaikan sendiri supaya terdengar sama
    const VOL_ONLINE  = 0.7;  // ← turunkan kalau sfx-online terlalu kencang
    const VOL_OFFLINE = 0.7;  // ← turunkan kalau sfx-offline terlalu kencang
    try {
      const sfx = online ? _sfxOnline : _sfxOffline;
      const vol = online ? VOL_ONLINE : VOL_OFFLINE;
      sfx.currentTime = 0;
      sfx.volume = vol;
      sfx.play().catch(() => {});

      function startFade() {
        const dur       = sfx.duration && isFinite(sfx.duration) ? sfx.duration : 3;
        const fadeDur   = Math.min(1.5, dur * 0.4);
        const fadeStart = Math.max(0, dur - fadeDur);
        setTimeout(() => {
          let step = 0;
          const total = Math.round(fadeDur * 1000 / 25);
          const fade = setInterval(() => {
            step++;
            sfx.volume = Math.max(0, vol * (1 - step / total));
            if (step >= total) { sfx.pause(); clearInterval(fade); }
          }, 25);
        }, fadeStart * 1000);
      }

      if (sfx.readyState >= 1 && isFinite(sfx.duration)) {
        startFade();
      } else {
        sfx.addEventListener('loadedmetadata', startFade, { once: true });
      }
    } catch(e) {}

    // Toast muncul 150ms setelah sfx bunyi
    setTimeout(() => {
      requestAnimationFrame(() => toast.classList.add('dst-show'));
    }, 150);

    // Auto hide setelah 4 detik
    setTimeout(() => {
      toast.classList.remove('dst-show');
      toast.classList.add('dst-hide');
      setTimeout(() => toast.remove(), 400);
    }, 4000);
  }

  /* ── Update indikator status di navbar ── */
  function updateDevNavStatus(online) {
    const indicator = document.getElementById('devNavStatus');
    const dot       = document.getElementById('devNavDot');
    const label     = document.getElementById('devNavLabel');
    if (!indicator) return;

    // Selalu tampilkan — baik untuk user biasa maupun dev
    indicator.style.display = 'flex';

    if (online) {
      indicator.classList.add('is-online');
      if (label) label.textContent = 'King Zann : Online';
    } else {
      indicator.classList.remove('is-online');
      if (label) label.textContent = 'King Zann : Offline';
    }
  }

  /* ── Tampilkan ban announcement bar ── */
  function showBanBar(username, reason) {
    // Hapus bar lama dengan animasi
    document.querySelectorAll('.dev-ban-bar').forEach(old => {
      old.classList.remove('ban-show');
      old.classList.add('ban-hide');
      setTimeout(() => old.remove(), 400);
    });

    const bar = document.createElement('div');
    bar.className = 'dev-ban-bar';
    bar.innerHTML = `
      <span class="dev-ban-bar-icon">🔨</span>
      <span class="dev-ban-bar-text">
        <strong>${username}</strong> telah dibanned —
        <span style="opacity:0.85">${reason}</span>
      </span>
      <button class="dev-ban-bar-close">✕</button>
    `;

    let _dismissed = false;
    function dismissBar() {
      if (_dismissed) return;
      _dismissed = true;
      bar.classList.remove('ban-show');
      bar.classList.add('ban-hide');
      setTimeout(() => { if (document.body.contains(bar)) bar.remove(); }, 420);
    }

    document.body.appendChild(bar);
    playBanSFX();

    // Animate in setelah frame render
    requestAnimationFrame(() => requestAnimationFrame(() => bar.classList.add('ban-show')));

    bar.querySelector('.dev-ban-bar-close').addEventListener('click', dismissBar);

    // Auto hide setelah 8 detik
    setTimeout(dismissBar, 8000);
  }

  /* ── Listen ban announcements via Firebase SSE (semua user bisa lihat) ── */
  /* ── Cek realtime apakah user ini baru diblokir ── */
  function listenBlockedRealtime() {
    function getMyTokenKeys() {
      const keys = new Set();
      // Dari ownerToken pesan
      let tokens = {};
      try { tokens = JSON.parse(localStorage.getItem('zanpw_blt_tokens') || '{}'); } catch {}
      Object.entries(tokens)
        .filter(([k]) => !k.includes('__r__'))
        .forEach(([, token]) => keys.add(token.replace(/[.#$[\]]/g, '_')));
      // Dari username tersimpan
      const savedUsername = localStorage.getItem('zanpw_username') || '';
      if (savedUsername) keys.add(savedUsername.replace(/[.#$[\]]/g, '_'));
      return [...keys];
    }

    async function checkMyBlock() {
      // Cek apakah akun dihapus oleh dev — skip kalau sedang dev mode
      const _myUserId = localStorage.getItem('zanpw_userid');
      const _isDevSession = sessionStorage.getItem('zanpw_dev_session') === '1';
      if (_myUserId && !_isDevSession) {
        try {
          const _dr = await fetch(`${FIREBASE_URL}/deleted_users/${_myUserId}.json`);
          const _dd = await _dr.json();
          if (_dd && _dd.deletedAt) {
            clearInterval(_blockPoll);
            // Hapus entry blacklist lebih dulu supaya tidak loop
            await fetch(`${FIREBASE_URL}/deleted_users/${_myUserId}.json`, { method: 'DELETE' }).catch(() => {});
            // Bersihkan semua data lokal
            localStorage.removeItem('zanpw_username');
            localStorage.removeItem('zanpw_username_ts');
            localStorage.removeItem('zanpw_userid');
            localStorage.removeItem('zanpw_blt_tokens');
            localStorage.removeItem('zanpw_blt_seen_notifs');
            // Tampilkan popup notifikasi ke user sebelum reload
            _showAccountDeletedPopup(_dd.reason || '');
            return;
          }
        } catch(e) {}
      }

      const myKeys = getMyTokenKeys();
      if (!myKeys.length) return;
      for (const key of myKeys) {
        try {
          const res  = await fetch(`${BLOCKED_PATH}/${key}.json`);
          const data = await res.json();
          if (!data) continue;
          if (data.until === -1 || Date.now() < data.until) {
            clearInterval(_blockPoll);
            showBlockedPage(data);
            return;
          }
        } catch(e) {}
      }
    }

    // Fungsi popup notif penghapusan akun oleh dev
    function _showAccountDeletedPopup(reason) {
      // Hapus semua modal/overlay yang mungkin masih terbuka
      document.querySelectorAll('.dev-overlay-backdrop, .zanpw-modal-backdrop.is-open').forEach(el => {
        el.classList.remove('is-open'); el.style.opacity = '0';
      });

      const pop = document.createElement('div');
      pop.style.cssText = 'position:fixed;inset:0;z-index:999999;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,0.75);backdrop-filter:blur(6px);opacity:0;transition:opacity 0.3s';
      pop.innerHTML = `
        <div style="background:var(--bg-2,#1a1a2e);border:1px solid rgba(239,68,68,0.3);border-radius:20px;padding:28px 24px;max-width:360px;width:90%;text-align:center;box-shadow:0 8px 40px rgba(239,68,68,0.15);transform:scale(0.92);transition:transform 0.3s">
          <div style="width:56px;height:56px;border-radius:50%;background:rgba(239,68,68,0.12);border:2px solid rgba(239,68,68,0.3);display:flex;align-items:center;justify-content:center;margin:0 auto 14px;font-size:1.6rem">🗑️</div>
          <h3 style="margin:0 0 6px;font-size:1.05rem;font-weight:800;color:#ef4444;font-family:'Outfit',sans-serif">Akun Dihapus</h3>
          <p style="margin:0 0 10px;font-size:0.82rem;color:var(--text-2,#aaa);font-family:'Outfit',sans-serif;line-height:1.5">Akunmu telah dihapus oleh developer.</p>
          ${reason ? `<div style="background:rgba(239,68,68,0.07);border:1px solid rgba(239,68,68,0.15);border-radius:10px;padding:10px 14px;margin-bottom:14px">
            <p style="margin:0;font-size:0.75rem;color:var(--text-3,#888);font-family:'Outfit',sans-serif">Alasan:</p>
            <p style="margin:4px 0 0;font-size:0.85rem;color:var(--text,#fff);font-family:'Outfit',sans-serif;font-weight:600">${reason.replace(/</g,'&lt;').replace(/>/g,'&gt;')}</p>
          </div>` : ''}
          <p style="margin:0 0 18px;font-size:0.78rem;color:var(--text-3,#777);font-family:'Outfit',sans-serif">Kamu akan diarahkan untuk membuat username baru.</p>
          <button id="_deletedPopupOkBtn" style="width:100%;padding:10px;border-radius:10px;background:#ef4444;border:none;color:#fff;font-size:0.88rem;font-weight:700;cursor:pointer;font-family:'Outfit',sans-serif;transition:opacity 0.2s">Mengerti</button>
        </div>`;
      document.body.appendChild(pop);
      requestAnimationFrame(() => requestAnimationFrame(() => {
        pop.style.opacity = '1';
        pop.querySelector('div').style.transform = 'scale(1)';
      }));
      pop.querySelector('#_deletedPopupOkBtn').addEventListener('click', () => {
        pop.style.opacity = '0';
        setTimeout(() => window.location.reload(), 300);
      });
      // Auto reload setelah 12 detik kalau user tidak klik
      setTimeout(() => window.location.reload(), 12000);
    }

    // Polling setiap 3 detik — reliable di semua browser & kondisi
    const _blockPoll = setInterval(checkMyBlock, 3000);

    // SSE backup untuk realtime yang lebih cepat
    if (typeof EventSource !== 'undefined') {
      try {
        const es = new EventSource(`${BLOCKED_PATH}.json`);
        let _init = false;

        function handleBlockData(data) {
          if (!data) return;
          const myKeys = getMyTokenKeys();
          for (const [key, val] of Object.entries(data)) {
            if (!val || !myKeys.includes(key)) continue;
            if (val.until === -1 || Date.now() < val.until) {
              clearInterval(_blockPoll);
              showBlockedPage(val);
              es.close();
              return;
            }
          }
        }

        es.addEventListener('put', e => {
          try {
            const p = JSON.parse(e.data);
            if (!_init) { _init = true; return; }
            if (p?.data) handleBlockData(p.data);
          } catch(e) {}
        });
        es.addEventListener('patch', e => {
          try {
            const p = JSON.parse(e.data);
            if (p?.data) handleBlockData(p.data);
          } catch(e) {}
        });
      } catch(e) {}
    }

    document.addEventListener('zanpw:messageSent', () => {
      clearInterval(_blockPoll);
      listenBlockedRealtime();
    }, { once: true });
  }

  /* ══════════════════════════════════════════════════════
     LISTEN DELETED USERS — kick user realtime saat dev hapus akun
  ══════════════════════════════════════════════════════ */
  // checkIfDeletedByDev sudah digabung ke dalam checkMyBlock di listenBlockedRealtime


  function listenDevStatus() {
    if (typeof EventSource === 'undefined') return;
    const isDev = sessionStorage.getItem('zanpw_dev_session') === '1';

    // Waktu load halaman — toast tidak boleh muncul dalam 1.5 detik pertama
    // (SSE sering reconnect saat awal dan re-send state lama)
    const _pageLoadTime = Date.now();
    const _toastDelay   = 1500;

    // Track state terakhir yang sudah diketahui
    // null = belum pernah dapat data sama sekali
    let _lastOnline = null;
    let _init       = false;

    try {
      const es = new EventSource(`${FIREBASE_URL}/dev_status.json`);

      es.addEventListener('put', e => {
        try {
          const p      = JSON.parse(e.data);
          const online = p?.data?.online === true;

          if (!_init) {
            // Event pertama — set status awal tanpa toast
            _init       = true;
            _lastOnline = online;
            updateDevNavStatus(online);
            return;
          }

          // Hanya lanjut kalau status BENAR-BENAR berubah
          if (online === _lastOnline) return;

          _lastOnline = online;
          updateDevNavStatus(online);

          // Toast hanya untuk non-dev DAN setelah buffer awal lewat
          // (mencegah reconnect SSE memicu toast palsu)
          if (!isDev && Date.now() - _pageLoadTime > _toastDelay) {
            showDevStatusToast(online);
          }
        } catch(e) {}
      });

      // patch event juga bisa datang — handle sama ketatnya
      es.addEventListener('patch', e => {
        try {
          const p = JSON.parse(e.data);
          if (!p?.data || typeof p.data.online === 'undefined') return;
          const online = p.data.online === true;
          if (online === _lastOnline) return;
          _lastOnline = online;
          updateDevNavStatus(online);
          if (!isDev && Date.now() - _pageLoadTime > _toastDelay) {
            showDevStatusToast(online);
          }
        } catch(e) {}
      });

    } catch(e) {}
  }

  function listenBanAnnouncements() {
    if (typeof EventSource === 'undefined') return;
    const _pageLoadTime = Date.now();
    // Buffer 3 detik — SSE sering reconnect dan re-send event lama
    const _minTime = _pageLoadTime + 3000;
    // Track timestamp terakhir yang sudah ditampilkan, cegah duplikat
    let _lastShownTime = 0;
    function _handleBanPayload(data) {
      if (!data?.username) return;
      // Harus lebih besar dari _minTime DAN belum pernah ditampilkan
      if (!data.time || data.time <= _minTime) return;
      if (data.time <= _lastShownTime) return;
      _lastShownTime = data.time;
      try {
        const myToks = JSON.parse(localStorage.getItem('zanpw_blt_tokens') || '{}');
        const myOwners = Object.entries(myToks)
          .filter(([k]) => !k.includes('__r__'))
          .map(([,v]) => v);
        if (data.ownerToken && myOwners.includes(data.ownerToken)) return;
      } catch(e2) {}
      showBanBar(data.username, data.reason);
    }
    try {
      const es = new EventSource(`${BAN_ANNOUNCE_PATH}.json`);
      let _init = false;
      es.addEventListener('put', e => {
        try {
          const p = JSON.parse(e.data);
          if (!_init) { _init = true; return; } // skip initial dump
          _handleBanPayload(p?.data);
        } catch(e) {}
      });
      // patch: bisa muncul saat reconnect dengan data lama — filter pakai _minTime & _lastShownTime
      es.addEventListener('patch', e => {
        try {
          const p = JSON.parse(e.data);
          // Patch path bisa '/' (full dump) atau path spesifik — selalu filter
          if (p?.data && typeof p.data === 'object' && !p.data.username) return;
          _handleBanPayload(p?.data);
        } catch(e) {}
      });
    } catch(e) {}
  }



  /* ── Duration helpers ── */
  const DURATIONS = [
    { label: '5 Menit',  ms: 5*60*1000 },
    { label: '30 Menit', ms: 30*60*1000 },
    { label: '1 Jam',    ms: 60*60*1000 },
    { label: '6 Jam',    ms: 6*60*60*1000 },
    { label: '1 Hari',   ms: 24*60*60*1000 },
    { label: '3 Hari',   ms: 3*24*60*60*1000 },
    { label: '1 Minggu', ms: 7*24*60*60*1000 },
    { label: '1 Bulan',  ms: 30*24*60*60*1000 },
    { label: '1 Tahun',  ms: 365*24*60*60*1000 },
    { label: 'Permanen', ms: -1 },
  ];

  function fmtDuration(ms) {
    if (ms === -1) return 'Permanen';
    const d = Math.floor(ms / (24*60*60*1000));
    const h = Math.floor((ms % (24*60*60*1000)) / (60*60*1000));
    const m = Math.floor((ms % (60*60*1000)) / 60000);
    if (d > 0) return `${d} hari`;
    if (h > 0) return `${h} jam`;
    return `${m} menit`;
  }

  /* ══════════════════════════════════════════════════════
     BLOCKED PAGE — cek saat load
  ══════════════════════════════════════════════════════ */
  async function checkIfBlocked() {
    // Kumpulkan semua keys yang perlu dicek: ownerToken + username
    const keysToCheck = new Set();

    // 1. Dari ownerToken pesan milik user
    let tokens = {};
    try { tokens = JSON.parse(localStorage.getItem('zanpw_blt_tokens') || '{}'); } catch {}
    const msgTokens = Object.entries(tokens).filter(([k]) => !k.includes('__r__'));
    for (const [, token] of msgTokens) {
      keysToCheck.add(token.replace(/[.#$[\]]/g, '_'));
    }

    // 2. Dari username tersimpan (fallback blokir by username)
    const savedUsername = localStorage.getItem('zanpw_username') || '';
    if (savedUsername) {
      keysToCheck.add(savedUsername.replace(/[.#$[\]]/g, '_'));
    }

    if (!keysToCheck.size) return;

    for (const blockKey of keysToCheck) {
      try {
        const res  = await fetch(`${BLOCKED_PATH}/${blockKey}.json`);
        const data = await res.json();
        if (!data) continue;

        // Cek apakah masih dalam periode blokir
        if (data.until !== -1 && Date.now() > data.until) {
          // Sudah expired — hapus blokir otomatis
          await fetch(`${BLOCKED_PATH}/${blockKey}.json`, { method: 'DELETE' });
          continue;
        }

        // Masih diblokir — tampilkan halaman blokir
        showBlockedPage(data);
        return; // stop cek, satu blokir sudah cukup
      } catch(e) {}
    }
  }

  function showBlockedPage(data) {
    const lang = typeof currentLang !== 'undefined' ? currentLang : 'id';
    const untilText = data.until === -1
      ? (lang === 'en' ? 'Permanently' : 'Permanen')
      : (lang === 'en'
          ? `Until ${new Date(data.until).toLocaleString('en-US')}`
          : `Sampai ${new Date(data.until).toLocaleString('id-ID')}`);

    const page = document.createElement('div');
    page.className = 'dev-blocked-page';
    page.innerHTML = `
      <div class="blocked-icon">🚫</div>
      <p class="blocked-title">${lang === 'en' ? 'Access Blocked' : 'Akses Diblokir'}</p>
      <p class="blocked-sub">
        ${lang === 'en'
          ? 'Your access to this website has been restricted by the developer.'
          : 'Aksesmu ke website ini telah dibatasi oleh developer.'}
      </p>
      <div class="blocked-reason">
        <strong>${lang === 'en' ? 'Reason:' : 'Alasan:'}</strong><br>
        ${data.reason || (lang === 'en' ? 'Violation of site rules.' : 'Melanggar aturan situs.')}
      </div>
      <p class="blocked-until">
        ${lang === 'en' ? '⏱ Block duration:' : '⏱ Durasi blokir:'} ${untilText}
      </p>
    `;
    document.body.appendChild(page);
    // Blokir semua interaksi
    document.body.style.overflow = 'hidden';
  }

  /* ══════════════════════════════════════════════════════
     ANNOUNCEMENT — SSE listener + popup
  ══════════════════════════════════════════════════════ */
  /* ── SFX announcement — fresh instance setiap play ──
     Tidak reuse → tidak ada konflik state/currentTime.
     Browser cache file setelah load pertama jadi tetap instan.
     Overlap bebas, tidak terpotong sama sekali.
  ─────────────────────────────────────────────────────────── */
  const _ANN_SRC = 'files/rdr.mp3';
  // Preload sekali agar browser cache file-nya
  (function(){ const _pre = new Audio(_ANN_SRC); _pre.preload = 'auto'; })();

  function fadeOutAnnounceSFX() { /* tidak ada fade — biarkan selesai sendiri */ }

  function playAnnounceSFX() {
    try {
      const sfx = new Audio(_ANN_SRC);  // fresh instance setiap kali
      sfx.volume = 1;
      sfx.play().catch(() => {});
      // Bebaskan memory setelah selesai
      sfx.addEventListener('ended', () => { sfx.src = ''; }, { once: true });
    } catch(e) {}
  }

  const ANN_DURATION       = 6000;   // biasa: 6 detik
  const ANN_DURATION_REPLY = 30000;  // dengan reply: 30 detik

  function showAnnouncementPopup(msg, allowReply = false, annTime = null) {
    document.querySelectorAll('.dev-ann-toast').forEach(e => e.remove());

    const lang      = typeof currentLang !== 'undefined' ? currentLang : 'id';
    const labelText = lang === 'en' ? 'Announcement from King Zann' : 'Pengumuman dari King Zann';
    const replyPh   = lang === 'en' ? 'Reply...' : 'Balas...';
    const sendLbl   = lang === 'en' ? 'Send' : 'Kirim';
    const dur       = allowReply ? ANN_DURATION_REPLY : ANN_DURATION;

    const toast = document.createElement('div');
    toast.className = 'dev-ann-toast';
    toast.innerHTML = `
      <div class="dat-icon-wrap">📣</div>
      <div class="dat-body">
        <span class="dat-label">${labelText}</span>
        <span class="dat-msg">${msg}</span>
        ${allowReply ? `<div class="dat-reply-section">
          <div class="dat-reply-list"></div>
          <div class="dat-reply-input-row">
            <input class="dat-reply-input" maxlength="120" placeholder="${replyPh}" autocomplete="off"/>
            <button class="dat-reply-send">${sendLbl}</button>
          </div>
        </div>` : ''}
      </div>
      <button class="dat-close" title="Tutup">✕</button>
      <div class="dat-progress-wrap">
        <div class="dat-progress"></div>
      </div>
    `;
    document.body.appendChild(toast);
    playAnnounceSFX();

    // ── Partikel api roket di bawah toast ──
    const fireWrap = document.createElement('div');
    fireWrap.className = 'dat-fire-wrap';

    // Warna gradien api: putih inti → kuning → oranye → merah
    const fireColors = [
      '#fff7e6','#ffe066','#ffb347','#ff8c00','#ff5500','#ff2200','#ff6600','#ffd700'
    ];

    // Spawn 18 partikel dengan posisi & timing bervariasi
    for (let i = 0; i < 18; i++) {
      const spark = document.createElement('div');
      spark.className = 'dat-spark';
      const left   = (Math.random() * 100).toFixed(1);   // 0–100% lebar wrap
      const dx     = ((Math.random() - 0.5) * 18).toFixed(1); // spread horizontal
      const dur    = (0.45 + Math.random() * 0.45).toFixed(2);
      const delay  = (Math.random() * 0.5).toFixed(2);
      const size   = (4 + Math.random() * 5).toFixed(1);
      const color  = fireColors[Math.floor(Math.random() * fireColors.length)];
      spark.style.cssText = `
        left:${left}%;
        width:${size}px; height:${size}px;
        background:${color};
        box-shadow: 0 0 ${Math.round(+size * 1.5)}px ${color};
        --dx:${dx}px;
        --dur:${dur}s;
        --delay:${delay}s;
        animation-delay:${delay}s;
        animation-duration:${dur}s;
      `;
      fireWrap.appendChild(spark);
    }
    toast.appendChild(fireWrap);

    requestAnimationFrame(() => requestAnimationFrame(() => {
      toast.classList.add('dat-show');
      const bar = toast.querySelector('.dat-progress');
      if (bar) {
        bar.style.transition = `transform ${dur}ms linear`;
        requestAnimationFrame(() => { bar.style.transform = 'scaleX(0)'; });
      }
    }));

    // ── Reply system (hanya kalau allowReply) ────────────────
    let _replyPollTimer = null;
    if (allowReply) {
      const _FB           = 'https://personalweb-zan-default-rtdb.asia-southeast1.firebasedatabase.app';
      const _annReplyPath = `${_FB}/ann_replies`;
      const _annTime      = annTime || Date.now();
      const replyList     = toast.querySelector('.dat-reply-list');
      const replyInput    = toast.querySelector('.dat-reply-input');
      const replySend     = toast.querySelector('.dat-reply-send');

      function _rColor(name) {
        const cols = ['#6366f1','#8b5cf6','#ec4899','#14b8a6','#f59e0b','#3b82f6','#10b981','#f97316'];
        let h = 0;
        for (let i = 0; i < name.length; i++) h = name.charCodeAt(i) + ((h << 5) - h);
        return cols[Math.abs(h) % cols.length];
      }
      const _shown = new Set();
      function _renderReply(id, data) {
        if (_shown.has(id)) return;
        _shown.add(id);
        const el = document.createElement('div');
        el.className = 'dat-reply-item';
        const n = (data.name || 'Anonim').replace(/</g,'&lt;');
        el.innerHTML = `<div class="dat-reply-avatar" style="background:${_rColor(data.name||'')}">${(data.name||'A').charAt(0).toUpperCase()}</div><span><span class="dat-reply-name">${n}</span> <span class="dat-reply-text">${(data.text||'').replace(/</g,'&lt;')}</span></span>`;
        replyList.appendChild(el);
        replyList.scrollTop = replyList.scrollHeight;
      }
      async function _poll() {
        try {
          const res = await fetch(`${_annReplyPath}.json`);
          const d   = res.ok ? await res.json() : null;
          if (!d) return;
          Object.entries(d).forEach(([id, item]) => {
            if (item?.annTime === _annTime) _renderReply(id, item);
          });
        } catch(e) {}
      }
      _replyPollTimer = setInterval(_poll, 1500);
      async function _send() {
        const txt = replyInput.value.trim();
        if (!txt) return;
        const name = localStorage.getItem('zanpw_username') || 'Anonim';
        replySend.disabled = true; replyInput.value = '';
        try {
          await fetch(`${_annReplyPath}.json`, {
            method:'POST', headers:{'Content-Type':'application/json'},
            body: JSON.stringify({ name, text:txt, annTime:_annTime, time:Date.now() })
          });
        } catch(e) {}
        replySend.disabled = false; replyInput.focus();
      }
      replySend.addEventListener('click', _send);
      replyInput.addEventListener('keydown', e => { if (e.key === 'Enter') _send(); });
    }
    // ──────────────────────────────────────────────────────────

    function dismissAnn() {
      if (_replyPollTimer) clearInterval(_replyPollTimer);
      fadeOutAnnounceSFX(400);
      toast.classList.remove('dat-show');
      toast.classList.add('dat-hide');
      setTimeout(() => toast.remove(), 540);
    }

    toast.querySelector('.dat-close').addEventListener('click', dismissAnn);
    setTimeout(dismissAnn, dur);
  }

  function listenAnnouncements() {
    if (typeof EventSource === 'undefined') return;
    const _pageLoadTime = Date.now();
    // Buffer 2 detik: tolak data yang timestampnya terlalu dekat dengan load (SSE reconnect)
    const _minTime = _pageLoadTime + 2000;
    function _handleAnnPayload(data) {
      if (!data?.msg) return;
      if (!data.time || data.time <= _minTime) return;
      const isDev = sessionStorage.getItem('zanpw_dev_session') === '1';
      // Dev tetap terima toast jika ada reply (supaya bisa lihat balasan user)
      // Skip kalau bukan reply mode dan dev sedang login
      if (isDev && !data.allowReply) return;
      const lang = typeof currentLang !== 'undefined' ? currentLang : 'id';
      const msg = lang === 'en' && data.msgEn ? data.msgEn : data.msg;
      showAnnouncementPopup(msg, data.allowReply === true, data.time);
    }
    try {
      const es = new EventSource(`${ANNOUNCE_PATH}.json`);
      let _init = false;
      es.addEventListener('put', e => {
        try {
          const p = JSON.parse(e.data);
          if (!_init) { _init = true; return; } // skip initial dump
          _handleAnnPayload(p?.data);
        } catch(e) {}
      });
      // patch listener juga perlu — Firebase kadang kirim patch saat reconnect
      es.addEventListener('patch', e => {
        try {
          const p = JSON.parse(e.data);
          _handleAnnPayload(p?.data);
        } catch(e) {}
      });
    } catch(e) {}
  }

  /* ══════════════════════════════════════════════════════
     DEV BADGE — apply ke nama "Developer" di bulletin
  ══════════════════════════════════════════════════════ */
  /* ── Animasi masuk/keluar dev mode ── */
  function showDevModeFlash(entering) {
    const el = document.createElement('div');
    el.className = 'dev-mode-flash';
    el.innerHTML = `
      <div class="dev-mode-flash-bg"></div>
      <div class="dev-mode-flash-text">${entering ? '👑 Developer Mode' : '👋 Exiting Dev Mode'}</div>
    `;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 900);
  }

  /* ── Sembunyikan/tampilkan tombol chip saat dev mode ── */
  function _toggleDevChipButtons(hide) {
    const deleteBtn = document.getElementById('bltDeleteAccountBtn');
    const changeBtn = document.getElementById('bltChangeUnameBtn');
    if (deleteBtn) deleteBtn.style.display = hide ? 'none' : '';
    if (changeBtn) changeBtn.style.display = hide ? 'none' : '';

    // Kalau elemen belum ada (chip belum render), pakai observer
    if (hide && (!deleteBtn || !changeBtn)) {
      const obs = new MutationObserver(() => {
        const d = document.getElementById('bltDeleteAccountBtn');
        const c = document.getElementById('bltChangeUnameBtn');
        if (d) d.style.display = 'none';
        if (c) c.style.display = 'none';
        if (d && c) obs.disconnect();
      });
      obs.observe(document.body, { childList: true, subtree: true });
      // Auto disconnect setelah 5 detik
      setTimeout(() => obs.disconnect(), 5000);
    }
  }

  function applyDevBadge() {
    document.querySelectorAll('.blt-name').forEach(el => {
      if (el.textContent.trim() === DEV_USERNAME) el.classList.add('dev-badge');
    });
    const list = document.getElementById('bulletinList');
    if (!list) return;
    const obs = new MutationObserver(() => {
      document.querySelectorAll('.blt-name:not(.dev-badge)').forEach(el => {
        if (el.textContent.trim() === DEV_USERNAME) el.classList.add('dev-badge');
      });
    });
    obs.observe(list, { childList: true, subtree: true });
  }

  /* ══════════════════════════════════════════════════════
     DEV ACTIONS — tambah tombol hapus & blokir ke semua card
  ══════════════════════════════════════════════════════ */
  function injectDevButtons() {
    const list = document.getElementById('bulletinList');
    if (!list) return;

    function addButtonsToCard(card) {
      if (card.querySelector('.blt-dev-del')) return; // sudah ada
      const msgId   = card.dataset.id;
      const actions = card.querySelector('.blt-actions');
      if (!actions) return;

      // Tombol hapus pesan dev
      const delBtn = document.createElement('button');
      delBtn.className = 'blt-action-btn blt-dev-del';
      delBtn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" width="13" height="13"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M9 6V4h6v2"/></svg> Hapus`;
      delBtn.addEventListener('click', async () => {
        const ok = await ZanModal.open({
          icon: '🗑️', title: 'Hapus Pesan Ini?',
          desc: 'Pesan akan dihapus permanen dari papan. Tindakan ini tidak bisa dibatalkan.',
          confirmText: 'Ya, Hapus!', cancelText: 'Batal', type: 'danger'
        });
        if (!ok) return;
        try {
          await fetch(`${FIREBASE_BULLETIN}/${msgId}.json`, { method: 'DELETE' });
        } catch(e) {
          ZanModal.open({ icon: '⚠️', title: 'Gagal Hapus', desc: 'Terjadi error. Coba lagi ya!', confirmText: 'OK', cancelText: '', type: 'info' });
        }
      });
      actions.appendChild(delBtn);

      // Tombol blokir dev
      const blockBtn = document.createElement('button');
      blockBtn.className = 'blt-action-btn blt-dev-block';
      blockBtn.innerHTML = `🚫 Blokir`;
      blockBtn.addEventListener('click', () => {
        const nameEl = card.querySelector('.blt-name');
        const name   = nameEl ? nameEl.textContent.replace('👑','').trim() : '?';
        showBlockModal(msgId, name);
      });
      actions.appendChild(blockBtn);

      // Tombol favorit dev
      const favBtn = document.createElement('button');
      favBtn.className = 'blt-action-btn blt-dev-fav-btn';
      favBtn.dataset.msgId = msgId;
      favBtn.title = 'Tandai sebagai favorit developer';

      // Cek status favorit dari Firebase
      fetch(`${FIREBASE_BULLETIN}/${msgId}/devFav.json`)
        .then(r => r.json())
        .then(val => {
          if (val === true) {
            favBtn.innerHTML = '⭐ Unfav';
            favBtn.classList.add('is-fav');
          } else {
            favBtn.innerHTML = '☆ Fav';
          }
        }).catch(() => { favBtn.innerHTML = '☆ Fav'; });

      favBtn.addEventListener('click', async () => {
        const isFav = favBtn.classList.contains('is-fav');
        try {
          if (isFav) {
            await fetch(`${FIREBASE_BULLETIN}/${msgId}/devFav.json`, { method: 'DELETE' });
            favBtn.innerHTML = '☆ Fav';
            favBtn.classList.remove('is-fav');
          } else {
            await fetch(`${FIREBASE_BULLETIN}/${msgId}/devFav.json`, {
              method: 'PUT',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(true)
            });
            favBtn.innerHTML = '⭐ Unfav';
            favBtn.classList.add('is-fav');
          }
        } catch(e) {}
      });
      actions.appendChild(favBtn);

      // Inject tombol hapus reply dev ke semua reply yang sudah ada
      addDevReplyButtons(card, msgId);
    }

    // Tambah tombol hapus dev ke reply
    function addDevReplyButtons(card, msgId) {
      const repliesEl = card.querySelector('.blt-replies');
      if (!repliesEl) return;

      function addToReply(replyCard) {
        if (replyCard.querySelector('.blt-dev-del-reply')) return;
        const replyId = replyCard.dataset.replyId;
        if (!replyId) return;
        const body = replyCard.querySelector('.blt-reply-body');
        if (!body) return;

        const btn = document.createElement('button');
        btn.className = 'blt-dev-del-reply';
        btn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" width="11" height="11"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M9 6V4h6v2"/></svg>`;
        btn.title = 'Hapus reply (dev)';
        btn.style.cssText = 'position:absolute;bottom:6px;right:6px;background:none;border:none;color:#ef4444;cursor:pointer;padding:3px;border-radius:4px;opacity:0.6;transition:opacity 0.15s,background 0.15s;';
        btn.addEventListener('mouseenter', () => btn.style.opacity = '1');
        btn.addEventListener('mouseleave', () => btn.style.opacity = '0.7');
        btn.addEventListener('click', async () => {
          const ok = await ZanModal.open({
            icon: '🗑️', title: 'Hapus Reply Ini?',
            desc: 'Reply akan dihapus permanen. Tindakan ini tidak bisa dibatalkan.',
            confirmText: 'Ya, Hapus!', cancelText: 'Batal', type: 'danger'
          });
          if (!ok) return;
          try {
            await fetch(`${FIREBASE_BULLETIN}/${msgId}/replies/${replyId}.json`, { method: 'DELETE' });
            replyCard.style.transition = 'opacity .25s, transform .25s';
            replyCard.style.opacity = '0';
            replyCard.style.transform = 'scale(0.96)';
            setTimeout(() => replyCard.remove(), 260);
          } catch(e) {
            ZanModal.open({ icon: '⚠️', title: 'Gagal Hapus', desc: 'Terjadi error!', confirmText: 'OK', cancelText: '', type: 'info' });
          }
        });

        // Taruh di sudut kanan bawah reply card
        replyCard.style.position = 'relative';
        replyCard.appendChild(btn);
      }

      // Inject ke reply yang sudah ada
      repliesEl.querySelectorAll('.blt-reply-card').forEach(addToReply);

      // Observer untuk reply baru
      const replyObs = new MutationObserver(muts => {
        muts.forEach(m => m.addedNodes.forEach(n => {
          if (n.classList?.contains('blt-reply-card')) addToReply(n);
        }));
      });
      replyObs.observe(repliesEl, { childList: true });
    }

    // Inject ke semua card yang sudah ada
    list.querySelectorAll('.blt-card').forEach(addButtonsToCard);

    // Observer untuk card baru
    const obs = new MutationObserver(muts => {
      muts.forEach(m => m.addedNodes.forEach(n => {
        if (n.classList?.contains('blt-card')) addButtonsToCard(n);
      }));
    });
    obs.observe(list, { childList: true });
  }

  /* ── Block modal ── */
  function showBlockModal(msgId, username) {
    const existing = document.getElementById('devBlockOverlay');
    if (existing) existing.remove();

    const overlay = document.createElement('div');
    overlay.className = 'dev-overlay-backdrop';
    overlay.id = 'devBlockOverlay';

    let selectedDuration = null;

    overlay.innerHTML = `
      <div class="dev-card dev-block-card">
        <button class="dev-close-btn" id="blockClose">✕</button>
        <p class="dev-block-title">🚫 Blokir User</p>
        <p class="dev-block-target">Username: <strong>${username}</strong></p>

        <span class="dev-section-label">Durasi Blokir</span>
        <div class="dev-duration-grid" id="durGrid">
          ${DURATIONS.map((d,i) => `<button class="dev-dur-btn" data-idx="${i}">${d.label}</button>`).join('')}
        </div>

        <span class="dev-section-label">Alasan Blokir</span>
        <textarea class="dev-textarea" id="blockReason" rows="3"
          placeholder="Contoh: Spam, kata-kata kasar, dll..."></textarea>

        <button class="dev-btn-danger" id="blockSubmit" disabled>🚫 Blokir Sekarang</button>
        <button class="dev-btn-ghost" id="blockCancel">Batal</button>
      </div>
    `;
    document.body.appendChild(overlay);
    requestAnimationFrame(() => requestAnimationFrame(() => overlay.classList.add('active')));

    // Duration select
    overlay.querySelectorAll('.dev-dur-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        overlay.querySelectorAll('.dev-dur-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        selectedDuration = DURATIONS[parseInt(btn.dataset.idx)];
        overlay.querySelector('#blockSubmit').disabled = false;
      });
    });

    // Submit
    overlay.querySelector('#blockSubmit').addEventListener('click', async () => {
      if (!selectedDuration) return;
      const reason = overlay.querySelector('#blockReason').value.trim() || 'Melanggar aturan situs.';
      const btn = overlay.querySelector('#blockSubmit');
      btn.disabled = true; btn.textContent = 'Memblokir...';

      try {
        // Ambil ownerToken dari pesan
        let ownerToken = null;

        if (msgId && msgId !== 'null') {
          // Ambil langsung dari pesan berdasarkan msgId
          const res  = await fetch(`${FIREBASE_BULLETIN}/${msgId}.json`);
          const data = await res.json();
          ownerToken = data?.ownerToken;
        }

        // Fallback: cari dari semua pesan berdasarkan username
        if (!ownerToken) {
          const res2    = await fetch(`${FIREBASE_BULLETIN}.json`);
          const allData = await res2.json();
          if (allData) {
            const entry = Object.values(allData).find(m => m && m.name === username);
            ownerToken  = entry?.ownerToken;
          }
        }

        // Fallback terakhir: pakai username sebagai block key
        if (!ownerToken) {
          ownerToken = username;
        }

        const blockKey  = ownerToken.replace(/[.#$[\]]/g, '_');
        const untilTime = selectedDuration.ms === -1 ? -1 : Date.now() + selectedDuration.ms;

        await fetch(`${BLOCKED_PATH}/${blockKey}.json`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            username, reason,
            until: untilTime,
            blockedAt: Date.now(),
            ownerToken
          })
        });

        overlay.classList.remove('active');
        setTimeout(() => overlay.remove(), 300);

        // 1. Hapus semua pesan milik user ini dari bulletin
        try {
          const bulletinRes  = await fetch(`${FIREBASE_BULLETIN}.json`);
          const bulletinData = await bulletinRes.json();
          if (bulletinData) {
            for (const [mId, msg] of Object.entries(bulletinData)) {
              if (msg && msg.ownerToken === ownerToken) {
                await fetch(`${FIREBASE_BULLETIN}/${mId}.json`, { method: 'DELETE' });
              }
            }
          }
        } catch(e) { console.warn('[Ban] Gagal hapus pesan:', e); }

        // 2. Simpan ke Firebase agar semua user online dapat bar
        await fetch(`${BAN_ANNOUNCE_PATH}.json`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username, reason, time: Date.now(), ownerToken })
        }).catch(() => {});
        // Dev sendiri langsung dapat (SSE mungkin delay sedikit)
        showBanBar(username, reason);

        // 3. Refresh daftar blokir di panel
        const panel = document.getElementById('devPanelOverlay');
        if (panel) {
          const listEl = panel.querySelector('#devBlockedList');
          if (listEl) loadBlockedList(listEl);
        }
      } catch(e) {
        console.error('[Block] Error:', e);
        ZanModal.open({
          icon: '⚠️', title: 'Gagal Memblokir',
          desc: 'Terjadi error. Coba lagi ya!',
          confirmText: 'OK', cancelText: '', type: 'info'
        });
        btn.disabled = false; btn.textContent = '🚫 Blokir Sekarang';
      }
    });

    overlay.querySelector('#blockClose').addEventListener('click', () => {
      overlay.classList.remove('active'); setTimeout(() => overlay.remove(), 300);
    });
    overlay.querySelector('#blockCancel').addEventListener('click', () => {
      overlay.classList.remove('active'); setTimeout(() => overlay.remove(), 300);
    });
    overlay.addEventListener('click', e => {
      if (e.target === overlay) { overlay.classList.remove('active'); setTimeout(() => overlay.remove(), 300); }
    });
  }

  /* ══════════════════════════════════════════════════════
     DEV PANEL
  ══════════════════════════════════════════════════════ */
  /* ── Load dan tampilkan daftar user terblokir ── */
  async function loadBlockedList(container) {
    try {
      const res  = await fetch(`${BLOCKED_PATH}.json`);
      const data = await res.json();

      if (!data || Object.keys(data).length === 0) {
        container.innerHTML = `<div style="font-size:0.78rem;color:var(--text-3);text-align:center;padding:8px 0">Tidak ada user yang diblokir ✅</div>`;
        return;
      }

      container.innerHTML = '';
      const now = Date.now();

      Object.entries(data).forEach(([blockKey, info]) => {
        if (!info) return;

        // Cek apakah sudah expired
        const expired = info.until !== -1 && now > info.until;
        const untilText = info.until === -1
          ? '♾️ Permanen'
          : expired
            ? '✅ Sudah berakhir'
            : `⏱ ${new Date(info.until).toLocaleString('id-ID')}`;

        const row = document.createElement('div');
        row.style.cssText = `
          display:flex; align-items:center; justify-content:space-between;
          gap:8px; padding:8px 10px; border-radius:10px;
          background:var(--bg-3); border:1px solid var(--border);
          margin-bottom:6px;
          ${expired ? 'opacity:0.5' : ''}
        `;
        row.innerHTML = `
          <div style="flex:1;min-width:0">
            <div style="font-size:0.82rem;font-weight:700;color:var(--text);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">
              ${info.username || '?'}
            </div>
            <div style="font-size:0.72rem;color:var(--text-3);margin-top:2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">
              ${info.reason || '-'}
            </div>
            <div style="font-size:0.7rem;color:${expired ? '#22c55e' : '#f59e0b'};margin-top:2px">
              ${untilText}
            </div>
          </div>
          <button class="dev-unblock-btn" data-key="${blockKey}"
            style="background:${expired ? 'rgba(34,197,94,0.1)' : 'rgba(239,68,68,0.1)'};
            border:1px solid ${expired ? 'rgba(34,197,94,0.3)' : 'rgba(239,68,68,0.3)'};
            color:${expired ? '#22c55e' : '#ef4444'};
            border-radius:8px; padding:5px 10px;
            font-size:0.73rem; font-weight:700;
            cursor:pointer; font-family:'Outfit',sans-serif;
            white-space:nowrap; flex-shrink:0;
            transition:background 0.15s;">
            ${expired ? '🗑 Hapus' : '🔓 Unblokir'}
          </button>
        `;

        // Unblock / hapus
        row.querySelector('.dev-unblock-btn').addEventListener('click', async () => {
          const ok = await ZanModal.open({
            icon: expired ? '🗑️' : '🔓',
            title: expired ? 'Hapus dari daftar?' : `Unblokir "${info.username}"?`,
            desc: expired
              ? 'Hapus data blokir yang sudah berakhir ini.'
              : `User "${info.username}" akan bisa mengakses website lagi.`,
            confirmText: expired ? 'Ya, Hapus' : 'Ya, Unblokir',
            cancelText: 'Batal',
            type: expired ? 'info' : 'info'
          });
          if (!ok) return;
          try {
            await fetch(`${BLOCKED_PATH}/${blockKey}.json`, { method: 'DELETE' });
            row.style.transition = 'opacity .3s, transform .3s';
            row.style.opacity = '0';
            row.style.transform = 'scale(0.96)';
            setTimeout(() => {
              row.remove();
              if (!container.querySelector('[data-key]')) {
                container.innerHTML = `<div style="font-size:0.78rem;color:var(--text-3);text-align:center;padding:8px 0">Tidak ada user yang diblokir ✅</div>`;
              }
            }, 320);
          } catch(e) {
            ZanModal.open({ icon:'⚠️', title:'Gagal', desc:'Coba lagi ya!', confirmText:'OK', cancelText:'', type:'info' });
          }
        });

        container.appendChild(row);
      });
    } catch(e) {
      container.innerHTML = `<div style="font-size:0.78rem;color:#ef4444;text-align:center;padding:8px 0">Gagal memuat data.</div>`;
    }
  }

  /* ── Tab switching ── */
  window.devSwitchTab = function(btn, tabId) {
    const panel = document.getElementById('devPanelOverlay');
    if (!panel) return;
    panel.querySelectorAll('.dev-tab-btn').forEach(b => {
      b.style.background = 'var(--bg-3)';
      b.style.color = 'var(--text-2)';
      b.style.borderColor = 'var(--border)';
    });
    btn.style.background = 'var(--accent)';
    btn.style.color = 'var(--bg)';
    btn.style.borderColor = 'var(--accent)';
    panel.querySelectorAll('[id^="devTab-"]').forEach(t => t.style.display = 'none');
    const tab = panel.querySelector(`#devTab-${tabId}`);
    if (tab) tab.style.display = 'block';
    // Load users kalau tab users dibuka
    if (tabId === 'users') {
      const listEl = panel.querySelector('#devUsersList');
      if (listEl) loadUsersList(listEl);
      // Auto-refresh setiap 30 detik selama tab users aktif
      clearInterval(window._devUsersRefreshTimer);
      window._devUsersRefreshTimer = setInterval(() => {
        const p = document.getElementById('devPanelOverlay');
        const tab = p && p.querySelector('#devTab-users');
        if (!tab || tab.style.display === 'none') {
          clearInterval(window._devUsersRefreshTimer);
          return;
        }
        loadUsersList(document.getElementById('devUsersList'));
      }, 10000); // refresh setiap 10 detik — sinkron dengan heartbeat
    } else {
      clearInterval(window._devUsersRefreshTimer);
    }
  };

  /* ── Load daftar users ── */
  function _timeAgo(ts) {
    if (!ts) return 'Belum pernah online';
    const diff = Math.floor((Date.now() - ts) / 1000);
    if (diff < 45)    return 'Baru saja';
    if (diff < 3600)  return `${Math.floor(diff/60)} menit lalu`;
    if (diff < 86400) return `${Math.floor(diff/3600)} jam lalu`;
    if (diff < 604800)return `${Math.floor(diff/86400)} hari lalu`;
    return new Date(ts).toLocaleDateString('id-ID');
  }

  window.loadUsersList = async function loadUsersList(container) {
    if (!container) container = document.getElementById('devUsersList');
    if (!container) { console.warn('[DevPanel] devUsersList not found'); return; }
    const _FB = 'https://personalweb-zan-default-rtdb.asia-southeast1.firebasedatabase.app';
    const _esc = s => String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
    container.innerHTML = '<div style="font-size:0.78rem;color:var(--text-3);text-align:center;padding:12px">Memuat...</div>';
    try {
      // Ambil dari /users (presence) DAN /bulletin (pesan) sekaligus
      const [usersRes, bulletinRes] = await Promise.all([
        fetch(`${_FB}/users.json`),
        fetch(`${_FB}/bulletin.json`)
      ]);
      const usersData    = usersRes.ok    ? await usersRes.json().catch(() => null)    : null;
      const bulletinData = bulletinRes.ok ? await bulletinRes.json().catch(() => null) : null;
      console.log('[DevPanel] users:', usersData, 'bulletin:', bulletinData ? Object.keys(bulletinData).length + ' msgs' : null);

      // Kumpulkan semua username unik dari bulletin
      const usernameMap = {}; // username -> { msgId, ownerToken }
      if (bulletinData) {
        Object.entries(bulletinData).forEach(([msgId, msg]) => {
          if (!msg || !msg.name) return;
          if (!usernameMap[msg.name]) {
            usernameMap[msg.name] = { msgId, ownerToken: msg.ownerToken };
          }
        });
      }

      // Merge dengan data presence dari /users
      const now = Date.now();
      const merged = {}; // username -> data

      // Dari /users
      if (usersData) {
        Object.entries(usersData).forEach(([userId, u]) => {
          if (!u || !u.username) return;
          const isOnline = u.online === true && (now - (u.lastSeen||0)) < 18000;
          merged[u.username] = {
            username: u.username,
            userId,
            online: isOnline,
            lastSeen: u.lastSeen || u.updatedAt || 0,
            ...(usernameMap[u.username] || {})
          };
        });
      }

      // Dari bulletin — tambah yang belum ada di /users
      // Juga ambil timestamp pesan terakhir sebagai fallback lastSeen
      const bulletinTimes = {};
      if (bulletinData) {
        Object.values(bulletinData).forEach(msg => {
          if (!msg || !msg.name) return;
          if (!bulletinTimes[msg.name] || msg.time > bulletinTimes[msg.name]) {
            bulletinTimes[msg.name] = msg.time;
          }
        });
      }
      Object.entries(usernameMap).forEach(([uname, info]) => {
        if (!merged[uname]) {
          merged[uname] = { username: uname, online: false, lastSeen: bulletinTimes[uname] || 0, ...info };
        } else if (!merged[uname].lastSeen && bulletinTimes[uname]) {
          merged[uname].lastSeen = bulletinTimes[uname];
        }
      });

      if (Object.keys(merged).length === 0) {
        container.innerHTML = '<div style="font-size:0.78rem;color:var(--text-3);text-align:center;padding:12px">Belum ada user terdaftar.</div>';
        return;
      }

      container.innerHTML = '';
      // Sort: online dulu, lalu lastSeen terbaru, lalu alphabetical
      const sorted = Object.values(merged).sort((a, b) => {
        if (a.online && !b.online) return -1;
        if (!a.online && b.online) return 1;
        return (b.lastSeen||0) - (a.lastSeen||0);
      });

      sorted.forEach(user => {
        const color   = ['#6366f1','#ec4899','#f59e0b','#10b981','#3b82f6','#8b5cf6','#ef4444','#14b8a6'][(user.username||'?').charCodeAt(0) % 8];
        const initial = (user.username||'?').charAt(0).toUpperCase();
        const lastSeenStr = _timeAgo(user.lastSeen);

        const row = document.createElement('div');
        row.style.cssText = 'display:flex;align-items:center;gap:8px;padding:8px 10px;border-radius:10px;background:var(--bg-3);border:1px solid var(--border);margin-bottom:6px;';
        row.innerHTML = `
          <div style="width:30px;height:30px;border-radius:50%;background:${color};display:flex;align-items:center;justify-content:center;font-size:0.8rem;font-weight:700;color:#fff;flex-shrink:0">${initial}</div>
          <div style="flex:1;min-width:0">
            <div style="font-size:0.82rem;font-weight:700;color:var(--text);display:flex;align-items:center;gap:5px">
              ${_esc(user.username)}
              ${user.online ? '<span style="width:6px;height:6px;border-radius:50%;background:#22c55e;box-shadow:0 0 5px rgba(34,197,94,0.9);display:inline-block;flex-shrink:0;animation:devNavDotPulse 1.5s ease-in-out infinite"></span>' : ''}
            </div>
            <div style="font-size:0.68rem;color:var(--text-3);margin-top:1px">
              ${user.online
                ? '<span style="color:#22c55e;font-weight:600">● Online sekarang</span>'
                : `<span style="color:var(--text-3)">${lastSeenStr}</span>`}
            </div>
          </div>
          <div style="display:flex;gap:4px;flex-shrink:0">
            <button class="dev-user-block-btn" title="Blokir user" style="background:rgba(239,68,68,0.1);border:1px solid rgba(239,68,68,0.2);color:#ef4444;border-radius:7px;padding:4px 7px;font-size:0.72rem;cursor:pointer;font-family:'Outfit',sans-serif;transition:background 0.15s">🚫</button>
            <button class="dev-user-del-btn" title="Hapus akun" style="background:rgba(239,68,68,0.06);border:1px solid rgba(239,68,68,0.15);color:#ef4444;border-radius:7px;padding:4px 7px;font-size:0.72rem;cursor:pointer;font-family:'Outfit',sans-serif;transition:background 0.15s">🗑️</button>
          </div>
        `;

        row.querySelector('.dev-user-block-btn').addEventListener('click', () => {
          if (user.msgId) {
            showBlockModal(user.msgId, user.username);
          } else {
            fetch(`${_FB}/bulletin.json`)
              .then(r => r.json())
              .then(msgs => {
                if (!msgs) { showBlockModalById(user.userId || user.username, user.username, null); return; }
                const entry = Object.entries(msgs).find(([,m]) => m && m.name === user.username);
                showBlockModal(entry ? entry[0] : null, user.username);
              }).catch(() => showBlockModalById(user.userId || user.username, user.username, null));
          }
        });

        // Tombol hapus akun user
        row.querySelector('.dev-user-del-btn').addEventListener('click', async () => {
          // Tampilkan modal kustom dengan input alasan
          const reason = await new Promise(resolve => {
            const mo = document.createElement('div');
            // Pakai style inline penuh — tidak bergantung pada class CSS dev-overlay-backdrop
            mo.style.cssText = 'position:fixed;inset:0;z-index:99999;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,0.6);backdrop-filter:blur(10px);opacity:0;transition:opacity 0.25s';
            mo.innerHTML = `
              <div id="_delModalCard" style="background:var(--bg-2);border:1px solid var(--border-2);border-radius:18px;padding:22px 20px;max-width:340px;width:90%;box-shadow:0 20px 60px rgba(0,0,0,0.5);transform:scale(0.94);transition:transform 0.25s;opacity:1">
                <div style="text-align:center;margin-bottom:14px">
                  <span style="font-size:2rem">🗑️</span>
                  <h3 style="margin:8px 0 4px;font-size:1rem;color:var(--text);font-family:'Outfit',sans-serif">Hapus Akun <span style="color:#ef4444">"${_esc(user.username)}"</span>?</h3>
                  <p style="font-size:0.78rem;color:var(--text-3);margin:0;font-family:'Outfit',sans-serif">Semua pesan & data user ini akan dihapus permanen.</p>
                </div>
                <label style="font-size:0.75rem;color:var(--text-2);font-weight:600;display:block;margin-bottom:5px;font-family:'Outfit',sans-serif">Alasan Penghapusan <span style="color:var(--text-3);font-weight:400">(opsional)</span></label>
                <textarea id="_delReasonInput" rows="3" placeholder="Contoh: Melanggar aturan penggunaan..." style="width:100%;box-sizing:border-box;background:var(--bg-3);border:1px solid var(--border);border-radius:8px;padding:8px 10px;color:var(--text);font-size:0.8rem;font-family:'Outfit',sans-serif;resize:none;outline:none" maxlength="200"></textarea>
                <div style="display:flex;gap:8px;margin-top:12px">
                  <button id="_delCancelBtn" style="flex:1;padding:9px;border-radius:8px;background:var(--bg-3);border:1px solid var(--border);color:var(--text-2);font-size:0.82rem;cursor:pointer;font-family:'Outfit',sans-serif">Batal</button>
                  <button id="_delConfirmBtn" style="flex:1;padding:9px;border-radius:8px;background:#ef4444;border:none;color:#fff;font-size:0.82rem;font-weight:700;cursor:pointer;font-family:'Outfit',sans-serif">Ya, Hapus!</button>
                </div>
              </div>`;
            document.body.appendChild(mo);
            // Animasi masuk
            requestAnimationFrame(() => requestAnimationFrame(() => {
              mo.style.opacity = '1';
              mo.querySelector('#_delModalCard').style.transform = 'scale(1)';
            }));
            const ta = mo.querySelector('#_delReasonInput');
            setTimeout(() => ta && ta.focus(), 250);
            const doClose = (val) => {
              mo.style.opacity = '0';
              setTimeout(() => { mo.remove(); resolve(val); }, 220);
            };
            mo.querySelector('#_delCancelBtn').addEventListener('click', () => doClose(null));
            mo.querySelector('#_delConfirmBtn').addEventListener('click', () => doClose(ta.value.trim()));
            mo.addEventListener('click', e => { if (e.target === mo) doClose(null); });
          });
          if (reason === null) return; // batal

          try {
            // 1. Hapus semua pesan milik user dari bulletin
            const bRes  = await fetch(`${_FB}/bulletin.json`);
            const bData = await bRes.json();
            if (bData) {
              for (const [mId, msg] of Object.entries(bData)) {
                if (!msg) continue;
                if (msg.name === user.username || (user.ownerToken && msg.ownerToken === user.ownerToken)) {
                  await fetch(`${_FB}/bulletin/${mId}.json`, { method: 'DELETE' });
                } else if (msg.replies) {
                  for (const [rId, reply] of Object.entries(msg.replies)) {
                    if (reply && reply.name === user.username) {
                      await fetch(`${_FB}/bulletin/${mId}/replies/${rId}.json`, { method: 'DELETE' });
                    }
                  }
                }
              }
            }
            // 2. Hapus dari /users
            if (user.userId) await fetch(`${_FB}/users/${user.userId}.json`, { method: 'DELETE' });
            // 3. Hapus blocked entry kalau ada
            if (user.ownerToken) {
              const bKey = user.ownerToken.replace(/[.#$[\]]/g,'_');
              await fetch(`${_FB}/blocked_users/${bKey}.json`, { method: 'DELETE' });
            }
            // 4. Blacklist by userId (untuk kick localStorage) DAN by username (cegah re-register)
            const _delPayload = { username: user.username, deletedAt: Date.now(), reason: reason || '' };
            if (user.userId) {
              await fetch(`${_FB}/deleted_users/${user.userId}.json`, {
                method: 'PUT', headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(_delPayload)
              });
            }
            // Blacklist username agar tidak bisa dipakai ulang oleh siapapun
            const _unameKey = user.username.replace(/[.#$[\]/]/g, '_');
            await fetch(`${_FB}/deleted_usernames/${_unameKey}.json`, {
              method: 'PUT', headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(_delPayload)
            }).catch(() => {});

            // Hapus row dari UI
            row.style.transition = 'opacity 0.3s, transform 0.3s';
            row.style.opacity = '0';
            row.style.transform = 'scale(0.96)';
            setTimeout(() => {
              row.remove();
              loadUsersList(container);
            }, 300);

            // Langsung hapus dari panel online widget tanpa tunggu poll
            if (window._owRemoveUser) window._owRemoveUser(user.userId, user.username);

            ZanModal.open({ icon:'✅', title:'Akun Dihapus', desc:`Akun "${_esc(user.username)}" berhasil dihapus.`, confirmText:'OK', cancelText: null, type:'info' });
          } catch(e) {
            ZanModal.open({ icon:'⚠️', title:'Gagal', desc:'Terjadi error saat menghapus akun.', confirmText:'OK', cancelText:'', type:'info' });
          }
        });

        container.appendChild(row);
      });

      // Counter online
      const onlineCount = sorted.filter(u => u.online).length;
      const counter = document.createElement('div');
      counter.style.cssText = 'font-size:0.7rem;color:var(--text-3);text-align:center;padding:4px 0 2px;';
      counter.textContent = `${sorted.length} user terdaftar · ${onlineCount} online`;
      container.insertBefore(counter, container.firstChild);

    } catch(e) {
      console.error('[DevPanel] loadUsersList error:', e);
      container.innerHTML = '<div style="font-size:0.78rem;color:#ef4444;text-align:center;padding:12px">Gagal memuat data. <button onclick="loadUsersList()" style="background:none;border:none;color:var(--accent);cursor:pointer;font-family:Outfit,sans-serif;font-size:0.78rem;text-decoration:underline">Coba lagi</button></div>';
    }
  }

  /* ── Block modal by userId (dari daftar users) ── */
  function showBlockModalById(userId, username, msgId) {
    // Cari ownerToken dari messages
    if (msgId) {
      showBlockModal(msgId, username);
    } else {
      // Tidak ada pesan — blokir langsung pakai userId sebagai key
      const blockKey = userId.replace(/[.#$[\]]/g, '_');
      // Buat block modal manual
      const overlay = document.createElement('div');
      overlay.className = 'dev-overlay-backdrop';
      overlay.id = 'devBlockOverlay';
      let selectedDuration = null;
      overlay.innerHTML = `
        <div class="dev-card dev-block-card">
          <button class="dev-close-btn" id="blockClose">✕</button>
          <p class="dev-block-title">🚫 Blokir User</p>
          <p class="dev-block-target">Username: <strong>${username}</strong></p>
          <span class="dev-section-label">Durasi Blokir</span>
          <div class="dev-duration-grid" id="durGrid">
            ${DURATIONS.map((d,i) => `<button class="dev-dur-btn" data-idx="${i}">${d.label}</button>`).join('')}
          </div>
          <span class="dev-section-label">Alasan Blokir</span>
          <textarea class="dev-textarea" id="blockReason" rows="3" placeholder="Alasan..."></textarea>
          <button class="dev-btn-danger" id="blockSubmit" disabled>🚫 Blokir</button>
          <button class="dev-btn-ghost" id="blockCancel">Batal</button>
        </div>
      `;
      document.body.appendChild(overlay);
      requestAnimationFrame(() => requestAnimationFrame(() => overlay.classList.add('active')));

      overlay.querySelectorAll('.dev-dur-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          overlay.querySelectorAll('.dev-dur-btn').forEach(b => b.classList.remove('selected'));
          btn.classList.add('selected');
          selectedDuration = DURATIONS[parseInt(btn.dataset.idx)];
          overlay.querySelector('#blockSubmit').disabled = false;
        });
      });

      overlay.querySelector('#blockSubmit').addEventListener('click', async () => {
        if (!selectedDuration) return;
        const reason = overlay.querySelector('#blockReason').value.trim() || 'Melanggar aturan situs.';
        const untilTime = selectedDuration.ms === -1 ? -1 : Date.now() + selectedDuration.ms;
        const _FB2 = 'https://personalweb-zan-default-rtdb.asia-southeast1.firebasedatabase.app';
        await fetch(`${_FB2}/blocked_users/${blockKey}.json`, {
          method: 'PUT', headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username, reason, until: untilTime, blockedAt: Date.now() })
        });
        // Simpan ban announcement
        await fetch(`${_FB2}/ban_announcements.json`, {
          method: 'PUT', headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username, reason, time: Date.now() })
        }).catch(() => {});
        showBanBar(username, reason);
        overlay.classList.remove('active');
        setTimeout(() => overlay.remove(), 300);
        ZanModal.open({ icon:'🚫', title:'User Diblokir!', desc:`"${username}" berhasil diblokir.`, confirmText:'OK', cancelText:'', type:'info' });
      });

      overlay.querySelector('#blockClose').addEventListener('click', () => { overlay.classList.remove('active'); setTimeout(() => overlay.remove(), 300); });
      overlay.querySelector('#blockCancel').addEventListener('click', () => { overlay.classList.remove('active'); setTimeout(() => overlay.remove(), 300); });
    }
  }

  function buildDevPanel() {
    const existing = document.getElementById('devPanelOverlay');
    if (existing) { existing.classList.add('active'); return; }

    const overlay = document.createElement('div');
    overlay.className = 'dev-overlay-backdrop';
    overlay.id = 'devPanelOverlay';
    const lang = typeof currentLang !== 'undefined' ? currentLang : 'id';

    overlay.innerHTML = `
      <div class="dev-card dev-panel-card">
        <div class="dev-panel-header">
          <h3 class="dev-panel-title">
            👑 <span class="dev-panel-title-gold">Developer Panel</span>
          </h3>
          <button class="dev-close-btn" id="devPanelClose">✕</button>
        </div>

        <!-- Tab navigation -->
        <div style="display:flex;gap:6px;margin-bottom:16px">
          <button class="dev-tab-btn active" data-tab="announce" onclick="devSwitchTab(this,'announce')" style="flex:1;padding:7px;border-radius:8px;background:var(--bg-3);border:1px solid var(--border);color:var(--text);font-size:0.75rem;font-weight:700;cursor:pointer;font-family:'Outfit',sans-serif;transition:all 0.2s">📣 Pengumuman</button>
          <button class="dev-tab-btn" data-tab="users" onclick="devSwitchTab(this,'users')" style="flex:1;padding:7px;border-radius:8px;background:var(--bg-3);border:1px solid var(--border);color:var(--text-2);font-size:0.75rem;font-weight:700;cursor:pointer;font-family:'Outfit',sans-serif;transition:all 0.2s">👥 Users</button>
          <button class="dev-tab-btn" data-tab="block" onclick="devSwitchTab(this,'block')" style="flex:1;padding:7px;border-radius:8px;background:var(--bg-3);border:1px solid var(--border);color:var(--text-2);font-size:0.75rem;font-weight:700;cursor:pointer;font-family:'Outfit',sans-serif;transition:all 0.2s">🚫 Blokir</button>
        </div>

        <!-- Tab: Pengumuman -->
        <div id="devTab-announce">
        <span class="dev-section-label">📣 ${lang === 'en' ? 'Announcement' : 'Pengumuman'} (ID)</span>
        <textarea class="dev-textarea" id="devAnnId" rows="3"
          placeholder="${lang === 'en' ? 'Indonesian announcement...' : 'Isi pengumuman Bahasa Indonesia...'}"></textarea>

        <span class="dev-section-label">📣 ${lang === 'en' ? 'Announcement' : 'Pengumuman'} (EN)</span>
        <textarea class="dev-textarea" id="devAnnEn" rows="3"
          placeholder="English announcement..."></textarea>

        <div style="display:flex;gap:8px;margin-top:4px">
          <button class="dev-btn-gold" id="devSendAnn" style="flex:1">
            📣 ${lang === 'en' ? 'Send' : 'Kirim Biasa'}
          </button>
          <button class="dev-btn-gold" id="devSendAnnReply" style="flex:1;background:transparent;border:1px solid var(--accent);color:var(--accent)">
            💬 ${lang === 'en' ? 'Send + Reply' : 'Kirim + Balas'}
          </button>
        </div>

        <hr style="border:none;border-top:1px solid var(--border);margin:18px 0 14px">
        <span class="dev-section-label">🏆 Manajemen Quiz</span>
        <p style="font-size:0.75rem;color:var(--text-3);margin:4px 0 10px;font-family:'Outfit',sans-serif">Reset leaderboard quiz — semua skor akan dihapus dan countdown direset ke 3 hari.</p>
        <button class="dev-btn-ghost" id="devResetQuizLb" style="color:#ef4444;border-color:rgba(239,68,68,0.3)">
          🗑️ Reset Leaderboard Quiz
        </button>

        </div><!-- end tab announce -->

        <!-- Tab: Users -->
        <div id="devTab-users" style="display:none">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px">
            <span class="dev-section-label" style="margin:0">👥 Users Terdaftar</span>
            <button onclick="loadUsersList(document.getElementById('devUsersList'))" style="background:none;border:1px solid var(--border);border-radius:6px;color:var(--text-3);font-size:0.7rem;padding:2px 8px;cursor:pointer;font-family:'Outfit',sans-serif">↻ Refresh</button>
          </div>
          <div id="devUsersList" style="max-height:280px;overflow-y:auto;margin-bottom:8px">
            <div style="font-size:0.78rem;color:var(--text-3);text-align:center;padding:12px">Memuat...</div>
          </div>
        </div><!-- end tab users -->

        <!-- Tab: Blokir -->
        <div id="devTab-block" style="display:none">
        <span class="dev-section-label">🔓 Manajemen Blokir</span>
        <div id="devBlockedList" style="margin-bottom:8px">
          <div style="font-size:0.78rem;color:var(--text-3);text-align:center;padding:8px">
            Memuat daftar user terblokir...
          </div>
        </div>
        </div><!-- end tab block -->

        <hr class="dev-divider">
        <button class="dev-btn-ghost" id="devLogout">
          ${lang === 'en' ? 'Logout from King Zann Mode' : 'Keluar dari Mode King Zann'}
        </button>
      </div>
    `;
    document.body.appendChild(overlay);
    requestAnimationFrame(() => requestAnimationFrame(() => overlay.classList.add('active')));

    overlay.querySelector('#devPanelClose').addEventListener('click', () => {
      overlay.classList.remove('active');
      if (_devReplyPreviewTimer) { clearInterval(_devReplyPreviewTimer); _devReplyPreviewTimer = null; }
    });
    overlay.addEventListener('click', e => {
      if (e.target === overlay) overlay.classList.remove('active');
    });

    async function _doSendAnn(withReply) {
      const msgId = overlay.querySelector('#devAnnId').value.trim();
      const msgEn = overlay.querySelector('#devAnnEn').value.trim();
      if (!msgId) {
        _showDevToast(overlay, lang === 'en' ? '⚠️ Fill in Indonesian text!' : '⚠️ Isi pengumuman Bahasa Indonesia!', 'warn');
        return;
      }
      const btnN = overlay.querySelector('#devSendAnn');
      const btnR = overlay.querySelector('#devSendAnnReply');
      if (btnN) btnN.disabled = true;
      if (btnR) btnR.disabled = true;
      try {
        const _annTime = Date.now();
        await fetch(`${ANNOUNCE_PATH}.json`, {
          method: 'PUT', headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ msg: msgId, msgEn: msgEn || msgId, time: _annTime, allowReply: withReply })
        });
        overlay.querySelector('#devAnnId').value = '';
        overlay.querySelector('#devAnnEn').value = '';
        _showDevToast(overlay, '✅ Pengumuman berhasil dikirim!', 'success');
        // Mulai live preview reply — pakai _annTime yang sama persis
        // yang disimpan di Firebase, bukan Date.now() baru
        if (withReply) _startDevReplyPreview(_annTime);
      } catch(e) { _showDevToast(overlay, '❌ Gagal kirim! Coba lagi.', 'error'); }
      if (btnN) btnN.disabled = false;
      if (btnR) btnR.disabled = false;
    }
    overlay.querySelector('#devSendAnn')?.addEventListener('click', () => _doSendAnn(false));
    overlay.querySelector('#devSendAnnReply')?.addEventListener('click', () => _doSendAnn(true));

    // ── Reply Preview untuk dev ──────────────────────────────────
    // Saat dev kirim announcement + reply, munculkan live preview
    // di bawah form agar dev bisa melihat balasan user secara realtime.
    let _devReplyPreviewTimer = null;
    let _devReplyShown = new Set();
    let _devReplyAnnTime = null;

    function _startDevReplyPreview(annTime) {
      _devReplyAnnTime = annTime;
      _devReplyShown.clear();
      if (_devReplyPreviewTimer) clearInterval(_devReplyPreviewTimer);

      // Buat / reset preview container
      let previewBox = overlay.querySelector('#devReplyPreview');
      if (!previewBox) {
        previewBox = document.createElement('div');
        previewBox.id = 'devReplyPreview';
        previewBox.style.cssText = 'margin-top:14px;border-top:1px solid var(--border);padding-top:12px;';
        previewBox.innerHTML = `
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;">
            <span style="font-size:0.72rem;font-weight:700;color:var(--text-3);letter-spacing:0.04em;">💬 REPLY DARI USER</span>
            <button id="devReplyClear" style="background:none;border:1px solid rgba(239,68,68,0.35);border-radius:6px;color:#ef4444;font-size:0.68rem;font-weight:700;padding:2px 8px;cursor:pointer;font-family:'Outfit',sans-serif;transition:opacity 0.15s;" title="Hapus semua reply dari Firebase">🗑 Bersihkan</button>
          </div>
          <div id="devReplyList" style="display:flex;flex-direction:column;gap:6px;max-height:200px;overflow-y:auto;"></div>
          <div id="devReplyEmpty" style="font-size:0.75rem;color:var(--text-3);text-align:center;padding:10px 0;">
            Belum ada reply...
          </div>`;
        // Sisipkan setelah tombol kirim
        const btnRow = overlay.querySelector('#devSendAnn')?.closest('div');
        if (btnRow) btnRow.insertAdjacentElement('afterend', previewBox);
        else overlay.querySelector('#devTab-announce').appendChild(previewBox);
      }

      const listEl  = overlay.querySelector('#devReplyList');
      const emptyEl = overlay.querySelector('#devReplyEmpty');
      listEl.innerHTML = '';
      emptyEl.style.display = 'block';

      function _rColor(name) {
        const cols = ['#6366f1','#8b5cf6','#ec4899','#14b8a6','#f59e0b','#3b82f6','#10b981','#f97316'];
        let h = 0; for (let i=0;i<name.length;i++) h=name.charCodeAt(i)+((h<<5)-h);
        return cols[Math.abs(h)%cols.length];
      }

      async function _pollReplies() {
        try {
          const res = await fetch(`${FIREBASE_URL}/ann_replies.json`);
          const d   = res.ok ? await res.json() : null;
          if (!d) return;
          let hasNew = false;
          Object.entries(d).forEach(([id, item]) => {
            if (!item || item.annTime !== _devReplyAnnTime) return;
            if (_devReplyShown.has(id)) return;
            _devReplyShown.add(id);
            hasNew = true;
            emptyEl.style.display = 'none';
            const name = (item.name || 'Anonim').replace(/</g,'&lt;');
            const text = (item.text || '').replace(/</g,'&lt;');
            const el   = document.createElement('div');
            el.style.cssText = 'display:flex;align-items:flex-start;gap:8px;padding:6px 8px;background:var(--bg-3);border-radius:10px;';
            el.innerHTML = `
              <div style="width:26px;height:26px;border-radius:50%;background:${_rColor(item.name||'')};display:flex;align-items:center;justify-content:center;font-size:0.68rem;font-weight:700;color:#fff;flex-shrink:0;">
                ${(item.name||'A').charAt(0).toUpperCase()}
              </div>
              <div style="min-width:0;">
                <span style="font-size:0.78rem;font-weight:700;color:var(--text);">${name}</span>
                <span style="font-size:0.78rem;color:var(--text-2);margin-left:4px;">${text}</span>
              </div>`;
            listEl.appendChild(el);
            listEl.scrollTop = listEl.scrollHeight;
          });
        } catch(e) {}
      }

      _pollReplies();
      _devReplyPreviewTimer = setInterval(_pollReplies, 2000);

      // Tombol bersihkan — hapus semua reply dari Firebase
      const clearBtn = overlay.querySelector('#devReplyClear');
      if (clearBtn) {
        clearBtn.addEventListener('click', async () => {
          clearBtn.disabled = true;
          clearBtn.textContent = '⏳';
          try {
            await fetch(`${FIREBASE_URL}/ann_replies.json`, { method: 'DELETE' });
            _devReplyShown.clear();
            listEl.innerHTML = '';
            emptyEl.style.display = 'block';
          } catch(e) {}
          clearBtn.disabled = false;
          clearBtn.textContent = '🗑 Bersihkan';
        });
      }
    }



    // Reset leaderboard quiz
    overlay.querySelector('#devResetQuizLb')?.addEventListener('click', async () => {
      const ok = await ZanModal.open({
        icon: '🏆',
        title: 'Reset Leaderboard Quiz?',
        desc: 'Semua skor akan dihapus permanen dan countdown direset ke 3 hari. Tidak bisa dibatalkan!',
        confirmText: 'Ya, Reset!', cancelText: 'Batal', type: 'danger'
      });
      if (!ok) return;
      const resetBtn = overlay.querySelector('#devResetQuizLb');
      resetBtn.disabled = true;
      resetBtn.textContent = '⏳ Mereset...';
      const success = await (window._quizDevReset ? window._quizDevReset() : Promise.resolve(false));
      if (success) {
        ZanModal.open({ icon:'✅', title:'Berhasil!', desc:'Leaderboard quiz berhasil direset.', confirmText:'OK', cancelText:null, type:'info' });
        resetBtn.textContent = '✅ Berhasil Direset';
      } else {
        resetBtn.disabled = false;
        resetBtn.textContent = '🗑️ Reset Leaderboard Quiz';
        ZanModal.open({ icon:'⚠️', title:'Gagal', desc:'Terjadi error saat reset.', confirmText:'OK', cancelText:'', type:'info' });
      }
    });

    // Load daftar user terblokir
    loadBlockedList(overlay.querySelector('#devBlockedList'));
    // Load daftar users — jalankan di background, hasilnya sudah siap saat tab Users dibuka
    setTimeout(() => {
      const el = overlay.querySelector('#devUsersList');
      if (el) loadUsersList(el);
    }, 500);

    overlay.querySelector('#devLogout').addEventListener('click', () => {
      showDevModeFlash(false);
      fetch(`${FIREBASE_URL}/dev_status.json`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ online: false, time: Date.now() })
      }).catch(() => {});
      updateDevNavStatus(false);
      // 1. Ambil username asli
      const prevUname = sessionStorage.getItem('zanpw_prev_username') || '';

      // 2. Restore username asli ke localStorage DULU sebelum apapun
      if (prevUname) {
        localStorage.setItem('zanpw_username', prevUname);
      } else {
        localStorage.removeItem('zanpw_username');
      }

      // 3. Bersihkan session
      sessionStorage.removeItem(DEV_KEY);
      sessionStorage.removeItem('zanpw_prev_username');

      // 4. Update chip — sekarang sudah baca username yang benar
      if (typeof window._zanpwUpdateChip === 'function') window._zanpwUpdateChip();

      // 5. Update hidden name input di form bulletin
      const nameInput = document.getElementById('bulletinName');
      if (nameInput) nameInput.value = prevUname;

      // 6. Bersihkan UI dev
      overlay.remove();
      document.querySelector('.dev-panel-btn')?.remove();
      document.querySelectorAll('.blt-dev-del, .blt-dev-block, .blt-dev-del-reply, .blt-dev-fav-btn').forEach(b => b.remove());
      document.querySelectorAll('.blt-name.dev-badge').forEach(el => el.classList.remove('dev-badge'));
      _toggleDevChipButtons(false);
    });
  }

  /* ── Dev button ── */
  function showDevButton() {
    if (document.querySelector('.dev-panel-btn')) return;
    const btn = document.createElement('button');
    btn.className = 'dev-panel-btn';
    btn.innerHTML = '👑 Dev Panel';
    document.body.appendChild(btn);
    btn.addEventListener('click', buildDevPanel);
  }

  /* ══════════════════════════════════════════════════════
     LOGIN
  ══════════════════════════════════════════════════════ */
  function showLoginUI() {
    const existing = document.getElementById('devLoginOverlay');
    if (existing) { existing.classList.add('active'); return; }

    const overlay = document.createElement('div');
    overlay.className = 'dev-overlay-backdrop';
    overlay.id = 'devLoginOverlay';

    overlay.innerHTML = `
      <div class="dev-card dev-login-card">
        <button class="dev-close-btn" id="devLoginClose" style="position:absolute;top:14px;right:14px">✕</button>
        <p class="dev-login-title">👑 Developer Login</p>
        <p class="dev-login-sub">Masukkan username dan password developer</p>
        <input type="text" class="dev-input" id="devUnameInput"
          placeholder="Username..." autocomplete="off" spellcheck="false" />
        <input type="password" class="dev-input" id="devPwInput" placeholder="Password..." />
        <button class="dev-btn-gold" id="devLoginSubmit">Masuk</button>
        <p class="dev-login-err" id="devLoginErr">Username atau password salah!</p>
      </div>
    `;
    document.body.appendChild(overlay);
    requestAnimationFrame(() => requestAnimationFrame(() => overlay.classList.add('active')));

    const unameEl = overlay.querySelector('#devUnameInput');
    const pwEl    = overlay.querySelector('#devPwInput');
    const errEl   = overlay.querySelector('#devLoginErr');

    const doLogin = () => {
      if (unameEl.value.trim() === DEV_LOGIN_ID && pwEl.value === DEV_PASSWORD) {
        sessionStorage.setItem(DEV_KEY, '1');
        // Simpan username asli sebelum diganti ke Developer
        const _prevUname = localStorage.getItem('zanpw_username') || '';
        sessionStorage.setItem('zanpw_prev_username', _prevUname);
        localStorage.setItem('zanpw_username', DEV_USERNAME);
        localStorage.setItem('zanpw_username_ts', Date.now().toString());
        overlay.classList.remove('active');
        setTimeout(() => overlay.remove(), 300);
        if (typeof window._zanpwUpdateChip === 'function') window._zanpwUpdateChip();
        showDevModeFlash(true);
        fetch(`${FIREBASE_URL}/dev_status.json`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ online: true, time: Date.now() })
        }).catch(() => {});
        // Saat dev login: heartbeat tetap berjalan (user tetap online),
        // panel cukup hide King Zann dan prev_username via filter _render.
        // Dev sendiri juga lihat statusnya di navbar
        updateDevNavStatus(true);
        showDevButton();
        applyDevBadge();
        injectDevButtons();
        // Sembunyikan tombol Hapus Akun dan Ganti saat dev mode
        _toggleDevChipButtons(true);
      } else {
        errEl.style.display = 'block';
        pwEl.value = ''; unameEl.value = '';
        unameEl.focus();
        setTimeout(() => errEl.style.display = 'none', 2500);
      }
    };

    overlay.querySelector('#devLoginSubmit').addEventListener('click', doLogin);
    unameEl.addEventListener('keydown', e => { if (e.key === 'Enter') pwEl.focus(); });
    pwEl.addEventListener('keydown', e => { if (e.key === 'Enter') doLogin(); });
    overlay.querySelector('#devLoginClose').addEventListener('click', () => {
      overlay.classList.remove('active'); setTimeout(() => overlay.remove(), 300);
    });
    overlay.addEventListener('click', e => {
      if (e.target === overlay) { overlay.classList.remove('active'); setTimeout(() => overlay.remove(), 300); }
    });
    setTimeout(() => unameEl.focus(), 400);
  }

  /* ══════════════════════════════════════════════════════
     SECRET TRIGGER — ketuk footer 5x
  ══════════════════════════════════════════════════════ */
  let _tapCount = 0, _tapTimer = null;
  function setupSecretTrigger() {
    // Trigger: klik 5x di badge "King Zann : Online/Offline" di navbar
    const trigger = document.getElementById('devNavStatus');
    if (!trigger) return;
    trigger.style.cursor = 'pointer';
    trigger.addEventListener('click', () => {
      _tapCount++;
      clearTimeout(_tapTimer);
      _tapTimer = setTimeout(() => { _tapCount = 0; }, 2000);
      if (_tapCount >= 5) {
        _tapCount = 0;
        isDevLoggedIn() ? buildDevPanel() : showLoginUI();
      }
    });
  }

  /* ══════════════════════════════════════════════════════
     INIT
  ══════════════════════════════════════════════════════ */
  // Cek blokir saat load
  checkIfBlocked();

  // Listen pengumuman
  listenAnnouncements();

  /* ══════════════════════════════════════════════════════
     USER PRESENCE TOAST — broadcast online/offline ke semua user
  ══════════════════════════════════════════════════════ */

  /* ── SFX user presence ── */
  const _uptSFXOnline  = new Audio('files/dcenter.mp3');
  const _uptSFXOffline = new Audio('files/dcleave.mp3');
  _uptSFXOnline.preload  = 'auto';
  _uptSFXOffline.preload = 'auto';

  function _playUptSFX(online) {
    try {
      const sfx = online ? _uptSFXOnline : _uptSFXOffline;
      sfx.currentTime = 0; sfx.volume = 1;
      sfx.play().catch(() => {});
    } catch(e) {}
  }

  /* Warna avatar dari nama (sama dengan sistem bulletin) */
  function _uptAvatarColor(name) {
    const colors = ['#6366f1','#8b5cf6','#ec4899','#14b8a6','#f59e0b','#3b82f6','#10b981','#f97316'];
    let h = 0;
    for (let i = 0; i < name.length; i++) h = name.charCodeAt(i) + ((h << 5) - h);
    return colors[Math.abs(h) % colors.length];
  }

  let _uptTimer = null;
  function showUserPresenceToast(username, online) {
    // Jangan tampilkan toast untuk diri sendiri
    const myName = localStorage.getItem('zanpw_username') || '';
    if (username === myName) return;

    // Hapus toast lama
    document.querySelectorAll('.user-presence-toast').forEach(el => el.remove());
    clearTimeout(_uptTimer);

    const lang   = typeof currentLang !== 'undefined' ? currentLang : 'id';
    const action = online
      ? (lang === 'en' ? 'is now online' : 'baru saja online')
      : (lang === 'en' ? 'went offline'  : 'baru saja offline');

    const toast = document.createElement('div');
    toast.className = 'user-presence-toast';
    toast.innerHTML = `
      <div class="upt-avatar" style="background:${_uptAvatarColor(username)}">${username.charAt(0).toUpperCase()}</div>
      <div class="upt-dot ${online ? 'online' : 'offline'}"></div>
      <span class="upt-text"><strong>${username}</strong> ${action}</span>
    `;
    document.body.appendChild(toast);
    _playUptSFX(online);

    // TEPAT saat toast mulai terlihat di layar:
    // patch _lastUsers lokal dan render ulang panel — tanpa fetch ke Firebase.
    // Ini menjamin panel update bersamaan 1:1 dengan munculnya toast.
    requestAnimationFrame(() => requestAnimationFrame(() => {
      toast.classList.add('upt-show');
      // Patch data lokal langsung — tidak perlu tunggu network
      if (window._owPatchUser) window._owPatchUser(username, online);
    }));

    _uptTimer = setTimeout(() => {
      toast.classList.remove('upt-show');
      toast.classList.add('upt-hide');
      setTimeout(() => toast.remove(), 400);
    }, 4000);
  }

  function listenUserPresence() {
    const _FB        = 'https://personalweb-zan-default-rtdb.asia-southeast1.firebasedatabase.app';
    const _loadTime  = Date.now();
    let   _lastTime  = 0;
    let   _lastShown = 0;

    async function _poll() {
      try {
        const res  = await fetch(`${_FB}/user_joined.json`);
        const data = res.ok ? await res.json() : null;
        if (!data?.username || !data?.time) return;
        // Skip data lama dari sebelum halaman dibuka
        if (data.time <= _loadTime) return;
        // Skip kalau sudah pernah ditampilkan
        if (data.time <= _lastShown) return;
        _lastShown = data.time;
        showUserPresenceToast(data.username, data.online !== false);
      } catch(e) {}
    }

    // Poll setiap 2 detik
    setInterval(_poll, 2000);
  }

  /* ── Broadcast user joined ── */
  window._broadcastUserJoined = function(username) {
    if (!username || username === 'Anonim') return;
    const _FB = 'https://personalweb-zan-default-rtdb.asia-southeast1.firebasedatabase.app';
    // Tulis ke /user_joined — pengunjung lain akan mendeteksi ini via polling
    // dan showUserPresenceToast akan menangani update panel secara lokal.
    // _zanpwDoFirstOnline dipanggil langsung setelah broadcast berhasil.
    fetch(`${_FB}/user_joined.json`, {
      method : 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body   : JSON.stringify({ username, online: true, time: Date.now() })
    }).then(() => {
      if (window._zanpwDoFirstOnline) window._zanpwDoFirstOnline();
    }).catch(() => {
      if (window._zanpwDoFirstOnline) window._zanpwDoFirstOnline();
    });
  };

  /* ── Broadcast user left ── */
  window._broadcastUserLeft = function(username) {
    if (!username || username === 'Anonim') return;
    const _FB = 'https://personalweb-zan-default-rtdb.asia-southeast1.firebasedatabase.app';
    fetch(`${_FB}/user_joined.json`, {
      method   : 'PUT',
      headers  : { 'Content-Type': 'application/json' },
      body     : JSON.stringify({ username, online: false, time: Date.now() }),
      keepalive: true
    }).catch(() => {});
  };

  listenUserPresence();

  // Pre-render ghost toast di luar layar untuk warm up GPU compositing layer
  // Ini eliminasi jank/lag saat toast pertama kali muncul
  (function preloadToastLayer() {
    const ghost = document.createElement('div');
    ghost.className = 'dev-ann-toast';
    ghost.style.cssText = 'pointer-events:none;visibility:hidden;';
    ghost.innerHTML = '<div class="dat-icon-wrap">📣</div><div class="dat-body"><span class="dat-label">.</span><span class="dat-msg">.</span></div><div class="dat-progress-wrap"><div class="dat-progress"></div></div><div class="dat-fire-wrap"></div>';
    document.body.appendChild(ghost);
    // Biarkan browser paint satu frame, lalu hapus ghost
    requestAnimationFrame(() => requestAnimationFrame(() => ghost.remove()));
  })();

  // Listen ban announcements (semua user)
  listenBanAnnouncements();

  // Listen dev online/offline status
  listenDevStatus();

  // Listen realtime blokir untuk user yang sedang online
  listenBlockedRealtime();



  // Kalau session dev masih aktif
  if (isDevLoggedIn()) {
    let _devShown = false;

    function showDevAfterSplit() {
      if (_devShown) return;
      _devShown = true;
      showDevButton();
      applyDevBadge();
      injectDevButtons();
      _toggleDevChipButtons(true);
    }

    // Muncul TEPAT saat split selesai + user bisa sentuh
    document.addEventListener('zanpw:siteEntered', () => {
      showDevAfterSplit(); // langsung tanpa delay
    }, { once: true });

    // Fallback kalau event tidak terpicu (mobile, dsb)
    // doneDelay max = splitDelay(5200) + 3000 = 8200ms, tambah 1 detik buffer
    setTimeout(showDevAfterSplit, 9200);
  }

  // Setup footer trigger
  setTimeout(setupSecretTrigger, 2000);

})();

/* ═══════════════════════════════════════════════════════════
   ONLINE USERS WIDGET
   ═══════════════════════════════════════════════════════════ */
(function initOnlineWidget() {
  const _FB    = 'https://personalweb-zan-default-rtdb.asia-southeast1.firebasedatabase.app';
  const toggle = document.getElementById('onlineWidgetToggle');
  const panel  = document.getElementById('onlineWidgetPanel');
  const list   = document.getElementById('onlineWidgetList');
  const countEl= document.getElementById('onlineWidgetCount');
  const titleEl= document.getElementById('onlineWidgetTitle');
  if (!toggle || !panel || !list) return;

  // Pindahkan panel ke body agar tidak terclip oleh stacking context navbar
  document.body.appendChild(panel);

  function _positionPanel() {
    const rect = toggle.getBoundingClientRect();
    panel.style.position = 'fixed';
    panel.style.top  = (rect.bottom + 8) + 'px';
    panel.style.right = (window.innerWidth - rect.right) + 'px';
    panel.style.left  = 'auto';
  }

  // Toggle
  toggle.addEventListener('click', e => {
    e.stopPropagation();
    if (panel.classList.contains('open')) {
      _closePanel();
    } else {
      _positionPanel();
      panel.classList.remove('closing');
      panel.classList.add('open');
    }
  });

  function _closePanel() {
    if (!panel.classList.contains('open')) return;
    panel.classList.remove('open');
    panel.classList.add('closing');
    setTimeout(() => panel.classList.remove('closing'), 230);
  }

  window.addEventListener('resize', () => {
    if (panel.classList.contains('open')) _positionPanel();
  });
  window.addEventListener('scroll', () => {
    if (panel.classList.contains('open')) _positionPanel();
  }, { passive: true });

  document.addEventListener('click', e => {
    if (!toggle.contains(e.target) && !panel.contains(e.target))
      _closePanel();
  });

  function _owColor(name) {
    const cols = ['#6366f1','#8b5cf6','#ec4899','#14b8a6','#f59e0b','#3b82f6','#10b981','#f97316'];
    let h = 0;
    for (let i = 0; i < name.length; i++) h = name.charCodeAt(i) + ((h << 5) - h);
    return cols[Math.abs(h) % cols.length];
  }

  // Update waktu relatif setiap 30 detik (realtime)
  let _lastUsers = null;
  function _relTime(ts) {
    if (!ts) return '';
    const diff = Date.now() - ts;
    const s = Math.floor(diff / 1000);
    const m = Math.floor(diff / 60000);
    const h = Math.floor(diff / 3600000);
    const d = Math.floor(diff / 86400000);
    if (s < 60)  return 'baru saja';
    if (m < 60)  return `${m} mnt lalu`;
    if (h < 24)  return `${h} jam lalu`;
    return `${d} hari lalu`;
  }

  function _render(users) {
    const now    = Date.now();
    const ONLINE = 18000; // heartbeat 10s + 8s buffer

    if (!users) {
      countEl.textContent = '0';
      list.innerHTML = `<div class="ow-empty">Belum ada user terdaftar</div>`;
      return;
    }

    const lang = typeof currentLang !== 'undefined' ? currentLang : 'id';

    const _myName    = localStorage.getItem('zanpw_username') || '';
    const _isDev     = sessionStorage.getItem('zanpw_dev_session') === '1';
    const _devUname  = 'King Zann'; // DEV_USERNAME — tidak boleh muncul di panel siapapun
    // Saat dev aktif, username asli sebelum login dev juga disembunyikan
    const _prevUname = _isDev ? (sessionStorage.getItem('zanpw_prev_username') || '') : '';
    // User ID dev — untuk filter berdasarkan ID bukan nama
    const _myUserId  = localStorage.getItem('zanpw_userid') || '';

    const entries = Object.values(users)
      .filter(u => u?.username && u.username !== 'Anonim')
      // DEV_USERNAME tidak pernah muncul di panel siapapun
      .filter(u => u.username !== _devUname)
      // Saat dev aktif: sembunyikan username asli dev (prev_username) dari panel
      .filter(u => !_isDev || !_prevUname || u.username !== _prevUname)
      // User tidak perlu melihat dirinya sendiri (non-dev)
      .filter(u => _isDev || u.username !== _myName)
      .map(u => ({
        ...u,
        _ago: Date.now() - (u.lastSeen || 0),
        // Tidak percaya flag online dari Firebase — murni cek heartbeat lastSeen
        _isOnline: u.online === true && (Date.now() - (u.lastSeen || 0)) < ONLINE
      }))
      .sort((a, b) => {
        if (a._isOnline && !b._isOnline) return -1;
        if (!a._isOnline && b._isOnline) return 1;
        return (b.lastSeen || 0) - (a.lastSeen || 0);
      });

    const onlineCount = entries.filter(u => u._isOnline).length;
    countEl.textContent = onlineCount;
    if (titleEl) titleEl.textContent = `🟢 ${onlineCount} Online · ${entries.length} ${lang === 'en' ? 'Users' : 'User'}`;

    if (!entries.length) {
      list.innerHTML = `<div class="ow-empty">Belum ada user terdaftar</div>`;
      return;
    }

    list.innerHTML = entries.map(u => {
      const isOnline = u.online === true && (Date.now() - (u.lastSeen || 0)) < ONLINE;
      const dotClass = isOnline ? 'online' : 'offline';
      const timeStr  = isOnline
        ? (lang === 'en' ? 'Online now' : 'Online sekarang')
        : (u.lastSeen ? _relTime(u.lastSeen) : (lang === 'en' ? 'Never' : 'Belum pernah'));
      return `
        <div class="ow-user-item">
          <div class="ow-avatar" style="background:${_owColor(u.username)}">${u.username.charAt(0).toUpperCase()}</div>
          <div class="ow-user-info">
            <span class="ow-username">${u.username.replace(/</g,'&lt;')}</span>
            <span class="ow-time">${timeStr}</span>
          </div>
          <div class="ow-status-dot ${dotClass}"></div>
        </div>`;
    }).join('');
  }

  function _refreshTime() {
    if (_lastUsers) _render(_lastUsers);
  }

  // Cache deleted user IDs — diisi saat init dari Firebase + update saat dev hapus akun
  const _deletedIds = new Set();

  // Cache deleted usernames (by name) — user yang di-blacklist tidak bisa muncul lagi
  const _deletedUsernames = new Set();

  // Fetch /deleted_users dan /deleted_usernames sekali saat init
  (async function _initDeletedCache() {
    try {
      const [r1, r2] = await Promise.all([
        fetch(`${_FB}/deleted_users.json`),
        fetch(`${_FB}/deleted_usernames.json`)
      ]);
      const d1 = r1.ok ? await r1.json() : null;
      const d2 = r2.ok ? await r2.json() : null;
      if (d1) Object.keys(d1).forEach(uid => _deletedIds.add(uid));
      if (d2) Object.values(d2).forEach(v => { if (v?.username) _deletedUsernames.add(v.username); });
    } catch(e) {}
  })();

  async function _poll() {
    try {
      const res  = await fetch(`${_FB}/users.json`);
      const data = res.ok ? await res.json() : null;
      if (data) {
        // Filter by userId blacklist
        if (_deletedIds.size > 0)
          _deletedIds.forEach(uid => { if (data[uid]) delete data[uid]; });
        // Filter by username blacklist
        if (_deletedUsernames.size > 0)
          Object.keys(data).forEach(k => {
            if (data[k] && _deletedUsernames.has(data[k].username)) delete data[k];
          });
      }
      _lastUsers = data;
      _render(data);
    } catch(e) {}
  }

  _poll();
  window._owRefresh = _poll; // expose untuk dipanggil dari luar

  // _owRemoveUser: hapus user dari panel LOKAL saat dev delete akun,
  // tanpa perlu tunggu poll berikutnya.
  window._owRemoveUser = function(userId, username) {
    if (!userId) return;
    _deletedIds.add(userId);
    if (username) _deletedUsernames.add(username);
    if (!_lastUsers) return;
    if (_lastUsers[userId]) {
      delete _lastUsers[userId];
      _render(_lastUsers);
    }
  };

  // _owPatchUser: update status user di panel LOKAL, tanpa fetch ke Firebase.
  // Dipanggil oleh showUserPresenceToast tepat saat toast mulai terlihat,
  // sehingga panel online berubah 1:1 bersamaan dengan popup toast.
  window._owPatchUser = function(username, isOnline) {
    if (!_lastUsers || !username) return;
    const now = Date.now();
    // Cari entry user di _lastUsers berdasarkan username
    const key = Object.keys(_lastUsers).find(k => _lastUsers[k]?.username === username);
    if (key) {
      // Update entry yang ada
      _lastUsers[key].online   = isOnline;
      _lastUsers[key].lastSeen = now;
    } else if (isOnline) {
      // User baru yang belum ada di cache — tambahkan sementara
      _lastUsers['_tmp_' + username] = { username, online: true, lastSeen: now };
    }
    _render(_lastUsers);
  };

  setInterval(_poll, 5000);
  // Refresh label waktu setiap 10 detik — realtime feel
  setInterval(_refreshTime, 10000);
  document.addEventListener('zanpw:langChanged', _poll);
})();
(function initQuizSystem() {
  const FIREBASE_URL  = 'https://personalweb-zan-default-rtdb.asia-southeast1.firebasedatabase.app';
  const LB_PATH       = `${FIREBASE_URL}/quiz_leaderboard`;
  const META_PATH     = `${FIREBASE_URL}/quiz_meta`;
  const TIMER_SEC     = 15;
  const TOTAL_Q       = 10;
  const PTS_CORRECT   = 10;
  const RESET_DAYS    = 3; // reset leaderboard setiap 3 hari

  /* ── Bank Soal Bilingual (ID + EN dalam satu objek) ──────────
     Struktur: { id: { cat, q, opts, ans }, en: { cat, q, opts, ans } }
     Pilihan 4 opsi, ans = index jawaban benar (0-3)
     Total: 35 Umum, 35 Teknologi, 35 Matematika = 105 soal
  ────────────────────────────────────────────────────────────── */
  const BILINGUAL_QUESTIONS = [
    // ════════ PENGETAHUAN UMUM / GENERAL — SENIOR LEVEL ════════
    { id:{cat:'📚 Umum', q:'Paradoks Russell dalam teori himpunan menyatakan bahwa?', opts:['Semua himpunan memiliki subset','Himpunan yang memuat dirinya sendiri menimbulkan kontradiksi','Bilangan tak terhingga tidak ada','Setiap fungsi punya invers'], ans:1},
      en:{cat:'📚 General', q:"Russell's Paradox in set theory states that?", opts:['All sets have subsets','A set containing itself leads to a contradiction','Infinite numbers do not exist','Every function has an inverse'], ans:1} },
    { id:{cat:'📚 Umum', q:'Prinsip ketidakpastian Heisenberg menyatakan bahwa?', opts:['Elektron selalu diam','Posisi dan momentum partikel tidak bisa diketahui secara bersamaan dengan tepat','Cahaya selalu bergerak lurus','Atom tidak bisa dipecah'], ans:1},
      en:{cat:'📚 General', q:"Heisenberg's uncertainty principle states that?", opts:['Electrons are always stationary','Position and momentum of a particle cannot both be precisely known simultaneously','Light always travels in a straight line','Atoms cannot be split'], ans:1} },
    { id:{cat:'📚 Umum', q:'Dalam filsafat, "cogito ergo sum" dikemukakan oleh?', opts:['Socrates','Aristoteles','René Descartes','Immanuel Kant'], ans:2},
      en:{cat:'📚 General', q:'"Cogito ergo sum" was proposed by?', opts:['Socrates','Aristotle','René Descartes','Immanuel Kant'], ans:2} },
    { id:{cat:'📚 Umum', q:'Teorema Gödel tentang ketidaklengkapan menyatakan bahwa?', opts:['Semua sistem matematika konsisten','Ada pernyataan benar yang tidak bisa dibuktikan dalam sistem formal yang cukup kuat','Matematika bisa membuktikan semua hal','Logika selalu lengkap'], ans:1},
      en:{cat:'📚 General', q:"Gödel's incompleteness theorem states that?", opts:['All mathematical systems are consistent','There are true statements that cannot be proved within a sufficiently powerful formal system','Mathematics can prove everything','Logic is always complete'], ans:1} },
    { id:{cat:'📚 Umum', q:'Dalam ekonomi, "deadweight loss" terjadi akibat?', opts:['Pajak berlebihan yang mengurangi surplus total pasar','Inflasi tinggi','Pengangguran struktural','Defisit anggaran pemerintah'], ans:0},
      en:{cat:'📚 General', q:'In economics, "deadweight loss" occurs due to?', opts:['Excessive taxation that reduces total market surplus','High inflation','Structural unemployment','Government budget deficit'], ans:0} },
    { id:{cat:'📚 Umum', q:'Konsep "tragedy of the commons" menggambarkan situasi di mana?', opts:['Pemerintah gagal kelola sumber daya','Individu mengeksploitasi sumber daya bersama sehingga merugikan semua pihak','Monopoli menguasai pasar','Subsidi mengurangi produksi'], ans:1},
      en:{cat:'📚 General', q:'The "tragedy of the commons" describes a situation where?', opts:['Government fails to manage resources','Individuals exploit shared resources to the detriment of all','A monopoly dominates the market','Subsidies reduce production'], ans:1} },
    { id:{cat:'📚 Umum', q:'Dalam hukum, asas "presumption of innocence" berarti?', opts:['Terdakwa harus membuktikan dirinya tidak bersalah','Terdakwa dianggap tidak bersalah sampai terbukti sebaliknya','Hakim selalu benar','Bukti tidak diperlukan'], ans:1},
      en:{cat:'📚 General', q:'In law, the "presumption of innocence" means?', opts:['The defendant must prove their innocence','The defendant is considered innocent until proven guilty','The judge is always right','Evidence is not required'], ans:1} },
    { id:{cat:'📚 Umum', q:'Struktur DNA pertama kali dideskripsikan oleh?', opts:['Louis Pasteur & Robert Koch','Charles Darwin & Gregor Mendel','James Watson & Francis Crick','Rosalind Franklin & Linus Pauling'], ans:2},
      en:{cat:'📚 General', q:'The structure of DNA was first described by?', opts:['Louis Pasteur & Robert Koch','Charles Darwin & Gregor Mendel','James Watson & Francis Crick','Rosalind Franklin & Linus Pauling'], ans:2} },
    { id:{cat:'📚 Umum', q:'Dalam termodinamika, hukum kedua menyatakan bahwa?', opts:['Energi tidak bisa diciptakan atau dimusnahkan','Entropi sistem terisolasi selalu meningkat atau tetap','Suhu mutlak nol bisa dicapai','Kalor mengalir dari dingin ke panas'], ans:1},
      en:{cat:'📚 General', q:'The second law of thermodynamics states that?', opts:['Energy cannot be created or destroyed','The entropy of an isolated system always increases or stays the same','Absolute zero temperature is achievable','Heat flows from cold to hot'], ans:1} },
    { id:{cat:'📚 Umum', q:'Apa yang dimaksud "opportunity cost" dalam ekonomi?', opts:['Biaya produksi tambahan','Nilai alternatif terbaik yang dikorbankan saat membuat keputusan','Total biaya overhead perusahaan','Kerugian akibat inflasi'], ans:1},
      en:{cat:'📚 General', q:'What does "opportunity cost" mean in economics?', opts:['Additional production cost','The value of the best alternative sacrificed when making a decision','Total company overhead cost','Loss due to inflation'], ans:1} },
    { id:{cat:'📚 Umum', q:'Dalam psikologi, "cognitive dissonance" adalah?', opts:['Ketidaknyamanan mental akibat keyakinan yang bertentangan','Gangguan memori jangka pendek','Kecerdasan emosional tinggi','Kemampuan multitasking'], ans:0},
      en:{cat:'📚 General', q:'In psychology, "cognitive dissonance" refers to?', opts:['Mental discomfort caused by conflicting beliefs','Short-term memory disorder','High emotional intelligence','Multitasking ability'], ans:0} },
    { id:{cat:'📚 Umum', q:'Prinsip "Occam\'s Razor" menyatakan bahwa?', opts:['Hipotesis paling kompleks lebih baik','Penjelasan paling sederhana umumnya lebih tepat','Semua teori harus diuji ulang','Fakta lebih penting dari logika'], ans:1},
      en:{cat:'📚 General', q:"Occam's Razor states that?", opts:['The most complex hypothesis is best','The simplest explanation is generally more correct','All theories must be retested','Facts are more important than logic'], ans:1} },
    { id:{cat:'📚 Umum', q:'Dalam linguistik, "morpheme" adalah?', opts:['Unit suara terkecil','Unit makna terkecil dalam bahasa','Jenis kalimat majemuk','Pola intonasi kalimat'], ans:1},
      en:{cat:'📚 General', q:'In linguistics, a "morpheme" is?', opts:['The smallest unit of sound','The smallest unit of meaning in language','A type of compound sentence','A sentence intonation pattern'], ans:1} },
    { id:{cat:'📚 Umum', q:'Efek Dunning-Kruger mendeskripsikan fenomena di mana?', opts:['Orang pintar meremehkan diri','Orang dengan kompetensi rendah melebih-lebihkan kemampuan mereka','IQ tinggi berkorelasi dengan kesuksesan','Tekanan sosial meningkatkan kinerja'], ans:1},
      en:{cat:'📚 General', q:'The Dunning-Kruger effect describes a phenomenon where?', opts:['Smart people underestimate themselves','People with low competence overestimate their abilities','High IQ correlates with success','Social pressure improves performance'], ans:1} },
    { id:{cat:'📚 Umum', q:'Dalam sosiologi, "anomie" mengacu pada?', opts:['Solidaritas sosial yang kuat','Kondisi di mana norma sosial melemah atau hilang','Konflik antar kelas sosial','Mobilitas sosial ke atas'], ans:1},
      en:{cat:'📚 General', q:'In sociology, "anomie" refers to?', opts:['Strong social solidarity','A condition where social norms break down or disappear','Conflict between social classes','Upward social mobility'], ans:1} },
    { id:{cat:'📚 Umum', q:'Apa yang dimaksud "falsifiability" menurut Karl Popper?', opts:['Teori harus mudah dimengerti','Teori ilmiah harus bisa diuji dan berpotensi untuk dibuktikan salah','Semua teori pasti benar','Ilmu pengetahuan tidak perlu bukti'], ans:1},
      en:{cat:'📚 General', q:'What does "falsifiability" mean according to Karl Popper?', opts:['A theory must be easy to understand','A scientific theory must be testable and potentially provable wrong','All theories are always correct','Science does not need evidence'], ans:1} },
    { id:{cat:'📚 Umum', q:'Dalam geopolitik, istilah "balance of power" mengacu pada?', opts:['Kesetaraan ekonomi antar negara','Distribusi kekuatan militer agar tidak ada satu negara yang mendominasi','Kebijakan luar negeri netral','Aliansi militer permanen'], ans:1},
      en:{cat:'📚 General', q:'In geopolitics, "balance of power" refers to?', opts:['Economic equality between nations','Distribution of military power so no single nation dominates','Neutral foreign policy','Permanent military alliance'], ans:1} },
    { id:{cat:'📚 Umum', q:'Konsep "Nash Equilibrium" dalam teori permainan berarti?', opts:['Pemain selalu bekerja sama','Tidak ada pemain yang bisa meningkatkan hasilnya dengan mengubah strategi secara sepihak','Pemain yang paling kuat selalu menang','Permainan selalu berakhir seri'], ans:1},
      en:{cat:'📚 General', q:'The "Nash Equilibrium" in game theory means?', opts:['Players always cooperate','No player can improve their outcome by unilaterally changing strategy','The strongest player always wins','Games always end in a draw'], ans:1} },
    { id:{cat:'📚 Umum', q:'Dalam biologi molekuler, "CRISPR-Cas9" digunakan untuk?', opts:['Mengkloning sel hewan','Mengedit/memotong sekuens DNA secara presisi','Mensintesis protein baru','Mendiagnosis kanker'], ans:1},
      en:{cat:'📚 General', q:'In molecular biology, "CRISPR-Cas9" is used to?', opts:['Clone animal cells','Edit/cut DNA sequences with precision','Synthesize new proteins','Diagnose cancer'], ans:1} },
    { id:{cat:'📚 Umum', q:'Apa perbedaan utama antara "correlation" dan "causation"?', opts:['Keduanya berarti hal yang sama','Korelasi berarti ada hubungan; kausalitas berarti satu hal menyebabkan yang lain','Kausalitas lebih lemah dari korelasi','Korelasi hanya berlaku pada data besar'], ans:1},
      en:{cat:'📚 General', q:'What is the key difference between "correlation" and "causation"?', opts:['They mean the same thing','Correlation means a relationship exists; causation means one thing causes another','Causation is weaker than correlation','Correlation only applies to big data'], ans:1} },
    { id:{cat:'📚 Umum', q:'Dalam epidemiologi, angka "R0" (R-naught) mengukur?', opts:['Tingkat kematian penyakit','Rata-rata jumlah orang yang tertular dari satu kasus infeksi','Masa inkubasi virus','Efektivitas vaksin'], ans:1},
      en:{cat:'📚 General', q:'In epidemiology, the "R0" (R-naught) number measures?', opts:['The disease mortality rate','The average number of people infected by one case','The incubation period of a virus','Vaccine effectiveness'], ans:1} },
    { id:{cat:'📚 Umum', q:'Teori "Attachment" Bowlby menyatakan bahwa ikatan emosional awal anak dengan pengasuh berdampak pada?', opts:['Hanya perkembangan fisik','Perkembangan sosial dan emosional sepanjang hidup','Kemampuan akademik saja','Kecerdasan linguistik'], ans:1},
      en:{cat:'📚 General', q:"Bowlby's Attachment Theory states that a child's early emotional bond with a caregiver impacts?", opts:['Only physical development','Social and emotional development throughout life','Academic ability only','Linguistic intelligence'], ans:1} },
    { id:{cat:'📚 Umum', q:'Dalam kimia, "isomer" adalah?', opts:['Atom dengan nomor massa berbeda','Senyawa dengan rumus molekul sama tapi struktur berbeda','Unsur dalam periode yang sama','Ikatan kimia yang lemah'], ans:1},
      en:{cat:'📚 General', q:'In chemistry, "isomers" are?', opts:['Atoms with different mass numbers','Compounds with the same molecular formula but different structures','Elements in the same period','Weak chemical bonds'], ans:1} },
    { id:{cat:'📚 Umum', q:'Apa yang dimaksud "marginal utility" dalam ekonomi?', opts:['Total kepuasan dari seluruh konsumsi','Tambahan kepuasan dari mengkonsumsi satu unit tambahan','Biaya produksi satu unit terakhir','Harga barang di pasar bebas'], ans:1},
      en:{cat:'📚 General', q:'What is "marginal utility" in economics?', opts:['Total satisfaction from all consumption','The additional satisfaction from consuming one more unit','The production cost of the last unit','Price of a good in a free market'], ans:1} },
    { id:{cat:'📚 Umum', q:'Konsep "black swan event" Nassim Taleb mengacu pada?', opts:['Kepunahan spesies langka','Kejadian sangat langka dan tidak terduga dengan dampak besar','Fluktuasi pasar saham normal','Prediksi cuaca ekstrem'], ans:1},
      en:{cat:'📚 General', q:'Nassim Taleb\'s "black swan event" refers to?', opts:['Extinction of a rare species','A highly improbable and unexpected event with massive impact','Normal stock market fluctuation','Extreme weather prediction'], ans:1} },
    { id:{cat:'📚 Umum', q:'Dalam neurosains, "neuroplasticity" berarti?', opts:['Otak tidak bisa berubah setelah dewasa','Kemampuan otak untuk mengubah strukturnya sebagai respons terhadap pengalaman','Kecepatan transmisi sinyal saraf','Ukuran fisik otak'], ans:1},
      en:{cat:'📚 General', q:'In neuroscience, "neuroplasticity" means?', opts:['The brain cannot change after adulthood','The brain\'s ability to reorganize its structure in response to experience','Speed of neural signal transmission','Physical size of the brain'], ans:1} },
    { id:{cat:'📚 Umum', q:'Apa yang dimaksud "Pareto Principle" (aturan 80/20)?', opts:['80% orang menguasai 80% sumber daya','Sekitar 80% hasil berasal dari 20% penyebab','Efisiensi selalu 80%','20% waktu menghasilkan 20% output'], ans:1},
      en:{cat:'📚 General', q:'What does the "Pareto Principle" (80/20 rule) state?', opts:['80% of people control 80% of resources','Roughly 80% of outcomes come from 20% of causes','Efficiency is always 80%','20% of time produces 20% of output'], ans:1} },
    { id:{cat:'📚 Umum', q:'Dalam statistik, "p-value" < 0.05 berarti?', opts:['Hasil pasti benar','Probabilitas mendapat hasil yang sama ekstremnya jika hipotesis nol benar kurang dari 5%','Sampel terlalu kecil','Data tidak valid'], ans:1},
      en:{cat:'📚 General', q:'In statistics, a p-value < 0.05 means?', opts:['The result is definitely correct','The probability of getting a result as extreme if the null hypothesis is true is less than 5%','The sample is too small','The data is invalid'], ans:1} },
    { id:{cat:'📚 Umum', q:'Dalam biologi evolusi, "genetic drift" adalah?', opts:['Mutasi yang disebabkan radiasi','Perubahan frekuensi alel secara acak dalam populasi kecil','Seleksi alam pada fenotip','Reproduksi seksual yang menghasilkan variasi'], ans:1},
      en:{cat:'📚 General', q:'In evolutionary biology, "genetic drift" is?', opts:['Mutations caused by radiation','Random changes in allele frequency in a small population','Natural selection on phenotypes','Sexual reproduction generating variation'], ans:1} },
    { id:{cat:'📚 Umum', q:'Apa itu "moral hazard" dalam ekonomi dan keuangan?', opts:['Tindakan ilegal yang disengaja','Kecenderungan mengambil risiko lebih besar karena konsekuensi ditanggung pihak lain','Ketidakjujuran dalam akuntansi','Penghindaran pajak'], ans:1},
      en:{cat:'📚 General', q:'What is "moral hazard" in economics and finance?', opts:['An intentional illegal act','The tendency to take greater risks because consequences are borne by another party','Dishonesty in accounting','Tax avoidance'], ans:1} },
    { id:{cat:'📚 Umum', q:'Dalam fisika kuantum, "superposisi" berarti?', opts:['Dua partikel di tempat yang sama','Partikel berada dalam beberapa keadaan sekaligus hingga diukur','Kecepatan cahaya terlampaui','Energi diciptakan dari nol'], ans:1},
      en:{cat:'📚 General', q:'In quantum physics, "superposition" means?', opts:['Two particles in the same location','A particle exists in multiple states simultaneously until measured','The speed of light is exceeded','Energy is created from nothing'], ans:1} },
    { id:{cat:'📚 Umum', q:'Perbedaan antara "deductive" dan "inductive" reasoning?', opts:['Keduanya sama','Deduktif: kesimpulan dari premis umum; induktif: generalisasi dari observasi spesifik','Induktif lebih akurat','Deduktif hanya untuk matematika'], ans:1},
      en:{cat:'📚 General', q:'The difference between deductive and inductive reasoning?', opts:['They are the same','Deductive: conclusion from general premises; inductive: generalizing from specific observations','Inductive is more accurate','Deductive is only for mathematics'], ans:1} },
    { id:{cat:'📚 Umum', q:'Dalam astronomi, "redshift" mengindikasikan bahwa objek tersebut?', opts:['Bergerak mendekati pengamat','Bergerak menjauh dari pengamat','Memiliki suhu sangat tinggi','Memancarkan cahaya merah'], ans:1},
      en:{cat:'📚 General', q:'In astronomy, "redshift" indicates that an object is?', opts:['Moving toward the observer','Moving away from the observer','At a very high temperature','Emitting red light'], ans:1} },
    { id:{cat:'📚 Umum', q:'Konsep "sunk cost fallacy" mengacu pada?', opts:['Menghitung biaya masa depan','Membuat keputusan berdasarkan biaya yang sudah tidak bisa dikembalikan','Mengabaikan biaya produksi','Strategi harga diskon'], ans:1},
      en:{cat:'📚 General', q:'The "sunk cost fallacy" refers to?', opts:['Calculating future costs','Making decisions based on irrecoverable past costs','Ignoring production costs','Discount pricing strategy'], ans:1} },
    { id:{cat:'📚 Umum', q:'Dalam anthropologi, "ethnocentrism" adalah?', opts:['Studi budaya secara objektif','Menilai budaya lain berdasarkan standar budaya sendiri','Perpaduan dua budaya berbeda','Pelestarian budaya lokal'], ans:1},
      en:{cat:'📚 General', q:'In anthropology, "ethnocentrism" is?', opts:['Studying cultures objectively','Judging other cultures by the standards of one\'s own culture','The blending of two different cultures','Preservation of local culture'], ans:1} },

    // ════════ TEKNOLOGI / TECHNOLOGY — SENIOR LEVEL ════════
    { id:{cat:'💻 Teknologi', q:'Dalam asymptotic analysis, O(n log n) biasanya merupakan kompleksitas dari?', opts:['Binary search','Bubble sort','Merge sort / Quicksort rata-rata','Linear search'], ans:2},
      en:{cat:'💻 Technology', q:'In asymptotic analysis, O(n log n) is typically the complexity of?', opts:['Binary search','Bubble sort','Merge sort / Average quicksort','Linear search'], ans:2} },
    { id:{cat:'💻 Teknologi', q:'Dalam arsitektur mikroprosesor, "pipeline hazard" terjadi ketika?', opts:['CPU terlalu panas','Instruksi berikutnya bergantung pada hasil instruksi sebelumnya yang belum selesai','RAM penuh','Cache miss terjadi'], ans:1},
      en:{cat:'💻 Technology', q:'In microprocessor architecture, a "pipeline hazard" occurs when?', opts:['The CPU overheats','The next instruction depends on the result of a previous instruction not yet complete','RAM is full','A cache miss occurs'], ans:1} },
    { id:{cat:'💻 Teknologi', q:'Apa perbedaan utama antara "mutex" dan "semaphore"?', opts:['Semaphore lebih cepat','Mutex hanya bisa direlease oleh thread yang menguncinya; semaphore bisa oleh thread lain','Mutex untuk multi-core saja','Semaphore hanya untuk single thread'], ans:1},
      en:{cat:'💻 Technology', q:'What is the key difference between a "mutex" and a "semaphore"?', opts:['Semaphores are faster','A mutex can only be released by the thread that locked it; a semaphore can be released by another thread','Mutex is only for multi-core','Semaphore is only for single threads'], ans:1} },
    { id:{cat:'💻 Teknologi', q:'Dalam database, "ACID" singkatan dari?', opts:['Access, Control, Index, Delete','Atomicity, Consistency, Isolation, Durability','Authentication, Cache, Integrity, Data','Async, Concurrent, Index, Distributed'], ans:1},
      en:{cat:'💻 Technology', q:'In databases, "ACID" stands for?', opts:['Access, Control, Index, Delete','Atomicity, Consistency, Isolation, Durability','Authentication, Cache, Integrity, Data','Async, Concurrent, Index, Distributed'], ans:1} },
    { id:{cat:'💻 Teknologi', q:'Teorema CAP dalam sistem terdistribusi menyatakan bahwa sistem tidak bisa menjamin ketiganya secara bersamaan, yaitu?', opts:['CPU, API, Persistence','Consistency, Availability, Partition tolerance','Caching, Authentication, Performance','Concurrency, Atomicity, Partitioning'], ans:1},
      en:{cat:'💻 Technology', q:'The CAP theorem in distributed systems states that a system cannot guarantee all three simultaneously, which are?', opts:['CPU, API, Persistence','Consistency, Availability, Partition tolerance','Caching, Authentication, Performance','Concurrency, Atomicity, Partitioning'], ans:1} },
    { id:{cat:'💻 Teknologi', q:'Dalam kriptografi, "asymmetric encryption" menggunakan?', opts:['Satu kunci untuk enkripsi dan dekripsi','Pasangan kunci publik dan kunci privat','Hash function tanpa kunci','XOR bit langsung'], ans:1},
      en:{cat:'💻 Technology', q:'In cryptography, "asymmetric encryption" uses?', opts:['One key for both encryption and decryption','A pair of public and private keys','A keyless hash function','Direct XOR of bits'], ans:1} },
    { id:{cat:'💻 Teknologi', q:'Apa itu "deadlock" dalam pemrograman konkuren?', opts:['Program berjalan terlalu lambat','Dua atau lebih proses saling menunggu resource yang dipegang oleh proses lain','Memory leak yang tidak terkontrol','Race condition pada shared variable'], ans:1},
      en:{cat:'💻 Technology', q:'What is a "deadlock" in concurrent programming?', opts:['A program running too slowly','Two or more processes each waiting for a resource held by the other','An uncontrolled memory leak','A race condition on a shared variable'], ans:1} },
    { id:{cat:'💻 Teknologi', q:'Dalam machine learning, "overfitting" terjadi ketika?', opts:['Model tidak cukup dilatih','Model terlalu cocok dengan data latih sehingga buruk pada data baru','Learning rate terlalu kecil','Dataset terlalu besar'], ans:1},
      en:{cat:'💻 Technology', q:'In machine learning, "overfitting" occurs when?', opts:['The model is not trained enough','The model fits training data too well and performs poorly on new data','The learning rate is too small','The dataset is too large'], ans:1} },
    { id:{cat:'💻 Teknologi', q:'Apa yang dimaksud "Big O notation" O(1)?', opts:['Waktu eksekusi tumbuh linear','Waktu eksekusi konstan terlepas dari ukuran input','Algoritma tidak efisien','Hanya satu operasi dilakukan'], ans:1},
      en:{cat:'💻 Technology', q:'What does Big O notation O(1) mean?', opts:['Execution time grows linearly','Execution time is constant regardless of input size','The algorithm is inefficient','Only one operation is performed'], ans:1} },
    { id:{cat:'💻 Teknologi', q:'Dalam jaringan komputer, "TCP three-way handshake" terdiri dari?', opts:['CONNECT-ACCEPT-DONE','SYN-SYN/ACK-ACK','HELLO-HELLO-OK','START-CHECK-FINISH'], ans:1},
      en:{cat:'💻 Technology', q:'The TCP three-way handshake consists of?', opts:['CONNECT-ACCEPT-DONE','SYN-SYN/ACK-ACK','HELLO-HELLO-OK','START-CHECK-FINISH'], ans:1} },
    { id:{cat:'💻 Teknologi', q:'Perbedaan antara "stack" dan "heap" dalam memory management?', opts:['Stack lebih besar dari heap','Stack: alokasi otomatis dan LIFO; heap: alokasi dinamis yang dikelola programmer','Heap untuk variabel lokal','Stack untuk objek besar'], ans:1},
      en:{cat:'💻 Technology', q:'The difference between "stack" and "heap" in memory management?', opts:['Stack is larger than heap','Stack: automatic allocation and LIFO; heap: dynamic allocation managed by the programmer','Heap is for local variables','Stack is for large objects'], ans:1} },
    { id:{cat:'💻 Teknologi', q:'Dalam desain sistem, "idempotency" berarti?', opts:['Operasi hanya bisa dilakukan sekali','Melakukan operasi yang sama beberapa kali menghasilkan hasil yang sama','Sistem tidak bisa diubah','Data selalu dienkripsi'], ans:1},
      en:{cat:'💻 Technology', q:'In system design, "idempotency" means?', opts:['An operation can only be done once','Performing the same operation multiple times yields the same result','The system cannot be changed','Data is always encrypted'], ans:1} },
    { id:{cat:'💻 Teknologi', q:'Apa yang dimaksud "virtual memory" dalam sistem operasi?', opts:['RAM yang sangat cepat','Teknik yang membuat proses seolah memiliki lebih banyak RAM dari yang tersedia secara fisik','SSD yang digunakan sebagai RAM','Cache prosesor level 3'], ans:1},
      en:{cat:'💻 Technology', q:'What is "virtual memory" in an operating system?', opts:['Very fast RAM','A technique that makes a process appear to have more RAM than is physically available','SSD used as RAM','Level 3 processor cache'], ans:1} },
    { id:{cat:'💻 Teknologi', q:'Dalam paradigma OOP, "polymorphism" mengacu pada?', opts:['Hanya satu class boleh ada','Objek dari class berbeda merespons interface yang sama dengan cara berbeda','Pewarisan tunggal saja','Semua method harus statis'], ans:1},
      en:{cat:'💻 Technology', q:'In OOP paradigm, "polymorphism" refers to?', opts:['Only one class can exist','Objects of different classes responding to the same interface in different ways','Single inheritance only','All methods must be static'], ans:1} },
    { id:{cat:'💻 Teknologi', q:'Apa itu "event loop" dalam JavaScript?', opts:['Loop for yang berjalan terus','Mekanisme yang memungkinkan JS menangani operasi asinkron meski single-threaded','Infinite loop yang tidak bisa dihentikan','Loop khusus untuk animasi'], ans:1},
      en:{cat:'💻 Technology', q:'What is the "event loop" in JavaScript?', opts:['A for loop that runs forever','A mechanism that allows JS to handle asynchronous operations despite being single-threaded','An infinite loop that cannot be stopped','A loop specifically for animations'], ans:1} },
    { id:{cat:'💻 Teknologi', q:'Dalam keamanan web, "SQL Injection" dicegah dengan cara terbaik menggunakan?', opts:['Enkripsi password','Parameterized queries / prepared statements','Firewall hardware','HTTPS'], ans:1},
      en:{cat:'💻 Technology', q:'In web security, "SQL Injection" is best prevented by using?', opts:['Password encryption','Parameterized queries / prepared statements','Hardware firewall','HTTPS'], ans:1} },
    { id:{cat:'💻 Teknologi', q:'Apa perbedaan antara "process" dan "thread"?', opts:['Thread lebih berat dari process','Process: unit eksekusi independen dengan memory sendiri; thread: unit ringan dalam process yang berbagi memory','Keduanya sama','Process hanya di OS Linux'], ans:1},
      en:{cat:'💻 Technology', q:'What is the difference between a "process" and a "thread"?', opts:['A thread is heavier than a process','Process: independent execution unit with its own memory; thread: a lightweight unit within a process sharing memory','They are the same','Processes are only in Linux OS'], ans:1} },
    { id:{cat:'💻 Teknologi', q:'Dalam Docker, "container" berbeda dari "virtual machine" karena?', opts:['Container lebih lambat','Container berbagi kernel OS host sehingga lebih ringan; VM punya OS sendiri','Container tidak bisa dijalankan di cloud','Container hanya untuk Python'], ans:1},
      en:{cat:'💻 Technology', q:'In Docker, a "container" differs from a "virtual machine" because?', opts:['Containers are slower','Containers share the host OS kernel making them lighter; VMs have their own OS','Containers cannot run in the cloud','Containers are only for Python'], ans:1} },
    { id:{cat:'💻 Teknologi', q:'Dalam REST API, HTTP method "PUT" vs "PATCH" perbedaannya?', opts:['Sama saja','PUT mengganti resource sepenuhnya; PATCH hanya mengubah sebagian','PATCH lebih aman dari PUT','PUT untuk create, PATCH untuk delete'], ans:1},
      en:{cat:'💻 Technology', q:'In REST API, the difference between HTTP "PUT" and "PATCH" methods?', opts:['They are the same','PUT replaces the entire resource; PATCH only updates part of it','PATCH is safer than PUT','PUT is for create, PATCH is for delete'], ans:1} },
    { id:{cat:'💻 Teknologi', q:'Dalam algoritma graph, "Dijkstra\'s algorithm" digunakan untuk?', opts:['Mencari siklus dalam graph','Mencari jalur terpendek dari sumber ke semua simpul (non-negative weight)','Mengurutkan simpul secara topologis','Mendeteksi graph bipartite'], ans:1},
      en:{cat:'💻 Technology', q:"Dijkstra's algorithm is used for?", opts:['Finding cycles in a graph','Finding the shortest path from a source to all vertices (non-negative weights)','Sorting vertices topologically','Detecting bipartite graphs'], ans:1} },
    { id:{cat:'💻 Teknologi', q:'Apa yang dimaksud "memoization" dalam pemrograman?', opts:['Menyimpan seluruh program ke memori','Teknik caching hasil fungsi agar tidak dihitung ulang untuk input yang sama','Menghapus variabel dari memori','Kompresi data secara otomatis'], ans:1},
      en:{cat:'💻 Technology', q:'What is "memoization" in programming?', opts:['Storing the entire program in memory','A caching technique storing function results to avoid recomputation for the same input','Deleting variables from memory','Automatic data compression'], ans:1} },
    { id:{cat:'💻 Teknologi', q:'Dalam sistem operasi, "thrashing" terjadi ketika?', opts:['CPU bekerja 100%','Sistem menghabiskan lebih banyak waktu untuk paging daripada eksekusi program','Disk penuh','Kernel panic terjadi'], ans:1},
      en:{cat:'💻 Technology', q:'In an operating system, "thrashing" occurs when?', opts:['CPU is at 100%','The system spends more time paging than executing programs','The disk is full','A kernel panic occurs'], ans:1} },
    { id:{cat:'💻 Teknologi', q:'Konsep "dependency injection" dalam software engineering bertujuan untuk?', opts:['Mempercepat kompilasi kode','Memisahkan pembuatan objek dari penggunaannya untuk meningkatkan modularitas','Mengurangi penggunaan RAM','Mengenkripsi dependency library'], ans:1},
      en:{cat:'💻 Technology', q:'"Dependency injection" in software engineering aims to?', opts:['Speed up code compilation','Separate object creation from its usage to improve modularity','Reduce RAM usage','Encrypt dependency libraries'], ans:1} },
    { id:{cat:'💻 Teknologi', q:'Dalam jaringan, "BGP" (Border Gateway Protocol) digunakan untuk?', opts:['Menetapkan IP address di LAN','Routing antar Autonomous System di internet','Enkripsi paket data','Mengelola DHCP server'], ans:1},
      en:{cat:'💻 Technology', q:'"BGP" (Border Gateway Protocol) is used for?', opts:['Assigning IP addresses on a LAN','Routing between Autonomous Systems on the internet','Encrypting data packets','Managing DHCP servers'], ans:1} },
    { id:{cat:'💻 Teknologi', q:'Apa itu "garbage collection" dalam bahasa pemrograman?', opts:['Menghapus komentar dari kode','Mekanisme otomatis pembebasan memori yang tidak lagi digunakan program','Membersihkan cache browser','Menghapus file log lama'], ans:1},
      en:{cat:'💻 Technology', q:'What is "garbage collection" in programming languages?', opts:['Removing comments from code','An automatic mechanism for freeing memory no longer used by the program','Clearing browser cache','Deleting old log files'], ans:1} },
    { id:{cat:'💻 Teknologi', q:'Dalam kriptografi, "SHA-256" adalah?', opts:['Algoritma enkripsi simetris','Fungsi hash kriptografis yang menghasilkan output 256-bit','Protokol pertukaran kunci','Algoritma kompresi data'], ans:1},
      en:{cat:'💻 Technology', q:'In cryptography, "SHA-256" is?', opts:['A symmetric encryption algorithm','A cryptographic hash function producing a 256-bit output','A key exchange protocol','A data compression algorithm'], ans:1} },
    { id:{cat:'💻 Teknologi', q:'Apa yang dimaksud "race condition"?', opts:['Kompetisi kecepatan CPU','Bug yang terjadi ketika hasil program bergantung pada urutan atau timing eksekusi thread yang tidak terduga','Algoritma sorting tercepat','Proses yang berjalan paralel dengan sempurna'], ans:1},
      en:{cat:'💻 Technology', q:'What is a "race condition"?', opts:['CPU speed competition','A bug where program outcome depends on unpredictable timing or ordering of thread execution','The fastest sorting algorithm','Perfectly parallel processes'], ans:1} },
    { id:{cat:'💻 Teknologi', q:'Dalam arsitektur software, pola "observer pattern" berguna untuk?', opts:['Mengoptimalkan query database','Mendefinisikan ketergantungan one-to-many agar perubahan objek otomatis memperbarui dependennya','Mengelola koneksi jaringan','Membuat singleton class'], ans:1},
      en:{cat:'💻 Technology', q:'In software architecture, the "observer pattern" is useful for?', opts:['Optimizing database queries','Defining one-to-many dependencies so that object changes automatically update its dependents','Managing network connections','Creating singleton classes'], ans:1} },
    { id:{cat:'💻 Teknologi', q:'Apa perbedaan "horizontal scaling" vs "vertical scaling"?', opts:['Keduanya sama','Horizontal: menambah lebih banyak server; vertikal: meningkatkan kapasitas server yang ada','Vertikal selalu lebih murah','Horizontal hanya untuk database'], ans:1},
      en:{cat:'💻 Technology', q:'What is the difference between "horizontal scaling" and "vertical scaling"?', opts:['They are the same','Horizontal: adding more servers; vertical: increasing the capacity of existing servers','Vertical is always cheaper','Horizontal is only for databases'], ans:1} },
    { id:{cat:'💻 Teknologi', q:'Dalam neural network, fungsi "backpropagation" digunakan untuk?', opts:['Menambah lapisan baru','Menghitung gradient error dan memperbaiki bobot jaringan secara mundur','Mengurangi overfitting','Menginisialisasi bobot secara acak'], ans:1},
      en:{cat:'💻 Technology', q:'In neural networks, "backpropagation" is used to?', opts:['Adding new layers','Calculate error gradients and update network weights backward through the network','Reduce overfitting','Initialize weights randomly'], ans:1} },
    { id:{cat:'💻 Teknologi', q:'Apa yang dimaksud "eventual consistency" dalam sistem terdistribusi?', opts:['Data selalu konsisten secara instan','Sistem menjamin bahwa jika tidak ada update baru, semua replika akhirnya akan konsisten','Data tidak pernah konsisten','Konsistensi hanya di satu node'], ans:1},
      en:{cat:'💻 Technology', q:'What does "eventual consistency" mean in distributed systems?', opts:['Data is always instantly consistent','The system guarantees that if no new updates occur, all replicas will eventually be consistent','Data is never consistent','Consistency only on one node'], ans:1} },
    { id:{cat:'💻 Teknologi', q:'Dalam kompiler, "lexer" (tokenizer) bertugas untuk?', opts:['Mengoptimalkan kode','Memecah source code menjadi token-token dasar (identifier, keyword, simbol)','Mengeksekusi program','Membuat binary output'], ans:1},
      en:{cat:'💻 Technology', q:'In a compiler, the "lexer" (tokenizer) is responsible for?', opts:['Optimizing code','Breaking source code into basic tokens (identifiers, keywords, symbols)','Executing the program','Creating binary output'], ans:1} },
    { id:{cat:'💻 Teknologi', q:'Apa yang dimaksud "context switching" dalam sistem operasi?', opts:['Mengganti bahasa program','Proses OS menyimpan state satu proses dan memuat state proses lain saat multitasking','Refresh cache memory','Restart kernel'], ans:1},
      en:{cat:'💻 Technology', q:'What is "context switching" in an operating system?', opts:['Changing the programming language','The OS saving the state of one process and loading the state of another during multitasking','Refreshing cache memory','Restarting the kernel'], ans:1} },

    // ════════ MATEMATIKA / MATH — SENIOR LEVEL ════════
    { id:{cat:'🔢 Matematika', q:'Turunan dari f(x) = x³ - 3x² + 2x adalah?', opts:['3x² - 6x + 2','x² - 3x + 1','3x² - 3x','x³ - 6x'], ans:0},
      en:{cat:'🔢 Math', q:'The derivative of f(x) = x³ - 3x² + 2x is?', opts:['3x² - 6x + 2','x² - 3x + 1','3x² - 3x','x³ - 6x'], ans:0} },
    { id:{cat:'🔢 Matematika', q:'∫(2x + 3)dx = ?', opts:['x² + 3x + C','2x² + 3x + C','x + 3 + C','2x + C'], ans:0},
      en:{cat:'🔢 Math', q:'∫(2x + 3)dx = ?', opts:['x² + 3x + C','2x² + 3x + C','x + 3 + C','2x + C'], ans:0} },
    { id:{cat:'🔢 Matematika', q:'Jika matriks A = [[1,2],[3,4]], determinan A = ?', opts:['2','-2','10','-10'], ans:1},
      en:{cat:'🔢 Math', q:'If matrix A = [[1,2],[3,4]], det(A) = ?', opts:['2','-2','10','-10'], ans:1} },
    { id:{cat:'🔢 Matematika', q:'lim(x→0) sin(x)/x = ?', opts:['0','∞','1','Tidak ada'], ans:2},
      en:{cat:'🔢 Math', q:'lim(x→0) sin(x)/x = ?', opts:['0','∞','1','Does not exist'], ans:2} },
    { id:{cat:'🔢 Matematika', q:'Berapa nilai dari log₂(64)?', opts:['4','5','6','8'], ans:2},
      en:{cat:'🔢 Math', q:'What is the value of log₂(64)?', opts:['4','5','6','8'], ans:2} },
    { id:{cat:'🔢 Matematika', q:'Bilangan kompleks i² = ?', opts:['1','i','-1','0'], ans:2},
      en:{cat:'🔢 Math', q:'The complex number i² = ?', opts:['1','i','-1','0'], ans:2} },
    { id:{cat:'🔢 Matematika', q:'Deret geometri: 2 + 6 + 18 + ... Suku ke-5 adalah?', opts:['54','108','162','486'], ans:2},
      en:{cat:'🔢 Math', q:'Geometric series: 2 + 6 + 18 + ... What is the 5th term?', opts:['54','108','162','486'], ans:2} },
    { id:{cat:'🔢 Matematika', q:'Jumlah deret aritmetika 1 + 2 + 3 + ... + 100 = ?', opts:['4950','5000','5050','5100'], ans:2},
      en:{cat:'🔢 Math', q:'Sum of arithmetic series 1 + 2 + 3 + ... + 100 = ?', opts:['4950','5000','5050','5100'], ans:2} },
    { id:{cat:'🔢 Matematika', q:'Jika P(A) = 0.4 dan P(B) = 0.3 dan A, B independen, maka P(A∩B) = ?', opts:['0.7','0.12','0.1','0.34'], ans:1},
      en:{cat:'🔢 Math', q:'If P(A) = 0.4 and P(B) = 0.3, and A, B are independent, then P(A∩B) = ?', opts:['0.7','0.12','0.1','0.34'], ans:1} },
    { id:{cat:'🔢 Matematika', q:'Fungsi f(x) = e^x memiliki turunan?', opts:['xe^(x-1)','e^x','1','e^(x+1)'], ans:1},
      en:{cat:'🔢 Math', q:'The derivative of f(x) = e^x is?', opts:['xe^(x-1)','e^x','1','e^(x+1)'], ans:1} },
    { id:{cat:'🔢 Matematika', q:'Teorema Pythagoras: Jika sisi a=5, b=12, maka c=?', opts:['13','15','17','144'], ans:0},
      en:{cat:'🔢 Math', q:"Pythagorean theorem: If a=5, b=12, then c=?", opts:['13','15','17','144'], ans:0} },
    { id:{cat:'🔢 Matematika', q:'Berapa banyak permutasi dari kata "ABCD"?', opts:['16','20','24','32'], ans:2},
      en:{cat:'🔢 Math', q:'How many permutations are there of the letters "ABCD"?', opts:['16','20','24','32'], ans:2} },
    { id:{cat:'🔢 Matematika', q:'Jika vektor a = (3, 4), |a| = ?', opts:['3','4','5','7'], ans:2},
      en:{cat:'🔢 Math', q:'If vector a = (3, 4), |a| = ?', opts:['3','4','5','7'], ans:2} },
    { id:{cat:'🔢 Matematika', q:'Apa hasil dari C(10,3) (kombinasi 10 pilih 3)?', opts:['60','100','120','720'], ans:2},
      en:{cat:'🔢 Math', q:'What is C(10,3) (10 choose 3)?', opts:['60','100','120','720'], ans:2} },
    { id:{cat:'🔢 Matematika', q:'Dalam distribusi normal, berapa persen data berada dalam ±1 standar deviasi dari mean?', opts:['50%','68%','95%','99.7%'], ans:1},
      en:{cat:'🔢 Math', q:'In a normal distribution, what percentage of data lies within ±1 standard deviation of the mean?', opts:['50%','68%','95%','99.7%'], ans:1} },
    { id:{cat:'🔢 Matematika', q:'Solusi dari persamaan kuadrat x² - 5x + 6 = 0 adalah?', opts:['x=1,x=6','x=2,x=3','x=-2,x=-3','x=1,x=5'], ans:1},
      en:{cat:'🔢 Math', q:'The solution to quadratic equation x² - 5x + 6 = 0 is?', opts:['x=1,x=6','x=2,x=3','x=-2,x=-3','x=1,x=5'], ans:1} },
    { id:{cat:'🔢 Matematika', q:'Turunan dari sin(x) adalah?', opts:['cos(x)','-cos(x)','sin(x)','-sin(x)'], ans:0},
      en:{cat:'🔢 Math', q:'The derivative of sin(x) is?', opts:['cos(x)','-cos(x)','sin(x)','-sin(x)'], ans:0} },
    { id:{cat:'🔢 Matematika', q:'log₁₀(1000) = ?', opts:['1','2','3','4'], ans:2},
      en:{cat:'🔢 Math', q:'log₁₀(1000) = ?', opts:['1','2','3','4'], ans:2} },
    { id:{cat:'🔢 Matematika', q:'Rank matriks identitas 3×3 adalah?', opts:['1','2','3','0'], ans:2},
      en:{cat:'🔢 Math', q:'The rank of a 3×3 identity matrix is?', opts:['1','2','3','0'], ans:2} },
    { id:{cat:'🔢 Matematika', q:'Jika f(x) = ln(x), maka f\'(x) = ?', opts:['ln(x)','x','1/x','e^x'], ans:2},
      en:{cat:'🔢 Math', q:'If f(x) = ln(x), then f\'(x) = ?', opts:['ln(x)','x','1/x','e^x'], ans:2} },
    { id:{cat:'🔢 Matematika', q:'Barisan Fibonacci: 0,1,1,2,3,5,8,... Rasio antar suku berurutan mendekati?', opts:['√2','π','φ (phi, golden ratio ≈1.618)','e'], ans:2},
      en:{cat:'🔢 Math', q:'Fibonacci sequence: 0,1,1,2,3,5,8,... The ratio of consecutive terms approaches?', opts:['√2','π','φ (phi, golden ratio ≈1.618)','e'], ans:2} },
    { id:{cat:'🔢 Matematika', q:'Volume bola dengan jari-jari r = 3 adalah? (π≈3.14)', opts:['28.26','56.52','113.04','84.78'], ans:2},
      en:{cat:'🔢 Math', q:'Volume of a sphere with radius r = 3 is? (π≈3.14)', opts:['28.26','56.52','113.04','84.78'], ans:2} },
    { id:{cat:'🔢 Matematika', q:'Nilai eigen (eigenvalue) dari matriks [[2,0],[0,3]] adalah?', opts:['2 dan 2','3 dan 3','2 dan 3','5 dan 1'], ans:2},
      en:{cat:'🔢 Math', q:'The eigenvalues of matrix [[2,0],[0,3]] are?', opts:['2 and 2','3 and 3','2 and 3','5 and 1'], ans:2} },
    { id:{cat:'🔢 Matematika', q:'Aturan rantai (chain rule): d/dx[f(g(x))] = ?', opts:["f'(g(x))",'g\'(f(x))',"f'(g(x))·g'(x)",'f(x)·g\'(x)'], ans:2},
      en:{cat:'🔢 Math', q:"Chain rule: d/dx[f(g(x))] = ?", opts:["f'(g(x))",'g\'(f(x))',"f'(g(x))·g'(x)",'f(x)·g\'(x)'], ans:2} },
    { id:{cat:'🔢 Matematika', q:'Berapa nilai dari e⁰?', opts:['0','e','1','∞'], ans:2},
      en:{cat:'🔢 Math', q:'What is the value of e⁰?', opts:['0','e','1','∞'], ans:2} },
    { id:{cat:'🔢 Matematika', q:'Dalam teori probabilitas, jika dua dadu dilempar, peluang mendapat jumlah 7 adalah?', opts:['1/6','5/36','6/36','7/36'], ans:2},
      en:{cat:'🔢 Math', q:'In probability theory, if two dice are rolled, the probability of getting a sum of 7 is?', opts:['1/6','5/36','6/36','7/36'], ans:2} },
    { id:{cat:'🔢 Matematika', q:'Integral ∫₀¹ x² dx = ?', opts:['1/4','1/3','1/2','2/3'], ans:1},
      en:{cat:'🔢 Math', q:'The integral ∫₀¹ x² dx = ?', opts:['1/4','1/3','1/2','2/3'], ans:1} },
    { id:{cat:'🔢 Matematika', q:'Jika A adalah himpunan {1,2,3} dan B adalah {2,3,4}, maka A∪B = ?', opts:['{2,3}','{1,2,3,4}','{1,4}','{1,2,3,4,5}'], ans:1},
      en:{cat:'🔢 Math', q:'If A = {1,2,3} and B = {2,3,4}, then A∪B = ?', opts:['{2,3}','{1,2,3,4}','{1,4}','{1,2,3,4,5}'], ans:1} },
    { id:{cat:'🔢 Matematika', q:'Persamaan garis yang melalui (1,2) dengan gradient 3 adalah?', opts:['y=3x+1','y=3x-1','y=x+3','y=2x+3'], ans:1},
      en:{cat:'🔢 Math', q:'The equation of a line through (1,2) with slope 3 is?', opts:['y=3x+1','y=3x-1','y=x+3','y=2x+3'], ans:1} },
    { id:{cat:'🔢 Matematika', q:'Konversi bilangan biner 1010 ke desimal adalah?', opts:['8','10','12','14'], ans:1},
      en:{cat:'🔢 Math', q:'Converting binary 1010 to decimal gives?', opts:['8','10','12','14'], ans:1} },
    { id:{cat:'🔢 Matematika', q:'Teorema Bayes digunakan untuk menghitung?', opts:['Rata-rata distribusi','Probabilitas kondisional berdasarkan bukti baru','Korelasi dua variabel','Standar deviasi populasi'], ans:1},
      en:{cat:'🔢 Math', q:"Bayes' theorem is used to calculate?", opts:['Distribution mean','Conditional probability given new evidence','Correlation between two variables','Population standard deviation'], ans:1} },
    { id:{cat:'🔢 Matematika', q:'Jika z = 3 + 4i, maka |z| = ?', opts:['3','4','5','7'], ans:2},
      en:{cat:'🔢 Math', q:'If z = 3 + 4i, then |z| = ?', opts:['3','4','5','7'], ans:2} },
  ];

  /* ── Ambil bank soal sesuai bahasa ──────────────────────── */
  function getQuestionBank(lang) {
    return BILINGUAL_QUESTIONS.map(pair => lang === 'en' ? pair.en : pair.id);
  }

  /* ── Translation helper (quiz-local) ──────────────────── */
  function qt(key) {
    return (translations[currentLang] || translations['id'])[key] || key;
  }

  /* ── State ─────────────────────────────────────────── */
  let _questions = [];
  let _current   = 0;
  let _score     = 0;
  let _correct   = 0;
  let _timer     = null;
  let _timeLeft  = TIMER_SEC;
  let _answered  = false;
  let _countdownInterval = null;

  /* ── DOM Refs ──────────────────────────────────────── */
  const $ = id => document.getElementById(id);
  const screenStart    = $('quizScreenStart');
  const screenQuestion = $('quizScreenQuestion');
  const screenResult   = $('quizScreenResult');
  const startBtn       = $('quizStartBtn');
  const retryBtn       = $('quizRetryBtn');
  const goLbBtn        = $('quizGoLbBtn');
  const lbRefreshBtn   = $('quizLbRefresh');
  const playerNameEl   = $('quizPlayerName');

  if (!screenStart) return;

  /* ── Helpers ─────────────────────────────────────── */
  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  // Acak opsi jawaban supaya user tidak hafal posisi
  function shuffleOptions(q) {
    const paired = q.opts.map((opt, i) => ({ opt, isAns: i === q.ans }));
    const shuffled = shuffle(paired);
    return {
      ...q,
      opts: shuffled.map(p => p.opt),
      ans:  shuffled.findIndex(p => p.isAns)
    };
  }

  function showScreen(screen) {
    [screenStart, screenQuestion, screenResult].forEach(s => s.style.display = 'none');
    screen.style.display = 'block';
  }

  function getUsername() {
    return localStorage.getItem('zanpw_username') || 'Anonim';
  }

  /* ── Leaderboard Reset Countdown ─────────────────── */
  async function getNextResetTime() {
    try {
      const res  = await fetch(`${META_PATH}/last_reset.json`);
      const data = res.ok ? await res.json() : null;
      const lastReset = (data && data.time) ? data.time : Date.now();
      // Cek apakah sudah waktunya reset otomatis
      const resetInterval = RESET_DAYS * 24 * 60 * 60 * 1000;
      if (Date.now() - lastReset >= resetInterval) {
        await doAutoReset(lastReset + resetInterval);
        return Date.now() + resetInterval;
      }
      return lastReset + resetInterval;
    } catch(e) {
      return Date.now() + RESET_DAYS * 24 * 60 * 60 * 1000;
    }
  }

  async function doAutoReset(expectedTime) {
    try {
      await fetch(`${LB_PATH}.json`, { method: 'DELETE' });
      await fetch(`${META_PATH}/last_reset.json`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ time: expectedTime || Date.now() })
      });
    } catch(e) {}
  }

  function startCountdown(nextResetTime) {
    clearInterval(_countdownInterval);
    const el = $('quizCountdown');
    if (!el) return;
    function update() {
      const diff = nextResetTime - Date.now();
      if (diff <= 0) { el.textContent = qt('quiz_reset_soon'); return; }
      const d = Math.floor(diff / 86400000);
      const h = Math.floor((diff % 86400000) / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);
      const td = qt('quiz_time_d');
      const th = qt('quiz_time_h');
      const tm = qt('quiz_time_m');
      const ts = qt('quiz_time_s');
      el.textContent = `${d}${td} ${h.toString().padStart(2,'0')}${th} ${m.toString().padStart(2,'0')}${tm} ${s.toString().padStart(2,'0')}${ts}`;
    }
    update();
    _countdownInterval = setInterval(update, 1000);
  }

  /* ── Load Username ─────────────────────────────────── */
  function refreshPlayerName() {
    if (playerNameEl) playerNameEl.textContent = getUsername();
  }
  refreshPlayerName();
  window.addEventListener('zanpw:usernameChanged', refreshPlayerName);

  /* ── Start Quiz ────────────────────────────────────── */
  function startQuiz() {
    const bank = getQuestionBank(currentLang);
    // Ambil soal acak dari tiap kategori — lebih variatif tiap sesi
    const keyUmum  = (currentLang === 'en') ? 'General'    : 'Umum';
    const keyTekno = (currentLang === 'en') ? 'Technology' : 'Teknologi';
    const keyMath  = (currentLang === 'en') ? 'Math'       : 'Matematika';
    const umum  = shuffle(bank.filter(q => q.cat.includes(keyUmum))).slice(0, 4);
    const tekno = shuffle(bank.filter(q => q.cat.includes(keyTekno))).slice(0, 3);
    const math  = shuffle(bank.filter(q => q.cat.includes(keyMath))).slice(0, 3);
    _questions = shuffle([...umum, ...tekno, ...math]).map(shuffleOptions);
    _current   = 0;
    _score     = 0;
    _correct   = 0;
    showScreen(screenQuestion);
    renderQuestion();
  }

  /* ── Render Question ──────────────────────────────── */
  function renderQuestion() {
    const q = _questions[_current];
    _answered = false;

    const pct = (_current / TOTAL_Q) * 100;
    $('quizProgressBar').style.width = pct + '%';
    $('quizQCounter').textContent    = `${_current + 1} / ${TOTAL_Q}`;
    $('quizScoreLive').textContent   = `⭐ ${_score}`;
    $('quizCatBadge').textContent    = q.cat;
    $('quizQuestionText').textContent = q.q;

    const optsEl = $('quizOptions');
    optsEl.innerHTML = '';
    q.opts.forEach((opt, i) => {
      const btn = document.createElement('button');
      btn.className = 'quiz-option-btn';
      btn.textContent = opt;
      btn.addEventListener('click', () => selectAnswer(i));
      optsEl.appendChild(btn);
    });

    startTimer();
  }

  /* ── Timer ─────────────────────────────────────────── */
  function startTimer() {
    _timeLeft = TIMER_SEC;
    updateTimerUI();
    clearInterval(_timer);
    _timer = setInterval(() => {
      _timeLeft--;
      updateTimerUI();
      if (_timeLeft <= 0) { clearInterval(_timer); if (!_answered) timeUp(); }
    }, 1000);
  }

  function updateTimerUI() {
    $('quizTimerText').textContent = _timeLeft;
    const pct = (_timeLeft / TIMER_SEC) * 100;
    const circle = $('quizTimerCircle');
    circle.setAttribute('stroke-dasharray', `${pct} 100`);
    const color = _timeLeft > 8 ? '#facc15' : _timeLeft > 4 ? '#f97316' : '#ef4444';
    circle.setAttribute('stroke', color);
    $('quizTimerText').style.color = color;
  }

  function timeUp() {
    _answered = true;
    const btns = $('quizOptions').querySelectorAll('.quiz-option-btn');
    btns.forEach(b => b.disabled = true);
    btns[_questions[_current].ans].classList.add('reveal');
    setTimeout(nextQuestion, 1200);
  }

  /* ── Select Answer ────────────────────────────────── */
  function selectAnswer(idx) {
    if (_answered) return;
    _answered = true;
    clearInterval(_timer);
    const q = _questions[_current];
    const btns = $('quizOptions').querySelectorAll('.quiz-option-btn');
    btns.forEach(b => b.disabled = true);
    if (idx === q.ans) {
      _correct++;
      _score += PTS_CORRECT;   // flat 10 pts, max score = 100 untuk 10 soal
      btns[idx].classList.add('correct');
    } else {
      btns[idx].classList.add('wrong');
      btns[q.ans].classList.add('reveal');
    }
    $('quizScoreLive').textContent = `⭐ ${_score}`;
    setTimeout(nextQuestion, 1000);
  }

  function nextQuestion() {
    _current++;
    if (_current >= TOTAL_Q) endQuiz();
    else renderQuestion();
  }

  /* ── End Quiz ──────────────────────────────────────── */
  async function endQuiz() {
    clearInterval(_timer);
    $('quizProgressBar').style.width = '100%';
    let emoji, title;
    if (_correct >= 9)      { emoji = '🏆'; title = qt('quiz_result_9'); }
    else if (_correct >= 7) { emoji = '🎉'; title = qt('quiz_result_7'); }
    else if (_correct >= 5) { emoji = '👍'; title = qt('quiz_result_5'); }
    else if (_correct >= 3) { emoji = '😅'; title = qt('quiz_result_3'); }
    else                    { emoji = '💪'; title = qt('quiz_result_0'); }
    $('quizResultEmoji').textContent = emoji;
    $('quizResultTitle').textContent = title;
    $('quizResultScore').textContent = _score;
    $('quizResultSub').textContent   = qt('quiz_result_sub').replace('{correct}', _correct).replace('{total}', TOTAL_Q);
    $('quizResultStats').innerHTML   = `
      <div class="quiz-stat-chip">${qt('quiz_stat_correct')} ${_correct}</div>
      <div class="quiz-stat-chip">${qt('quiz_stat_wrong')} ${TOTAL_Q - _correct}</div>
      <div class="quiz-stat-chip">${qt('quiz_stat_score')} ${_score}</div>`;
    showScreen(screenResult);
    const username = getUsername();
    if (username && username !== 'Anonim') {
      const rank = await saveToLeaderboard(username, _score, _correct);
      if (rank) $('quizResultRank').textContent = qt('quiz_rank_msg').replace('{rank}', rank);
    } else {
      $('quizResultRank').textContent = qt('quiz_no_login');
    }
    loadLeaderboard();
  }

  /* ── Leaderboard Firebase ─────────────────────────── */
  async function saveToLeaderboard(username, score, correct) {
    try {
      const key  = username.replace(/[.#$\[\]]/g, '_');
      const res  = await fetch(`${LB_PATH}/${key}.json`);
      const prev = res.ok ? await res.json() : null;
      const finalScore = (prev && prev.score >= score) ? prev.score : score;
      if (!prev || prev.score < score) {
        await fetch(`${LB_PATH}/${key}.json`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username, score, correct, playedAt: Date.now() })
        });
      }
      const allRes  = await fetch(`${LB_PATH}.json`);
      const allData = allRes.ok ? await allRes.json() : null;
      if (!allData) return null;
      const scores = Object.values(allData).map(e => e.score || 0).sort((a, b) => b - a);
      return scores.indexOf(finalScore) + 1;
    } catch(e) { return null; }
  }

  async function loadLeaderboard() {
    const listEl = $('quizLbList');
    if (!listEl) return;
    listEl.innerHTML = `<div class="quiz-lb-loading">${qt('quiz_lb_loading_text')}</div>`;
    try {
      const res  = await fetch(`${LB_PATH}.json`);
      const data = res.ok ? await res.json() : null;
      if (!data || Object.keys(data).length === 0) {
        listEl.innerHTML = `<div class="quiz-lb-empty">${qt('quiz_lb_empty')}</div>`;
        return;
      }
      const myName = getUsername();
      const sorted = Object.values(data)
        .filter(e => e && e.username)
        .sort((a, b) => (b.score || 0) - (a.score || 0))
        .slice(0, 20);
      listEl.innerHTML = '';
      sorted.forEach((entry, i) => {
        const rank = i + 1;
        const rankLabel = rank === 1 ? '🥇' : rank === 2 ? '🥈' : rank === 3 ? '🥉' : rank;
        const rankClass = rank === 1 ? 'gold' : rank === 2 ? 'silver' : rank === 3 ? 'bronze' : '';
        const isMe = entry.username === myName;
        const meLbl = qt('quiz_lb_me');
        const row  = document.createElement('div');
        row.className = 'quiz-lb-row' + (isMe ? ' is-me' : '');
        row.innerHTML = `
          <span class="quiz-lb-rank ${rankClass}">${rankLabel}</span>
          <span class="quiz-lb-name">${entry.username.replace(/</g,'&lt;')}${isMe ? ` <span style="color:#facc15;font-size:0.65rem">(${meLbl})</span>` : ''}</span>
          <span class="quiz-lb-correct">${entry.correct || 0}/10</span>
          <span class="quiz-lb-score">${entry.score || 0}</span>`;
        listEl.appendChild(row);
      });
    } catch(e) {
      listEl.innerHTML = `<div class="quiz-lb-empty">${qt('quiz_lb_error')}</div>`;
    }
  }

  /* ── Dev Reset Leaderboard ────────────────────────── */
  window._quizDevReset = async function() {
    try {
      await fetch(`${LB_PATH}.json`, { method: 'DELETE' });
      await fetch(`${META_PATH}/last_reset.json`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ time: Date.now() })
      });
      loadLeaderboard();
      const nextReset = Date.now() + RESET_DAYS * 24 * 60 * 60 * 1000;
      startCountdown(nextReset);
      return true;
    } catch(e) { return false; }
  };

  /* ── Events ──────────────────────────────────────── */
  startBtn.addEventListener('click', startQuiz);
  retryBtn.addEventListener('click', () => { showScreen(screenStart); refreshPlayerName(); });
  goLbBtn.addEventListener('click',  () => {
    $('quizLbCard')?.scrollIntoView({ behavior:'smooth', block:'center' });
  });
  lbRefreshBtn?.addEventListener('click', loadLeaderboard);

  /* ── Re-render on language change ───────────────────── */
  document.addEventListener('zanpw:langChanged', () => {
    // Refresh countdown labels kalau quiz sedang terbuka
    getNextResetTime().then(nextReset => startCountdown(nextReset));
    // Refresh leaderboard strings (loading state etc.)
    loadLeaderboard();
  });

  /* ── Init ─────────────────────────────────────────── */
  loadLeaderboard();
  getNextResetTime().then(nextReset => startCountdown(nextReset));

})();
