<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button variant="outline">
        <IconSun class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <IconMoon
          class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
        />
        <span class="sr-only">Toggle theme</span>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuItem @click="colorMode.preference = 'light'">Light</DropdownMenuItem>
      <DropdownMenuItem @click="colorMode.preference = 'dark'">Dark</DropdownMenuItem>
      <DropdownMenuItem @click="colorMode.preference = 'system'">System</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
  <div>12443</div>
  <Button>Click me</Button>
</template>

<script lang="ts" setup>
  const colorMode = useColorMode()
  const appConfig = useAppConfig()
  console.log(appConfig)
  // const { data } = await useFetch('/api/getDB', {
  //   server: false
  // })
  // console.log(data)
</script>
