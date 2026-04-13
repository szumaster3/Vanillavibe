//╔════════════════════════════════════════╗
//║         Copyright © 2022 CSS           ║
//╚════════════════════════════════════════╝
//╔════════════════════════════════════════╗
//║     GNU Free Documentation License     ║
//╚════════════════════════════════════════╝
events.listen('item.tags', function(event) {

  // Metals
  event.get('c:iron_ingots').remove('betterend:thallasium_ingot')
  event.get('minecraft:beacon_payment_items').remove('betterend:thallasium_ingot')
  event.get('c:iron_ingots').add('pigsteel:pigsteel_ingot')
  event.get('c:iron_blocks').add('pigsteel:pigsteel_block')
  event.get('c:iron_nuggets').add('pigsteel:pigsteel_nugget')

  // BetterNether miscs
  event.get('c:rubies').add('betternether:nether_ruby')
  event.get('c:ruby_blocks').add('betternether:nether_ruby_block')
  event.get('minecraft:stairs').add('betternether:nether_ruby_stairs')
  event.get('minecraft:slabs').add('betternether:nether_ruby_slab')

  // Dank
  event.get("dankstorage:blacklisted_storage").remove("minecraft:stone");
  
  // Gears
  event.get('c:iron_gears').add('kubejs:pigsteel_gear');

  // Chests
  var chests = [
    "oak",
    "spruce",
    "birch",
    "jungle",
    "acacia",
    "dark_oak",
    "crimson",
    "warped",
  ];

  // BetterEnd
  var end = [
    "mossy_glowshroom",
    "pythadendron",
    "end_lotus",
    "lacugrove",
    "lucernia",
    "dragon_tree",
    "tenanea",
    "helix_tree",
    "umbrella_tree",
    "jellyshroom"
  ];

  chests.forEach(function(item, index) {
    event.get("c:wooden_chests").add("charm:" + item + "_chest")
    event.get("c:wooden_chests").add("charm:" + item + "_trapped_chest")
  });

  end.forEach(function(item, index) {
    event.get("c:wooden_chests").add("betterend:" + item + "_chest")
    event.get("charm:barrels").add("betterend:" + item + "_barrel")
  });
  
  // BetterNether
  var nether = [
    "anchor_tree",
    "crimson",
    "mushroom",
    "mushroom_fir",
    "nether_sakura",
    "of_drawers",
    "reed",
    "rubeus",
    "stalagnate",
    "warped",
    "wart",
    "willow",
  ];
	
  nether.forEach(function(item, index) {
    event.get("c:wooden_chests").add("betternether:chest_" + item)
  });

  // BetterNether Barrels
  var netherBarrels = [
    "anchor_tree",
    "crimson",
    "mushroom",
    "mushroom_fir",
    "nether_sakura",
    "reed",
    "rubeus",
    "stalagnate",
    "warped",
    "wart",
    "willow",
  ];

  netherBarrels.forEach(function(item, index) {
    event.get("charm:barrels").add("betternether:barrel_" + item)
  });
  
  // Crafting Tables
  var crafting = [
    'byg:nightshade_crafting_table',
    'byg:bulbis_crafting_table',
    'byg:ether_crafting_table',
  ];

  crafting.forEach(function(item, index) {
    event.get("c:workbench").add(item)
  });
  
  // Crafting Tables BetterNether
  var craftingTables = [
    "crafting_table_anchor_tree",
    "crafting_table_crimson",
    "crafting_table_mushroom",
    "crafting_table_mushroom_fir",
    "crafting_table_nether_sakura",
    "crafting_table_reed",
    "crafting_table_rubeus",
    "crafting_table_stalagnate",
    "crafting_table_warped",
    "crafting_table_wart",
    "crafting_table_willow",
   ];

  craftingTables.forEach(function(item, index) {
    event.get("c:workbench").add("betternether:" + item)
  });
  
});