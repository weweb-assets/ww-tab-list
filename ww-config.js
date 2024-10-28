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
