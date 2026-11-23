import { defineType, defineField } from "sanity";

export const navBar = defineType({
  name: "navbar",
  title: "Nav Bar",
  type: "document",
  fields: [
    defineField({
      name: "names",
      title: "Names",
      type: "array",
      of: [
        {
          type: "localeString",
        },
      ],
    }),
  ],
});
