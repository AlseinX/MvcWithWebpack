import $ from "jquery"
import entries from "."
import lr from "../../images/lr.png"

entries.Yeah = (elem) => {
    $("<img></img>").attr("src", lr).appendTo(elem);
}