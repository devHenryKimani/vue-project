<script setup>
import Navbar from '@/components/icons/Navbar.vue'
import hero from '@/components/icons/hero.vue'
import HomeCards from '@/components/HomeCards.vue'
import joblistings from '@/components/joblistings.vue'
</script>



<template>
  <Navbar/>
  <hero title="Test Title"/>
  <HomeCards/>
  <joblistings :limit="3" :show-button="true"/>
</template>