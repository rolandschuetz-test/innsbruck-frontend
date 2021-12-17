<template>
    <div>
        <PageBanner>
            <Breadcrumbs :crumbs="crumbs" />
            <h2>Aufenthaltsangelegenheiten</h2>
            <p>Zuständig für rhoncus senectus dis sed amet fames habitasse ornare nullam, conubia torquent tristique elementum luctus erat facilisi risus primis.</p>
        </PageBanner>
        <div class="page-content page">
            <div class="container">
                <div class="contact-section contact-page">
                    <div class="contact-row">
                        <div class="columns is-multiline">
                            <div class="column is-one-first-desktop is-full-tablet">
                                <div class="contact-box">
                                    <h3>Kontakt</h3>
                                    <ul class="contact-info">
                                        <li>
                                            <a href="#" class="underline">
                                                <em class="icon-location">Icon location</em>
                                                <span class="line">Maria-Theresien-Straße 18 <br />A-6020 Innsbruck</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="tel:+4351253601032" class="underline">
                                                <em class="icon-phone">Icon phone</em>
                                                <span class="line">+43 512 5360 1032</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="mailto:post.aufenthaltsangelegenheiten@innsbruck.gv.at" class="underline">
                                                <em class="icon-mail">Icon mail</em>
                                                <span class="line">post.aufenthaltsangelegenheiten@innsbruck.gv.at</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="column is-one-first-desktop is-full-tablet">
                                <div class="contact-box">
                                    <h3>Amtszeiten</h3>
                                    <ul class="contact-info-list">
                                        <li><span class="contact-title">Montag - Freitag:</span>7.30-12.00 Uhr und nach Terminvereinbarung</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="column is-one-first-desktop is-full-tablet">
                                <div class="contact-box">
                                    <h3>AnprechpartnerInnen</h3>
                                    <ul class="contact-info-list contact-info">
                                        <li><span class="contact-title">Ing. Hans Erlacher</span>
                                            <a href="tel:+4351253601032" class="underline">
                                                <em class="icon-phone">Icon phone</em>
                                                <span class="line">+43 512 5360 1032</span>
                                            </a>
                                        </li>
                                        <li><span class="contact-title">Arnulf Maurer</span>
                                            <a href="tel:+4351253601028" class="underline">
                                                <em class="icon-phone">Icon phone</em>
                                                <span class="line">+43 512 5360 1028</span>
                                            </a>
                                        </li>
                                        <li><span class="contact-title">Gerhard Pock</span>
                                            <a href="tel:+4351253601036" class="underline">
                                                <em class="icon-phone">Icon phone</em>
                                                <span class="line">+4351253601036</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <LastUpdate lastUpdate="Zuletzt aktualisiert am 21.02.2020" />
        </div>
    </div>
</template>

<script>
    import PageBanner from '~/components/general/PageBanner';
    import Breadcrumbs from '~/components/general/Breadcrumbs';
    import Blockquote from '~/components/content-generic-page/Blockquote';
    import DownloadList from '~/components/content-generic-page/DownloadList';
    import Contact from '~/components/general/Contact2';
    import LastUpdate from '~/components/content-generic-page/LastUpdate';
    export default {
        name: "department-single",
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
                title: "Aufenthaltsangelegenheiten - Stadt Innsbruck"
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
                        name: "Dienststellen",
                        url: "/"
                    },
                    {
                        name: "Aufenthaltsangelegenheiten",
                        url: "/"
                    }
                ],
                downloadLists: [
                    {
                        title: "Adressenliste (PDF)",
                        icon: "icon-file-pdf"
                    },
                    {
                        title: "Allgemeine Förderrichtlinien (PDF)",
                        icon: "icon-file-pdf"
                    },
                    {
                        title: "Förderansuchen (PDF)",
                        icon: "icon-file-pdf"
                    }
                ]
            }
        }
    }
</script>