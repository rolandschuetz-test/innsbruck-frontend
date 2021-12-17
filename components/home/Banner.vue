<template>
    <div class="banner-box">
        <h2>Die digitale Servicestelle der Stadt Innsbruck</h2>
        <Search></Search>
        <div class="search-terms">
            <span>Beliebte Suchbegriffe:</span>
            <ul class="search-terms-list">
                <li><a href="#" class="underline"><span class="line">Parken</span></a>, </li>
                <li><a href="#" class="underline"><span class="line">Baustellen</span></a>, </li>
                <li><a href="#" class="underline"><span class="line">Christkindlmarkt</span></a></li>
            </ul>
        </div>
    </div>
</template>

<script>
    import Search from '~/components/general/Search'
    export default {
        name: "Banner",
        components: {
            Search
        }
    }
</script>