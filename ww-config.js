export default {
    editor: {
        label: {
            en: 'Tab list',
        },
        icon: 'slider',         // 📛 TODO
        bubble: {
            icon: 'slider',     // 📛 TODO
        },
        customSettingsPropertiesOrder: [],
    },
    properties: {
        tabTriggerElements: {
            hidden: true,
            defaultValue: [
                {
                    isWwObject: true,
                    type: 'tab-trigger',
                    content: { name: 'tab1' },
                },
                {
                    isWwObject: true,
                    type: 'tab-trigger',
                    content: { name: 'tab2' },
                },
                {
                    isWwObject: true,
                    type: 'tab-trigger',
                    content: { name: 'tab3' },
                }
            ],
        },
    },
};
