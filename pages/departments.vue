<template>
    <div>
        <PageBanner>
            <Breadcrumbs :crumbs="crumbs" />
            <h2>Dienststellen</h2>
            <FilterMenu/>
        </PageBanner>
       
        <div class="page-content">
            <div class="container">
                <div class="content-page-wrap">
                    <div class="department-section">
                        <div class="area-search-block">
                            <AreaSearch value="" placeholderText="Dienststellen suchen..." />
                            <div class="filter-block">
                                <div class="filter-box">
                                    <FilterLists :filterLists="filterLists" />
                                </div>
                            </div>
                        </div>

                        <div class="area-filter-block">
                            <div id="a" class="filter-data">
                                <div class="link-block">
                                    <div class="link-box">
                                        <h3>A</h3>
                                        <FilterLinkList :fillterLinkLists="filterLinkLists" categoryFilter="category-filter" />
                                    </div>
                                </div>
                            </div>
                            <div id="b" class="filter-data">
                                <div class="link-block">
                                    <div class="link-box">
                                        <h3>B</h3>
                                        <FilterLinkList :fillterLinkLists="filterLinkLists2" categoryFilter="category-filter" />
                                    </div>
                                </div>
                            </div>
                            <div id="c" class="filter-data">
                                <div class="link-block">
                                    <div class="link-box">
                                        <h3>C</h3>
                                        <FilterLinkList :fillterLinkLists="filterLinkLists3" categoryFilter="category-filter" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import _ from 'lodash';
    import PageBanner from '~/components/general/PageBanner';
    import Breadcrumbs from '~/components/general/Breadcrumbs';
    import FilterMenu from '~/components/general/FilterMenu';
    import FilterLinkList from '~/components/content-generic-page/FilterLinkList';
    import AreaSearch from '~/components/general/AreaSearch';
    import FilterLists from '~/components/content-generic-page/FilterLists';
    export default {
        name: "departments",
        components: {
            PageBanner,
            AreaSearch,
            Breadcrumbs,
            FilterMenu,
            FilterLinkList,
            FilterLists
        },
        head(){
            return {
                title: "Dienststellen - Stadt Innsbruck"
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
                    }
                ],
                filterLinkLists: [
                    {
                        title: "Allgemeine Bezirks- und Gemeindeverwaltung ",
                        category: "referate",
                        categoryText: "- Referat",
                        link: "#"
                    },
                    {
                        title: "Allgemeine Sicherheit ",
                        category: "referate",
                        categoryText: "- Referat",
                        link: "#"
                    },
                    {
                        title: "Aufenthaltsangelegenheiten ",
                        category: "amter",
                        categoryText: "– Amt",
                        link: "#"
                    }
                ],
                filterLinkLists2: [
                    {
                        title: "Bauberatung und Gutachten ",
                        category: "amter",
                        categoryText: "– Amt",
                        link: "#"
                    },
                    {
                        title: "Baurecht ",
                        category: "abteilungen",
                        categoryText: "– Abteilung",
                        link: "#"
                    },
                    {
                        title: "Besoldung ",
                        category: "referate",
                        categoryText: "– Referat",
                        link: "#"
                    },
                    {
                        title: "Büro des Bürgermeisters ",
                        category: "allgemeines",
                        categoryText: "– Allgemeines",
                        link: "#"
                    }
                ],
                filterLinkLists3: [
                    {
                        title: "Ca...",
                        category: "",
                        link: "#"
                    },
                    {
                        title: "Ce...",
                        category: "",
                        link: "#"
                    },
                    {
                        title: "Ci...",
                        category: "",
                        link: "#"
                    }
                ],
                filterLists: [
                    {
                        title: "Alle",
                        link: "#",
                        category: "all",
                        class: "active"
                    },
                    {
                        title: "Abteilungen",
                        category: "abteilungen",
                        link: "#"
                    },
                    {
                        title: "Ämter",
                        category: "amter",
                        link: "#"
                    },
                    {
                        title: "Referate",
                        category: "referate",
                        link: "#"
                    },
                    {
                        title: "Allgemeines",
                        category: "allgemeines",
                        link: "#"
                    }  
                ]
            }
        },
        methods: {
            
        },
        mounted() {
            $(document).ready(function($) {
                // Scroll to the desired section on click
                // Make sure to add the `data-scroll` attribute to your `<a>` tag.
                // Example: 
                // `<a data-scroll href="#my-section">My Section</a>` will scroll to an element with the id of 'my-section'.
                function scrollToSection(event) {
                    event.preventDefault();
                    var $section = $($(this).attr('href')); 
                    $('html, body').animate({
                    scrollTop: $section.offset().top-150
                    }, 500);
                }
                $('.filter-menu-list li a').on('click', scrollToSection);
            }(jQuery));
        },

    }
    
</script>