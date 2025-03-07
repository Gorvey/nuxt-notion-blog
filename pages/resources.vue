<template>
  <div class="h-full w-full p-4">
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
      <resources-card
        v-for="item in data"
        :key="item.id"
        :resource="item"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
  definePageMeta({
    layout: 'landing'
  })

  const { data } = await useFetch('/api/notion/database/query', {
    query: {
      id: '12bd7e8859e48054b475d07b44426684'
    }
  })
  console.log(data)
</script>
