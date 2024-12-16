// tina/config.ts
import { defineConfig } from "tinacms";
var branch = process.env.HEAD || "master";
var config_default = defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,
  build: {
    outputFolder: "public/admin",
    publicFolder: "public",
    basePath: "src"
  },
  media: {
    tina: {
      mediaRoot: "img",
      publicFolder: "public"
    }
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "content/posts",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true
          },
          {
            type: "string",
            name: "excerpt",
            label: "Excerpt",
            required: true
          },
          {
            type: "image",
            name: "coverImage",
            label: "Cover Image",
            required: true
          },
          {
            type: "datetime",
            name: "date",
            label: "Published Date",
            required: true
          },
          {
            type: "string",
            name: "author",
            label: "Author",
            required: true
          },
          {
            type: "string",
            name: "slug",
            label: "Slug",
            required: true
          },
          {
            type: "rich-text",
            name: "body",
            label: "Post Body",
            isBody: true
          },
          {
            type: "string",
            name: "tags",
            label: "Tags",
            list: true
          }
        ],
        ui: {
          router: ({ document }) => `/blog/${document._sys.filename}`,
          filename: {
            readonly: true,
            slugify: (values) => {
              return `${values?.slug || ""}`;
            }
          }
        }
      }
    ]
  }
});
export {
  config_default as default
};
