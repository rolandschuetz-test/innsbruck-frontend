<template>
    <div>
        <PageBanner 
            title="Basic content page">
            <Breadcrumbs :crumbs="crumbs" />
            <h2>Basic content page</h2>
            <p>Introtext. Euismod potenti lacus pulvinar scelerisque erat nunc lobortis, lectus rutrum ridiculus primis urna venenatis morbi, maecenas lacinia.</p>
            <div class="anchorlinks-box">
                <span>Gehe zu:</span>
                <ul class="anchorlinks">
                    <li><a href="#" class="underline"><span class="line">Anchor 1</span></a></li>
                    <li><a href="#" class="underline"><span class="line">Anchor 2</span></a></li>
                    <li><a href="#" class="underline"><span class="line">Anchor 3</span></a></li>
                </ul>
            </div>
        </PageBanner>
        <div class="content-page">
            <div class="container">
                <div class="content-page-wrap">

                    <h2>Heading Level 1 (H2)</h2>
                    <h3>Heading Level 2 (H3)</h3>
                    <h4>Heading Level 3 (H4)</h4>
                    <p>Duis diam potenti class curae fringilla id adipiscing venenatis sodales a, dui condimentum mollis nam aptent mus risus justo egestas. <strong>I am bold text</strong> Curabitur hac mollis vestibulum fames eros commodo vitae pretium iaculis semper, placerat consectetur per maecenas quam consequat hendrerit donec sociis, <a href="https://www.google.com/" rel="noreferrer" target="_blank">I am an external link</a> rhoncus sagittis mattis arcu leo feugiat nunc. Cras volutpat platea justo aliquam quam luctus leo dis et quisque, <a href="#">I am an internal link</a>.</p>
                    <p class="small">Duis diam potenti class curae fringilla id adipiscing venenatis sodales a, dui condimentum mollis nam aptent mus risus justo egestas.</p>
                    <ol class="ordered-list">
                        <li>Ordered list item. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                        <li>Ordered list item. Hac quisque vulputate id sem ante fusce condimentum habitasse mattis eget posuere rhoncus, a facilisi sapien convallis consectetur semper adipiscing felis.
                            <ol>
                                <li>Second level - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    <ol>
                                        <li>Third Level - Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                    </ol>
                                </li>
                            </ol>
                        </li>
                    </ol>
                    <ul class="unordered-list">
                        <li>Unordered list item. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo donec eleifend ultrices nam id.</li>
                        <li>Unordered list item. Hac quisque I am bold text id sem ante fusce condimentum habitasse mattis eget posuere rhoncus, a facilisi sapien convallis consectetur semper adipiscing felis.
                            <ul>
                                <li>Second level - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    <ul>
                                        <li>Third level - Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <Blockquote>
                        Blockquote element to emphasize content. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus viverra nisl est egestas diam nunc bibendum arcu odio sed.
                    </Blockquote>

                    <div class="single-image-block">
                        <b-image
                            src="single-img-demo"
                            :srcset-sizes="[400, 800, 1600]"
                            :srcset-formatter="this.formatSrcset"
                            ratio="16by9"
                            alt="Bibendum Arcu"
                        ></b-image>
                    </div>


                    <!-- <SingleImage 
                        img="single-img" 
                        srcSetSize="[400, 800, 1600]"
                        imgRatio="740by416" 
                        imgCaption="Single image lorem ipsum dolor si amet." 
                        imgCopyright="© Jonathan Doe"
                        popupName="single_img"
                    >
                    </SingleImage> -->

                    <div class="single-image-block">
                        <div class="single-image-box">
                            <div class="single-image">
                                <a href="#" class="poptrigger" data-rel="single_img">
                                    <div class="sr-only">Image lightcase</div>
                                    <b-image
                                        src="single-img"
                                        :srcset-sizes="[400, 800, 1600]"
                                        :srcset-formatter="this.formatSrcset"
                                        webp-fallback=".png"
                                        ratio="740by416"
                                        alt="Single image"
                                    ></b-image>
                                </a>
                            </div>
                            <div class="caption-text">
                                <p><span>Single image lorem ipsum dolor si amet.</span><span class="caption-copyright">© Jonathan Doe</span></p>
                            </div>
                        </div>
                        <Lightbox lightboxID="single_img">
                            <div class="single-image-box">
                                <div class="single-image">
                                    <b-image
                                        src="lightbox/single-img"
                                        :srcset-sizes="[400, 800, 1600]"
                                        :srcset-formatter="this.formatSrcset"
                                        webp-fallback=".png"
                                        ratio="740by416"
                                        alt="Single image"
                                    ></b-image>
                                </div>
                                <div class="caption-text">
                                    <p><span>Single image lorem ipsum dolor si amet.</span><span class="caption-copyright">© Jonathan Doe</span></p>
                                </div>
                            </div>
                        </Lightbox>
                    </div>

                    <ImageGallery>
                        
                    </ImageGallery>
                    <Video>
                        <client-only>
                            <vue-plyr>
                                <video
                                    controls
                                    crossorigin
                                    playsinline
                                    :data-poster="require(`~/assets/images/video-img.png`)"
                                >
                                    <source
                                        size="576"
                                        src="~/assets/video/custom-video.mp4"
                                        type="video/mp4"
                                    />
                                </video>
                            </vue-plyr>
                        </client-only>
                        <div class="caption-text">
                            <p><span>Direct video caption lorem ipsum dolor si amet.</span><span class="caption-copyright">&copy; Jonathan Doe</span></p>
                        </div>
                    </Video>
                    <YoutubeVideo 
                        youtubeVideoUrl="4flz1sbTgSk" 
                        youtubeCaption="Video embed lorem ipsum dolor si amet." 
                        youtubeExternalUrl="https://youtu.be/4flz1sbTgSk" 
                        youtubeExternalText="Auf YouTube ansehen" 
                    />
                    <Table>
                        <table>
                            <thead>
                                <tr>
                                    <th><div>Table</div></th>
                                    <th><div>Column title 2</div></th>
                                    <th><div>Column title 3</div></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><div>Cell 1</div></td>
                                    <td><div>Cell 2</div></td>
                                    <td><div>Cell 3</div></td>
                                </tr>
                                <tr>
                                    <td><div>Cell 4</div></td>
                                    <td><div>Cell 5</div></td>
                                    <td><div>Cell 6</div></td>
                                </tr>
                                <tr>
                                    <td><div>Cell 7</div></td>
                                    <td><div>Cell 8</div></td>
                                    <td><div>Cell 9</div></td>
                                </tr>
                                <tr>
                                    <td><div>Cell 10</div></td>
                                    <td><div>Cell 11</div></td>
                                    <td><div>Cell 12</div></td>
                                </tr>
                            </tbody>
                        </table>
                    </Table>

                    <div class="download-block">
                        <div class="download-box">
                            <h2>Downloadblock Title</h2>
                            <DownloadList :downloadLists="downloadLists" categoryFilter="category-filter" />
                        </div>
                    </div>
                    <div class="link-block">
                        <div class="link-box">
                            <h2>Linkblock Title</h2>
                            <LinkList :linkLists="linkLists" />
                        </div>
                    </div>
                </div>
            </div>
            <Contact>
                <h2>Kontakt</h2>
                <div class="contact-row">
                    <div class="contact-block">
                        <div class="columns is-multiline">
                            <div class="column is-one-third-desktop is-half-tablet">
                                <div class="contact-box">
                                    <h3>Landeshauptstadt Innsbruck</h3>
                                    <ul class="contact-info">
                                        <li>
                                            <a href="#" class="underline">
                                                <em class="icon-location">Icon location</em>
                                                <span class="line">Maria-Theresien-Straße 18 <br />A-6020 Innsbruck</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="tel:4351253600" class="underline">
                                                <em class="icon-phone">Icon phone</em>
                                                <span class="line">+43 512 5360 0</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="mailto:kontakt@innsbruck.gv.at" class="underline">
                                                <em class="icon-mail">Icon mail</em>
                                                <span class="line">kontakt@innsbruck.gv.at</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="column is-one-third-desktop is-half-tablet">
                                <div class="contact-box">
                                    <h3>Amtszeiten</h3>
                                    <ul class="contact-info-list">
                                        <li><span class="contact-title">Montag - Donnerstag:</span>8.00 - 12.00 Uhr und 13.00 - 16.00 Uhr</li>
                                        <li><span class="contact-title">Freitag:</span>8.00 - 12.00 Uhr (nachmittags geschlossen)</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Contact>
            <LastUpdate lastUpdate="Zuletzt aktualisiert am 21.02.2020" />


            


        </div>
    </div>
</template>

<script>
    import PageBanner from '~/components/general/PageBanner';
    import Breadcrumbs from '~/components/general/Breadcrumbs';
    import Blockquote from '~/components/content-generic-page/Blockquote';
    import ImageGallery from '~/components/content-generic-page/ImageGallery';
    import Lightbox from '~/components/general/Lightbox';
    import Video from '~/components/content-generic-page/Video';
    import YoutubeVideo from '~/components/content-generic-page/YoutubeVideo';
    import Table from '~/components/content-generic-page/Table';
    import DownloadList from '~/components/content-generic-page/DownloadList';
    import LinkList from '~/components/content-generic-page/LinkList';
    import Contact from '~/components/general/Contact';
    import LastUpdate from '~/components/content-generic-page/LastUpdate';
    const imgSrc = require('@/assets/images/single-img.webp');
    export default {
        name: "content-page-generic",
        components: {
            PageBanner,
            Breadcrumbs,
            Blockquote,
            Lightbox,
            ImageGallery,
            Video,
            YoutubeVideo,
            Table,
            DownloadList,
            LinkList,
            Contact,
            LastUpdate
        },
        head(){
            return {
                title: "Basic content page - Stadt Innsbruck"
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
                        name: "Breadcrumb 1",
                        url: "/"
                    },
                    {
                        name: "Basic content page",
                        url: "/"
                    }
                ],
                downloadLists: [
                    {
                        title: "Download 1 Title (PDF)",
                        icon: "icon-file-pdf",
                        link: "#",
                    },
                    {
                        title: "Download 2 Title (Word)",
                        icon: "icon-file-pdf",
                        link: "#",
                    },
                    {
                        title: "Download 3 Title (Excel)",
                        icon: "icon-file-pdf",
                        link: "#",
                    }
                ],
                linkLists: [
                    {
                        title: "Internal Link Title",
                        link: "#",
                        url: "/"
                    },
                    {
                        title: "Internal Link Title",
                        link: "#",
                        url: "/"
                    },
                    {
                        title: "External Link Title",
                        link: "https",
                        url: "/"
                    }
                ],
            }
        },
        mounted (){
            this.changeFooterState(false);
            window.addEventListener('DOMContentLoaded', (event) => {
            });
        },
        destroyed () {
            this.changeFooterState(true);
        },
        methods: {
            changeFooterState (flag) {
                this.$store.commit('FooterContactCheck', flag);
            },
            imgName(src, size){
                return require(`@/assets/images/${src}-${size}.webp`)
            },
            formatSrcset(src, size) {
                // return `https://picsum.photos/id/1074/${size}/${size / 2}`
                // return this.imgName(srcFilename, size, srcExt);
                // return `${srcFilename}-${size}.${srcExt} ${size}w`
                return this.imgName(src, size)
            }
        }
    }
</script>