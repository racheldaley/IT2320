$(document).ready(function ()
{
    var cells = $(".cell");
    var colorCount = 0;

    for (var i = 0; i < cells.length; i++)
    {
        var cell = $(cells[i]);
        var isDark = colorCount % 2 == 0;
        var isNextRow = (i + 1) % 8 == 0;
        colorCount += isNextRow ? 2 : 1;
        cell.css("background-color", isDark ? "navy" : "white");
    }

});
$(document).ready(function () {
    $(".piece").click(function () {
        $(this).css("border", "2px solid yellow");
    });
});
/* This method was supposed to account for selecting and deselecting a piece square. This would allow non-piece holding squares 
to have nothing happen to them when clicked and allows if one cell is selected it would deselect. However, for some resaon this would 
not work so I used the css method to add a border.
$(document).ready(function () {
	$(".piece").click(function () {
  	$(this).toggleClass("highlight");
  });
 });
*/
/*This method attempts to account for piece movement. My problem is that I 
do not know how to indicate which piece was clicked first*/
$(document).ready(function () {
    $(".cell").click(function () {
        var lastClass = $(this).attr("class");
        if ($(lastClass).attr("class") == "cell")
        { $(this).addClass("piece"); }
        else if ($(lastClass).attr("class") == "piece") {
            $(this).removeClass("piece");
        }
        else ($(".cell"));
    });
});

