<template>
  <div class="card">
    <div class="card-header">
      Finde die Fehler
    </div>


    <div class="card flex justify-center">
        <Stepper value="1" class="basis-[50rem]">
            <StepList>
                <Step value="1">Header I</Step>
                <Step value="2">Header II</Step>
                <Step value="3">Header III</Step>
            </StepList>
            <StepPanels>
                <StepPanel v-slot="{ activateCallback }" value="1">
                    <div class="flex flex-col h-48">
                        <div class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium">Content I</div>
                    </div>
                    <div class="flex pt-6 justify-end">
                        <Button label="Next" icon="pi pi-arrow-right" iconPos="right" @click="activateCallback('2')" />
                    </div>
                </StepPanel>
                <StepPanel v-slot="{ activateCallback }" value="2">
                    <div class="flex flex-col h-48">
                        <div class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium">Content II</div>
                    </div>
                    <div class="flex pt-6 justify-between">
                        <Button label="Back" severity="secondary" icon="pi pi-arrow-left" @click="activateCallback('1')" />
                        <Button label="Next" icon="pi pi-arrow-right" iconPos="right" @click="activateCallback('3')" />
                    </div>
                </StepPanel>
                <StepPanel v-slot="{ activateCallback }" value="3">
                    <div class="flex flex-col h-48">
                        <div class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium">Content III</div>
                    </div>
                    <div class="pt-6">
                        <Button label="Back" severity="secondary" icon="pi pi-arrow-left" @click="activateCallback('2')" />
                    </div>
                </StepPanel>
            </StepPanels>
        </Stepper>
    </div>



    <div class="card-body">
      <p>Score: {{ score }} / {{ spots.length }}</p>

      <div ref="wrapper" class="image-wrapper">
        <img
          :src="imageSrc"
          alt="Phishing E-Mail"
          class="image"
        />

        <!-- unsichtbare Klickbereiche -->
        <div
          v-for="spot in spots"
          :key="spot.id"
          class="hotspot"
          :class="{ found: foundIds.includes(spot.id) }"
          :style="hotspotStyle(spot)"
          @click="onSpotClick(spot)"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import Stepper from 'primevue/stepper';
import StepList from 'primevue/steplist';
import StepPanels from 'primevue/steppanels';
import StepItem from 'primevue/stepitem';
import Step from 'primevue/step';
import StepPanel from 'primevue/steppanel';
import Button from 'primevue/button'

const imageSrc = '/src/img/Email.webp'

// Koordinaten relativ (0–1) zur Bildbreite/-höhe
const spots = [
  { id: 1, x: 0.22, y: 0.30, r: 0.03 },
  { id: 2, x: 0.55, y: 0.48, r: 0.04 },
  { id: 3, x: 0.80, y: 0.72, r: 0.035 },
]

const foundIds = ref([]) // welche IDs wurden schon gefunden?

const score = computed(() => foundIds.value.length)

const hotspotStyle = (spot) => ({
  left: (spot.x * 100) + '%',
  top: (spot.y * 100) + '%',
  width: (spot.r * 2 * 100) + '%',
  height: (spot.r * 2 * 100) + '%',
  transform: 'translate(-50%, -50%)',
})

const onSpotClick = (spot) => {
  if (foundIds.value.includes(spot.id)) return

  foundIds.value.push(spot.id)

  // hier könntest du zusätzlich noch ein Event feuern,
  // eine Erklärung anzeigen usw.
}
</script>

<style scoped>
.card {
  max-width: 800px;
  margin: 1rem auto;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}

.card-header {
  padding: 0.75rem 1rem;
  border-bottom: 1px solid #eee;
  font-weight: 600;
}

.card-body {
  padding: 1rem;
}

.image-wrapper {
  position: relative;
  width: 100%;
  max-width: 100%;
}

.image {
  display: block;
  width: 100%;
  height: auto;
}

/* unsichtbare Klickfläche */
.hotspot {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  border-radius: 50%;

    /* zum Debuggen / Finden der Positionen */
  background: rgba(255, 0, 0, 0.35);
  border: 2px solid red;
}

/* optional: gefundene Spots kurz sichtbar machen */
.hotspot.found {
  opacity: 0.25;
  background: rgba(0, 200, 0, 0.5);
}
</style>
