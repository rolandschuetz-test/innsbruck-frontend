<template>
    <div>
        <PageBanner>
            <h2>Suchergebnisse</h2>
            <PageSearch value="Förderungen" placeholderText="Seite durchsuchen..." />
        </PageBanner>
        <div class="page-content">
            <div class="container">
                <div class="page-content-row">
                    <ResultFound title="22 Suchergebnisse für “Förderungen”" />
                    <SearchList />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import PageBanner from '~/components/general/PageBanner';
    import PageSearch from '~/components/general/PageSearch';
    import ResultFound from '~/components/search/ResultFound';
    import SearchList from '~/components/search/SearchList';
    export default {
        name: "search-result",
        components: {
            PageBanner,
            PageSearch,
            ResultFound,
            SearchList
        },
        head(){
            return {
                title: "Suchergebnisse - Stadt Innsbruck"
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