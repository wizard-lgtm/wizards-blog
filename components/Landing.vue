<template>
  <h1 class="title font-raleway text-center text-4xl font-bold">
    Welcome to <span>wizard's blog</span>
  </h1>
  <h3>Tech</h3>
</template>

<style scoped>
.title {
  background: linear-gradient(
    90deg,
    rgb(11, 194, 103) 4%,
    rgb(25, 240, 136) 35%,
    rgba(0, 255, 193, 1) 89%
  );
  background-size: 200% 100%;
  background-clip: text;
  color: transparent;

  animation: title-bg-animation 10s ease-in-out infinite;
}

@keyframes title-bg-animation {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 200% 50%;
  }
}

.bg-bgdark {
  background: #0f172a; /* Static dark background color */
}

.text-textdark {
  color: #e2e8f0; /* Subtle light text color */
}
</style>
