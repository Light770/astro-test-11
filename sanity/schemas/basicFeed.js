export default {
  name: "basicFeed",
  type: "object",
  title: "Basic Feed",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title"
    },
    {
      name: "items",
      type: "array",
      title: "Items",
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