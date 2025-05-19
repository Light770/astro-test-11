export default {
  name: "basicSocialProof",
  type: "object",
  title: "Basic Social Proof",
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
              name: "image",
              type: "image",
              title: "Image"
            },
            {
              name: "altText",
              type: "string",
              title: "Alt Text"
            }
          ]
        }
      ]
    }
  ]
}