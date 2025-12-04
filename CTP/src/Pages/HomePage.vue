<script setup>
import Button from "primevue/button";
import Fluid from "primevue/fluid";
import Card from "primevue/card";
import Image from "primevue/image";
import Divider from "primevue/divider";
import { ref } from "vue";

import { useRouter } from "vue-router";

const router = useRouter();

var completedmail = ref(false);
var foundMailError = ref(0);
var foundMailMax = ref(20);

const goToEmailCourse = (input) => {
  router.push({ name: "test", params: { message: "" + input } });
};

var completedShopping = ref(false);
var foundShoppingError = ref(0);
var foundShoppingMax = ref(20);

var completedCarrier = ref(false);
var foundCarrierError = ref(0);
var foundCarrierMax = ref(20);
</script>

<template>
  <Fluid>
    <Card class="shadow-3 card-bg mx-8">
      <template #content>
        <div style="text-align: center">
          <h3 class="m-0">Welcome to:</h3>
          <p class="m-0 rubik-glitch" style="font-size: 350%">
            Catch the Phish?!
          </p>
          <p class="m-0 mb-3">learn to distrust</p>
        </div>

        <div class="grid">
          <div class="col-12 sm:col-12 md:col-6">
            <Card
              style="overflow: hidden"
              class="shadow-3 hover:shadow-8 transition-duration-500 transition-property:all"
            >
              <template #header>
                <img
                  src="../../src/img/Email.webp"
                  alt="email"
                  class="card-image"
                />
              </template>
              <template #title>
                <p class="rubik-glitch m-0">Phishing-Mails</p>
              </template>
              <template #subtitle>
                <div v-if="!completedmail">
                  <p class="m-0">currently not completed</p>
                </div>
                <div v-else>
                  <p class="m-0">
                    currently {{ foundMailError }} out of
                    {{ foundMailMax }} Errors found.
                  </p>
                </div>
              </template>
              <template #content>
                <p class="m-0">
                  Here is where everything always start, the inticing but
                  malicious E-Mail where most people get their information
                  stolen. Are you any better?
                </p>
              </template>
              <template #footer>
                <Button
                  label="Try Course"
                  severity="Success"
                  raised
                  @click="goToEmailCourse('Email')"
                />
              </template>
            </Card>
          </div>
          <div class="col-12 sm:col-12 md:col-6">
            <Card
              style="overflow: hidden"
              class="shadow-3 hover:shadow-8 transition-duration-500 transition-property:all"
            >
              <template #header>
                <img
                  src="../../src/img/Shopping.webp"
                  alt="email"
                  class="card-image"
                />
              </template>
              <template #title
                ><p class="rubik-glitch m-0">Fake Shopping Sites</p></template
              >
              <template #subtitle>
                <div v-if="!completedShopping">
                  <p class="m-0">currently not completed</p>
                </div>
                <div v-else>
                  <p class="m-0">
                    currently {{ foundShoppingError }} out of
                    {{ foundShoppingMax }} Errors found.
                  </p>
                </div>
              </template>
              <template #content>
                <p class="m-0">
                  Nowadays almost everyone that uses a computer can shop online.
                  The question remains, are you sure you are on the right page?
                </p>
              </template>
              <template #footer>
                <Button
                  label="Try Course"
                  severity="Success"
                  raised
                  @click="goToEmailCourse('Shopping')"
                />
              </template>
            </Card>
          </div>
          <div class="col-12 sm:col-12 md:col-6">
            <Card
              style="overflow: hidden"
              class="shadow-3 hover:shadow-8 transition-duration-500 transition-property:all"
            >
              <template #header>
                <img
                  src="../../src/img/postal.webp"
                  alt="email"
                  class="card-image"
                />
              </template>
              <template #title
                ><p class="rubik-glitch m-0">Fake Carrier Sites</p>
              </template>
              <template #subtitle>
                <div v-if="!completedCarrier">
                  <p class="m-0">currently not completed</p>
                </div>
                <div v-else>
                  <p class="m-0">
                    currently {{ foundCarrierError }} out of
                    {{ foundCarrierMax }} Errors found.
                  </p>
                </div>
              </template>
              <template #content>
                <p class="m-0">
                  Getting your package on time is like christmas for adults. But
                  are you sure that the mail you got is really from santa?
                </p>
              </template>
              <template #footer>
                <Button
                  label="Try Course"
                  severity="Success"
                  raised
                  @click="goToEmailCourse('Carrier')"
                />
              </template>
            </Card>
          </div>
        </div>
      </template>
    </Card>

    <Divider class="my-4">
      <p>Credits</p>
    </Divider>
    <Card class="shadow-5 card-bg">
      <template #content>
        <div style="text-align: center">
          <h3 class="m-0 mb-3">Creators of the Project:</h3>
          <div>
            <div class="grid">
              <div class="col-6">
                <Card
                  class="shadow-3 hover:shadow-5 transition-duration-500 transition-property:all"
                >
                  <template #title>
                    <p class="m-0">Klemens Ribis</p>
                  </template>
                  <template #subtitle>
                    <p class="m-0">Impact Navigator</p>
                  </template>
                  <template #content>
                    <p class="m-0">
                      Stnr: 12519650 <br />
                      @:
                      <a href="mailto:e12519650@student.tuwien.ac.at"
                        >e12519650@student.tuwien.ac.at</a
                      >
                    </p>
                  </template>
                </Card>
              </div>
              <div class="col-6">
                <Card
                  class="shadow-3 hover:shadow-5 transition-duration-500 transition-property:all"
                >
                  <template #title>
                    <p class="m-0">Stefan Tassev</p>
                  </template>
                  <template #subtitle>
                    <p class="m-0">Lead Developer</p>
                  </template>
                  <template #content>
                    <p class="m-0">
                      Stnr: 12524611 <br />
                      @:
                      <a href="mailto:e12524611@student.tuwien.ac.at"
                        >e12524611@student.tuwien.ac.at</a
                      >
                    </p>
                  </template>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </template>
    </Card>
  </Fluid>
</template>

<style scoped>
.card-image {
  width: 100%;
  min-width: 13rem;
  height: 14rem;
  object-fit: cover;
  display: block;
}

.card-bg {
  background-color: #e0feff;
}
</style>
