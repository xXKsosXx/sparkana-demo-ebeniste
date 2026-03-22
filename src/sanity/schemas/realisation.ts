import { defineType, defineField } from "sanity";

export default defineType({
  name: "realisation",
  title: "Realisation",
  type: "document",
  fields: [
    defineField({
      name: "titre",
      title: "Titre",
      type: "string",
    }),
    defineField({
      name: "materiau",
      title: "Materiau",
      type: "string",
    }),
    defineField({
      name: "annee",
      title: "Annee",
      type: "number",
    }),
    defineField({
      name: "ville",
      title: "Ville",
      type: "string",
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
