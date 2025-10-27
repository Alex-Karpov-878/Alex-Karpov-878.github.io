#!/bin/bash

# DevShop Pro Website Development Script

echo "🚀 DevShop Pro Website Setup"
echo "=============================="

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version 18+ is required. Current version: $(node -v)"
    exit 1
fi

echo "✅ Node.js $(node -v) detected"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully"
else
    echo "❌ Failed to install dependencies"
    exit 1
fi

# Build the project
echo "🔨 Building the project..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Project built successfully"
    echo ""
    echo "🎉 Setup complete! You can now:"
    echo "   • Run 'npm run dev' to start the development server"
    echo "   • Run 'npm run build' to build for production"
    echo "   • Push to main branch to deploy to GitHub Pages"
else
    echo "❌ Build failed"
    exit 1
fi
