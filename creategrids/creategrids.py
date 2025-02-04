import os
from PIL import Image

map_fname='C:\\Users\\Jai K\\Work\\Georgia Tech\\website\\text\\LOC_synset_mapping.txt'
synset_arr = []
with open(map_fname, 'r') as f:
    for line in f:
        synset_id_s = line.split()[0]
        synset_arr.append(synset_id_s[0:])
val_images = os.listdir("C:\\Users\\Jai K\\Work\\Georgia Tech\\Research\\val_images")

def create_grid(synset):
    output_folder = "C:\\Users\\Jai K\\Work\\Georgia Tech\\website\\creategrids\\grids"
    os.makedirs(output_folder, exist_ok=True)

    output_image = os.path.join(output_folder, synset+".jpg")
    initial_path = "C:\\Users\\Jai K\\Work\\Georgia Tech\\Research\\val_images\\"
    count = 0
    grid25 = []
    for img in val_images:
        if count == 25:
            break
        if(synset in img):
            grid25.append(img)
            count = count + 1
    grid_size = (5, 5)  # 5x5 grid
    thumb_size = (100, 100)  # Resize images

    grid_width = grid_size[0] * thumb_size[0]
    grid_height = grid_size[1] * thumb_size[1]
    grid_image = Image.new('RGB', (grid_width, grid_height), (255, 255, 255))
    for index, img_path in enumerate(grid25):
        img = Image.open(initial_path+img_path)
        img = img.resize(thumb_size)
        x = (index % grid_size[0]) * thumb_size[0]
        y = (index // grid_size[0]) * thumb_size[1]
        grid_image.paste(img, (x, y))
    grid_image.save(output_image) 

for synset in synset_arr:
    create_grid(synset)

