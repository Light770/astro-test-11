export default {
  name: "highlightRows",
  type: "object",
  title: "Highlight Rows",
  fields: [
    {
      name: "rows",
      type: "array",
      title: "Rows",
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
              name: "buttonText",
              type: "string",
              title: "Button Text"
            },
            {
              name: "buttonLink",
              type: "url",
              title: "Button Link"
            }
          ]
        }
      ]
    }
  ]
}