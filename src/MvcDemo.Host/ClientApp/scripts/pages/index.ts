import $ from "jquery"

var entries: { [name: string]: ((elem: JQuery<HTMLElement>) => void) } = {};

$(() => {
    let elem = $("[entry]");
    if (elem.length) {
        entries[elem.attr("entry") as string](elem);
    }
});

export default entries;