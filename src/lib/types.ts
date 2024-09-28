interface TagsColorTypes {
    zinc: "border-zinc-500 bg-zinc-900 text-zinc-400",
    purple: "border-purple-500 bg-purple-950 text-purple-400",
    fuchsia: "border-fuchsia-500 bg-fuchsia-950 text-fuchsia-300",
    sky: "border-sky-500 bg-sky-950 text-sky-400",
    teal: "border-teal-500 bg-teal-950 text-teal-400",
    indigo: "border-indigo-500 bg-indigo-950 text-indigo-400",
    emerald: "border-emerald-500 bg-emerald-950 text-emerald-400",
    other: "border-zinc-800 bg-zinc-950 text-zinc-400",
}
type TagsNameGeneratorTypes = {
    tagsName: "Saas" | "Blog" | "Template" | "Other"
    color: TagsColorTypes
}