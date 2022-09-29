<template>
    <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <router-link to="/" class="nav-link">Home <span class="sr-only">(current)</span></router-link>
                    </li>
                    <li class="nav-item active">
                        <router-link to="/Contacts" class="nav-link">Contacts <span class="sr-only">(current)</span>
                        </router-link>
                    </li>
                    <li class="nav-item active">
                        <router-link to="/About" class="nav-link">About <span class="sr-only">(current)</span>
                        </router-link>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
       

</template>

<script>
    export default {
        name: "HeaderComponent",
        created() {
            console.log('sonovivo')
        }
    }

</script>

<style>

</style>
