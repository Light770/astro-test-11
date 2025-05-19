export default {
  name: "pricingColumns",
  type: "object",
  title: "Pricing Columns",
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
      name: "columns",
      type: "array",
      title: "Columns",
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
              name: "price",
              type: "number",
              title: "Price"
            },
            {
              name: "features",
              type: "array",
              title: "Features",
              of: [
                {
                  type: "string"
                }
              ]
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