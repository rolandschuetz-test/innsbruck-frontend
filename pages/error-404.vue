<template>
    <div>
        <PageBanner>
            <h2>404 - Seite nicht gefunden</h2>
            <p>Die gesuchte Seite ist leider nicht verfügbar. Bitte verwenden Sie unsere Suchfunktion oder gehen Sie zur <nuxt-link class="underline" to="/"><span class="line">Startseite</span></nuxt-link>.</p>
            <PageSearch value="" placeholderText="Seite durchsuchen..." />
        </PageBanner>
    </div>
</template>

<script>
    import PageBanner from '~/components/general/PageBanner';
    import PageSearch from '~/components/general/PageSearch';
    export default {
        name: "error-404",
        components: {
            PageBanner,
            PageSearch
        },
        head(){
            return {
                title: "404 - Seite nicht gefunden - Stadt Innsbruck"
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
            }
        }
    }
</script>