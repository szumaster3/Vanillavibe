//╔════════════════════════════════════════╗
//║         Copyright © 2023 SZUMASTER     ║
//╚════════════════════════════════════════╝
//╔════════════════════════════════════════╗
//║     GNU Free Documentation Licens      ║
//╚════════════════════════════════════════╝
events.listen("recipes", function(event) {
  //╔════════════════════════════════════════╗
  //║            SLEEPING BAGS               ║
  //╚════════════════════════════════════════╝

  var comforts_bags = [
    "brown",
    "cyan",
    "gray",
    "green",
    "light_blue",
    "light_gray",
    "lime",
    "magenta",
    "orange",
    "pink",
    "purple",
    "red",
    "yellow",
  ];

  comforts_bags.forEach(function(item, index) {
    event.replaceOutput({}, "comforts:sleeping_bag_" + item, "travellersbackpack:" + item + "_sleeping_bag");
  });

  event.replaceOutput({}, "kibe:sleeping_bag", "comforts:sleeping_bag_blue");
  event.replaceInput({}, "kibe:sleeping_bag", "comforts:sleeping_bag_blue");

  //╔════════════════════════════════════════╗
  //║               REMOVED                  ║
  //╚════════════════════════════════════════╝	

  event.remove({
    output: 'kibe:sleeping_bag'
  });
  event.remove({
    output: 'kibe:black_sleeping_bag'
  });
  event.remove({
    output: 'kibe:brown_sleeping_bag'
  });
  event.remove({
    output: 'kibe:cyan_sleeping_bag'
  });
  event.remove({
    output: 'kibe:gray_sleeping_bag'
  });
  event.remove({
    output: 'kibe:green_sleeping_bag'
  });
  event.remove({
    output: 'kibe:light_blue_sleeping_bag'
  });
  event.remove({
    output: 'kibe:light_gray_sleeping_bag'
  });
  event.remove({
    output: 'kibe:lime_sleeping_bag'
  });
  event.remove({
    output: 'kibe:magenta_sleeping_bag'
  });
  event.remove({
    output: 'kibe:orange_sleeping_bag'
  });
  event.remove({
    output: 'kibe:pink_sleeping_bag'
  });
  event.remove({
    output: 'kibe:purple_sleeping_bag'
  });
  event.remove({
    output: 'kibe:red_sleeping_bag'
  });
  event.remove({
    output: 'kibe:white_sleeping_bag'
  });
  event.remove({
    output: 'kibe:yellow_sleeping_bag'
  });
  
  event.remove({
    id: "kibe:pocket_trash_can"
  });
  
  event.remove({
    output: "comforts:black_sleeping_black",
    output: "comforts:black_sleeping_brown",
    output: "comforts:black_sleeping_cyan",
    output: "comforts:black_sleeping_gray",
    output: "comforts:black_sleeping_green",
    output: "comforts:black_sleeping_light_blue",
    output: "comforts:black_sleeping_light_gray",
    output: "comforts:black_sleeping_lime",
    output: "comforts:black_sleeping_magenta",
    output: "comforts:black_sleeping_orange",
    output: "comforts:black_sleeping_pink",
    output: "comforts:black_sleeping_purple",
    output: "comforts:black_sleeping_red",
    output: "comforts:black_sleeping_white",
    output: "comforts:black_sleeping_yellow",
  });
})