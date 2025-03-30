<script setup>
import { ref } from 'vue';
import SignIn from './SignIn.vue';
import SignUp from './SignUp.vue';

const mode = ref('signin');

const handleChangeMode = (val) => {
  mode.value = val;
};
</script>

<template>
  <div class="h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white rounded-xl shadow-md w-[70%] h-[80%] flex">
      <div class="w-1/2 flex items-center justify-center">
        <video src="/video/auth.mp4" muted autoplay loop/>
      </div>
      <SignIn
        v-if="mode === 'signin'"
        :handleChangeMode="handleChangeMode"
      />
      <SignUp
        v-else-if="mode === 'signup'"
        :handleChangeMode="handleChangeMode"
      />
    </div>
  </div>
</template>

<style scoped>
</style>
