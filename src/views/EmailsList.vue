<template>
<div>
    <div v-for="(email, index) in data" :key="index">
        <email-item v-bind:email="email">
        </email-item>
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
            data: 'Fuck',
        }
    },

    methods: {
        getData() {
            axios.get(EMAILS_DATA_URL)
                .then((response) => {
                    this.data = response.data
                });
        }
    },
    created() {
        this.getData();
    },
    components: {
        'email-item': EmailItem,
    },
}
</script>
