import "./globals.css"
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import BuilderContextProvider from "@/contexts/BuilderContext";

export default function Layout({ children }) {
    return (
      <html lang="en">
        <body>
          {/* Layout UI */}
          {/* Place children where you want to render a page or nested layout */}
          <main>
            <Header />
            <BuilderContextProvider>
              {children}
            </BuilderContextProvider >
            <Footer />
        </main>
        </body>
      </html>
    )
  }

  
  
