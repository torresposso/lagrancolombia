<script setup lang="ts">
import type { TimelineItem } from '@nuxt/ui'

const items = ref<TimelineItem[]>([
    {

        title: 'Primera Revolución',
        description: 'Vocación de servicio en medio de la rebeldía. El periodismo como espada.',
        icon: 'i-lucide-rocket'
    },
    {

        title: 'Segunda Revolución',
        description: 'Decepción política y reencuentro con el alma. El cambio debe ser espiritual.',
        icon: 'i-lucide-palette'
    },
    {

        title: 'Tercera Revolución',
        description: 'Renacer interior en el Caribe. No líderes con promesas, sino seres con propósito',
        icon: 'i-lucide-code'
    },
])
</script>

<template>
    <div>
        Las tres revoluciones
        <UTimeline :default-value="2" :items="items" />
    </div>

</template>
