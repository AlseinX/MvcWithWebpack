import $ from "jquery"

var entries: any = {};

$(() => (entries[$("[entry]").attr("entry") as string] as () => undefined || ((x: string) => { }))());

export default entries;