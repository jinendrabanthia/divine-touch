# Divine Touch — Image Assets Guide

To update the images on the website, simply create folders inside the `public/images/` directory and add your real images there. 

Here is a simple guide on what should be kept where:

## 1. Global & Home Page
- **Website Logo:** Save as `public/images/logo.png` *(Recommended: Square 200x200px)*
- **Main Hero Image:** Save as `public/images/hero/main.jpg` *(Recommended: Landscape 1200x900px)*

## 2. Product Categories (Home Page)
*These are the icons used on the home page for different product types. They should be perfectly square (1:1 ratio) so they crop nicely into circles.*
- **Where to put them:** `public/images/categories/`
- **File Names:** `massage-chairs.jpg`, `leg-massagers.jpg`, `scalp-massagers.jpg`, `other.jpg`

## 3. Products
*Create a folder for each product model. Inside each folder, place 3 images: `front.jpg`, `side.jpg`, and `detail.jpg`. They should be perfectly square (1:1 ratio).*
- **Where to put them:** `public/images/products/<model-name>/`
- **Examples:** 
  - `public/images/products/amb-007-b/front.jpg`
  - `public/images/products/am-006-b/side.jpg`
  - `public/images/products/am-009/detail.jpg`

## 4. Testimonials (Customer Reviews)
*These are the photos of the customers for the reviews page. They should be perfectly square (1:1 ratio).*
- **Where to put them:** `public/images/testimonials/`
- **File Names:** `customer-1.jpg`, `customer-2.jpg`, `customer-3.jpg`, etc.

## 5. About Page
*The main image showing your brand's story or team.*
- **Where to put it:** `public/images/about/brand-story.jpg` *(Recommended: Landscape 800x600px)*

---

### How to link them to the website?
Once you save an image in the correct folder, you need to tell the website code where it is.
1. Open the data file: `src/data/products.ts` (for products) or `src/components/home/TestimonialsSection.tsx` (for reviews).
2. Find the image property (it currently says something like `"Placeholder"`).
3. Change it to the path of your new image, starting with `/images/...`
4. **Example:** `image: "/images/products/am-009/front.jpg"`
