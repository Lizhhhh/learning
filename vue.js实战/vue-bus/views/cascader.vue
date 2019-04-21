<template>
    <div :class="classes" v-clickoutside="handleClose">
        <div :class="[prefixCls + '-rel']" @click="toggleOpen">
            <slot>
                <i-input
                    readonly
                    :disabled="disabled"
                    v-model="displayRender"
                    :size="size"
                    :placeholder="placeholder"
                ></i-input>
                <Icon
                    type="ios-close"
                    :class="[prefixCls + '-arrow']"
                    v-show="showCloseIcon"
                    @click.native.stop="clearSelect"
                ></Icon>
                <Icon
                    type="arrow-down-b"
                    :class="[prefixCls + '-arrow']"
                ></Icon>
            </slot>
        </div>
        <transition name="slide-up">
            <Drop v-show="visible">
                <div>
                    <Caspanel
                        rel="caspanel"
                        :prefix-cls="prefixCls"
                        :data="data"
                        :disabled="disabled"
                        :change-on-select="changeOnSelect"
                        :trigger="trigger"
                    ></Caspanel>
                </div>
            </Drop>
        </transition>
    </div>
</template>
<script>
import iInput from '../input/input.vue'
import Drop from '../select/dropdown.vue'
import Icon from '../icon/icon.vue'
import Caspanel from './caspanel.vue'
import clickoutside from '../../directives/clickoutside'

// CSS命名空间
const prefixCls = 'ivu-cascader'
export default {
    name: 'Cascader',
    components: { iInput, Drop, Icon, Caspanel },
    directives: { clickoutside },
    props: {
        data: {
            type: Array,
            default() {
                return []
            }
        },
        value: {
            type: Array,
            default() {
                return []
            }
        },
        disabled: {
            type: Boolean,
            default: false
        },
        clearable: {
            type: Boolean,
            default: true
        },
        placeholder: {
            type: String,
            default: '请选择'
        },
        size: {
            validator(value) {
                return oneOf(value, ['small', 'large'])
            }
        },
        trigger: {
            validator(value) {
                return oneOf(value, ['click', 'hover'])
            },
            default: 'click'
        },
        changeOnSelect: {
            type: Boolean,
            default: false
        },
        renderFormat: {
            type: Function,
            default(label) {
                return label.join('/')
            }
        }
    },
    data() {
        return {
            prefixCls: prefixCls,
            visible: false,
            selected: [],
            tmpSelected: [],
            updatingValue: false,
            // 用于实现 v-model
            currentValue: this.value
        }
    },
    computed: {
        classes() {
            return [
                '${prefixCls}',
                {
                    ['${prefixCls}-show-clear']: this.showCloseIcon,
                    ['${prefixCls}-visible']: this.visible,
                    ['${prefixCls}-disabled']: this.disabled
                }
            ]
        },
        showCloseIcon() {
            return (
                this.currentValue &&
                this.currentValue.length &&
                this.clearable &&
                !this.disabled
            )
        },
        // 显示自定义内容
        showCloseIcon() {
            return (
                this.currentValue &&
                this.currentValue.length &&
                this.clearable &&
                !this.disabled
            )
        },
        // 自定义显示内容
        displayRender() {
            let label = []
            for (let i = 0; i < this.selected; i++) {
                label.push(this.selected[i].label)
            }

            return this.renderFormat(label, this.selected)
        }
    }
}
</script>
