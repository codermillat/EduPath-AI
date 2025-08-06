# EduConnect - Study Abroad Consultancy Platform

EduConnect is a modern, AI-powered platform designed to help students navigate their international education journey. Built with React, TypeScript, and Tailwind CSS, it offers personalized university recommendations and comprehensive study-abroad guidance.

## 🌟 Features

- **AI-Powered Recommendations**: Smart university and course matching using Google's Gemini AI
- **Interactive UI**: Beautiful, responsive design with smooth animations
- **Personalized Dashboard**: Track applications and get tailored recommendations
- **Real-time Support**: AI chatbot for instant assistance
- **Comprehensive Resources**: Information about destinations, universities, and programs
- **University Search**: Quick search functionality for universities, programs, and countries

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/codermillat/EduConnect.git

# Navigate to the project directory
cd EduConnect

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Add your Gemini API key to .env file
# VITE_GEMINI_API_KEY=your_api_key_here

# Start the development server
npm run dev
```

## 🛠️ Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Vite
- **AI Integration**: Google Gemini AI
- **Type Checking**: TypeScript
- **Linting**: ESLint
- **Code Formatting**: Prettier

Please visit our [EduConnect](https://edupath.netlify.app/) website.

## 🏗️ Project Structure

```
educonnect/
├── src/
│   ├── components/
│   │   ├── AiPreview.tsx        # AI recommendation component
│   │   ├── AiService.ts         # Gemini AI integration
│   │   ├── Contact.tsx          # Contact form component
│   │   ├── Destinations.tsx     # Study destinations
│   │   ├── Hero.tsx            # Landing hero section
│   │   ├── Navbar.tsx          # Navigation component
│   │   ├── RecommendationCard.tsx # University card component
│   │   ├── SearchUniversity.tsx   # University search
│   │   ├── Services.tsx        # Services section
│   │   └── Testimonials.tsx    # Student testimonials
│   ├── App.tsx                 # Main application component
│   └── main.tsx               # Application entry point
├── public/                    # Static assets
└── ...config files
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_GEMINI_API_KEY=your_gemini_api_key_here
```

### AI Integration

The project uses Google's Gemini AI for university recommendations. To set up:

1. Get an API key from [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Add the API key to your `.env` file
3. The AI service is configured in `src/components/AiService.ts`

## 🌐 Deployment

### Prerequisites

- Node.js 18 or higher
- npm 7 or higher
- Gemini API key

### Building for Production

```bash
# Build the project
npm run build

# Preview production build
npm run preview
```

### Deploying to Netlify

1. **Build Command**: `npm run build`
2. **Publish Directory**: `dist`
3. **Environment Variables**: Add `VITE_GEMINI_API_KEY` in Netlify settings

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Please read our [Contributing Guidelines](CONTRIBUTING.md) for details.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Google Gemini AI for powering our recommendations
- All contributors who have helped shape EduConnect
- The amazing open-source community
- Universities and educational institutions for their support

## 📞 Support

For support:
- Email: contact@millat.tech
- Create an issue on GitHub

---

<p align="center">Made with ❤️ for international students</p>
