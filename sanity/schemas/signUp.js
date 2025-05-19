export default {
  name: "signUp",
  type: "object",
  title: "Sign Up",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title"
    },
    {
      name: "description",
      type: "text",
      title: "Description"
    },
    {
      name: "form",
      type: "reference",
      to: [
        {
          type: "basicForm"
        }
      ],
      title: "Form"
    }
  ]
}