//╔════════════════════════════════════════╗
//║         Copyright © 2022 CSS           ║
//╚════════════════════════════════════════╝
//╔════════════════════════════════════════╗
//║     GNU Free Documentation License     ║
//╚════════════════════════════════════════╝
events.listen("recipes", function(event) {
  //╔════════════════════════════════════════╗
  //║              DUPLICATES                ║
  //╚════════════════════════════════════════╝
  //╔════════════════════════════════════════╗
  //║              SANDSTONE                 ║
  //╚════════════════════════════════════════╝

  event.remove({
    output: "blockus:rough_sandstone"
  });
  event.shapeless('blockus:rough_sandstone', ['consistency_plus:cobbled_sandstone'])
  event.shapeless('consistency_plus:cobbled_sandstone', ['blockus:rough_sandstone']);

  event.remove({
    output: "blockus:rough_sandstone_slab"
  });
  event.shapeless('blockus:rough_sandstone_slab', ['consistency_plus:cobbled_sandstone_slab'])
  event.shapeless('consistency_plus:cobbled_sandstone_slab', ['blockus:rough_sandstone_slab']);

  event.remove({
    output: "blockus:rough_sandstone_stairs"
  });
  event.shapeless('blockus:rough_sandstone_stairs', ['consistency_plus:cobbled_sandstone_stairs'])
  event.shapeless('consistency_plus:cobbled_sandstone_stairs', ['blockus:rough_sandstone_stairs']);

  event.remove({
    output: "blockus:sandstone_bricks"
  });
  event.shapeless('blockus:sandstone_bricks', ['consistency_plus:sandstone_bricks'])
  event.shapeless('consistency_plus:sandstone_bricks', ['blockus:sandstone_bricks']);

  event.remove({
    output: "blockus:sandstone_bricks_slab"
  });
  event.shapeless('blockus:sandstone_bricks_slab', ['consistency_plus:sandstone_brick_slab'])
  event.shapeless('consistency_plus:sandstone_brick_slab', ['blockus:sandstone_bricks_slab']);

  event.remove({
    output: "blockus:sandstone_bricks_stairs"
  });
  event.shapeless('blockus:sandstone_bricks_stairs', ['consistency_plus:sandstone_brick_stairs'])
  event.shapeless('consistency_plus:sandstone_brick_stairs', ['blockus:sandstone_bricks_stairs']);

  event.remove({
    output: "blockus:sandstone_bricks_wall"
  });
  event.shapeless('blockus:sandstone_bricks_wall', ['consistency_plus:sandstone_brick_wall'])
  event.shapeless('consistency_plus:sandstone_brick_wall', ['blockus:sandstone_bricks_wall']);

  event.remove({
    output: "blockus:red_sandstone_bricks"
  });
  event.shapeless('blockus:red_sandstone_bricks', ['consistency_plus:red_sandstone_bricks'])
  event.shapeless('consistency_plus:red_sandstone_bricks', ['blockus:red_sandstone_bricks']);

  event.remove({
    output: "blockus:red_sandstone_bricks_slab"
  });
  event.shapeless('blockus:red_sandstone_bricks_slab', ['consistency_plus:red_sandstone_brick_slab'])
  event.shapeless('consistency_plus:red_sandstone_brick_slab', ['blockus:red_sandstone_bricks_slab']);

  event.remove({
    output: "blockus:red_sandstone_bricks_stairs"
  });
  event.shapeless('blockus:red_sandstone_bricks_stairs', ['consistency_plus:red_sandstone_brick_stairs'])
  event.shapeless('consistency_plus:red_sandstone_brick_stairs', ['blockus:red_sandstone_bricks_stairs']);

  event.remove({
    output: "blockus:red_sandstone_bricks_wall"
  });
  event.shapeless('blockus:red_sandstone_bricks_wall', ['consistency_plus:red_sandstone_brick_wall'])
  event.shapeless('consistency_plus:red_sandstone_brick_wall', ['blockus:red_sandstone_bricks_wall']);

  event.remove({
    output: "blockus:rough_red_sandstone"
  });
  event.shapeless('blockus:rough_red_sandstone', ['consistency_plus:cobbled_red_sandstone'])
  event.shapeless('consistency_plus:cobbled_red_sandstone', ['blockus:rough_red_sandstone']);

  event.remove({
    output: "blockus:rough_red_sandstone_slab"
  });
  event.shapeless('blockus:rough_red_sandstone_slab', ['consistency_plus:cobbled_red_sandstone_slab'])
  event.shapeless('consistency_plus:cobbled_red_sandstone_slab', ['blockus:rough_red_sandstone_slab']);

  event.remove({
    output: "blockus:rough_red_sandstone_stairs"
  });
  event.shapeless('blockus:rough_red_sandstone_stairs', ['consistency_plus:cobbled_red_sandstone_stairs'])
  event.shapeless('consistency_plus:cobbled_red_sandstone_stairs', ['blockus:rough_red_sandstone_stairs']);

  event.remove({
    output: "blockus:rough_soul_sandstone"
  });
  event.shapeless('blockus:rough_soul_sandstone', ['consistency_plus:cobbled_soul_sandstone'])
  event.shapeless('consistency_plus:cobbled_soul_sandstone', ['blockus:rough_soul_sandstone']);

  event.remove({
    output: "blockus:rough_soul_sandstone_slab"
  });
  event.shapeless('blockus:rough_soul_sandstone_slab', ['consistency_plus:cobbled_soul_sandstone_slab'])
  event.shapeless('consistency_plus:cobbled_soul_sandstone_slab', ['blockus:rough_soul_sandstone_slab']);

  event.remove({
    output: "blockus:rough_soul_sandstone_stairs"
  });
  event.shapeless('blockus:rough_soul_sandstone_stairs', ['consistency_plus:cobbled_soul_sandstone_stairs'])
  event.shapeless('consistency_plus:cobbled_soul_sandstone_stairs', ['blockus:rough_soul_sandstone_stairs']);

  event.remove({
    output: "blockus:soul_sandstone_bricks"
  });
  event.shapeless('blockus:soul_sandstone_bricks', ['consistency_plus:soul_sandstone_bricks'])
  event.shapeless('consistency_plus:soul_sandstone_bricks', ['blockus:soul_sandstone_bricks']);

  event.remove({
    output: "blockus:soul_sandstone_bricks_slab"
  });
  event.shapeless('blockus:soul_sandstone_bricks_slab', ['consistency_plus:soul_sandstone_brick_slab'])
  event.shapeless('consistency_plus:soul_sandstone_brick_slab', ['blockus:soul_sandstone_bricks_slab']);

  event.remove({
    output: "blockus:soul_sandstone_bricks_stairs"
  });
  event.shapeless('blockus:soul_sandstone_bricks_stairs', ['consistency_plus:soul_sandstone_brick_stairs'])
  event.shapeless('consistency_plus:soul_sandstone_brick_stairs', ['blockus:soul_sandstone_bricks_stairs']);

  event.remove({
    output: "blockus:soul_sandstone_bricks_wall"
  });
  event.shapeless('blockus:soul_sandstone_bricks_wall', ['consistency_plus:soul_sandstone_brick_wall'])
  event.shapeless('consistency_plus:soul_sandstone_brick_wall', ['blockus:soul_sandstone_bricks_wall']);

  event.remove({
    output: "blockus:soul_sandstone"
  });
  event.shapeless('blockus:soul_sandstone', ['consistency_plus:soul_sandstone'])
  event.shapeless('consistency_plus:soul_sandstone', ['blockus:soul_sandstone']);

  //╔════════════════════════════════════════╗
  //║            CONCRETE BLOCKS             ║
  //╚════════════════════════════════════════╝

  event.remove({
    output: "blockus:magenta_concrete_bricks"
  });
  event.shapeless('blockus:magenta_concrete_bricks', ['consistency_plus:magenta_concrete_bricks'])
  event.shapeless('consistency_plus:magenta_concrete_bricks', ['blockus:magenta_concrete_bricks']);

  event.remove({
    output: "blockus:white_concrete_bricks"
  });
  event.shapeless('blockus:white_concrete_bricks', ['consistency_plus:white_concrete_bricks'])
  event.shapeless('consistency_plus:white_concrete_bricks', ['blockus:white_concrete_bricks']);

  event.remove({
    output: "blockus:red_concrete_bricks"
  });
  event.shapeless('blockus:red_concrete_bricks', ['consistency_plus:red_concrete_bricks'])
  event.shapeless('consistency_plus:red_concrete_bricks', ['blockus:red_concrete_bricks']);

  event.remove({
    output: "blockus:blue_concrete_bricks"
  });
  event.shapeless('blockus:blue_concrete_bricks', ['consistency_plus:blue_concrete_bricks'])
  event.shapeless('consistency_plus:blue_concrete_bricks', ['blockus:blue_concrete_bricks']);

  event.remove({
    output: "blockus:cyan_concrete_bricks"
  });
  event.shapeless('blockus:cyan_concrete_bricks', ['consistency_plus:cyan_concrete_bricks'])
  event.shapeless('consistency_plus:cyan_concrete_bricks', ['blockus:cyan_concrete_bricks']);

  event.remove({
    output: "blockus:gray_concrete_bricks"
  });
  event.shapeless('blockus:gray_concrete_bricks', ['consistency_plus:gray_concrete_bricks'])
  event.shapeless('consistency_plus:gray_concrete_bricks', ['blockus:gray_concrete_bricks']);

  event.remove({
    output: "blockus:brown_concrete_bricks"
  });
  event.shapeless('blockus:brown_concrete_bricks', ['consistency_plus:brown_concrete_bricks'])
  event.shapeless('consistency_plus:brown_concrete_bricks', ['blockus:brown_concrete_bricks']);

  event.remove({
    output: "blockus:orange_concrete_bricks"
  });
  event.shapeless('blockus:orange_concrete_bricks', ['consistency_plus:orange_concrete_bricks'])
  event.shapeless('consistency_plus:orange_concrete_bricks', ['blockus:orange_concrete_bricks']);

  event.remove({
    output: "blockus:black_concrete_bricks"
  });
  event.shapeless('blockus:black_concrete_bricks', ['consistency_plus:black_concrete_bricks'])
  event.shapeless('consistency_plus:black_concrete_bricks', ['blockus:black_concrete_bricks']);

  event.remove({
    output: "blockus:lime_concrete_bricks"
  });
  event.shapeless('blockus:lime_concrete_bricks', ['consistency_plus:lime_concrete_bricks'])
  event.shapeless('consistency_plus:lime_concrete_bricks', ['blockus:lime_concrete_bricks']);

  event.remove({
    output: "blockus:green_concrete_bricks"
  });
  event.shapeless('blockus:green_concrete_bricks', ['consistency_plus:green_concrete_bricks'])
  event.shapeless('consistency_plus:green_concrete_bricks', ['blockus:green_concrete_bricks']);

  event.remove({
    output: "blockus:pink_concrete_bricks"
  });
  event.shapeless('blockus:pink_concrete_bricks', ['consistency_plus:pink_concrete_bricks'])
  event.shapeless('consistency_plus:pink_concrete_bricks', ['blockus:pink_concrete_bricks']);

  event.remove({
    output: "blockus:light_gray_concrete_bricks"
  });
  event.shapeless('blockus:light_gray_concrete_bricks', ['consistency_plus:light_gray_concrete_bricks'])
  event.shapeless('consistency_plus:light_gray_concrete_bricks', ['blockus:light_gray_concrete_bricks']);

  event.remove({
    output: "blockus:light_blue_concrete_bricks"
  });
  event.shapeless('blockus:light_blue_concrete_bricks', ['consistency_plus:light_blue_concrete_bricks'])
  event.shapeless('consistency_plus:light_blue_concrete_bricks', ['blockus:light_blue_concrete_bricks']);

  event.remove({
    output: "blockus:purple_concrete_bricks"
  });
  event.shapeless('blockus:purple_concrete_bricks', ['consistency_plus:purple_concrete_bricks'])
  event.shapeless('consistency_plus:purple_concrete_bricks', ['blockus:purple_concrete_bricks']);

  //╔════════════════════════════════════════╗
  //║            CONCRETE SLABS              ║
  //╚════════════════════════════════════════╝

  event.remove({
    output: "blockus:magenta_concrete_brick_slab"
  });
  event.shapeless('blockus:magenta_concrete_brick_slab', ['consistency_plus:magenta_concrete_brick_slab'])
  event.shapeless('consistency_plus:magenta_concrete_brick_slab', ['blockus:magenta_concrete_brick_slab']);

  event.remove({
    output: "blockus:white_concrete_brick_slab"
  });
  event.shapeless('blockus:white_concrete_brick_slab', ['consistency_plus:white_concrete_brick_slab'])
  event.shapeless('consistency_plus:white_concrete_brick_slab', ['blockus:white_concrete_brick_slab']);

  event.remove({
    output: "blockus:red_concrete_brick_slab"
  });
  event.shapeless('blockus:red_concrete_brick_slab', ['consistency_plus:red_concrete_brick_slab'])
  event.shapeless('consistency_plus:red_concrete_brick_slab', ['blockus:red_concrete_brick_slab']);

  event.remove({
    output: "blockus:blue_concrete_brick_slab"
  });
  event.shapeless('blockus:blue_concrete_brick_slab', ['consistency_plus:blue_concrete_brick_slab'])
  event.shapeless('consistency_plus:blue_concrete_brick_slab', ['blockus:blue_concrete_brick_slab']);

  event.remove({
    output: "blockus:cyan_concrete_brick_slab"
  });
  event.shapeless('blockus:cyan_concrete_brick_slab', ['consistency_plus:cyan_concrete_brick_slab'])
  event.shapeless('consistency_plus:cyan_concrete_brick_slab', ['blockus:cyan_concrete_brick_slab']);

  event.remove({
    output: "blockus:gray_concrete_brick_slab"
  });
  event.shapeless('blockus:gray_concrete_brick_slab', ['consistency_plus:gray_concrete_brick_slab'])
  event.shapeless('consistency_plus:gray_concrete_brick_slab', ['blockus:gray_concrete_brick_slab']);

  event.remove({
    output: "blockus:brown_concrete_brick_slab"
  });
  event.shapeless('blockus:brown_concrete_brick_slab', ['consistency_plus:brown_concrete_brick_slab'])
  event.shapeless('consistency_plus:brown_concrete_brick_slab', ['blockus:brown_concrete_brick_slab']);

  event.remove({
    output: "blockus:orange_concrete_brick_slab"
  });
  event.shapeless('blockus:orange_concrete_brick_slab', ['consistency_plus:orange_concrete_brick_slab'])
  event.shapeless('consistency_plus:orange_concrete_brick_slab', ['blockus:orange_concrete_brick_slab']);

  event.remove({
    output: "blockus:black_concrete_brick_slab"
  });
  event.shapeless('blockus:black_concrete_brick_slab', ['consistency_plus:black_concrete_brick_slab'])
  event.shapeless('consistency_plus:black_concrete_brick_slab', ['blockus:black_concrete_brick_slab']);

  event.remove({
    output: "blockus:lime_concrete_brick_slab"
  });
  event.shapeless('blockus:lime_concrete_brick_slab', ['consistency_plus:lime_concrete_brick_slab'])
  event.shapeless('consistency_plus:lime_concrete_brick_slab', ['blockus:lime_concrete_brick_slab']);

  event.remove({
    output: "blockus:green_concrete_brick_slab"
  });
  event.shapeless('blockus:green_concrete_brick_slab', ['consistency_plus:green_concrete_brick_slab'])
  event.shapeless('consistency_plus:green_concrete_brick_slab', ['blockus:green_concrete_brick_slab']);

  event.remove({
    output: "blockus:pink_concrete_brick_slab"
  });
  event.shapeless('blockus:pink_concrete_brick_slab', ['consistency_plus:pink_concrete_brick_slab'])
  event.shapeless('consistency_plus:pink_concrete_brick_slab', ['blockus:pink_concrete_brick_slab']);

  event.remove({
    output: "blockus:light_gray_concrete_brick_slab"
  });
  event.shapeless('blockus:light_gray_concrete_brick_slab', ['consistency_plus:light_gray_concrete_brick_slab'])
  event.shapeless('consistency_plus:light_gray_concrete_brick_slab', ['blockus:light_gray_concrete_brick_slab']);

  event.remove({
    output: "blockus:light_blue_concrete_brick_slab"
  });
  event.shapeless('blockus:light_blue_concrete_brick_slab', ['consistency_plus:light_blue_concrete_brick_slab'])
  event.shapeless('consistency_plus:light_blue_concrete_brick_slab', ['blockus:light_blue_concrete_brick_slab']);

  event.remove({
    output: "blockus:purple_concrete_brick_slab"
  });
  event.shapeless('blockus:purple_concrete_brick_slab', ['consistency_plus:purple_concrete_brick_slab'])
  event.shapeless('consistency_plus:purple_concrete_brick_slab', ['blockus:purple_concrete_brick_slab']);

  //╔════════════════════════════════════════╗
  //║            CONCRETE STAIRS             ║
  //╚════════════════════════════════════════╝

  event.remove({
    output: "blockus:magenta_concrete_brick_stairs"
  });
  event.shapeless('blockus:magenta_concrete_brick_stairs', ['consistency_plus:magenta_concrete_brick_stairs'])
  event.shapeless('consistency_plus:magenta_concrete_brick_stairs', ['blockus:magenta_concrete_brick_stairs']);

  event.remove({
    output: "blockus:white_concrete_brick_stairs"
  });
  event.shapeless('blockus:white_concrete_brick_stairs', ['consistency_plus:white_concrete_brick_stairs'])
  event.shapeless('consistency_plus:white_concrete_brick_stairs', ['blockus:white_concrete_brick_stairs']);

  event.remove({
    output: "blockus:red_concrete_brick_stairs"
  });
  event.shapeless('blockus:red_concrete_brick_stairs', ['consistency_plus:red_concrete_brick_stairs'])
  event.shapeless('consistency_plus:red_concrete_brick_stairs', ['blockus:red_concrete_brick_stairs']);

  event.remove({
    output: "blockus:blue_concrete_brick_stairs"
  });
  event.shapeless('blockus:blue_concrete_brick_stairs', ['consistency_plus:blue_concrete_brick_stairs'])
  event.shapeless('consistency_plus:blue_concrete_brick_stairs', ['blockus:blue_concrete_brick_stairs']);

  event.remove({
    output: "blockus:cyan_concrete_brick_stairs"
  });
  event.shapeless('blockus:cyan_concrete_brick_stairs', ['consistency_plus:cyan_concrete_brick_stairs'])
  event.shapeless('consistency_plus:cyan_concrete_brick_stairs', ['blockus:cyan_concrete_brick_stairs']);

  event.remove({
    output: "blockus:gray_concrete_brick_stairs"
  });
  event.shapeless('blockus:gray_concrete_brick_stairs', ['consistency_plus:gray_concrete_brick_stairs'])
  event.shapeless('consistency_plus:gray_concrete_brick_stairs', ['blockus:gray_concrete_brick_stairs']);

  event.remove({
    output: "blockus:brown_concrete_brick_stairs"
  });
  event.shapeless('blockus:brown_concrete_brick_stairs', ['consistency_plus:brown_concrete_brick_stairs'])
  event.shapeless('consistency_plus:brown_concrete_brick_stairs', ['blockus:brown_concrete_brick_stairs']);

  event.remove({
    output: "blockus:orange_concrete_brick_stairs"
  });
  event.shapeless('blockus:orange_concrete_brick_stairs', ['consistency_plus:orange_concrete_brick_stairs'])
  event.shapeless('consistency_plus:orange_concrete_brick_stairs', ['blockus:orange_concrete_brick_stairs']);

  event.remove({
    output: "blockus:black_concrete_brick_stairs"
  });
  event.shapeless('blockus:black_concrete_brick_stairs', ['consistency_plus:black_concrete_brick_stairs'])
  event.shapeless('consistency_plus:black_concrete_brick_stairs', ['blockus:black_concrete_brick_stairs']);

  event.remove({
    output: "blockus:lime_concrete_brick_stairs"
  });
  event.shapeless('blockus:lime_concrete_brick_stairs', ['consistency_plus:lime_concrete_brick_stairs'])
  event.shapeless('consistency_plus:lime_concrete_brick_stairs', ['blockus:lime_concrete_brick_stairs']);

  event.remove({
    output: "blockus:green_concrete_brick_stairs"
  });
  event.shapeless('blockus:green_concrete_brick_stairs', ['consistency_plus:green_concrete_brick_stairs'])
  event.shapeless('consistency_plus:green_concrete_brick_stairs', ['blockus:green_concrete_brick_stairs']);

  event.remove({
    output: "blockus:pink_concrete_brick_stairs"
  });
  event.shapeless('blockus:pink_concrete_brick_stairs', ['consistency_plus:pink_concrete_brick_stairs'])
  event.shapeless('consistency_plus:pink_concrete_brick_stairs', ['blockus:pink_concrete_brick_stairs']);

  event.remove({
    output: "blockus:light_gray_concrete_brick_stairs"
  });
  event.shapeless('blockus:light_gray_concrete_brick_stairs', ['consistency_plus:light_gray_concrete_brick_stairs'])
  event.shapeless('consistency_plus:light_gray_concrete_brick_stairs', ['blockus:light_gray_concrete_brick_stairs']);

  event.remove({
    output: "blockus:light_blue_concrete_brick_stairs"
  });
  event.shapeless('blockus:light_blue_concrete_brick_stairs', ['consistency_plus:light_blue_concrete_brick_stairs'])
  event.shapeless('consistency_plus:light_blue_concrete_brick_stairs', ['blockus:light_blue_concrete_brick_stairs']);

  event.remove({
    output: "blockus:purple_concrete_brick_stairs"
  });
  event.shapeless('blockus:purple_concrete_brick_stairs', ['consistency_plus:purple_concrete_brick_stairs'])
  event.shapeless('consistency_plus:purple_concrete_brick_stairs', ['blockus:purple_concrete_brick_stairs']);

  //╔═══════════════════════════════════════╗
  //║           OBSIDIAN BRICKS             ║
  //╚═══════════════════════════════════════╝

  event.remove({
    output: "blockus:obsidian_bricks"
  });
  event.shapeless('blockus:obsidian_bricks', ['consistency_plus:obsidian_bricks'])
  event.shapeless('consistency_plus:obsidian_bricks', ['blockus:obsidian_bricks']);

  event.remove({
    output: "blockus:obsidian_bricks_slab"
  });
  event.shapeless('blockus:obsidian_bricks_slab', ['consistency_plus:obsidian_brick_slab'])
  event.shapeless('consistency_plus:obsidian_brick_slab', ['blockus:obsidian_bricks_slab']);

  event.remove({
    output: "blockus:obsidian_bricks_stairs"
  });
  event.shapeless('blockus:obsidian_bricks_stairs', ['consistency_plus:obsidian_brick_stairs'])
  event.shapeless('consistency_plus:obsidian_brick_stairs', ['blockus:obsidian_bricks_stairs']);

  event.remove({
    output: "blockus:obsidian_bricks_wall"
  });
  event.shapeless('blockus:obsidian_bricks_wall', ['consistency_plus:obsidian_brick_wall'])
  event.shapeless('consistency_plus:obsidian_brick_wall', ['blockus:obsidian_bricks_wall']);

  //╔════════════════════════════════════════╗
  //║            ANDESITE BRICKS             ║
  //╚════════════════════════════════════════╝

  event.remove({
    output: "blockus:andesite_bricks"
  });
  event.shapeless('blockus:andesite_bricks', ['consistency_plus:andesite_bricks'])
  event.shapeless('consistency_plus:andesite_bricks', ['blockus:andesite_bricks']);

  event.remove({
    output: "blockus:andesite_bricks_slab"
  });
  event.shapeless('blockus:andesite_bricks_slab', ['consistency_plus:andesite_brick_slab'])
  event.shapeless('consistency_plus:andesite_brick_slab', ['blockus:andesite_bricks_slab']);

  event.remove({
    output: "blockus:andesite_bricks_stairs"
  });
  event.shapeless('blockus:andesite_bricks_stairs', ['consistency_plus:andesite_brick_stairs'])
  event.shapeless('consistency_plus:andesite_brick_stairs', ['blockus:andesite_bricks_stairs']);

  event.remove({
    output: "blockus:andesite_bricks_wall"
  });
  event.shapeless('blockus:andesite_bricks_wall', ['consistency_plus:andesite_brick_wall'])
  event.shapeless('consistency_plus:andesite_brick_wall', ['blockus:andesite_bricks_wall']);

  //╔════════════════════════════════════════╗
  //║            GRANITE BRICKS              ║
  //╚════════════════════════════════════════╝

  event.remove({
    output: "blockus:granite_bricks"
  });
  event.shapeless('blockus:granite_bricks', ['consistency_plus:granite_bricks'])
  event.shapeless('consistency_plus:granite_bricks', ['blockus:granite_bricks']);

  event.remove({
    output: "blockus:granite_bricks_slab"
  });
  event.shapeless('blockus:granite_bricks_slab', ['consistency_plus:granite_brick_slab'])
  event.shapeless('consistency_plus:granite_brick_slab', ['blockus:granite_bricks_slab']);

  event.remove({
    output: "blockus:granite_bricks_stairs"
  });
  event.shapeless('blockus:granite_bricks_stairs', ['consistency_plus:granite_brick_stairs'])
  event.shapeless('consistency_plus:granite_brick_stairs', ['blockus:granite_bricks_stairs']);

  event.remove({
    output: "blockus:granite_bricks_wall"
  });
  event.shapeless('blockus:granite_bricks_wall', ['consistency_plus:granite_brick_wall'])
  event.shapeless('consistency_plus:granite_brick_wall', ['blockus:granite_bricks_wall']);

  //╔════════════════════════════════════════╗
  //║            DIORITE BRICKS              ║
  //╚════════════════════════════════════════╝

  event.remove({
    output: "blockus:diorite_bricks"
  });
  event.shapeless('blockus:diorite_bricks', ['consistency_plus:diorite_bricks'])
  event.shapeless('consistency_plus:diorite_bricks', ['blockus:diorite_bricks']);

  event.remove({
    output: "blockus:diorite_bricks_slab"
  });
  event.shapeless('blockus:diorite_bricks_slab', ['consistency_plus:diorite_brick_slab'])
  event.shapeless('consistency_plus:diorite_brick_slab', ['blockus:diorite_bricks_slab']);

  event.remove({
    output: "blockus:diorite_bricks_stairs"
  });
  event.shapeless('blockus:diorite_bricks_stairs', ['consistency_plus:diorite_brick_stairs'])
  event.shapeless('consistency_plus:diorite_brick_stairs', ['blockus:diorite_bricks_stairs']);

  event.remove({
    output: "blockus:diorite_bricks_wall"
  });
  event.shapeless('blockus:diorite_bricks_wall', ['consistency_plus:diorite_brick_wall'])
  event.shapeless('consistency_plus:diorite_brick_wall', ['blockus:diorite_bricks_wall']);

  //╔════════════════════════════════════════╗
  //║              PACKED ICE                ║
  //╚════════════════════════════════════════╝

  // Architects Palette & consistency_plus - Ice

  event.remove({
    output: "consistency_plus:blue_ice"
  });
  event.shapeless('architects_palette:polished_packed_ice', ['consistency_plus:blue_ice']);
  event.shapeless('consistency_plus:blue_ice', ['architects_palette:polished_packed_ice'])

  event.remove({
    output: "consistency_plus:blue_ice_slab"
  });
  event.shapeless('architects_palette:polished_packed_ice_slab', ['consistency_plus:blue_ice_slab']);
  event.shapeless('consistency_plus:blue_ice_slab', ['architects_palette:polished_packed_ice_slab'])

  event.remove({
    output: "consistency_plus:blue_ice_stairs"
  });
  event.shapeless('architects_palette:polished_packed_ice_stairs', ['consistency_plus:blue_ice_stairs']);
  event.shapeless('consistency_plus:blue_ice_stairs', ['architects_palette:polished_packed_ice_stairs'])

  event.remove({
    output: "consistency_plus:blue_ice_wall"
  });
  event.shapeless('architects_palette:polished_packed_ice_wall', ['consistency_plus:blue_ice_wall']);
  event.shapeless('consistency_plus:blue_ice_wall', ['architects_palette:polished_packed_ice_wall'])

  event.remove({
    output: "consistency_plus:blue_ice_bricks"
  });
  event.shapeless('consistency_plus:blue_ice_bricks', ['architects_palette:polished_packed_ice_bricks'])
  event.shapeless('architects_palette:polished_packed_ice_bricks', ['consistency_plus:blue_ice_bricks']);

  event.remove({
    output: "consistency_plus:blue_ice_bricks_slab"
  });
  event.shapeless('consistency_plus:blue_ice_bricks_slab', ['architects_palette:polished_packed_ice_brick_slab'])
  event.shapeless('architects_palette:polished_packed_ice_brick_slab', ['consistency_plus:blue_ice_bricks_slab']);

  event.remove({
    output: "consistency_plus:polished_packed_ice_brick_stairs"
  });
  event.shapeless('consistency_plus:blue_ice_bricks_stairs', ['architects_palette:polished_packed_ice_brick_stairs'])
  event.shapeless('architects_palette:polished_packed_ice_brick_stairs', ['consistency_plus:blue_ice_bricks_stairs']);

  event.remove({
    output: "consistency_plus:polished_packed_ice_brick_wall"
  });
  event.shapeless('consistency_plus:blue_ice_bricks_wall', ['architects_palette:polished_packed_ice_brick_wall'])
  event.shapeless('architects_palette:polished_packed_ice_brick_wall', ['consistency_plus:blue_ice_bricks_wall']);
});
