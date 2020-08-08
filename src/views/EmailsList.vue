<template>
<div class="wrapper">
    <div class="emails-wrapper">
        <div v-if="data.length">
            <div v-for="(email, index) in data" :key="index">
                <email-item v-bind:email="email">
                </email-item>
            </div>
        </div>
        <div v-else>
            no data
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios';
import EmailItem from '@/components/EmailItem.vue';

const EMAILS_DATA_URL = 'http://127.0.0.1:8000/emails';

export default {
    name: 'EmailsList',

    data() {
        return {
            data: [],
        }
    },

    methods: {
        getData() {
            axios.get(EMAILS_DATA_URL)
                .then((response) => {
                    this.data = response.data
                }).catch((e) => {
                    console.log(e);
                });
        },
        pollData() {
            this.polling = setInterval(() => {
                this.getData()
            }, 20000)
        }
    },
    created() {
        this.getData();
        this.pollData();
    },
    beforeDestroy() {
        clearInterval(this.polling)
    },
    components: {
        'email-item': EmailItem,
    },
}
</script>

<style scoped>
.wrapper {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}

.emails-wrapper {
    width: 600px;
}
</style>
