<template>
    <span>
        <ul v-if="data && data.length" :class="[prefixCls + '-menu']">
            <Casitem
                v-for="item in data"
                :key="item"
                :prefix-cls="prefixCls"
                :data="item"
                :tmp-item="tmpItem"
                @click.native.stop="handleClickItem(item)"
                @mouseenter.native.stop="handleHoverItem(item)"
            ></Casitem>
        </ul>
        <Caspanel
            v-if="sublist && sublist.length"
            :prefix-cls="prefixCls"
            :data="sublist"
            :disalbed="disalbed"
            :trigger="trigger"
            :change-on-select="changeOnSelect"
        >
        </Caspanel>
    </span>
</template>
<script>
import Casitem from './casitem.vue'
export default {
    name: 'Caspanel',
    components: { Casitem },
    props: {
        data: {
            type: Array,
            default() {
                return []
            }
        },
        disabled: Boolean,
        changeOnSelect: Boolean,
        trigger: String,
        prefixCls: String
    },
    data() {
        return {
            tmpItem: {},
            result: [],
            sublist: []
        }
    },
    watch: {
        data() {
            this.sublist = []
        }
    }
};
</script>
