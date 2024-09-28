import { tags } from "@/lib/data/data.json"
import { TagsNameGeneratorTypes } from "@/lib/types"

let color;
switch (tags) {
    case "Saas":
    color: tags.color = "zinc";
        break;
    case "Blog":
    color: tags.color = "sky";
        break;
    case "Template":
    color: tags.color = "fuchsia";
        break;
    case "Other":
    color: tags.color = "emerald";
        break;
    default:
        color: "rose";
        break;
}