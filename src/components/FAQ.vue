<template>
    <section class="faq-section">
        <h2 class="faq-title">FAQ</h2>
        <div class="faq-list">
            <div class="faq-item" v-for="(item, index) in faqItems" :key="index">
                <button class="faq-question-button" @click="toggleFAQ(index)">
                    <h5 class="faq-question">{{ item.question }}</h5>
                    <span class="faq-icon">{{ item.isOpen ? '-' : '+' }}</span>
                </button>
                <transition name="fade">
                    <div class="faq-answer" v-show="item.isOpen">
                        <p>{{ item.answer }}</p>
                    </div>
                </transition>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';

const faqItems = ref([
    {
        question: 'How long does it take to set-up Nido?',
        answer: "In just 10-15 minutes, you'll be able to customize and start using the tool. In just 10-15 minutes, you'll be able to customize and start using the tool.",
        isOpen: false,
    },
    {
        question: 'Are subsidies included in the budgeting process?',
        answer: 'Yes, subsidies can be fully integrated into your budgeting process, allowing for accurate financial planning and reporting.',
        isOpen: false,
    },
    {
        question: 'Who owns my customers information?',
        answer: 'You retain full ownership of your customer information. Our platform ensures data privacy and security, and we never share your data with third parties.',
        isOpen: false,
    },
    {
        question: 'Does the system comply with regulations?',
        answer: 'Our system is designed to comply with all relevant industry regulations and data protection laws, ensuring your operations are always compliant.',
        isOpen: false,
    },
    {
        question: 'What kind of training can I receive?',
        answer: 'We offer comprehensive training programs, including online tutorials, webinars, and dedicated support sessions, to help you get the most out of Nido.',
        isOpen: false,
    },
    {
        question: 'How customizable is Nido?',
        answer: 'Nido is highly customizable. You can tailor various features, including dashboards, reports, and workflows, to fit your specific business needs.',
        isOpen: false,
    },
]);

const toggleFAQ = (index) => {
    faqItems.value[index].isOpen = !faqItems.value[index].isOpen;
};
</script>

<style lang="scss" scoped>
@use '../styles/mixins' as *;


.faq-section {
    padding: 0 20px 80px 20px;

    max-width: 960px;
    margin: 0 auto;
    display: flex;
    gap: 10px;
    flex-direction: column;

    @include respond-to(lg) {
        flex-direction: row;
        padding: 120px 20px;
    }


    .faq-title {
        @include respond-to(lg) {
            width: 45%;
        }
    }

    .faq-list {
        display: flex;
        width: 100%;
        flex-direction: column;
        gap: 10px;

    }

    .faq-item {
        border-bottom: 1px solid #eee;
        text-align: left;
        transition: background-color 0.3s ease;

        &:last-child {
            border-bottom: none;
        }

        .faq-question-button {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            padding: 15px 0;
            background: none;
            border: none;
            cursor: pointer;
            text-align: left;
            transition: color 0.3s ease;

            &:hover {

                .faq-question,
                .faq-icon {
                    cursor: pointer;
                }
            }
        }

        .faq-question {
            transition: color 0.3s ease;
        }

        .faq-icon {
            font-size: 1.5rem;
            color: var(--BlackGrafit);
            transition: color 0.3s ease;
        }
    }

    .faq-answer {
        font-size: var(--font-size-block-text-small);
    }
}


.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>