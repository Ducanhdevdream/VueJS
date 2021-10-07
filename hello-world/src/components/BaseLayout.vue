<template>
  <div class="container">
  <header>
    <!-- We want header content here -->
    <slot name="header"></slot>
  </header>
  <main>
    <!-- We want main content here -->
    <slot name="content"></slot>
    <slot></slot>
  </main>
  <footer>
    <!-- We want footer content here -->
    <slot name="footer"></slot>
  </footer>
</div>
</template>

<script>
export default {
    name: 'baselayout',
    data(){
        return{

        }
    }
}
</script>

<style>

</style>