export default {
  name: "basicFAQ",
  type: "object",
  title: "Basic FAQ",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title"
    },
    {
      name: "questions",
      type: "array",
      title: "Questions",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "question",
              type: "string",
              title: "Question"
            },
            {
              name: "answer",
              type: "text",
              title: "Answer"
            }
          ]
        }
      ]
    }
  ]
}