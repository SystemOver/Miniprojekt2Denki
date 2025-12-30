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

// image imports so that the build actually aknowledges them
// Emails
import GMAIL1 from "@/img/Emails/GMAIL1.png";
import GMAIL2 from "@/img/Emails/GMAIL2.png";
import GMAIL3 from "@/img/Emails/GMAIL3.png";
import GMAIL4 from "@/img/Emails/GMAIL4.png";
import ABV1 from "@/img/Emails/ABV1.png";
import ABV2 from "@/img/Emails/ABV2.png";
import OUTLOOK from "@/img/Emails/OUTLOOK.png";
import OUTLOOK2 from "@/img/Emails/OUTLOOK2.png";

// Shopping
import AMZ1 from "@/img/Shopping/amazon1.webp";
import AMZ2 from "@/img/Shopping/amazon2.webp";
import APPLE1 from "@/img/Shopping/APPLE1.png";
import DIRNDL1 from "@/img/Shopping/Dirndl1.png";
import EBAY1 from "@/img/Shopping/ebay1.webp";
import LIDL1 from "@/img/Shopping/LIDL1.webp";

// Carrier
import DPD1 from "@/img/Carrier/DPD1.jpg";
import FEDEX1 from "@/img/Carrier/FEDEX1.jpg";
import UPS1 from "@/img/Carrier/UPS1.jpg";
import UPS2 from "@/img/Carrier/UPS2.png";

const router = useRouter();

const props = defineProps({
  message: {
    type: String,
    default: "No message received",
  },
});

const EmailImages = [
  GMAIL1,
  GMAIL2,
  GMAIL3,
  GMAIL4,
  ABV1,
  ABV2,
  OUTLOOK,
  OUTLOOK2,
];

/* Bilder für den E-Mail-Test
const EmailImages = [
  "/Miniprojekt2Denki/src/img/Emails/GMAIL1.png", //scam 1
  "/Miniprojekt2Denki/src/img/Emails/GMAIL2.png", //scam 2
  "/Miniprojekt2Denki/src/img/Emails/GMAIL3.png", //echt 3
  "/Miniprojekt2Denki/src/img/Emails/GMAIL4.png", //scam 4
  "/Miniprojekt2Denki/src/img/Emails/ABV1.png", //echt 5
  "/Miniprojekt2Denki/src/img/Emails/ABV2.png", //scam 6
  "/Miniprojekt2Denki/src/img/Emails/OUTLOOK.png", //scam 7
  "/Miniprojekt2Denki/src/img/Emails/OUTLOOK2.png", //scam 8
];
*/

// x=> rechts/links
// y=> oben/unten

// template:
// { id: 5, x: 0.5, y: 0.5, w: 0.1, h: 0.1 },

// Koordinaten relativ (0–1) zur Bildbreite/-höhe für den E-Mail-Test
const emailSpots = [
  [
    // image 1
    { id: 1, x: 0.27, y: 0.14, w: 0.12, h: 0.03 }, // emails adress
    { id: 2, x: 0.53, y: 0.26, w: 0.08, h: 0.04 }, // icloud logo
    { id: 3, x: 0.35, y: 0.5, w: 0.05, h: 0.03 }, // icloud space typo
    { id: 4, x: 0.53, y: 0.65, w: 0.15, h: 0.04 }, // payment button
    { id: 5, x: 0.25, y: 0.07, w: 0.05, h: 0.03 }, // weird timecode
  ],
  [
    // image 2
    { id: 6, x: 0.55, y: 0.09, w: 0.2, h: 0.03 }, // email adress
    { id: 7, x: 0.36, y: 0.33, w: 0.07, h: 0.025 }, // [Nutzername] missing
    { id: 8, x: 0.4, y: 0.44, w: 0.12, h: 0.05 }, // Gewinnspiel
    { id: 9, x: 0.52, y: 0.85, w: 0.13, h: 0.05 }, // jetzt sichern knopf
  ],
  [
    // image 3 alles fine also keine fehler
  ],
  [
    // image 4
    { id: 10, x: 0.25, y: 0.12, w: 0.1, h: 0.03 }, // email adress
    { id: 11, x: 0.385, y: 0.32, w: 0.04, h: 0.04 }, // server is not in plural
    { id: 12, x: 0.33, y: 0.72, w: 0.04, h: 0.03 }, // view profile is basic link
  ],
  [
    // image 5 alles fine also keine fehler
  ],
  [
    // image 6
    { id: 13, x: 0.14, y: 0.1, w: 0.13, h: 0.06 }, // email adress
    { id: 14, x: 0.3, y: 0.3, w: 0.1, h: 0.05 }, // broken text
    { id: 14, x: 0.5, y: 0.76, w: 0.3, h: 0.05 }, // broken text
    { id: 14, x: 0.25, y: 0.96, w: 0.06, h: 0.03 }, // broken text
    { id: 15, x: 0.39, y: 0.85, w: 0.2, h: 0.03 }, // wierder link
  ],
  [
    // image 7
    { id: 16, x: 0.51, y: 0.25, w: 0.45, h: 0.06 }, //chagpt prompt
    { id: 16, x: 0.51, y: 0.86, w: 0.45, h: 0.045 }, //chagpt prompt
    { id: 17, x: 0.21, y: 0.035, w: 0.038, h: 0.02 }, // wierdes datum
    { id: 18, x: 0.29, y: 0.13, w: 0.06, h: 0.03 }, // email adresse
  ],
  [
    // image 8
    { id: 19, x: 0.45, y: 0.4, w: 0.08, h: 0.03 }, // [Family name]
    { id: 19, x: 0.11, y: 0.115, w: 0.05, h: 0.015 }, // [Family name]
    { id: 19, x: 0.06, y: 0.04, w: 0.05, h: 0.03 }, // [Family name]
    { id: 20, x: 0.15, y: 0.15, w: 0.09, h: 0.015 }, // CC macht keinen sinn
    { id: 21, x: 0.54, y: 0.675, w: 0.08, h: 0.03 }, // fehler im projektname
    { id: 22, x: 0.605, y: 0.79, w: 0.08, h: 0.03 }, // download button
  ],
];

const ShoppingImages = [AMZ1, AMZ2, APPLE1, DIRNDL1, EBAY1, LIDL1];

/*
// selbes für den Shopping-Test
const ShoppingImages = [
  "/Miniprojekt2Denki/src/img/Shopping/amazon1.webp",
  "/Miniprojekt2Denki/src/img/Shopping/amazon2.webp",
  "/Miniprojekt2Denki/src/img/Shopping/APPLE1.png",
  "/Miniprojekt2Denki/src/img/Shopping/Dirndl1.png",
  "/Miniprojekt2Denki/src/img/Shopping/ebay1.webp",
  "/Miniprojekt2Denki/src/img/Shopping/LIDL1.webp",
];
*/

const shoppingSpots = [
  [
    // image 1
    { id: 1, x: 0.45, y: 0.09, w: 0.35, h: 0.03 }, // link
    { id: 2, x: 0.4, y: 0.62, w: 0.11, h: 0.03 }, // "secure server"
    { id: 3, x: 0.51, y: 0.86, w: 0.07, h: 0.03 }, // doppelte password help
  ],
  [
    // image 2
    { id: 4, x: 0.25, y: 0.03, w: 0.2, h: 0.03 }, // link
  ],
  [
    // image 3
    { id: 5, x: 0.29, y: 0.08, w: 0.05, h: 0.03 }, // Watch & TV link?
    { id: 6, x: 0.58, y: 0.08, w: 0.05, h: 0.03 }, // homepod link?
    { id: 7, x: 0.82, y: 0.49, w: 0.04, h: 0.02 }, // Schwarzer Rabbat
    { id: 8, x: 0.85, y: 0.6, w: 0.15, h: 0.08 }, // McBook
  ],
  [
    // image 4 echt
  ],
  [
    // image 5
    { id: 9, x: 0.29, y: 0.03, w: 0.15, h: 0.03 }, // link
    { id: 10, x: 0.4, y: 0.52, w: 0.05, h: 0.03 }, // stay signed in default
    { id: 11, x: 0.75, y: 0.92, w: 0.06, h: 0.06 }, // no ssl certificate, therefore (i) icon top left
  ],
  [
    // image 6
    { id: 12, x: 0.05, y: 0.03, w: 0.05, h: 0.03 }, // link
    { id: 13, x: 0.46, y: 0.07, w: 0.05, h: 0.03 }, // Heute Ausverkauf. (bro das ist kein deutsch)
    { id: 14, x: 0.2, y: 0.95, w: 0.05, h: 0.03 }, // insane preise
    { id: 14, x: 0.4, y: 0.95, w: 0.05, h: 0.03 }, // insane preise
    { id: 14, x: 0.6, y: 0.95, w: 0.05, h: 0.03 }, // insane preise
    { id: 14, x: 0.8, y: 0.94, w: 0.05, h: 0.02 }, // insane preise
    { id: 15, x: 0.8, y: 0.9, w: 0.05, h: 0.02 }, // inkonsitente item description
  ],
];

const CarrierImages = [DPD1, FEDEX1, UPS1, UPS2];

/*
const CarrierImages = [
  "/Miniprojekt2Denki/src/img/Carrier/DPD1.jpg",
  "/Miniprojekt2Denki/src/img/Carrier/FEDEX1.jpg",
  "/Miniprojekt2Denki/src/img/Carrier/UPS1.jpg",
  "/Miniprojekt2Denki/src/img/Carrier/UPS2.png",
];
*/

const carrierSpots = [
  [
    // image 1
    { id: 1, x: 0.8, y: 0.02, w: 0.2, h: 0.02 }, // tracking id ist nicht dieselbe
    { id: 1, x: 0.7, y: 0.656, w: 0.2, h: 0.02 }, // tracking id ist nicht dieselbe
    { id: 2, x: 0.84, y: 0.092, w: 0.05, h: 0.02 }, //wierdes spacing
  ],
  [
    // image 2
    { id: 3, x: 0.5, y: 0.55, w: 0.085, h: 0.03 }, // "click here to download" 💀
    { id: 4, x: 0.385, y: 0.55, w: 0.03, h: 0.03 }, // (R) funktioniert nicht so
    { id: 4, x: 0.05, y: 0.41, w: 0.03, h: 0.03 }, // (R) funktioniert nicht so
    { id: 5, x: 0.35, y: 0.06, w: 0.08, h: 0.03 }, // zwei mal manage account
    { id: 5, x: 0.82, y: 0.01, w: 0.04, h: 0.03 }, // zwei mal manage account
  ],
  [
    // image 3
    { id: 6, x: 0.5, y: 0.73, w: 0.13, h: 0.03 }, // gdpr be like "you cannot force someone to accept no no"
    { id: 7, x: 0.5, y: 0.9, w: 0.3, h: 0.06 }, // niemand wird hier explizit addressiert
    { id: 8, x: 0.28, y: 0.36, w: 0.1, h: 0.04 }, // (R) funktioniert nicht so
  ],
  [
    // image 4
    { id: 9, x: 0.32, y: 0.23, w: 0.12, h: 0.03 }, // welcome to ups website type shi-
    { id: 10, x: 0.12, y: 0.016, w: 0.12, h: 0.02 }, // sketchy link
  ],
];

const hotspotStyle = (spot) => ({
  left: spot.x * 100 + "%",
  top: spot.y * 100 + "%",
  width: spot.w * 2 * 100 + "%",
  height: spot.h * 2 * 100 + "%",
  transform: "translate(-50%, -50%)",
  color: "red",
});

const onSpotClick = (spot, type) => {
  console.log(`Spot ${spot.id} clicked!`);
  switch (type) {
    case "email":
      if (localStorage.getItem("foundEmailSpot" + spot.id) === "true") {
        return; // schon gefunden
      } else {
        localStorage.setItem("foundEmailSpot" + spot.id, "true");
      }
      break;
    case "shopping":
      if (localStorage.getItem("foundShoppingSpot" + spot.id) === "true") {
        return; // schon gefunden
      } else {
        localStorage.setItem("foundShoppingSpot" + spot.id, "true");
      }
      break;
    case "carrier":
      if (localStorage.getItem("foundCarrierSpot" + spot.id) === "true") {
        return; // schon gefunden
      } else {
        localStorage.setItem("foundCarrierSpot" + spot.id, "true");
      }
      break;
  }
};

const finishcourse = (flag) => {
  if (flag === "email") {
    localStorage.setItem("completedEmailCourse", "true");
  } else if (flag === "shopping") {
    localStorage.setItem("completedShoppingCourse", "true");
  } else if (flag === "carrier") {
    localStorage.setItem("completedCarrierCourse", "true");
  }
  router.push({ name: "home" });
};
</script>

<template>
  <div class="grid">
    <div class="lg:col-2 sm:col-0 md:col-0"></div>
    <Card class="lg:col-8 sm:col-12 md:col-12">
      <template #content>
        <p class="text-center rubik-glitch m-0" style="font-size: 350%">
          Current Test: {{ message }}
        </p>
        <Stepper value="1" linear>
          <div v-if="message === 'Email'">
            <StepList>
              <Step value="1">Introduction</Step>
              <Step
                v-for="index in emailSpots.length"
                :value="(index + 1).toString()"
                >Email {{ index }}
              </Step>
            </StepList>
          </div>
          <div v-else-if="message === 'Shopping'">
            <StepList>
              <Step value="1">Introduction</Step>
              <Step
                v-for="index in shoppingSpots.length"
                :value="(index + 1).toString()"
                >Shopping {{ index }}
              </Step>
            </StepList>
          </div>
          <div v-else-if="message === 'Carrier'">
            <StepList>
              <Step value="1">Introduction</Step>
              <Step
                v-for="index in carrierSpots.length"
                :value="(index + 1).toString()"
                >Carrier {{ index }}
              </Step>
            </StepList>
          </div>
          <StepPanels>
            <StepPanel v-slot="{ activateCallback }" value="1">
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
                    There is no Time-Limit, so take your time and try to find
                    all the clues
                  </li>
                  <li>
                    Found Mistakes wont be shown/revealed during the test, but
                    spamming the entire Image is heavily discoured for your own
                    learning expierence
                  </li>
                  <li>you can always go back to previous Images!</li>
                  <li>
                    after you have finished the test, on the homepage, there
                    will be a "solution" with all the implemented "mistakes".
                    (But we still recommend you finding them yourself :) )
                  </li>
                </ul>
              </div>
              <div class="py-6">
                <Button label="Start the Test" @click="activateCallback('2')" />
              </div>
            </StepPanel>
            <div v-if="message === 'Email'">
              <div v-for="(subspots, subIndex) in emailSpots" :key="subIndex">
                <StepPanel
                  v-slot="{ activateCallback }"
                  :value="'' + (subIndex + 2)"
                >
                  <div class="flex flex-col h-48">
                    <!--image zum anklicken-->
                    <div ref="wrapper" class="image-wrapper mx-8">
                      <img
                        :src="EmailImages[subIndex]"
                        alt=""
                        class="image border-round-2xl"
                      />

                      <!-- unsichtbare Klickbereiche -->
                      <div
                        v-for="spot in subspots"
                        :key="spot.id"
                        class="hotspot no-pointer"
                        :style="hotspotStyle(spot)"
                        @click="onSpotClick(spot, 'email')"
                      />
                    </div>
                  </div>
                  <div class="flex py-6 gap-2">
                    <Button
                      label="Back"
                      severity="secondary"
                      @click="activateCallback('' + (subIndex + 1))"
                    />
                    <div v-if="subIndex === emailSpots.length - 1">
                      <Button
                        label="Finish Test"
                        @click="finishcourse('Email')"
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
              </div>
            </div>
            <div v-else-if="message === 'Shopping'">
              <div
                v-for="(subspots, subIndex) in shoppingSpots"
                :key="subIndex"
              >
                <StepPanel
                  v-slot="{ activateCallback }"
                  :value="'' + (subIndex + 2)"
                >
                  <div class="flex flex-col h-48">
                    <!--image zum anklicken-->
                    <div ref="wrapper" class="image-wrapper mx-8">
                      <img
                        :src="ShoppingImages[subIndex]"
                        alt="image "
                        class="image border-round-2xl"
                      />

                      <!-- unsichtbare Klickbereiche -->
                      <div
                        v-for="spot in subspots"
                        :key="spot.id"
                        class="hotspot no-pointer"
                        :style="hotspotStyle(spot)"
                        @click="onSpotClick(spot, 'shopping')"
                      />
                    </div>
                  </div>
                  <div class="flex py-6 gap-2">
                    <Button
                      label="Back"
                      severity="secondary"
                      @click="activateCallback('' + (subIndex + 1))"
                    />
                    <div v-if="subIndex === shoppingSpots.length - 1">
                      <Button
                        label="Finish Test"
                        @click="finishcourse('shopping')"
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
              </div>
            </div>
            <div v-else-if="message === 'Carrier'">
              <div v-for="(subspots, subIndex) in carrierSpots" :key="subIndex">
                <StepPanel
                  v-slot="{ activateCallback }"
                  :value="'' + (subIndex + 2)"
                >
                  <div class="flex flex-col h-48">
                    <!--image zum anklicken-->
                    <div ref="wrapper" class="image-wrapper mx-8">
                      <img
                        :src="CarrierImages[subIndex]"
                        alt=""
                        class="image border-round-2xl"
                      />

                      <!-- unsichtbare Klickbereiche -->
                      <div
                        v-for="spot in subspots"
                        :key="spot.id"
                        class="hotspot no-pointer"
                        :style="hotspotStyle(spot)"
                        @click="onSpotClick(spot, 'carrier')"
                      />
                    </div>
                  </div>
                  <div class="flex py-6 gap-2">
                    <Button
                      label="Back"
                      severity="secondary"
                      @click="activateCallback('' + (subIndex + 1))"
                    />
                    <div v-if="subIndex === carrierSpots.length - 1">
                      <Button
                        label="Finish Test"
                        @click="finishcourse('carrier')"
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
              </div>
            </div>
          </StepPanels>
        </Stepper>
      </template>
    </Card>
  </div>
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
  opacity: 70%;
  cursor: pointer;
  border-radius: 5px;
  /*
  color: red;
  background-color: red;*/
}

.silkscreen-force {
  font-family: "Silkscreen", system-ui, -apple-system, BlinkMacSystemFont,
    sans-serif;
}

.no-pointer {
  cursor: default !important;
}
</style>
