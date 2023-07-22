<script setup lang="ts">
const token = useCookie("matoke");
token.value = "9ed19168-5657-4c5c-b132-1f8ddf385f87";
const query = gql`
  query ($measurements: [MetricMeasurement!]!) {
    estimatedUsage(measurements: $measurements) {
      projectId
      estimatedValue
      measurement
    }
  }
`;
const variables = {
  measurements: ["CPU_USAGE", "DISK_USAGE_GB"],
};
const { data, error, pending } = await useAsyncQuery(query, variables);
</script>
<template>
  <div>
    <button @click="getCode()">get code</button>
    <!-- <p v-if="data">{{ data.estimatedUsage[0].projectId }}</p> -->
    <!-- <p v-if="error">{{ error }}</p> -->
    <input type="text" v-model="otP" />
  </div>
</template>
