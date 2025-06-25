# Brain Tumor Detection Backend

## Overview

This is a Next.js backend implementation for the Brain Tumor Detection application. It provides API endpoints that integrate with a TensorFlow.js model to analyze brain scan images and detect tumors.

## Features

- Image upload and analysis API
- TensorFlow.js integration with the model.h5 file
- Health check endpoint for monitoring
- CORS support for cross-origin requests
- Error handling and logging

## API Endpoints

### 1. Predict API

**Endpoint:** `/api/predict`

- **POST**: Upload an image for tumor detection

  - Request: `multipart/form-data` with an `image` field
  - Response: Prediction results including tumor detection status and confidence level

- **GET**: Check prediction API status
  - Response: API status and model loading information

### 2. Health API

**Endpoint:** `/api/health`

- **GET**: Check backend health status
  - Response: Backend status, model information, and version details

## Setup Instructions

1. Ensure the model file is in the correct location:

   ```
   models/model.h5
   ```

2. Install the required dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. The API will be available at:
   - http://localhost:3000/api/predict
   - http://localhost:3000/api/health

## Implementation Details

### Directory Structure

```
src/app/api/
├── health/
│   └── route.js       # Health check endpoint
├── predict/
│   └── route.js       # Image prediction endpoint
├── utils/
│   └── modelUtils.js  # Model loading and processing utilities
├── middleware.js      # API middleware for CORS and error handling
└── README.md          # API documentation
```

### Technologies Used

- **Next.js**: For API routes and server-side rendering
- **TensorFlow.js**: For loading and running the ML model
- **Canvas**: For image preprocessing
- **Sharp**: For image manipulation

## Frontend Integration

The frontend already includes an `ImageUploader` component that has been updated to communicate with these API endpoints. When a user uploads an image, it sends a POST request to `/api/predict` and displays the prediction results.

## Error Handling

All API endpoints include comprehensive error handling to provide meaningful error messages and maintain a robust user experience. Errors are logged to the console for debugging purposes.

## Future Improvements

- Add authentication for API endpoints
- Implement rate limiting to prevent abuse
- Add support for different types of medical images
- Improve model accuracy with more training data
