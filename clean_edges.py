import cv2
import numpy as np

img = cv2.imread('public/images/arri_sxu_replacement_handle_nobg.png', cv2.IMREAD_UNCHANGED)

# Create a mask where alpha > 0
alpha = img[:, :, 3]
mask = (alpha > 0).astype(np.uint8) * 255

# Erode the mask slightly to remove the white halo (1-2 pixels)
kernel = np.ones((3,3), np.uint8)
eroded_mask = cv2.erode(mask, kernel, iterations=2)

# Apply a slight blur to the mask to soften edges
blurred_mask = cv2.GaussianBlur(eroded_mask, (5, 5), 0)

# Apply the new mask to the alpha channel
img[:, :, 3] = blurred_mask

cv2.imwrite('public/images/arri_sxu_replacement_handle_nobg.png', img)
