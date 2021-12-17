<template>
    <div :headerVisible="thissearch">
        <Timelimit></Timelimit>
        
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

        <b-button
            label="Modal 1"
            type="is-primary"
            size="is-medium"
            @click="isModalOne = true" />
        <b-button
            label="Modal 2"
            type="is-primary"
            size="is-medium"
            @click="isModalTwo = true" />
        <b-button
            label="Modal 3"
            type="is-primary"
            size="is-medium"
            @click="isModalThree = true" />

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

        

        <b-modal v-model="isModalOne" :width="850" :animation="animation" ref="modal" @close="onClose">
            <div class="popup-main-box">
                <div class="popup-card">
                    <b-button type="modal-close" @click="cancel">Schließen</b-button>
                    <div class="popup-info">
                        <div class="popup-data">
                            <h2>COVID-19-Maßnahmen im Rathaus</h2>
                            <p>In allen geschlossenen Räumen, damit auch in Amtsgebäuden wie dem Rathaus, ist das Tragen eines Mund-Nasen-Schutzes verpflichtend. Vereinbaren Sie bitte für Ihre Amtsgeschäfte jedenfalls vorab einen Termin. Ausgenommen von der Terminvereinbarung sind das Gesundheitsamt, Bürgerservice und die Aufenthaltsangelegenheiten sowie vormittags bis 12.00 Uhr das Meldewesen.</p>
                        </div>
                    </div>
                </div>
            </div>
        </b-modal>

        <b-modal v-model="isModalTwo" :width="850" :animation="animation" ref="modal" @close="onClose">
            <div class="popup-main-box">
                <div class="popup-card">
                    <b-button type="modal-close" @click="cancel">Schließen</b-button>
                    <div class="popup-info">
                        <div class="popup-data">
                            <h2>COVID-19-Maßnahmen im Rathaus</h2>
                            <p>In allen geschlossenen Räumen, damit auch in Amtsgebäuden wie dem Rathaus, ist das Tragen eines Mund-Nasen-Schutzes verpflichtend. Vereinbaren Sie bitte für Ihre Amtsgeschäfte jedenfalls vorab einen Termin. Ausgenommen von der Terminvereinbarung sind das Gesundheitsamt, Bürgerservice und die Aufenthaltsangelegenheiten sowie vormittags bis 12.00 Uhr das Meldewesen.</p>
                            <p>Das Rathaus ist nur noch über die Eingänge Fallmerayerstraße Nord sowie Bürgerservice erreichbar. Bitte nutzen Sie nach Möglichkeit unsere digitalen Services. Formulare finden Sie unter: <a href="#" class="underline red-500"><span class="line">www.innsbruck.gv.at/formulare</span></a></p>
                            <b-button type="is-primary" icon-right="tip-right">Mehr Informationen dazu</b-button>
                        </div>
                    </div>
                </div>
            </div>
        </b-modal>

        <b-modal v-model="isModalThree" :width="850" :animation="animation" ref="modal" @close="onClose">
            <div class="popup-main-box">
                <div class="popup-card">
                    <b-button type="modal-close white" @click="cancel">Schließen</b-button>
                    <div class="popup-img">
                        <b-image
                            src="popup-img"
                            :srcset-sizes="[400, 800, 1600]"
                            :srcset-formatter="this.formatSrcset"
                            webp-fallback=".png"
                            alt="Popup Img"
                            ratio="850by375"
                        ></b-image>
                    </div>
                    <div class="popup-info">
                        <div class="popup-data">
                            <h2>COVID-19-Maßnahmen im Rathaus</h2>
                            <p>In allen geschlossenen Räumen, damit auch in Amtsgebäuden wie dem Rathaus, ist das Tragen eines Mund-Nasen-Schutzes verpflichtend. Vereinbaren Sie bitte für Ihre Amtsgeschäfte jedenfalls vorab einen Termin. Ausgenommen von der Terminvereinbarung sind das Gesundheitsamt, Bürgerservice und die Aufenthaltsangelegenheiten sowie vormittags bis 12.00 Uhr das Meldewesen.</p>
                            <p>Das Rathaus ist nur noch über die Eingänge Fallmerayerstraße Nord sowie Bürgerservice erreichbar. Bitte nutzen Sie nach Möglichkeit unsere digitalen Services. Formulare finden Sie unter: <a href="#" class="underline red-500"><span class="line">www.innsbruck.gv.at/formulare</span></a></p>
                            <b-button type="is-primary" icon-right="tip-right">Mehr Informationen dazu</b-button>
                        </div>
                    </div>
                </div>
            </div>
        </b-modal>

    </div>
</template>

<script>
    import Timelimit from '~/components/general/Timelimit';
    import Banner from '~/components/home/Banner';
    import HeroSlider from '~/components/home/HeroSlider'
    import Quicklinks from '~/components/home/Quicklinks';
    import News from '~/components/home/News';
    export default {
        name: "Homepage",
        components: {
            Timelimit,
            Banner,
            HeroSlider,
            Quicklinks,
            News
        },
        head(){
            return {
                title: "Startseite - Stadt Innsbruck"
            }
        },
        data () {
            return {
                isModalOne: false,
                isModalTwo: false,
                isModalThree: false,
                thissearch: true,
                animation: 'zoom-in',
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
            this.changeSearchState(false);
            window.addEventListener('DOMContentLoaded', (event) => {
            });
        },
        destroyed () {
            this.changeSearchState(true);
        },
        methods: {
            changeSearchState (flag) {
                this.$store.commit('SearchCheck', flag);
            },
            cancel() {
                this.$refs.modal.close("button");
            },
            onClose() {
                this.$refs.modal = false;
            },
            imgName(src, size){
                return require(`@/assets/images/${src}-${size}.webp`)
            },
            formatSrcset(src, size) {
                return this.imgName(src, size)
            }
        }
    }
</script>


