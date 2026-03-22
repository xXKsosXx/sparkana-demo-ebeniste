import { defineType, defineField } from "sanity";

export default defineType({
  name: "temoignage",
  title: "Temoignage",
  type: "document",
  fields: [
    defineField({
      name: "citation",
      title: "Citation",
      type: "text",
    }),
    defineField({
      name: "auteur",
      title: "Auteur",
      type: "string",
    }),
    defineField({
      name: "titre",
      title: "Titre / Fonction",
      type: "string",
    }),
    defineField({
      name: "visible",
      title: "Visible sur le site",
      type: "boolean",
      initialValue: true,
    }),
  ],
});
