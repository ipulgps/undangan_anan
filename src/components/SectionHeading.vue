<script setup>
defineProps({
  eyebrow: String,
  title: String,
  lede: { type: String, default: "" },
  ornament: { type: Boolean, default: false }
});
</script>

<template>
  <div class="head reveal">
    <p class="eyebrow">{{ eyebrow }}</p>
    <h2 class="title">{{ title }}</h2>
    <div v-if="ornament" class="orn">
      <span class="rule-l"></span>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#BFA15F" stroke-width="0.9">
        <path d="M12 3 L13.9 10.1 L21 12 L13.9 13.9 L12 21 L10.1 13.9 L3 12 L10.1 10.1 Z" />
      </svg>
      <span class="rule-r"></span>
    </div>
    <p v-if="lede" class="lede">{{ lede }}</p>
  </div>
</template>

<style scoped>
.head { text-align:center; margin-bottom:clamp(46px,7vh,80px); }
.eyebrow { margin:0 0 20px; font-size:10px; letter-spacing:.6em; text-indent:.6em; color:#BFA15F; text-transform:uppercase; }
.title {
  margin:0 0 22px;
  font-family:Cinzel,serif; font-weight:500;
  font-size:clamp(28px,4.6vw,44px); letter-spacing:.12em;
  color:#F2F1EA; text-shadow:0 0 50px rgba(25,169,116,.2);
}
.orn { display:flex; align-items:center; justify-content:center; gap:14px; }
.rule-l { width:60px; height:1px; background:linear-gradient(90deg, transparent, rgba(191,161,95,.75)); }
.rule-r { width:60px; height:1px; background:linear-gradient(90deg, rgba(191,161,95,.75), transparent); }
.lede {
  margin:0 auto; max-width:520px;
  font-size:clamp(13px,1.5vw,15px); line-height:1.9; letter-spacing:.04em;
  text-wrap:pretty; color:rgba(242,241,234,.6);
}
</style>
