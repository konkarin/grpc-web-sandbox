<script setup lang="ts">
import { ref } from 'vue';

const res = ref('hello')
</script>

<template>
  <h1>
    grpc sandobox
  </h1>
  <div>
    {{ res }}
  </div>
</template>
