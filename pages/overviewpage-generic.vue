<template>
    <div>
        <PageBanner>
            <Breadcrumbs :crumbs="crumbs" />
            <h2>Pagetitle</h2>
            <p>Introtext. Euismod potenti lacus pulvinar scelerisque erat nunc lobortis, lectus rutrum ridiculus primis urna venenatis morbi, maecenas lacinia.</p>
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
                title: "Overviewpage Generic - Stadt Innsbruck"
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
                        name: "Breadcrumb 1",
                        url: "/"
                    },
                    {
                        name: "Pagetitle",
                        url: "/"
                    }
                ],
                quicklinkLists: [
                    {
                        link: '#',
                        title: 'Pagetitle 1',
                        disc: 'Page description - Limited to 150 characters. Hac quisque vulputate id sem ante fusce condimentum habitasse mattis.'
                    },
                    {
                        link: '#',
                        title: 'Pagetitle 2',
                        disc: 'Page description - Limited to 150 characters. Hac quisque vulputate id sem ante fusce condimentum habitasse mattis.'
                    },
                    {
                        link: '#',
                        title: 'Pagetitle 3',
                        disc: 'Page description - Limited to 150 characters. Hac quisque vulputate id sem ante fusce condimentum habitasse mattis.'
                    },
                    {
                        link: '#',
                        title: 'Pagetitle 4',
                        disc: 'Page description - Limited to 150 characters. Hac quisque vulputate id sem ante fusce condimentum habitasse mattis.'
                    },

                    {
                        link: 'https',
                        title: 'Pagetitle 5',
                        disc: 'Page description - Limited to 150 characters. Hac quisque vulputate id sem ante fusce condimentum habitasse mattis.'
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