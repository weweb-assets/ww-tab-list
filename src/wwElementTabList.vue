<template>
    <wwLayout path="tabTriggerElements" />
</template>

<script>

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
