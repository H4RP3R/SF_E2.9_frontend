<template>
<div class="wrapper">
    <div class="form-wrapper">
        <form id="email-form" method="post" @submit="checkForm" action="/emails">
            <div id="errors-box">
                <div v-if="errors.length">
                    <b>Please correct the following error(s):</b>
                    <ul>
                        <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
                    </ul>
                </div>
            </div>
            <div class="form-element">
                <label for="subject">Subject</label>
                <input v-model="subject" type="text" name="subject" id="subject" value="">
            </div>
            <div class="form-element">
                <label for="addres">Address</label>
                <input v-model="address" type="email" name="addres" id="addres" value="">
            </div>
            <div class="form-element">
                <label for="text">Text</label>
                <textarea v-model="text" name="text" id="text" rows="8" cols="80" class="text-input-field"></textarea>
            </div>
            <div class="small-fields-wrapper">
                <div class="form-element integer-input">
                    <label for="delay">Delay in seconds</label>
                    <input v-model="delay" type="number" name="delay" id="delay" min="0" default="0"
                        value="">
                </div>
                <div class="">
                    <input type="submit" value="Send" class="send-button">
                </div>
            </div>
        </form>
    </div>
</div>
</template>

<script>
import axios from 'axios';

const SEND_EMAIL_URL = 'http://127.0.0.1:8000/emails';

export default {
    name: 'SendEmail',

    data() {
        return {
            errors: [],
            subject: null,
            address: null,
            text: null,
            delay: 0,
        }
    },

    methods: {
        checkForm: function(e) {
            e.preventDefault();

            this.errors = []

            const er = document.getElementById('errors-box')

            if (this.errors) {
                er.style.display = 'block'
            } else {
                er.style.display = 'none'
            }

            if (!this.subject) {
                this.errors.push('Subject required')
            }
            if (!this.address) {
                this.errors.push('Address required')
            }
            if (!this.text) {
                this.errors.push('Text cannot be empty. Write something.')
            }

            if (!this.errors.length) {
                console.log('!!!!');
                const formData = new FormData();
                formData.append('subject', this.subject)
                formData.append('addres', this.addres)
                formData.append('text', this.text)
                formData.append('delay', this.delay)

                axios({
                    method: 'post',
                    url: SEND_EMAIL_URL,
                    data: {
                        'subject': this.subject,
                        'address': this.address,
                        'text': this.text,
                        'delay': this.delay,
                    },
                }).then(response => {
                    console.log(response);
                })

            }
        }
    }
}
</script>

<style scoped>
.wrapper {
    display: flex;
    justify-content: center;
}

.form-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 780px;
}

.form-element {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    width: 480px;
}

.text-input-field {
    width: 480px;
}

label {
    text-transform: uppercase;
    font-size: 12px;
}

input {
    border-top-style: hidden;
    border-right-style: hidden;
    border-left-style: hidden;
    border-bottom-style: inset;
    border-color: #2c3e50;
    margin: 0 50px 0 50px;
    height: 40px;
    font-size: 18px;
    color: #2c3e50;
    padding-left: 4px;
    padding-right: 4px;
}

input:focus {
    outline: none !important;
    border-color: #b01e1e;
    background-color: floralwhite;
    color: #b01e1e;
    text-align: center;
}

input[type=number] {
    text-align: left;
}

textarea {
    margin-top: 5px;
    border-top-style: dashed;
    border-right-style: dashed;
    border-left-style: dashed;
    border-bottom-style: inset;
    border-color: #2c3e50;
    font-size: 18px;
    color: #2c3e50;
    padding-left: 4px;
    padding-right: 4px;
}

textarea:focus {
    outline: none !important;
    border-color: #b01e1e;
    background-color: floralwhite;
    color: #b01e1e;
}

.integer-input {
    width: 220px;
}

.small-fields-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

.send-button {
    margin-top: 34px;
    width: 160px;
    background-color: #2c3e50;
    border: none;
    color: white;
}

.send-button:hover {
    background-color: #2f659c;
}

.send-button:focus {
    background-color: #2c3e50;
    border: none;
    color: white;
}

#errors-box {
    display: none;
    border: solid #b01e1e 1px;
    padding: 10px;
}

#errors-box li {
    text-align: left;
}
</style>
