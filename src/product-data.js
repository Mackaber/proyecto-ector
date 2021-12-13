const products = [
  {
    id: 1,
    name: "Awesome Granite Bacon",
    productType: "Kids",
    price: 962,
    rating: 3,
    image:
      "https://i.pinimg.com/originals/eb/83/be/eb83be580847bcdc4c8f403c8085d3c8.jpg",
    description:
      "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients"
  },
  {
    id: 2,
    name: "Unbranded Steel Fish",
    productType: "Shoes",
    price: 643,
    rating: 5,
    image:
      "https://i.pinimg.com/originals/ee/f3/f4/eef3f4858339074c0bba500abfbf6850.jpg",
    description:
      "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support"
  },
  {
    id: 3,
    name: "Tasty Concrete Chips",
    productType: "Sports",
    price: 610,
    rating: 3,
    image:
      "https://c8.alamy.com/comp/PRYX1M/tasty-mexican-tortilla-chips-with-tomato-salsa-sauce-on-dark-blue-concrete-backgroundtop-view-PRYX1M.jpg",
    description:
      "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J"
  },
  {
    id: 5,
    name: "Fantastic Granite Bacon",
    productType: "Xbox Christmas Sweater",
    price: 730,
    rating: 5,
    image:
      "https://thumbs.dreamstime.com/b/crisp-fried-bacon-plate-above-grey-granite-background-table-crisp-fried-bacon-plate-above-grey-granite-background-103030258.jpg",
    description:
      "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality"
  },
  {
    id: 6,
    name: "Practical Metal Shirt",
    productType: "Outdoors",
    price: 57,
    rating: 2,
    image:
      "https://vangogh.teespring.com/v3/image/12EVK10jQxRf-PlivW0xr0YToz4/480/560.jpg",
    description:
      "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart"
  },
  {
    id: 7,
    name: "Sleek Granite Pants",
    productType: "Jewelery",
    price: 153,
    rating: 5,
    image:
      "https://i.pinimg.com/originals/f4/fb/89/f4fb89e0b418002bd8d6953138990840.jpg",
    description:
      "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals"
  },
  {
    id: 8,
    name: "Tasty Soft Gloves",
    productType: "Movies",
    price: 49,
    rating: 5,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/61ZCzwCRVjL._AC_SX522_.jpg",
    description:
      "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016"
  },
  {
    id: 9,
    name: "Refined Fresh Car",
    productType: "Industrial",
    price: 213,
    rating: 5,
    image:
      "https://www.ld-aromaticos.com/imagenes/productos/Fresh%20New%20Car-Spray%2060%20ml-Coche%20nuevo.jpg",
    description:
      "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals"
  },
  {
    id: 10,
    name: "Intelligent Rubber Sausages",
    productType: "Music",
    price: 673,
    rating: 5,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51tUmnnQSlL._AC_SL1001_.jpg",
    description:
      "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals"
  },
  {
    id: 11,
    name: "Intelligent Metal Table",
    productType: "Computers",
    price: 711,
    rating: 5,
    image:
      "https://www.furnituremanila.com.ph/wp-content/uploads/2016/10/KD-7113-4-metal-table.jpg",
    description:
      "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J"
  },
  {
    id: 12,
    name: "Sleek Metal Chips",
    productType: "Grocery",
    price: 735,
    rating: 5,
    image:
      "https://cdn.shopify.com/s/files/1/0155/8131/products/AAC-41-02-29-PE_2_2000x.jpg?v=1616572319",
    description:
      "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J"
  },
  {
    id: 13,
    name: "Refined Frozen Shirt",
    productType: "Baby",
    price: 604,
    rating: 5,
    image:
      "https://cdn.shopify.com/s/files/1/2385/1259/products/frts5994-Frozen-T-Shirt-x_720x720.jpg?v=1610362655",
    description:
      "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals"
  },
  {
    id: 14,
    name: "Sleek Rubber Computer",
    productType: "Tools",
    price: 196,
    rating: 4,
    image:
      "https://i5.walmartimages.com/asr/3766ae57-7aba-48f1-a38e-1aadd5ef5ff7.7ba4acf23bc4c3d5020c60d8ed758c1b.jpeg",
    description:
      "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals"
  },
  {
    id: 15,
    name: "Incredible Rubber Tuna",
    productType: "Outdoors",
    price: 28,
    rating: 5,
    image:
      "https://ae01.alicdn.com/kf/He50df0d0620942f8b607bcf4045364aci/Steeldive-SD1975-New-Arrival-2021-Blue-Hole-Rubber-Band-Stainless-Steel-316L-Big-Size-Men-Watch.jpg_Q90.jpg_.webp",
    description:
      "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design"
  },
  {
    id: 16,
    name: "Handmade Granite Ball",
    productType: "Health",
    price: 217,
    rating: 5,
    image: "https://m.media-amazon.com/images/I/71dGyefkoYL._AC_SL1500_.jpg",
    description:
      "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J"
  },
  {
    id: 17,
    name: "Rustic Soft Cheese",
    productType: "Kids",
    price: 237,
    rating: 5,
    image:
      "https://cdn.w600.comps.canstockphoto.com/soft-cheese-on-board-stock-images_csp84985156.jpg",
    description:
      "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support"
  },
  {
    id: 4,
    name: "Sweater",
    productType: "Xbox Christmas Sweater",
    price: 42,
    rating: 5,
    image:
      "https://merchoidcdn-pveiw4zwh96ot9z.netdna-ssl.com/media/catalog/product/cache/65c63282a2b3bd0da0ec5b004bcde549/x/b/xbox-jumper.jpg",
    description:
      "PC or Mac. Pepsi or Coke. Xbox or…that other console. It isn’t always easy to show your allegiances, especially when you’re bundled up for the holidays, but this jumper will let you make it abundantly clear what type of games you want to find under your tree."
  },
  {
    id: 4,
    name: "Sweater",
    productType: "Xbox Christmas Sweater",
    price: 42,
    rating: 5,
    image:
      "https://merchoidcdn-pveiw4zwh96ot9z.netdna-ssl.com/media/catalog/product/cache/65c63282a2b3bd0da0ec5b004bcde549/x/b/xbox-jumper.jpg",
    description:
      "PC or Mac. Pepsi or Coke. Xbox or…that other console. It isn’t always easy to show your allegiances, especially when you’re bundled up for the holidays, but this jumper will let you make it abundantly clear what type of games you want to find under your tree."
  },
  {
    id: 4,
    name: "Sweater",
    productType: "Xbox Christmas Sweater",
    price: 42,
    rating: 5,
    image:
      "https://merchoidcdn-pveiw4zwh96ot9z.netdna-ssl.com/media/catalog/product/cache/65c63282a2b3bd0da0ec5b004bcde549/x/b/xbox-jumper.jpg",
    description:
      "PC or Mac. Pepsi or Coke. Xbox or…that other console. It isn’t always easy to show your allegiances, especially when you’re bundled up for the holidays, but this jumper will let you make it abundantly clear what type of games you want to find under your tree."
  },
  {
    id: 4,
    name: "Sweater",
    productType: "Xbox Christmas Sweater",
    price: 42,
    rating: 5,
    image:
      "https://merchoidcdn-pveiw4zwh96ot9z.netdna-ssl.com/media/catalog/product/cache/65c63282a2b3bd0da0ec5b004bcde549/x/b/xbox-jumper.jpg",
    description:
      "PC or Mac. Pepsi or Coke. Xbox or…that other console. It isn’t always easy to show your allegiances, especially when you’re bundled up for the holidays, but this jumper will let you make it abundantly clear what type of games you want to find under your tree."
  },
  {
    id: 4,
    name: "Sweater",
    productType: "Xbox Christmas Sweater",
    price: 42,
    rating: 5,
    image:
      "https://merchoidcdn-pveiw4zwh96ot9z.netdna-ssl.com/media/catalog/product/cache/65c63282a2b3bd0da0ec5b004bcde549/x/b/xbox-jumper.jpg",
    description:
      "PC or Mac. Pepsi or Coke. Xbox or…that other console. It isn’t always easy to show your allegiances, especially when you’re bundled up for the holidays, but this jumper will let you make it abundantly clear what type of games you want to find under your tree."
  },
  {
    id: 4,
    name: "Sweater",
    productType: "Xbox Christmas Sweater",
    price: 42,
    rating: 5,
    image:
      "https://merchoidcdn-pveiw4zwh96ot9z.netdna-ssl.com/media/catalog/product/cache/65c63282a2b3bd0da0ec5b004bcde549/x/b/xbox-jumper.jpg",
    description:
      "PC or Mac. Pepsi or Coke. Xbox or…that other console. It isn’t always easy to show your allegiances, especially when you’re bundled up for the holidays, but this jumper will let you make it abundantly clear what type of games you want to find under your tree."
  },
  {
    id: 4,
    name: "Sweater",
    productType: "Xbox Christmas Sweater",
    price: 42,
    rating: 5,
    image:
      "https://merchoidcdn-pveiw4zwh96ot9z.netdna-ssl.com/media/catalog/product/cache/65c63282a2b3bd0da0ec5b004bcde549/x/b/xbox-jumper.jpg",
    description:
      "PC or Mac. Pepsi or Coke. Xbox or…that other console. It isn’t always easy to show your allegiances, especially when you’re bundled up for the holidays, but this jumper will let you make it abundantly clear what type of games you want to find under your tree."
  },
  {
    id: 4,
    name: "Sweater",
    productType: "Xbox Christmas Sweater",
    price: 42,
    rating: 5,
    image:
      "https://merchoidcdn-pveiw4zwh96ot9z.netdna-ssl.com/media/catalog/product/cache/65c63282a2b3bd0da0ec5b004bcde549/x/b/xbox-jumper.jpg",
    description:
      "PC or Mac. Pepsi or Coke. Xbox or…that other console. It isn’t always easy to show your allegiances, especially when you’re bundled up for the holidays, but this jumper will let you make it abundantly clear what type of games you want to find under your tree."
  },
  {
    id: 4,
    name: "Sweater",
    productType: "Xbox Christmas Sweater",
    price: 42,
    rating: 5,
    image:
      "https://merchoidcdn-pveiw4zwh96ot9z.netdna-ssl.com/media/catalog/product/cache/65c63282a2b3bd0da0ec5b004bcde549/x/b/xbox-jumper.jpg",
    description:
      "PC or Mac. Pepsi or Coke. Xbox or…that other console. It isn’t always easy to show your allegiances, especially when you’re bundled up for the holidays, but this jumper will let you make it abundantly clear what type of games you want to find under your tree."
  },
  {
    id: 4,
    name: "Sweater",
    productType: "Xbox Christmas Sweater",
    price: 42,
    rating: 5,
    image:
      "https://merchoidcdn-pveiw4zwh96ot9z.netdna-ssl.com/media/catalog/product/cache/65c63282a2b3bd0da0ec5b004bcde549/x/b/xbox-jumper.jpg",
    description:
      "PC or Mac. Pepsi or Coke. Xbox or…that other console. It isn’t always easy to show your allegiances, especially when you’re bundled up for the holidays, but this jumper will let you make it abundantly clear what type of games you want to find under your tree."
  },
  {
    id: 4,
    name: "Sweater",
    productType: "Xbox Christmas Sweater",
    price: 42,
    rating: 5,
    image:
      "https://merchoidcdn-pveiw4zwh96ot9z.netdna-ssl.com/media/catalog/product/cache/65c63282a2b3bd0da0ec5b004bcde549/x/b/xbox-jumper.jpg",
    description:
      "PC or Mac. Pepsi or Coke. Xbox or…that other console. It isn’t always easy to show your allegiances, especially when you’re bundled up for the holidays, but this jumper will let you make it abundantly clear what type of games you want to find under your tree."
  },
  {
    id: 4,
    name: "Sweater",
    productType: "Xbox Christmas Sweater",
    price: 42,
    rating: 5,
    image:
      "https://merchoidcdn-pveiw4zwh96ot9z.netdna-ssl.com/media/catalog/product/cache/65c63282a2b3bd0da0ec5b004bcde549/x/b/xbox-jumper.jpg",
    description:
      "PC or Mac. Pepsi or Coke. Xbox or…that other console. It isn’t always easy to show your allegiances, especially when you’re bundled up for the holidays, but this jumper will let you make it abundantly clear what type of games you want to find under your tree."
  },
  {
    id: 4,
    name: "Sweater",
    productType: "Xbox Christmas Sweater",
    price: 42,
    rating: 5,
    image:
      "https://merchoidcdn-pveiw4zwh96ot9z.netdna-ssl.com/media/catalog/product/cache/65c63282a2b3bd0da0ec5b004bcde549/x/b/xbox-jumper.jpg",
    description:
      "PC or Mac. Pepsi or Coke. Xbox or…that other console. It isn’t always easy to show your allegiances, especially when you’re bundled up for the holidays, but this jumper will let you make it abundantly clear what type of games you want to find under your tree."
  },
  {
    id: 4,
    name: "Sweater",
    productType: "Xbox Christmas Sweater",
    price: 42,
    rating: 5,
    image:
      "https://merchoidcdn-pveiw4zwh96ot9z.netdna-ssl.com/media/catalog/product/cache/65c63282a2b3bd0da0ec5b004bcde549/x/b/xbox-jumper.jpg",
    description:
      "PC or Mac. Pepsi or Coke. Xbox or…that other console. It isn’t always easy to show your allegiances, especially when you’re bundled up for the holidays, but this jumper will let you make it abundantly clear what type of games you want to find under your tree."
  },
  {
    id: 4,
    name: "Sweater",
    productType: "Xbox Christmas Sweater",
    price: 42,
    rating: 5,
    image:
      "https://merchoidcdn-pveiw4zwh96ot9z.netdna-ssl.com/media/catalog/product/cache/65c63282a2b3bd0da0ec5b004bcde549/x/b/xbox-jumper.jpg",
    description:
      "PC or Mac. Pepsi or Coke. Xbox or…that other console. It isn’t always easy to show your allegiances, especially when you’re bundled up for the holidays, but this jumper will let you make it abundantly clear what type of games you want to find under your tree."
  },
  {
    id: 4,
    name: "Sweater",
    productType: "Xbox Christmas Sweater",
    price: 42,
    rating: 5,
    image:
      "https://merchoidcdn-pveiw4zwh96ot9z.netdna-ssl.com/media/catalog/product/cache/65c63282a2b3bd0da0ec5b004bcde549/x/b/xbox-jumper.jpg",
    description:
      "PC or Mac. Pepsi or Coke. Xbox or…that other console. It isn’t always easy to show your allegiances, especially when you’re bundled up for the holidays, but this jumper will let you make it abundantly clear what type of games you want to find under your tree."
  }
];

export default products;
