<template>
    <div class="footer">
        <div class="container">
            <div class="footer-banner">
                <h2 class="footer-banner-title" v-if="footerContent && footerContent.title">{{ footerContent.title }}
                </h2>
                <div class="b-primary-light cta-button" v-if="footerContent">{{ footerContent.cta }} <svg width="15"
                        height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 7H14M14 7L8.21431 1M14 7L8.21431 13" stroke="#222321" />
                    </svg>
                </div>
            </div>
            <div class="footer-menu" v-if="footerContent && footerContent.menu">
                <div class="footer-menu-col" v-for="menu in footerContent.menu" :key="footerContent.menu">
                    <div class="footer-menu-item" v-for="menuItem in menu" :key="menuItem"> {{ menuItem }}
                    </div>
                </div>
            </div>
            <div class="footer-partners" v-if="footerContent && footerContent.logos">
                <div class="footer-partners-title">{{ footerContent.logos.title }}</div>
                <div class="footer-partners-logos">
                    <img :src="logo" class="footer-partners-logos-logo" v-for="logo in footerContent.logos.logos" />
                </div>
            </div>



        </div>
        <div class="footer-background">


        </div>
        <div class="footer-logo">
            <svg width="1400" height="420" viewBox="0 0 1400 420" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1483_721)">
                    <g clip-path="url(#clip1_1483_721)">
                        <path
                            d="M703.041 360.4L563.562 99.3223H494.266V415.318H543.076V153.805L682.555 415.318H751.851V99.3223H703.041V360.4Z"
                            fill="#1F291E" />
                        <path d="M862.561 180.834H817.234V415.326H862.561V180.834Z" fill="#1F291E" />
                        <path d="M862.561 99.3223H817.234V149.444H862.561V99.3223Z" fill="#1F291E" />
                        <path
                            d="M1081.79 215.265C1066.38 189.406 1041.98 176.472 1008.57 176.472C980.377 176.472 956.485 187.589 936.868 209.813C917.25 232.038 907.445 261.61 907.445 298.514C907.445 335.418 917.25 365.417 936.868 387.642C956.485 409.874 980.377 420.983 1008.57 420.983C1041.98 420.983 1066.38 408.057 1081.79 382.19V415.318H1127.12V99.3223H1081.79V215.257V215.265ZM1065.22 361.49C1053.02 375.878 1037.61 383.067 1019.02 383.067C1000.43 383.067 984.872 375.514 973.25 360.4C961.628 345.294 955.813 324.658 955.813 298.506C955.813 272.355 961.62 251.797 973.25 236.834C984.872 221.87 1000.12 214.388 1019.02 214.388C1037.92 214.388 1053.02 221.514 1065.22 235.743C1077.43 249.98 1083.53 270.901 1083.53 298.506C1083.53 326.111 1077.43 347.103 1065.22 361.483V361.49Z"
                            fill="#1F291E" />
                        <path
                            d="M1383.17 229.865C1371.69 210.841 1357.53 197.172 1340.67 188.893C1323.82 180.613 1305.66 176.473 1286.19 176.473C1266.72 176.473 1248.63 180.613 1231.93 188.893C1215.22 197.172 1201.12 210.833 1189.65 229.865C1178.17 248.898 1172.44 271.929 1172.44 298.949C1172.44 325.969 1178.17 348.565 1189.65 367.598C1201.12 386.631 1215.22 400.291 1231.93 408.571C1248.63 416.851 1266.72 420.991 1286.19 420.991C1316.99 420.991 1343.72 410.53 1366.39 389.609C1389.06 368.688 1400.39 338.476 1400.39 298.949C1400.39 271.929 1394.64 248.898 1383.17 229.865ZM1333.27 361.056C1320.48 375.443 1304.79 382.633 1286.2 382.633C1267.61 382.633 1251.98 375.514 1239.35 361.277C1226.71 347.04 1220.39 326.27 1220.39 298.949C1220.39 271.628 1226.71 250.067 1239.35 235.965C1251.99 221.878 1267.6 214.823 1286.2 214.823C1304.8 214.823 1320.48 221.949 1333.27 236.178C1346.05 250.415 1352.45 271.336 1352.45 298.941C1352.45 326.546 1346.05 346.669 1333.27 361.048V361.056Z"
                            fill="#1F291E" />
                        <path d="M0 415.318H47.4041V255.273L268.805 415.318H349.723L0 162.52V415.318Z" fill="#1F291E" />
                        <path
                            d="M134.246 43.3458L302.515 164.985V243.96L79.7629 82.9361L39.4062 112.255L349.919 336.714V140.888L174.603 14.0264L134.246 43.3458Z"
                            fill="#1F291E" />
                    </g>
                </g>
                <defs>
                    <clipPath id="clip0_1483_721">
                        <rect width="1400" height="420" fill="white" />
                    </clipPath>
                    <clipPath id="clip1_1483_721">
                        <rect width="1400.4" height="406.964" fill="white" transform="translate(0 14.0264)" />
                    </clipPath>
                </defs>
            </svg>

        </div>
        <div class="footer-socials container">
            <div class="footer-socials-date">© 2025 Nido</div>
            <div class="footer-socials-logos">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M17.1004 10.6735V16.6501H13.7651V11.1517C13.7651 9.71729 13.0504 8.76104 11.8592 8.76104C10.6024 8.76104 9.95333 9.71729 9.95333 10.9126L9.97245 16.6501H6.14157V6.13135H9.94928L9.95333 7.80479C9.95333 7.80479 11.1445 6.13135 13.2886 6.13135C15.671 6.13135 17.1004 7.50254 17.1004 10.6735ZM2.80627 1.3501C1.61804 1.3501 0.900391 2.06729 0.900391 3.02354C0.900391 3.97979 1.6151 4.69697 2.81972 4.69697C4.02434 4.69697 4.71216 3.94049 4.71216 3.02354C4.71216 2.06729 3.9945 1.3501 2.80627 1.3501ZM0.900391 16.6501H4.71216V6.13135H0.900391V16.6501Z"
                        fill="#E4E0D8" />
                </svg>
                <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M11.0258 0H13.1726L8.48255 5.50667L14 13H9.67988L6.2962 8.45533L2.42451 13H0.276457L5.29291 7.11L0 0H4.4298L7.48834 4.154L11.0258 0ZM10.2724 11.68H11.4619L3.78343 1.25067H2.50693L10.2724 11.68Z"
                        fill="#E4E0D8" />
                </svg>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M9.19264 15.9999V8.70155H11.5513L11.9044 5.85726H9.19264V4.04126C9.19264 3.21779 9.41283 2.65655 10.5499 2.65655L12 2.65585V0.111955C11.7491 0.0774178 10.8883 0 9.88691 0C7.79614 0 6.36475 1.32545 6.36475 3.75971V5.85733H4V8.70163H6.36467V16L9.19264 15.9999Z"
                        fill="#E4E0D8" />
                </svg>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M12.1992 2.7998C12.1659 2.79981 12.1326 2.80149 12.0994 2.80483C12.0662 2.80816 12.0332 2.81315 12.0006 2.81978C11.9679 2.82639 11.9356 2.83463 11.9037 2.84447C11.8719 2.85432 11.8405 2.86576 11.8098 2.87875C11.7791 2.89174 11.7491 2.90626 11.7198 2.92225C11.6905 2.93823 11.6621 2.95566 11.6346 2.97448C11.6071 2.99331 11.5805 3.01351 11.555 3.035C11.5295 3.05647 11.5051 3.07921 11.4819 3.10312C11.4587 3.12704 11.4366 3.15211 11.4159 3.17824C11.3952 3.20435 11.3758 3.23149 11.3578 3.25954C11.3398 3.28758 11.3232 3.31651 11.308 3.34621C11.2929 3.37593 11.2793 3.4064 11.2672 3.43748C11.2551 3.46855 11.2446 3.5002 11.2357 3.53231C11.2268 3.56444 11.2195 3.597 11.2138 3.62985C11.2081 3.6627 11.2041 3.69581 11.2017 3.72907C11.2001 3.75261 11.1992 3.7762 11.1992 3.7998C11.1992 3.83315 11.2009 3.86648 11.2042 3.89966C11.2076 3.93283 11.2125 3.96582 11.2191 3.99849C11.2258 4.03117 11.234 4.06349 11.2439 4.09534C11.2537 4.12719 11.2652 4.15853 11.2782 4.18923C11.2912 4.21994 11.3057 4.24999 11.3217 4.27925C11.3376 4.30851 11.3551 4.33695 11.3739 4.36447C11.3927 4.39197 11.4129 4.41852 11.4344 4.44401C11.4558 4.46951 11.4786 4.49392 11.5025 4.51715C11.5264 4.54038 11.5515 4.5624 11.5776 4.58312C11.6037 4.60385 11.6309 4.62326 11.6589 4.64128C11.687 4.65929 11.7159 4.67589 11.7457 4.69101C11.7754 4.70614 11.8058 4.71977 11.8369 4.73186C11.8679 4.74394 11.8996 4.75446 11.9317 4.76338C11.9639 4.77229 11.9964 4.77959 12.0293 4.78524C12.0621 4.79092 12.0952 4.79495 12.1285 4.79731C12.152 4.79898 12.1756 4.79981 12.1992 4.7998C12.2326 4.79981 12.2659 4.79815 12.299 4.79482C12.3322 4.79149 12.3652 4.7865 12.3979 4.77988C12.4306 4.77325 12.4629 4.76499 12.4947 4.75514C12.5266 4.74528 12.5579 4.73385 12.5886 4.72086C12.6193 4.70788 12.6494 4.69338 12.6786 4.6774C12.7079 4.66141 12.7363 4.64396 12.7639 4.62513C12.7914 4.60631 12.8179 4.58613 12.8434 4.56465C12.8689 4.54317 12.8933 4.52042 12.9166 4.49649C12.9398 4.47258 12.9618 4.44753 12.9825 4.42142C13.0033 4.3953 13.0227 4.36817 13.0407 4.34011C13.0587 4.31205 13.0753 4.28311 13.0904 4.2534C13.1055 4.22369 13.1192 4.19324 13.1313 4.16217C13.1433 4.13109 13.1539 4.09943 13.1628 4.0673C13.1717 4.03517 13.179 4.00261 13.1846 3.96976C13.1903 3.93691 13.1943 3.90379 13.1967 3.87054C13.1984 3.847 13.1992 3.82341 13.1992 3.7998C13.1992 3.76647 13.1975 3.73316 13.1942 3.69999C13.1909 3.66682 13.1859 3.63384 13.1793 3.60116C13.1727 3.56849 13.1644 3.53616 13.1546 3.50431C13.1447 3.47246 13.1333 3.44113 13.1203 3.41042C13.1073 3.37971 13.0928 3.34966 13.0768 3.3204C13.0608 3.29114 13.0434 3.2627 13.0246 3.23519C13.0057 3.20767 12.9855 3.1811 12.964 3.1556C12.9426 3.1301 12.9198 3.10569 12.8959 3.08246C12.872 3.05923 12.847 3.03721 12.8208 3.01649C12.7947 2.99577 12.7676 2.97638 12.7395 2.95838C12.7115 2.94036 12.6825 2.92376 12.6528 2.90864C12.6231 2.89351 12.5926 2.87988 12.5616 2.86779C12.5305 2.85571 12.4988 2.84519 12.4667 2.83627C12.4346 2.82735 12.402 2.82004 12.3692 2.81436C12.3363 2.8087 12.3032 2.80469 12.2699 2.80234C12.2464 2.80066 12.2228 2.79981 12.1992 2.7998Z"
                        fill="#E4E0D8" />
                    <rect x="0.666667" y="0.666667" width="14.6667" height="14.6667" rx="3.77778" stroke="#E4E0D8"
                        stroke-width="1.33333" />
                    <circle cx="8" cy="8" r="3.33333" stroke="#E4E0D8" stroke-width="1.33333" />
                </svg>

            </div>
            <div class="footer-socials-made-by">Made by O0</div>
        </div>

    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useContent } from '@/composables/useContent';

const { loadContent, loading, error } = useContent();
const footerContent = ref(null);

onMounted(async () => {
    try {
        footerContent.value = await loadContent('components/footer');
        console.log(footerContent.value)
    } catch (e) {
        console.error('Failed to load footer content:', e);
    }
});
</script>

<style lang="scss" scoped>
@use './../styles/mixins' as *;

.footer {
    background-color: var(--GreenAccent);
    padding: 90px 0 0 0;


    @include respond-to(lg) {
        padding: 100px 0 20px 0;
    }

    .container {
        display: flex;
        flex-wrap: wrap;
        gap: 9px;
    }

    &-banner {
        display: flex;
        flex-direction: column;
        align-items: center;

        margin-bottom: 57px;

        @include respond-to(lg) {
            width: 35%;
            align-items: flex-start;
            margin-right: 200px;
        }

        &-title {
            font-size: var(--font-size-h1);
            line-height: var(--line-height-h1);
            color: var(--BezhPrimary);
            text-align: center;

            @include respond-to(lg) {
                text-align: left;
            }
        }

        .cta-button {
            width: fit-content;
        }
    }

    &-menu {
        display: flex;
        order: 3;



        flex-wrap: wrap;

        @include respond-to(lg) {
            width: 50%;
            justify-content: space-around;
            order: 2;

        }

        &-col {
            width: 50%;
            margin-bottom: 60px;

            @include respond-to(lg) {

                margin-bottom: 0;
                width: 33%;
            }
        }

        &-item {
            color: var(--BezhPrimary);
            font-size: var(--font-size-block-text-small);
            margin-bottom: 5px;
            flex-wrap: wrap;

            @include respond-to(lg) {
                font-size: var(--font-size-block-text);
                margin-bottom: 24px;
            }
        }
    }

    &-partners {
        color: var(--BezhPrimary);
        order: 2;
        margin-bottom: 80px;

        justify-content: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;

        @include respond-to(lg) {
            order: 3;
            margin-bottom: 40px;
            display: block;
        }

        &-title {
            color: var(--BezhPrimary);
            opacity: 0.4;
            margin-bottom: 30px;

            @include respond-to(lg) {
                margin-bottom: 20px;
            }
        }

        &-logos {
            display: flex;
            justify-content: space-between;

            @include respond-to(lg) {
                display: block;
            }

            &-logo {
                margin-right: 40px;

                width: calc(30% - 40px);

                @include respond-to(lg) {
                    width: auto;
                }

                &:last-of-type {
                    margin-right: 0;
                }
            }

        }
    }

    &-socials {

        color: var(--BezhPrimary);

        margin: 0 auto;
        padding: 20px 0;
        display: flex;
        justify-content: space-between;
        width: 100%;

        &-logos {
            svg {
                margin-right: 17px;

                &-last-of-type {
                    margin-right: 0;
                }
            }
        }
    }

    &-background {
        position: relative;
        min-height: 220px;
        width: 100%;

        &:before {
            bottom: 0px;
            left: 50%;
            transform: translateX(-50%) scaleX(-1) rotate(180deg);
            background-image: url("src/styles/assets/backgrounds/background-footer.svg");
            background-position: center center;
            background-repeat: no-repeat;
            background-size: cover;
            width: 100%;
            height: 100%;
            z-index: 0;
            content: "";
            position: absolute;
        }



    }

    &-logo {
        order: 4;
        width: 100%;
        height: auto;
        max-width: 95vw;
        margin: 0 auto;

        @include respond-to(lg) {
            max-width: 1440px;
        }

        svg {
            max-width: 95vw;
            max-height: 300px;
        }
    }
}
</style>