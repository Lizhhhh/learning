<template>
<div>
  input: <input type='text' v-model.number="input_value" />,
  输入的值: {{input_value}}

  <hr />
  text area: <textarea v-model="textarea_value"></textarea>,
  输入的值: {{textarea_value}}

  <hr/>
  radio:
  <input type='radio' v-model='radio_value' value='A' /> A,
  <input type='radio' v-model='radio_value' value='B' /> B,
  <input type='radio' v-model='radio_value' value='C' /> C,
  输入的值: {{radio_value}}

  <hr />
  checkbox:
  <input type='checkbox' v-model='checkbox_value'
  v-bind:true-value='true'
  v-bind:false-value='false'
  />
  输入的值:{{checkbox_value}}

  <hr/>
  select:
  <select v-model='select_value'>
    <option v-for="e in options"
    :key="e.value"
    >{{e.text}}</option>
  </select>
  输入的值:{{select_value}}
</div>
</template>

<script>
export default {
  data () {
    return {
      input_value: '',
      textarea_value: '',
      radio_value: '',
      checkbox_value: 'false',
      select_value: 'spicy',
      options: [
        {
          text: '红烧肉', value: 'A'
        },
        {
          text: '馕包肉', value: 'delicious'
        },
        {
          text: '水煮鱼', value: 'spicy'
        }
      ]
    }
  },
  methods: {

  }
}
</script>
