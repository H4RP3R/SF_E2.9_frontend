<template>
<div class="item-wrapper">
    <div class="item-header">
        <div class="header-element">
            <b>From: </b><span>mailer</span>
        </div>
        <div class="header-element">
            <b>To: </b><span>{{ hideEmail(email.address) }}</span>
        </div>
        <div class="header-element">
            <b>Subject: </b><span>{{ email.subject }}</span>
        </div>
    </div>
    <div class="item-body">
        {{ email.text }}
    </div>
    <div class="id-box">
        <p>id: {{ email.id }}</p>
    </div>
</div>
</template>

<script>
export default {
    props: ['email'],
    methods: {
        hideEmail(email) {
            if (email) {
                const regex = new RegExp('@')
                const pos = email.search(regex)
                let result = email.slice(0, 2)
                result += '***'
                result += email.slice(pos, email.length)
                return result
            }
        }
    }
};
</script>

<style scoped>
.item-wrapper {
    border: 1px dashed #b01e1e;
    border-top-style: hidden;
    margin-top: 12px;
    display: flex;
    flex-direction: column;
}

.id-box {
    position: relative;
    font-size: 10px;
    border-top: 1px solid #b01e1e;
    background-color: floralwhite;
}

.item-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: #2c3e50;
    color: white;
    padding: 4px 8px;
    font-size: 14px;
}

.item-header span {
    text-transform: uppercase;
}

.header-element {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.item-body {
    padding: 10px 5px;
    min-height: 40px;
    text-align: left;
}
</style>
