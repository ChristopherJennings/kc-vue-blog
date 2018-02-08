<template>
  <div class="card">
    <div class="card-content has-text-centered">
      <img v-bind:src="ProfileImaeUrl">
      <p class="title">{{ FirstName }} {{ LastName }}</p>
      <p class="has-text-left">{{ Biography }}</p>
    </div>
  </div>  
</template>

<script>
export default {
  props: [
    'FirstName',
    'LastName',
    'ProfileImageUrl',
    'Biography'
  ]
}
</script>
