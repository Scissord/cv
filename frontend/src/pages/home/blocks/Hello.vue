<script setup>
import { Button } from "@components"
import { useModalStore } from '@store';
import Dick from './Dick';
const modal = useModalStore()

const handleOpenModal = () => {
  modal.show({
    title: 'Это заголовок модалки',
    children: Dick
  })
};

</script>

<template>
  <div class="h-[94vh] flex items-center justify-center bg-gradient-to-r from-vue to-react dark:from-green-950 dark:to-blue-950"
  >
    <div class="container mx-auto flex items-center">
      <div class="flex justify-center w-1/2 text-black dark:text-white">
        <div class="flex flex-col gap-3">
          <h1 class="text-4xl font-bold">
            Welcome to my CV
            <span class="text-4xl">
              👋👋👋
            </span> <br/>
            Nurdaulet Kumarbekov
          </h1>
          <p class="text-2xl">
            I created this site, to show you <br/>
            my skills in Web Developing. Please  <br/>
            checkout all projects. With passion  <br/>
            for learning and creating.
          </p>
          <Button
            text="Open"
            className="bg-red-500 focus:ring-2 focus:ring-red-700 focus:ring-offset-2 hover:bg-red-700"
            @click="handleOpenModal"
          />
        </div>
      </div>
      <div class="w-1/2 h-full flex items-center justify-center">
        <img
          src="/pics/developer.svg"
          class="w-[100%]"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
