export default {
  name: "pricingTableBody",
  type: "object",
  title: "Pricing Table Body",
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
              name: "label",
              type: "string",
              title: "Label"
            },
            {
              name: "plan1",
              type: "boolean",
              title: "Plan 1"
            },
            {
              name: "plan2",
              type: "boolean",
              title: "Plan 2"
            },
            {
              name: "plan3",
              type: "boolean",
              title: "Plan 3"
            }
          ]
        }
      ]
    }
  ]
}