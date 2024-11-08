export default {
    editor: {
        label: {
            en: 'Tab list',
        },
        icon: 'list',
        bubble: {
            icon: 'list',
        },
        customSettingsPropertiesOrder: [],
    },
    inherit: {
      type: "ww-layout",
    },
    options: {
      autoByContent: true,
      displayAllowedValues: ["flex", "grid"],
    },
    properties: {
        tabTriggerElements: {
            hidden: true,
            defaultValue: [],
        },
    },
};
