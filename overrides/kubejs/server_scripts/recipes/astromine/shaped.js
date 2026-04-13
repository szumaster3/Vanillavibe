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

  // Altar
  event.shaped(item.of("astromine:altar"), [
    ["techreborn:tungstensteel_storage_block", "techreborn:tungstensteel_storage_block", "techreborn:tungstensteel_storage_block"],
    ["astromine:galaxium_block", "techreborn:lead_storage_block", "astromine:galaxium_block"],
    ["techreborn:tungstensteel_storage_block", "techreborn:tungstensteel_storage_block", "techreborn:tungstensteel_storage_block"],
  ]);


  // Altar Pedestal
  event.shaped(item.of("astromine:altar_pedestal"), [
    ["techreborn:tungstensteel_plate", "techreborn:tungstensteel_plate", "techreborn:tungstensteel_plate"],
    ["astromine:galaxium", "techreborn:lead_plate", "astromine:galaxium"],
    ["techreborn:tungstensteel_plate", "techreborn:tungstensteel_plate", "techreborn:tungstensteel_plate"],
  ]);

  // Glowstone
  event.remove({
    output: "astromine:glowstone_tiny_dust"
  });
  event.shaped(item.of("astromine:glowstone_tiny_dust", 18), [
    ["minecraft:glowstone_dust", "minecraft:glowstone_dust"],
  ]);
})
