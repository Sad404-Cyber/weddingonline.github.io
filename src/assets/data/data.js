export const data = {
    bride: {
        L: {
            id: 1,
            name: 'Hafidz Abdillah',
            child: 'Putra Ke 2',
            father: 'Bapak J',
            mother: 'Ibu N',
            image: './src/assets/images/cowo.png'
        },
        P: {
            id: 2,
            name: 'Tetik Fatmawati, A.md. Ft',
            child: 'Putri ke 1',
            father: 'Sunardi',
            mother: 'Tentrem',
            image: './src/assets/images/cewe.png'
        },

        couple: './src/assets/images/couple.png'
    },

    time: {
        marriage: {
            year: '2026',
            month: 'Mei',
            date: '03',
            day: 'Minggu',
            hours: {
                start: '07.00',
                finish: 'Selesai'
            }
        },
        reception: {
            year: '2026',
            month: 'Mei',
            date: '03',
            day: 'Minggu',
            hours: {
                start: '09.00',
                finish: 'Selesai'
            }
        },
        address: 'JL Panjangan RT01 RW01 Gondangsari, Kec Juwiring, Kab.klaten'
    },

    link: {
        calendar: 'https://calendar.app.google/sEDjfULqAmzA1NDx9',
        maps: 'https://maps.app.goo.gl/W6VdSPnMNyk67UwD8'
    },

    galeri: [
        {
            id: 1,
            image: './src/assets/images/1.png'
        },
        {
            id: 2,
            image: './src/assets/images/2.png'
        },
        {
            id: 3,
            image: './src/assets/images/3.png'
        },
        {
            id: 4,
            image: './src/assets/images/4.png'
        },
        {
            id: 5,
            image: './src/assets/images/5.png'
        }
    ],

    bank: [
        {
            id: 1,
            name: 'Bisa Diatur',
            icon: './src/assets/images/bca.png',
            rekening: '12345678'
        },
        {
            id: 2,
            name: 'Bisa Diatur',
            icon: './src/assets/images/bri.png',
            rekening: '12345678'
        },
    ],

    audio: 'musik.mp3.mp3',

    api: 'https://script.google.com/macros/s/AKfycbzyx8VCeH-SEeO3bMVFbwTyx1dHEogqVJLgFOd5GKAITjCrg3JI46opk2T-bWkhugbkcg/exec',

    navbar: [
        {
            id: 1,
            teks: 'Home',
            icon: 'bx bxs-home-heart',
            path: '#home',
        },
        {
            id: 2,
            teks: 'Mempelai',
            icon: 'bx bxs-group',
            path: '#bride',
        },
        {
            id: 3,
            teks: 'Tanggal',
            icon: 'bx bxs-calendar-check',
            path: '#time',
        },
        {
            id: 4,
            teks: 'Galeri',
            icon: 'bx bxs-photo-album',
            path: '#galeri',
        },
        {
            id: 5,
            teks: 'Ucapan',
            icon: 'bx bxs-message-rounded-dots',
            path: '#wishas',
        },
    ],
}
