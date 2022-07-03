import * as Prismic from "@prismicio/client";
import { config } from "config";
export function getPrismicClient() {
  const prismic = Prismic.createClient(config.endpoint, {
    accessToken: config.accessToken,
  });

  return prismic;
}
