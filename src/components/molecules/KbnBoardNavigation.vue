<template>
  <nav class="board-navigation">
    <div class="title">
      <KbnButton
        type="text"
        @click="getUser"
      >getUser</KbnButton>
      <h1>SKSignet O&M</h1>
    </div>
    <div class="actions">
      <KbnButton
        type="text"
        @click="$emit('logout')"
      >
        로그아웃
      </KbnButton>
    </div>
  </nav>
</template>

<script>
import KbnButton from '@/components/atoms/KbnButton.vue'

export default {
  name: 'KbnBoardNavigation',

  components: {
    KbnButton
  },

  methods: {
    getUser () {
      alert('call getUser')

      return this.$store.dispatch('getUser')
        .then(res => {
          console.log(res)
        })
        .catch(err => Promise.reject(err))
    }
  }
}
</script>

<style scoped>
.board-navigation {
  display: flex;
  border-bottom: medium solid black;
}
.title {
  flex: 1;
}
h1 {
  margin: 0px;
}
.actions {
  width: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
}
button {
  cursor: pointer;
}
</style>
