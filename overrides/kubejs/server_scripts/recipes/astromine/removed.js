//╔════════════════════════════════════════╗
//║         Copyright © 2021 CSS           ║
//╚════════════════════════════════════════╝
//╔════════════════════════════════════════╗
//║     GNU Free Documentation License     ║
//╚════════════════════════════════════════╝
events.listen("recipes", function(event) {
  //╔════════════════════════════════════════╗
  //║               ASTROMINE                ║
  //╚════════════════════════════════════════╝
  // Gears
  event.remove({
    id: "astromine:copper_gear"
  });
  event.remove({
    id: "astromine:tin_gear"
  });
  event.remove({
    id: "astromine:steel_gear"
  });
  event.remove({
    id: "astromine:bronze_gear"
  });
  //╔════════════════════════════════════════╗
  //║            ASTROMINE/TOOLS             ║
  //╚════════════════════════════════════════╝
  var astro_tools = [
    "steel",
    "bronze",
    "lead",
    "steel",
    "silver",
    "lunum"
  ];

  astro_tools.forEach(function(item, index) {
    event.remove({
      output: "astromine:" + item + "_pickaxe"
    });
    event.remove({
      output: "astromine:" + item + "_spade"
    });
    event.remove({
      output: "astromine:" + item + "_axe"
    });
    event.remove({
      output: "astromine:" + item + "_hoe"
    });
    event.remove({
      output: "astromine:" + item + "_sword"
    });
    event.remove({
      output: "astromine:" + item + "_mining_tool"
    });
    event.remove({
      output: "astromine:" + item + "_hammer"
    });
    event.remove({
      output: "astromine:" + item + "_mattock"
    });
    event.remove({
      output: "astromine:" + item + "_excavator"
    });
  });

  // Univite 
  var univite = [
    "univite"
  ];

  univite.forEach(function(item, index) {
    event.remove({
      output: "astromine:" + item + "_mining_tool"
    });
    event.remove({
      output: "astromine:" + item + "_mattock"
    });
  });
  //╔════════════════════════════════════════╗
  //║           ASTROMINE/EQUIPMENT          ║
  //╚════════════════════════════════════════╝
  var astro_eq = [
    "steel",
    "bronze",
    "lead",
    "steel",
    "silver",
    "lunum",
    "univite"
  ];

  astro_eq.forEach(function(item, index) {
    event.remove({
      output: "astromine:" + item + "_helmet"
    });
    event.remove({
      output: "astromine:" + item + "_chestplate"
    });
    event.remove({
      output: "astromine:" + item + "_leggings"
    });
    event.remove({
      output: "astromine:" + item + "_boots"
    });
  });
    
  // Univite Machete
    event.remove({
    output: "harvest_scythes:univite_machete"
  });
})