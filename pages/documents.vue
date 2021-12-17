<template>
    <div>
        <PageBanner>
            <Breadcrumbs :crumbs="crumbs" />
            <h2>Formulare</h2>
        </PageBanner>
        <div class="page-content">
            <div class="container">
                <div class="content-page-wrap">
                    <div class="area-search-block">
                        <AreaSearch value="" placeholderText="Formulare suchen..." />
                    </div>
                    <div class="block">
                        <div class="download-block">
                            <div class="download-box">
                                <h3>Meist gesuchte Formulare</h3>
                                <DownloadList :downloadLists="downloadLists" />
                            </div>
                        </div>
                    </div>
                    <div class="block">
                        <div class="filter-block">
                            <div class="filter-box">
                                <h3>Kategorien</h3>
                                <FilterLists :filterLists="filterLists" />
                            </div>
                        </div>
                        <div class="download-block">
                            <div class="download-box">
                                <DownloadList :downloadLists="downloadLists2" categoryFilter="category-filter" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import PageBanner from '~/components/general/PageBanner';
    import Breadcrumbs from '~/components/general/Breadcrumbs';
    import AreaSearch from '~/components/general/AreaSearch';
    import FilterLists from '~/components/content-generic-page/FilterLists';
    import LinkList from '~/components/content-generic-page/LinkList';
    import DownloadList from '~/components/content-generic-page/DownloadList';
    export default {
        name: "documents",
        components: {
            PageBanner,
            Breadcrumbs,
            LinkList,
            FilterLists,
            AreaSearch,
            DownloadList
        },
        head(){
            return {
                title: "Formulare - Stadt Innsbruck"
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
                        name: "Digitales Rathaus",
                        url: "/"
                    },
                    {
                        name: "Formulare",
                        url: "/"
                    }
                ],
                downloadLists: [
                    {
                        title: "Meldezettel (PDF)",
                        link: "#",
                        icon: "icon-file-pdf"
                    },
                    {
                        title: "Ansuchen Mietzinsbeihilfe (PDF)",
                        link: "#",
                        icon: "icon-file-pdf"
                    },
                    {
                        title: "Bauansuchen (PDF)",
                        link: "#",
                        icon: "icon-file-pdf"
                    },
                    {
                        title: "Bauansuchen (PDF)",
                        link: "https",
                        class: "line",
                        parentclass: "underline"
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
                        title: "Bauen und Wohnen",
                        category: "bauen-und-wohnen",
                        link: "#"
                    },
                    {
                        title: "Dokumente und Genehmigungen",
                        category: "dokumente-und-genehmigungen",
                        link: "#"
                    },
                    {
                        title: "Familie und Soziales",
                        category: "familie-und-soziales",
                        link: "#"
                    },
                    {
                        title: "Freizeit",
                        category: "freizeit",
                        link: "#"
                    },
                    {
                        title: "Gesundheit und Sicherheit",
                        category: "fesundheit-und-sicherheit",
                        link: "#"
                    },
                    {
                        title: "Wirtschaft und Gewerbe",
                        category: "wirtschaft-und-gewerbe",
                        link: "#"
                    }  
                ],
                downloadLists2: [
                    {
                        title: "Meldezettel (PDF)",
                        icon: "icon-file-pdf",
                        link: '#',
                        category: "bauen-und-wohnen",
                    },
                    {
                        title: "Ansuchen Mietzinsbeihilfe (PDF)",
                        icon: "icon-file-pdf",
                        link: '#',
                        category: "dokumente-und-genehmigungen",
                    },
                    {
                        title: "Bauansuchen (PDF)",
                        icon: "icon-file-pdf",
                        link: '#',
                        category: "familie-und-soziales",
                    },
                    {
                        title: "Hundeanmeldung (online)",
                        link: "https",
                        class: "line",
                        parentclass: "underline",
                        category: "freizeit",
                    },
                    {
                        title: "Meldezettel (PDF)",
                        icon: "icon-file-pdf",
                        link: '#',
                        category: "dokumente-und-genehmigungen",
                    },
                    {
                        title: "Ansuchen Mietzinsbeihilfe (PDF)",
                        icon: "icon-file-pdf",
                        link: '#',
                        category: "fesundheit-und-sicherheit",
                    },
                    {
                        title: "Bauansuchen (PDF)",
                        icon: "icon-file-pdf",
                        link: '#',
                        category: "wirtschaft-und-gewerbe",
                    },
                    {
                        title: "Hundeanmeldung (online)",
                        link: "https",
                        class: "line",
                        parentclass: "underline",
                        category: "bauen-und-wohnen",
                    },
                ]
                
            }
        }
    }
</script>