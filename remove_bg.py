from PIL import Image
import sys

def remove_white_bg(input_path, output_path, threshold=230):
    img = Image.open(input_path).convert("RGBA")
    data = img.getdata()
    
    new_data = []
    for item in data:
        # If the pixel is close to white (all RGB values > threshold), make it transparent
        if item[0] > threshold and item[1] > threshold and item[2] > threshold:
            new_data.append((255, 255, 255, 0))
        else:
            new_data.append(item)
            
    img.putdata(new_data)
    img.save(output_path, "PNG")

remove_white_bg("public/images/arri_sxu_replacement_handle.png", "public/images/arri_sxu_replacement_handle_nobg.png")
