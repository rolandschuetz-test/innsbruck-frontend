<template>
    <div>
        <PageBanner>
            <Breadcrumbs :crumbs="crumbs" />
            <h2>Karriere bei der Stadt Innsbruck</h2>
        </PageBanner>
        <div class="page-content">
            <div class="container">
                <div class="page-content-row">
                    <div class="careers-section">
                        <h3>Offene Stellen</h3>
                        <CareersList :careerLists="careerLists" />
                    </div>
                    <div class="requirement-section">
                        <h3>Wir freuen uns auf Ihre aussagekräftige Bewerbung!</h3>
                        <p>Bitte fügen Sie folgende Unterlagen zur Bewerbung hinzu:</p>
                        <ul class="unordered-list">
                            <li>Lebenslauf</li>
                            <li>Abschlusszeugnisse (in Kopie)</li>
                            <li>Bestätigungen über besondere Zusatzqualifikationen (in Kopie)</li>
                            <li>Foto</li>
                        </ul>
                        <b-button type="is-primary" tag="a" target="_blank" href="https://forms.innsbruck.gv.at/formserver/start.do?id=I_Bewerbung_Aufnahme_Dienstverhaeltnis_V1_0" icon-right="tip-right">Jetzt online bewerben</b-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import PageBanner from '~/components/general/PageBanner';
    import Breadcrumbs from '~/components/general/Breadcrumbs';
    import CareersList from '~/components/careers/CareersList';
    export default {
        name: "careers",
        components: {
            PageBanner,
            Breadcrumbs,
            CareersList
        },
        head(){
            return {
                title: "Karriere bei der - Stadt Innsbruck"
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
                        name: "Karriere bei der Stadt Innsbruck",
                        url: "/"
                    }
                ],
                careerLists: [
                    {
                        title: "Juristin / Jurist",
                        department: "Referat „Liegenschaftsangelegenheiten“",
                        employment_type: "Vollbeschäftigung",
                        job_start: "zum baldigen Eintritt",
                        application_deadline: "Bewerbungsfrist: 28.09.2020",
                        link: "#",
                        linktext: "Zur Ausschreibung"
                    },
                    {
                        title: "Hochbautechnische/n Sachverständige/n",
                        department: "Referat “Gesundheitswesen”",
                        employment_type: "Voll- oder Teilzeitbeschäftigung",
                        job_start: "ab sofort",
                        application_deadline: "Bewerbungsfrist: 31.10.2020",
                        link: "#",
                        linktext: "Zur Ausschreibung"
                    },
                    {
                        title: "Pädagogische Fachkräfte",
                        department: "städtische Kindergärten",
                        employment_type: "Voll- oder Teilzeitbeschäftigung",
                        job_start: "ab September 2020",
                        application_deadline: "Bewerbungsfrist: 04.10.2020",
                        link: "#",
                        linktext: "Zur Ausschreibung"
                    },
                    {
                        title: "Mitarbeiterinnen / Mitarbeiter",
                        department: "Referat “Buchhaltung”",
                        employment_type: "Voll- oder Teilzeitbeschäftigung",
                        job_start: "ab sofort",
                        application_deadline: "Bewerbungsfrist: 15.11.2020",
                        link: "#",
                        linktext: "Zur Ausschreibung"
                    },
                    {
                        title: "Ärztin / Arzt",
                        department: "Referat “Gesundheitswesen”",
                        employment_type: "Voll- oder Teilzeitbeschäftigung",
                        job_start: "ab sofort",
                        application_deadline: "Bewerbungsfrist: 30.09.2020",
                        link: "#",
                        linktext: "Zur Ausschreibung"
                    },
                    {
                        title: "Gärtnerin / Gärtner",
                        department: "Referat „Stadtgartenverwaltung“",
                        employment_type: "Voll- oder Teilzeitbeschäftigung",
                        job_start: "ab Oktober 2020",
                        application_deadline: "Bewerbungsfrist: 17.10.2020",
                        link: "#",
                        linktext: "Zur Ausschreibung"
                    },
                    
                ],
            }
        }
    }
</script>