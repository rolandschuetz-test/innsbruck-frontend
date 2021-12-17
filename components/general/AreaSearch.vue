<template>
    <div class="area-search search-field">
        <b-field label="Find a name">
            <b-autocomplete
                v-model="name"
                :placeholder="placeholderText"
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
        name: "AreaSearch",
        props: ['value', 'placeholderText'],
        data() {
            var theData = {
                data,
                keepFirst: false,
                openOnFocus: true,
                name: this.value,
                placeholder: this.placeholderText,
                selected: null,
                clearable: false
            }
            return theData;
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
        }
    }
</script>
