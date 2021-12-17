<template>
    <div class="page-banner map-embed-page">
        <div class="map-box">
            <iframe src="https://city-map.innsbruck.gv.at/stadtplan/synserver?project=Innsbruck&client=flex" title="Map - Stadt Innsbruck"></iframe>
        </div>
    </div>
</template>

<script>
    export default {
        name: "map-embed",
        head(){
            return {
                title: "Map - Stadt Innsbruck",
            }
        },
        mounted() {
            document.body.classList.add('map-page');
        },
        destroyed () {
            document.body.classList.remove('map-page');
        }
    }
</script>