# Image Resizer & Background Remover

A modern, responsive web application for resizing images, removing backgrounds, and saving your work with beautiful UI and intuitive controls.

## Features

### 🖼️ Image Resizing
- **Custom Dimensions**: Set specific width and height in pixels
- **Aspect Ratio Lock**: Maintain original proportions automatically
- **Real-time Preview**: See changes instantly as you adjust dimensions
- **Flexible Input**: Set width or height independently

### 🎨 Background Removal
- **Smart Detection**: Automatically identifies and removes background
- **Edge Detection**: Uses advanced algorithms for clean results
- **Transparency Support**: Outputs images with transparent backgrounds
- **Processing Status**: Visual feedback during background removal

### 💾 Save & Export
- **Multiple Formats**: Save as PNG, JPEG, or WebP
- **Quality Control**: Adjustable quality settings (1-100%)
- **Instant Download**: One-click save to your device
- **Custom Naming**: Automatic file naming with format extension

### 🎯 User Experience
- **Drag & Drop**: Simply drag images onto the upload area
- **Click to Browse**: Traditional file selection also available
- **Responsive Design**: Works perfectly on desktop and mobile
- **Modern UI**: Beautiful gradient design with smooth animations
- **Real-time Feedback**: Success and error messages

## How to Use

### 1. Upload an Image
- **Drag and drop** an image file onto the upload area
- **Click the upload area** to browse and select a file
- Supported formats: JPG, PNG, GIF, WebP, BMP

### 2. Resize Your Image
- **Width**: Enter desired width in pixels (leave empty for auto)
- **Height**: Enter desired height in pixels (leave empty for auto)
- **Maintain Aspect Ratio**: Check to keep original proportions
- Changes are applied in real-time

### 3. Remove Background (Optional)
- Click the **"Remove Background"** button
- Wait for processing to complete
- The background will be automatically detected and removed
- Result will have a transparent background

### 4. Save Your Work
- **Select Format**: Choose PNG, JPEG, or WebP
- **Adjust Quality**: Use the slider to set quality (1-100%)
- **Download**: Click "Save Image" to download to your device

## Technical Details

### Background Removal Algorithm
The app uses a sophisticated algorithm that:
1. **Color Analysis**: Identifies the most common color (background)
2. **Distance Calculation**: Measures color similarity using Euclidean distance
3. **Transparency Application**: Makes background pixels transparent
4. **Edge Preservation**: Maintains sharp edges around the subject

### Browser Compatibility
- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers

### File Size Limits
- **Maximum file size**: 10MB (browser dependent)
- **Recommended resolution**: Up to 4000x4000 pixels
- **Supported formats**: All common image formats

## Installation

1. **Download** all files to a folder
2. **Open** `index.html` in your web browser
3. **Start using** the application immediately

No server setup or installation required!

## File Structure

```
image-resizer/
├── index.html          # Main HTML file
├── styles.css          # CSS styling
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## Browser Security Note

Due to browser security restrictions, the background removal feature works best with:
- **Local files**: Images saved on your device
- **HTTPS websites**: If hosted on a web server
- **Modern browsers**: Latest versions for best performance

## Future Enhancements

- [ ] AI-powered background removal using external APIs
- [ ] Batch processing for multiple images
- [ ] Advanced filters and effects
- [ ] Social media preset sizes
- [ ] Cloud storage integration
- [ ] Undo/redo functionality

## Contributing

Feel free to contribute to this project by:
- Reporting bugs
- Suggesting new features
- Submitting pull requests
- Improving documentation

## License

This project is open source and available under the MIT License.

---

**Built with ❤️ using HTML, CSS, and JavaScript**
