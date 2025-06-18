<template>
    <div class="footer">
        <div class="container">
            <div class="footer-banner">
                <h2 class="footer-banner-title">Launch or scale your heat pump business. Instantly.</h2>
                <div class="b-primary-light cta-button">Calculate your savings <svg width="15" height="14"
                        viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 7H14M14 7L8.21431 1M14 7L8.21431 13" stroke="#222321" />
                    </svg>
                </div>
            </div>
            <div class="footer-menu">
                <div class="menu-col-1"></div>
                <div class="menu-col-2"></div>
                <div class="menu-col-3"></div>
            </div>
            <div class="footer-partners">
                <div class="footer-partner-title"></div>
                <div class="footer-partners-logos"></div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.footer {
    background-color: var(--GreenAccent);
    padding: 100px 125px;
    display: flex;

    &-banner {
        display: flex;
        flex-direction: column;
        width: 50%;

        &-title {
            font-size: var(--font-size-h1);
            line-height: var(--line-height-h1);
            color: var(--BezhPrimary)
        }

        .cta-button {
            width: fit-content;
        }
    }
}
</style>