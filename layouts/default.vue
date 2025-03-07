<template>
  <div class="">
    <SidebarProvider>
      <div class="flex min-h-screen w-full">
        <Sidebar>
          <SidebarContent>
            <SidebarGroup
              v-for="item in nav"
              :key="item.title"
            >
              <SidebarGroupLabel v-if="item.title">{{ item.title }}</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem
                    v-for="subItem in item.items"
                    :key="subItem.label"
                  >
                    <SidebarMenuButton as-child>
                      <NuxtLink :to="subItem.href">{{ subItem.label }}</NuxtLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
        <main class="flex-1">
          <slot />
        </main>
      </div>
    </SidebarProvider>
  </div>
</template>

<script setup lang="ts">
  import { SidebarProvider, Sidebar } from '~/components/ui/sidebar'

  const { nav } = useAppConfig()
</script>
