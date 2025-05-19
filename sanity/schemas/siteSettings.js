export default {
  name: "siteSettings",
  type: "document",
  title: "Site Settings",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Site Title",
      validation: Rule => Rule.required()
    },
    {
      name: "description",
      type: "text",
      title: "Site Description"
    },
    {
      name: "keywords",
      type: "array",
      title: "Keywords",
      of: [
        {
          type: "string"
        }
      ],
      description: "Keywords for SEO"
    },
    {
      name: "logo",
      type: "image",
      title: "Logo"
    },
    {
      name: "navigation",
      type: "array",
      title: "Navigation",
      of: [
        {
          type: "reference",
          to: [
            {
              type: "navigationLink"
            }
          ]
        }
      ]
    },
    {
      name: "socialLinks",
      type: "array",
      title: "Social Links",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "platform",
              type: "string"
            },
            {
              name: "url",
              type: "url"
            }
          ]
        }
      ]
    },
    {
      name: "footer",
      type: "text",
      title: "Footer Text"
    },
    {
      name: "googleAnalyticsId",
      type: "string",
      title: "Google Analytics ID"
    },
    {
      name: "googleSearchConsoleId",
      type: "string",
      title: "Google Search Console ID"
    },
    {
      name: "googleTagManagerIdHead",
      type: "string",
      title: "Google Tag Manager ID (Head)"
    },
    {
      name: "googleTagManagerIdBody",
      type: "string",
      title: "Google Tag Manager ID (Body)"
    }
  ]
}