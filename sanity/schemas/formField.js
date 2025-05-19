export default {
  name: "formField",
  type: "object",
  title: "Form Field",
  fields: [
    {
      name: "label",
      type: "string",
      title: "Label"
    },
    {
      name: "name",
      type: "string",
      title: "Name"
    },
    {
      name: "type",
      type: "string",
      title: "Type",
      options: {
        list: [
          {
            title: "Text",
            value: "text"
          },
          {
            title: "Email",
            value: "email"
          },
          {
            title: "Textarea",
            value: "textarea"
          }
        ]
      }
    },
    {
      name: "required",
      type: "boolean",
      title: "Required"
    }
  ]
}