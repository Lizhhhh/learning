<template>
  <div class="hi">
    {{message}}
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: '你好Vue! 本消息来自于变量'
    }
  }
}
</script>

<style>
.hi {
  color: red;
  font-size: 20px;
}
</style>
