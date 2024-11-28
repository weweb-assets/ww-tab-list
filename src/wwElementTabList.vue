<template>
    <wwLayout path="tabTriggerElements" />
</template>

<script>
/* wwEditor:start */
import useTabContentHint from './editor/useTabContentHint';
/* wwEditor:end */

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
    setup(props, { emit }) {
        /* wwEditor:start */
        useTabContentHint(emit);
        /* wwEditor:end */
    },
    data() {
        return {};
    },
    computed: { },
    watch: {},
    mounted() {},
    methods: { },
};
</script>
