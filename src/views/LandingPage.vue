<template>
    <div>
      <HeroComp/>
      <FeatureComp/>
      <CtaComp/>
      <WorkWithUs/>
      <TeamMembers/>
      <FooterComp/>
    </div>
  </template>
  
  <script>
  import HeroComp from '../components/HeroComp.vue';
  import FeatureComp from '../components/FeatureComp.vue';
  import CtaComp from '../components/CtaComp.vue';
  import WorkWithUs from '../components/WorkWithUs.vue';
  import TeamMembers from '../components/TeamMembers.vue';
  import FooterComp from '../components/FooterComp.vue';
  
  export default {
    name: 'LandingPage',
    components: {
      HeroComp,
      FeatureComp,
      CtaComp,
      WorkWithUs,
      TeamMembers,
      FooterComp
    }
  }
  </script>
  