export default {
  name: "featureCards",
  type: "object",
  title: "Feature Cards",
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
              name: "image",
              type: "image",
              title: "Image"
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