const categories = [
	{
		name: "wallaby, brush kangaroo",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n01877812.jpg",
	},
	{
		name: "koala, koala bear, kangaroo bear, native bear, Phascolarctos cinereus",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n01882714.jpg",
	},
	{
		name: "wombat",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n01883070.jpg",
	},
	{
		name: "tusker",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n01871265.jpg",
	},
	{
		name: "echidna, spiny anteater, anteater",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n01872401.jpg",
	},
	{
		name: "platypus, duckbill, duckbilled platypus, duck-billed platypus, Ornithorhynchus anatinus",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n01873310.jpg",
	},
	{
		name: "Chihuahua",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02085620.jpg",
	},
	{
		name: "Japanese spaniel",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02085782.jpg",
	},
	{
		name: "Maltese dog, Maltese terrier, Maltese",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02085936.jpg",
	},
	{
		name: "Pekinese, Pekingese, Peke",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02086079.jpg",
	},
	{
		name: "Shih-Tzu",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02086240.jpg",
	},
	{
		name: "Blenheim spaniel",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02086646.jpg",
	},
	{
		name: "papillon",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02086910.jpg",
	},
	{
		name: "toy terrier",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02087046.jpg",
	},
	{
		name: "Rhodesian ridgeback",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02087394.jpg",
	},
	{
		name: "Afghan hound, Afghan",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02088094.jpg",
	},
	{
		name: "basset, basset hound",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02088238.jpg",
	},
	{
		name: "beagle",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02088364.jpg",
	},
	{
		name: "bloodhound, sleuthhound",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02088466.jpg",
	},
	{
		name: "bluetick",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02088632.jpg",
	},
	{
		name: "black-and-tan coonhound",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02089078.jpg",
	},
	{
		name: "Walker hound, Walker foxhound",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02089867.jpg",
	},
	{
		name: "English foxhound",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02089973.jpg",
	},
	{
		name: "redbone",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02090379.jpg",
	},
	{
		name: "borzoi, Russian wolfhound",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02090622.jpg",
	},
	{
		name: "Irish wolfhound",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02090721.jpg",
	},
	{
		name: "Italian greyhound",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02091032.jpg",
	},
	{
		name: "whippet",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02091134.jpg",
	},
	{
		name: "Ibizan hound, Ibizan Podenco",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02091244.jpg",
	},
	{
		name: "Norwegian elkhound, elkhound",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02091467.jpg",
	},
	{
		name: "otterhound, otter hound",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02091635.jpg",
	},
	{
		name: "Saluki, gazelle hound",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02091831.jpg",
	},
	{
		name: "Scottish deerhound, deerhound",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02092002.jpg",
	},
	{
		name: "Weimaraner",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02092339.jpg",
	},
	{
		name: "Staffordshire bullterrier, Staffordshire bull terrier",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02093256.jpg",
	},
	{
		name: "American Staffordshire terrier, Staffordshire terrier, American pit bull terrier, pit bull terrier",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02093428.jpg",
	},
	{
		name: "Bedlington terrier",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02093647.jpg",
	},
	{
		name: "Border terrier",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02093754.jpg",
	},
	{
		name: "Kerry blue terrier",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02093859.jpg",
	},
	{
		name: "Irish terrier",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02093991.jpg",
	},
	{
		name: "Norfolk terrier",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02094114.jpg",
	},
	{
		name: "Norwich terrier",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02094258.jpg",
	},
	{
		name: "Yorkshire terrier",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02094433.jpg",
	},
	{
		name: "wire-haired fox terrier",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02095314.jpg",
	},
	{
		name: "Lakeland terrier",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02095570.jpg",
	},
	{
		name: "Sealyham terrier, Sealyham",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02095889.jpg",
	},
	{
		name: "Airedale, Airedale terrier",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02096051.jpg",
	},
	{
		name: "cairn, cairn terrier",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02096177.jpg",
	},
	{
		name: "Australian terrier",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02096294.jpg",
	},
	{
		name: "Dandie Dinmont, Dandie Dinmont terrier",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02096437.jpg",
	},
	{
		name: "Boston bull, Boston terrier",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02096585.jpg",
	},
	{
		name: "miniature schnauzer",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02097047.jpg",
	},
	{
		name: "giant schnauzer",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02097130.jpg",
	},
	{
		name: "standard schnauzer",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02097209.jpg",
	},
	{
		name: "Scotch terrier, Scottish terrier, Scottie",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02097298.jpg",
	},
	{
		name: "Tibetan terrier, chrysanthemum dog",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02097474.jpg",
	},
	{
		name: "silky terrier, Sydney silky",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02097658.jpg",
	},
	{
		name: "soft-coated wheaten terrier",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02098105.jpg",
	},
	{
		name: "West Highland white terrier",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02098286.jpg",
	},
	{
		name: "Lhasa, Lhasa apso",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02098413.jpg",
	},
	{
		name: "flat-coated retriever",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02099267.jpg",
	},
	{
		name: "curly-coated retriever",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02099429.jpg",
	},
	{
		name: "golden retriever",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02099601.jpg",
	},
	{
		name: "Labrador retriever",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02099712.jpg",
	},
	{
		name: "Chesapeake Bay retriever",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02099849.jpg",
	},
	{
		name: "German short-haired pointer",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02100236.jpg",
	},
	{
		name: "vizsla, Hungarian pointer",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02100583.jpg",
	},
	{
		name: "English setter",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02100735.jpg",
	},
	{
		name: "Irish setter, red setter",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02100877.jpg",
	},
	{
		name: "Gordon setter",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02101006.jpg",
	},
	{
		name: "Brittany spaniel",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02101388.jpg",
	},
	{
		name: "clumber, clumber spaniel",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02101556.jpg",
	},
	{
		name: "English springer, English springer spaniel",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02102040.jpg",
	},
	{
		name: "Welsh springer spaniel",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02102177.jpg",
	},
	{
		name: "cocker spaniel, English cocker spaniel, cocker",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02102318.jpg",
	},
	{
		name: "Sussex spaniel",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02102480.jpg",
	},
	{
		name: "Irish water spaniel",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02102973.jpg",
	},
	{
		name: "kuvasz",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02104029.jpg",
	},
	{
		name: "schipperke",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02104365.jpg",
	},
	{
		name: "groenendael",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02105056.jpg",
	},
	{
		name: "malinois",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02105162.jpg",
	},
	{
		name: "briard",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02105251.jpg",
	},
	{
		name: "kelpie",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02105412.jpg",
	},
	{
		name: "komondor",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02105505.jpg",
	},
	{
		name: "Old English sheepdog, bobtail",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02105641.jpg",
	},
	{
		name: "Shetland sheepdog, Shetland sheep dog, Shetland",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02105855.jpg",
	},
	{
		name: "collie",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02106030.jpg",
	},
	{
		name: "Border collie",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02106166.jpg",
	},
	{
		name: "Bouvier des Flandres, Bouviers des Flandres",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02106382.jpg",
	},
	{
		name: "Rottweiler",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02106550.jpg",
	},
	{
		name: "German shepherd, German shepherd dog, German police dog, alsatian",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02106662.jpg",
	},
	{
		name: "Doberman, Doberman pinscher",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02107142.jpg",
	},
	{
		name: "miniature pinscher",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02107312.jpg",
	},
	{
		name: "Greater Swiss Mountain dog",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02107574.jpg",
	},
	{
		name: "Bernese mountain dog",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02107683.jpg",
	},
	{
		name: "Appenzeller",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02107908.jpg",
	},
	{
		name: "EntleBucher",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02108000.jpg",
	},
	{
		name: "boxer",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02108089.jpg",
	},
	{
		name: "bull mastiff",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02108422.jpg",
	},
	{
		name: "Tibetan mastiff",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02108551.jpg",
	},
	{
		name: "French bulldog",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02108915.jpg",
	},
	{
		name: "Great Dane",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02109047.jpg",
	},
	{
		name: "Saint Bernard, St Bernard",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02109525.jpg",
	},
	{
		name: "Eskimo dog, husky",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02109961.jpg",
	},
	{
		name: "malamute, malemute, Alaskan malamute",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02110063.jpg",
	},
	{
		name: "Siberian husky",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02110185.jpg",
	},
	{
		name: "dalmatian, coach dog, carriage dog",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02110341.jpg",
	},
	{
		name: "affenpinscher, monkey pinscher, monkey dog",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02110627.jpg",
	},
	{
		name: "basenji",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02110806.jpg",
	},
	{
		name: "pug, pug-dog",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02110958.jpg",
	},
	{
		name: "Leonberg",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02111129.jpg",
	},
	{
		name: "Newfoundland, Newfoundland dog",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02111277.jpg",
	},
	{
		name: "Great Pyrenees",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02111500.jpg",
	},
	{
		name: "Samoyed, Samoyede",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02111889.jpg",
	},
	{
		name: "Pomeranian",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02112018.jpg",
	},
	{
		name: "chow, chow chow",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02112137.jpg",
	},
	{
		name: "keeshond",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02112350.jpg",
	},
	{
		name: "Brabancon griffon",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02112706.jpg",
	},
	{
		name: "Pembroke, Pembroke Welsh corgi",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02113023.jpg",
	},
	{
		name: "Cardigan, Cardigan Welsh corgi",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02113186.jpg",
	},
	{
		name: "toy poodle",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02113624.jpg",
	},
	{
		name: "miniature poodle",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02113712.jpg",
	},
	{
		name: "standard poodle",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02113799.jpg",
	},
	{
		name: "Mexican hairless",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02113978.jpg",
	},
	{
		name: "timber wolf, grey wolf, gray wolf, Canis lupus",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02114367.jpg",
	},
	{
		name: "white wolf, Arctic wolf, Canis lupus tundrarum",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02114548.jpg",
	},
	{
		name: "red wolf, maned wolf, Canis rufus, Canis niger",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02114712.jpg",
	},
	{
		name: "coyote, prairie wolf, brush wolf, Canis latrans",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02114855.jpg",
	},
	{
		name: "dingo, warrigal, warragal, Canis dingo",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02115641.jpg",
	},
	{
		name: "dhole, Cuon alpinus",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02115913.jpg",
	},
	{
		name: "African hunting dog, hyena dog, Cape hunting dog, Lycaon pictus",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02116738.jpg",
	},
	{
		name: "hyena, hyaena",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02117135.jpg",
	},
	{
		name: "red fox, Vulpes vulpes",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02119022.jpg",
	},
	{
		name: "kit fox, Vulpes macrotis",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02119789.jpg",
	},
	{
		name: "Arctic fox, white fox, Alopex lagopus",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02120079.jpg",
	},
	{
		name: "grey fox, gray fox, Urocyon cinereoargenteus",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02120505.jpg",
	},
	{
		name: "tabby, tabby cat",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02123045.jpg",
	},
	{
		name: "tiger cat",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02123159.jpg",
	},
	{
		name: "Persian cat",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02123394.jpg",
	},
	{
		name: "Siamese cat, Siamese",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02123597.jpg",
	},
	{
		name: "Egyptian cat",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02124075.jpg",
	},
	{
		name: "cougar, puma, catamount, mountain lion, painter, panther, Felis concolor",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02125311.jpg",
	},
	{
		name: "lynx, catamount",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02127052.jpg",
	},
	{
		name: "leopard, Panthera pardus",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02128385.jpg",
	},
	{
		name: "snow leopard, ounce, Panthera uncia",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02128757.jpg",
	},
	{
		name: "jaguar, panther, Panthera onca, Felis onca",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02128925.jpg",
	},
	{
		name: "lion, king of beasts, Panthera leo",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02129165.jpg",
	},
	{
		name: "tiger, Panthera tigris",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02129604.jpg",
	},
	{
		name: "cheetah, chetah, Acinonyx jubatus",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02130308.jpg",
	},
	{
		name: "brown bear, bruin, Ursus arctos",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02132136.jpg",
	},
	{
		name: "American black bear, black bear, Ursus americanus, Euarctos americanus",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02133161.jpg",
	},
	{
		name: "ice bear, polar bear, Ursus Maritimus, Thalarctos maritimus",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02134084.jpg",
	},
	{
		name: "sloth bear, Melursus ursinus, Ursus ursinus",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02134418.jpg",
	},
	{
		name: "mongoose",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02137549.jpg",
	},
	{
		name: "meerkat, mierkat",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02138441.jpg",
	},
	{
		name: "wood rabbit, cottontail, cottontail rabbit",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02325366.jpg",
	},
	{
		name: "hare",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02326432.jpg",
	},
	{
		name: "Angora, Angora rabbit",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02328150.jpg",
	},
	{
		name: "hamster",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02342885.jpg",
	},
	{
		name: "porcupine, hedgehog",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02346627.jpg",
	},
	{
		name: "fox squirrel, eastern fox squirrel, Sciurus niger",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02356798.jpg",
	},
	{
		name: "marmot",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02361337.jpg",
	},
	{
		name: "beaver",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02363005.jpg",
	},
	{
		name: "guinea pig, Cavia cobaya",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02364673.jpg",
	},
	{
		name: "sorrel",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02389026.jpg",
	},
	{
		name: "zebra",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02391049.jpg",
	},
	{
		name: "hog, pig, grunter, squealer, Sus scrofa",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02395406.jpg",
	},
	{
		name: "wild boar, boar, Sus scrofa",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02396427.jpg",
	},
	{
		name: "warthog",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02397096.jpg",
	},
	{
		name: "hippopotamus, hippo, river horse, Hippopotamus amphibius",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02398521.jpg",
	},
	{
		name: "ox",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02403003.jpg",
	},
	{
		name: "water buffalo, water ox, Asiatic buffalo, Bubalus bubalis",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02408429.jpg",
	},
	{
		name: "bison",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02410509.jpg",
	},
	{
		name: "ram, tup",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02412080.jpg",
	},
	{
		name: "bighorn, bighorn sheep, cimarron, Rocky Mountain bighorn, Rocky Mountain sheep, Ovis canadensis",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02415577.jpg",
	},
	{
		name: "ibex, Capra ibex",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02417914.jpg",
	},
	{
		name: "hartebeest",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02422106.jpg",
	},
	{
		name: "impala, Aepyceros melampus",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02422699.jpg",
	},
	{
		name: "gazelle",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02423022.jpg",
	},
	{
		name: "Arabian camel, dromedary, Camelus dromedarius",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02437312.jpg",
	},
	{
		name: "llama",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02437616.jpg",
	},
	{
		name: "weasel",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02441942.jpg",
	},
	{
		name: "mink",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02442845.jpg",
	},
	{
		name: "polecat, fitch, foulmart, foumart, Mustela putorius",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02443114.jpg",
	},
	{
		name: "black-footed ferret, ferret, Mustela nigripes",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02443484.jpg",
	},
	{
		name: "otter",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02444819.jpg",
	},
	{
		name: "skunk, polecat, wood pussy",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02445715.jpg",
	},
	{
		name: "badger",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02447366.jpg",
	},
	{
		name: "armadillo",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02454379.jpg",
	},
	{
		name: "three-toed sloth, ai, Bradypus tridactylus",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02457408.jpg",
	},
	{
		name: "orangutan, orang, orangutang, Pongo pygmaeus",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02480495.jpg",
	},
	{
		name: "gorilla, Gorilla gorilla",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02480855.jpg",
	},
	{
		name: "chimpanzee, chimp, Pan troglodytes",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02481823.jpg",
	},
	{
		name: "gibbon, Hylobates lar",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02483362.jpg",
	},
	{
		name: "siamang, Hylobates syndactylus, Symphalangus syndactylus",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02483708.jpg",
	},
	{
		name: "guenon, guenon monkey",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02484975.jpg",
	},
	{
		name: "patas, hussar monkey, Erythrocebus patas",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02486261.jpg",
	},
	{
		name: "baboon",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02486410.jpg",
	},
	{
		name: "macaque",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02487347.jpg",
	},
	{
		name: "langur",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02488291.jpg",
	},
	{
		name: "colobus, colobus monkey",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02488702.jpg",
	},
	{
		name: "proboscis monkey, Nasalis larvatus",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02489166.jpg",
	},
	{
		name: "marmoset",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02490219.jpg",
	},
	{
		name: "capuchin, ringtail, Cebus capucinus",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02492035.jpg",
	},
	{
		name: "howler monkey, howler",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02492660.jpg",
	},
	{
		name: "titi, titi monkey",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02493509.jpg",
	},
	{
		name: "spider monkey, Ateles geoffroyi",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02493793.jpg",
	},
	{
		name: "squirrel monkey, Saimiri sciureus",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02494079.jpg",
	},
	{
		name: "Madagascar cat, ring-tailed lemur, Lemur catta",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02497673.jpg",
	},
	{
		name: "indri, indris, Indri indri, Indri brevicaudatus",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02500267.jpg",
	},
	{
		name: "Indian elephant, Elephas maximus",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02504013.jpg",
	},
	{
		name: "African elephant, Loxodonta africana",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02504458.jpg",
	},
	{
		name: "lesser panda, red panda, panda, bear cat, cat bear, Ailurus fulgens",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02509815.jpg",
	},
	{
		name: "giant panda, panda, panda bear, coon bear, Ailuropoda melanoleuca",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02510455.jpg",
	},
];

const itemsPerLoad = 20; // Number of items to load per batch
let loadedItems = 0; // Tracks how many items we've loaded
let isThrottled = false; // For scroll throttling
let searchTimeout; // For search debouncing

// DOM Elements
const grid = document.getElementById("categoryGrid");
const searchInput = document.getElementById("search");
const popup = document.getElementById("popup");

// Filters categories based on search input
let isSearchActive = false; // Track if we're in "search mode"

function filterCategories() {
	const searchTerm = searchInput.value.toLowerCase().trim();
	isSearchActive = searchTerm.length > 0;

	// Case 1: Empty search → Reset to lazy loading
	if (!isSearchActive) {
		grid.innerHTML = ""; // Clear existing results
		loadedItems = 0; // Reset counter
		loadMore(); // Load first batch
		return;
	}

	// Case 2: Non-empty search → Filter ALL items
	const matchingItems = categories.filter((category) =>
		category.name.toLowerCase().includes(searchTerm)
	);

	// Clear current grid
	grid.innerHTML = "";

	// Show "No results" or matching items
	if (matchingItems.length === 0) {
		grid.innerHTML = `<p class="no-results">No images found for "${searchTerm}"</p>`;
	} else {
		matchingItems.forEach((category) => {
			const card = document.createElement("div");
			card.className = "card";
			card.innerHTML = `
                <img src="${category.image}" alt="${category.name}" loading="lazy">
                <p>${category.name}</p>
            `;
			card.addEventListener("mouseenter", () =>
				showPopup(category.image, category.name)
			);
			card.addEventListener("mouseleave", hidePopup);
			grid.appendChild(card);
		});
	}
}

// ======================
// Main Functions
// ======================

// Loads more items into the grid
function loadMore() {
	if (isSearchActive || loadedItems >= categories.length) {
		// All items loaded - remove scroll listener if desired
		return;
	}

	// Create a document fragment for better performance
	const fragment = document.createDocumentFragment();

	// Get next batch of items
	const nextItems = categories.slice(loadedItems, loadedItems + itemsPerLoad);

	nextItems.forEach((category) => {
		const card = document.createElement("div");
		card.className = "card";
		card.innerHTML = `
            <img src="${category.image}" alt="${category.name}" loading="lazy">
            <p>${category.name}</p>
        `;

		// Event listeners for popup
		card.addEventListener("click", () =>
			showPopup(category.image, category.name)
		);
		document.getElementById("closePopup").addEventListener("click", hidePopup);

		fragment.appendChild(card);
	});

	grid.appendChild(fragment);
	loadedItems += itemsPerLoad;

	// Preload next batch in background
	preloadNextBatch();
}

// Preloads the next batch of images silently
function preloadNextBatch() {
	const nextBatchStart = loadedItems;
	const nextBatchEnd = Math.min(loadedItems + itemsPerLoad, categories.length);

	for (let i = nextBatchStart; i < nextBatchEnd; i++) {
		const img = new Image();
		img.src = categories[i].image;
	}
}
// UI Functions

function showPopup(image, name) {
	const cardRect = event.currentTarget.getBoundingClientRect();
	const scrollTop = window.scrollY;
	document.getElementById("popupImage").src = image;
	document.getElementById("popupText").textContent = name;
	popup.classList.remove("hidden");
	const popupTop = cardRect.top + scrollTop;
	popup.style.top = `${popupTop}px`;
}

function hidePopup() {
	popup.classList.add("hidden");
}

// Event Listeners

// Modern Intersection Observer approach
const observer = new IntersectionObserver(
	(entries) => {
		if (entries[0].isIntersecting) {
			loadMore();
		}
	},
	{ threshold: 0.1 }
);

// Observe a sentinel element at the bottom of the page
const sentinel = document.createElement("div");
sentinel.className = "sentinel";
document.body.appendChild(sentinel);
observer.observe(sentinel);

// Debounced search input
searchInput.addEventListener("input", () => {
	clearTimeout(searchTimeout);
	searchTimeout = setTimeout(filterCategories, 300);
});

// Initial Load, load first batch immediately
loadMore();
