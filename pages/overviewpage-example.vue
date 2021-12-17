<template>
    <div>
        <PageBanner>
            <Breadcrumbs :crumbs="crumbs" />
            <h2>Bauen und Wohnen</h2>
            <p>Sie möchten um- oder neu bauen? Sie haben bereits ein konkretes Bauprojekt oder wollen sich erkundigen, welche planungsrechtlichen Rahmenbedingungen gelten?</p>
        </PageBanner>
        <div class="page-content default-space">
            <div class="quicklinks-block">
                <div class="container">
                    <div class="quicklinks-row">
                        <Quicklinks2 :quicklinkLists="quicklinkLists" />
                    </div>
                </div>
            </div>
            <Contact>
                <h2>Kontakt</h2>
                <div class="contact-row">
                    <div class="contact-block">
                        <div class="columns is-multiline">
                            <div class="column is-one-third-desktop is-half-tablet">
                                <div class="contact-box">
                                    <h3>Landeshauptstadt Innsbruck</h3>
                                    <ul class="contact-info">
                                        <li>
                                            <a href="#" class="underline">
                                                <em class="icon-location">Icon location</em>
                                                <span class="line">Maria-Theresien-Straße 18 <br />A-6020 Innsbruck</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="tel:4351253600" class="underline">
                                                <em class="icon-phone">Icon phone</em>
                                                <span class="line">+43 512 5360 0</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="mailto:kontakt@innsbruck.gv.at" class="underline">
                                                <em class="icon-mail">Icon mail</em>
                                                <span class="line">kontakt@innsbruck.gv.at</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="column is-one-third-desktop is-half-tablet">
                                <div class="contact-box">
                                    <h3>Amtszeiten</h3>
                                    <ul class="contact-info-list">
                                        <li><span class="contact-title">Montag - Donnerstag:</span>8.00 - 12.00 Uhr und 13.00 - 16.00 Uhr</li>
                                        <li><span class="contact-title">Freitag:</span>8.00 - 12.00 Uhr (nachmittags geschlossen)</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Contact>
        </div>
    </div>
</template>

<script>
    import PageBanner from '~/components/general/PageBanner';
    import Breadcrumbs from '~/components/general/Breadcrumbs';
    import Quicklinks2 from '~/components/home/Quicklinks2';
    import Contact from '~/components/general/Contact';
    export default {
        name: "overviewpage-generic",
        components: {
            PageBanner,
            Breadcrumbs,
            Quicklinks2,
            Contact
        },
        head(){
            return {
                title: "Bauen und Wohnen - Stadt Innsbruck"
            }
        },
        data() {
            return {
                crumbs: [
                    {
                        name: "Home",
                        url: "/"
                    },
                    {
                        name: "Bauen und Wohnen",
                        url: "/"
                    }
                ],
                quicklinkLists: [
                    {
                        link: '#',
                        title: 'Bauen, Planen und Einreichen',
                        disc: 'Vom Plan bis zum Projekt gilt es Einiges zu beachten. Hier finden sich Informationen zu den aktuellen Rahmenbedingungen.'
                    },
                    {
                        link: '#',
                        title: 'Förderungen',
                        disc: 'Die Stadt Innsbruck bietet verschiedene Förderungen im Bereich Bauen und Wohnen. Detaillierte Infos finden sich hier.'
                    },
                    {
                        link: 'https',
                        title: 'Hilfe bei Fragen und Problemen',
                        disc: 'Die ExpertInnen der Stadt Innsbruck stehen zur Verfügung!'
                    },
                    {
                        link: '#',
                        title: 'Städtische Miet- und Eigentumswohnungen',
                        disc: 'Informationen zu Richtlinien und Vergabe von städtischen Wohnungen sind hier zu finden.'
                    }
                ]
            }
        },
        mounted (){
            this.changeFooterState(false);
            window.addEventListener('DOMContentLoaded', (event) => {
            });
        },
        destroyed () {
            this.changeFooterState(true);
        },
        methods: {
            changeFooterState (flag) {
                this.$store.commit('FooterContactCheck', flag);
            }
        }
    }
</script>