<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthApi } from '@api';
const { signin } = useAuthApi();

const props = defineProps({
  handleChangeMode: { type: Function }
})

const router = useRouter();

const login = ref('');
const password = ref('');

const handleLogIn = async () => {
  const status = await signin(login.value, password.value);
  status === 200 && router.push('/');
};
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
        Sign In
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
    </div>

    <Button
      type="submit"
      text="Submit"
      class="rounded-lg w-full bg-blue-500 focus:ring-2 focus:ring-blue-700 focus:ring-offset-2 hover:bg-blue-700"
      @click="handleLogIn"
    />

    <div class="flex flex-col">
      <p class="text-sm text-center text-gray-600">
        Forgot your password?
        <a href="#" class="text-blue-600 hover:underline">Restore access</a>
      </p>
      <p class="text-sm text-center text-gray-600">
        Don't have account yet?
      <a
        @click="handleChangeMode('signup')"
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
