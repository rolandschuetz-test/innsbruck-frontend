<template>
    <div>
        <PageBanner>
            <Breadcrumbs :crumbs="crumbs" />
            <h2>Kontakt</h2>
        </PageBanner>
        <div class="page-content">

            <div class="container">
                <div class="content-page-wrap">
                    <div class="page-content-row">
                        <Contact2 />
                        <p class="small color-grey-500">Hinweis im Sinne des § 13 AVG für elektronische Anbringen:</p>
                        <p class="small color-grey-500">Die Empfangsgeräte der bei der Stadt Innsbruck eingerichteten Behörden und Dienststellen für elektronische Anbringen in Form von E-Mail werden außerhalb der Amtsstunden nicht betreut. Ihr Anbringen gilt erst mit Wiederbeginn der Amtsstunden als eingebracht und eingelangt, auch wenn es bereits vorher in den elektronischen Verfügungsbereich der Stadt Innsbruck gelangt ist.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import PageBanner from '~/components/general/PageBanner';
    import Breadcrumbs from '~/components/general/Breadcrumbs';
    import Contact2 from '~/components/general/Contact2';
    export default {
        name: "contact",
        head(){
            return {
                title: "Kontakt - Stadt Innsbruck"
            }
        },
        components: {
            PageBanner,
            Breadcrumbs,
            Contact2
        },
        data() {
            return {
                crumbs: [
                    {
                        name: "Home",
                        url: "/"
                    },
                    {
                        name: "Kontakt",
                        url: "/"
                    }
                ],
                
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