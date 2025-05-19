export default {
  name: "basicDarkTestimonials",
  type: "object",
  title: "Basic Dark Testimonials",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title"
    },
    {
      name: "testimonials",
      type: "array",
      title: "Testimonials",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "quote",
              type: "text",
              title: "Quote"
            },
            {
              name: "author",
              type: "string",
              title: "Author"
            },
            {
              name: "authorTitle",
              type: "string",
              title: "Author Title"
            },
            {
              name: "image",
              type: "image",
              title: "Image"
            }
          ]
        }
      ]
    }
  ]
}