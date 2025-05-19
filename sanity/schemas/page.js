export default {
  name: "page",
  type: "document",
  title: "Page",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      validation: Rule => Rule.required()
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "title",
        maxLength: 96
      },
      validation: Rule => Rule.required()
    },
    {
      name: "seo",
      type: "seo",
      title: "SEO"
    },
    {
      name: "content",
      type: "array",
      title: "Content",
      of: [
        {
          type: "textImage"
        },
        {
          type: "basicForm"
        },
        {
          type: "contactCards"
        },
        {
          type: "basicDarkCTA"
        },
        {
          type: "basicLightCTA"
        },
        {
          type: "basicFAQ"
        },
        {
          type: "featureCards"
        },
        {
          type: "featureList"
        },
        {
          type: "basicFeed"
        },
        {
          type: "highlightRows"
        },
        {
          type: "signUp"
        },
        {
          type: "pricingColumns"
        },
        {
          type: "basicSocialProof"
        },
        {
          type: "basicDarkTestimonials"
        },
        {
          type: "pricingTable"
        }
      ]
    }
  ]
}