"use strict"

const players = [
    {
        name: 'Bíró Annamária',
        team: 'Ipartechnika Győr SE',
        gender: 'nő',
        type: 'u15',
        best: '520',
        img: 'https://jakiskola.hu/wp-content/uploads/2023/09/Annamari-768x1024.jpg',
    },

    {
        name: 'Korcsmáros Zoé',
        team: 'ZTE-ZÁÉV TK',
        gender: 'nő',
        type: 'u15',
        best: '554',
        img: 'https://scontent.fbud7-4.fna.fbcdn.net/v/t39.30808-6/494308029_122166285896546857_29413513973211694_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=tGCq8T4d9bcQ7kNvwFNvEDB&_nc_oc=Adn38oZuHWsKCe-Re0Yt7y7rbpeBzx0bQRXhNqpW9E6eCP_duzAumtoOlf7noOcKQnOg6Hjs1faSCZ4Bsg2RZ8hI&_nc_zt=23&_nc_ht=scontent.fbud7-4.fna&_nc_gid=_1u6Wb5v0E8jsGdYSIoD4A&oh=00_AfIcO3oaTkXg2Zp7Doesc0OjSadVnUnXmrwQgbbwdCpLBg&oe=6822F466',
    },

    {
        name: 'Bognár Barbara',
        team: 'Ferencvárosi TC',
        gender: 'nő',
        type: 'u19',
        best: '559',
        img: 'https://www.fradi.hu/wm/upload/295x393/z/a4/0li6u.jpg',
    },

    {
        name: 'Bodó Bettina',
        team: 'Ferencvárosi TC',
        gender: 'nő',
        type: 'u19',
        best: '557',
        img: 'https://www.fradi.hu/wm/upload/295x393/6/nr/hh647.jpg',
    },

    {
        name: 'Fábián Adelin',
        team: 'Ferencvárosi TC',
        gender: 'nő',
        type: 'u19',
        best: '609',
        img: 'https://www.fradi.hu/wm/upload/295x393/u/01/1vbia.jpg',
    },

    {
        name: 'Danóczy Kinga',
        team: 'Rákoshegyi VSE',
        gender: 'nő',
        type: 'u19',
        best: '600',
        img: 'https://feltoltes.csaka9.hu/uploads/Danoczy_Kinga.jpeg',
    },

    {
        name: 'Szabó Boglárka',
        team: 'Ipartechnika Győr SE',
        gender: 'nő',
        type: 'u19',
        best: '582',
        img: 'https://feltoltes.csaka9.hu/uploads/IMG_20230912_145950.jpg',
    },

    {
        name: 'Müller Barbara',
        team: 'Pápai Vasas TK',
        gender: 'nő',
        type: 'u19',
        best: '598',
        img: 'https://scontent.fbud7-4.fna.fbcdn.net/v/t39.30808-6/489960721_122226953984020039_7428192294536384482_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Ll2fKTRMDu0Q7kNvwFMSTqp&_nc_oc=Adm8YRzYN4Elil93IKSDtZ6fLffijUuu-5LCLAShnxvEgBdyD2MAooYqsdslxaR9FIuixCtcifMzaEbc95LSzij4&_nc_zt=23&_nc_ht=scontent.fbud7-4.fna&_nc_gid=emX1kWOgUFmUG6vBqdzcaA&oh=00_AfJQX_D9_Seb648qOesdyAOBLQBlUpszbEqT3yBwLQfubw&oe=6822F856',
    },

    {
        name: 'Kiss Bence',
        team: 'Répcelaki SE',
        gender: 'férfi',
        type: 'u15',
        best: '576',
        img: 'https://scontent.fbud7-4.fna.fbcdn.net/v/t39.30808-6/494125345_1259074262888339_99874194833710415_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=WreRuhhXzLUQ7kNvwG-ra41&_nc_oc=AdkOM0CVyH732opZvOUl0f-W6mrjmvi6fFytO-gPLbP1OdA_tnp5mrJRxi1tuLZmMTMRGUS7ptFL5F_QcNBc486v&_nc_zt=23&_nc_ht=scontent.fbud7-4.fna&_nc_gid=vdG4P8p0DGO3eIxlFkzi5w&oh=00_AfKfywIHUnIVhE6MZ5xG_8r5mxiGH0rSGUE5Kal_kS5D1w&oe=6822FB63',
    },

    {
        name: 'Orbán Levente',
        team: 'NK Teke SE',
        gender: 'férfi',
        type: 'u15',
        best: '547',
        img: '',
    },

    {
        name: 'Hegedűs Dominik',
        team: 'Pápai Vasas TK I.',
        gender: 'férfi',
        type: 'u19',
        best: '584',
        img: '',
    },

    {
        name: 'Pis Zsombor',
        team: 'Oroszlányi SZE',
        gender: 'férfi',
        type: 'u19',
        best: '619',
        img: 'https://feltoltes.csaka9.hu/uploads/Pis_Zsombor.jpg',
    },

    {
        name: 'Reibling Olivér',
        team: 'Szentgotthárdi VSE',
        gender: 'férfi',
        type: 'u19',
        best: '582',
        img: 'https://feltoltes.csaka9.hu/uploads/Oliver.jpg',
    },

    {
        name: 'Sziklási Szabolcs',
        team: 'Köfém SC',
        gender: 'férfi',
        type: 'u19',
        best: '600',
        img: 'https://feltoltes.csaka9.hu/uploads/Sziklasi_Szabolcs.jpg',
    },

    {
        name: 'Várvögyi Milán',
        team: 'Ferencvárosi TC',
        gender: 'férfi',
        type: 'u19',
        best: '625',
        img: 'https://www.fradi.hu/wm/upload/295x393/t/gb/j7r1o.jpg',
    },

    {
        name: 'Mazzag Dávid',
        team: 'Zalaegerszegi TK',
        gender: 'férfi',
        type: 'u19',
        best: '617',
        img: '',
    },

    {
        name: 'Harcos Ágnes',
        gender: 'nő',
        team: 'Szövetségi kapitány',
        type: 'HUN',
        img: 'https://scontent.fbud7-4.fna.fbcdn.net/v/t39.30808-6/480975639_2409739739380028_8013088948715270987_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=104&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=_mpdCAKFxtkQ7kNvwHFC3UJ&_nc_oc=AdlIYAHmBBaMQ3d6oSAPRYkBVbAUyI3e2FW1Ufz7ocBZsKpMWIjsBNxmaTFocO1tm4LxrOHLs34JnCirEu2P44mk&_nc_zt=23&_nc_ht=scontent.fbud7-4.fna&_nc_gid=EGUE0N4ijdkLqAjAOBhp5A&oh=00_AfK88eiv-o9nAJmstSwxVthAe0mjRr3nfyOIezrXyz3iNw&oe=68230BD7',
    },

    {
        name: 'Farkas Imre',
        gender: 'férfi',
        team: 'Szövetségi kapitány',
        type: 'HUN',
        img: 'https://scontent.fbud7-4.fna.fbcdn.net/v/t39.30808-6/448682969_10219467698762418_5251711648321696547_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=wHMleDvfrUkQ7kNvwHv-ihy&_nc_oc=AdnfYkMOZKSXUb15JhQzctnO35Z8X3E80sbkU3eN67GE9xxKwZSwiLxLxBCchIKXOXZxh5W1cxCYV7Gkuvwf5075&_nc_zt=23&_nc_ht=scontent.fbud7-4.fna&_nc_gid=Fw3U6P4JBUhTwZC_Ph2cHQ&oh=00_AfIFqUpQHwLfvqbbzycOqcBbhfCSvHV6RPYRA2qkoOeEkw&oe=68230768',
    },

    {
        name: 'Tróbert József',
        gender: 'férfi',
        team: 'Szövetségi kapitány',
        type: 'HUN',
        img: 'https://scontent.fbud7-3.fna.fbcdn.net/v/t39.30808-6/480890961_2409742042713131_2213869011628627616_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=110&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=HqJjxbJf1YAQ7kNvwHVhsEP&_nc_oc=Admcrl1eZkfZvYq9az7RRG09jIn9LlTUVfsXEFOaZVvNvTfgtPUI8AtYc1dylXG0LI7qBDL53U6YIaojK91a7eA5&_nc_zt=23&_nc_ht=scontent.fbud7-3.fna&_nc_gid=fct3hR_aXQum7Jhd45AOMA&oh=00_AfJ82JYD8rMBOKm8Ma5ON06vwrzVtjWmc_eeR3A1Gb1uMA&oe=68231A28',
    },

]

export {
    players
}
