<template>
    <div>
        <h1>首页</h1>
        {{ count }}
        <button @click="handleIncrement">+1</button>
        <button @click="handleDecrease">-1</button>
        <button @click="handleIncrementMore">+5</button>
        <div>{{ list }}</div>
        <div>{{ listCount }}</div>
        <button @click="handleActionIncrement">action +1</button>
        <button @click="handleAsyncIncrement">async +1</button>
        <div>
            随机增加:
            <Counter :number="number"></Counter>
        </div>
        <Cascader :data="data" v-model="value"></Cascader>
    </div>
</template>
<script>
import Counter from './Counter.vue'
export default {
    computed: {
        count() {
            return this.$store.state.count
        },
        list() {
            return this.$store.getters.filteredList
        },
        listCount() {
            return this.$store.getters.listCount
        }
    },
    methods: {
        handleIncrement() {
            this.$store.commit('increment')
        },
        handleDecrease() {
            this.$store.commit('decrease')
        },
        handleIncrementMore() {
            this.$store.commit('increment', 5)
        },
        handleActionIncrement() {
            this.$store.dispatch('increment')
        },
        handleAsyncIncrement() {
            this.$store.dispatch('asyncIncrement').then(() => {
                console.log(this.$store.state.count)
            })
        },
        handleAddRandom(num) {
            this.number = num
        }
    },
    components: {
        Counter
    },
    data() {
        return {
            number: 0,
            value: ['jiangsu', 'suzhou', 'zhuozhengyuan'],
            data: [
                {
                    value: 'beijing',
                    label: '北京',
                    children: [
                        {
                            value: 'gugong',
                            label: '故宫'
                        },
                        {
                            value: 'tiantan',
                            label: '天坛'
                        },
                        {
                            value: 'wangfujing',
                            label: '王府井'
                        }
                    ]
                },
                {
                    value: 'jiangsu',
                    label: '江苏',
                    children: [
                        {
                            value: 'nanjing',
                            label: '南京',
                            children: [
                                {
                                    value: 'fuzimiao',
                                    label: '夫子庙'
                                }
                            ]
                        },
                        {
                            value: 'suzhou',
                            label: '苏州',
                            children: [
                                {
                                    value: 'zhuozhengyuan',
                                    label: '拙政园'
                                },
                                {
                                    value: 'shizilin',
                                    label: '狮子林'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },
    created() {
        this.$bus.on('add', this.handleAddRandom)
    },
    beforeDestroy() {
        this.$bus.off('add', this.handleAddRandom)
    }
}
</script>
