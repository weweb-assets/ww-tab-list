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
        hint: (_, sidepanelContent) => {
            return sidepanelContent.missingTabOrField;
        },
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
            label: {
                en: 'Items',
                fr: 'Items',
            },
            type: 'Info',
            options: {
                text: { en: 'Elements to repeat' },
            },
            bindable: 'repeatable',
            defaultValue: [],
            /* wwEditor:start */
            bindingValidation: {
                validations: [
                    {
                        type: 'array',
                    },
                    {
                        type: 'object',
                    },
                ],
                tooltip:
                    'A collection or an array of data: \n\n`myCollection` or `[{}, {}, ...] || ["string1", "string2", ...] || [1, 2, ...]`',
            },
        },
    },
};
