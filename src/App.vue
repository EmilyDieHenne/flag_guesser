<template>
    <nav>
        <div class="navbar-wrapper">
            <div class="items-wrapper">
                <RouterLink to="/">nichts</RouterLink>
                <RouterLink to="/flag">Flaggen</RouterLink>
                <RouterLink to="/pride">Flaggen</RouterLink>
            </div>
        </div>
    </nav>

    <main>
        <RouterView></RouterView>
    </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterView } from 'vue-router'

var a = ref<number>(1)
</script>
