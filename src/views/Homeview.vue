<script setup>
import hero from '@/components/icons/hero.vue';
import HomeCards from '@/components/HomeCards.vue';
import joblistings from '@/components/joblistings.vue';

</script>


<template>
    <hero title="Test Titlee"/>
  <HomeCards/>
  <joblistings :limit="3" :show-button="true"/>
</template>