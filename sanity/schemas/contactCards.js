export default {
  name: "contactCards",
  type: "object",
  title: "Contact Cards",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title"
    },
    {
      name: "cards",
      type: "array",
      title: "Cards",
      of: [
        {
          type: "object",
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
              name: "icon",
              type: "image",
              title: "Icon"
            },
            {
              name: "link",
              type: "url",
              title: "Link"
            }
          ]
        }
      ]
    }
  ]
}