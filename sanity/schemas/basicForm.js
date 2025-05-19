export default {
  name: "basicForm",
  type: "object",
  title: "Basic Form",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title"
    },
    {
      name: "fields",
      type: "array",
      title: "Form Fields",
      of: [
        {
          type: "formField"
        }
      ]
    },
    {
      name: "submitButtonText",
      type: "string",
      title: "Submit Button Text"
    },
    {
      name: "successMessage",
      type: "text",
      title: "Success Message"
    }
  ]
}