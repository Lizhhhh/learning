<template>
  <div>
    {{ my_value }}<br />
    <input type="button" @click="show_my_value()" value="show_my_value" />
    <br />
    <input type="button" @click="say_hi('Nicholas')" value="say_hi" /> <br />
  </div>
</template>

<script>
export default {
  data () {
    return {
      my_value: '默认值'
    }
  },
  methods: {
    show_my_value: function () {
      alert('my_value: ' + this.my_value)
    },
    say_hi: function (name) {
      alert('hi,' + name)
    }
  }
}
</script>
