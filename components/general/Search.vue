<template>
    <div class="search-box">
        <b-field label="Find a name" tabindex="0">
            <b-autocomplete
                v-model="name"
                placeholder="Wonach suchen Sie?"
                :keep-first="keepFirst"
                :open-on-focus="openOnFocus"
                :data="filteredDataObj"
                field="user.first_name"
                @select="option => (selected = option)"
                :clearable="clearable"
            >
            </b-autocomplete>
        </b-field>
    </div>
</template>

<script>
    const data = require('@/data/search.json');
    export default {
        name: "Search",
        data() {
            return {
                data,
                keepFirst: false,
                openOnFocus: true,
                name: '',
                selected: null,
                clearable: false
            }
        },
        computed: {
            filteredDataObj() {
                return this.data.filter(option => {
                    return (
                        option.user.first_name
                            .toString()
                            .toLowerCase()
                            .indexOf(this.name.toLowerCase()) >= 0
                    )
                })
            }
        },
        
    }
</script>