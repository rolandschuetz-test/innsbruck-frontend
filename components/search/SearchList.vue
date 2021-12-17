<template>
    <div>
        <ul class="search-list">
            <li v-for="(item, index) in items" :key="index">
                <a :href="item.link">
                    <h2><span class="line">{{ item.title }}</span></h2>
                    <p>{{ item.message }}</p>
                </a>
            </li>
        </ul>
        <div class="search-list-btn">
            <b-button type="is-secondary" icon-right="tip-down">Mehr Ergebnisse anzeigen</b-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SearchList",
        data() {
            return  {
                items: [
                    {
                        link: "#",
                        title: 'Förderungen und Subventionen',
                        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas congue vitae tincidunt et mauris amet. Hendrerit consequat neque semper sed et. Non sed."
                    },
                    {
                        link: "https",
                        title: 'Förderungen im Ausland',
                        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla quisque laoreet blandit dolor quam lacus. Nam nunc sit etiam dolor. Fusce curabitur imperdiet."
                    },
                    {
                        link: "#",
                        title: 'Förderungen',
                        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas congue vitae"
                    },

                    {
                        link: "http",
                        title: 'Kultursubventionen',
                        message: "Lobortis non nulla nisi, praesent mus in. Penatibus id sed dictumst ipsum amet."
                    },
                    {
                        link: "#",
                        title: 'Förderungen und Subventionen',
                        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In blandit mi augue ornare nec, nibh gravida vitae. Libero, facilisis congue vitae, sed enim tristique. Sem."
                    },
                    {
                        link: "http",
                        title: 'Förderungen im Ausland',
                        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pellentesque odio lobortis non nulla nisi, praesent mus in. Penatibus id sed dictumst ipsum amet."
                    },
                    {
                        link: "#",
                        title: 'Förderungen',
                        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu a nibh quam arcu. Gravida egestas leo quis euismod amet aenean proin. Hac scelerisque volutpat."
                    },
                    {
                        link: "http",
                        title: 'Kultursubventionen',
                        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas congue vitae"
                    },
                    {
                        link: "#",
                        title: 'Förderungen und Subventionen',
                        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac et nisl platea praesent tristique vitae. Augue vulputate nunc, nibh eleifend in turpis nulla nibh. Odio."
                    },
                    {
                        link: "http",
                        title: 'Förderungen im Ausland',
                        message: "Lobortis non nulla nisi, praesent mus in. Penatibus id sed dictumst ipsum amet."
                    }
                ]
            }
        }
    }
</script>