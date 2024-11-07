<script setup>
import { ref } from 'vue';

const email = ref('');
const password = ref('');

const handleLogin = () => {
  console.log('Email:', email.value, 'Password:', password.value);
};
</script>

<template>
  <div class="h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white p-8 rounded-lg shadow-md w-[70%] h-[80%] flex">
      <div class="w-1/2 flex items-center justify-center">
        <video src="/video/auth.mp4" muted autoplay loop/>
      </div>

      <form @submit.prevent="handleLogin" class="w-1/2 flex flex-col justify-between">
        <div class="flex items-center justify-center">
          <img
            src="/pics/logo_dark.svg"
            class="w-12 bg-red-100"
          />
        </div>
        <h1 class="text-4xl font-semibold text-center text-black">
          Sign In
        </h1>
        <!-- Email Field -->
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-gray-700">
            Электронная почта
          </label>
          <input
            type="email"
            id="email"
            v-model="email"
            required
            class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Введите email"
          />
        </div>

        <!-- Password Field -->
        <div class="mb-6">
          <label for="password" class="block text-sm font-medium text-gray-700">Пароль</label>
          <input
            type="password"
            id="password"
            v-model="password"
            required
            class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Введите пароль"
          />
        </div>

        <!-- Submit Button -->
        <button
          type="submit"
          class="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Войти
        </button>

        <p class="mt-4 text-sm text-center text-gray-600">
          Забыли пароль?
          <a href="#" class="text-blue-600 hover:underline">Восстановить доступ</a>
        </p>
      </form>
    </div>
  </div>
</template>

<style scoped>
</style>
