<template>
  <span class="flex">
    <h2>Wem gehört diese Flagge???</h2>
    <h4>Score: {{ streak }}</h4>
  </span>
  <div class="flag-container">
    <div class="flag-wrapper">
      <img class="flag" :src="currentFlagImage" :width="64" />
      <button
        :id="'flag-button-' + item"
        :key="key"
        v-for="(item, key) in countries"
        @click="guess(item)"
      >
        {{ getCountryNameById(item) }}
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
import flags from "@/assets/flags/country_flags";
import { computed, onMounted, ref, type Ref } from "vue";

const audio = new Audio("/src/assets/extremely-loud-incorrect-buzzer.mp3");
function buildPath(fileName: string) {
  return `/src/assets/flags/countries/${fileName}.png`;
}
const currentCountryId: Ref<number | undefined> = ref();
const streak = ref(0);

function guess(id: number) {
  if (id == currentCountryId.value) {
    rollFlags();
    document.querySelectorAll(".red-bg").forEach((element) => {
      element.classList.remove("red-bg");
    });
    streak.value++;
  } else {
    audio.play();
    document.getElementById("flag-button-" + id)?.classList.add("red-bg");
    streak.value = 0;
  }
}

const currentFlagImage = computed(() => {
  if (currentCountryId.value === undefined) {
    return "";
  }
  const fileName = flags[currentCountryId.value].countryCode;
  return buildPath(fileName);
});

const countries: Ref<number[]> = ref([]);

function getCountryNameById(id: number) {
  return flags[id].countryName;
}
function rollRandomNumber() {
  const response = Math.floor(Math.random() * flags.length);
  if (countries.value.includes(response)) {
    return rollRandomNumber();
  }
  return response;
}
function rollFlags() {
  currentCountryId.value = rollRandomNumber();

  const ids = [currentCountryId.value, rollRandomNumber(), rollRandomNumber()];
  countries.value = ids
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}
onMounted(() => {
  rollFlags();
});
</script>
