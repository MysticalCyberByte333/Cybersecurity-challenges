class ImageResizer {
    constructor() {
        this.originalImage = null;
        this.currentImage = null;
        this.originalWidth = 0;
        this.originalHeight = 0;
        this.canvas = null;
        this.ctx = null;
        
        this.initializeElements();
        this.setupEventListeners();
    }

    initializeElements() {
        this.uploadArea = document.getElementById('uploadArea');
        this.fileInput = document.getElementById('fileInput');
        this.controlsSection = document.getElementById('controlsSection');
        this.previewSection = document.getElementById('previewSection');
        this.canvas = document.getElementById('previewCanvas');
        this.ctx = this.canvas.getContext('2d');
        
        // Controls
        this.widthInput = document.getElementById('width');
        this.heightInput = document.getElementById('height');
        this.maintainAspectCheckbox = document.getElementById('maintainAspect');
        this.removeBackgroundBtn = document.getElementById('removeBackground');
        this.processingStatus = document.getElementById('processingStatus');
        this.formatSelect = document.getElementById('formatSelect');
        this.qualitySlider = document.getElementById('qualitySlider');
        this.qualityValue = document.getElementById('qualityValue');
        this.saveImageBtn = document.getElementById('saveImage');
        
        // Info displays
        this.originalSizeSpan = document.getElementById('originalSize');
        this.currentSizeSpan = document.getElementById('currentSize');
    }

    setupEventListeners() {
        // File upload
        this.uploadArea.addEventListener('click', () => this.fileInput.click());
        this.uploadArea.addEventListener('dragover', this.handleDragOver.bind(this));
        this.uploadArea.addEventListener('dragleave', this.handleDragLeave.bind(this));
        this.uploadArea.addEventListener('drop', this.handleDrop.bind(this));
        this.fileInput.addEventListener('change', this.handleFileSelect.bind(this));

        // Resize controls
        this.widthInput.addEventListener('input', this.handleResize.bind(this));
        this.heightInput.addEventListener('input', this.handleResize.bind(this));
        this.maintainAspectCheckbox.addEventListener('change', this.handleResize.bind(this));

        // Background removal
        this.removeBackgroundBtn.addEventListener('click', this.removeBackground.bind(this));

        // Save controls
        this.qualitySlider.addEventListener('input', (e) => {
            this.qualityValue.textContent = `${e.target.value}%`;
        });
        this.saveImageBtn.addEventListener('click', this.saveImage.bind(this));
    }

    handleDragOver(e) {
        e.preventDefault();
        this.uploadArea.classList.add('dragover');
    }

    handleDragLeave(e) {
        e.preventDefault();
        this.uploadArea.classList.remove('dragover');
    }

    handleDrop(e) {
        e.preventDefault();
        this.uploadArea.classList.remove('dragover');
        
        const files = e.dataTransfer.files;
        if (files.length > 0) {
            this.loadImage(files[0]);
        }
    }

    handleFileSelect(e) {
        const file = e.target.files[0];
        if (file) {
            this.loadImage(file);
        }
    }

    loadImage(file) {
        if (!file.type.startsWith('image/')) {
            this.showMessage('Please select a valid image file.', 'error');
            return;
        }

        const reader = new FileReader();
        reader.onload = (e) => {
            const img = new Image();
            img.onload = () => {
                this.originalImage = img;
                this.originalWidth = img.width;
                this.originalHeight = img.height;
                
                // Set initial dimensions
                this.widthInput.value = img.width;
                this.heightInput.value = img.height;
                
                // Update display
                this.updateImageInfo();
                this.showControls();
                this.renderImage();
                
                this.showMessage('Image loaded successfully!', 'success');
            };
            img.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }

    handleResize() {
        if (!this.originalImage) return;

        let newWidth = parseInt(this.widthInput.value) || this.originalWidth;
        let newHeight = parseInt(this.heightInput.value) || this.originalHeight;

        if (this.maintainAspectCheckbox.checked) {
            const aspectRatio = this.originalWidth / this.originalHeight;
            
            if (this.widthInput.value && !this.heightInput.value) {
                // Only width is set
                newHeight = Math.round(newWidth / aspectRatio);
                this.heightInput.value = newHeight;
            } else if (this.heightInput.value && !this.widthInput.value) {
                // Only height is set
                newWidth = Math.round(newHeight * aspectRatio);
                this.widthInput.value = newWidth;
            } else if (this.widthInput.value && this.heightInput.value) {
                // Both are set, prioritize width
                newHeight = Math.round(newWidth / aspectRatio);
                this.heightInput.value = newHeight;
            }
        }

        this.renderImage();
        this.updateImageInfo();
    }

    async removeBackground() {
        if (!this.originalImage) {
            this.showMessage('Please load an image first.', 'error');
            return;
        }

        this.processingStatus.style.display = 'flex';
        this.removeBackgroundBtn.disabled = true;

        try {
            // Create a temporary canvas for processing
            const tempCanvas = document.createElement('canvas');
            const tempCtx = tempCanvas.getContext('2d');
            
            // Set canvas size to current dimensions
            tempCanvas.width = parseInt(this.widthInput.value) || this.originalWidth;
            tempCanvas.height = parseInt(this.heightInput.value) || this.originalHeight;
            
            // Draw the current image
            tempCtx.drawImage(this.originalImage, 0, 0, tempCanvas.width, tempCanvas.height);
            
            // Get image data for processing
            const imageData = tempCtx.getImageData(0, 0, tempCanvas.width, tempCanvas.height);
            const data = imageData.data;
            
            // Simple background removal algorithm (edge detection + flood fill)
            // This is a basic implementation - for production, consider using AI services
            const processedData = this.processBackgroundRemoval(data, tempCanvas.width, tempCanvas.height);
            
            // Create new image data
            const newImageData = new ImageData(processedData, tempCanvas.width, tempCanvas.height);
            tempCtx.putImageData(newImageData, 0, 0);
            
            // Create new image from processed canvas
            const processedImg = new Image();
            processedImg.onload = () => {
                this.originalImage = processedImg;
                this.renderImage();
                this.showMessage('Background removed successfully!', 'success');
            };
            processedImg.src = tempCanvas.toDataURL();
            
        } catch (error) {
            console.error('Background removal error:', error);
            this.showMessage('Background removal failed. Please try again.', 'error');
        } finally {
            this.processingStatus.style.display = 'none';
            this.removeBackgroundBtn.disabled = false;
        }
    }

    processBackgroundRemoval(data, width, height) {
        // Create a copy of the data
        const newData = new Uint8ClampedArray(data);
        
        // Simple edge detection and background removal
        // This is a basic implementation - for better results, use AI services like Remove.bg API
        
        // Find the most common color (likely background)
        const colorCount = {};
        for (let i = 0; i < data.length; i += 4) {
            const r = data[i];
            const g = data[i + 1];
            const b = data[i + 2];
            const key = `${r},${g},${b}`;
            colorCount[key] = (colorCount[key] || 0) + 1;
        }
        
        // Find the most common color
        let maxCount = 0;
        let backgroundColor = null;
        for (const [color, count] of Object.entries(colorCount)) {
            if (count > maxCount) {
                maxCount = count;
                backgroundColor = color.split(',').map(Number);
            }
        }
        
        // Remove background by making it transparent
        const tolerance = 30;
        for (let i = 0; i < data.length; i += 4) {
            const r = data[i];
            const g = data[i + 1];
            const b = data[i + 2];
            
            const distance = Math.sqrt(
                Math.pow(r - backgroundColor[0], 2) +
                Math.pow(g - backgroundColor[1], 2) +
                Math.pow(b - backgroundColor[2], 2)
            );
            
            if (distance < tolerance) {
                newData[i + 3] = 0; // Make transparent
            }
        }
        
        return newData;
    }

    renderImage() {
        if (!this.originalImage) return;

        const width = parseInt(this.widthInput.value) || this.originalWidth;
        const height = parseInt(this.heightInput.value) || this.originalHeight;

        // Set canvas size
        this.canvas.width = width;
        this.canvas.height = height;

        // Clear canvas
        this.ctx.clearRect(0, 0, width, height);

        // Draw image
        this.ctx.drawImage(this.originalImage, 0, 0, width, height);
    }

    saveImage() {
        if (!this.originalImage) {
            this.showMessage('Please load an image first.', 'error');
            return;
        }

        const format = this.formatSelect.value;
        const quality = parseInt(this.qualitySlider.value) / 100;

        // Create a temporary canvas for saving
        const tempCanvas = document.createElement('canvas');
        const tempCtx = tempCanvas.getContext('2d');
        
        const width = parseInt(this.widthInput.value) || this.originalWidth;
        const height = parseInt(this.heightInput.value) || this.originalHeight;
        
        tempCanvas.width = width;
        tempCanvas.height = height;
        tempCtx.drawImage(this.originalImage, 0, 0, width, height);

        // Convert to blob and download
        tempCanvas.toBlob((blob) => {
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `resized_image.${format}`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
            
            this.showMessage('Image saved successfully!', 'success');
        }, `image/${format}`, quality);
    }

    updateImageInfo() {
        if (!this.originalImage) return;

        const currentWidth = parseInt(this.widthInput.value) || this.originalWidth;
        const currentHeight = parseInt(this.heightInput.value) || this.originalHeight;

        this.originalSizeSpan.textContent = `${this.originalWidth} × ${this.originalHeight}`;
        this.currentSizeSpan.textContent = `${currentWidth} × ${currentHeight}`;
    }

    showControls() {
        this.controlsSection.style.display = 'block';
        this.previewSection.style.display = 'block';
    }

    showMessage(message, type) {
        // Remove existing messages
        const existingMessages = document.querySelectorAll('.message');
        existingMessages.forEach(msg => msg.remove());

        // Create new message
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${type}`;
        messageDiv.textContent = message;

        // Insert after header
        const header = document.querySelector('header');
        header.parentNode.insertBefore(messageDiv, header.nextSibling);

        // Auto-remove after 5 seconds
        setTimeout(() => {
            if (messageDiv.parentNode) {
                messageDiv.remove();
            }
        }, 5000);
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ImageResizer();
});
