import { type SchemaTypeDefinition } from "sanity";
import { categoryType } from "./categoryTypes";
import { blockContentType } from "./blockContentType";
import { productType } from "./productType";
import { orderType } from "./orderType";
import { brandType } from "./brandTypes";
import { blogCategoryType } from "./blogCategoryType";
import { blogType } from "./blogType";
import { addressType } from "./addressType";
import { authorType } from "./authorType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    categoryType,
    blockContentType,
    productType,
    orderType,
    brandType,
    blogCategoryType,
    blogType,
    addressType,
    authorType,
  ],
};
