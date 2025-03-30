<script setup>
defineProps({
  page: {
    type: Number,
    required: false,
    default: 1
  },
  pages: {
    type: Array,
    required: true,
    default: []
  },
  lastPage: {
    type: [Number, null],
    required: true,
    default: null
  },
  handlePageClick: {
    type: Function,
    required: true
  },
})


</script>

<template>
  <div class="min-w-[150px] flex items-center justify-between gap-3">
    <div class="flex items-center justify-between gap-3 w-[50%]">
      <p
        v-for="p in pages"
        :key="p"
        :class="['select-none cursor-pointer transition duration-300 ease border-purple-500', +page === +p ? 'border-b-2' : '']"
        @click="handlePageClick(p)"
      >
        {{ p }}
      </p>
      <p class="select-none">...</p>
      <p
        class="cursor-pointer select-none"
        @click="handlePageClick(lastPage)"
      >
        {{ lastPage }}
      </p>
    </div>
    <div class="ml-auto flex items-center gap-3">
      <Button
        :icon="['fas', 'chevron-left']"
        class="py-2 px-3"
        iconSize="text-[8px]"
        @click="handlePageClick(1)"
      />
      <Button
        :icon="['fas', 'chevron-right']"
        class="py-2 px-3"
        iconSize="text-[8px]"
        @click="handlePageClick(lastPage)"
      />
    </div>

  </div>
</template>