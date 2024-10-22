<template>
    <div class="ww-tab-list-container">
        <wwElement
            v-for="tabTriggerElement in content.tabTriggerElements"
            class="ww-tab-list-element"
            v-bind="tabTriggerElement"
            :key="tabTriggerElement.type"
        />
    </div>
</template>

<script>
//import { computed, ref } from 'vue';

export default {
    props: {
        content: { type: Object, required: true },
        /* wwEditor:start */
        wwFrontState: { type: Object, required: true },
        wwEditorState: { type: Object, required: true },
        /* wwEditor:end */
        wwElementState: { type: Object, required: true },
    },
    emits: [],
    setup(props) {},
    data() {
        return {};
    },
    computed: { },
    watch: {},
    mounted() {},
    methods: { },
};
</script>

<style lang="scss" scoped>
.ww-tab-list-container {
    display: flex;
    flex-direction: row;
    background-color: purple;

    .ww-tab-list-element {
        background-color: blue;
    }
}
</style>
