<template>
    <div class="page-search search-field">
        <b-field label="Find a name">
            <b-autocomplete
                v-model="name"
                :placeholder="placeholderText"
                :value="value"
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
        name: "PageSearch",
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
        mounted() {
            var beforeVal = this.value;
            $(document).on('click', '.page-search .input', function(){
                var thisval = $(this).val();
                if(beforeVal == thisval) {
                    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                        $(this).val('');
                    }
                }
            })
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
