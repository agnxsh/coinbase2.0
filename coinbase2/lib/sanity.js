import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "63ghz3yr",
  dataset: "production",
  apiVersion: "2021-03-25",
  token:
    "sk7QYR2jkmCLkR40XrjEFmWpzPiU1lizp7sbdVZkTR6YURjvEMbymy9RjbzJrmWIca1Km4dxOhUzEgsa2AJhvpXYoeGkndeTZZVLgDrnfBej2I8EIKfXrXUuudcf6C8yfm9ktmk4l3XyjgVNIt1M8Gijhk9AUnmTs9sPwqtjzJcDgnBdf6ln",
  useCdn: "false",
});
