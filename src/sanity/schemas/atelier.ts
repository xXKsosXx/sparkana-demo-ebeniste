import { defineType, defineField } from "sanity";

export default defineType({
  name: "atelier",
  title: "Atelier",
  type: "document",
  fields: [
    defineField({
      name: "nom",
      title: "Nom de l'atelier",
      type: "string",
    }),
    defineField({
      name: "adresse",
      title: "Adresse",
      type: "string",
    }),
    defineField({
      name: "telephone",
      title: "Telephone",
      type: "string",
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
    }),
    defineField({
      name: "histoire",
      title: "Histoire",
      type: "text",
    }),
    defineField({
      name: "citation",
      title: "Citation du maitre artisan",
      type: "text",
    }),
    defineField({
      name: "citationAuteur",
      title: "Auteur de la citation",
      type: "string",
    }),
  ],
});
