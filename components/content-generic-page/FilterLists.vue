<template>
    <div class="filter-list-box">
        <ul class="filter-list">
            <li v-for="(listitem, index) in filterLists" :key="index">
                <a v-on:click="category" :href="listitem.link" :data-category="listitem.category" :class="'filter-tag '+listitem.class">{{ listitem.title }}</a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "filter-list",
        props: {
            filterLists: Array,
        },
        methods: {
            category: function (event) {

                let selectedFilter = event.target.getAttribute('data-category');
                let itemsToHide = document.querySelectorAll(`.category-filter li:not([data-filter='${selectedFilter}'])`);
                let itemsToShow = document.querySelectorAll(`.category-filter [data-filter='${selectedFilter}']`);
                let filterCatItem = document.querySelectorAll(".filter-list .filter-tag");
                
                filterCatItem.forEach( link => {
                    link.classList.remove('active');
                });
                event.target.classList.add("active");

                if (selectedFilter == 'all') {
                    itemsToHide = [];
                    itemsToShow = document.querySelectorAll('.category-filter [data-filter]');
                }

                itemsToHide.forEach(el => {
                    el.classList.add('hide');
                    el.classList.remove('show');
                });

                itemsToShow.forEach(el => {
                    el.classList.remove('hide');
                    el.classList.add('show'); 
                });
                event.preventDefault();
                
            }
        },
        mounted() {
            
        }
    }
</script>