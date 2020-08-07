<template>
<div>
    <p>id: {{ email.id }}</p>
    <p>subject: {{ email.subject }}</p>
</div>
</template>

<script>
export default {
    props: ['email'],
};
</script>

<style scoped>

</style>
