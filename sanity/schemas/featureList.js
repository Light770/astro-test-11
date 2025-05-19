export default {
  name: "featureList",
  type: "object",
  title: "Feature List",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title"
    },
    {
      name: "features",
      type: "array",
      title: "Features",
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
            }
          ]
        }
      ]
    }
  ]
}