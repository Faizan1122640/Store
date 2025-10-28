# CloudStore - WhatsApp-Powered Online Shopping

A modern, fully functional webstore that connects directly to WhatsApp for seamless ordering experience.

## Features

✨ **Modern & Responsive Design**
- Clean, mobile-first design
- Smooth animations and transitions
- Mobile-friendly hamburger menu

🛍️ **Product Categories**
- Electronics (Smartphones, Laptops, Tablets, Cameras)
- Fashion (T-Shirts, Jeans, Dresses, Jackets)
- Accessories (Bags, Wallets, Belts, Sunglasses)
- Home & Kitchen (Blenders, Coffee Makers, Mixers, Air Fryers)

📱 **Product Detail Pages**
- Click any product card to view detailed information
- Beautiful product detail layout with images and descriptions
- Automatic URL parameter passing for product information
- Responsive design optimized for all devices
- "Back to Store" navigation

💬 **WhatsApp Integration**
- Direct WhatsApp ordering for all products
- Pre-filled order messages
- Floating WhatsApp chat button
- 24/7 customer support via WhatsApp

📱 **Pages Included**
- **Homepage** - Featured products and category sections
- **About Us** - Company story, mission, and team information
- **Contact Us** - Multiple contact methods and FAQ section

## Technical Features

- **SEO Optimized** - Meta tags, structured data, sitemap, robots.txt
- **Fast Loading** - Optimized images, lazy loading, minified assets
- **No Frameworks** - Pure HTML, CSS, and JavaScript
- **Cross-browser Compatible** - Works on all modern browsers
- **Mobile Responsive** - Adapts to all screen sizes

## Files Structure

```
cloudStore/
├── index.html          # Main homepage with product listings
├── product.html        # Product detail page (NEW!)
├── about.html          # About us page
├── contact.html        # Contact us page
├── styles.css          # Complete styling (includes product detail styles)
├── script.js           # Interactive functionality (includes product detail logic)
├── robots.txt          # SEO robots file
├── sitemap.xml         # SEO sitemap
└── README.md           # This file
```

## WhatsApp Configuration

The store is configured to connect to WhatsApp number: **+923157603693**

### Order Message Format
```
Hi! I want to order [Product Name]. Price: $[Price]. Is it available?
```

## Product Detail Functionality

**How it works:**
1. Click any product card on the homepage to view detailed information
2. Product information is passed via URL parameters:
   ```
   product.html?name=ProductName&price=$99&image=image-url&desc=description&category=Category
   ```
3. The product detail page automatically reads these parameters and displays:
   - Large product image
   - Product name and price
   - Detailed description
   - "Order on WhatsApp" button with pre-filled message
   - "Back to Store" button

**URL Parameters:**
- `name` - Product name
- `price` - Product price
- `image` - Product image URL
- `desc` - Product description
- `category` - Product category

## Installation & Setup

1. **Upload Files to Hostinger**
   - Log in to your Hostinger File Manager
   - Upload all files to the public_html directory
   - Ensure the files maintain their structure

2. **Update Domain References**
   - In `sitemap.xml`, replace `https://yourdomain.com` with your actual domain
   - If using a custom domain, update all internal links accordingly
   - WhatsApp number is set to +923157603693 (can be changed if needed)

3. **Test WhatsApp Integration**
   - Click any "Order on WhatsApp" button
   - Verify that WhatsApp opens with correct pre-filled message
   - Test the floating WhatsApp button

## Customization

### Changing WhatsApp Number
1. Open all HTML files (index.html, about.html, contact.html)
2. Replace `+923157603693` with your WhatsApp number
3. Update the pre-filled messages as needed

### Adding New Products
In `index.html`, copy a product card and update:

```html
<div class="product-card">
    <div class="product-image">
        <img src="your-image-url" alt="Product Name">
    </div>
    <div class="product-info">
        <h3 class="product-name">Your Product Name</h3>
        <p class="product-price">$Your Price</p>
        <button class="btn btn-whatsapp" onclick="orderOnWhatsApp('Product Name', '$Price')">
            Order on WhatsApp
        </button>
    </div>
</div>
```

### Updating Colors
In `styles.css`, modify the color variables:
- Primary blue: `#2563eb`
- WhatsApp green: `#25d366`
- Success green: `#10b981`

## Browser Support

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## Performance Optimizations

- Lazy loading for images
- Intersection Observer for animations
- Optimized CSS with hardware acceleration
- Minimal JavaScript footprint
- Semantic HTML5 structure

## SEO Features

- Complete meta tags for all pages
- Structured data markup
- XML sitemap
- Robots.txt file
- Semantic HTML structure
- Fast loading times
- Mobile-friendly design

## Analytics Integration

The JavaScript includes placeholder functions for Google Analytics or other tracking services. Add your tracking code in the `trackEvent()` function.

## Support

For issues or questions:
1. Check the console for JavaScript errors
2. Verify all files are uploaded correctly
3. Ensure WhatsApp links are formatted properly
4. Test on multiple devices and browsers

## License

This project is open source and available under the MIT License.

---

**CloudStore** - Making online shopping simple, one WhatsApp message at a time! 🚀