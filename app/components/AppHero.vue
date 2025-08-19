<script setup lang="ts">
const links = ref([
    {
        label: 'Conoce el "inmanifiesto"',
        to: '/el-inmanifiesto',
        icon: 'i-lucide-square-play',

    },
    {
        label: 'Súmate',
        to: '/contacto',
        color: 'neutral',
        variant: 'subtle',
        trailingIcon: 'i-lucide-mail'
    }
])
</script>

<template>
    <UPageHero title="El Inmanifiesto del Ser" description="El gobierno no es un trofeo político, es una puerta abierta a la
          transformación del alma colectiva de un país." orientation="horizontal" :links="links">
        <img src="/lagrancolombia.png" alt="App screenshot" class="rounded-lg w-96 mx-auto" />
    </UPageHero>
</template>