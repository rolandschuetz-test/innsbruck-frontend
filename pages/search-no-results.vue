<template>
    <div>
        <PageBanner>
            <h2>Suchergebnisse</h2>
            <PageSearch value="Asdf" placeholderText="Seite durchsuchen..." />
        </PageBanner>
        <div class="page-content">
            <div class="container">
                <div class="page-content-row">
                    <ResultFound title="0 Suchergebnisse für “Asdf”" />
                    <NoResults />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import PageBanner from '~/components/general/PageBanner';
    import PageSearch from '~/components/general/PageSearch';
    import ResultFound from '~/components/search/ResultFound';
    import NoResults from '~/components/search/NoResults';
    export default {
        name: "search-result",
        components: {
            PageBanner,
            PageSearch,
            ResultFound,
            NoResults
        },
        head(){
            return {
                title: "Suchergebnisse - Stadt Innsbruck"
            }
        },
        mounted (){
            this.changeSearchState(false);
            window.addEventListener('DOMContentLoaded', (event) => {
                this.changeSearchState();
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