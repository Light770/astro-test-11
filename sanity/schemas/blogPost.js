export default {
  name: "blogPost",
  type: "document",
  title: "Blog Post",
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
      name: "publishedAt",
      type: "datetime",
      title: "Published at",
      validation: Rule => Rule.required()
    },
    {
      name: "author",
      type: "reference",
      title: "Author",
      to: [
        {
          type: "author"
        }
      ],
      validation: Rule => Rule.required()
    },
    {
      name: "mainImage",
      type: "image",
      title: "Main image",
      options: {
        hotspot: true
      }
    },
    {
      name: "categories",
      type: "array",
      title: "Categories",
      of: [
        {
          type: "reference",
          to: [
            {
              type: "category"
            }
          ]
        }
      ]
    },
    {
      name: "tags",
      type: "array",
      title: "Tags",
      of: [
        {
          type: "string"
        }
      ]
    },
    {
      name: "body",
      type: "array",
      title: "Body",
      of: [
        {
          type: "block"
        },
        {
          type: "image"
        }
      ]
    },
    {
      name: "seo",
      type: "seo",
      title: "SEO"
    }
  ]
}