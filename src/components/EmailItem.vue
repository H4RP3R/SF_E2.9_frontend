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
        <div v-if="email.sent" class="status-box status-box-sent"></div>
        <div v-else class="status-box"></div>
        [<b>At: {{ emailDate() }}</b>]
        {{ email.text }}
    </div>
    <div class="id-box">
        <span>id: {{ email.id }}</span>
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
        },
        emailDate() {
            const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT",
                "NOV", "DEC"
            ];
            const dt = new Date(this.email.created)
            return dt.getFullYear() + '-' + months[dt.getMonth()] + '-' + dt.getDate() + ' ' +
                dt.getHours() + ':' + dt.getMinutes()
        }
    }
};
</script>

<style scoped>
.item-wrapper {
    border: 1px dashed #b01e1e;
    border-top-style: hidden;
    margin-top: 18px;
    display: flex;
    flex-direction: column;
}

.id-box {
    position: relative;
    font-size: 12px;
    border-top: 1px solid #b01e1e;
    background-color: floralwhite;
    display: flex;
    justify-content: center;
    height: 22px;
}

.id-box span {
    margin-top: 4px;
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

.status-box {
    background-color: gold;
    width: 10px;
    height: 10px;
    display: inline-block;
    border-radius: 50%;
}

.status-box-sent {
    background-color: limegreen;
}
</style>
