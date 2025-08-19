<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const route = useRoute()

const items = computed<NavigationMenuItem[]>(() => [{
    label: 'Las 3 revoluciones',
    to: '/revoluciones',
    active: route.path.startsWith('/revoluciones')
}, {
    label: 'Los Diamantes',
    to: '/diamantes',
    active: route.path.startsWith('/diamantes')
}, {
    label: 'Campaña',
    to: '/campania',
    active: route.path.startsWith('/campania')
},])
</script>

<template>
    <UHeader>
        <template #title>
            <Logo class="h-6 w-auto" />
        </template>
        <UNavigationMenu :items="items" />
        <template #body>

            <UNavigationMenu :items="items" orientation="vertical" />
        </template>
    </UHeader>
</template>
