<template>
    <div>
        <PageBanner>
            <Breadcrumbs :crumbs="crumbs" />
            <h2>Lärmschutz Flughafen</h2>
            <p>Hier finden Sie alle Informationen zur Lärmschutz-Förderung der betroffenen Gebäude in der Einflugschneise des Innsbrucker Flughafens.</p>
            <div class="anchorlinks-box">
                <span>Gehe zu:</span>
                <ul class="anchorlinks">
                    <li><a href="#" class="underline"><span class="line">Downloads</span></a></li>
                    <li><a href="#" class="underline"><span class="line">Kontakt</span></a></li>
                </ul>
            </div>
        </PageBanner>
        <div class="content-page">
            <div class="container">
                <div class="content-page-wrap">
                    <h2>Förderung für Fenster bzw. Schalldämmlüfter</h2>
                    <p>Die freiwillige Förderung durch die Tiroler Flughafen Betriebsgesellschaft mbH richtet sich an Eigentümer und Bestandnehmer, an deren Objekten bestimmte Immissions-Grenzwerte durch Fluglärm überschritten werden.</p>
                    
                    <Blockquote>
                        Mit 01.01.2019 wurden die Immissions-Grenzwerte um 5dB (Lden > 55 dB) reduziert, dadurch sind wesentlich mehr Wohnungen im förderbaren Bereich der Einflugschneise. Die <a href="#" class="underline red-500"><span class="line">Adressenliste</span></a> gibt darüber Auskunft.
                    </Blockquote>
                    <h3>Förderfähig</h3>
                    <p>Ob Sie eine Förderung erhalten, hängt ab:</p>
                    <ul class="unordered-list">
                        <li>von dem Gebäude selbst (Alter und Standort),</li>
                        <li>von den verwendeten Materialien (Fenstereigenschaften,…) und</li>
                        <li>in welchen Räumen die Fenster getauscht werden.</li>
                    </ul>
                    <p>Weitere Bedingungen erfahren Sie in den <a href="#" class="underline red-500"><span class="line">allgemeinen Förderrichtlinien</span></a>.</p>
                    <p>Das ausgefüllte <a href="#" class="underline red-500"><span class="line">Förderansuchen</span></a> übermitteln Sie dem Referat Wohnbauförderung.</p>

                    <div class="download-block">
                        <div class="download-box">
                            <h3>Downloads</h3>
                            <DownloadList :downloadLists="downloadLists" />
                        </div>
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
                                    <h3>Wohnbau-Förderungen, Schlichtungsstelle II</h3>
                                    <ul class="contact-info">
                                        <li>
                                            <a href="#" class="underline">
                                                <em class="icon-location">Icon location</em>
                                                <span class="line">Maria-Theresien-Straße 18 (2. Stock) <br />A-6020 Innsbruck</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="tel:4351253600" class="underline">
                                                <em class="icon-phone">Icon phone</em>
                                                <span class="line">+43 512 5360 0</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="mailto:post.wohnungsservice@innsbruck.gv.at" class="underline">
                                                <em class="icon-mail">Icon mail</em>
                                                <span class="line">post.wohnungsservice@innsbruck.gv.at</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="column is-one-third-desktop is-half-tablet">
                                <div class="contact-box">
                                    <h3>Amtszeiten</h3>
                                    <ul class="contact-info-list">
                                        <li><span class="contact-title">Wohnbau-Förderungen</span>Mo-Fr 8.00 - 12.00 Uhr</li>
                                        <li><span class="contact-title">Schlichtungsstelle II</span>Mo &amp; Mi 8.00 - 12.00 Uhr <br />Oder nach telefonischer Vereinbarung</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="contact-info-block">
                            <h3>AnsprechpartnerInnen</h3>
                            <div class="columns is-multiline">
                                <div class="column is-one-third-desktop is-half-tablet">
                                    <div class="contact-box">
                                        <ul class="contact-info">
                                            <li>
                                                <span class="contact-title">Ing. Hans Erlacher</span>
                                                <a href="tel:4351253602180" class="underline">
                                                    <em class="icon-phone">Icon phone</em>
                                                    <span class="line">+43 512 5360 2180</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="column is-one-third-desktop is-half-tablet">
                                    <div class="contact-box">
                                        <ul class="contact-info">
                                            <li>
                                                <span class="contact-title">Ing. Andrea Heis</span>
                                                <a href="tel:4351253602182" class="underline">
                                                    <em class="icon-phone">Icon phone</em>
                                                    <span class="line">+43 512 5360 2182</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="column is-one-third-desktop is-half-tablet">
                                    <div class="contact-box">
                                        <ul class="contact-info">
                                            <li>
                                                <span class="contact-title">Ing. Markus Kostner</span>
                                                <a href="tel:4351253602147" class="underline">
                                                    <em class="icon-phone">Icon phone</em>
                                                    <span class="line">+43 512 5360 2147</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="column is-one-third-desktop is-half-tablet">
                                    <div class="contact-box">
                                        <ul class="contact-info">
                                            <li>
                                                <span class="contact-title">Ing. Martin Larcher</span>
                                                <a href="tel:4351253602184" class="underline">
                                                    <em class="icon-phone">Icon phone</em>
                                                    <span class="line">+43 512 5360 2184</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Contact>
            <LastUpdate lastUpdate="Zuletzt aktualisiert am 21.02.2020" />
        </div>
    </div>
</template>

<script>
    import PageBanner from '~/components/general/PageBanner';
    import Breadcrumbs from '~/components/general/Breadcrumbs';
    import Blockquote from '~/components/content-generic-page/Blockquote';
    import DownloadList from '~/components/content-generic-page/DownloadList';
    import Contact from '~/components/general/Contact';
    import LastUpdate from '~/components/content-generic-page/LastUpdate';
    export default {
        name: "content-page-generic",
        components: {
            PageBanner,
            Breadcrumbs,
            Blockquote,
            DownloadList,
            Contact,
            LastUpdate
        },
        head(){
            return {
                title: "Lärmschutz Flughafen - Stadt Innsbruck"
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
                    },
                    {
                        name: "Förderungen",
                        url: "/"
                    },
                    {
                        name: "Lärmschutz Flughafen",
                        url: "/"
                    }
                ],
                downloadLists: [
                    {
                        title: "Adressenliste (PDF)",
                        icon: "icon-file-pdf",
                        link: "#",
                    },
                    {
                        title: "Allgemeine Förderrichtlinien (PDF)",
                        icon: "icon-file-pdf",
                        link: "#",
                    },
                    {
                        title: "Förderansuchen (PDF)",
                        icon: "icon-file-pdf",
                        link: "#",
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