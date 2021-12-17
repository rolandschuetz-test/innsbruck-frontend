<template>
    <div>
        <PageBanner>
            <h2>Sitemap</h2>
            <p>Introtext. Euismod potenti lacus pulvinar scelerisque erat nunc lobortis, lectus rutrum ridiculus primis urna venenatis morbi, maecenas lacinia.</p>
        </PageBanner>
        <div class="page-content">
            <div class="container">
                <div class="page-content-row">
                    <ul>
                        <li v-for="item in items" :key="item.title">
                            <nuxt-link class="underline red-500" :to="item.link"><span class="line">{{ item.title }}</span></nuxt-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import PageBanner from '~/components/general/PageBanner';
    export default {
        name: "sitemap",
        components: {
            PageBanner,
        },
        head(){
            return {
                title: "Sitemap - Stadt Innsbruck"
            }
        },
        data() {
            return  {
                items: [
                    { link: "/", title: 'Homepage' },
                    { link: "/search-results", title: 'Search Results' },
                    { link: "/search-results-fuzzy", title: 'Search Results Fuzzy' },
                    { link: "/search-no-results", title: 'Search No Results' },
                    { link: "/overviewpage-generic", title: 'Overviewpage Generic' },
                    { link: "/overviewpage-example", title: 'Overviewpage Example' },
                    { link: "/overviewpage-example-2", title: 'Overviewpage Example 2' },
                    { link: "/content-page-generic", title: 'content-page-generic' },
                    { link: "/content-page-example", title: 'content-page-example' },
                    { link: "/contact", title: 'Contact Page' },
                    { link: "/departments", title: 'Departments' },
                    { link: "/department-single", title: 'Department Single' },
                    { link: "/map-embed", title: 'Map Embed' },
                    { link: "/documents", title: 'Documents Page' },
                    { link: "/error-404", title: 'Error-404' },
                    { link: "/careers", title: 'Careers' },
                    { link: "/popups", title: 'Popups' },
                    { link: "/generic-page-blocks", title: 'Generic Page Blocks' },
                    { link: "/heroslider", title: 'Hero Slider' },
                ]
            }
        }
    }
</script>