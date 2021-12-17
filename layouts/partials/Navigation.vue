<template>
    <div>
        <div id="navigation" role="navigation" aria-label="navigation">
            <div class="nav-main-row">
                <div class="nav-main-box">
                    <div class="container">
                        <div class="navigation-row">
                            <div class="columns">
                                <div class="column is-7-desktop menu-col">
                                    <div class="navigation-box">
                                        <ul class="menu">
                                            <li><a href="#" class="underline grey-900"><em class="icon-house">Icon house</em><span class="line">Startseite</span></a></li>
                                            <li><a href="#" class="underline grey-900"><em class="icon-sofa">Icon sofa</em><span class="line">Wohnen in Innsbruck</span></a></li>
                                            <li><a href="#" class="underline grey-900"><em class="icon-car">Icon car</em><span class="line">Mobil in Innsbruck</span></a></li>
                                            <li><a href="#" class="underline grey-900"><em class="icon-suitcase">Icon suitcase</em><span class="line">Arbeiten in Innsbruck</span></a></li>
                                            <li><a href="#" class="underline grey-900"><em class="icon-swimmer">Icon swimmer</em><span class="line">Freizeit in Innsbruck</span></a></li>
                                            <li><a href="#" class="underline grey-900"><em class="icon-digital-rathaus">Icon digital-rathaus</em><span class="line">Digitales Rathaus</span></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="column">
                                    <div class="navigation-box nav-right">
                                        <ul class="nav-list">
                                            <li><a href="#" class="underline"><em class="icon-call">Icon call</em><span class="line">Kontakt und Amtszeiten</span></a></li>
                                            <li><a href="#" class="underline"><em class="icon-parliament">Icon parliament</em><span class="line">Stadtpolitik und Verwaltung</span></a></li>
                                            <li><a href="#" class="underline"><em class="icon-pin">Icon pin</em><span class="line">Amtstafel und Städtische Vorschriften</span></a></li>
                                            <li><a href="#" class="underline"><em class="icon-barrier">Icon barrier</em><span class="line">Interaktiver Stadtplan inklusive Baustellen</span></a></li>
                                            <li><a href="#" class="underline"><em class="icon-finance">Icon finance</em><span class="line">Finanzen und Statistik</span></a></li>
                                            <li><a href="#" class="underline"><em class="icon-city">Icon city</em><span class="line">Rathauswegweiser</span></a></li>
                                            <li><a href="#" class="underline"><em class="icon-comment-points">Icon comment-points</em><span class="line">Bürgerbeteiligung</span></a></li>
                                            <li><a href="#" class="underline"><em class="icon-info">Icon info</em><span class="line">Innsbruck informiert</span></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="navigation-overlay">Navigation Overlay</div>
    </div>
</template>

<script>
    export default {
        name: "navigation",
        mounted() {
            const appHeight = () => {
                const doc = document.documentElement
                doc.style.setProperty('--app-height', `${window.innerHeight}px`)
            }
            window.addEventListener('resize', appHeight)
            appHeight()
        },
    }
</script>