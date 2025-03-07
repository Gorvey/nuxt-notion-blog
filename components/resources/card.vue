<template>
  <div class="cursor-pointer overflow-hidden rounded-xl bg-primary-foreground">
    <div class="relative aspect-video w-full overflow-hidden p-2">
      <img
        :src="resource.cover"
        :alt="resource.title"
        class="h-full w-full rounded-xl object-cover"
      />
    </div>
    <div class="p-4 pt-0">
      <div class="mb-2 flex items-center gap-3">
        <div class="relative h-8 w-8 flex-shrink-0">
          <img
            :src="resource.icon || '/placeholder.svg?height=32&width=32'"
            alt=""
            width="32"
            height="32"
            zzzzz
            class="relative rounded-full border border-border/50 shadow-sm"
          />
        </div>
        <h3 class="line-clamp-1 text-lg font-medium">{{ resource.title }}</h3>
      </div>
      <p class="line-clamp-2 text-sm text-muted-foreground">{{ resource.description }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
  defineOptions({
    name: 'ResourcesCard'
  })

  defineProps<{
    resource: Resource
    onClick?: (resource: Resource) => void
  }>()

  const isHovered = ref(false)
</script>
