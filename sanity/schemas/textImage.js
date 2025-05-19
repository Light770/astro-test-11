export default {
  name: "textImage",
  type: "object",
  title: "Text Image",
  fields: [
    {
      name: "heading",
      type: "string",
      title: "Heading"
    },
    {
      name: "text",
      type: "text",
      title: "Text"
    },
    {
      name: "image",
      type: "image",
      title: "Image"
    },
    {
      name: "imagePosition",
      type: "string",
      title: "Image Position",
      options: {
        list: [
          {
            title: "Left",
            value: "left"
          },
          {
            title: "Right",
            value: "right"
          }
        ]
      }
    }
  ]
}