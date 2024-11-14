<template>
    <div>hi</div>
    <RouterLink to="flag">flag</RouterLink>
    <div class="grid">
        <div>
            <div
                v-for="(flag, key) in country_flags"
                :key="key"
                class="flag-wrapper"
            >
                <img
                    class="flag"
                    :src="buildPath(flag.countryCode)"
                    :width="64"
                />
                <p>{{ flag.countryName }} - {{ flag.countryCode }}</p>
            </div>
        </div>
        <div>
            <div
                v-for="(flag, key) in pride_flags"
                :key="key"
                class="flag-wrapper"
            >
                <img class="flag" :src="buildPridePath(flag)" :width="64" />
                <p>{{ flag }}</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { country_flags } from '@/assets/flags/country_flags'
import { pride_flags, buildPridePath } from '@/assets/flags/pride_flags'

function buildPath(fileName: string) {
    return `./src/assets/flags/countries/${fileName}.png`
}
</script>
