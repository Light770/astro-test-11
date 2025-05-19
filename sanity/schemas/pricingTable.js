export default {
  name: "pricingTable",
  type: "object",
  title: "Pricing Table",
  fields: [
    {
      name: "header",
      type: "pricingTableHeader",
      title: "Header"
    },
    {
      name: "body",
      type: "pricingTableBody",
      title: "Body"
    },
    {
      name: "footer",
      type: "pricingTableFooter",
      title: "Footer"
    }
  ]
}