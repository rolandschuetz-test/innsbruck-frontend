<template>
    <div>
        
        
        <div class="hero-banner-section">
            <div class="banner-section page-banner" data-color="blue">
                <div class="container">
                    <div class="banner-row">
                        <div class="columns">
                            <div class="column is-5">
                                <Banner />
                            </div>
                            <div class="column is-7">
                                <HeroSlider />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        
        <div class="quicklinks-section">
            <div class="container">
                <div class="quicklinks-row">
                    <Quicklinks :quicklinkLists="quicklinkLists" />
                    <div class="quicklinks-btn">
                        <b-button type="is-secondary" icon-right="tip-right">Alle Services anzeigen</b-button>
                    </div>
                </div>
            </div>
        </div>
        <div class="quicklinks-section bg-grey-50">
            <div class="container">
                <div class="quicklinks-row">
                    <Quicklinks :quicklinkLists="quicklinkLists2" />
                </div>
            </div>
        </div>
        
        <News></News>
        
        

    </div>
</template>

<script>
    import Banner from '~/components/home/Banner';
    import HeroSlider from '~/components/home/HeroSlider'
    import Quicklinks from '~/components/home/Quicklinks';
    import News from '~/components/home/News';
    import { mapMutations, mapGatters, mapState } from 'vuex';
    export default {
        name: "Homepage",
        components: {
            Banner,
            HeroSlider,
            Quicklinks,
            News
        },
        head(){
            return {
                title: "Startseite - Stadt Innsbruck",
            }
        }, 
        data () {
            return {
                rounded: false,
                childMessage: true,
                quicklinkLists: [
                    {
                        link: '#',
                        icon: 'play-cubes',
                        title: 'Anmeldung im Kindergarten',
                        disc: 'Anmeldeformulare, allgemeine Infos, Kindergarten Start etc'
                    },
                    {
                        link: '#',
                        icon: 'world-location',
                        title: 'Meldebestätigung',
                        disc: 'Meldepflicht, Meldezettel, Adress- änderungen, Umzug ins Ausland etc.'
                    },
                    {
                        link: '#',
                        icon: 'judge-hammer',
                        title: 'Strafen',
                        disc: 'Strafverfügung, Anonymverfügung, Verwaltungsstrafen, etc.'
                    },
                    {
                        link: '#',
                        icon: 'state-and-flag',
                        title: 'Staatsbürgerschaft',
                        disc: 'Erwerb der Staatsbürgerschaft, Staatsbürgerschaftsnachweis für ein Kind'
                    },

                    {
                        link: '#',
                        icon: 'euro',
                        title: 'Förderanträge',
                        disc: 'Mietzinsbeihilfe, Vereins- und Kultur- subventionen, Arbeitsplatzprämien etc.'
                    },
                    {
                        link: '#',
                        icon: 'swimmer',
                        title: 'Sportanlagen',
                        disc: 'Sporthallen, Leistungszentren, Sportplätze, Beachvolleyball-Anlagen, Eislaufplätze etc.'
                    },
                    {
                        link: '#',
                        icon: 'parking',
                        title: 'Parken',
                        disc: 'Parkzonen, Strafverfügungen, AnwohnerInnenparken, Parkkarten, Organmandate, etc.'
                    },
                    {
                        link: '#',
                        icon: 'baby',
                        title: 'Schwangerschaft und Geburt',
                        disc: 'Neuausstellung, Reisepass für Minderjährige unter 18 Jahren, Notpass, Reisepass gestohlen etc.'
                    },
                    {
                        link: '#',
                        icon: 'passport',
                        title: 'Reisepass',
                        disc: 'Neuausstellung, Reisepass für Minderjährige unter 18 Jahren, Notpass, Reisepass gestohlen etc.'
                    },
                    {
                        link: '#',
                        icon: 'wedding-rings',
                        title: 'Eheschließung und Trauung',
                        disc: 'Verlobung, Heirat, Anmeldung zur Eheschließung, standesamtliche und konfessionelle Trauung, Namensänderungen, Heirat im Ausland, Ehegüterrecht etc.'
                    },
                    {
                        link: '#',
                        icon: 'airplane-ticket',
                        title: 'Aufenthaltstitel und Visa',
                        disc: 'Aufenthalt von EU-Bürgern, sonstigen EWR-Bürgern und Schweizern in Österreich, Aufenthalt von Drittstaatsangehörigen, Aufenthaltstitel etc.'
                    },
                    {
                        link: '#',
                        icon: 'parcel',
                        title: 'Übersiedeln',
                        disc: 'Bewilligungen für Umzüge, Ladezonen und Parkkarten etc.'
                    },
                ],
                quicklinkLists2: [
                    {
                        link: '#',
                        icon: 'barrier',
                        title: 'Baustellen und Projekte',
                        disc: 'Interaktiver Stadtplan inklusive Baustellen und städtische Projekte'
                    },
                    {
                        link: '#',
                        icon: 'phonebook',
                        title: 'Dienststellen',
                        disc: 'Aufenthaltsangelegenheiten, Jugendamt, Standesamt und Staatsbürgerschaft etc.'
                    },
                    {
                        link: '#',
                        icon: 'digital-rathaus',
                        title: 'Digitales Rathaus',
                        disc: 'Formulare, Online-Amtswege, Amtstafel und Städtische Vorschriften etc.'
                    },
                    {
                        link: '#',
                        icon: 'pin',
                        title: 'Amtstafel und Städtische Vorschriften',
                        disc: 'Öffentliche Bekanntmachungen und allgemeine Informationen'
                    },

                    {
                        link: '#',
                        icon: 'suitcase',
                        title: 'Arbeiten in Innsbruck',
                        disc: 'Karriere bei der Stadt, Wirtschaftsstandort, GründerInnen, VeranstalterInnen etc.'
                    },
                    {
                        link: '#',
                        icon: 'parliament',
                        title: 'Stadtpolitik und Verwaltung',
                        disc: 'Gemeinderat, Stadtsenat etc.'
                    }
                ]
            }
        },
        mounted (){
            document.body.classList.add('home');
            this.changeSearchState(false);
            this.changeFooterState(false);
            window.addEventListener('DOMContentLoaded', (event) => {
            });
        },
        destroyed () {
            document.body.classList.remove('home');
            this.changeSearchState(true);
            this.changeFooterState(true);
        },
        methods: {
            changeSearchState (flag) {
                this.$store.commit('SearchCheck', flag);
            },
            changeFooterState (flag) {
                this.$store.commit('FooterContactCheck', flag);
            }
        },
        computed: {
        }
    }
</script>


