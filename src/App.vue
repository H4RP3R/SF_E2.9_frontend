<template>
<div id="app">
    <div id="nav">
        <router-link to="/">Send Email</router-link> |
        <router-link to="/emails">Last Emails</router-link>
    </div>
    <router-view />
</div>
</template>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 30px;
}

#nav a {
    font-weight: bold;
    color: #2c3e50;
    text-transform: uppercase;
}

#nav a:hover {
    font-weight: bold;
    color: #2f659c;
}

#nav a.router-link-exact-active {
    color: #b01e1e;
}
</style>
