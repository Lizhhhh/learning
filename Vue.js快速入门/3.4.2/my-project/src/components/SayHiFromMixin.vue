<template>
<div>
  {{hi('Nicholas')}}
</div>
</template>
<script>
import CommonHi from '@/mixins/common_hi.js'
export default {
  mixins: [CommonHi],
  mounted () {
    alert(this.hi('Zakas ~! QAQ'))
  }
}
</script>
