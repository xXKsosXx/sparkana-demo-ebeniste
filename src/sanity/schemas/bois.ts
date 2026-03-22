import { defineType, defineField } from "sanity";

export default defineType({
  name: "bois",
  title: "Essence de bois",
  type: "document",
  fields: [
    defineField({
      name: "nom",
      title: "Nom",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "ordre",
      title: "Ordre d'affichage",
      type: "number",
    }),
  ],
  orderings: [
    {
      title: "Ordre",
      name: "ordreAsc",
      by: [{ field: "ordre", direction: "asc" }],
    },
  ],
});
