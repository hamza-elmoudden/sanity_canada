import { defineType, defineField } from "sanity";

export const footer = defineType({
  name: "footer",
  title: "Footer",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title Footer",
      type: "localeString",
    }),
    defineField({
      name: "text",
      title: "Short text",
      type: "localeString",
    }),
  ],
});
