<template lang="pug">
LandingBanner(
  :class='colour'
)
</template>

<script>
import { ref, onMounted } from 'vue';
import LandingBanner from '@/components/organisms/LandingBanner.vue'

export default {
  name: 'Home',
  components: { LandingBanner },
  setup() {
    const colour = ref(null)

    onMounted(() => {
      colour.value = 'red'
    })
    
    return { colour }
  }
}
</script>
