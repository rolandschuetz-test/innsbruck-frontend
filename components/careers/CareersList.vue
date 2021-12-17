<template>
    <div class="careers-row">
        <div class="columns is-multiline">
            <div class="column is-one-third-desktop is-half-tablet" v-for="(careeritem, index) in careerLists" :key="index">
                <div class="career-box">
                    <h4>{{ careeritem.title }}</h4>
                    <p>{{ careeritem.department }}</p>
                    <ul class="career-info">
                        <li><em class="icon-suitcase-sm">Icon suitcase-sm</em>{{ careeritem.employment_type }}</li>
                        <li><em class="icon-calendar">Icon calendar</em>{{ careeritem.job_start }}</li>
                        <li><em class="icon-time">Icon time</em>{{ careeritem.application_deadline }}</li>
                    </ul>
                    <a :href="careeritem.link" class="underline red-500 arrow"><span class="line">{{ careeritem.linktext }}</span></a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'careers-list',
        props: {
            careerLists: Array
        },
    }
</script>