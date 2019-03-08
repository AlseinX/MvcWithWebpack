import $ from "jquery"
import entries from "."
import lr from "../../images/lr.png"

entries.Yeah = function () {
    $("<img></img>").attr("src", lr).appendTo("[entry='Yeah']");
}