<template>
  <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-vcentered">
            <div class="column">
              <p class="title">{{ title }}</p>
              <p class="subtitle">{{ subtitle }}</p>
              <p v-if="text">{{ text }}</p>
            </div>
            <div class="column is-one-fifth" v-if="imageUrl">
              <figure class="image is-1by1 is-cropped">
                <img :src="imageUrl">
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
export default {
  props: [
    'title',
    'subtitle',
    'text',
    'imageUrl'
  ]
}
</script>

