<script>
import { ref } from 'vue';

const search = ref();
</script>

<template>
  <div class="min-h-[94vh] flex text-xs">
    <div class="w-1/4 bg-red-100 flex flex-col gap-3 px-4 py-4">
      <Search
        v-model="search"
      />
      <div class="flex flex-col">
        <div class="flex items-center gap-2 border-t border-r border-l border-black py-2 px-2 last:border-b">
          <div class="bg-white rounded-full min-w-8 min-h-8 border border-black"/>
          <div class="flex flex-col w-full">
            <div class="flex items-center justify-between">
              <h1 class="text-sm font-bold">Name</h1>
              <p>3h</p>
            </div>
            <div class="flex items-center justify-between">
              <p>last_message</p>
              <p class="text-[8px] w-4 h-4 bg-blue-700 text-white rounded-full flex items-center justify-center">2</p>
            </div>
          </div>
        </div>
        <div class="flex items-center gap-2 border-t border-r border-l border-black py-2 px-2 last:border-b">
          <div class="bg-white rounded-full min-w-8 min-h-8 border border-black"/>
          <div class="flex flex-col w-full">
            <div class="flex items-center justify-between">
              <h1 class="text-sm font-bold">Name</h1>
              <p>3h</p>
            </div>
            <div class="flex items-center justify-between">
              <p>last_message</p>
              <p class="text-[8px] w-4 h-4 bg-blue-700 text-white rounded-full flex items-center justify-center">2</p>
            </div>
          </div>
        </div>
        <div class="flex items-center gap-2 border-t border-r border-l border-black py-2 px-2 last:border-b">
          <div class="bg-white rounded-full min-w-8 min-h-8 border border-black"/>
          <div class="flex flex-col w-full">
            <div class="flex items-center justify-between">
              <h1 class="text-sm font-bold">Name</h1>
              <p>3h</p>
            </div>
            <div class="flex items-center justify-between">
              <p>last_message</p>
              <p class="text-[8px] w-4 h-4 bg-blue-700 text-white rounded-full flex items-center justify-center">2</p>
            </div>
          </div>
        </div>
        <div class="flex items-center gap-2 border-t border-r border-l border-black py-2 px-2 last:border-b">
          <div class="bg-white rounded-full min-w-8 min-h-8 border border-black"/>
          <div class="flex flex-col w-full">
            <div class="flex items-center justify-between">
              <h1 class="text-sm font-bold">Name</h1>
              <p>3h</p>
            </div>
            <div class="flex items-center justify-between">
              <p>last_message</p>
              <p class="text-[8px] w-4 h-4 bg-blue-700 text-white rounded-full flex items-center justify-center">2</p>
            </div>
          </div>
        </div>
        <div class="flex items-center gap-2 border-t border-r border-l border-black py-2 px-2 last:border-b">
          <div class="bg-white rounded-full min-w-8 min-h-8 border border-black"/>
          <div class="flex flex-col w-full">
            <div class="flex items-center justify-between">
              <h1 class="text-sm font-bold">Name</h1>
              <p>3h</p>
            </div>
            <div class="flex items-center justify-between">
              <p>last_message</p>
              <p class="text-[8px] w-4 h-4 bg-blue-700 text-white rounded-full flex items-center justify-center">2</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-2/4 bg-green-100">
      <div class="h-[10%] bg-neutral-600">

      </div>
      <div class="h-[80%] bg-neutral-700">

      </div>
      <div class="h-[10%] bg-neutral-800">

      </div>
    </div>
    <div class="w-1/4 bg-blue-100 flex flex-col">

    </div>
  </div>
</template>

<style lang="">

</style>
