<script setup>
import Stepper from "primevue/stepper";
import StepList from "primevue/steplist";
import StepPanels from "primevue/steppanels";
import StepItem from "primevue/stepitem";
import Step from "primevue/step";
import StepPanel from "primevue/steppanel";
import Button from "primevue/button";
import Card from "primevue/card";
import { useRouter } from "vue-router";

const router = useRouter();

const props = defineProps({
  message: {
    type: String,
    default: "No message received",
  },
});

// Bilder für den E-Mail-Test
const EmailImages = [
  "/src/img/Emails/patrick.jpg",
  "/src/img/Emails/Email.webp",
];

// Koordinaten relativ (0–1) zur Bildbreite/-höhe für den E-Mail-Test
const emailSpots = [
  [
    // image 1
    { id: 1, x: 0.22, y: 0.3, r: 0.03 },
    { id: 2, x: 0.55, y: 0.48, r: 0.04 },
    { id: 3, x: 0.8, y: 0.72, r: 0.035 },
  ],
  [
    // image 2
    { id: 4, x: 0.3, y: 0.4, r: 0.03 },
    { id: 5, x: 0.6, y: 0.5, r: 0.04 },
    { id: 6, x: 0.75, y: 0.65, r: 0.035 },
  ],
];

// selbes für den Shopping-Test
const ShoppingImages = [
  "/src/img/Shopping/shopping1.webp",
  "/src/img/Shopping/shopping2.webp",
];

const shoppingSpots = [
  [
    // image 1
    { id: 1, x: 0.25, y: 0.35, r: 0.03 },
    { id: 2, x: 0.5, y: 0.55, r: 0.04 },
    { id: 3, x: 0.78, y: 0.7, r: 0.035 },
  ],
  [
    // image 2
    { id: 4, x: 0.28, y: 0.38, r: 0.03 },
    { id: 5, x: 0.58, y: 0.52, r: 0.04 },
    { id: 6, x: 0.73, y: 0.68, r: 0.035 },
  ],
];

const CarrierImages = [
  "/src/img/Carrier/carrier1.webp",
  "/src/img/Carrier/carrier2.webp",
];

const carrierSpots = [
  [
    // image 1
    { id: 1, x: 0.2, y: 0.4, r: 0.03 },
    { id: 2, x: 0.52, y: 0.5, r: 0.04 },
    { id: 3, x: 0.77, y: 0.73, r: 0.035 },
  ],
  [
    // image 2
    { id: 4, x: 0.3, y: 0.45, r: 0.03 },
    { id: 5, x: 0.6, y: 0.55, r: 0.04 },
    { id: 6, x: 0.8, y: 0.7, r: 0.035 },
  ],
];

const hotspotStyle = (spot) => ({
  left: spot.x * 100 + "%",
  top: spot.y * 100 + "%",
  width: spot.r * 2 * 100 + "%",
  height: spot.r * 2 * 100 + "%",
  transform: "translate(-50%, -50%)",
  color: "red",
});

const onSpotClick = (spot) => {
  console.log(`Spot ${spot.id} clicked!`);

  // hier könntest du zusätzlich noch ein Event feuern,
  // eine Erklärung anzeigen usw.
};
</script>

<template>
  <p class="text-center rubik-glitch mt-3 mb-3" style="font-size: 350%">
    Current Test: {{ message }}
  </p>

  <Card class="mx-8">
    <template #content>
      <Stepper value="1" linear>
        <StepItem value="1">
          <Step>Introduction</Step>
          <StepPanel v-slot="{ activateCallback }">
            <div class="h-48">
              <p>
                Before beginning the Test, here are some short and quick Infos
                that are relevant to Tests on this Site:
              </p>
              <h4>How the Tests works</h4>
              <p>
                You, the user, will be shown a list of Images below in
                sequential order, where they look like seeminly genuine
                {{ message }}s. However your Task is to find all the Mistakes
                that are hidden inside.
              </p>
              <h4>the rules</h4>
              <ul>
                <li>
                  There is no Time-Limit, so take your time and try to find all
                  the clues
                </li>
                <li>
                  Found Mistakes wont be shown/revealed during the test, but
                  spamming the entire Image is heavily discoured for your own
                  learning expierence
                </li>
                <li>you can always go back to previous Images!</li>
                <li>
                  after you have finished the test, on the homepage, there will
                  be a "solution" with all the implemented "mistakes". (But we
                  still recommend you finding them yourself :) )
                </li>
              </ul>
            </div>
            <div class="py-6">
              <Button label="Start the Test" @click="activateCallback('2')" />
            </div>
          </StepPanel>
        </StepItem>
        <div v-if="message === 'Email'">
          <div v-for="(subspots, subIndex) in emailSpots" :key="subIndex">
            <StepItem :value="'' + (subIndex + 2)">
              <Step>E-mail Image {{ subIndex + 1 }}</Step>
              <StepPanel v-slot="{ activateCallback }">
                <div class="flex flex-col h-48">
                  <!--image zum anklicken-->
                  <div ref="wrapper" class="image-wrapper mx-8">
                    <img :src="EmailImages[subIndex]" alt="" class="image" />

                    <!-- unsichtbare Klickbereiche -->
                    <div
                      v-for="spot in subspots"
                      :key="spot.id"
                      class="hotspot"
                      :style="hotspotStyle(spot)"
                      @click="onSpotClick(spot)"
                    />
                  </div>
                </div>
                <div class="flex py-6 gap-2">
                  <Button
                    label="Back"
                    severity="secondary"
                    @click="activateCallback('' + (subIndex + 1))"
                  />
                  <div v-if="subIndex + 2 == subspots.length">
                    <Button
                      label="Finish Test"
                      @click="router.push({ name: 'home' })"
                    />
                  </div>
                  <div v-else>
                    <Button
                      label="Next"
                      @click="activateCallback('' + (subIndex + 3))"
                    />
                  </div>
                </div>
              </StepPanel>
            </StepItem>
          </div>
        </div>
        <div v-else-if="message === 'Shopping'">
          <div v-for="(subspots, subIndex) in shoppingSpots" :key="subIndex">
            <StepItem :value="'' + (subIndex + 2)">
              <Step>Shopping Image {{ subIndex + 1 }}</Step>
              <StepPanel v-slot="{ activateCallback }">
                <div class="flex flex-col h-48">
                  <!--image zum anklicken-->
                  <div ref="wrapper" class="image-wrapper mx-8">
                    <img :src="EmailImages[subIndex]" alt="" class="image" />

                    <!-- unsichtbare Klickbereiche -->
                    <div
                      v-for="spot in subspots"
                      :key="spot.id"
                      class="hotspot"
                      :style="hotspotStyle(spot)"
                      @click="onSpotClick(spot)"
                    />
                  </div>
                </div>
                <div class="flex py-6 gap-2">
                  <Button
                    label="Back"
                    severity="secondary"
                    @click="activateCallback('' + (subIndex + 1))"
                  />
                  <div v-if="subIndex + 2 == subspots.length">
                    <Button
                      label="Finish Test"
                      @click="router.push({ name: 'home' })"
                    />
                  </div>
                  <div v-else>
                    <Button
                      label="Next"
                      @click="activateCallback('' + (subIndex + 3))"
                    />
                  </div>
                </div>
              </StepPanel>
            </StepItem>
          </div>
        </div>
        <div v-else-if="message === 'Carrier'">
          <div v-for="(subspots, subIndex) in carrierSpots" :key="subIndex">
            <StepItem :value="'' + (subIndex + 2)">
              <Step>Carrier Image {{ subIndex + 1 }}</Step>
              <StepPanel v-slot="{ activateCallback }">
                <div class="flex flex-col h-48">
                  <!--image zum anklicken-->
                  <div ref="wrapper" class="image-wrapper mx-8">
                    <img :src="EmailImages[subIndex]" alt="" class="image" />

                    <!-- unsichtbare Klickbereiche -->
                    <div
                      v-for="spot in subspots"
                      :key="spot.id"
                      class="hotspot"
                      :style="hotspotStyle(spot)"
                      @click="onSpotClick(spot)"
                    />
                  </div>
                </div>
                <div class="flex py-6 gap-2">
                  <Button
                    label="Back"
                    severity="secondary"
                    @click="activateCallback('' + (subIndex + 1))"
                  />
                  <div v-if="subIndex + 2 == subspots.length">
                    <Button
                      label="Finish Test"
                      @click="router.push({ name: 'home' })"
                    />
                  </div>
                  <div v-else>
                    <Button
                      label="Next"
                      @click="activateCallback('' + (subIndex + 3))"
                    />
                  </div>
                </div>
              </StepPanel>
            </StepItem>
          </div>
        </div>
      </Stepper>
    </template>
  </Card>
</template>

<style scoped>
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
}

.silkscreen-force {
  font-family: "Silkscreen", system-ui, -apple-system, BlinkMacSystemFont,
    sans-serif;
}
</style>
