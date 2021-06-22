var config = {
    style: 'mapbox://styles/vheritage/ckq5s9man3m6b17o0mtgj7vay',
    accessToken: 'pk.eyJ1Ijoidmhlcml0YWdlIiwiYSI6ImNrb3UwNHIzNzAyMG0yd3FqZGdiejFxOTEifQ._ABN33UTZQGAwfZCiub-yQ',
    showMarkers: true,
    markerColor: '#3FB1CE',
    theme: 'light',
    use3dTerrain: false,
    title: 'Културен маршрут Одесос-Варна',
    //subtitle: 'A descriptive and interesting subtitle to draw in the reader',
    //byline: 'Културното наследство на Варна като туристическа дестинация',
    footer: 'varnaheritage.com',
    chapters: [
        {
            id: 'object-1',
            alignment: 'left',
            hidden: false,
            title: ' Зараждане на Одесос – обща характеристика на археологическото наследство',
            //image: 'https://uploads-ssl.webflow.com/5e89dbc0ec626fb32b2db7fd/5fc2814169f35bf6a1273368_Тумб.jpg',
            description: 'Археологически резерват „Одесос” е обявен с Разпореж- дане на Министерски съвет No76 от 27.04.1974г. Границите на резервата обхващат обширна зона в централната част на Варна, където във времето са разкрити множество археоло- гически обекти. Най- ранните от тях, спадат към елинистич- ната епоха и се свързват с поселването на морските брегове от изселническите движения от Егейска Гърция. Античният град - колония Одесос е основан през втората четвърт на VIв. пр. Хр. (580-550г.пр.Хр.) от малоазийски изселници от йоний- ския град - държава Милет.',
            location: {
                center: [27.91922, 43.20340],
                zoom: 14,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'object-2',
            alignment: 'right',
            hidden: false,
            //title: 'Стратиграфия, исторически и културни наслоявания и влияния. Античност.',
            image: 'https://uploads-ssl.webflow.com/5e89dbc0ec626fb32b2db7fd/5fc2814169f35bf6a1273368_Тумб.jpg',
            description: 'Разкритите археологически обекти са с различна дати- ровка и биват няколко вида: обществени, култови и жилищни сгради, комуникационни структури и съоръжения на техни- ческата инфраструктура (улици, канали). Множеството от- крити части от фортификационни съоръжения (крепостни стени и кули) дават информация за границите на града и от- части за неговото градоустройство. Всяко ново откритие предоставя на учените нови данни, които допринасят за изясняването на функциите и историята на крепостните съоръжения и обхвата на града в различните епохи.',
            location: {
                center: [27.91922, 43.20340],
                zoom: 14,
                pitch: 0,
                bearing: 1.60
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'object-3',
            alignment: 'left',
            hidden: false,
            title: 'Археологически резерват "Одесос" - античност, средновековие, възраждане',
            image: 'https://uploads-ssl.webflow.com/5e89dbc0ec626fb32b2db7fd/5fc40b7d2f53753f66fc626d_Тумб-Recovered.jpg',
            description: 'Археологически резерват „Одесос” е обявен с Разпореждане на Министерски съвет №76 от 27.04.1974г. На следващата година са обнародвани Инструкции /Д.В. 83/28.11.1975г./  за опазване  на Архитектурния и археологически резерват, заемащ територията на античния град Одесос – Варна.',
            location: {
                center: [27.91816, 43.20023],
                zoom: 19,
                pitch: 48.50,
                bearing: -11.20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
            {
            id: 'object-4',
            alignment: 'right',
            hidden: false,
            title: 'Oсмански и възрожденски период и преход към европейските ценности',
            image: 'https://uploads-ssl.webflow.com/5e89dbc0ec626fb32b2db7fd/5eb7c8589c6a7d262efc3663_388_thumb.jpeg',
            description: 'По времето на османското робство Варна придобива всички характеристики на османски град - ограден е с крепостни стени, а вътрешността му е прорязана от тесни и тъмни улици. Жилищните сгради са основно паянтови(дървени), а прозорците им са гледали към вътрешните дворове, избягвайки мръсотията извън кварталните пространства. Градоустройството е типично за средновековен град с етнически квартали, които функционират като затворени общества. Композиционни акценти в историческия силует са представлявали 17 джамии с техните минарета.',
            location: {
                center: [27.91573, 43.19959],
                zoom: 19,
                pitch: 60,
                bearing: 118.40
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
            {
            id: 'object-5',
            alignment: 'left',
            hidden: false,
            title: 'Нова история на Варна – съвременно градоустройство и строителство',
            image: 'https://uploads-ssl.webflow.com/5e89dbc0ec626fb32b2db7fd/5fc40b7d2f53753f66fc626d_Тумб-Recovered.jpg',
            description: 'След Освобождението и разрушаването на крепостната стена се заселват много българи от Северна Добруджа, Бесарабия, Тракия и Македония, се развива Ени махале (българската махала) Българското население значително нараства.',
            location: {
                center: [27.91613, 43.20046],
                zoom: 18.49,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
