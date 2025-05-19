export default {
  name: "navigationLink",
  type: "document",
  title: "Navigation Link",
  fields: [
    {
      name: "label",
      type: "string",
      title: "Label",
      validation: Rule => Rule.required()
    },
    {
      name: "url",
      type: "string",
      title: "URL",
      validation: Rule => Rule.required()
    },
    {
      name: "isExternal",
      type: "boolean",
      title: "Open in new tab?",
      description: "Check if the link is external"
    }
  ]
}