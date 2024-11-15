<script setup>
import { ref } from 'vue';
import { Button, Input } from '@components';
defineProps({
  handleSignUp: { type: Function },
  handleChangeMode: { type: Function }
})

const login = ref('');
const password = ref('');
const confirm_password = ref('');
const gender = ref(0);
</script>

<template>
  <form @submit.prevent="handleLogin" class="w-1/2 flex flex-col justify-between p-12">
    <div class="flex flex-col gap-2">
      <div class="flex items-center justify-center">
        <img
          src="/pics/logo_dark.svg"
          class="w-12"
        />
      </div>
      <h1 class="text-4xl font-semibold text-center">
        Sign Out
      </h1>
    </div>

    <div class="flex flex-col gap-4">
      <div>
        <label for="login" class="block text-sm font-medium">
          Login
        </label>
        <Input
          id="login"
          type="login"
          v-model="login"
          placeholder="username"
          required
        />
      </div>

      <div>
        <label for="password" class="block text-sm font-medium">Password</label>
        <Input
          id="password"
          type="password"
          v-model="password"
          placeholder="******"
          required
        />
      </div>

      <div>
        <label for="confirm_password" class="block text-sm font-medium">Confirm password</label>
        <Input
          id="confirm_password"
          type="password"
          v-model="confirm_password"
          placeholder="******"
          required
        />
      </div>
    </div>

    <div class="flex items-center gap-3">
      <label>
        <input type="radio" v-model="gender" :value="0"> Мужчина
      </label>
      <label>
        <input type="radio" v-model="gender" :value="1"> Женщина
      </label>
    </div>

    <Button
      type="submit"
      text="Submit"
      className="rounded-lg w-full bg-blue-500 focus:ring-2 focus:ring-blue-700 focus:ring-offset-2 hover:bg-blue-700"
      @click="async () => {
        await handleSignUp(login, password, confirm_password, gender);
        handleChangeMode('signin');
      }"
    />

    <div class="flex flex-col">
      <p class="text-sm text-center text-gray-600">
        Forgot your password?
        <a href="#" class="text-blue-600 hover:underline">Restore access</a>
      </p>
      <p class="text-sm text-center text-gray-600">
        Already has an account?
      <a
        @click="handleChangeMode('signin')"
        href="#" class="text-blue-600 hover:underline"
      >
        Sign Up
      </a>
      </p>
    </div>
  </form>
</template>

<style scoped>
</style>
